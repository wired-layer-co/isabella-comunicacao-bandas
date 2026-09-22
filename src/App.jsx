import { useEffect, useRef, useState } from 'react'

const image = (name) => `${import.meta.env.BASE_URL}images/${name}`

const whatsappUrl = 'https://wa.me/554195027607?text=Oi%2C%20Isabella!%20Quero%20conversar%20sobre%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20banda.'

const services = [
  {
    id: 'fotografia',
    title: 'Fotografia',
    short: 'Ensaios promocionais, shows e backstage.',
    body: 'Imagens que guardam a energia do palco e apresentam a identidade da banda fora dele.',
    media: ['show-01.webp', 'show-02.webp', 'show-05.webp'],
  },
  {
    id: 'video',
    title: 'Captação e edição de vídeo',
    short: 'Reels, TikToks, lançamentos e divulgação de shows.',
    body: 'Material dinâmico pensado para o ritmo das redes sem tirar o foco da música.',
    media: ['video-cover-1.webp', 'video-cover-2.webp', 'video-cover-3.webp'],
  },
  {
    id: 'social',
    title: 'Gerenciamento de redes sociais',
    short: 'Planejamento, cronograma e presença digital.',
    body: 'Uma rotina de comunicação que mantém a banda ativa, reconhecível e coerente.',
    media: [],
  },
  {
    id: 'design',
    title: 'Design e artes visuais',
    short: 'Capas, identidades, cartazes, zines e mixed media.',
    body: 'Um universo visual próprio para cada lançamento, show ou fase do projeto.',
    media: ['design-hayley.webp', 'design-ego-1.webp', 'design-ode.webp'],
  },
]

const photographyWorks = [
  ['show-01.webp', 'Bateria em movimento'],
  ['show-02.webp', 'Guitarra em primeiro plano'],
  ['show-03.webp', 'Palco da Cisterna'],
  ['show-04.webp', 'Luz e movimento no show'],
  ['show-05.webp', 'Bateria sob luz magenta'],
  ['show-06.webp', 'Banda vista do chão do palco'],
]

const designWorks = [
  ['design-hayley.webp', 'Pôster Hayley Williams'],
  ['design-ego-1.webp', 'Ego Death at a Bachelorette Party'],
  ['design-ego-2.webp', 'Ego Death, composição editorial'],
  ['design-ego-3.webp', 'Ego Death, página dupla'],
  ['design-ego-4.webp', 'Ego Death, encerramento'],
  ['design-ode.webp', 'Zine Ode to the Mets'],
]

const videoWorks = [
  ['DcRoU84BxO2', 'Vlog', 'video-cover-1.webp'],
  ['DanYMZZuH8V', 'Tipografia em movimento', 'video-cover-2.webp'],
  ['DYn16xdO8mv', 'Trend', 'video-cover-3.webp'],
  ['DWUcUc6gT3Z', 'Edição tipográfica', null],
  ['DV3ZrV8Dskl', 'Vídeo para redes sociais', null],
  ['DVErpd1Afk6', 'Conteúdo de lançamento', null],
]

const animationWorks = [
  ['DcbWDmAu1Y2', 'Animação mixed media'],
  ['DcbehTuhsID', 'Animação mixed media'],
]

const categories = [
  { id: 'fotografia', label: 'Fotografia', count: photographyWorks.length },
  { id: 'video', label: 'Vídeo', count: videoWorks.length },
  { id: 'design', label: 'Design', count: designWorks.length + animationWorks.length },
  { id: 'social', label: 'Redes sociais', count: 4 },
]

