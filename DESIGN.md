---
name: Isabella Monteiro — Comunicação para Bandas
description: Um press kit vivo para a cena independente, com energia de palco e materialidade editorial.
colors:
  palco-preto: "#151413"
  papel-palha: "#f9ebac"
  papel-claro: "#fff9dc"
  vermelho-cartaz: "#912925"
  vermelho-luz: "#c43f39"
  oliva-arquivo: "#6a621c"
typography:
  display:
    fontFamily: "Bodoni Moda Variable, Georgia, serif"
    fontSize: "clamp(3.6rem, 7vw, 6rem)"
    fontWeight: 640
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 740
    lineHeight: 1.4
    letterSpacing: "0.09em"
rounded:
  straight: "0"
  card: "28px"
  card-mobile: "22px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4.4vw, 72px)"
  section: "clamp(96px, 11vw, 172px)"
  header: "72px"
  header-mobile: "58px"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.papel-palha}"
    rounded: "{rounded.straight}"
    padding: "0 20px"
    height: "50px"
  button-primary:
    backgroundColor: "{colors.vermelho-cartaz}"
    textColor: "{colors.papel-palha}"
    rounded: "{rounded.straight}"
    padding: "0 28px"
    height: "62px"
  filter-chip:
    backgroundColor: "{colors.palco-preto}"
    textColor: "{colors.papel-claro}"
    rounded: "{rounded.straight}"
    padding: "8px 11px"
  project-card:
    backgroundColor: "{colors.palco-preto}"
    textColor: "{colors.papel-palha}"
    rounded: "{rounded.card}"
    padding: "24px 25px 26px"
---

# Design System: Isabella Monteiro — Comunicação para Bandas

## Overview

**Creative North Star: "Press Kit Vivo da Cena Independente"**

O sistema combina a urgência de um cartaz de show com a clareza de um portfólio profissional. A página deve parecer montada com fotografias, folhas impressas e títulos editoriais, sem perder legibilidade, velocidade ou confiança comercial.

A energia vem de campos inteiros de cor, escala tipográfica e sobreposição física. Fotografias e trabalhos reais são sempre protagonistas; ornamento nunca substitui conteúdo.

**Key Characteristics:**

- Tipografia editorial grande, de alto contraste.
- Preto de palco, papel palha, vermelho de cartaz e oliva de arquivo.
- Fotografia de show e peças reais em composições táteis.
- Grade alternada, transições curtas e mobile estritamente empilhado.
- Movimento editorial com máscaras, folhas deslizantes e parallax contido.

## Colors

A paleta é quente, impressa e musical: o contraste parece vir de luz de palco sobre papel envelhecido.

### Primary

- **Vermelho Cartaz:** campo de energia para serviços, estados ativos e chamadas decisivas.
- **Vermelho Luz:** ênfase tipográfica pontual, nunca como fundo dominante concorrente.

### Secondary

- **Oliva Arquivo:** superfície de apoio para colagens, rodapé e pausas visuais.

### Neutral

- **Palco Preto:** fundo principal, texto sobre papel e moldura de mídia.
- **Papel Palha:** texto em fundos escuros e superfície editorial quente.
- **Papel Claro:** área de portfólio e fundo de leitura prolongada.

**The Whole Sheet Rule.** Vermelho e oliva aparecem como campos materiais completos ou estados claros, não como pequenos salpicos decorativos.

## Typography

**Display Font:** Bodoni Moda Variable (com Georgia como fallback)

**Body Font:** Archivo Variable (com Arial como fallback)

**Character:** Bodoni entrega drama editorial e presença de cartaz; Archivo mantém navegação, legendas e textos operacionais objetivos.

### Hierarchy

- **Display** (640, fluido, 0.79–0.86): hero, títulos de seção e cortina de transição.
- **Headline** (640, fluido): títulos de cards e frases comerciais de alto impacto.
- **Body** (400, fluido, 1.55–1.62): textos de apresentação, limitados a aproximadamente 50–62 caracteres por linha.
- **Label** (740, 0.64–0.72rem, tracking amplo, caixa alta): navegação, filtros, metadados e botões.

**The Two Voices Rule.** Bodoni fala emoção e escala; Archivo organiza ação e informação. Não inverter os papéis.

## Layout

