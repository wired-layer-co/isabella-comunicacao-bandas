---
name: Isabella Monteiro — Comunicação para Bandas
description: Um press kit vivo da cena independente, impresso em tela.
colors:
  palco-preto: "#151413"
  papel-palha: "#f9ebac"
  vermelho-cartaz: "#912925"
  oliva-arquivo: "#6a621c"
  papel-claro: "#fffdf0"
typography:
  display:
    fontFamily: "Bodoni Moda Variable, Georgia, serif"
    fontSize: "clamp(4.9rem, 9.4vw, 10rem)"
    fontWeight: 610
    lineHeight: 0.76
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bodoni Moda Variable, Georgia, serif"
    fontSize: "clamp(5rem, 8.8vw, 9rem)"
    fontWeight: 610
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Bodoni Moda Variable, Georgia, serif"
    fontSize: "clamp(2.1rem, 3.5vw, 4rem)"
    fontWeight: 650
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  square: "0"
spacing:
  gutter-mobile: "18px"
  gutter-fluid: "clamp(20px, 4vw, 70px)"
  section: "clamp(100px, 11vw, 170px)"
components:
  whatsapp-button:
    backgroundColor: "{colors.vermelho-cartaz}"
    textColor: "{colors.papel-palha}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 24px"
    height: "48px"
  service-card:
    backgroundColor: "{colors.papel-palha}"
    textColor: "{colors.palco-preto}"
    rounded: "{rounded.square}"
    padding: "0"
---

# Design System: Isabella Monteiro — Comunicação para Bandas

## Overview

**Creative North Star: "Press Kit Vivo da Cena Independente"**

O sistema transforma repertório, serviço e contato em uma publicação musical montada à mão. A escala editorial e o contraste preto/palha vêm das referências Carmine Creative e Abyss Haus; o vermelho, a textura e a energia fotográfica seguem a referência Raw Energy e a paleta aprovada pela cliente. A interface deve parecer próxima de cartazes, zines e arquivos de turnê, nunca de um site SaaS ou de uma agência corporativa.

A fotografia em cor fornece a energia; as superfícies impressas organizam a leitura. Tipografia serifada monumental, sans expandida em rótulos, linhas finas e pilhas físicas de imagens sustentam a identidade em qualquer nova página.

**Key Characteristics:**

- Fotografia musical real em escala dominante.
- Contraste de papel palha e palco preto, com campos inteiros de vermelho ou oliva.
- Composição editorial assimétrica, mas leitura e ações inequívocas.
- Textura impressa discreta e recortes fotográficos físicos.
- Cantos retos, linhas finas e controles tipográficos.

## Colors

A paleta tem caráter de material impresso: tinta escura, papel envelhecido e duas tintas de apoio densas.

### Primary

- **Vermelho Cartaz:** superfície de serviços, chamadas editoriais e ação principal.

### Secondary

- **Oliva Arquivo:** fundo de colagens e fechamento, usado em campos amplos, não como acento disperso.

### Neutral

- **Palco Preto:** abertura, contato, texto forte e fundo de alto contraste.
- **Papel Palha:** superfície de leitura, texto reverso e moldura fotográfica.
- **Papel Claro:** realce de cartões ativos e áreas que precisam parecer folha nova.

### Named Rules

**The Whole Sheet Rule.** Vermelho e oliva ocupam áreas inteiras como folhas impressas; não viram pequenos confetes cromáticos.

**The Gig Contrast Rule.** Texto factual mantém contraste alto e nunca é colocado diretamente sobre uma fotografia sem uma superfície sólida.

## Typography

**Display Font:** Bodoni Moda Variable (com Georgia como fallback)  
**Body Font:** Archivo Variable (com Arial como fallback)

**Character:** Bodoni Moda fornece o contraste dramático de revista e cartaz; Archivo mantém serviços, navegação e textos profissionais precisos. O contraste entre as famílias substitui ornamento gratuito.

### Hierarchy

- **Display** (610, escala monumental fluida, line-height 0.76): manifesto do primeiro quadro e encerramentos.
- **Headline** (610, escala editorial fluida, line-height 0.8): nomes de seções.
- **Title** (650, escala fluida, line-height 0.95): serviços e agrupamentos de trabalhos.
- **Body** (400, 1rem, line-height 1.56): textos de até cerca de 60ch.
- **Label** (700, 0.74rem, tracking 0.1em, caixa alta): navegação, ações, créditos e metadados.

