"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import MenuPage from "./Menu";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const date = new Date().toLocaleDateString("bn-BD",{
    dateStyle : "full"
  })

  return (
    <>
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Green Icon Box */}
            <div className="w-12 h-12 rounded-2xl bg-[#008a4c] flex items-center justify-center text-white shadow-xs group-hover:bg-[#007540] transition-colors">
              <ShoppingCart className="w-6 h-6 stroke-[2.2]" />
            </div>

            {/* Title & Date */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                বাজার দর
              </span>
              <span className="text-xs text-gray-500 font-medium mt-0.5">
                {date}
              </span>
            </div>
          </Link>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/signin"
              className="text-gray-800 hover:text-[#008a4c] font-semibold text-base transition-colors px-2 py-1"
            >
              সাইন ইন
            </Link>
            <Link
              href="/signup"
              className="bg-[#008a4c] hover:bg-[#007540] text-white font-semibold text-base px-6 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-md active:scale-95"
            >
              সাইন আপ
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-[#008a4c] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <Link
            href="/signin"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full py-2.5 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 border border-gray-200"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full py-2.5 bg-[#008a4c] text-white font-semibold rounded-lg hover:bg-[#007540] transition-colors"
          >
            সাইন আপ
          </Link>
        </div>
      )}
      
    </header>
   <MenuPage></MenuPage>
</>
    
  );
}