alert("Siap-siap klik OK secepatnya setelah ini!");
let t0 = Date.now();
setTimeout(() => {
  alert("KLIK SEKARANG!");
  let t1 = Date.now();
  let respon = prompt("Tekan OK dan ketik angka ini: " + (t1 - t0) + " ms");
}, Math.random() * 3000 + 1000);
