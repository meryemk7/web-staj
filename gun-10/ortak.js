function gorevleriGetir() {
  return JSON.parse(localStorage.getItem("gorevler")) || [];
}

function gorevleriKaydet(gorevler) {
  localStorage.setItem("gorevler", JSON.stringify(gorevler));
}