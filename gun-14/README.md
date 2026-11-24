# Görev Takip Uygulaması (React + Typescript)

## Amaç
Görev ekleme, tamamlama, silme, arama ve duruma göre filtreleme.
Her görevin kendi detay sayfası vardır.

## Kullanılan teknolojiler
- React
- TypeScript
- Vite
- React Router

## Sayfalar
| Adres | Sayfa |
|---|---|
| `/` | Görev listesi: form, arama, filtre ve görevler |
| `/gorev/:id` | Seçilen görevin detayı |
| Diğer adresler | "Sayfa bulunamadı" mesajı |

Var olmayan bir görev numarası yazılırsa detay sayfasında "Görev bulunamadı" mesajı çıkar.

## Dosya yapısı
- `src/pages/ListeSayfasi.tsx`: görev listesi sayfası
- `src/pages/DetaySayfasi.tsx`: görev detay sayfası
- `src/pages/BulunamadiSayfasi.tsx`: bilinmeyen adresler için sayfa
- `src/components/GorevFormu.tsx`: yeni görev ekler
- `src/components/GorevFiltresi.tsx`: arama ve durum filtresi
- `src/components/GorevListesi.tsx`: görevleri listeler
- `src/components/GorevKarti.tsx`: tek bir görevi gösterir, tamamlama ve silme işlemleri burada
- `src/App.tsx`: görev verisini tutar ve sayfa yönlendirmesini yapar

## Çalıştırma
