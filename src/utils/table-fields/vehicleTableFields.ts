export const vehicleTableFields = [
  { id: 1, key: "name", name: "Name", align: "left" },
  { id: 2, key: "model", name: "Model" },
  { id: 3, key: "cargoCapacity", name: "Cargo Capacity" },
  { id: 4, key: "consumables", name: "Consumables" },
  { id: 5, key: "crew", name: "Crew" },
  { id: 6, key: "manufacturers", name: "Manufacturers" },
];

export const vehicleCollapseTableFields = [
  {
    title: "Pilots",
    parentKey: "pilotConnection",
    childKey: "pilots",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "gender", name: "Gender" },
      { id: 4, key: "mass", name: "Mass" },
      { id: 3, key: "birthYear", name: "Birth Year" },
    ],
  },
  {
    title: "Films",
    parentKey: "filmConnection",
    childKey: "films",
    fields: [
      { id: 1, key: "title", name: "Name", align: "left" },
      { id: 2, key: "director", name: "Director" },
      { id: 3, key: "releaseDate", name: "Release Date" },
    ],
  },
];
