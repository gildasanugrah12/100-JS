let posisi = Math.floor(Math.random() * 5) + 1;
let coba = prompt("Tebak posisi (1-5):");
alert(parseInt(coba) === posisi ? "Kamu ketemu!" : "Kamu belum ketemu!");
