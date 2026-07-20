"use client";

import { deleteAnalysisByAdmin, getAllAnalyses } from "@/app/services/admin.service";
import { useEffect, useState } from "react";


interface IAnalysis {
  _id: string;
  resumeId: string;
  userId: string;
  score: number;
  createdAt: string;
}

export default function AdminAnalysisPage() {

  const [analyses, setAnalyses] =
    useState<IAnalysis[]>([]);

  const [loading, setLoading] =
    useState(true);

  const fetchAnalyses = async () => {

    try {

      const res =
        await getAllAnalyses();

      setAnalyses(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    let mounted = true;

    const loadAnalyses = async () => {
      try {
        const res = await getAllAnalyses();

        if (mounted) {
          setAnalyses(res.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadAnalyses();

    return () => {
      mounted = false;
    };
  }, []);

  const handleDelete = async (
    id: string
  ) => {

    const ok =
      window.confirm(
        "Delete this analysis?"
      );

    if (!ok) return;

    await deleteAnalysisByAdmin(id);

    fetchAnalyses();

  };

  if (loading) {

    return (
      <div className="p-8">
        Loading...
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-slate-50 p-8 dark:bg-slate-950">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          AI Analysis Management
        </h1>

        <p className="mt-2 text-slate-500">
          Total Analyses: {analyses.length}
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-slate-900">

        <table className="w-full">

          <thead className="bg-slate-100 dark:bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left">
                Resume
              </th>

              <th className="px-6 py-4 text-left">
                User
              </th>

              <th className="px-6 py-4 text-left">
                Score
              </th>

              <th className="px-6 py-4 text-left">
                Date
              </th>

              <th className="px-6 py-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {analyses.map((analysis) => (

              <tr
                key={analysis._id}
                className="border-b dark:border-slate-800"
              >

                <td className="px-6 py-4">
                  {analysis.resumeId}
                </td>

                <td className="px-6 py-4">
                  {analysis.userId}
                </td>

                <td className="px-6 py-4 font-semibold text-green-600">
                  {analysis.score}%
                </td>

                <td className="px-6 py-4">
                  {new Date(
                    analysis.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">

                  <button
                    onClick={() =>
                      handleDelete(
                        analysis._id
                      )
                    }
                    className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}