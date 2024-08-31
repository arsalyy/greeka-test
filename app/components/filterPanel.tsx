"use client";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IFilterPanel } from "@/app/interfaces";
import { ferryTypes } from "@/app/constants";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const FilterPanel: React.FC<IFilterPanel> = ({ onClose }) => (
  <div className="bg-[rgb(253,253,253)] border border-gray-300 shadow-lg p-4 rounded-lg w-64 ml-4 h-fit">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">Filters</h3>
      <CloseIcon
        className="cursor-pointer"
        onClick={onClose}
        fontSize="small"
      />
    </div>

    <div className="mb-4 border-b border-gray-300 pb-4">
      <label htmlFor="country" className="block text-sm font-medium mb-1">
        Operating in
      </label>
      <div className="relative">
        <LocationOnOutlinedIcon
          fontSize="small"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        <select
          id="country"
          className="w-full border border-gray-300 rounded-lg p-2 pl-10 bg-white"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Select a country
          </option>
        </select>
      </div>
    </div>

    <div>
      <h4 className="text-sm font-medium mb-2">Ferry types</h4>
      {ferryTypes?.map((ferryType, index) => (
        <div key={index + 1} className="flex items-center mb-2">
          <input
            id={`ferry-type-${index + 1}`}
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label
            htmlFor={`ferry-type-${index + 1}`}
            className="ml-2 text-sm text-gray-700"
          >
            {ferryType}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export { FilterPanel };
