
import { escapeHtml } from './layout.js';
const areaIcons={
  'Tecnologia e Programação':'ri-code-box-line',
  'Gestão, Negócios e Serviços':'ri-briefcase-4-line',
  'Indústria, Manutenção e Produção':'ri-tools-line',
  'Agro, Alimentos e Sustentabilidade':'ri-leaf-line',
  'Saúde, Bem-Estar e Estética':'ri-heart-pulse-line'
};
const areaImages={
  'Tecnologia e Programação':'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  'Gestão, Negócios e Serviços':'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  'Indústria, Manutenção e Produção':'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
  'Agro, Alimentos e Sustentabilidade':'https://images.unsplash.com/photo-1599438975636-a3e2a05dddfe?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Saúde, Bem-Estar e Estética':'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80'
};
const courseImages={
  'tecnologia-em-alimentos':'https://plus.unsplash.com/premium_photo-1664300944295-58f25a193a6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-aquicultura':'https://images.unsplash.com/photo-1628859742240-269783f56d17?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};
export function getAreaIcon(area){return areaIcons[area]||'ri-flashlight-line';}
export function getAreaImage(area){return areaImages[area]||'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80';}
export function getCourseImage(course){return courseImages[course.id]||getAreaImage(course.area);}
export function courseCard(course){
 const schools=course.schools.slice(0,3).map(s=>`<span class="tag">${escapeHtml(s)}</span>`).join('');
 const more=course.schools.length>3?`<span class="tag">+${course.schools.length-3}</span>`:'';
 const image=getCourseImage(course);
 const iconClass=getAreaIcon(course.area);
 return `<article class="card course-card"><img class="course-cover" src="${image}" alt="${escapeHtml(course.area)}"><div class="course-info"><div class="icon"><i class="${iconClass}"></i></div><span class="tag">${escapeHtml(course.area)}</span><h3>${escapeHtml(course.title)}</h3><p>${escapeHtml(course.summary)}</p><div class="school-list">${schools}${more}</div></div><div class="bottom"><span class="mini">${course.schools.length} unidade(s)</span><a class="btn btn-ghost" href="curso.html?id=${course.id}">Ver detalhes</a></div></article>`;
}
