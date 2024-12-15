import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/home";
import Skill from "@/pages/skill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skill />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