function WhatsAppLink({ children, className = '' }) {
  return (
    <a className={`button-link ${className}`} href={whatsappUrl} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <span className="button-line" aria-hidden="true" />
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.body.classList.add('menu-open')
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${open ? ' menu-is-open' : ''}`}>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="brand" href="#inicio" onClick={close}>Isabella Monteiro</a>
      <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Navegação principal">
        <a href="#sobre" onClick={close}>Quem sou</a>
        <a href="#servicos" onClick={close}>Serviços</a>
        <a href="#trabalhos" onClick={close}>Trabalhos</a>
        <a href="#contato" onClick={close}>Contato</a>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-controls="site-nav"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Fechar' : 'Menu'}
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <h1>
          <span>Profissionalize</span>
          <span>a comunicação</span>
          <span>da sua banda</span>
        </h1>
        <p>Músicos não precisam virar criadores de conteúdo. Quem entende do assunto faz isso por você.</p>
        <WhatsAppLink>Falar sobre a sua banda</WhatsAppLink>
      </div>
      <figure className="hero-visual">
        <div className="hero-paper" aria-hidden="true" />
        <img src={image('show-hero.webp')} alt="Banda tocando em um show fotografado por Isabella Monteiro" fetchPriority="high" />
        <figcaption>Fotografia de show</figcaption>
      </figure>
    </section>
  )
}

function MovingLine() {
  const phrase = 'fotografia  vídeo  redes sociais  design e artes visuais  '
  return (
    <div className="moving-line" aria-hidden="true">
      <div className="moving-line-track">
        <span>{phrase}</span><span>{phrase}</span><span>{phrase}</span><span>{phrase}</span>
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="about section-pad" id="sobre" data-reveal>
      <div className="about-heading">
        <h2>Quem<br />eu sou?</h2>
      </div>
      <div className="about-collage">
        <img className="about-art" src={image('isabella-portrait.webp')} alt="Retrato de Isabella Monteiro" loading="lazy" />
        <img className="about-photo" src={image('show-02.webp')} alt="" loading="lazy" />
        <span className="collage-note" aria-hidden="true">Isabella Monteiro<br />direção & imagem</span>
      </div>
      <div className="about-copy">
        <p className="about-lead">Muito prazer, sou a <strong>Isabella Monteiro</strong>.</p>
        <p>Apaixonada por rock e pela cena independente desde 2023, quando comecei a acompanhar de perto o movimento no Rio Grande do Sul. Hoje, morando em Curitiba, uno essa vivência e paixão com a minha formação em publicidade e propaganda.</p>
        <p>Sei que o som de uma banda tem alma, mas a internet exige estratégia, estética e constância. Meu objetivo é cuidar da comunicação, imagem e redes sociais do seu projeto, para que vocês façam o que fazem de melhor: tocar.</p>
      </div>
    </section>
  )
}

function PlanningStack() {
  return (
    <div className="planning-stack" aria-hidden="true">
      <div className="planning-sheet sheet-one"><strong>Voz</strong><span>Identidade da banda</span></div>
      <div className="planning-sheet sheet-two"><strong>Plano</strong><span>Conteúdo e cronograma</span></div>
      <div className="planning-sheet sheet-three"><strong>Presença</strong><span>Constância no digital</span></div>
    </div>
  )
}

function ServicePreview({ service }) {
  return (
    <div className={`service-preview preview-${service.id}`} aria-live="polite">
      <div className="preview-stage">
        {service.media.length > 0 ? service.media.map((media, index) => (
          <img
            key={media}
            className={`preview-layer layer-${index + 1}`}
            src={image(media)}
            alt=""
          />
        )) : <PlanningStack />}
      </div>
      <p>{service.body}</p>
    </div>
  )
}

function Services() {
  const [activeId, setActiveId] = useState(services[0].id)
  const activeService = services.find((service) => service.id === activeId)

  return (
    <section className="services section-pad" id="servicos" data-reveal>
      <header className="services-intro">
        <h2>O que<br />eu faço?</h2>
        <p>Apoio seu projeto em uma demanda pontual ou em uma gestão contínua para manter a banda ativa e profissional no digital.</p>
      </header>
      <div className="services-body">
        <div className="service-list" aria-label="Serviços disponíveis">
          {services.map((service) => {
            const active = service.id === activeId
            return (
              <div className="service-item" key={service.id}>
                <button
                  className={`service-row${active ? ' is-active' : ''}`}
                  type="button"
                  aria-expanded={active}
                  aria-controls={`service-preview-${service.id}`}
                  onClick={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                >
                  <span className="service-index">{String(services.indexOf(service) + 1).padStart(2, '0')}</span>
                  <span className="service-name">{service.title}</span>
                  <span className="service-short">{service.short}</span>
                </button>
                {active && (
                  <div className="service-preview-mobile" id={`service-preview-${service.id}`}>
                    <ServicePreview service={service} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="service-preview-desktop">
          <ServicePreview key={activeService.id} service={activeService} />
        </div>
      </div>
    </section>
  )
}

function PhotographyGallery() {
  return (
    <div className="project-grid photo-work-grid">
      {photographyWorks.map(([src, alt], index) => (
        <figure className="project-card work-item" key={src} style={{ '--item-index': index }}>
          <div className="card-media">
            <img src={image(src)} alt={alt} loading="lazy" />
          </div>
          <figcaption>
            <span><strong>{alt}</strong><small>Fotografia de show</small></span>
            <b>{String(index + 1).padStart(2, '0')}</b>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function InstagramEmbed({ postId, title, cover, type = 'reel', index }) {
  const frameRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [ready, setReady] = useState(false)
  const path = type === 'reel' ? 'reel' : 'p'

  useEffect(() => {
    const node = frameRef.current
    if (!node || mounted) return undefined
    if (!('IntersectionObserver' in window)) {
      setMounted(true)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setMounted(true)
        observer.disconnect()
      }
    }, { rootMargin: '320px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [mounted])

  return (
    <article className="project-card work-item instagram-card" style={{ '--item-index': index }}>
      <div className={`card-media instagram-frame${ready ? ' is-ready' : ''}`} ref={frameRef}>
        <div className="embed-poster" aria-hidden="true">
          {cover ? <img src={image(cover)} alt="" loading="lazy" /> : (
            <span><small>mixed media</small>{title}</span>
          )}
          <b>Instagram ↗</b>
        </div>
        {mounted && (
          <iframe
            src={`https://www.instagram.com/${path}/${postId}/embed/`}
            title={`${title} no Instagram`}
            loading="lazy"
            onLoad={() => setReady(true)}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      <div className="card-copy">
        <span><strong>{title}</strong><small>{type === 'reel' ? 'Reel' : 'Animação mixed media'}</small></span>
        <a href={`https://www.instagram.com/${path}/${postId}/`} target="_blank" rel="noreferrer">Abrir</a>
      </div>
    </article>
  )
}

