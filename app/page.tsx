"use client";
import React, { useState } from "react";
import { Heading } from "@/app/components/heading";
import { Toolbar } from "@/app/components/toolbar";
import { FilterPanel } from "@/app/components/filterPanel";
import { Card } from "@/app/components/card";
import useFerryOperators from "@/app/hooks/useFerryOperators";

const Page: React.FC = () => {
  const [filtersSelected, setFiltersSelected] = useState(true);
  const { ferryOperators } = useFerryOperators();

  return (
    <React.Fragment>
      <Heading />
      <Toolbar
        filtersSelected={filtersSelected}
        setFiltersSelected={setFiltersSelected}
      />
      <div className="flex flex-col md:flex-row w-full h-full">
        {filtersSelected && (
          <FilterPanel onClose={() => setFiltersSelected(false)} />
        )}
        <div
          className={`flex-1 p-4 ${filtersSelected ? "md:w-3/4" : "w-full"}`}
        >
          {ferryOperators?.map((ferryOperator, index) => (
            <Card key={index + 1} data={ferryOperator} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page;
