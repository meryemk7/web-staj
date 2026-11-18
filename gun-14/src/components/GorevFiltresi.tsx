import type { Durum } from "../types";

interface Props {
  arama: string;
  setArama: (deger: string) => void;
  durum: Durum;
  setDurum: (deger: Durum) => void;
}

export default function GorevFiltresi({ arama, setArama, durum, setDurum }: Props) {
  return (
    <div className="filtreler">
      <label>
        Ara:
        <input
          type="search"
          value={arama}
          placeholder="Görev başlığı yaz..."
          onChange={(e) => setArama(e.target.value)}
        />
      </label>
      <label>
        Durum:
        <select value={durum} onChange={(e) => setDurum(e.target.value as Durum)}>
          <option value="tumu">Tümü</option>
          <option value="bekleyen">Bekleyen</option>
          <option value="tamamlanan">Tamamlanan</option>
        </select>
      </label>
    </div>
  );
}