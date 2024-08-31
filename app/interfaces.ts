import { Dispatch, SetStateAction } from "react";

interface IVessel {
  number: number;
  popular: string[];
}

interface IFerry {
  normal: number;
  highSpeed: number;
}

interface IRating {
  points: number;
  people: number;
}

interface ICountry {
  name: string;
  code: string;
}

export interface IFerryOperator {
  logo: string;
  name: string;
  countries: ICountry[];
  vessels: IVessel;
  ferries: IFerry;
  description: string;
  rating: IRating;
}

export interface IToolbar {
  filtersSelected: boolean;
  setFiltersSelected: Dispatch<SetStateAction<boolean>>;
}

export interface IFilterPanel {
  onClose: () => void;
}
