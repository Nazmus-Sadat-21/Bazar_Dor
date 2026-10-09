"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";

import Image from "next/image";
import { redirect } from "next/navigation";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handaleSignout = async()=>{
    setIsProfileOpen(false)
    await signOut();
    redirect("/")
  }

  const auth = (
    <>
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/sign-in"
          className="text-gray-800 hover:text-[#008a4c] font-semibold text-base transition-colors px-2 py-1"
        >
          সাইন ইন
        </Link>
        <Link
          href="/sign-up"
          className="bg-[#008a4c] hover:bg-[#007540] text-white font-semibold text-base px-6 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-md active:scale-95"
        >
          সাইন আপ
        </Link>
      </div>
    </>
  );

  const profile = (
    <>
      <div className="cursor-pointer hidden md:flex items-center relative">
        {/* Profile Button */}
        <button
          type="button"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {/* Profile Image / Initial */}
          {session?.user?.image ? (
            <Image
              src={session?.user.image}
              alt={session?.user.name || "Profile"}
              height={8}
              width={8}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#008a4c] text-white flex items-center justify-center font-bold text-lg uppercase">
              {session?.user?.name?.charAt(0) ||
                session?.user?.email?.charAt(0) ||
                "U"}
            </div>
          )}

          {/* Name */}
          <span className="text-gray-800 font-semibold text-base max-w-[120px] truncate">
            {session?.user?.name || "User"}
          </span>

          {/* Dropdown Arrow */}
          <svg
            className={`cursor-pointer w-4 h-4 text-gray-500 transition-transform duration-200 ${
              isProfileOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown */}
        {isProfileOpen && (
          <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
            {/* User Info */}
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {session?.user?.name || "User"}
              </p>

              <p className="text-xs text-gray-500 truncate mt-1">
                {session?.user?.email}
              </p>
            </div>

            {/* Profile */}
            <Link
              href="/profile"
              onClick={() => setIsProfileOpen(false)}
              className="cursor-pointer flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                />
              </svg>

              <span className="font-medium">প্রোফাইল</span>
            </Link>

            {/* Sign Out */}
            <button
              type="button"
              
              onClick={handaleSignout}
              className="cursor-pointer w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 12H9m0 0l3-3m-3 3l3 3"
                />
              </svg>

              <span>সাইন আউট</span>
            </button>
          </div>
        )}
      </div>
    </>
  );

  const authButton = session?.user ? profile : auth;

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

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

            {authButton}

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
              href="/sign-in"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full py-2.5 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 border border-gray-200"
            >
              সাইন ইন
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full py-2.5 bg-[#008a4c] text-white font-semibold rounded-lg hover:bg-[#007540] transition-colors"
            >
              সাইন আপ
            </Link>
          </div>
        )}
      </header>
      
    </>
  );
}
