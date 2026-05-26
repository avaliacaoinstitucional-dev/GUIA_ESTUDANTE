
import { GUIDE_DATA } from '../data/courses.js';
import { layout } from '../components/layout.js';
import { courseCard, getAreaIcon } from '../components/courseCard.js';
const areas=[...new Set(GUIDE_DATA.courses.map(c=>c.area))];
const areaClass=area=>area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const featured=GUIDE_DATA.courses.slice(0,6);
layout(`
<section class="container hero"><div class="hero-copy"><span class="eyebrow"><i class="ri-rocket-line"></i> orientação para escolha do curso</span><h1>Qual curso superior combina com seu <span class="gradient">perfil?</span></h1><p class="lead">Um guia interativo para apoiar estudantes na escolha da formação superior, com informações sobre áreas, cursos, unidades ofertantes e perfis de interesse.</p><div class="hero-actions"><a class="btn btn-primary" href="cursos.html">Explorar cursos <i class="ri-arrow-right-line"></i></a><a class="btn btn-ghost btn-quiz-hero" href="#quiz">Descobrir meu perfil <i class="ri-chat-3-line"></i></a></div><div class="stats"><div class="stat"><b>${GUIDE_DATA.stats.totalCourses}</b><span>cursos</span></div><div class="stat"><b>${GUIDE_DATA.stats.totalSchools}</b><span>unidades</span></div><div class="stat"><b>${GUIDE_DATA.stats.totalOfferings}</b><span>ofertas mapeadas</span></div></div></div><div class="hero-visual"><div class="hero-image"><img src="https://plus.unsplash.com/premium_photo-1691962724987-f3d5e07179c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Estudante explorando cursos online"></div><div class="phone-card"><div class="phone-screen"><div class="story"><div class="chat"><strong>Você:</strong> “Tenho interesse por tecnologia e também pela área do agro. Como posso escolher?”</div><div class="chat"><strong>Guia:</strong> “Comece explorando as áreas de formação, veja onde os cursos são ofertados e conheça o perfil de cada opção.”</div><div class="chat"><strong>Dica:</strong> “Não escolha apenas pelo nome do curso. Observe habilidades, rotina profissional e possibilidades de atuação.”</div><span class="floating-pill">começar agora <i class="ri-rocket-line"></i></span></div></div></div></div></section>
<section class="container section"><div class="section-head"><div><h2>Escolha por área</h2><p>As áreas ajudam o estudante a compreender diferentes caminhos de formação antes de escolher um curso.</p></div><a class="btn btn-ghost" href="cursos.html">Ver todos</a></div><div class="grid">${areas.map(area=>{const c=GUIDE_DATA.courses.find(x=>x.area===area); return `<a class="card area-card area-${areaClass(area)}" href="cursos.html?area=${encodeURIComponent(area)}"><div class="icon"><i class="${getAreaIcon(area)}"></i></div><h3>${area}</h3><p>${GUIDE_DATA.courses.filter(x=>x.area===area).length} opções de curso</p></a>`}).join('')}</div></section>
<section class="container section" id="quiz"><div class="section-head"><div><h2>Quiz de Perfil do Estudante</h2><p>Responda a algumas perguntas simples e veja áreas de formação que podem se aproximar dos seus interesses, habilidades e objetivos.</p></div></div><div class="quiz"><div class="card quiz-panel"><h3>Como funciona?</h3><p>Escolha uma opção em cada pergunta. Ao final, o guia apresenta áreas e cursos relacionados às suas respostas, como apoio inicial à sua escolha.</p><button class="btn btn-primary" id="clearQuiz">Refazer</button></div><div class="card"><div id="quizBox"></div><div id="quizResult" class="result-list"></div></div></div></section>
<section class="container section"><div class="section-head"><div><h2>Cursos em destaque</h2><p>Conheça algumas formações disponíveis e veja possibilidades de atuação em diferentes áreas.</p></div></div><div class="course-grid">${featured.map(courseCard).join('')}</div></section>`, 'home');
const areaNotes={
 'Agro, Alimentos e Sustentabilidade':'Cursos ligados ao campo, alimentos, produção rural, sustentabilidade e tecnologia aplicada ao agro.',
 'Gestão, Negócios e Serviços':'Cursos para quem gosta de organizar processos, lidar com pessoas, vender, planejar e tomar decisões.',
 'Indústria, Manutenção e Produção':'Cursos com foco em máquinas, manutenção, produção, precisão técnica e rotina prática.',
 'Construção, Energia e Segurança':'Cursos para quem se interessa por obras, energia, qualidade, segurança e infraestrutura.',
 'Saúde, Bem-estar e Estética':'Cursos voltados ao cuidado com pessoas, saúde, estética, atendimento e ambientes clínicos.',
 'Tecnologia e Programação':'Cursos para quem curte sistemas, dados, redes, IA, dispositivos e resolução de problemas digitais.'
};
const questions=[
 {q:'Quando você aprende algo novo, o que mais desperta seu interesse?', a:[
  {t:'Testar sistemas, dados, aplicativos ou dispositivos digitais', s:{'Tecnologia e Programação':3,'Indústria, Manutenção e Produção':1}},
  {t:'Entender processos, pessoas, custos e formas de organizar melhor uma atividade', s:{'Gestão, Negócios e Serviços':3,'Saúde, Bem-estar e Estética':1}},
  {t:'Ver como a teoria vira prática no campo, nos alimentos, na energia ou nas obras', s:{'Agro, Alimentos e Sustentabilidade':2,'Construção, Energia e Segurança':2}}
 ]},
 {q:'Qual rotina combina mais com você?', a:[
  {t:'Programar, configurar redes, analisar informações ou proteger dados', s:{'Tecnologia e Programação':3}},
  {t:'Atender pessoas, orientar equipes, comunicar ideias ou resolver demandas do público', s:{'Gestão, Negócios e Serviços':2,'Saúde, Bem-estar e Estética':2}},
  {t:'Acompanhar máquinas, produção, manutenção, energia ou medições técnicas', s:{'Indústria, Manutenção e Produção':2,'Construção, Energia e Segurança':2}}
 ]},
 {q:'Em um projeto, você se sentiria melhor cuidando de...', a:[
  {t:'Planejamento, custos, equipe, atendimento, vendas ou logística', s:{'Gestão, Negócios e Serviços':3}},
  {t:'Qualidade, segurança, energia, execução de obra ou normas técnicas', s:{'Construção, Energia e Segurança':3,'Indústria, Manutenção e Produção':1}},
  {t:'Plantio, criação, alimentos, solo, água ou produção rural', s:{'Agro, Alimentos e Sustentabilidade':3,'Indústria, Manutenção e Produção':1}}
 ]},
 {q:'Que tipo de desafio parece mais interessante?', a:[
  {t:'Criar um aplicativo, usar IA, conectar dispositivos ou proteger dados', s:{'Tecnologia e Programação':3}},
  {t:'Melhorar uma produção, consertar equipamentos ou automatizar processos', s:{'Indústria, Manutenção e Produção':3,'Tecnologia e Programação':1}},
  {t:'Ajudar uma clínica, hospital, ótica, laboratório ou espaço de estética a funcionar melhor', s:{'Saúde, Bem-estar e Estética':3,'Gestão, Negócios e Serviços':1}}
 ]},
 {q:'Qual ambiente você gostaria de conhecer melhor?', a:[
  {t:'Empresa, comércio, setor público, estoque ou equipe administrativa', s:{'Gestão, Negócios e Serviços':3}},
  {t:'Fazenda, agroindústria, viveiro, laticínio ou laboratório de alimentos', s:{'Agro, Alimentos e Sustentabilidade':3}},
  {t:'Laboratório de informática, oficina, canteiro de obras, usina ou setor de segurança', s:{'Tecnologia e Programação':1,'Indústria, Manutenção e Produção':1,'Construção, Energia e Segurança':2}}
 ]},
 {q:'Se fosse escolher uma habilidade para começar agora, seria...', a:[
  {t:'Programação, banco de dados, redes ou inteligência artificial', s:{'Tecnologia e Programação':3}},
  {t:'Desenho técnico, energia solar, segurança do trabalho ou controle de obras', s:{'Construção, Energia e Segurança':3}},
  {t:'Eletricidade, eletrônica, mecânica, automação ou manutenção', s:{'Indústria, Manutenção e Produção':3}}
 ]},
 {q:'Em qual área você gostaria de gerar impacto?', a:[
  {t:'A produção de alimentos e o uso sustentável dos recursos naturais', s:{'Agro, Alimentos e Sustentabilidade':3}},
  {t:'O cuidado com pessoas, a saúde, a estética e a qualidade de vida', s:{'Saúde, Bem-estar e Estética':3}},
  {t:'A tecnologia, a produção, a segurança e a melhoria dos processos', s:{'Tecnologia e Programação':1,'Indústria, Manutenção e Produção':2,'Construção, Energia e Segurança':1}}
 ]},
 {q:'Pensando no futuro profissional, você se identifica mais com qual caminho?', a:[
  {t:'Um caminho com tecnologia, inovação e aprendizagem constante', s:{'Tecnologia e Programação':3}},
  {t:'Um caminho com contato com pessoas, liderança, atendimento e comunicação', s:{'Gestão, Negócios e Serviços':2,'Saúde, Bem-estar e Estética':2}},
  {t:'Um caminho técnico, prático, com normas, equipamentos e responsabilidade', s:{'Construção, Energia e Segurança':2,'Indústria, Manutenção e Produção':2}}
 ]}
];
const scores={};
const box=document.querySelector('#quizBox');
box.innerHTML=`<div class="quiz-progress"><span id="quizCount">0/${questions.length} respondidas</span><div><i id="quizBar"></i></div></div>`+questions.map((item,idx)=>`<div class="question"><h3>${idx+1}. ${item.q}</h3><div class="answers">${item.a.map((ans,i)=>`<label class="answer"><input type="radio" name="q${idx}" value="${idx}-${i}"><span>${ans.t}</span></label>`).join('')}</div></div>`).join('');
function update(){Object.keys(scores).forEach(k=>delete scores[k]); const checked=[...document.querySelectorAll('#quizBox input:checked')]; checked.forEach(input=>{const [qIdx,aIdx]=input.value.split('-').map(Number); Object.entries(questions[qIdx].a[aIdx].s).forEach(([area,points])=>scores[area]=(scores[area]||0)+points)}); const answered=checked.length; document.querySelector('#quizCount').textContent=`${answered}/${questions.length} respondidas`; document.querySelector('#quizBar').style.width=`${Math.round(answered/questions.length*100)}%`; const ranked=Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,3); const topScore=ranked[0]?.[1]||0; document.querySelector('#quizResult').innerHTML=ranked.length? ranked.map(([area,score],idx)=>{const suggestions=GUIDE_DATA.courses.filter(c=>c.area===area).slice(0,4); const percent=Math.max(32,Math.round(score/topScore*100)); return `<a class="card result-card" href="cursos.html?area=${encodeURIComponent(area)}"><span class="mini">${idx===0?'maior compatibilidade':'também combina'}</span><strong>${area}</strong><p>${areaNotes[area]}</p><div class="match-bar"><i style="width:${percent}%"></i><span>${percent}%</span></div><div class="tagrow">${suggestions.map(c=>`<span class="tag">${c.title.replace('Tecnologia em ','')}</span>`).join('')}</div></a>`}).join(''):'<p>Responda às perguntas para ver seu resultado.</p>'}
document.querySelectorAll('#quizBox input').forEach(i=>i.addEventListener('change',update)); document.querySelector('#clearQuiz').addEventListener('click',()=>{document.querySelectorAll('#quizBox input').forEach(i=>i.checked=false);update()}); update();
