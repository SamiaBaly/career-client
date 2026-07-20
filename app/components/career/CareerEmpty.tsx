"use client";

import { SearchX } from "lucide-react";

export default function CareerEmpty() {
  return (
    <div className="py-24 flex flex-col items-center">

      <SearchX
        size={70}
        className="text-gray-400"
      />

      <h2 className="mt-6 text-2xl font-bold">
        No Careers Found
      </h2>

      <p className="mt-3 text-gray-500">
        Try another keyword or filter.
      </p>

    </div>
  );
}