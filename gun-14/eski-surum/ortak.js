function gorevleriGetir() {
  return JSON.parse(localStorage.getItem("gorevler")) || [];
}

function gorevleriKaydet(gorevler) {
  localStorage.setItem("gorevler", JSON.stringify(gorevler));
}

const API_URL = "https://jsonplaceholder.typicode.com/todos";

async function gorevleriApidenGetir() {
  const cevap = await fetch(API_URL);

  if (!cevap.ok) {
    throw new Error("Durum kodu: " + cevap.status);
  }

  return await cevap.json();
}