### Named Rules

**The Two Voices Rule.** Bodoni fala em manifestos, títulos e frases editoriais; Archivo carrega toda informação operacional.

**The Poster Tightness Rule.** Displays usam entrelinha compacta e tracking até `-0.04em`; corpo de texto nunca herda essa compressão.

## Layout

O desktop usa grades assimétricas e sobreposições intencionais. O gutter é fluido entre 20px e 70px; seções principais usam de 100px a 170px de respiro vertical. Conteúdo longo alterna campos densos de fotografia com folhas calmas de leitura. Cards de serviço aparecem em duas colunas, deslocados verticalmente como fotografias sobre uma mesa.

Abaixo de 760px, a composição vira uma sequência vertical: navegação em tela cheia, hero em cartaz empilhado, colagens preservadas e cards em uma coluna. Embeds formam trilhos horizontais com `scroll-snap`; nenhuma parte da página gera overflow horizontal até 320px.

## Elevation & Depth

O sistema é plano por padrão. Profundidade é reservada às pilhas fotográficas e vem de sobreposição, rotação, bordas de papel e uma sombra ambiente realista; superfícies de conteúdo não flutuam.

### Shadow Vocabulary

- **Pilha Fotográfica** (`0 18px 34px rgba(21, 20, 19, 0.24)`): separa apenas as imagens sobrepostas dentro dos cards.

### Named Rules

**The Tabletop Rule.** Sombras pertencem somente a objetos que poderiam estar fisicamente sobre uma mesa; seções e botões permanecem planos.

## Shapes

Superfícies, botões, embeds e imagens usam cantos retos. Linhas de 1px dividem conteúdo e bordas de papel de 5px a 7px enquadram fotografias. Rotações leves entre cerca de 1° e 8° pertencem a recortes físicos, nunca a texto corrido.

## Components

### Buttons

- **Shape:** retângulo reto sem raio.
- **Primary:** Vermelho Cartaz com Papel Palha, rótulo Archivo em caixa alta e seta linear.
- **Hover / Focus:** troca para Papel Palha com texto Palco Preto; foco amarelo vivo de 3px e offset de 5px.

### Navigation

- **Desktop:** assinatura serifada à esquerda e rótulos compactos distribuídos à direita, sobre linha fina.
- **Mobile:** botão textual abre uma folha Vermelho Cartaz em tela cheia; links viram títulos serifados grandes.
- **State:** hover sublinha com offset amplo; foco usa o anel global.

### Service Cards

- **Corner Style:** completamente reto.
- **Background:** Papel Palha, com Papel Claro no estado ativo.
- **Media:** três imagens em pilha sobre campos Oliva, Preto ou neutro; borda de papel e fita translúcida.
- **Interaction:** hover ou abertura espalha as camadas; seleção revela abaixo os trabalhos reais do serviço.
- **Content:** número, título editorial, descrição factual e ação explícita; nunca ícone genérico.

### Instagram Embeds

Embeds oficiais preservam reprodução, autoria e controles da plataforma. No desktop usam grade de três colunas; no mobile formam trilho horizontal acessível. Não substituir por mockups estáticos.

## Do's and Don'ts

### Do:

- **Do** use fotografias e trabalhos reais como prova principal.
- **Do** aplique vermelho e oliva como folhas inteiras e preserve o contraste preto/palha.
- **Do** construa interação como manipulação de impressos: espalhar, abrir, virar e revelar.
- **Do** mantenha rótulos operacionais em Archivo, pequenos mas legíveis.
- **Do** respeite redução de movimento e navegação por teclado.

### Don't:

- **Don't** introduza gradientes, vidro, brilho neon ou cartões arredondados de produto digital.
- **Don't** use ícones genéricos para representar serviços quando o trabalho real pode ocupar o espaço.
- **Don't** transforme textura em ruído que prejudica a leitura.
- **Don't** invente créditos, bandas, anos, clientes, métricas ou depoimentos.
- **Don't** suavize a composição até ela parecer uma landing page bege genérica.
