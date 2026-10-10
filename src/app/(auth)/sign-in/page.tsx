"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...user,
    });

    if (data) {
      toast.success(`LogIn Successfully, Welcome ${data.user.name}`);
      router.push("/");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  };

  const handleGithub = async () => {
    try {
      await signIn.social({
        provider: "github",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("GitHub sign-in failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7f6] flex flex-col justify-center items-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-6 space-y-2 max-w-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          সাইন ইন
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-medium">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs space-y-5">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="space-y-1.5 text-left">
            <label className="block text-sm font-bold text-gray-800">
              ইমেইল
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#008a4c] focus:ring-1 focus:ring-[#008a4c] transition-all"
              required
            />
          </div>

          {/* Password Field with Eye Toggle */}
          <div className="space-y-1.5 text-left">
            <label className="block text-sm font-bold text-gray-800">
              পাসওয়ার্ড
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#008a4c] focus:ring-1 focus:ring-[#008a4c] transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#008a4c] hover:bg-[#007540] text-white font-bold text-base py-2.5 rounded-xl transition-all shadow-xs active:scale-[0.98] mt-2"
          >
            সাইন ইন
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4">
          <div className="w-full border-t border-gray-200"></div>
          <span className="bg-white px-3 text-xs text-gray-500 font-semibold absolute">
            অথবা
          </span>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Google Button */}
          <button
            onClick={handleGoogle}
            type="button"
            className="cursor-pointer flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs py-2.5 px-3 rounded-xl transition-all"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.32 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.17 0 9.98 0 12s.46 3.83 1.26 5.42l4.02-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.68 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          {/* GitHub Button */}
          <button
            onClick={handleGithub}
            type="button"
            className="cursor-pointer flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs py-2.5 px-3 rounded-xl transition-all"
          >
            <svg
              className="w-4 h-4 text-gray-900 shrink-0 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* Card Footer Link */}
        <div className="text-center pt-2">
          <p className="text-sm font-semibold text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="text-[#008a4c] hover:underline font-bold"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </div>

      {/* Return to Home Link */}
      <div className="mt-6 text-center">
        <Link
          href="/"
          className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}