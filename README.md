# Guia Jovem de Cursos

Site estático responsivo feito em HTML, CSS e JavaScript puro, usando os dados da planilha enviada.

## Estrutura
- `index.html`: página inicial com apresentação, áreas e quiz.
- `cursos.html`: listagem com busca e filtros por área/unidade.
- `curso.html?id=...`: página dinâmica de detalhe do curso.
- `escolas.html`: cursos organizados por unidade/localidade.
- `assets/js/data/courses.js`: base de dados gerada a partir da planilha.
- `assets/js/components`: componentes reutilizáveis.
- `assets/js/pages`: scripts específicos de cada página.
- `assets/css/styles.css`: layout responsivo e identidade visual.

## Como testar
Abra `index.html` no navegador. Para melhor funcionamento com módulos JS, use um servidor local simples:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Dados importados
- Cursos únicos: 46
- Unidades/localidades: 17
- Ofertas mapeadas: 113
