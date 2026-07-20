"use client";

import { useMemo, useState } from "react";

import useCareerMatches from "@/app/hooks/useCareerMatches";

import CareerToolbar from "./CareerToolbar";
import CareerCard from "./CareerCard";
import CareerSkeleton from "./CareerSkeleton";
import CareerEmpty from "./CareerEmpty";


export default function CareerGrid() {
  const {
    matches = [],
    loading,
    error,
  } = useCareerMatches();


  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");


  // Get all careers
  const careers = useMemo(() => {
    return matches.flatMap(
      (match) => match.careers ?? []
    );
  }, [matches]);


  // Search + Sort
  const filteredCareers = useMemo(() => {

    return careers
      .filter((career) =>
        career.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      )
      .sort((a, b) =>
        sort === "desc"
          ? b.matchPercentage -
          a.matchPercentage
          : a.matchPercentage -
          b.matchPercentage
      );

  }, [
    careers,
    search,
    sort,
  ]);



  if (loading) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {
          Array.from({
            length: 6
          }).map((_, index) => (
            <CareerSkeleton
              key={index}
            />
          ))
        }
      </div>
    );
  }



  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load career matches.
      </div>
    );
  }



  return (
    <>

      <CareerToolbar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />


      {
        filteredCareers.length === 0 ? (

          <CareerEmpty />

        ) : (

          <>
            <p className="mb-6 text-gray-500">
              {filteredCareers.length} Career
              {filteredCareers.length > 1 ? "s" : ""}
              {" "}Found
            </p>


            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {
                filteredCareers.map(
                  (career, index) => (
                    <CareerCard
                      key={`${career.title}-${index}`}
                      career={career}
                    />
                  )
                )
              }

            </div>
          </>

        )
      }

    </>
  );
}