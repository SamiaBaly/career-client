"use client";

export default function CareerSkeleton() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-200
        dark:border-gray-800
        bg-white
        dark:bg-gray-900
        p-8
        animate-pulse
      "
    >
      <div className="flex justify-between">

        <div className="flex gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gray-300 dark:bg-gray-700" />

          <div>

            <div className="w-44 h-6 rounded bg-gray-300 dark:bg-gray-700" />

            <div className="mt-3 w-28 h-4 rounded bg-gray-200 dark:bg-gray-800" />

          </div>

        </div>

        <div className="w-20 h-8 rounded-full bg-gray-300 dark:bg-gray-700" />

      </div>

      <div className="mt-8 flex flex-wrap gap-2">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-20 h-8 rounded-full bg-gray-300 dark:bg-gray-700"
          />
        ))}

      </div>

      <div className="mt-10 space-y-4">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="w-full h-4 rounded bg-gray-200 dark:bg-gray-800"
          />
        ))}

      </div>
    </div>
  );
}