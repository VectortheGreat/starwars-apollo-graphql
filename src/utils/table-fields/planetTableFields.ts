export const planetTableFields = [
  { id: 1, key: "name", name: "Name", align: "left" },
  { id: 2, key: "diameter", name: "Diameter" },
  { id: 3, key: "gravity", name: "Gravity" },
  { id: 4, key: "orbitalPeriod", name: "Orbital Period" },
  { id: 5, key: "population", name: "Population" },
  { id: 6, key: "rotationPeriod", name: "Rotation Period" },
  { id: 7, key: "surfaceWater", name: "Surface Water" },
];

export const planetCollapseTableFields = [
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
    title: "Residents",
    parentKey: "residentConnection",
    childKey: "residents",
    fields: [
      { id: 1, key: "name", name: "Name", align: "left" },
      { id: 2, key: "gender", name: "Gender" },
      { id: 3, key: "mass", name: "Mass" },
      { id: 4, key: "birthYear", name: "Birth Year" },
    ],
  },
];
