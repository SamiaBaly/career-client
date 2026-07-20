import CareerGrid from "../components/career/CareerGrid";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      <section className="
        bg-gradient-to-r 
        from-blue-600 
        to-indigo-700 
        text-white 
        py-20
      ">
        <div className="
          max-w-7xl 
          mx-auto 
          px-6 
          text-center
        ">

          <h1 className="
            text-5xl 
            font-bold
          ">
            AI Career Recommendations
          </h1>

          <p className="
            mt-6 
            text-xl 
            text-blue-100
          ">
            Discover careers that best match your
            resume and skills.
          </p>

        </div>
      </section>


      <section className="
        max-w-7xl 
        mx-auto 
        px-6 
        py-16
      ">

        <CareerGrid />

      </section>

    </main>
  );
}