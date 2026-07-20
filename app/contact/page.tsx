export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="
          rounded-3xl
          bg-white
          dark:bg-slate-900
          shadow-xl
          p-10
          text-center
        ">


          <span className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-green-100
            text-green-700
            mb-6
          ">
            💬 Lets Connect
          </span>



          <h1 className="
            text-5xl
            font-bold
          ">
            Have questions?
          </h1>



          <p className="
            mt-5
            text-gray-500
            max-w-xl
            mx-auto
          ">
            Whether you need support, feedback,
            or partnership opportunities,
            we would love to hear from you.
          </p>



          <div className="
            mt-10
            grid
            md:grid-cols-3
            gap-6
          ">


            <div className="p-6 rounded-2xl bg-blue-50 dark:bg-slate-800">
              📧
              <h3 className="font-bold mt-3">
                Email
              </h3>
              <p className="text-sm text-gray-500">
                support@careerpilot.ai
              </p>
            </div>



            <div className="p-6 rounded-2xl bg-purple-50 dark:bg-slate-800">
              🌐
              <h3 className="font-bold mt-3">
                Community
              </h3>
              <p className="text-sm text-gray-500">
                Join our AI career network
              </p>
            </div>



            <div className="p-6 rounded-2xl bg-green-50 dark:bg-slate-800">
              ⚡
              <h3 className="font-bold mt-3">
                Response
              </h3>
              <p className="text-sm text-gray-500">
                Within 24 hours
              </p>
            </div>


          </div>


        </div>

      </div>

    </main>
  );
}