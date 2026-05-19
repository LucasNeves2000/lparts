"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  "Agilidade para responder e entender sua necessidade",
  "Confiança construída no contato direto e no compromisso com o cliente",
];

const heroSlideLabels = ["Linha amarela", "Logística", "Suporte direto"];

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
        <linearGradient id="cabGlow" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ffe186" />
          <stop offset="100%" stopColor="#ffb800" />
        </linearGradient>
      </defs>

      <rect x="0" y="320" width="640" height="100" fill="#121212" />
      <g className="excavator-motion">
        <ellipse cx="304" cy="300" rx="118" ry="18" fill="rgba(0, 0, 0, 0.26)" />
        <rect x="196" y="238" width="194" height="48" rx="16" fill="#1c1c1c" stroke="#ffd34d" strokeWidth="6" />
        <path d="M 214 238 H 372 L 352 204 H 236 Z" fill="#2a2a2a" stroke="#ffd34d" strokeWidth="5" />
        <path d="M 262 148 H 352 Q 374 148 384 166 V 214 H 244 V 166 Q 248 154 262 148 Z" fill="url(#cabGlow)" />
        <path d="M 286 160 H 340 Q 352 160 358 170 V 202 H 274 V 170 Q 278 162 286 160 Z" fill="#2d2d2d" />
        <path d="M 328 160 V 202" stroke="#5a5a5a" strokeWidth="4" />
        <rect x="246" y="214" width="144" height="20" rx="10" fill="#ffb800" />
        <circle cx="230" cy="232" r="11" fill="#ffd34d" />
        <g className="excavator-arm">
          <circle cx="384" cy="190" r="12" fill="#ffd34d" />
          <path d="M 386 182 L 466 138 L 520 154 L 436 204 Z" fill="#ffb800" />
          <path d="M 454 145 L 468 132 L 516 148 L 502 162 Z" fill="#ffd75a" opacity="0.85" />
          <path d="M 510 150 L 565 112 L 590 130 L 526 170 Z" fill="#ffd34d" />
          <path d="M 408 194 L 448 164" stroke="#4f4f4f" strokeWidth="6" strokeLinecap="round" />
          <path d="M 528 154 L 556 132" stroke="#5a5a5a" strokeWidth="5" strokeLinecap="round" />
          <g className="excavator-bucket">
            <path d="M 578 114 L 624 74 L 636 92 L 590 132 Z" fill="#ffb800" />
            <path d="M 621 74 L 638 64 L 634 122 L 610 126 Z" fill="#1b1b1b" />
          </g>
        </g>
        <rect x="204" y="270" width="182" height="26" rx="13" fill="#101010" stroke="#3f3f3f" strokeWidth="6" />
        <path d="M 218 283 H 372" stroke="#ffd34d" strokeWidth="8" strokeLinecap="round" />
        <circle className="wheel wheel-left" cx="244" cy="283" r="32" fill="#111111" stroke="#4a4a4a" strokeWidth="14" />
        <circle className="wheel wheel-mid" cx="294" cy="283" r="32" fill="#111111" stroke="#4a4a4a" strokeWidth="14" />
        <circle className="wheel wheel-right" cx="344" cy="283" r="32" fill="#111111" stroke="#4a4a4a" strokeWidth="14" />
        <circle cx="244" cy="283" r="8" fill="#ffbf1f" />
        <circle cx="294" cy="283" r="8" fill="#ffbf1f" />
        <circle cx="344" cy="283" r="8" fill="#ffbf1f" />
      </g>

    </svg>
  );
}

