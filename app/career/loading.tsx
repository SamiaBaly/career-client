import CareerSkeleton from "@/app/components/career/CareerSkeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <CareerSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}