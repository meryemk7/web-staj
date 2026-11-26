import type { ApiGorev, Gorev } from "./types";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export async function apidenGorevleriGetir(): Promise<Gorev[]> {
  const cevap = await fetch(API_URL);

  if (!cevap.ok) {
    throw new Error("Durum kodu: " + cevap.status);
  }

  const veri: ApiGorev[] = await cevap.json();

  return veri.map((g) => ({
    id: g.id,
    baslik: g.title,
    oncelik: "Orta",
    tamamlandi: g.completed,
  }));
}