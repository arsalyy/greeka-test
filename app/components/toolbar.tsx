"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import TuneIcon from "@mui/icons-material/Tune";
import SortIcon from "@mui/icons-material/Sort";
import { IToolbar } from "@/app/interfaces";

const Toolbar: React.FC<IToolbar> = ({
  filtersSelected,
  setFiltersSelected,
}) => {
  return (
    <div className="flex justify-between items-center p-4 w-full">
      <div className="flex space-x-2">
        <button
          onClick={() => setFiltersSelected(!filtersSelected)}
          className="flex items-center px-2 py-1 text-sm font-medium text-gray-700 bg-[rgb(253,253,253)] border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
        >
          <TuneIcon
            color={filtersSelected ? "primary" : "inherit"}
            fontSize="small"
            className="mr-1"
          />
          <span>Filters</span>
        </button>

        <button className="flex items-center px-2 py-1 text-sm font-medium text-gray-700 bg-[rgb(253,253,253)] border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
          <SortIcon fontSize="small" className="mr-1" />
          <span>Sort by: Reviews number (high first)</span>
        </button>

        <button className="hidden md:flex items-center px-2 py-1 text-sm font-medium text-gray-700 bg-[rgb(253,253,253)] border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
          <SearchIcon fontSize="small" className="mr-1" />
          Search
        </button>
      </div>

      <button className="hidden md:flex items-center px-2 py-1 text-sm font-medium text-blue-500 bg-[rgb(253,253,253)] border border-blue-500 rounded-md shadow-sm hover:bg-blue-100">
        <LanguageIcon fontSize="small" className="mr-1" />
        Live Map View
      </button>
    </div>
  );
};

export { Toolbar };
