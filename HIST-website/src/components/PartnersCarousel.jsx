import React from "react";
import FAU from "../assets/FAU.png";
import UCM from "../assets/UCM.webp";
import VATELFR from "../assets/VATELFRANCE.svg";
import ADAMING from "../assets/ADAMING.png";
import KPMG from "../assets/kpmg.webp";
import cisco from "../assets/cisco.png";
import aidotek from "../assets/aidotek.png";
import blueprint from "../assets/blue-print.webp";
import AMCHAM from "../assets/AMCHAM.svg";

const partners = [
  { id: 1, name: "FAU", logo: FAU },
  { id: 2, name: "UCM", logo: UCM },
  { id: 3, name: "Vatel France", logo: VATELFR },
  { id: 4, name: "AdamIng", logo: ADAMING },
  { id: 5, name: "KPMG", logo: KPMG },
  { id: 6, name: "Cisco", logo: cisco },
  { id: 7, name: "Aidotek", logo: aidotek },
  { id: 8, name: "Blueprint", logo: blueprint },
  { id: 9, name: "AMCHAM", logo: AMCHAM },
];

export default function PartnerMarquee() {
  const logos = [...partners, ...partners]; // repeat twice for seamless loop

  return (
    <div className="overflow-hidden bg-white !pt-8 !pb-12">
      <div className="flex w-max animate-marquee">
        {logos.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex items-center justify-center min-w-[160px] !px-6"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-30 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
