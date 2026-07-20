export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-6">
          Help & Support
        </h1>

        <p className="text-center text-gray-500 mb-12">
          Need help? Were here to assist you.
        </p>

        <div className="space-y-6">

          <div className="rounded-2xl bg-white dark:bg-gray-900 border p-6">
            <h2 className="font-bold text-xl">
              How do I upload my resume?
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in, go to Dashboard → Resumes → Create Resume.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-900 border p-6">
            <h2 className="font-bold text-xl">
              How does AI analysis work?
            </h2>

            <p className="text-gray-500 mt-2">
              Our AI analyzes your resume, identifies strengths,
              weaknesses, and recommends suitable careers.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-900 border p-6">
            <h2 className="font-bold text-xl">
              Contact Support
            </h2>

            <p className="text-gray-500 mt-2">
              Email: support@careerpilot.ai
            </p>

            <p className="text-gray-500">
              Phone: +880 1234-567890
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}