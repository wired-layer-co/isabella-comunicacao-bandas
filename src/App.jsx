import { useState } from 'react'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const whatsappUrl = 'https://wa.me/554195027607?text=Oi%2C%20Isabella!%20Quero%20conversar%20sobre%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20banda.'

const services = [
  {
    id: 'fotografia',
    title: 'Fotografia',
    description: 'Ensaios promocionais, cobertura de shows e backstage.',
    covers: ['images/show-04.webp', 'images/show-01.webp', 'images/show-02.webp'],
  },
  {
    id: 'video',
    title: 'Captação e edição de vídeo',
    description: 'Reels e TikToks para lançamentos, divulgação de shows, clipes e material dinâmico para redes sociais.',
    covers: ['images/show-03.webp', 'images/show-06.webp', 'images/show-05.webp'],
  },
  {
    id: 'social',
    title: 'Gerenciamento de redes sociais',
    description: 'Planejamento de conteúdo, cronograma estratégico e gestão de presença digital em todas as redes.',
    covers: ['images/design-ego-2.webp', 'images/show-hero.webp', 'images/design-ego-3.webp'],
  },
  {
    id: 'design',
    title: 'Design e artes visuais',
    description: 'Capas de single e álbum, identidade visual, animações mixed media, zines, cartazes de turnê e artes para feed.',
    covers: ['images/design-hayley.webp', 'images/design-ego-1.webp', 'images/design-ode.webp'],
  },
]

const videoPosts = ['DcRoU84BxO2', 'DanYMZZuH8V', 'DYn16xdO8mv', 'DWUcUc6gT3Z', 'DV3ZrV8Dskl', 'DVErpd1Afk6']
const animationPosts = ['DcbWDmAu1Y2', 'DcbehTuhsID']
const showPhotos = ['show-01.webp', 'show-02.webp', 'show-03.webp', 'show-04.webp', 'show-05.webp', 'show-06.webp']
const designWorks = [
  ['design-hayley.webp', 'Pôster Hayley Williams'],
  ['design-ego-1.webp', 'Revista Ego Death at a Bachelorette Party — parte 1'],
  ['design-ego-2.webp', 'Revista Ego Death at a Bachelorette Party — parte 2'],
  ['design-ego-3.webp', 'Revista Ego Death at a Bachelorette Party — parte 3'],
  ['design-ego-4.webp', 'Revista Ego Death at a Bachelorette Party — parte 4'],
  ['design-ode.webp', 'Zine Ode to the Mets'],
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={close}>Isabella Monteiro</a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        {open ? 'Fechar' : 'Menu'}
      </button>
      <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Navegação principal">
        <a href="#sobre" onClick={close}>Quem sou</a>
        <a href="#servicos" onClick={close}>Serviços</a>
        <a href="#trabalhos" onClick={close}>Trabalhos</a>
        <a href="#contato" onClick={close}>Contato</a>
      </nav>
    </header>
  )
}

function WhatsAppLink({ className = '' }) {
  return (
    <a className={`whatsapp-link ${className}`} href={whatsappUrl} target="_blank" rel="noreferrer">
      Vamos conversar <ArrowIcon />
    </a>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-index" aria-hidden="true">Comunicação · imagem · presença digital</div>
      <h1>
        <span>Profissionalize</span>
        <span>a comunicação</span>
        <span>da sua banda</span>
      </h1>
      <figure className="hero-photo">
        <img src={asset('images/show-hero.webp')} alt="Banda tocando em um show fotografado por Isabella Monteiro" fetchPriority="high" />
        <figcaption>Fotografia de show · Curitiba</figcaption>
      </figure>
      <div className="hero-bottom">
        <p>Músicos não precisam virar criadores de conteúdo. Quem entende do assunto faz isso por você.</p>
        <WhatsAppLink />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-title">
        <p aria-hidden="true">Muito prazer</p>
        <h2>Quem<br />eu sou?</h2>
      </div>
      <div className="about-collage" aria-hidden="true">
        <img src={asset('images/design-hayley.webp')} alt="" />
        <img src={asset('images/show-01.webp')} alt="" />
        <span>Rock, estratégia<br />e imagem</span>
      </div>
      <div className="about-copy">
        <p className="about-intro">Muito prazer, sou a <strong>Isabella Monteiro</strong>.</p>
        <p>Apaixonada por rock e pela cena independente desde 2023, quando comecei a acompanhar de perto o movimento no Rio Grande do Sul. Hoje, morando em Curitiba, uno essa vivência e paixão com a minha formação em publicidade e propaganda.</p>
        <p>Sei que o som de uma banda tem alma, mas a internet exige estratégia, estética e constância — e músicos não deveriam ter que virar criadores de conteúdo para serem ouvidos.</p>
        <p>Meu objetivo é cuidar de toda a comunicação, imagem e redes sociais do seu projeto, para que vocês apenas façam o que fazem de melhor: tocar.</p>
      </div>
    </section>
  )
}

