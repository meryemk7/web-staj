import { Link } from "react-router-dom";

export default function BulunamadiSayfasi () {
    return (
        <section>
            <h2>Sayfa Bulunamadı</h2>
            <p>Aradığın adres mevcut değil.</p>
            <Link to="/">← Listeye dön</Link>
        </section>
    );
}