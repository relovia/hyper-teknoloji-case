import CreditCardSlider from "@/components/credit-card-slider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="container mx-auto px-2 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo and Description*/}
        <div className="flex flex-col gap-y-8">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/images/hyper-tech-image.webp"
                alt="Hyper Teknoloji Logo"
                width={192}
                height={200}
                className="cursor-pointer"
              />
            </Link>

            <Link href="/">
              <Image
                src="/images/hyper-tech-qr.webp"
                alt="ETBIS Site Verification"
                width={64}
                height={64}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <p className="hidden lg:block text-sm leading-5">
            Türkiyenin En Büyük Oyuncu Pazarı: Sevdiğiniz oyunlar için epin,
            goldbar, ve item&apos;ları en uygun fiyatlarla satın alın veya
            hesaplarınızı güvenle satışa çıkartın.
          </p>
        </div>

        {/* Right Section: Link Groups */}
        <div className="grid col-span-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Coorporate */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-semibold">Coorporate</h3>
            <ul className="flex flex-col gap-y-1 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Support Center
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Bayilik Başvurusu
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sözleşmeler */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-semibold">Sözleşmeler</h3>
            <ul className="flex flex-col gap-y-1 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    User Agreement
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Sales Agreement
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Refund Policy
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    KVKK
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Cookie Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Popüler İlanlar */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-semibold">Popüler İlanlar</h3>
            <ul className="flex flex-col gap-y-1 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    PUBG Random Hesap Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    MLBB Hesap Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Steam Random Key Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Roblox Hesap Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Discord Nitro Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Instagram Takipçi Satın Al
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Best Sellers */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-semibold">Best Sellers</h3>
            <ul className="flex flex-col gap-y-1 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    LoL RP Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    PUBG UC Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Valorant VP Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    MLBB Elmas Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Roblox Robux Satın Al
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Brawl Stars Elmas Satın Al
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <ul className="flex flex-col gap-y-1 text-sm">
              <li>+90 850 304 12 27</li>

              <li>
                Serbest Liman ve Bölge Posta Kutusu No: 1449 - KKTC / Gazimağusa
              </li>

              <li>bilgi@hyperteknoloji.com</li>

              <li>Penta Game Yazılım ve Bilişim Teknolojileri LTD.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <CreditCardSlider />

      {/* Copyright Section */}
      <div className="flex flex-col py-4 text-center gap-y-2">
        <span className="text-sm">
          Copyright © 2025 <strong>Hyper Teknoloji.|</strong> All rights
          reserved for the texts, images, and contents on our website, cannot be
          used without permission.
        </span>

        <span className="text-sm">
          <strong>A Penta Game Yazılım ve Bilişim Teknolojileri LTD.</strong>{" "}
          Company.
        </span>
      </div>
    </footer>
  );
}
