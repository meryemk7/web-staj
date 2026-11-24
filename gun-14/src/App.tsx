import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import type { Gorev } from "./types";
import ListeSayfasi from "./pages/ListeSayfasi";
import DetaySayfasi from "./pages/DetaySayfasi";
import BulunamadiSayfasi from "./pages/BulunamadiSayfasi";

export default function App() {
  const [gorevler, setGorevler] = useState<Gorev[]>(
    () => JSON.parse(localStorage.getItem("gorevler") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("gorevler", JSON.stringify(gorevler));
  }, [gorevler]);

  return (
    <main>
      <h1>Görevlerim</h1>
      <Routes>
        <Route
          path="/"
          element={<ListeSayfasi gorevler={gorevler} setGorevler={setGorevler} />}
        />
        <Route path="/gorev/:id" element={<DetaySayfasi gorevler={gorevler} />} />
        <Route path="*" element={<BulunamadiSayfasi />} />
      </Routes>
    </main>
  );
}