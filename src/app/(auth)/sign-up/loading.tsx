import React from "react";

export default function SignUpLoading() {
  return (
    <div className="min-h-screen bg-[#f5f7f6] flex flex-col justify-center items-center px-4 py-12 animate-pulse">
      {/* Header Skeleton */}
      <div className="text-center mb-6 space-y-3 max-w-md flex flex-col items-center w-full">
        <div className="h-9 sm:h-10 bg-gray-200 rounded-2xl w-48 sm:w-56"></div>
        <div className="h-4 bg-gray-200 rounded-lg w-64 sm:w-80"></div>
      </div>

      {/* Form Card Skeleton */}
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs space-y-5">
        <div className="space-y-4">
          {/* Name Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded-md w-12"></div>
            <div className="h-10 bg-gray-100 border border-gray-200 rounded-xl w-full"></div>
          </div>

          {/* Email Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded-md w-16"></div>
            <div className="h-10 bg-gray-100 border border-gray-200 rounded-xl w-full"></div>
          </div>

          {/* Password Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded-md w-20"></div>
            <div className="h-10 bg-gray-100 border border-gray-200 rounded-xl w-full"></div>
          </div>

          {/* Confirm Password Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded-md w-36"></div>
            <div className="h-10 bg-gray-100 border border-gray-200 rounded-xl w-full"></div>
          </div>

          {/* Submit Button Skeleton */}
          <div className="h-11 bg-gray-200 rounded-xl w-full mt-2"></div>
        </div>

        {/* Divider Skeleton */}
        <div className="relative flex items-center justify-center my-4">
          <div className="w-full border-t border-gray-200"></div>
          <div className="bg-white px-3 absolute">
            <div className="h-3.5 bg-gray-200 rounded-md w-10"></div>
          </div>
        </div>

        {/* Social Buttons Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="h-10 bg-gray-100 border border-gray-200 rounded-xl w-full"></div>
          <div className="h-10 bg-gray-100 border border-gray-200 rounded-xl w-full"></div>
        </div>

        {/* Card Footer Link Skeleton */}
        <div className="flex justify-center pt-2">
          <div className="h-4 bg-gray-200 rounded-md w-48"></div>
        </div>
      </div>

      {/* Return Home Link Skeleton */}
      <div className="mt-6 flex justify-center">
        <div className="h-4 bg-gray-200 rounded-md w-36"></div>
      </div>
    </div>
  );
}