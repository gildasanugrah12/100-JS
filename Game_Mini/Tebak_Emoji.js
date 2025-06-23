let emojis = ["😀", "😎", "🥶", "🤖", "👻"];
let pilihan = Math.floor(Math.random() * emojis.length);
let tebakan = prompt("Tebak emoji (masukkan angka 0 - 4):");
alert(tebakan == pilihan ? "Benar! Emoji: " + emojis[pilihan] : "Salah! Emoji adalah: " + emojis[pilihan]);
