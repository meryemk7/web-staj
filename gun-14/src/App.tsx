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

  // 🛠️ FONKSİYONLAR
  function gorevEkle(baslik: string, oncelik: string) {
    setGorevler([...gorevler, { id: Date.now(), baslik, oncelik, tamamlandi: false }]);
  }

  function durumDegistir(id: number) {
    setGorevler(gorevler.map((g) => (g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g)));
  }

  function gorevSil(id: number) {
    setGorevler(gorevler.filter((g) => g.id !== id));
  }

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
      <GorevFormu gorevEkle={gorevEkle} />
      <p>Bekleyen görev sayısı: {bekleyenSayisi}</p>
      <GorevFiltresi arama={arama} setArama={setArama} durum={durum} setDurum={setDurum} />
      <GorevListesi gorevler={gosterilecekler} durumDegistir={durumDegistir} gorevSil={gorevSil} />
    </main>
  );
}