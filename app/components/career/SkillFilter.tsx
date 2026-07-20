"use client";

interface Props {
  skills: string[];
  selected: string;
  onSelect: (skill: string) => void;
}

export default function SkillFilter({
  skills,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">

      <button
        onClick={() => onSelect("All")}
        className={`rounded-full px-5 py-2 transition ${selected === "All"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-800"
          }`}
      >
        All
      </button>

      {skills.map((skill) => (
        <button
          key={skill}
          onClick={() => onSelect(skill)}
          className={`rounded-full px-5 py-2 transition ${selected === skill
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-800"
            }`}
        >
          {skill}
        </button>
      ))}

    </div>
  );
}