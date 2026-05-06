
export function layout(content, active='home'){
  const nav=[['index.html','Início','home'],['cursos.html','Cursos','cursos'],['escolas.html','Unidades','escolas']];
  document.body.classList.add('bg-orbs');
  document.querySelector('#app').innerHTML=`
  <header class="topbar"><div class="container nav"><a class="logo" href="index.html"><span class="logo-badge"><i class="ri-flashlight-line"></i></span><span>Guia Jovem</span></a><nav class="navlinks" id="navlinks">${nav.map(n=>`<a class="${active===n[2]?'active':''}" href="${n[0]}">${n[1]}</a>`).join('')}</nav><button class="menu-btn" id="menuBtn">Menu</button></div></header>
  <main>${content}</main><footer class="footer"><div class="container">Guia interativo para apoiar a escolha de cursos. Explore, compare e descubra trilhas que combinam com seu projeto de futuro.</div></footer>`;
  document.querySelector('#menuBtn')?.addEventListener('click',()=>document.querySelector('#navlinks').classList.toggle('open'));
}
export function escapeHtml(str=''){return String(str).replace(/[&<>'"]/g, t=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[t]));}
