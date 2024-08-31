"use client";
import React from "react";
import { IFerryOperator } from "@/app/interfaces";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import ReactCountryFlag from "react-country-flag";

const Card: React.FC<{ data: IFerryOperator }> = ({ data }) => (
  <div className="flex flex-col bg-[rgb(253,253,253)] border border-gray-300 shadow-lg rounded-lg overflow-hidden w-full mb-4">
    <div className="flex flex-col md:flex-row justify-between bg-[rgb(248,248,248)] p-3 items-start md:items-center border-b border-gray-300">
      <Image src={data.logo} alt={data.name} width={230} height={35} />
      <div className="flex flex-col justify-between items-start md:items-end">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <div className="flex items-center">
          <Rating
            name="read-only"
            defaultValue={data.rating.points}
            precision={0.5}
            readOnly
          />
          <span className="text-gray-600 ml-2 text-sm">{`by ${data.rating.people.toLocaleString()} customers`}</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row p-4 w-full">
      <div className="md:w-1/2 mb-2 md:mb-0 flex flex-col gap-3 items-start text-sm">
        <div className="flex items-center">
          <strong className="mr-1">Operates in:</strong>
          {data.countries?.map((country, index) => (
            <React.Fragment key={index}>
              <span className="flex items-center">
                <ReactCountryFlag countryCode={country.code} svg />
                <span className="ml-1">{country.name}</span>
              </span>
              {index < data.countries?.length - 1 && (
                <span className="mx-1">,</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div>
          <strong>Vessels number: </strong>
          <span className="ml-1">{data.vessels.number}</span>
        </div>
        <div>
          <strong>Ferry types: </strong>
          <span className="ml-1">
            {data.ferries.normal > 0
              ? `${data.ferries.normal} normal`
              : "Normal Ferries"}
          </span>
          <span className="ml-1">
            {data.ferries.highSpeed > 0
              ? `${data.ferries.highSpeed} high-speed`
              : ""}
          </span>
        </div>
        <div className="mt-1">
          <strong>Popular vessels:</strong>
          <div className="text-blue-500">
            {data.vessels.popular?.map((vessel, index) => (
              <React.Fragment key={vessel}>
                <a href="#" className="hover:underline">
                  {vessel}
                </a>
                {index < data.vessels.popular?.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-1/2 text-sm text-gray-700">
        <p className="multi-line-ellipsis">{data.description}</p>
        <a
          href="#"
          className="text-blue-500 flex items-center hover:underline justify-end mt-3 pt-3 border-t border-gray-300"
        >
          {`More about ${data.name}`}
          <ArrowCircleRightIcon
            fontSize="small"
            color="primary"
            className="ml-1"
          />
        </a>
      </div>
    </div>
  </div>
);

export { Card };
