"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// ✅ SAME countryCodes used in CountriesPage
const countryCodes: Record<string, string> = {
  India: "IN", USA: "US", UK: "GB", Canada: "CA", France: "FR", Germany: "DE",
  Brazil: "BR", Japan: "JP", Australia: "AU", "South Korea": "KR", Italy: "IT",
  Spain: "ES", Russia: "RU", Mexico: "MX", "South Africa": "ZA", Argentina: "AR",
  Netherlands: "NL", Sweden: "SE", Norway: "NO", Finland: "FI", Denmark: "DK",
  Poland: "PL", Turkey: "TR", Singapore: "SG", Malaysia: "MY", Thailand: "TH",
  Vietnam: "VN", Indonesia: "ID", Philippines: "PH", Bangladesh: "BD",
  Nepal: "NP", "Sri Lanka": "LK", UAE: "AE", "Saudi Arabia": "SA", Egypt: "EG",
  Kenya: "KE", Nigeria: "NG", Ghana: "GH", Ethiopia: "ET", Morocco: "MA",
  Chile: "CL", Peru: "PE", Colombia: "CO", Venezuela: "VE", "New Zealand": "NZ",
  Israel: "IL", Portugal: "PT", Greece: "GR", Switzerland: "CH", Austria: "AT",
  Belgium: "BE", "Czech Republic": "CZ", Hungary: "HU", Romania: "RO",
  Croatia: "HR", Ireland: "IE", Iceland: "IS", Luxembourg: "LU", Qatar: "QA",
  Oman: "OM", Kuwait: "KW", Jordan: "JO", Lebanon: "LB", Pakistan: "PK",
  Uzbekistan: "UZ", Kazakhstan: "KZ", Mongolia: "MN", Cambodia: "KH", Laos: "LA",
  Myanmar: "MM", Tanzania: "TZ", Uganda: "UG", Zimbabwe: "ZW", Zambia: "ZM",
  Algeria: "DZ", Tunisia: "TN", Paraguay: "PY", Bolivia: "BO", Ecuador: "EC",
  Panama: "PA", "Costa Rica": "CR", Honduras: "HN", "El Salvador": "SV",
  Guatemala: "GT", Cuba: "CU", Jamaica: "JM", "Dominican Republic": "DO",
  Haiti: "HT", "Trinidad and Tobago": "TT", Fiji: "FJ", "Papua New Guinea": "PG",
  Maldives: "MV", Bhutan: "BT", Rwanda: "RW", Namibia: "NA", Botswana: "BW",
  Mozambique: "MZ", Madagascar: "MG", Mauritius: "MU", Brunei: "BN",
  Seychelles: "SC", Malawi: "MW", Burundi: "BI", Georgia: "GE", Armenia: "AM",
  Moldova: "MD", Ukraine: "UA", "North Macedonia": "MK"
}

// ✅ Pull same onboard distribution
const onboardedCountries = Object.keys(countryCodes).slice(0, 80)
const toBeOnboardedCountries = Object.keys(countryCodes).slice(80, 108)

// ✅ Fast lookup sets
const onboardedSet = new Set(onboardedCountries)
const toBeOnboardedSet = new Set(toBeOnboardedCountries)

// ✅ Generate approximate marker coordinates using placeholders
const markers = onboardedCountries.map(name => ({
  name,
  coordinates: [0, 0] // optional: replace with real coords later
}))

export function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full">
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 147 }} className="w-full h-full">
        <ZoomableGroup center={[0, 20]} zoom={1}>

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name

                const fillColor =
                  onboardedSet.has(countryName)
                    ? "#FFD700"        // onboarded yellow
                    : toBeOnboardedSet.has(countryName)
                      ? "#E26EE5"      // not onboarded pink
                      : "#3B2A5A"      // countries not in list at all

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#0B0C2A"
                    strokeWidth={0.4}
                    style={{
                      default: { opacity: 0.55, outline: "none" },
                      hover: { opacity: 0.85, outline: "none" },
                      pressed: { opacity: 1, outline: "none" }
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* ✅ Markers only on onboarded countries */}
          {markers.map((country) => (
            <Marker
              key={country.name}
              coordinates={country.coordinates as [number, number]}
              onMouseEnter={() => setHoveredCountry(country.name)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <circle r={3.5} fill="#fff" stroke="#000" strokeWidth={1} />
              {hoveredCountry === country.name && (
                <text textAnchor="middle" y={-10} className="text-xs font-semibold fill-white">
                  {country.name}
                </text>
              )}
            </Marker>
          ))}

        </ZoomableGroup>
      </ComposableMap>

      <div className="absolute bottom-4 left-4 bg-[#0B0C2A]/80 backdrop-blur-sm border border-[#6A4FC8]/30 rounded-lg p-4">
        <p className="text-sm font-semibold text-[#C0C0C0] mb-2">Country Status</p>
        <div className="flex flex-col gap-1 text-xs text-[#C0C0C0]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFD700]" />
            <span>Onboarded ({onboardedCountries.length})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E26EE5]" />
            <span>To Be Onboarded ({toBeOnboardedCountries.length})</span>
          </div>
        </div>
      </div>
    </div>
  )
}
