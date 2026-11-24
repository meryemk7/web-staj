import { Link } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import type { Gorev } from "../types";

interface Props {
  gorev: Gorev;
  setGorevler: Dispatch<SetStateAction<Gorev[]>>;
}

export default function GorevKarti({ gorev, setGorevler }: Props) {
  function durumDegistir() {
    setGorevler((onceki) =>
      onceki.map((g) => (g.id === gorev.id ? { ...g, tamamlandi: !g.tamamlandi } : g))
    );
  }

  function gorevSil() {
    setGorevler((onceki) => onceki.filter((g) => g.id !== gorev.id));
  }

  return (
    <li className="kart">
      <span style={{ textDecoration: gorev.tamamlandi ? "line-through" : "none" }}>
        {gorev.tamamlandi ? "✅ " : "⬜ "}
        <Link to={`/gorev/${gorev.id}`}>{gorev.baslik}</Link> ({gorev.oncelik})
      </span>
      <button onClick={durumDegistir}>
        {gorev.tamamlandi ? "Geri al" : "Tamamlandı"}
      </button>
      <button onClick={gorevSil}>Sil</button>
    </li>
  );
}