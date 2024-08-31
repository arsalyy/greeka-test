import { IFerryOperator } from "@/app/interfaces";

export const ferryOperatorsData: IFerryOperator[] = [
  {
    logo: "https://picsum.photos/230/35",
    name: "Blue Star Ferries",
    countries: [{ name: "Greece", code: "GR" }],
    vessels: {
      number: 8,
      popular: ["Blue Star Delos", "Blue Star Naxos"],
    },
    ferries: {
      normal: 8,
      highSpeed: 0,
    },
    rating: {
      points: 4.5,
      people: 1342,
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    logo: "https://picsum.photos/230/35",
    name: "Seajets",
    countries: [{ name: "Greece", code: "GR" }],
    vessels: {
      number: 17,
      popular: ["WorldChampion jet", "Seajet 2"],
    },
    ferries: {
      normal: 10,
      highSpeed: 7,
    },
    rating: { points: 3, people: 2467 },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    logo: "https://picsum.photos/230/35",
    name: "Anek - Superfast",
    countries: [
      { name: "Greece", code: "GR" },
      { name: "Italy", code: "IT" },
    ],
    vessels: {
      number: 6,
      popular: ["Superfast XII", "Superfast XI"],
    },
    ferries: {
      normal: 0,
      highSpeed: 0,
    },
    rating: { points: 3.5, people: 667 },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export const ferryTypes: string[] = ["Normal ferries", "High-speed ferries"];
