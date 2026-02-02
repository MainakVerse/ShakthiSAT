"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { GlobalParticipation } from "@/components/global-participation";
import { ContactFooter } from "@/components/contact-footer";

export default function CountriesPage() {

  const [showCountries, setShowCountries] = useState(false);


  /*
   ✅ Single source of truth
   Only countries you provided
   All are considered onboarded
  */
  const countryCodes: Record<string, string> = {
    Afghanistan: "AF",
    Albania: "AL",
    Angola: "AO",
    Argentina: "AR",
    Armenia: "AM",
    Australia: "AU",
    Austria: "AT",
    Bahamas: "BS",
    Bahrain: "BH",
    Benin: "BJ",
    Bolivia: "BO",
    Botswana: "BW",
    Brazil: "BR",
    Brunei: "BN",
    "Burkina Faso": "BF",
    Cameroon: "CM",
    Canada: "CA",
    "Central African Republic": "CF",
    Chile: "CL",
    Colombia: "CO",
    "Costa Rica": "CR",
    Croatia: "HR",
    Dominica: "DM",
    Egypt: "EG",
    "El Salvador": "SV",
    "Equatorial Guinea": "GQ",
    Eswatini: "SZ",
    Ethiopia: "ET",
    Fiji: "FJ",
    France: "FR",
    Gabon: "GA",
    Gambia: "GM",
    Ghana: "GH",
    Greece: "GR",
    Grenada: "GD",
    Guatemala: "GT",
    Guyana: "GY",
    Haiti: "HT",
    Honduras: "HN",
    Hungary: "HU",
    India: "IN",
    Indonesia: "ID",
    Ireland: "IE",
    Italy: "IT",
    "Ivory Coast": "CI",
    Jamaica: "JM",
    Jordan: "JO",
    Kenya: "KE",
    Kuwait: "KW",
    Kyrgyzstan: "KG",
    Latvia: "LV",
    Lesotho: "LS",
    Liberia: "LR",
    Luxembourg: "LU",
    "North Macedonia": "MK",
    Madagascar: "MG",
    Malawi: "MW",
    Malaysia: "MY",
    Malta: "MT",
    Mauritius: "MU",
    Mexico: "MX",
    Moldova: "MD",
    Mongolia: "MN",
    Montenegro: "ME",
    Morocco: "MA",
    Mozambique: "MZ",
    Myanmar: "MM",
    Namibia: "NA",
    Nepal: "NP",
    "New Zealand": "NZ",
    Nigeria: "NG",
    Oman: "OM",
    Palau: "PW",
    Panama: "PA",
    "Papua New Guinea": "PG",
    Paraguay: "PY",
    Peru: "PE",
    Portugal: "PT",
    Qatar: "QA",
    Romania: "RO",
    Rwanda: "RW",
    Samoa: "WS",
    "Saudi Arabia": "SA",
    Senegal: "SN",
    Serbia: "RS",
    Seychelles: "SC",
    "Sierra Leone": "SL",
    Singapore: "SG",
    Slovenia: "SI",
    Spain: "ES",
    "Sri Lanka": "LK",
    "St. Kitts and Nevis": "KN",
    "St. Lucia": "LC",
    "St Vincent and the Grenadines": "VC",
    Tanzania: "TZ",
    Thailand: "TH",
    "Solomon Islands": "SB",
    Togo: "TG",
    "Trinidad and Tobago": "TT",
    Tunisia: "TN",
    Turkmenistan: "TM",
    UAE: "AE",
    Uganda: "UG",
    "United Kingdom": "GB",
    Uruguay: "UY",
    Uzbekistan: "UZ",
    Vietnam: "VN",
    Zambia: "ZM",
    Zimbabwe: "ZW",
  };

  const allCountries = Object.keys(countryCodes);

  const renderModal = () => (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-8 overflow-y-auto">
      <div className="w-full max-w-7xl bg-[#0A0E27]/90 border border-[#6A4FC8]/40 rounded-2xl p-6 relative">

        <h2 className="text-3xl text-white font-semibold mb-6 text-center">
          Participating Countries
        </h2>

        <button
          onClick={() => setShowCountries(false)}
          className="absolute top-4 right-6 text-white text-2xl"
        >
          ✕
        </button>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 justify-items-center">
          {allCountries.map((country) => {
            const iso = countryCodes[country];

            return (
              <div
                key={country}
                className="flex flex-col items-center group"
                title={country}
              >
                <Image
                  src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
                  alt={country}
                  width={60}
                  height={40}
                  className="rounded-md shadow-md group-hover:scale-110 transition-transform"
                />

                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 mt-1 text-center">
                  {country}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">

        <GlobalParticipation />

        <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">


          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">

            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#E26EE5]" />
              Our Global Network
            </CardTitle>

            <Button

              onClick={() => setShowCountries(true)}
              className="bg-[#6A4FC8] hover:bg-blue-800 text-white rounded-xl mt-4 sm:mt-0"
           >
              View Participating Countries
            </Button>
          </CardHeader>

          <CardContent className="text-[#C0C0C0] space-y-4">
            <p>

              Our mission spans across every participating nation. Each country
              contributes talent, perspective, and local impact that strengthens
              the global ecosystem around space science and technology education.
            </p>

            <p>
              This is not symbolic participation. It is operational collaboration.
              Every flag here represents real students, real programs, and real
              outcomes.

            </p>
          </CardContent>
        </Card>
      </div>

      {showCountries && renderModal()}

      <ContactFooter />
    </main>
  );
}
