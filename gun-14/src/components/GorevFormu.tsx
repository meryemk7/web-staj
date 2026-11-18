import { useState, type SubmitEvent } from "react";

interface Props {
  gorevEkle: (baslik: string, oncelik: string) => void;
}

export default function GorevFormu({ gorevEkle }: Props) {
  const [baslik, setBaslik] = useState("");
  const [oncelik, setOncelik] = useState("");

  function gonder(olay: SubmitEvent<HTMLFormElement>) {
    olay.preventDefault();
    if (baslik.trim().length < 3 || oncelik === "") return;
    gorevEkle(baslik.trim(), oncelik);
    setBaslik("");
    setOncelik("");
  }

  return (
    <form className="form" onSubmit={gonder}>
      <label>
        Görev Başlığı:
        <input
          value={baslik}
          onChange={(e) => setBaslik(e.target.value)}
          required
          minLength={3}
          maxLength={80}
        />
      </label>
      <label>
        Öncelik:
        <select value={oncelik} onChange={(e) => setOncelik(e.target.value)} required>
          <option value="">Öncelik Seçiniz</option>
          <option value="Düşük">Düşük</option>
          <option value="Orta">Orta</option>
          <option value="Yüksek">Yüksek</option>
        </select>
      </label>
      <button type="submit">Görevi Kaydet</button>
    </form>
  );
}