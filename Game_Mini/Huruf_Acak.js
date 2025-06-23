let kataAsli = "program";
let acak = kataAsli.split('').sort(() => Math.random() - 0.5).join('');
let tebakan = prompt(`Tebak kata dari huruf berikut: ${acak}`);
alert(tebakan.toLowerCase() === kataAsli ? "Benar!" : `Salah! Kata yang benar adalah: ${kataAsli}`);
