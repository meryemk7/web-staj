import type { Dispatch, SetStateAction } from "react";
import type { Gorev } from "../types";
import GorevKarti from "./GorevKarti";

interface Props {
  gorevler: Gorev[];
  setGorevler: Dispatch<SetStateAction<Gorev[]>>;
}

export default function GorevListesi({ gorevler, setGorevler }: Props) {
  if (gorevler.length === 0) {
    return <p>Gösterilecek görev yok.</p>;
  }

  return (
    <ul>
      {gorevler.map((gorev) => (
        <GorevKarti key={gorev.id} gorev={gorev} setGorevler={setGorevler} />
      ))}
    </ul>
  );
}