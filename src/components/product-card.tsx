"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Image from "next/image";

// Components
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Icons
import { Info } from "lucide-react";

interface Product {
  productMainImage: string;
  productName: string;
  salePrice: string;
  productInfo: string;
  totalStock: string;
  productData: {
    productMainImage: string;
    productInfo: string;
  };
}

export function ProductCard() {
  // States
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [onlyStock, setOnlyStock] = useState(false);

  // Fetch products data from the API
  const productsData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/Products/List`,
        {},
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      // First 60 products
      setProducts(response.data.data.slice(0, 60));
    } catch (error) {
      console.error("An error occured fetching products: ", error);
    }
  };

  // Fetch the products when the component mounts
  useEffect(() => {
    productsData();
  }, []);

  // Search query filter
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  // Sort the filtered products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    if (sortOption === "1") {
      sorted.sort((a, b) => parseFloat(a.salePrice) - parseFloat(b.salePrice));
    } else if (sortOption === "2") {
      sorted.sort((a, b) => parseFloat(b.salePrice) - parseFloat(a.salePrice));
    }

    return sorted;
  }, [filteredProducts, sortOption]);

  const finalProducts = useMemo(() => {
    return onlyStock
      ? sortedProducts.filter((product) => parseInt(product.totalStock) > 0)
      : sortedProducts;
  }, [sortedProducts, onlyStock]);

  return (
    <div className="py-8 px-4 flex flex-col gap-y-8">
      {/* Filters */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 md:gap-y-0">
        <div className="relative flex flex-col gap-y-2">
          <input
            type="search"
            id="search"
            placeholder=""
            className="w-full md:w-72 lg:w-96  p-2 pl-4 ring-2 ring-[#323948] rounded-md focus:outline-none outline-none transition-all peer text-white"
            onChange={(event) => setSearchQuery(event?.target.value)}
          />
          <label
            htmlFor="search"
            className="select-none absolute peer-focus:w-fit left-2 pointer-events-none transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-white top-[-10px] text-sm text-white px-1"
          >
            Ürün ara...
          </label>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <Switch
              className="cursor-pointer"
              checked={onlyStock}
              onCheckedChange={setOnlyStock}
            />
            <span className="text-sm text-white">Yalnızca Stoktakiler</span>
          </div>

          <Select
            defaultValue="0"
            onValueChange={(value) => setSortOption(value)}
          >
            <SelectTrigger className="w-60 text-white cursor-pointer">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="text-white">
              <SelectItem className="cursor-pointer" value="0">
                Akıllı Sıralama
              </SelectItem>
              <SelectItem className="cursor-pointer" value="1">
                En Düşük Fiyat
              </SelectItem>
              <SelectItem className="cursor-pointer" value="2">
                En Yüksek Fiyat
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {finalProducts.length === 0 ? (
        <div className="flex items-center justify-center w-full h-96">
          <span className="text-white text-xl">Ürün bulunamadı...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {finalProducts.map((item, index) => (
            <Card
              key={index}
              className="mx-auto relative group w-72 h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer p-0 border-none bg-[#212630]"
            >
              {item.productData.productMainImage ? (
                <Image
                  src={item.productData.productMainImage}
                  alt={item.productName}
                  width={640}
                  height={640}
                  className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-50"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Resim Yok</span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
                <h2 className="text-xl font-bold text-white text-center">
                  {item.productName}
                </h2>
                <div className="py-4">
                  <Dialog>
                    <DialogTrigger className="cursor-pointer">
                      <div className="flex items-center gap-x-1 px-4 py-2 bg-white rounded-lg">
                        <Info size={16} className="mr-1" />
                        Detay
                      </div>
                    </DialogTrigger>
                    <DialogContent className="h-fit w-full">
                      <DialogHeader>
                        <DialogTitle>{item.productName}</DialogTitle>
                        <DialogDescription>
                          {item.productData.productInfo}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <span className="absolute bottom-0 w-full text-center py-2 bg-[#2B3445] text-white z-20">
                {item.salePrice} TL
              </span>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
