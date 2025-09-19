const likeBtn   = document.getElementById('likeBtn');
const dislikeBtn= document.getElementById('dislikeBtn');

let likeCount    = 0;
let dislikeCount = 0;

/* ---------- UTIL ---------- */
function createParticle(container){
  const p = document.createElement('span');
  p.className = 'particle';
  const angle = Math.random()*360;
  const radius = 30 + Math.random()*40;
  const x = Math.cos(angle*Math.PI/180)*radius;
  const y = Math.sin(angle*Math.PI/180)*radius;
  p.style.setProperty('--end',`translate(${x}px,${y}px)`);
  p.style.left = '50%';
  p.style.top  = '50%';
  container.appendChild(p);
  p.style.animation = 'fly .7s forwards';
  p.onanimationend = ()=>p.remove();
}

function animateCounter(el,val){
  el.textContent = val;
  el.animate([{transform:'translateY(-10px)',opacity:.3},
              {transform:'translateY(0)',opacity:1}],
              {duration:300,easing:'ease-out'});
}

/* ---------- EVENT ---------- */
likeBtn.addEventListener('click',()=>{
  likeCount++;
  animateCounter(likeBtn.querySelector('.count'),likeCount);
  likeBtn.classList.add('liked');
  setTimeout(()=>likeBtn.classList.remove('liked'),500);
  const box = likeBtn.querySelector('.particles');
  for(let i=0;i<12;i++) createParticle(box);
});

dislikeBtn.addEventListener('click',()=>{
  dislikeCount++;
  animateCounter(dislikeBtn.querySelector('.count'),dislikeCount);
  dislikeBtn.classList.add('disliked');
  setTimeout(()=>dislikeBtn.classList.remove('disliked'),500);
  const box = dislikeBtn.querySelector('.particles');
  for(let i=0;i<12;i++) createParticle(box);
});
