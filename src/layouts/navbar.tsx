"use client";

import React from "react";
import { Menu, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { title: "Siparişlerim", path: "/orders" },
    { title: "Hesabım", path: "/account" },
    { title: "Yayıncılar", path: "/streamers" },
    { title: "İlan Ekle", path: "/add-an-item" },
    {
      title: (
        <div className="flex items-center gap-x-2">
          <PlusIcon />
          Bakiye Yükle
        </div>
      ),
      path: "/redeem-credit",
    },
  ];

  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <nav className="flex flex-row justify-between items-center px-2 py-4">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/images/hyper-tech-image.webp"
            alt="Logo"
            width={176}
            height={100}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center gap-x-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link key={link.path} href={link.path} legacyBehavior>
                <a
                  className={`hover:text-blue-500 hover:border-b hover:border-blue-500 transition-colors duration-300 ${
                    isActive
                      ? "text-blue-700 font-medium border-b-2 border-blue-700"
                      : ""
                  }`}
                >
                  <span>{link.title}</span>
                </a>
              </Link>
            );
          })}
        </div>

        {/* Mobile Dropdown Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2">
                <Menu className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link href={link.path}>
                      <span
                        className={`block text-lg hover:text-blue-500 transition-colors duration-300 ${
                          isActive ? "text-blue-700 font-medium" : ""
                        }`}
                      >
                        {link.title}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
