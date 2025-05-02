import React from "react";
import ADAMING from "../assets/ADAMING.png";
import KPMG from "../assets/kpmg.webp";
import cisco from "../assets/cisco.png";
import aidotek from "../assets/aidotek.png";
import blueprint from "../assets/blue-print.webp";
import AMCHAM from "../assets/AMCHAM.svg";

const partners = [
  { id: 1, name: "AdamIng", logo: ADAMING },
  { id: 2, name: "KPMG", logo: KPMG },
  { id: 3, name: "Cisco", logo: cisco },
  { id: 4, name: "Aidotek", logo: aidotek },
  { id: 5, name: "Blueprint", logo: blueprint },
  { id: 6, name: "AMCHAM", logo: AMCHAM },
];

export default function PartnerMarquee() {
  const logos = [...partners, ...partners]; // repeat twice for seamless loop

  return (
    <div className="overflow-hidden bg-white !pt-8 !pb-12">
      <div className="flex w-max animate-marquee">
        {logos.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex items-center justify-center min-w-20 md:min-w-[160px] !px-6"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="md:h-30 h-15 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
