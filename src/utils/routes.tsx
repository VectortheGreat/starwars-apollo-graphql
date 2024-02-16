import { AllFilms } from "../pages/AllFilms";
import { AllPeople } from "../pages/AllPeople";
import { AllPlanets } from "../pages/AllPlanets";
import { AllSpecies } from "../pages/AllSpecies";
import { AllStarships } from "../pages/AllStarships";
import { AllVehicles } from "../pages/AllVehicles";
import { Home } from "../pages/Home";

export const routes = [
  { path: "/", title: "Home", component: <Home /> },
  {
    path: "/allfilms",
    title: "All Films",
    description: "All Films from Star Wars",
    image: "https://i.etsystatic.com/14935329/r/il/5c1ca6/3339882853/il_1080xN.3339882853_mkd0.jpg",
    component: <AllFilms />,
  },
  {
    path: "/allpeople",
    title: "All People",
    description: "All People from Star Wars",
    image: "https://cdn.mos.cms.futurecdn.net/Cy2cWEEBcMHEfmDkpYhbzb.jpg",
    component: <AllPeople />,
  },
  {
    path: "/allplanets",
    title: "All Planets",
    description: "All Planets from Star Wars",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwTpeQVkhFcGD5qaE637GNHp64yqgsZD9ew&usqp=CAU",
    component: <AllPlanets />,
  },
  {
    path: "/allspecies",
    title: "All Species",
    description: "All Species from Star Wars",
    image: "https://i.redd.it/gjaqyebka4ib1.jpg",
    component: <AllSpecies />,
  },
  {
    path: "/allstarships",
    title: "All Starships",
    description: "All Starships from Star Wars",
    image: "https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024",
    component: <AllStarships />,
  },
  {
    path: "/allvehicles",
    title: "All Vehicles",
    description: "All Vehicles from Star Wars",
    image: "https://static.posters.cz/image/750/posters/star-wars-vehicles-hoth-i12249.jpg",
    component: <AllVehicles />,
  },
];
