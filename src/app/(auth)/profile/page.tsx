"use client";

import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignout = async () => {
    await signOut();
    router.push("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries()) as {
      name: string;
      image: string;
    };

    const { data, error } = await updateUser({
      ...user,
    });

    if (data) {
      toast.success("Updated Successfully");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const userImage = session?.user?.image ? (
    <Image
      src={session.user.image}
      alt="Profile picture"
      fill
      className="object-cover"
    />
  ) : null;

  const Username = (
    <div className="w-16 h-16 rounded-2xl bg-[#008a4c] text-white flex items-center justify-center font-bold text-lg uppercase">
      {session?.user?.name?.charAt(0)}
    </div>
  );

  const Avatar = session?.user?.image ? userImage : Username;

  return (
    <div className="min-h-screen bg-[#f5f7f6] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Back Button */}
        <div>
          <button
            onClick={() => router.back()}
            type="button"
            className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#008a4c] transition-colors"
          >
            <span className="text-lg">←</span>
            <span>ফিরে যান</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            আমার প্রোফাইল
          </h1>
          <p className="text-sm text-gray-600 font-medium">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* 1. User Header Badge Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
              {Avatar}
            </div>

            {/* Name & Email */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 leading-snug">
                {session?.user?.name}
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                {session?.user?.email}
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignout}
            type="button"
            className="cursor-pointer inline-flex items-center justify-center gap-1.5 border border-red-500 hover:bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-xl transition-colors shrink-0 active:scale-95"
          >
            <span>↵</span>
            <span>সাইন আউট</span>
          </button>
        </div>

        {/* 2. Update Information Form Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs space-y-6">
          <h3 className="text-xl font-bold text-gray-900">তথ্য</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-800"
              >
                নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                key={session?.user?.name}
                defaultValue={session?.user?.name || ""}
                placeholder="আপনার নাম লিখুন"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#008a4c] focus:ring-1 focus:ring-[#008a4c] transition-all"
                required
              />
            </div>

            {/* Image Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="img"
                className="block text-sm font-bold text-gray-800"
              >
                ইমেজ URL
              </label>
              <input
                name="image"
                id="img"
                type="url"
                key={session?.user?.image}
                defaultValue={session?.user?.image || ""}
                placeholder="ইমেজ url"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#008a4c] focus:ring-1 focus:ring-[#008a4c] transition-all"
              />
            </div>

            {/* Update Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="cursor-pointer bg-[#008a4c] hover:bg-[#007540] text-white font-bold text-sm px-8 py-2.5 rounded-xl transition-all shadow-xs active:scale-95"
              >
                আপডেট
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}