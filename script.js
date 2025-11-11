const countDownDate = new Date("Dec 27, 2025 08:00:00").getTime();
const timer = document.getElementById("timer");
setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  timer.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}, 1000);
