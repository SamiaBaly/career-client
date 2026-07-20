"use client";

import {
  FileText,
  Brain,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import useAnalytics from "@/app/hooks/useAnalytics";

import StatsSkeleton from "@/app/components/StatsSkeleton";
import RecentResumes from "@/app/components/RecentResumes";
import RecentAnalyses from "@/app/components/RecentAnalyses";
import ErrorState from "@/app/components/ErrorState";
import CareerMatches from "@/app/components/dashboard/CareerMatches";

type AnalyticsKey =
  | "totalAnalyses"
  | "averageScore"
  | "highestScore"
  | "latestScore";

const stats: {
  title: string;
  key: AnalyticsKey;
  icon: any;
  description: string;
}[] = [
    {
      title: "AI Analysis",
      key: "totalAnalyses",
      icon: Brain,
      description: "Resume reviews completed",
    },
    {
      title: "Average Score",
      key: "averageScore",
      icon: TrendingUp,
      description: "Overall resume quality",
    },
    {
      title: "Highest Score",
      key: "highestScore",
      icon: Sparkles,
      description: "Best performance",
    },
    {
      title: "Latest Score",
      key: "latestScore",
      icon: FileText,
      description: "Latest AI feedback",
    },
  ];

export default function UserDashboard() {
  const {
    analytics,
    loading,
    error,
    refetch,
  } = useAnalytics();

  if (error) {
    return (
      <div className="p-6">
        <ErrorState
          title="Dashboard Error"
          description="Unable to load analytics."
          onRetry={refetch}
        />
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        p-4
        md:p-8
        dark:bg-gray-950
      "
    >
      {/* Welcome */}

      <div
        className="
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          p-8
          text-white
          shadow-lg
        "
      >
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-3 max-w-xl text-blue-100">
          Track your resume performance,
          AI insights and discover your
          best career opportunities.
        </p>
      </div>

      {/* Stats */}

      <div
        className="
          mt-8
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
            <StatsSkeleton key={i} />
          ))
          : stats.map((item) => {
            const Icon = item.icon;

            const value =
              analytics?.[item.key] ?? 0;

            return (
              <div
                key={item.title}
                className="
rounded-3xl
bg-white/90
dark:bg-slate-900/90
backdrop-blur-xl
p-6
shadow-lg
shadow-slate-200/40
dark:shadow-black/20
transition-all
duration-300
hover:-translate-y-2
hover:shadow-2xl
"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="
                          text-sm
                          text-gray-500
                          dark:text-gray-400
                        "
                    >
                      {item.title}
                    </p>

                    <h2
                      className="
                          mt-3
                          text-3xl
                          font-bold
                          text-gray-900
                          dark:text-white
                        "
                    >
                      {item.key === "totalAnalyses"
                        ? value
                        : `${value}%`}
                    </h2>
                  </div>

                  <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-100
                        dark:bg-blue-950
                      "
                  >
                    <Icon
                      size={24}
                      className="
                          text-blue-600
                          dark:text-blue-400
                        "
                    />
                  </div>
                </div>

                <p
                  className="
                      mt-5
                      text-sm
                      text-gray-400
                    "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
      </div>

      {/* Resume */}

      <div
        className="
          mt-10
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-6
          dark:border-gray-800
          dark:bg-gray-900
        "
      >
        <RecentResumes />
      </div>

      {/* Analysis + Career */}

      <div
        className="
          mt-8
          grid
          gap-8
          xl:grid-cols-2
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            dark:border-gray-800
            dark:bg-gray-900
          "
        >
          <RecentAnalyses />
        </div>

        <div
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            dark:border-gray-800
            dark:bg-gray-900
          "
        >
          <CareerMatches limit={3} />
        </div>
      </div>
    </div>
  );
}