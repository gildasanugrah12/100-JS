let angka = Math.floor(Math.random() * 10) + 1;
let tebakan = prompt("Tebak angka antara 1-10:");
if (parseInt(tebakan) === angka) alert("Benar!");
else alert("Salah, angka yang benar adalah " + angka);
