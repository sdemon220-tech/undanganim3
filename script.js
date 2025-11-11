// Countdown to 2025-12-27T00:00:00
const target = new Date('2025-12-27T00:00:00');
function updateTimer(){
  const now = new Date();
  let diff = target - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);
  document.getElementById('days').innerText = String(days).padStart(2,'0');
  document.getElementById('hours').innerText = String(hours).padStart(2,'0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2,'0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2,'0');
}
setInterval(updateTimer,1000);updateTimer();

const audio = document.getElementById('bgAudio');
audio.volume = 0.25;
audio.play().catch(()=>{
  const btn = document.createElement('button');
  btn.innerText='Putar Musik';
  btn.style.position='fixed';btn.style.right='12px';btn.style.bottom='12px';btn.style.padding='10px 14px';btn.style.borderRadius='8px';btn.style.border='none';btn.style.background='#ffd54f';btn.onclick=()=>{audio.play();btn.style.display='none'};document.body.appendChild(btn);
});