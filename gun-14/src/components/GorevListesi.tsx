import type { Gorev } from "../types";
import GorevKarti from "./GorevKarti";

interface Props {
  gorevler: Gorev[];
  durumDegistir: (id: number) => void;
  gorevSil: (id: number) => void;
}

export default function GorevListesi({ gorevler, durumDegistir, gorevSil }: Props) {
  if (gorevler.length === 0) {
    return <p>Gösterilecek görev yok.</p>;
  }

  return (
    <ul>
      {gorevler.map((gorev) => (
        <GorevKarti
          key={gorev.id}
          gorev={gorev}
          durumDegistir={durumDegistir}
          gorevSil={gorevSil}
        />
      ))}
    </ul>
  );
}