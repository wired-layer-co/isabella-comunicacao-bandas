import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const image = (name) => `${import.meta.env.BASE_URL}images/${name}`
const whatsappUrl = 'https://wa.me/554195027607?text=Oi%2C%20Isabella!%20Quero%20conversar%20sobre%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20banda.'
const instagramUrl = 'https://www.instagram.com/isamontwiro/'
const designDriveUrl = 'https://drive.google.com/drive/folders/1bcR0bI2IUFyaEegqXy4r466bG6qrRDes?usp=drive_link'
const photoDriveUrl = 'https://drive.google.com/drive/folders/1giIvnR1vjzFNCmwcnonarq3PjRQZLimn?usp=drive_link'

const services = [
  { id: 'fotografia', title: 'fotografia', description: 'ensaios promocionais, cobertura de shows e backstage.', note: 'cobertura de uma turnê, divulgação de show ou imagens que definem uma nova fase.', media: ['show-01.webp', 'show-02.webp', 'show-05.webp'] },
  { id: 'video', title: 'captação e edição de vídeo', description: 'reels/tiktoks para lançamentos, divulgação de shows, clipes e material para redes sociais.', note: 'conteúdo para divulgar o que a banda está fazendo.', media: ['video-cover-1.webp', 'video-cover-2.webp', 'video-cover-3.webp'] },
  { id: 'social', title: 'gerenciamento de redes sociais', description: 'planejamento de conteúdo, cronograma estratégico e gestão de presença digital em todas as redes.', note: 'organização de pautas e calendário para não deixar as redes paradas.', media: [] },
  { id: 'design', title: 'design e artes visuais', description: 'capas de single/álbum, identidade visual, animações mixed media, zines, cartazes de turnê e artes para feed.', note: 'visuais para single, show e redes sociais.', media: ['design-hayley.webp', 'design-ego-1.webp', 'design-ode.webp'] },
]

const workGroups = [
  { id: 'fotografia', title: 'fotografia', intro: 'show da cysterna. cobertura de show.', background: 'show-hero.webp', works: [['show-01.webp', 'cysterna', 'cobertura de show', photoDriveUrl], ['show-02.webp', 'cysterna', 'cobertura de show', photoDriveUrl], ['show-03.webp', 'cysterna', 'cobertura de show', photoDriveUrl], ['show-04.webp', 'cysterna', 'cobertura de show', photoDriveUrl], ['show-05.webp', 'cysterna', 'cobertura de show', photoDriveUrl], ['show-06.webp', 'cysterna', 'cobertura de show', photoDriveUrl]] },
  { id: 'video', title: 'captação e edição de vídeo', intro: 'reels e vídeos para lançamento e divulgação de shows.', background: 'video-reel-DcRoU84BxO2.webp', works: [['video-reel-DcRoU84BxO2.webp', 'vlog', 'reel', 'https://www.instagram.com/reel/DcRoU84BxO2/', '16 / 9'], ['video-reel-DanYMZZuH8V.webp', 'tipografia', 'reel', 'https://www.instagram.com/reel/DanYMZZuH8V/', '16 / 9'], ['video-reel-DYn16xdO8mv.webp', 'trend', 'reel', 'https://www.instagram.com/reel/DYn16xdO8mv/', '9 / 16'], ['video-reel-DWUcUc6gT3Z.webp', 'tipografia', 'reel', 'https://www.instagram.com/reel/DWUcUc6gT3Z/', '9 / 16'], ['video-reel-DV3ZrV8Dskl.webp', 'tipografia', 'reel', 'https://www.instagram.com/reel/DV3ZrV8Dskl/', '9 / 16'], ['video-reel-DVErpd1Afk6.webp', 'tipografia', 'reel', 'https://www.instagram.com/reel/DVErpd1Afk6/', '4 / 3']] },
  { id: 'design', title: 'design e artes visuais', intro: 'capas, zines, peças impressas e movimento para a identidade sair do som e ocupar o mundo.', background: 'design-hayley.webp', works: [['design-hayley.webp', 'poster hayley williams', 'artes visuais', designDriveUrl], ['design-ego-1.webp', 'ego death at a bachelorette party', 'revista — 4 páginas', designDriveUrl, undefined, ['design-ego-1.webp', 'design-ego-2.webp', 'design-ego-3.webp', 'design-ego-4.webp']], ['design-ode.webp', 'zine ode to the mets', 'zine', designDriveUrl], ['video-cover-1.webp', 'animação mixed media', 'instagram', 'https://www.instagram.com/p/DcbWDmAu1Y2/', '9 / 16'], ['video-cover-2.webp', 'animação mixed media', 'instagram', 'https://www.instagram.com/p/DcbehTuhsID/', '9 / 16']] },
]

