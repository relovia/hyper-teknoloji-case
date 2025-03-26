import Image from "next/image";

export default function CreditCardSlider() {
  const logos = [
    "/images/credit-card/visa.svg",
    "/images/credit-card/mastercard.svg",
    "/images/credit-card/troy.png",
    "/images/credit-card/papara.jpg",
    "/images/credit-card/ininal.png",
  ];

  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative mx-auto max-w-xl py-8">
      <h3 className="text-lg font-semibold">Payment Methods</h3>
      <div className="w-64 flex animate-scroll gap-x-8 items-center py-4">
        {repeatedLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Kredi Kartı Logo ${index + 1}`}
            className="object-contain"
            width={64}
            height={64}
          />
        ))}
      </div>
    </div>
  );
}
