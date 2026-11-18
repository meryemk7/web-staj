import type { Gorev } from "../types";

interface Props {
  gorev: Gorev;
  durumDegistir: (id: number) => void;
  gorevSil: (id: number) => void;
}

export default function GorevKarti({ gorev, durumDegistir, gorevSil }: Props) {
  return (
    <li className="kart">
      <span style={{ textDecoration: gorev.tamamlandi ? "line-through" : "none" }}>
        {gorev.tamamlandi ? "✅ " : "⬜ "}
        {gorev.baslik} ({gorev.oncelik})
      </span>
      <button onClick={() => durumDegistir(gorev.id)}>
        {gorev.tamamlandi ? "Geri al" : "Tamamlandı"}
      </button>
      <button onClick={() => gorevSil(gorev.id)}>Sil</button>
    </li>
  );
}