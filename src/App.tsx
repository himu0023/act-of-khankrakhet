import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Adventures from "./pages/Adventures";
import OutdoorLearning from "./pages/OutdoorLearning";
import About from "./pages/About";
import Contact from "./pages/Contact";

import TrekkingCatalogue from "./pages/TrekkingCatalogue";


function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
      <h1 className="font-serif text-5xl text-[#203C2D]">
        Page not found
      </h1>
      <p className="mt-5 text-[#292B26]/75">
        The page you requested does not exist.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route
              path="/outdoor-learning"
              element={<OutdoorLearning />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/adventures/trekking"
              element={<TrekkingCatalogue />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}