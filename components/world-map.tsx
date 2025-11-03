"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Sample participating countries with coordinates
const participatingCountries = [
  { name: "India", coordinates: [78.9629, 20.5937], color: "#FFD700" },
  { name: "United States", coordinates: [-95.7129, 37.0902], color: "#E26EE5" },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781], color: "#6A4FC8" },
  { name: "Japan", coordinates: [138.2529, 36.2048], color: "#FFD700" },
  { name: "Brazil", coordinates: [-51.9253, -14.235], color: "#E26EE5" },
  { name: "Australia", coordinates: [133.7751, -25.2744], color: "#6A4FC8" },
  { name: "South Africa", coordinates: [22.9375, -30.5595], color: "#FFD700" },
  { name: "Canada", coordinates: [-106.3468, 56.1304], color: "#E26EE5" },
  { name: "Germany", coordinates: [10.4515, 51.1657], color: "#6A4FC8" },
  { name: "France", coordinates: [2.2137, 46.2276], color: "#FFD700" },
  { name: "China", coordinates: [104.1954, 35.8617], color: "#E26EE5" },
  { name: "Mexico", coordinates: [-102.5528, 23.6345], color: "#6A4FC8" },
  { name: "Argentina", coordinates: [-63.6167, -38.4161], color: "#FFD700" },
  { name: "Egypt", coordinates: [30.8025, 26.8206], color: "#E26EE5" },
  { name: "Nigeria", coordinates: [8.6753, 9.082], color: "#6A4FC8" },
  { name: "Kenya", coordinates: [37.9062, -0.0236], color: "#FFD700" },
  { name: "Indonesia", coordinates: [113.9213, -0.7893], color: "#E26EE5" },
  { name: "Thailand", coordinates: [100.9925, 15.87], color: "#6A4FC8" },
  { name: "South Korea", coordinates: [127.7669, 35.9078], color: "#FFD700" },
  { name: "Italy", coordinates: [12.5674, 41.8719], color: "#E26EE5" },
]

export function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 147,
        }}
        className="w-full h-full"
      >
        <ZoomableGroup center={[0, 20]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#6A4FC8"
                  stroke="#0B0C2A"
                  strokeWidth={0.5}
                  style={{
                    default: { fill: "#6A4FC8", opacity: 0.2, outline: "none" },
                    hover: { fill: "#E26EE5", opacity: 0.4, outline: "none" },
                    pressed: { fill: "#FFD700", opacity: 0.5, outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Markers for participating countries */}
          {participatingCountries.map((country) => (
            <Marker
              key={country.name}
              coordinates={country.coordinates as [number, number]}
              onMouseEnter={() => setHoveredCountry(country.name)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <circle
                r={4}
                fill={country.color}
                stroke="#fff"
                strokeWidth={1}
                className="cursor-pointer transition-all duration-300 hover:r-6"
                style={{
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              {hoveredCountry === country.name && (
                <text
                  textAnchor="middle"
                  y={-10}
                  className="text-xs font-semibold fill-white"
                  style={{
                    pointerEvents: "none",
                    textShadow: "0 0 4px rgba(0,0,0,0.8)",
                  }}
                >
                  {country.name}
                </text>
              )}
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-[#0B0C2A]/80 backdrop-blur-sm border border-[#6A4FC8]/30 rounded-lg p-4">
        <p className="text-sm font-semibold text-[#C0C0C0] mb-2">Participating Countries</p>
        <div className="flex flex-col gap-1 text-xs text-[#C0C0C0]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFD700]" />
            <span>20+ shown of 108 nations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E26EE5]" />
            <span>Hover to see country names</span>
          </div>
        </div>
      </div>
    </div>
  )
}
