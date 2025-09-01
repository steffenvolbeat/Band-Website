import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import Band from "./routes/Band";
import About from "./routes/About";
//import Music from "./routes/Music"
import Tour from "./routes/Tours";
import Media from "./routes/Media";
import Contact from "./routes/Contact";
//import PageNotFound from "../../../task-1-basics/routing/src/pages/PageNotFound";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="band" element={<Band />} />
        <Route path="about" element={<About />} />
        {/*<Route path="music" element={<Music />} /> */}
        <Route path="tour" element={<Tour />} />
        <Route path="media" element={<Media />} />
        <Route path="contact" element={<Contact />} />
        {/*<Route path="*" element={<PageNotFound />} />*/}
      </Route>
    </Routes>
  );
}
