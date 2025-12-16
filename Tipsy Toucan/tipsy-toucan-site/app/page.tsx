"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        if (scrollTop > lastScrollTop) {
          setHeaderHidden(true);
        } else {
          setHeaderHidden(false);
        }
      } else {
        setHeaderHidden(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tt-section-visible");
        }
      });
    }, observerOptions);

    const refs = sectionRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <header className={`tt-header ${headerHidden ? "tt-header-hidden" : ""}`}>
        <div className="tt-header-inner">
          <div className="tt-logo-wrap">
            <Image
              src="/Assets/logo.jpg"
              alt="The Tipsy Toucan logo"
              className="tt-logo"
              width={40}
              height={40}
            />
            <span className="tt-logo-text">The Tipsy Toucan</span>
          </div>
          <nav className="tt-nav">
            <a href="#about">About</a>
            <a href="#experience">The Bar</a>
            <a href="#services">Packages</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            href="https://wa.me/0000000000?text=Hi%20Tipsy%20Toucan!%20I%27d%20love%20to%20chat%20about%20booking%20your%20mobile%20bar%20for%20my%20event."
            className="tt-btn tt-btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section 
          id="hero" 
          className="tt-section tt-hero tt-section-animate"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div className="tt-hero-media">
            <Image
              src="/Assets/homescreen pic.jpg"
              alt="The Tipsy Toucan mobile bar serving drinks"
              className="tt-hero-img"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="tt-hero-overlay"></div>
          </div>
          <div className="tt-hero-content">
            <h1>
              A vibrant mobile bar that rolls up,{" "}
              <span className="tt-highlight">lights up</span>, and gets the party
              started.
            </h1>
            <p className="tt-lead">
              The Tipsy Toucan brings a fully stocked bar, friendly bartenders,
              and serious cocktail know‑how to wherever the good times are
              happening.
            </p>
            <div className="tt-hero-actions">
              <a
                href="https://wa.me/0000000000?text=Hi%20Tipsy%20Toucan!%20I%27d%20love%20to%20chat%20about%20booking%20your%20mobile%20bar%20for%20my%20event."
                className="tt-btn tt-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Signature cocktails */}
        <section 
          className="tt-section tt-cocktails tt-section-animate"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <div className="tt-section-inner">
            <div className="tt-section-content tt-cocktails-header">
              <h2>Our Signature Cocktails</h2>
              <p>
                A small taste of the drinks we love to pour — colourful, refreshing,
                and made to match the mood of your event.
              </p>
            </div>
            <div className="tt-cocktails-grid">
              <article className="tt-cocktail-card">
                <Image
                  src="/Assets/cocktail1.jpg"
                  alt="Signature cocktail served at The Tipsy Toucan bar"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>Pink Lemonade</h3>
              </article>
              <article className="tt-cocktail-card">
                <Image
                  src="/Assets/cocktail2.jpg"
                  alt="Colourful cocktail in a glass with ice"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>Sex on the Beach</h3>
              </article>
              <article className="tt-cocktail-card">
                <Image
                  src="/Assets/cocktail3.jpg"
                  alt="Two cocktails raised for a cheers"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>Cucumber Cooler</h3>
              </article>
              <article className="tt-cocktail-card">
                <Image
                  src="/Assets/cocktail4.jpg"
                  alt="Close up of a signature cocktail on the bar"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>Mojito</h3>
              </article>
              <article className="tt-cocktail-card">
                <Image
                  src="/Assets/cocktail5.jpg"
                  alt="Tray of cocktails ready to be served"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>Strawberry Daiquiri</h3>
              </article>
              <article className="tt-cocktail-card">
                <Image
                  src="/Assets/cocktail6.jpg"
                  alt="Bartender finishing a cocktail with garnish"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>Aperol Spritz</h3>
              </article>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section 
          id="experience" 
          className="tt-section tt-experience tt-section-animate"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="tt-section-inner">
            <div className="tt-section-content tt-experience-copy">
              <div className="tt-experience-layout">
                <div className="tt-experience-intro">
                  <h2>The bar that brings the vibe</h2>
                  <div className="tt-experience-text">
                    <p className="tt-lead-text">
                      Warm fairy lights, leafy greenery, and a bold toucan logo turn our
                      little trailer into a glowing feature piece — the kind of bar your
                      guests keep wandering back to for "just one more".
                    </p>
                  </div>
                  <figure className="tt-experience-img">
                    <Image
                      src="/Assets/night time luke.jpg"
                      alt="Bartender serving drinks from the Tipsy Toucan trailer at sunset"
                      width={600}
                      height={400}
                      style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                  </figure>
                </div>
                <div className="tt-experience-flow">
                  <h3>How it all flows</h3>
                  <div className="tt-flow-steps" aria-label="How The Tipsy Toucan bar experience flows">
                    <div className="tt-flow-step">
                      <h4 className="tt-flow-label">We roll in early</h4>
                      <p className="tt-flow-copy">
                        We set up quietly and make sure everything is ice‑cold and photo‑ready before guests arrive.
                      </p>
                    </div>
                    <div className="tt-flow-step">
                      <h4 className="tt-flow-label">We read the room</h4>
                      <p className="tt-flow-copy">
                        Service stays smooth, friendly, and fun so queues move quickly and glasses stay full.
                      </p>
                    </div>
                    <div className="tt-flow-step">
                      <h4 className="tt-flow-label">We vanish at the end</h4>
                      <p className="tt-flow-copy">
                        When it's time to wrap up, we pack down without a fuss so you can head home buzzing, not cleaning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section 
          id="about" 
          className="tt-section tt-section-split tt-section-animate"
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div className="tt-section-inner">
            <div className="tt-section-content">
              <div className="tt-about-header">
                <span className="tt-about-kicker">Meet the team</span>
                <h2>More than just a bar — we bring the party</h2>
              </div>
              <p className="tt-about-lead">
                The Tipsy Toucan isn't just a mobile bar — it's a complete experience. 
                We roll up in our custom-built trailer, set up in minutes, and transform 
                any space into the heart of your celebration. Whether you're hosting 20 
                friends in your backyard or 200 guests at a wedding, we bring the same 
                energy, expertise, and attention to detail.
              </p>
              <div className="tt-about-features">
                <div className="tt-about-feature">
                  <h3>Expert bartenders who know their craft</h3>
                  <p>Our team brings years of experience and genuine enthusiasm to every pour.</p>
                </div>
              </div>
            </div>
            <div className="tt-section-media">
              <Image
                src="/Assets/about us pic.jpg"
                alt="Tipsy Toucan team smiling behind the bar"
                width={520}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section 
          id="services" 
          className="tt-section tt-services tt-section-animate"
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <div className="tt-section-inner">
            <div className="tt-section-content">
              <h2>What we pour</h2>
              <p>
                Every event is different, so we tailor the drinks and service to
                match your crowd, budget, and timeline.
              </p>
            </div>
            <div className="tt-services-grid">
              <article className="tt-card">
                <div className="tt-card-header">
                  <h3>Signature cocktail bar</h3>
                </div>
                <p>
                  A curated menu of house favourites plus classics your guests
                  know and love. We can theme the drinks around your colours,
                  story, or event vibe.
                </p>
              </article>
              <article className="tt-card">
                <div className="tt-card-header">
                  <h3>Full bar service</h3>
                </div>
                <p>
                  Beer, wine, spirits, mixers, and cocktails — everything you need
                  for a busy night. We can work with your stock or supply
                  everything for you.
                </p>
              </article>
              <article className="tt-card">
                <div className="tt-card-header">
                  <h3>Low‑ and no‑alcohol options</h3>
                </div>
                <p>
                  Delicious spritzes, mocktails, and non‑alcoholic options so
                  every guest feels included, from early family events to late
                  dance‑floor finishes.
                </p>
              </article>
              <article className="tt-card">
                <div className="tt-card-header">
                  <h3>Flexible packages</h3>
                </div>
                <p>
                  Tell us about your event size, timing, and location and we'll
                  recommend a package that fits — from small backyard gatherings
                  to large celebrations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Drinks focus */}
        <section 
          className="tt-section tt-drinks tt-section-animate"
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <div className="tt-section-inner tt-drinks-inner">
            <div className="tt-section-content">
              <h2>Made with care, served with a smile</h2>
              <p>
                From first pour to last call, our bartenders keep the experience
                friendly, relaxed, and organised — so queues stay short and
                glasses stay full.
              </p>
            </div>
            <div className="tt-section-media tt-drinks-media">
              <Image
                src="/Assets/noon serving drinks.jpg"
                alt="Bartender handing a colourful cocktail to a guest at the Tipsy Toucan bar"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section 
          id="contact" 
          className="tt-section tt-cta tt-section-animate"
          ref={(el) => (sectionRefs.current[6] = el)}
        >
          <div className="tt-section-inner tt-cta-inner">
            <div className="tt-section-content">
              <h2>Ready to book the bar?</h2>
              <p>
                Send us a quick WhatsApp with your date, location, and a few
                details about your event and we'll reply with availability and
                package options.
              </p>
            </div>
            <div className="tt-cta-actions">
              <a
                href="https://wa.me/0000000000?text=Hi%20Tipsy%20Toucan!%20Here%20are%20the%20details%20for%20my%20event%3A%20date%2C%20location%2C%20approx.%20guest%20numbers%2C%20and%20any%20special%20requests."
                className="tt-btn tt-btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
              <p className="tt-small">
                Prefer email? Reach out at{" "}
                <a href="mailto:hello@tipsytoucan.bar">hello@tipsytoucan.bar</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="tt-footer">
        <div className="tt-footer-inner">
          <div className="tt-footer-brand">
            <Image
              src="/Assets/logo.jpg"
              alt="The Tipsy Toucan logo"
              className="tt-footer-logo"
              width={32}
              height={32}
            />
            <span>The Tipsy Toucan · Mobile Bar</span>
          </div>
          <p className="tt-small">
            Serving good drinks and good times. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
