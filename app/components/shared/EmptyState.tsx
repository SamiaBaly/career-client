interface EmptyStateProps {
  title: string;
  description: string;
}


export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {

  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-gray-300
        dark:border-gray-700
        p-8
        text-center
      "
    >

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>


      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>

    </div>
  );
}