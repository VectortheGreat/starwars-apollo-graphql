export const yourPagesTableFields = [
  { id: 1, key: "title(api_object_key)", name: "Name(Table Name)", align: "left" },
  //* Other Table Fields Here
  { id: 2, key: "director", name: "Director" },
  { id: 3, key: "episodeID", name: "Episode" },
  { id: 4, key: "releaseDate", name: "Release Date" },
];

export const filmCollapseTableFields = [
  {
    title: "Actors", //* Collapse Table Title
    parentKey: "characterConnection", //* It is Dynamic Parent Query Key
    childKey: "characters", //* It is Dynamic Child Query Key
    fields: [
      { id: 1, key: "name(api_object_key)", name: "Name(Table Name)", align: "left" },
      //* Other Collapse Table Fields Here
      { id: 2, key: "gender", name: "Gender" },
      { id: 3, key: "birthYear", name: "Birth Year" },
      { id: 4, key: "mass", name: "Mass" },
    ],
  },

  //* Other Collapse Table Fields Here

  {
    title: "Planets",
    parentKey: "planetConnection",
    childKey: "planets",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "diameter", name: "Diameter" },
      { id: 3, key: "gravity", name: "Gravity" },
      { id: 4, key: "population", name: "Population" },
      { id: 5, key: "surfaceWater", name: "Surface Water" },
    ],
  },
  {
    title: "Starships",
    parentKey: "starshipConnection",
    childKey: "starships",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "cargoCapacity", name: "Cargo Capacity" },
      { id: 3, key: "consumables", name: "Consumables" },
    ],
  },
];
