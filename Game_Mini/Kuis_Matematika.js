let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
let jawaban = prompt(`Berapa ${x} + ${y}?`);
if (parseInt(jawaban) === x + y) alert("Betul!");
else alert("Salah, jawabannya " + (x + y));
