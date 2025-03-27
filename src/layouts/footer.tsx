import CreditCardSlider from "@/components/credit-card-slider";
import { Home, MailIcon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-[#272D38] text-white">
      <div className="container mx-auto px-2 py-4 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h3 className="text-2xl font-semibold">Kurumsal</h3>
            <ul className="flex flex-col gap-y-1 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Hakkımızda
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Çözüm Merkezi
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
                    Gizlilik Politikası
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Kullanıcı Sözleşmesi
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    Satış Sözleşmesi
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="hover:text-blue-300 cursor-pointer">
                    İptal & İade Koşulları
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
                    Çerez Politikası
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
            <h3 className="text-2xl font-semibold">Çok Satanlar</h3>
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
            <h3 className="text-2xl font-semibold">Bize Ulaşın</h3>
            <ul className="flex flex-col gap-y-1 text-sm">
              <li className="flex items-center gap-x-2">
                <Phone size={20} />
                +90 850 304 12 27
              </li>

              <li className="flex items-center gap-x-2">
                <Home size={40} />
                Serbest Liman ve Bölge Posta Kutusu No: 1449 - KKTC / Gazimağusa
              </li>

              <li className="flex items-center gap-x-2">
                <MailIcon size={20} />
                bilgi@hyperteknoloji.com
              </li>

              <li className="flex items-center gap-x-2">
                <Home size={28} />
                Penta Game Yazılım ve Bilişim Teknolojileri LTD.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <CreditCardSlider />

      {/* Copyright Section */}
      <div className="flex flex-col py-4 text-center gap-y-2">
        <span className="text-sm">
          Copyright © 2025 <strong>Hyper Teknoloji.|</strong> Sitemizdeki yazı,
          resim ve içeriklerin her hakkı saklıdır, izinsiz kullanılamaz.
        </span>

        <span className="text-sm">
          <strong>Bir Penta Game Yazılım ve Bilişim Teknolojileri LTD.</strong>{" "}
          İştirakidir.
        </span>
      </div>
    </footer>
  );
}
