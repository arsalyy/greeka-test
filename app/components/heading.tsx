"use client";
import React from "react";
import useFerryOperators from "@/app/hooks/useFerryOperators";

const Heading: React.FC = () => {
  const { ferryOperators } = useFerryOperators();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-left">Ferry Operators</h1>
      <p className="mt-2 text-lg text-left">
        Discover the{" "}
        <span className="font-bold">{`${
          ferryOperators?.length ?? 0
        } ferry operators`}</span>{" "}
        we work with
      </p>
    </div>
  );
};

export { Heading };
