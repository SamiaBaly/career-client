export default function RecentResumesSkeleton() {
  return (
    <div className="mt-4 space-y-4">

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="
            rounded-xl
            border
            border-gray-100
            dark:border-gray-800
            p-4
            animate-pulse
          "
        >

          <div className="flex items-center justify-between">

            <div
              className="
                h-5
                w-40
                rounded
                bg-gray-200
                dark:bg-gray-700
              "
            />


            <div
              className="
                h-4
                w-12
                rounded
                bg-gray-200
                dark:bg-gray-700
              "
            />

          </div>


          <div
            className="
              mt-3
              h-4
              w-full
              rounded
              bg-gray-200
              dark:bg-gray-700
            "
          />


          <div
            className="
              mt-2
              h-3
              w-24
              rounded
              bg-gray-200
              dark:bg-gray-700
            "
          />

        </div>
      ))}

    </div>
  );
}