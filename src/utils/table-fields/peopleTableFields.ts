export const peopleTableFields = [
  { id: 1, key: "name", name: "Name", align: "left" },
  { id: 2, key: "gender", name: "Gender" },
  { id: 3, key: "eyeColor", name: "Eye Color" },
  { id: 4, key: "hairColor", name: "Hair Color" },
  { id: 5, key: "skinColor", name: "Skin Color" },
  { id: 6, key: "mass", name: "Mass" },
  { id: 7, key: "birthYear", name: "Birth Year" },
];

export const peopleCollapseTableFields = [
  {
    title: "Home World",
    parentKey: "homeworld",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "surfaceWater", name: "Surface Water" },
      { id: 3, key: "gravity", name: "Gravity" },
      { id: 4, key: "population", name: "Population" },
      { id: 5, key: "diameter", name: "Diameter" },
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
  {
    title: "Starships",
    parentKey: "starshipConnection",
    childKey: "starships",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "cargoCapacity", name: "Cargo Capacity" },
      { id: 3, key: "model", name: "Model" },
      { id: 4, key: "crew", name: "Crew" },
    ],
  },
  {
    title: "Vehicles",
    parentKey: "vehicleConnection",
    childKey: "vehicles",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "cargoCapacity", name: "Cargo Capacity" },
      { id: 3, key: "consumables", name: "Consumables" },
    ],
  },
  {
    title: "Species",
    parentKey: "species",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "language", name: "Language" },
    ],
  },
];
