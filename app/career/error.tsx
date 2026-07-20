"use client";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">

      <h2 className="text-3xl font-bold text-red-600">
        Something went wrong!
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Try Again
      </button>

    </div>
  );
}