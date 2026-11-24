import { useState, useEffect } from "react";
import type { Gorev, Durum } from "./types";
import GorevFormu from "./components/GorevFormu";
import GorevFiltresi from "./components/GorevFiltresi";
import GorevListesi from "./components/GorevListesi";

export default function App() {
  // 📒 DEFTERLER
  const [gorevler, setGorevler] = useState<Gorev[]>(
    () => JSON.parse(localStorage.getItem("gorevler") || "[]")
  );
  const [arama, setArama] = useState("");
  const [durum, setDurum] = useState<Durum>("tumu");

  // 💾 Görevler değişince otomatik kaydet
  useEffect(() => {
    localStorage.setItem("gorevler", JSON.stringify(gorevler));
  }, [gorevler]);

  // 🔍 FİLTRELEME
  const aranan = arama.trim().toLocaleLowerCase("tr");
  const gosterilecekler = gorevler.filter((g) => {
    const aramayaUyuyor = g.baslik.toLocaleLowerCase("tr").includes(aranan);
    const durumaUyuyor =
      durum === "bekleyen" ? !g.tamamlandi : durum === "tamamlanan" ? g.tamamlandi : true;
    return aramayaUyuyor && durumaUyuyor;
  });

  const bekleyenSayisi = gorevler.filter((g) => !g.tamamlandi).length;

  // 🎁 EKRANA ÇİZ VE PAKETLERİ DAĞIT
  return (
    <main>
      <h1>Görevlerim</h1>
      <GorevFormu setGorevler={setGorevler} />
      <p>Bekleyen görev sayısı: {bekleyenSayisi}</p>
      <GorevFiltresi arama={arama} setArama={setArama} durum={durum} setDurum={setDurum} />
      <GorevListesi gorevler={gosterilecekler} setGorevler={setGorevler} />
    </main>
  );
}