export default function CareerMatchesSkeleton() {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="
            rounded-2xl
            border
            border-gray-200
            dark:border-gray-800
            bg-white
            dark:bg-gray-900
            p-5
            animate-pulse
          "
        >

          <div className="flex justify-between items-center">

            <div
              className="
                h-5
                w-32
                rounded
                bg-gray-200
                dark:bg-gray-700
              "
            />

            <div
              className="
                h-6
                w-14
                rounded-full
                bg-gray-200
                dark:bg-gray-700
              "
            />

          </div>


          <div
            className="
              mt-5
              h-2
              rounded-full
              bg-gray-200
              dark:bg-gray-700
            "
          />


          <div className="mt-5 flex gap-2">

            <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />

          </div>


          <div className="mt-5 flex gap-2">

            <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />

          </div>


        </div>
      ))}

    </div>
  );
}