O layout usa gutter fluido, seções generosas e composição assimétrica. Hero e serviços combinam texto com mídia deslocada; o portfólio é uma sequência de capítulos sobrepostos: cada linguagem de trabalho prende a tela por um momento, escurece sua imagem de fundo e entrega lugar ao próximo capítulo. Os trabalhos usam uma grade regular, com imagem quadrada e ficha curta. Abaixo de 760px tudo vira uma coluna e os capítulos deixam de ser sticky, preservando leitura e toque confortáveis. O menu mobile ocupa toda a altura útil abaixo do cabeçalho.

O ritmo vertical principal é amplo. Espaçamentos menores existem dentro de cards e controles; entre blocos narrativos, preservar a pausa.

## Elevation & Depth

O sistema é plano por padrão. Profundidade aparece quando um objeto deve parecer físico: fotografias empilhadas, folhas e cards de projeto. A sombra é baixa e difusa; campos de interface, filtros e botões permanecem sem elevação.

### Shadow Vocabulary

- **Papel empilhado** (`0 24px 40px rgba(21, 20, 19, 0.28)`): fotos e folhas sobrepostas.
- **Card editorial** (`0 18px 40px rgba(21, 20, 19, 0.09)`): separação discreta sobre o papel claro.

**The Tabletop Rule.** Sombra só existe quando o elemento poderia ser colocado fisicamente sobre uma mesa.

## Motion

O movimento traduz os padrões centrais das referências sem copiar sua composição: o hero permanece em cena por um curto trecho e desloca título e fotografia em velocidades diferentes; títulos entram por máscara; colagens são distribuídas como cartões físicos; e cada capítulo de trabalho é sobreposto pelo seguinte enquanto sua imagem de fundo escurece.

- **Entrada editorial:** 700–1100ms, `cubic-bezier(0.16, 1, 0.3, 1)`, usada uma única vez na chegada de cada bloco.
- **Mudança de estado:** 180–560ms para menu, serviço ativo e passagem entre capítulos de trabalho.
- **Loops:** somente a faixa de serviços, pausada fora da viewport ou com a página oculta.
- **Reduced motion:** remove parallax, máscaras e duração perceptível sem ocultar conteúdo.

**The One Gesture Rule.** Cada bloco deve ter um gesto dominante; nunca empilhar parallax, escala e rotação no mesmo elemento interativo.

## Shapes

Estrutura e controles usam cantos retos. Cards de portfólio adotam cantos editoriais amplos para seguir a referência de mídia + ficha, enquanto pequenos links de ação internos podem usar formato de pílula. Fotografias de colagem mantêm bordas retas e rotações leves.

## Components

### Buttons

- **Shape:** retangular e reto; altura mínima de 50px.
- **Primary:** vermelho com texto palha, usado no contato principal.
- **Secondary / Ghost:** transparente com traço palha, invertendo no hover.
- **Hover / Focus:** mudança sólida de cor em 180–220ms; foco visível de 3px.

### Cards / Containers

- **Corner Style:** curvatura ampla nos projetos; cantos retos nas folhas sobrepostas.
- **Background:** alternância entre palco preto e vermelho cartaz.
- **Shadow Strategy:** card editorial discreto; mídia permanece dominante.
- **Internal Padding:** 20–26px na ficha inferior.

### Navigation

Cabeçalho fixo, compacto e translúcido no desktop. No mobile, o botão abre um painel vermelho de tela cheia com links Bodoni grandes, divisórias finas e rolagem vertical de segurança.

### Service Cards

Grade de quatro serviços expansíveis com título, descrição, CTA de briefing e colagem de mídia. O estado ativo muda para preto e revela conteúdo sem retirar a pessoa da seção.

## Do's and Don'ts

### Do:

- **Do** usar fotografias e trabalhos reais como núcleo de qualquer composição.
- **Do** manter hierarquia dramática com poucos tamanhos tipográficos claramente distintos.
- **Do** preservar o empilhamento em uma coluna e áreas de toque confortáveis abaixo de 760px.
- **Do** respeitar `prefers-reduced-motion` em transições e entradas.

### Don't:

- **Don't** suavizar todas as superfícies com o mesmo raio; cards, folhas e controles têm papéis diferentes.
- **Don't** adicionar carrosséis, selos ou ornamentos genéricos sem função editorial.
- **Don't** usar mais de uma faixa contínua em movimento na mesma página.
- **Don't** substituir contraste e composição por efeitos pesados ou animações longas.
