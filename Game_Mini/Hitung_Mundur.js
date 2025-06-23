let countdown = 5;
let interval = setInterval(() => {
  alert(countdown);
  countdown--;
  if (countdown < 0) clearInterval(interval);
}, 1000);
