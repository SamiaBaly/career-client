"use client";

import Link from "next/link";
import {
  Users,
  FileText,
  Brain,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import AdminGuard from "@/app/components/shared/AdminGuard";
import useAdminStats from "@/app/hooks/useAdminStats";

export default function AdminDashboard() {
  const { stats, loading } = useAdminStats();

  const cards = [
    {
      title: "Total Users",
      value: stats?.totalUsers ?? 0,
      icon: Users,
      color: "bg-blue-500",
      href: "/dashboard/admin/users",
    },
    {
      title: "Total Resumes",
      value: stats?.totalResumes ?? 0,
      icon: FileText,
      color: "bg-emerald-500",
      href: "/dashboard/admin/resumes",
    },
    {
      title: "AI Analyses",
      value: stats?.totalAnalyses ?? 0,
      icon: Brain,
      color: "bg-violet-500",
      href: "/dashboard/admin/analysis",
    },
  ];

  return (
    <AdminGuard>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">

        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-xl">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-white/10 p-4">
              <ShieldCheck size={34} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Admin Dashboard
              </h1>

              <p className="mt-2 text-slate-300">
                Manage users, resumes and AI analyses.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-44 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800"
              />
            ))
            : cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-slate-500">
                        {card.title}
                      </p>

                      <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
                        {card.value}
                      </h2>
                    </div>

                    <div
                      className={`${card.color} rounded-2xl p-4 text-white`}
                    >
                      <Icon size={30} />
                    </div>

                  </div>

                  <Link
                    href={card.href}
                    className="mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold"
                  >
                    View
                    <ArrowRight size={18} />
                  </Link>

                </div>
              );
            })}

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">

          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <Link
              href="/dashboard/admin/users"
              className="rounded-2xl border border-slate-200 p-6 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Users className="mb-3 text-blue-600" />
              <h3 className="font-semibold">
                Manage Users
              </h3>
            </Link>

            <Link
              href="/dashboard/admin/resumes"
              className="rounded-2xl border border-slate-200 p-6 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <FileText className="mb-3 text-emerald-600" />
              <h3 className="font-semibold">
                Manage Resumes
              </h3>
            </Link>

            <Link
              href="/dashboard/admin/analysis"
              className="rounded-2xl border border-slate-200 p-6 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Brain className="mb-3 text-violet-600" />
              <h3 className="font-semibold">
                Manage Analyses
              </h3>
            </Link>

          </div>

        </div>

      </div>
    </AdminGuard>
  );
}