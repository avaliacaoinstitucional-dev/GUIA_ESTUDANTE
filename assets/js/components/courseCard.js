
import { escapeHtml } from './layout.js';
const areaIcons={
  'Tecnologia e Programação':'ri-code-box-line',
  'Gestão, Negócios e Serviços':'ri-briefcase-4-line',
  'Indústria, Manutenção e Produção':'ri-tools-line',
  'Construção, Energia e Segurança':'ri-shield-check-line',
  'Agro, Alimentos e Sustentabilidade':'ri-leaf-line',
  'Saúde, Bem-estar e Estética':'ri-heart-pulse-line'
};
const areaImages={
  'Tecnologia e Programação':'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  'Gestão, Negócios e Serviços':'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  'Indústria, Manutenção e Produção':'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
  'Agro, Alimentos e Sustentabilidade':'https://images.unsplash.com/photo-1599438975636-a3e2a05dddfe?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Saúde, Bem-estar e Estética':'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80'
};
const courseImages={
  'tecnologia-em-agrocomputacao':'assets/img/courses/agrocomputacao.jpg',
  'tecnologia-em-cafeicultura':'assets/img/courses/cafeicultura.avif?v=2',
  'tecnologia-em-analise-e-desenvolvimento-de-sistemas':'assets/img/courses/analise-desenvolvimento-sistemas.jpg',
  'tecnologia-em-agroindustria':'https://images.unsplash.com/photo-1635174815483-81657b67ec48?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-banco-de-dados':'assets/img/courses/banco-de-dados.jpg',
  'tecnologia-em-alimentos':'https://plus.unsplash.com/premium_photo-1664300944295-58f25a193a6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-aquicultura':'https://images.unsplash.com/photo-1628859742240-269783f56d17?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-gestao-da-tecnologia-da-informacao':'assets/img/courses/gestao-ti.jpg',
  'tecnologia-em-inteligencia-artificial':'assets/img/courses/inteligencia-artificial.jpg',
  'tecnologia-em-internet-das-coisas':'assets/img/courses/internet-das-coisas.jpg',
  'tecnologia-em-redes-de-computadores':'assets/img/courses/redes-de-computadores.jpg',
  'tecnologia-em-seguranca-da-informacao':'assets/img/courses/seguranca-da-informacao.jpg',
  'tecnologia-em-sistemas-biomedicos':'assets/img/courses/sistemas-biomedicos.jpg',
  'tecnologia-em-sistemas-embarcados':'assets/img/courses/sistemas-embarcados.jpg',
  'tecnologia-em-fruticultura':'https://plus.unsplash.com/premium_photo-1663047207200-4db95deb7bb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-gestao-do-agronegocio':'https://plus.unsplash.com/premium_photo-1682092605397-818fd5621240?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-laticinios':'https://images.unsplash.com/photo-1629313472434-cbbfdc2e1a5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-producao-de-graos':'https://images.unsplash.com/photo-1595702858193-d7364ac942a6?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-gestao-publica':'https://images.unsplash.com/photo-1674916973880-bdf98f8de4d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-gestao-hospitalar':'assets/img/courses/gestao-hospitalar.jpg',
  'tecnologia-em-oftalmica':'assets/img/courses/oftalmica.jpg',
  'tecnologia-em-podologia':'assets/img/courses/podologia.jpg',
  'tecnologia-em-radiologia':'assets/img/courses/radiologia.jpg',
  'tecnologia-em-gestao-de-recursos-humanos':'https://plus.unsplash.com/premium_photo-1770393985073-ab53c7dbba39?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnico-em-gestao-financeira':'assets/img/courses/gestao-financeira.jpg',
  'tecnologia-em-logistica':'https://images.unsplash.com/photo-1613690413712-dbe316605644?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-processos-gerenciais':'https://images.unsplash.com/photo-1758876017929-416c85bb985d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fFRlY25vbG9naWElMjBlbSUyMFByb2Nlc3NvcyUyMEdlcmVuY2lhaXN8ZW58MHx8MHx8fDA%3D',
  'tecnologia-em-automacao-industrial':'https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-eletrotecnica-industrial':'https://images.unsplash.com/photo-1670689334799-cdc6777db8cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-eletronica-industrial':'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-gestao-da-producao-industrial':'https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-manutencao-industrial':'https://plus.unsplash.com/premium_photo-1664299076499-0f884ca327e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-manutencao-de-aeronaves':'https://images.unsplash.com/photo-1485310818226-f01c4269687f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-mecanica-de-precisao':'https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-producao-textil':'https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-biocombustiveis':'https://images.unsplash.com/photo-1515594515116-863345d8507c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-construcao-de-edificios':'https://plus.unsplash.com/premium_photo-1681992176190-a36d74a8debd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-controle-de-obras':'https://images.unsplash.com/photo-1628155849837-648cf206ec31?q=80&w=1135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-energias-renovaveis':'https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-gestao-da-qualidade':'https://images.unsplash.com/photo-1618986919307-ed52427d0bd4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-gestao-de-energia-e-eficiencia-energetica':'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-horticultura':'https://images.unsplash.com/photo-1758524051910-60a8d324e110?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-producao-sucroalcooleira':'https://plus.unsplash.com/premium_photo-1682145512095-bf096eb85304?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-seguranca-do-trabalho':'https://images.unsplash.com/photo-1737874960921-d1205a4f55da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'tecnologia-em-estetica-e-cosmetica':'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};
export function getAreaIcon(area){return areaIcons[area]||'ri-flashlight-line';}
export function getAreaImage(area){return areaImages[area]||'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80';}
export function getCourseImage(course){return courseImages[course.id]||getAreaImage(course.area);}
export function getCourseFallbackImage(course){return getAreaImage(course.area);}
const areaClass=area=>area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export function courseCard(course){
 const schools=course.schools.slice(0,3).map(s=>`<span class="tag">${escapeHtml(s)}</span>`).join('');
 const more=course.schools.length>3?`<span class="tag">+${course.schools.length-3}</span>`:'';
 const image=getCourseImage(course);
 const fallback=getCourseFallbackImage(course);
 const iconClass=getAreaIcon(course.area);
 const unitLabel=course.schools.length===1?'unidade':'unidades';
 return `<article class="card course-card area-${areaClass(course.area)}"><img class="course-cover" src="${image}" alt="${escapeHtml(course.area)}" onerror="this.onerror=null;this.src='${fallback}'"><div class="course-info"><div class="icon"><i class="${iconClass}"></i></div><span class="tag">${escapeHtml(course.area)}</span><h3>${escapeHtml(course.title)}</h3><p>${escapeHtml(course.summary)}</p><div class="school-list">${schools}${more}</div></div><div class="bottom"><span class="mini">${course.schools.length} ${unitLabel}</span><a class="btn btn-ghost" href="curso.html?id=${course.id}">Ver detalhes</a></div></article>`;
}