function VideoGallery() {
  return (
    <div className="project-grid video-work-grid">
      {videoWorks.map(([postId, title, cover], index) => (
        <InstagramEmbed key={postId} postId={postId} title={title} cover={cover} index={index} />
      ))}
    </div>
  )
}

function DesignGallery() {
  return (
    <>
      <div className="project-grid design-work-grid">
        {designWorks.map(([src, alt], index) => (
          <figure className="project-card work-item" key={src} style={{ '--item-index': index }}>
            <div className="card-media design-media">
              <img src={image(src)} alt={alt} loading="lazy" />
            </div>
            <figcaption>
              <span><strong>{alt}</strong><small>Design e artes visuais</small></span>
              <b>{String(index + 1).padStart(2, '0')}</b>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="project-grid animation-grid">
        {animationWorks.map(([postId, title], index) => (
          <InstagramEmbed key={postId} postId={postId} title={title} type="post" index={index} />
        ))}
      </div>
    </>
  )
}

function SocialGallery() {
  const items = [
    ['Entender', 'Momento, objetivos e personalidade da banda.'],
    ['Planejar', 'Pautas e formatos que cabem na rotina do projeto.'],
    ['Produzir', 'Texto, imagem e vídeo falando a mesma língua.'],
    ['Manter', 'Cronograma e presença digital com constância.'],
  ]
  return (
    <div className="social-work-grid">
      <p>Gerenciamento é transformar a identidade da banda em uma presença que continua reconhecível de um post ao outro.</p>
      <ol>
        {items.map(([title, text], index) => (
          <li key={title} style={{ '--item-index': index }}><strong>{title}</strong><span>{text}</span></li>
        ))}
      </ol>
    </div>
  )
}

function Portfolio() {
  const [activeId, setActiveId] = useState('fotografia')
  const [pendingId, setPendingId] = useState(null)
  const [phase, setPhase] = useState('idle')
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach((timer) => window.clearTimeout(timer)), [])

  const selectCategory = (id) => {
    if (id === activeId || phase !== 'idle') return
    timers.current.forEach((timer) => window.clearTimeout(timer))
    setPendingId(id)
    setPhase('leaving')
    timers.current = [
      window.setTimeout(() => {
        setActiveId(id)
        setPhase('entering')
      }, 260),
      window.setTimeout(() => {
        setPhase('idle')
        setPendingId(null)
      }, 620),
    ]
  }

  const activeCategory = categories.find((category) => category.id === activeId)
  const pendingCategory = categories.find((category) => category.id === pendingId)

  return (
    <section className="portfolio" id="trabalhos">
      <div className="portfolio-shell">
        <aside className="portfolio-rail">
          <div className="rail-copy">
            <h2>Trabalhos</h2>
            <p>Fotografia, movimento e direção visual criados dentro da cena independente.</p>
          </div>
          <div className="category-list" aria-label="Filtrar trabalhos por categoria">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={category.id === activeId ? 'is-active' : ''}
                aria-pressed={category.id === activeId}
                onClick={() => selectCategory(category.id)}
              >
                <span>{category.label}</span><b>{category.count}</b>
              </button>
            ))}
          </div>
        </aside>
        <div className={`portfolio-stage is-${phase}`} aria-live="polite" aria-busy={phase !== 'idle'}>
          <div className="category-heading">
            <h3>{activeCategory.label}</h3>
          </div>
          <div className="gallery-wrap" key={activeId}>
            {activeId === 'fotografia' && <PhotographyGallery />}
            {activeId === 'video' && <VideoGallery />}
            {activeId === 'design' && <DesignGallery />}
            {activeId === 'social' && <SocialGallery />}
          </div>
          <div className="category-curtain" aria-hidden="true">
            <span>{pendingCategory?.label || activeCategory.label}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-pad" id="contato" data-reveal>
      <p>Entre em contato comigo e vamos entender juntos o que a sua banda precisa.</p>
      <h2>Vamos fazer<br />a sua banda<br /><em>ser vista.</em></h2>
      <WhatsAppLink className="contact-button">Abrir conversa no WhatsApp</WhatsAppLink>
      <div className="contact-meta">
        <a href="tel:+554195027607">+55 41 9502-7607</a>
        <span>Curitiba, PR</span>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-row">
        <a href="#inicio">Isabella Monteiro</a>
        <p>Comunicação para bandas independentes / {year}</p>
        <a href="https://www.instagram.com/isamontwiro/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="#inicio">Voltar ao topo</a>
      </div>
      <div className="site-credit">
        Desenvolvido por{' '}
        <a href="https://portfolio.wired.rs/creative" target="_blank" rel="noreferrer">wired layer co.</a>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    if (!window.location.hash) return undefined
    const timer = window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView()
    }, 80)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hero = document.querySelector('.hero-sequence')
    const loops = Array.from(document.querySelectorAll('[data-loop]'))
    let frame = 0
    let previousY = window.scrollY

    const update = () => {
      const y = window.scrollY
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      root.style.setProperty('--scroll-progress', `${Math.min(y / max, 1)}`)
      root.style.setProperty('--scroll-velocity', `${Math.max(-24, Math.min(24, y - previousY))}`)
      previousY = y

      if (hero && !reducedMotion.matches) {
        const rect = hero.getBoundingClientRect()
        const distance = Math.max(hero.offsetHeight - window.innerHeight, 1)
        const progress = Math.max(0, Math.min(1, -rect.top / distance))
        hero.style.setProperty('--hero-progress', `${progress}`)
      }
      frame = 0
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    const loopObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-inview', entry.isIntersecting))
    })
    loops.forEach((loop) => loopObserver.observe(loop))
    const onVisibility = () => root.classList.toggle('page-hidden', document.hidden)

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
      loopObserver.disconnect()
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <div className="hero-sequence"><Hero /></div>
        <div data-loop><MovingLine /></div>
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
