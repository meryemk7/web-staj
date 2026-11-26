export interface Gorev {
    id: number;
    baslik: string;
    oncelik: string;
    tamamlandi: boolean;
}
export type Durum = "tumu" | "bekleyen" | "tamamlanan";

export interface ApiGorev {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}