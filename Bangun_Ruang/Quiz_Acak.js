let bangun = ["kubus", "balok", "bola", "kerucut", "tabung"];
let index = Math.floor(Math.random() * bangun.length);
let tebak = prompt(`Tebak bangun ruang: Berawalan huruf '${bangun[index][0]}' dan punya ${bangun[index].length} huruf`);
alert(tebak.toLowerCase() === bangun[index] ? "Benar!" : "Salah! Jawabannya: " + bangun[index]);
