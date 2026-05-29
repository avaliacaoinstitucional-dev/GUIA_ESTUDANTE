
import { GUIDE_DATA } from '../data/courses.js';
import { layout } from '../components/layout.js';
import { getAreaIcon, getCourseFallbackImage, getCourseImage, getCourseImagePosition } from '../components/courseCard.js';
const id=new URLSearchParams(location.search).get('id');
const c=GUIDE_DATA.courses.find(x=>x.id===id) || GUIDE_DATA.courses[0];
const banner=getCourseImage(c);
const fallback=getCourseFallbackImage(c);
const bannerPosition=getCourseImagePosition(c);
const workByCourse={
  'tecnologia-em-agroecologia':['consultoria em produção agroecológica','manejo sustentável do solo','assistência técnica rural','projetos de agricultura familiar','certificação orgânica'],
  'tecnologia-em-agroindustria':['supervisão de agroindústrias','processamento de produtos rurais','controle de qualidade de alimentos','gestão de boas práticas','desenvolvimento de produtos agroindustriais'],
  'tecnologia-em-alimentos':['controle de qualidade de alimentos','segurança alimentar','desenvolvimento de novos produtos','supervisão de produção alimentícia','laboratórios de análise de alimentos'],
  'tecnologia-em-aquicultura':['manejo de piscicultura','produção de peixes e alevinos','controle de qualidade da água','gestão de viveiros aquícolas','assistência técnica em aquicultura'],
  'tecnologia-em-fruticultura':['manejo de pomares','produção e colheita de frutas','classificação e embalagem de frutas','assistência técnica rural','comercialização da produção frutícola'],
  'tecnologia-em-gestao-do-agronegocio':['administração de propriedades rurais','gestão de custos agropecuários','comercialização de produtos agrícolas','planejamento de safras','coordenação de cadeias do agronegócio'],
  'tecnologia-em-laticinios':['produção de queijos e derivados','controle de qualidade do leite','supervisão de laticínios','boas práticas de fabricação','análise de produtos lácteos'],
  'tecnologia-em-producao-de-graos':['planejamento de lavouras de grãos','armazenagem e secagem de grãos','classificação de grãos','assistência técnica agrícola','gestão de colheita e pós-colheita'],
  'tecnologia-em-gestao-comercial':['gestão de vendas','coordenação de equipes comerciais','atendimento e relacionamento com clientes','planejamento de metas comerciais','análise de mercado'],
  'tecnologia-em-gestao-publica':['administração de serviços públicos','planejamento e orçamento público','gestão de projetos governamentais','atendimento ao cidadão','controle de processos administrativos'],
  'tecnologia-em-gestao-de-recursos-humanos':['recrutamento e seleção','treinamento de equipes','rotinas trabalhistas','gestão de clima organizacional','desenvolvimento de pessoas'],
  'tecnologia-em-logistica':['controle de estoque','planejamento de transporte','gestão de distribuição','compras e suprimentos','monitoramento de entregas'],
  'tecnologia-em-marketing':['gestão de redes sociais','pesquisa de mercado','planejamento de campanhas','branding e posicionamento de marca','marketing digital'],
  'tecnologia-em-processos-gerenciais':['gestão administrativa','melhoria de processos','controle financeiro básico','coordenação de equipes','planejamento estratégico'],
  'tecnologia-em-automacao-industrial':['programação de CLPs','instalação de sensores industriais','controle de processos automatizados','manutenção de sistemas automatizados','integração de máquinas e robôs'],
  'tecnologia-em-eletrotecnica-industrial':['manutenção de motores elétricos','instalação de painéis elétricos','comandos elétricos industriais','projetos de instalações elétricas','inspeção de sistemas elétricos'],
  'tecnologia-em-eletronica-industrial':['manutenção de placas eletrônicas','instrumentação industrial','testes em circuitos eletrônicos','automação com sensores','suporte técnico em equipamentos eletrônicos'],
  'tecnologia-em-gestao-da-producao-industrial':['planejamento e controle da produção','supervisão de linhas produtivas','melhoria de processos industriais','controle de produtividade','gestão de indicadores de produção'],
  'tecnologia-em-manutencao-industrial':['planejamento de manutenção','manutenção preventiva de máquinas','diagnóstico de falhas industriais','gestão de peças e equipamentos','supervisão de equipes de manutenção'],
  'tecnologia-em-manutencao-de-aeronaves':['inspeção de aeronaves','manutenção de sistemas aeronáuticos','controle técnico de manutenção','suporte em hangares e oficinas','segurança operacional aeronáutica'],
  'tecnologia-em-mecanica-de-precisao':['usinagem de precisão','operação de máquinas CNC','metrologia industrial','fabricação de peças técnicas','controle dimensional'],
  'tecnologia-em-producao-textil':['supervisão de confecção têxtil','controle de qualidade de tecidos','planejamento de produção têxtil','desenvolvimento de produtos têxteis','gestão de processos de costura'],
  'tecnologia-em-biocombustiveis':['produção de biodiesel e etanol','controle de processos bioenergéticos','análise de matéria-prima vegetal','operações em usinas','controle de qualidade de biocombustíveis'],
  'tecnologia-em-construcao-de-edificios':['acompanhamento de obras','orçamento de construção','controle de materiais no canteiro','leitura de projetos','supervisão de equipes de obra'],
  'tecnologia-em-controle-de-obras':['planejamento de cronogramas de obra','fiscalização de serviços','controle de custos de construção','medição de obras','gestão de documentos técnicos'],
  'tecnologia-em-energias-renovaveis':['instalação de sistemas solares','projetos de energia renovável','manutenção de painéis fotovoltaicos','análise de eficiência energética','suporte em geração limpa'],
  'tecnologia-em-gestao-da-qualidade':['auditoria de qualidade','controle de processos','implantação de normas e procedimentos','inspeção de produtos e serviços','gestão de indicadores de qualidade'],
  'tecnologia-em-gestao-de-energia-e-eficiencia-energetica':['diagnóstico de consumo de energia','projetos de eficiência energética','gestão de contratos de energia','monitoramento de desperdícios','planejamento de economia energética'],
  'tecnologia-em-horticultura':['produção de hortaliças','manejo de estufas e viveiros','irrigação e nutrição de plantas','comercialização de hortaliças','assistência técnica em horticultura'],
  'tecnologia-em-producao-sucroalcooleira':['processos de açúcar e etanol','operação em usinas sucroalcooleiras','controle de qualidade industrial','gestão de moagem e fermentação','aproveitamento de subprodutos da cana'],
  'tecnologia-em-seguranca-do-trabalho':['inspeção de ambientes de trabalho','prevenção de acidentes','treinamentos de segurança','elaboração de mapas de risco','controle de EPIs e normas'],
  'tecnologia-em-estetica-e-cosmetica':['atendimento em estética facial','procedimentos corporais','consultoria em cosméticos','gestão de clínica estética','biossegurança em estética'],
  'tecnologia-em-gestao-hospitalar':['administração hospitalar','gestão de clínicas e unidades de saúde','controle de prontuários e processos','planejamento de serviços de saúde','gestão de equipes administrativas'],
  'tecnologia-em-oftalmica':['adaptação de lentes oftálmicas','suporte em óticas e laboratórios','orientação sobre armações e lentes','controle de qualidade óptica','atendimento técnico em saúde visual'],
  'tecnologia-em-podologia':['atendimento podológico preventivo','cuidados com pés diabéticos','podologia esportiva','biossegurança em consultórios','gestão de clínica podológica'],
  'tecnologia-em-radiologia':['operação de equipamentos de imagem','suporte em exames radiológicos','radiologia médica e odontológica','controle de proteção radiológica','processamento de imagens diagnósticas'],
  'tecnologia-em-agrocomputacao':['tecnologia aplicada ao campo','sensoriamento e dados agrícolas','automação de propriedades rurais','suporte a softwares agropecuários','monitoramento digital de lavouras'],
  'tecnologia-em-analise-e-desenvolvimento-de-sistemas':['desenvolvimento de aplicativos','programação web','análise de sistemas','testes de software','suporte a sistemas corporativos'],
  'tecnologia-em-banco-de-dados':['administração de bancos de dados','modelagem de dados','relatórios e análise de informações','segurança de dados','suporte a sistemas de informação'],
  'tecnologia-em-gestao-da-tecnologia-da-informacao':['coordenação de equipes de TI','gestão de projetos tecnológicos','suporte a infraestrutura digital','governança de TI','planejamento de sistemas empresariais'],
  'tecnologia-em-inteligencia-artificial':['desenvolvimento de modelos de IA','análise de dados','automação com aprendizado de máquina','chatbots e assistentes digitais','soluções preditivas para empresas'],
  'tecnologia-em-internet-das-coisas':['prototipagem com sensores','automação residencial e industrial','dispositivos conectados','monitoramento remoto','integração de hardware e software'],
  'tecnologia-em-redes-de-computadores':['administração de redes','suporte de infraestrutura','configuração de servidores','segurança de redes','manutenção de internet corporativa'],
  'tecnologia-em-seguranca-da-informacao':['proteção de dados','análise de vulnerabilidades','monitoramento de incidentes digitais','segurança de redes e sistemas','políticas de segurança da informação'],
  'tecnologia-em-sistemas-biomedicos':['manutenção de equipamentos hospitalares','suporte técnico em tecnologia médica','calibração de aparelhos biomédicos','gestão de equipamentos de saúde','treinamento de usuários em hospitais'],
  'tecnologia-em-sistemas-embarcados':['programação de microcontroladores','projetos com placas eletrônicas','automação com sensores','desenvolvimento de dispositivos inteligentes','integração de hardware e software']
};
const possibilities=workByCourse[c.id] || c.future;
layout(`<section class="container detail-hero"><a class="btn btn-ghost" href="cursos.html">← voltar</a><div class="detail-banner"><img src="${banner}" alt="Imagem de ${c.area}" style="object-position:${bannerPosition}" onerror="this.onerror=null;this.src='${fallback}'"></div><div class="detail-card"><div><span class="eyebrow"><i class="${getAreaIcon(c.area)}"></i> ${c.area}</span><h1 class="big-title">${c.title}</h1><p class="lead">${c.summary}</p><div class="tagrow">${c.vibes.map(v=>`<span class="tag">${v}</span>`).join('')}</div></div><aside class="card"><h3>Possibilidade de Oferta</h3><div class="tagrow">${c.schools.map(s=>`<a class="tag" href="cursos.html?school=${encodeURIComponent(s)}">${s}</a>`).join('')}</div></aside></div></section><section class="container section"><div class="grid"><article class="card"><h2>Combina com quem?</h2><ul class="info-list">${c.match.map(i=>`<li>${i}</li>`).join('')}</ul></article><article class="card future-card"><h2>Possibilidades</h2><ul class="info-list future-list">${possibilities.map(i=>`<li>${i}</li>`).join('')}</ul></article><article class="card"><h2>Habilidades</h2><ul class="info-list">${c.skills.map(i=>`<li>${i}</li>`).join('')}</ul></article></div></section><section class="container section"><div class="card"><h2>Antes de escolher, pense nisso</h2><p>Pesquise a rotina da área, converse com professores ou profissionais, veja se a unidade fica acessível para você e reflita sobre o que você gosta de aprender na prática. O melhor curso não é apenas o “mais famoso”: é aquele que conversa com seu perfil, seus planos e suas possibilidades.</p><div class="hero-actions"><a class="btn btn-primary" href="cursos.html?area=${encodeURIComponent(c.area)}">Ver cursos parecidos</a><a class="btn btn-ghost" href="escolas.html">Ver por unidade</a></div></div></section>`, 'cursos');
