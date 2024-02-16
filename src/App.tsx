import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
