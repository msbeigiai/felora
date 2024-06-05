import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Courses from "../components/courses/Courses";
import Contact from "../components/contact/Contact";

const CustomRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/درباره من" element={<About />} />
        <Route path="/دوره ها" element={<Courses />} />
        <Route path="/تماس با من" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default CustomRouter;
