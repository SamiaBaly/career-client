interface ErrorStateProps {
  title: string;
  description: string;
  onRetry: () => void;
}

export default function ErrorState({
  title,
  description,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="text-center p-6">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">
        {description}
      </p>

      <button
        onClick={onRetry}
        className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Try Again
      </button>

    </div>
  );
}