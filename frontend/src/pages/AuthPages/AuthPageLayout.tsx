import React from "react";
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-gradient-to-br from-brand-600 to-brand-900 dark:from-brand-800 dark:to-gray-900 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            <div className="flex flex-col items-center max-w-sm text-center">
              <h1 className="text-4xl font-bold text-white mb-4">PetCare Portal</h1>
              <p className="text-brand-100/80 text-lg">
                Manage your pet's schedule, cleanups, subscriptions, and billing in one secure place.
              </p>
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
