import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#f5f7f6] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xs text-center space-y-6">
        
        {/* 404 Visual Icon */}
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto shrink-0 shadow-inner">
          <SearchX className="w-10 h-10" />
        </div>

        {/* Big 404 Badge */}
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-extrabold tracking-widest rounded-full uppercase">
            ত্রুটি ৪০৪
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
            পৃষ্ঠাটি পাওয়া যায়নি!
          </h1>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">
            আপনি যে পৃষ্ঠাটি খুঁজছেন তা সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#008a4c] hover:bg-[#007540] text-white font-bold text-sm py-3 px-5 rounded-xl transition-all shadow-xs active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>হোম পেজে ফিরে যান</span>
          </Link>

          <Link
            href="/products"
            className="w-full inline-flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-sm py-2.5 px-5 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-gray-500" />
            <span>পণ্য তালিকা দেখুন</span>
          </Link>
        </div>

      </div>
    </div>
  );
}