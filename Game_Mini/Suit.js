function main() {
  const choices = ["batu", "gunting", "kertas"];
  const user = prompt("Pilih: batu, gunting, atau kertas").toLowerCase();
  const comp = choices[Math.floor(Math.random() * 3)];

  if (!choices.includes(user)) {
    alert("Pilihan tidak valid!");
    return;
  }

  alert(`Kamu memilih: ${user}\nKomputer memilih: ${comp}`);

  if (user === comp) {
    alert("Hasil: Seri!");
  } else if (
    (user === "batu" && comp === "gunting") ||
    (user === "gunting" && comp === "kertas") ||
    (user === "kertas" && comp === "batu")
  ) {
    alert("Hasil: Kamu MENANG! 🎉");
  } else {
    alert("Hasil: Kamu KALAH! 😢");
  }
}

main();