function Arrow() { return <span className="button-line" aria-hidden="true" /> }
function WhatsAppLink({ children, className = '' }) { return <a className={`button-link ${className}`} href={whatsappUrl} target="_blank" rel="noreferrer"><span>{children}</span><Arrow /></a> }

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    document.body.classList.add('menu-open'); document.addEventListener('keydown', closeOnEscape)
    return () => { document.body.classList.remove('menu-open'); document.removeEventListener('keydown', closeOnEscape) }
  }, [open])
  const close = () => setOpen(false)
  return <header className={`site-header${open ? ' menu-is-open' : ''}`}><div className="scroll-progress" aria-hidden="true" /><a className="brand" href="#inicio" onClick={close}>isabella monteiro</a><nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="navegação principal"><a href="#sobre" onClick={close}>quem sou</a><a href="#servicos" onClick={close}>serviços</a><a href="#trabalhos" onClick={close}>trabalhos</a><a href="#contato" onClick={close}>contato</a></nav><button className="menu-toggle" type="button" aria-controls="site-nav" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? 'fechar' : 'menu'}</button></header>
}

function Hero() { return <section className="hero" id="inicio"><div className="hero-copy"><h1><span>profissionalize</span><span>a comunicação</span><span>da sua banda</span></h1><p>músicos não precisam virar criadores de conteúdo. quem entende do assunto faz isso por você.</p><WhatsAppLink>falar sobre a sua banda</WhatsAppLink></div><figure className="hero-visual"><div className="hero-paper" aria-hidden="true" /><img src={image('show-hero.webp')} alt="banda tocando em um show fotografado por isabella monteiro" fetchPriority="high" /><figcaption>fotografia de show</figcaption></figure></section> }
function MovingLine() { const phrase = 'fotografia  vídeo  redes sociais  design e artes visuais  '; return <div className="moving-line" aria-hidden="true"><div className="moving-line-track"><span>{phrase}</span><span>{phrase}</span><span>{phrase}</span><span>{phrase}</span></div></div> }

function About() { return <section className="about section-pad" id="sobre" data-reveal><div className="about-heading"><h2>quem<br />eu sou?</h2></div><div className="about-collage"><img className="about-art" src={image('isabella-portrait.webp')} alt="retrato de isabella monteiro" loading="lazy" /><img className="about-photo" src={image('show-02.webp')} alt="" loading="lazy" /><span className="collage-note" aria-hidden="true">rock, estratégia<br />e imagem</span></div><div className="about-copy"><p className="about-lead">muito prazer, sou a <strong>isabella monteiro</strong>.</p><p>apaixonada por rock e pela cena independente desde 2023, quando comecei a acompanhar de perto o movimento no rio grande do sul. hoje, morando em curitiba, uno essa vivência e paixão com a minha formação em publicidade e propaganda.</p><p>sei que o som de uma banda tem alma, mas a internet exige estratégia, estética e constância, e músicos não deveriam ter que virar criadores de conteúdo para serem ouvidos. meu objetivo é cuidar de toda a comunicação, imagem e redes sociais do seu projeto, para que vocês apenas façam o que fazem de melhor: tocar.</p></div></section> }

function ServiceArt({ service }) { if (!service.media.length) return <div className="planning-stack" aria-hidden="true"><span>planejamento</span><span>cronograma</span><span>presença</span></div>; return <div className="service-art-stack" aria-hidden="true">{service.media.map((media) => <img key={media} src={image(media)} alt="" loading="lazy" />)}</div> }
function Services() {
  const [activeId, setActiveId] = useState(null)
  const cardsRef = useRef(null)
  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 760px)')
    if (!mobileQuery.matches || !cardsRef.current) return undefined

    const observer = new IntersectionObserver((entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (current) setActiveId(current.target.dataset.serviceId)
    }, { rootMargin: '-28% 0px -42%', threshold: [0.12, 0.35, 0.6] })

    const cards = cardsRef.current.querySelectorAll('[data-service-id]')
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])
  const toggleService = (id, active) => setActiveId(active ? null : id)
  const handleServiceKeyDown = (event, id, active) => {
    if (event.key === 'Escape' && active) { event.currentTarget.blur(); setActiveId(null) }
  }
  return <section className="services section-pad" id="servicos" data-reveal><header className="services-intro"><h2>o que<br />eu faço?</h2><p>apoio seu projeto do jeito que você precisar. seja em demandas pontuais, como a cobertura de uma turnê ou o visual de um novo single, ou em uma gestão contínua para manter sua banda sempre ativa e profissional no digital.</p></header><div className="service-cards" ref={cardsRef}>{services.map((service) => { const active = activeId === service.id; return <article className={`service-card${active ? ' is-active' : ''}`} key={service.id} data-service-id={service.id}><button type="button" aria-expanded={active} onClick={() => toggleService(service.id, active)} onKeyDown={(event) => handleServiceKeyDown(event, service.id, active)}><span>{service.title}</span><span className="service-card-toggle">{active ? 'fechar' : 'ver mais'}</span></button><div className="service-card-detail" aria-hidden={!active}><div className="service-card-detail-content"><div><p>{service.description}</p><small>{service.note}</small></div><ServiceArt service={service} /></div></div></article> })}</div><div className="section-cta"><p>não sabe qual formato encaixa melhor agora?</p><WhatsAppLink>vamos conversar</WhatsAppLink></div></section>
}

