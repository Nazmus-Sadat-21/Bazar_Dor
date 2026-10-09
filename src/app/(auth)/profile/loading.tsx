import React from "react";

export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-[#f5f7f6] py-10 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Back Button Skeleton */}
        <div>
          <div className="h-5 bg-gray-200 rounded-md w-24"></div>
        </div>

        {/* Page Header Skeleton */}
        <div className="space-y-2">
          <div className="h-8 sm:h-9 bg-gray-200 rounded-xl w-44 sm:w-56"></div>
          <div className="h-4 bg-gray-200 rounded-md w-60 sm:w-72"></div>
        </div>

        {/* 1. User Header Badge Card Skeleton */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* User Avatar Skeleton */}
            <div className="w-16 h-16 rounded-2xl bg-gray-200 shrink-0"></div>

            {/* Name & Email Skeleton */}
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded-md w-36 sm:w-44"></div>
              <div className="h-4 bg-gray-200 rounded-md w-48 sm:w-56"></div>
            </div>
          </div>

          {/* Sign Out Button Skeleton */}
          <div className="h-10 bg-gray-200 rounded-xl w-28 shrink-0"></div>
        </div>

        {/* 2. Update Information Form Card Skeleton */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs space-y-6">
          <div className="h-6 bg-gray-200 rounded-md w-16"></div>

          <div className="space-y-5">
            {/* Name Input Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-md w-12"></div>
              <div className="h-10 bg-gray-100 border border-gray-200 rounded-xl w-full"></div>
            </div>

            {/* Image Input Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-md w-20"></div>
              <div className="h-10 bg-gray-100 border border-gray-200 rounded-xl w-full"></div>
            </div>

            {/* Submit Button Skeleton */}
            <div className="flex justify-center pt-2">
              <div className="h-10 bg-gray-200 rounded-xl w-28"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}