function ServiceCard({ service, active, onSelect, index }) {
  return (
    <button
      className={`service-card service-card-${index + 1}${active ? ' is-active' : ''}`}
      type="button"
      aria-expanded={active}
      aria-controls={`work-${service.id}`}
      onClick={onSelect}
    >
      <span className="card-stack" aria-hidden="true">
        {service.covers.map((cover, coverIndex) => (
          <span className={`card-layer layer-${coverIndex + 1}`} key={cover}>
            <img src={asset(cover)} alt="" />
          </span>
        ))}
        <span className="card-tape" />
      </span>
      <span className="card-copy">
        <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
        <strong>{service.title}</strong>
        <span>{service.description}</span>
        <span className="card-action">{active ? 'Fechar trabalhos' : 'Ver trabalhos'} <ArrowIcon /></span>
      </span>
    </button>
  )
}

function InstagramEmbed({ code, label }) {
  return (
    <div className="instagram-frame">
      <iframe
        src={`https://www.instagram.com/reel/${code}/embed/`}
        title={label}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

function PhotographyWork() {
  return (
    <div className="photo-grid">
      {showPhotos.map((photo, index) => (
        <figure key={photo}>
          <img src={asset(`images/${photo}`)} alt={`Fotografia de show realizada por Isabella Monteiro, registro ${index + 1}`} />
        </figure>
      ))}
    </div>
  )
}

function VideoWork() {
  return (
    <div className="embed-grid">
      {videoPosts.map((code, index) => <InstagramEmbed key={code} code={code} label={`Trabalho de captação e edição de vídeo ${index + 1}`} />)}
    </div>
  )
}

function SocialWork() {
  return (
    <div className="social-process">
      <p>Uma presença digital contínua nasce do encontro entre o que a banda quer dizer, o que o público precisa encontrar e o ritmo possível de produção.</p>
      <ol>
        <li><span>Leitura do projeto</span><strong>voz, momento e objetivos</strong></li>
        <li><span>Planejamento</span><strong>pautas, formatos e cronograma</strong></li>
        <li><span>Gestão</span><strong>publicação e presença consistente</strong></li>
      </ol>
      <p className="no-invented-credit">Portfólio de gestão disponível durante a conversa, conforme a necessidade do projeto.</p>
    </div>
  )
}

function DesignWork() {
  return (
    <>
      <div className="design-grid">
        {designWorks.map(([source, label]) => (
          <figure key={source}>
            <img src={asset(`images/${source}`)} alt={label} loading="lazy" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="work-subheading">
        <h4>Animações mixed media</h4>
        <p>Assista aos trabalhos publicados.</p>
      </div>
      <div className="embed-grid embed-grid-small">
        {animationPosts.map((code, index) => <InstagramEmbed key={code} code={code} label={`Animação mixed media ${index + 1}`} />)}
      </div>
    </>
  )
}

function WorkPanel({ service }) {
  const content = {
    fotografia: <PhotographyWork />,
    video: <VideoWork />,
    social: <SocialWork />,
    design: <DesignWork />,
  }

  return (
    <section className="work-panel" id={`work-${service.id}`} aria-label={`Trabalhos de ${service.title}`}>
      <header>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </header>
      {content[service.id]}
    </section>
  )
}

function Services() {
  const [activeId, setActiveId] = useState('fotografia')
  const activeService = services.find((service) => service.id === activeId)

  return (
    <section className="services" id="servicos">
      <header className="services-heading">
        <h2>O que<br />eu faço?</h2>
        <p>Apoio seu projeto do jeito que você precisar — em demandas pontuais, como a cobertura de uma turnê ou o visual de um novo single, ou em uma gestão contínua para manter sua banda ativa e profissional no digital.</p>
      </header>
      <div className="service-deck" aria-label="Escolha um serviço para ver os trabalhos">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            active={service.id === activeId}
            onSelect={() => setActiveId(service.id === activeId ? '' : service.id)}
          />
        ))}
      </div>
      <div id="trabalhos">
        {activeService ? <WorkPanel key={activeService.id} service={activeService} /> : (
          <p className="closed-note">Selecione um serviço para abrir os trabalhos.</p>
        )}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contato">
      <p>Entre em contato comigo e vamos entender juntos a sua necessidade :)</p>
      <h2>Vamos fazer<br />sua banda<br /><em>ser ouvida?</em></h2>
      <WhatsAppLink className="contact-button" />
      <div className="contact-meta">
        <span>Isabella Monteiro</span>
        <span>Curitiba · PR</span>
        <span>Comunicação para bandas</span>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a href="#inicio">Isabella Monteiro</a>
      <p>Estratégia, estética e constância para a cena independente.</p>
      <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <div className="ticker" aria-hidden="true">
          <div>fotografia · vídeo · redes sociais · design · fotografia · vídeo · redes sociais · design ·</div>
        </div>
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