function ImageLightbox({ src, sources = [src], title, onClose }) {
  const [zoomed, setZoomed] = useState(false)
  const [page, setPage] = useState(0)
  const currentSrc = sources[page]
  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && onClose()
    document.body.classList.add('lightbox-open'); document.addEventListener('keydown', closeOnEscape)
    return () => { document.body.classList.remove('lightbox-open'); document.removeEventListener('keydown', closeOnEscape) }
  }, [onClose])
  const changePage = (nextPage) => { setZoomed(false); setPage(nextPage) }
  return createPortal(<div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`imagem ampliada: ${title}`} onMouseDown={(event) => event.target === event.currentTarget && onClose()}><button className="lightbox-close" type="button" onClick={onClose} aria-label="fechar imagem">fechar</button><figure className={zoomed ? 'is-zoomed' : ''}><button className="lightbox-image" type="button" onClick={() => setZoomed((value) => !value)} aria-label={zoomed ? 'reduzir imagem' : 'ampliar imagem'}><img src={image(currentSrc)} alt={title} /></button><figcaption>{title} <span>{zoomed ? 'clique para reduzir' : 'clique para ampliar'}</span></figcaption>{sources.length > 1 && <div className="lightbox-pages"><button type="button" onClick={() => changePage(page - 1)} disabled={page === 0}>anterior</button><span>página {page + 1} de {sources.length}</span><button type="button" onClick={() => changePage(page + 1)} disabled={page === sources.length - 1}>próxima</button></div>}</figure></div>, document.body)
}

