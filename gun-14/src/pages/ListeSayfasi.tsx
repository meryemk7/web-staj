import { useState, type Dispatch, type SetStateAction } from "react";
import type { Gorev, Durum } from "../types";
import GorevFormu from "../components/GorevFormu";
import GorevFiltresi from "../components/GorevFiltresi";
import GorevListesi from "../components/GorevListesi";
import { apidenGorevleriGetir } from "../api";

interface Props {
  gorevler: Gorev[];
  setGorevler: Dispatch<SetStateAction<Gorev[]>>;
}

export default function ListeSayfasi({ gorevler, setGorevler }: Props) {
  const [arama, setArama] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");
  const [durum, setDurum] = useState<Durum>("tumu");

  const aranan = arama.trim().toLocaleLowerCase("tr");
  const gosterilecekler = gorevler.filter((g) => {
    const aramayaUyuyor = g.baslik.toLocaleLowerCase("tr").includes(aranan);
    const durumaUyuyor =
      durum === "bekleyen" ? !g.tamamlandi : durum === "tamamlanan" ? g.tamamlandi : true;
    return aramayaUyuyor && durumaUyuyor;
  });

  const bekleyenSayisi = gorevler.filter((g) => !g.tamamlandi).length;

  async function ornekGorevleriYukle() {
  setYukleniyor(true);
  setHata("");
  try {
    const gelenler = await apidenGorevleriGetir();
    setGorevler((onceki) => {
      const mevcutIdler = onceki.map((g) => g.id);
      const yeniler = gelenler.filter((g) => !mevcutIdler.includes(g.id));
      return [...onceki, ...yeniler];
    });
  } catch {
    setHata("Görevler yüklenemedi. Bağlantını kontrol edip tekrar dene.");
  } finally {
    setYukleniyor(false);
  }
}

  return (
    <>
      <GorevFormu setGorevler={setGorevler} />
      <button onClick={ornekGorevleriYukle} disabled={yukleniyor}>
        {yukleniyor ? "Yükleniyor..." : "Örnek görevleri yükle"}
      </button>
      {hata && <p>{hata}</p>}
      <p>Bekleyen görev sayısı: {bekleyenSayisi}</p>
      <GorevFiltresi arama={arama} setArama={setArama} durum={durum} setDurum={setDurum} />
      <GorevListesi gorevler={gosterilecekler} setGorevler={setGorevler} />
    </>
  );
}