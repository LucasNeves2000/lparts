import Image from "next/image";

const whatsappNumber = "5541987438260";
const phoneDisplay = "+55 41 98743-8260";
const whatsappMessage =
  "Olá! Quero falar com a LParts sobre peças para escavadeira.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const productCategories = [
  {
    title: "Dentes",
    items: ["PC200", "Cat linha J", "Hyundai", "Sany", "Doosan"],
    description: "Peças de desgaste para manter a frente de serviço rendendo.",
  },
  {
    title: "Material rodante",
    items: ["Rolete superior", "Rolete inferior", "Roda guia", "Roda motriz", "Corrente 49 elos", "Corrente 46 elos", "Corrente 44 elos"],
    description: "Conjunto robusto para encarar operação pesada sem parada desnecessária.",
  },
  {
    title: "Componentes hidráulicos",
    items: ["Bombas"],
    description: "Soluções para manter força, precisão e ritmo no canteiro.",
  }
];

const highlights = [
  "Atendimento rápido, sem enrolação",
  "Peças de qualidade para linha amarela",
  "Suporte próximo para ajudar a achar a peça certa",
];

const trustPoints = [
  "Segurança para comprar de quem entende do segmento",
  "Agilidade para responder e encaminhar sua necessidade",
  "Confiança construída no contato direto e no compromisso com o cliente",
];

function ExcavatorIllustration() {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label="Ilustração de escavadeira e peças"
      className="hero-illustration"
    >
      <defs>
        <linearGradient id="metalGlow" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd34d" />
          <stop offset="100%" stopColor="#ffb800" />
        </linearGradient>
      </defs>

      <rect x="0" y="320" width="640" height="100" fill="#121212" />
      <rect x="210" y="210" width="170" height="72" rx="12" fill="#1c1c1c" stroke="#ffd34d" strokeWidth="6" />
      <rect x="280" y="145" width="104" height="80" rx="10" fill="#ffb800" />
      <rect x="298" y="160" width="58" height="42" rx="8" fill="#2d2d2d" />
      <path d="M 372 180 L 468 132 L 516 148 L 425 202 Z" fill="#ffb800" />
      <path d="M 508 145 L 562 108 L 585 126 L 523 164 Z" fill="#ffd34d" />
      <path d="M 573 112 L 622 68 L 632 88 L 585 128 Z" fill="#ffb800" />
      <path d="M 621 68 L 638 58 L 632 118 L 612 122 Z" fill="#1b1b1b" />
      <path d="M 214 282 H 392" stroke="#ffd34d" strokeWidth="12" strokeLinecap="round" />
      <circle cx="250" cy="282" r="42" fill="#111111" stroke="#4a4a4a" strokeWidth="16" />
      <circle cx="350" cy="282" r="42" fill="#111111" stroke="#4a4a4a" strokeWidth="16" />

      <rect x="56" y="82" width="118" height="74" rx="12" fill="#1a1a1a" stroke="#3f3f3f" strokeWidth="4" />
      <path d="M 80 130 L 110 102 L 138 128 L 164 100" stroke="url(#metalGlow)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <rect x="86" y="210" width="78" height="18" rx="9" fill="#3c3c3c" />
      <rect x="94" y="240" width="62" height="18" rx="9" fill="#3c3c3c" />
      <rect x="78" y="270" width="94" height="18" rx="9" fill="#3c3c3c" />
      <circle cx="517" cy="255" r="46" fill="#1a1a1a" stroke="#ffd34d" strokeWidth="8" />
      <circle cx="517" cy="255" r="14" fill="#ffd34d" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        Falar no WhatsApp
      </a>

      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">
            <Image
              src="/lparts-logo.png"
              alt="Logo da LParts"
              width={144}
              height={144}
              priority
            />
          </div>
          <div className="brand-copy">
            <a href="#inicio" className="brand">
              LPARTS
            </a>
          </div>
        </div>

        <nav className="nav">
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="section-tag">Peças para escavadeiras e linha amarela</p>
          <p className="hero-support">
            Atendimento rápido, confiança e foco em manter a máquina rodando.
          </p>
          <h1>Peças para escavadeira com qualidade, agilidade e atendimento de verdade.</h1>
          <p className="hero-text">
            A LParts existe para uma coisa: ajudar você a manter sua máquina rodando sem dor de
            cabeça. Aqui o atendimento é direto, a resposta é rápida e a busca pela peça certa é
            levada a sério.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir atendimento no WhatsApp
            </a>
            <a className="button-secondary" href="#produtos">
              Ver linhas de produtos
            </a>
          </div>

          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-badge">
            <strong>Especialistas</strong>
            <span>em escavadeiras e peças para operação pesada</span>
          </div>
          <ExcavatorIllustration />
        </div>
      </section>

      <section className="quick-strip">
        <div>
          <strong>Resposta rápida</strong>
          <span>Contato direto para entender sua necessidade sem enrolação.</span>
        </div>
        <div>
          <strong>Qualidade que passa confiança</strong>
          <span>Peças voltadas para quem precisa manter a máquina trabalhando.</span>
        </div>
        <div>
          <strong>Foco em solução</strong>
          <span>Mais do que vender peça, a ideia é ajudar você a resolver.</span>
        </div>
      </section>

      <section className="section" id="produtos">
        <div className="section-heading">
          <p className="section-tag">Produtos</p>
          <h2>Linhas de peças que você encontra com a LParts</h2>
          <p>
            Sem tabela de preço aberta e sem complicação. Você fala com a gente, passa sua
            necessidade e recebe o atendimento certo para a sua máquina.
          </p>
        </div>

        <div className="products-grid">
          {productCategories.map((category) => (
            <article className="product-card" key={category.title}>
              <div className="card-heading">
                <span className="card-index">{category.title}</span>
                <p>{category.description}</p>
              </div>
              <div className="card-body">
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Solicitar cotação
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="section-heading">
          <p className="section-tag">Sobre nós</p>
          <h2>A LParts fala simples, atende rápido e entende a rotina da linha amarela.</h2>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p>
              A LParts é uma empresa focada em peças para escavadeiras e linha amarela. Nosso
              compromisso não é só vender: é ajudar o cliente a seguir trabalhando com mais
              segurança, agilidade e confiança.
            </p>
            <p>
              Sabemos que máquina parada gera custo. Por isso nosso atendimento é próximo, direto e
              pensado para facilitar a sua vida na hora de encontrar a peça certa.
            </p>
          </div>

          <div className="trust-panel">
            <h3>O que faz a LParts diferente</h3>
            <ul>
              {trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="contact-panel">
          <div>
            <p className="section-tag">Contato</p>
            <h2>Fale com a LParts e encontre a peça que você precisa com mais rapidez.</h2>
            <p>
              Passe o modelo da máquina, a peça desejada ou a sua dúvida. A equipe responde pelo
              WhatsApp para agilizar seu atendimento.
            </p>
          </div>

          <div className="contact-box">
            <div className="contact-logo">
              <Image
                src="/lparts-logo.png"
                alt="Logo da LParts"
                width={160}
                height={160}
              />
            </div>
            <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <p>
              <strong>Telefone:</strong> {phoneDisplay}
            </p>
            <p>
              <strong>Localização:</strong> Atendimento em todo o Brasil
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
