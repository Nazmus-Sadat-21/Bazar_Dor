import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        
        {/* Left Side Text */}
        <p className="font-medium text-gray-700 text-center md:text-left">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        {/* Right Side Disclaimer Text */}
        <p className="text-gray-500 text-xs sm:text-sm text-center md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার উপর নির্ভর করে পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
}