function WorkCard({ work, index }) {
  const [src, title, kind, href, aspect = '16 / 9', gallery] = work
  const instagram = href.includes('instagram.com')
  const post = instagram ? href.match(/instagram\.com\/(?:reel|p)\/([^/]+)/)?.[1] : null
  const type = href.includes('/p/') ? 'p' : 'reel'
  const [playing, setPlaying] = useState(false)
  const [embedStatus, setEmbedStatus] = useState('idle')
  const [embedAttempt, setEmbedAttempt] = useState(0)
  const [previewing, setPreviewing] = useState(false)

  useEffect(() => {
    if (!playing || embedStatus !== 'loading') return undefined
    const timeout = window.setTimeout(() => setEmbedStatus('error'), 9000)
    return () => window.clearTimeout(timeout)
  }, [playing, embedStatus, embedAttempt])

  const startEmbed = () => { setPlaying(true); setEmbedStatus('loading') }
  const retryEmbed = () => { setEmbedStatus('loading'); setEmbedAttempt((attempt) => attempt + 1) }

  return <article className={`work-card${playing ? ' is-playing' : ''}${embedStatus === 'ready' ? ' is-embed-ready' : ''}${embedStatus === 'error' ? ' is-embed-error' : ''}${previewing ? ' is-previewing' : ''}`} style={playing ? { '--embed-aspect': aspect } : undefined}>
    <div className="work-card-media">
      <img className="work-card-poster" src={image(src)} alt={title} loading="lazy" />
      {instagram && playing && <iframe key={embedAttempt} src={`https://www.instagram.com/${type}/${post}/embed/captioned/`} title={`${title} no instagram`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen onLoad={() => setEmbedStatus('ready')} onError={() => setEmbedStatus('error')} />}
      {instagram && playing && embedStatus !== 'ready' && <div className={`work-card-embed-status is-${embedStatus}`} aria-live="polite">{embedStatus === 'loading' ? <span>carregando vídeo</span> : <><span>o instagram não respondeu</span><button type="button" onClick={retryEmbed}>tentar de novo</button></>}</div>}
      {instagram && !playing && <button className="work-card-action" type="button" onClick={startEmbed} aria-label={`reproduzir ${title}`}>play</button>}
      {!instagram && <button className="work-card-action" type="button" onClick={() => setPreviewing(true)} aria-label={`ampliar ${title}`}>ver</button>}
    </div>
    <div className="work-card-copy"><strong>{title}</strong><small>{kind}</small>{instagram && playing ? <a href={href} target="_blank" rel="noreferrer">abrir no instagram</a> : <span>{String(index + 1).padStart(2, '0')}</span>}</div>
    {previewing && <ImageLightbox src={src} sources={gallery} title={title} onClose={() => setPreviewing(false)} />}
  </article>
}
function WorkGroup({ group, index }) { return <section className={`work-group group-${group.id}`} style={{ '--group-index': index }} data-work-group><div className="work-backdrop" style={{ backgroundImage: `url(${image(group.background)})` }} aria-hidden="true" /><div className="work-group-panel"><header><p>trabalhos</p><h3>{group.title}</h3><span>{group.intro}</span></header><div className="work-grid">{group.works.map((work, workIndex) => <WorkCard key={`${work[0]}-${workIndex}`} work={work} index={workIndex} />)}</div></div></section> }
function SocialWork() { const steps = [['entender', 'momento, objetivos e personalidade da banda.'], ['planejar', 'pautas e formatos que cabem na rotina do projeto.'], ['produzir', 'texto, imagem e vídeo falando a mesma língua.'], ['manter', 'cronograma e presença digital com constância.']]; return <section className="social-work" data-work-group><div className="work-backdrop social-backdrop" aria-hidden="true" /><div className="social-panel"><p>gerenciamento de redes sociais</p><h3>uma presença que continua viva entre um show e outro.</h3><ol>{steps.map(([title, text]) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}</ol><WhatsAppLink>montar um plano</WhatsAppLink></div></section> }
function Portfolio() { return <section className="portfolio" id="trabalhos"><div className="portfolio-intro"><p>trabalhos</p><h2>imagem, movimento<br />e direção visual.</h2><span>alguns trabalhos que já fiz.</span></div>{workGroups.map((group, index) => <WorkGroup key={group.id} group={group} index={index} />)}<SocialWork /></section> }

function Contact() { return <section className="contact section-pad" id="contato" data-reveal><div className="contact-copy"><p>contato</p><h2>vamos fazer<br />a sua banda<br /><em>ser vista.</em></h2><span>entre em contato comigo e faça seu orçamento :)</span><div className="contact-actions"><WhatsAppLink>vamos conversar</WhatsAppLink><a className="button-link button-link-soft" href={instagramUrl} target="_blank" rel="noreferrer"><span>saiba quem eu sou</span><Arrow /></a></div></div><figure className="contact-image"><img src={image('show-05.webp')} alt="bateria durante um show" loading="lazy" /><figcaption>fotografia de show.</figcaption></figure></section> }
function Footer() { const year = new Date().getFullYear(); return <footer className="site-footer"><div className="site-footer-row"><a href="#inicio">isabella monteiro</a><p>comunicação para bandas independentes / {year}</p><a href={instagramUrl} target="_blank" rel="noreferrer">instagram</a></div><div className="site-credit">desenvolvido por <a href="https://portfolio.wired.rs/creative" target="_blank" rel="noreferrer">wired layer co.</a></div></footer> }

function App() {
  useEffect(() => { if (!window.location.hash) return undefined; const timer = window.setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView(), 80); return () => window.clearTimeout(timer) }, [])
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]')); const workGroups = Array.from(document.querySelectorAll('[data-work-group]')); const heroSequence = document.querySelector('.hero-sequence'); const root = document.documentElement; const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)'); let frame = 0
    const update = () => { const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1); root.style.setProperty('--scroll-progress', `${Math.min(window.scrollY / max, 1)}`); if (heroSequence && !reducedMotion.matches) { const rect = heroSequence.getBoundingClientRect(); const distance = Math.max(heroSequence.offsetHeight - window.innerHeight, 1); const progress = Math.max(0, Math.min(1, -rect.top / distance)); heroSequence.style.setProperty('--hero-progress', `${progress}`) }; workGroups.forEach((group) => { const rect = group.getBoundingClientRect(); const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))); group.style.setProperty('--work-progress', `${progress}`) }); frame = 0 }
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.12 })
    targets.forEach((target) => { target.classList.add('reveal-ready'); observer.observe(target) })
    const revealFallback = window.setTimeout(() => targets.forEach((target) => target.classList.add('is-visible')), 1200)
    update(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll)
    return () => { if (frame) window.cancelAnimationFrame(frame); window.clearTimeout(revealFallback); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); observer.disconnect() }
  }, [])
  return <><a className="skip-link" href="#conteudo">pular para o conteúdo</a><Header /><main id="conteudo"><div className="hero-sequence"><Hero /></div><MovingLine /><About /><Services /><Portfolio /><Contact /></main><Footer /></>
}

export default App
