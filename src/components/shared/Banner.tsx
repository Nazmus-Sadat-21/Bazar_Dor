import Image from "next/image";
import Link from "next/link";

export default function Banner() {


  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100 shadow-md">
        {/* Left Side Content */}
        <div className="flex-1 space-y-4 text-left">
          {/* Top Green Date Badge */}
          <div className="inline-block bg-[#c7f2df] text-[#1c764d] text-xs  sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-xs">
            {date}
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug tracking-tight">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <Link
              href="/products"
              className="inline-block bg-[#008a4c] hover:bg-[#007540] text-white font-semibold text-sm sm:text-base px-6 py-2.5 rounded-lg shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              সব পণ্য দেখুন
            </Link>
          </div>
        </div>

        {/* Right Side Banner Image */}
        <div className="w-full md:w-auto flex justify-center shrink-0">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <Image
              src="/bazar-hero.png"
              alt="বাজারের পণ্য"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 320px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
