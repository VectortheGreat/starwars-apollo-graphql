export const speciesTableFields = [
  { id: 1, key: "name", name: "Name", align: "left" },
  { id: 2, key: "language", name: "Language" },
  { id: 3, key: "averageHeight", name: "Average Height" },
  { id: 4, key: "averageLifespan", name: "Average Lifespan" },
  { id: 5, key: "classification", name: "Classification" },
  { id: 6, key: "designation", name: "Designation" },
];

export const speciesCollapseTableFields = [
  {
    title: "Home World",
    parentKey: "homeworld",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 3, key: "gravity", name: "Gravity" },
      { id: 4, key: "population", name: "Population" },
      { id: 5, key: "diameter", name: "Diameter" },
    ],
  },
  {
    title: "Person Connection",
    parentKey: "personConnection",
    childKey: "people",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "gender", name: "Gender" },
      { id: 4, key: "mass", name: "Mass" },
      { id: 3, key: "birthYear", name: "Birth Year" },
    ],
  },
];
