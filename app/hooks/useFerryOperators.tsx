"use client";
import { useState, useEffect } from "react";
import { ferryOperatorsData } from "@/app/constants";
import { IFerryOperator } from "@/app/interfaces";

const useFerryOperators = () => {
  const [ferryOperators, setFerryOperators] = useState<IFerryOperator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFerryOperators = async () => {
      // This is the place where we should be calling an API to fetch the ferry operators
      // Since I don't have an API, so I am using a constant (dummy data) to initialize the data
      setFerryOperators(ferryOperatorsData);
      setLoading(false);
    };

    fetchFerryOperators();
  }, []);

  return { ferryOperators, loading, error };
};

export default useFerryOperators;
