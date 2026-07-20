"use client";

import { useEffect, useState } from "react";
import {
  getAllResumes,
  deleteResumeByAdmin,
} from "@/app/services/admin.service";

interface IResume {
  _id: string;
  title: string;
  userId: string;
  createdAt: string;
}

export default function AdminResumesPage() {

  const [resumes, setResumes] =
    useState<IResume[]>([]);

  const [loading, setLoading] =
    useState(true);

  const fetchResumes = async () => {

    try {

      const res =
        await getAllResumes();

      setResumes(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    const loadResumes = async () => {
      try {
        const res = await getAllResumes();
        setResumes(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadResumes();
  }, []);

  const handleDelete = async (
    id: string
  ) => {

    const ok =
      window.confirm(
        "Delete this resume?"
      );

    if (!ok) return;

    try {

      await deleteResumeByAdmin(id);

      fetchResumes();

    } catch (error) {

      console.log(error);

    }

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

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Resume Management
        </h1>

        <p className="mt-2 text-slate-500">
          Total Resumes: {resumes.length}
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-slate-900">

        <table className="w-full">

          <thead className="bg-slate-100 dark:bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left">
                Title
              </th>

              <th className="px-6 py-4 text-left">
                User ID
              </th>

              <th className="px-6 py-4 text-left">
                Created
              </th>

              <th className="px-6 py-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {resumes.map((resume) => (

              <tr
                key={resume._id}
                className="border-b dark:border-slate-800"
              >

                <td className="px-6 py-4 font-medium">
                  {resume.title}
                </td>

                <td className="px-6 py-4">
                  {resume.userId}
                </td>

                <td className="px-6 py-4">
                  {
                    new Date(
                      resume.createdAt
                    ).toLocaleDateString()
                  }
                </td>

                <td className="px-6 py-4">

                  <button
                    onClick={() =>
                      handleDelete(
                        resume._id
                      )
                    }
                    className="rounded-xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
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