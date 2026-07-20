export default function BlogPage() {
  const blogs = [
    {
      title: "How AI Improves Resume Screening",
      description:
        "Learn how AI analyzes resumes and helps job seekers improve their chances.",
      date: "July 2026",
    },
    {
      title: "Top Skills Employers Want",
      description:
        "Discover the most in-demand technical and soft skills for today's job market.",
      date: "July 2026",
    },
    {
      title: "Career Growth Tips",
      description:
        "Simple strategies to improve your resume, portfolio, and interview performance.",
      date: "July 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">
          CareerPilot Blog
        </h1>

        <p className="text-center text-gray-500 mb-12">
          Career advice, AI insights, and resume improvement tips.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg transition"
            >
              <span className="text-sm text-blue-600">
                {blog.date}
              </span>

              <h2 className="text-xl font-bold mt-3">
                {blog.title}
              </h2>

              <p className="text-gray-500 mt-3">
                {blog.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}