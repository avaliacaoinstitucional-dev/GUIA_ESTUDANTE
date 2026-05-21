
import { GUIDE_DATA } from '../data/courses.js';
import { layout } from '../components/layout.js';
import { courseCard } from '../components/courseCard.js';
import { filterCourses } from '../components/filters.js';
const params=new URLSearchParams(location.search);
layout(`<section class="container section"><span class="eyebrow"><i class="ri-search-line"></i> explore do seu jeito</span><h1 class="big-title">Cursos disponíveis</h1><p class="lead">Use a busca e os filtros para encontrar cursos por nome, área ou unidade.</p><div class="toolbar"><input class="input" id="q" placeholder="Buscar por curso, área ou palavra-chave"><select class="select" id="area"><option value="">Todas as áreas</option>${GUIDE_DATA.areas.map(a=>`<option>${a}</option>`).join('')}</select><select class="select" id="school"><option value="">Todas as unidades</option>${GUIDE_DATA.schools.map(s=>`<option>${s}</option>`).join('')}</select></div><p id="count" class="mini"></p><div class="course-grid" id="list"></div></section>`, 'cursos');
const els={q:document.querySelector('#q'),area:document.querySelector('#area'),school:document.querySelector('#school'),list:document.querySelector('#list'),count:document.querySelector('#count')};
els.area.value=params.get('area')||''; els.school.value=params.get('school')||'';
const areaOrder=new Map(GUIDE_DATA.areas.map((area,index)=>[area,index]));
function byArea(a,b){
 const areaDiff=(areaOrder.get(a.area)??999)-(areaOrder.get(b.area)??999);
 return areaDiff||a.title.localeCompare(b.title,'pt-BR');
}
function render(){const filtered=[...filterCourses(GUIDE_DATA.courses,{q:els.q.value,area:els.area.value,school:els.school.value})].sort(byArea); els.count.textContent=`${filtered.length} curso(s) encontrado(s)`; els.list.innerHTML=filtered.map(courseCard).join('') || '<div class="card"><h3>Nenhum curso encontrado</h3><p>Tente limpar os filtros ou usar outra palavra.</p></div>'}
Object.values(els).forEach(el=>el?.addEventListener?.('input',render)); render();
