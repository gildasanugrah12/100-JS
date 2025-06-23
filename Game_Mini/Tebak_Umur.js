let umur = Math.floor(Math.random() * 100);
let coba = prompt("Tebak umur saya (0-100):");
alert(parseInt(coba) === umur ? "Tepat!" : `Salah, umur saya ${umur}`);
