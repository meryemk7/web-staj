import { Link, useParams } from "react-router-dom";
import type { Gorev } from "../types";

interface Props {
  gorevler: Gorev[];
}

export default function DetaySayfasi({ gorevler }: Props) {
  const { id } = useParams();
  const gorev = gorevler.find((g) => g.id === Number(id));

  if (!gorev) {
  return (
    <section>
      <p>Görev bulunamadı.</p>
      <Link to="/">← Listeye dön</Link>
    </section>
  );
}

  return (
  <section>
    <Link to="/">← Listeye dön</Link>
    <h2>{gorev.baslik}</h2>
    <p>Öncelik: {gorev.oncelik}</p>
    <p>Durum: {gorev.tamamlandi ? "Tamamlandı" : "Bekliyor"}</p>
  </section>
);
}