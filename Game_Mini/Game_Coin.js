let tebakan = prompt("Pilih Heads atau Tails:");
let hasil = Math.random() < 0.5 ? "Heads" : "Tails";
alert(hasil === tebakan ? "Kamu menang!" : "Kamu kalah!");
