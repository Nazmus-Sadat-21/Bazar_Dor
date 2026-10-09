"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSignout = async () => {
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    await signOut();
    router.push("/");
  };

  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Dhaka",
      }),
  );
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* 1. Logo & Branding */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#008a4c] flex items-center justify-center text-white shadow-xs group-hover:bg-[#007540] transition-colors shrink-0">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                  বাজার দর
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
                  {date}
                </span>
              </div>
            </Link>

            {/* 2. Desktop & Tablet Auth / Profile Controls (Hidden on Mobile) */}
            <div className="hidden md:flex items-center">
              {session?.user ? (
                /* Logged-In User Profile Dropdown */
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100"
                  >
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "Profile"}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200 shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#008a4c] text-white flex items-center justify-center font-bold text-base uppercase shrink-0">
                        {session.user.name?.charAt(0) || "U"}
                      </div>
                    )}

                    <span className="text-gray-800 font-semibold text-sm sm:text-base max-w-[140px] truncate">
                      {session.user.name || "ইউজার"}
                    </span>

                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
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

                  {/* Desktop Profile Dropdown Menu */}
                  {isProfileOpen && (
                    <>
                      {/* Transparent backdrop to click outside */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsProfileOpen(false)}
                      />

                      <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {/* User Header Info */}
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-bold text-gray-900 truncate">
                            {session.user.name || "ইউজার"}
                          </p>
                          <p className="text-xs text-gray-500 truncate mt-0.5">
                            {session.user.email}
                          </p>
                        </div>

                        {/* Profile Link */}
                        <Link
                          href="/profile"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <User className="w-4 h-4 text-gray-500" />
                          <span>প্রোফাইল</span>
                        </Link>

                        {/* Sign Out Button */}
                        <button
                          type="button"
                          onClick={handleSignout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        >
                          <LogOut className="w-4 h-4 text-red-500" />
                          <span>সাইন আউট</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                /* Logged-Out Guest Buttons */
                <div className="flex items-center gap-4">
                  <Link
                    href="/sign-in"
                    className="text-gray-800 hover:text-[#008a4c] font-bold text-sm sm:text-base transition-colors px-3 py-2"
                  >
                    সাইন ইন
                  </Link>
                  <Link
                    href="/sign-up"
                    className="bg-[#008a4c] hover:bg-[#007540] text-white font-bold text-sm sm:text-base px-5 py-2.5 rounded-xl shadow-xs transition-all active:scale-95"
                  >
                    সাইন আপ
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="p-2.5 rounded-xl text-gray-700 hover:text-[#008a4c] hover:bg-gray-100 focus:outline-none transition-colors"
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

        {/* 4. Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-150">
            {session?.user ? (
              /* Mobile Logged-In User Panel */
              <div className="space-y-3">
                {/* User Info Header */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "Profile"}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full object-cover border border-gray-200 shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#008a4c] text-white flex items-center justify-center font-bold text-base uppercase shrink-0">
                      {session.user.name?.charAt(0)}
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-gray-900 truncate">
                      {session.user.name || "ইউজার"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {session.user.email}
                    </p>
                  </div>
                </div>

                {/* Profile Navigation Link */}
                <Link
                  href="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-gray-800 font-bold text-sm bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  <User className="w-4 h-4 text-gray-600" />
                  <span>আমার প্রোফাইল</span>
                </Link>

                {/* Mobile Sign Out Button */}
                <button
                  type="button"
                  onClick={handleSignout}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-red-600 font-bold text-sm border border-red-200 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span>সাইন আউট</span>
                </button>
              </div>
            ) : (
              /* Mobile Guest Buttons */
              <div className="space-y-2.5">
                <Link
                  href="/sign-in"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full py-2.5 text-gray-800 font-bold text-sm rounded-xl hover:bg-gray-50 border border-gray-200 transition-colors"
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full py-2.5 bg-[#008a4c] text-white font-bold text-sm rounded-xl hover:bg-[#007540] transition-colors"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}
