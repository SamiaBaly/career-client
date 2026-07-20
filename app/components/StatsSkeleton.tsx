export default function StatsSkeleton() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        dark:border-gray-800
        bg-white
        dark:bg-gray-900
        p-6
        shadow-sm
        animate-pulse
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800" />

          <div className="mt-3 h-8 w-16 rounded bg-gray-200 dark:bg-gray-800" />
        </div>


        <div className="
          h-12
          w-12
          rounded-xl
          bg-gray-200
          dark:bg-gray-800
        " />

      </div>


      <div className="
        mt-4
        h-4
        w-32
        rounded
        bg-gray-200
        dark:bg-gray-800
      " />

    </div>
  );
}