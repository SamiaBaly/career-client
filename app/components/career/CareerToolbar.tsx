"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
}

export default function CareerToolbar({
  search,
  setSearch,
  sort,
  setSort,
}: Props) {
  return (
    <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between">

      <input
        type="text"
        placeholder="Search careers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          md:max-w-md
          rounded-xl
          border
          border-gray-300
          dark:border-gray-700
          bg-white
          dark:bg-gray-900
          px-5
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="
          rounded-xl
          border
          border-gray-300
          dark:border-gray-700
          bg-white
          dark:bg-gray-900
          px-5
          py-3
        "
      >
        <option value="desc">
          Highest Match
        </option>

        <option value="asc">
          Lowest Match
        </option>
      </select>

    </div>
  );
}