function ShippingIllustration() {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label="Ilustração de envio para todo o Brasil"
      className="hero-illustration shipping-illustration"
    >
      <defs>
        <linearGradient id="routeGlow" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#ffbf1f" />
          <stop offset="100%" stopColor="#ffe186" />
        </linearGradient>
      </defs>

      <clipPath id="shippingRouteReveal">
        <rect className="route-reveal-mask" x="38" y="0" width="530" height="420" />
      </clipPath>
      <rect x="0" y="0" width="640" height="420" rx="32" fill="rgba(0,0,0,0)" />
      <g className="shipping-point shipping-point-start">
        <text x="70" y="318" textAnchor="middle" className="shipping-point-label">
          LParts
        </text>
        <circle cx="70" cy="354" r="28" fill="#111111" stroke="#ffbf1f" strokeWidth="10" />
        <circle cx="70" cy="354" r="10" fill="#ffbf1f" />
      </g>
      <g className="shipping-point shipping-point-end">
        <text x="584" y="110" textAnchor="middle" className="shipping-point-label">
          Você
        </text>
        <circle cx="584" cy="150" r="28" fill="#111111" stroke="#ffe186" strokeWidth="10" />
        <circle cx="584" cy="150" r="10" fill="#ffe186" />
      </g>
      <g clipPath="url(#shippingRouteReveal)">
        <path
          className="route-path"
          d="M 102 342 C 154 266, 216 366, 274 292 S 346 164, 410 232 S 470 286, 512 212 C 532 178, 536 154, 552 150"
          fill="none"
          stroke="url(#routeGlow)"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function SupportIllustration() {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label="Ilustração de atendimento rápido"
      className="hero-illustration support-illustration"
    >
      <circle cx="168" cy="148" r="112" fill="rgba(255, 191, 31, 0.08)" />
      <circle cx="486" cy="252" r="136" fill="rgba(255, 191, 31, 0.05)" />

      <g className="chat-bubble bubble-left">
        <rect x="52" y="88" width="232" height="128" rx="28" fill="#171717" stroke="rgba(255, 211, 77, 0.24)" strokeWidth="4" />
        <path d="M 96 132 H 238" stroke="#ffbf1f" strokeWidth="14" strokeLinecap="round" />
        <path d="M 96 170 H 214" stroke="#5e574f" strokeWidth="11" strokeLinecap="round" />
        <path d="M 96 202 H 188" stroke="#5e574f" strokeWidth="11" strokeLinecap="round" />
        <path d="M 126 216 L 138 252 L 180 216" fill="#171717" stroke="rgba(255, 211, 77, 0.24)" strokeWidth="4" />
      </g>

      <g className="chat-bubble bubble-right">
        <rect x="330" y="154" width="238" height="142" rx="30" fill="#ffbf1f" />
        <path d="M 368 198 H 514" stroke="#111111" strokeWidth="14" strokeLinecap="round" />
        <path d="M 368 236 H 476" stroke="#483f30" strokeWidth="11" strokeLinecap="round" />
        <path d="M 368 268 H 450" stroke="#483f30" strokeWidth="11" strokeLinecap="round" />
        <path d="M 520 296 L 506 336 L 462 296" fill="#ffbf1f" />
      </g>

      <g className="parts-stack">
        <rect x="198" y="276" width="102" height="18" rx="9" fill="#4a4a4a" />
        <rect x="184" y="304" width="132" height="18" rx="9" fill="#5b5b5b" />
        <rect x="214" y="332" width="88" height="18" rx="9" fill="#3b3b3b" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((activeSlide + 1) % heroSlideLabels.length);
    }, 10000);

    return () => window.clearInterval(slideTimer);
  }, [activeSlide]);

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
          <div className="hero-carousel" aria-label="Destaques da LParts">
            <article
              className={`hero-slide hero-slide-primary ${
                activeSlide === 0 ? "hero-slide-active" : ""
              }`}
            >
              <div className="hero-slide-head">
                <div className="hero-slide-copy">
                  <p className="hero-slide-tag">Linha amarela</p>
                  <h3>Peças certas para manter a operação em movimento.</h3>
                </div>
                <div className="hero-badge">
                  <strong>Especialistas</strong>
                  <span>em escavadeiras e peças para operação pesada</span>
                </div>
              </div>
              {activeSlide === 0 ? <ExcavatorIllustration /> : null}
            </article>

            <article
              className={`hero-slide hero-slide-shipping ${
                activeSlide === 1 ? "hero-slide-active" : ""
              }`}
            >
              <div className="hero-slide-head">
                <div className="hero-slide-copy">
                  <p className="hero-slide-tag">Logística</p>
                  <h3>Da cotação ao envio, a peça sai com agilidade para chegar onde você precisa.</h3>
                </div>
                <div className="hero-badge">
                  <strong>Envio nacional</strong>
                  <span>Curitiba como base, entrega para todo o Brasil</span>
                </div>
              </div>
              {activeSlide === 1 ? <ShippingIllustration /> : null}
            </article>

            <article
              className={`hero-slide hero-slide-support ${
                activeSlide === 2 ? "hero-slide-active" : ""
              }`}
            >
              <div className="hero-slide-head">
                <div className="hero-slide-copy">
                  <p className="hero-slide-tag">Suporte direto</p>
                  <h3>Você manda o modelo da máquina e a LParts corre atrás da solução.</h3>
                </div>
                <div className="hero-badge">
                  <strong>Atendimento rápido</strong>
                  <span>WhatsApp direto para agilizar a busca pela peça certa</span>
                </div>
              </div>
              {activeSlide === 2 ? <SupportIllustration /> : null}
            </article>

            <div className="hero-dots" aria-label="Navegar pelos destaques">
              {heroSlideLabels.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  className={activeSlide === index ? "hero-dot hero-dot-active" : "hero-dot"}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Mostrar slide ${label}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>
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
              <strong>Localização:</strong> Curitiba, com envio para todo o Brasil
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
