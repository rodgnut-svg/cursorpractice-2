"use client";

import CardNav from "@/components/reactbits/CardNav";
import { useState } from "react";

export default function Home() {
  const navItems = [
    {
      label: "About",
      bgColor: "#1D4E2B",
      textColor: "#F0EAD8",
      links: [
        { label: "Story", ariaLabel: "About Loft", href: "#about" },
        { label: "Courses", ariaLabel: "Course list", href: "#courses" },
      ],
    },
    {
      label: "Services",
      bgColor: "#546B3B",
      textColor: "#F0EAD8",
      links: [
        { label: "Packages", ariaLabel: "Service packages", href: "#services" },
        { label: "Add-Ons", ariaLabel: "Add-ons", href: "#services" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#1A1A1A",
      textColor: "#F0EAD8",
      links: [
        { label: "Book Now", ariaLabel: "Book now", href: "#contact" },
        { label: "Email", ariaLabel: "Email Loft", href: "mailto:info@loftgolf.com" },
      ],
    },
  ];

  const services = [
    {
      title: "Standard Hourly Rental",
      features: [
        "Full mobile simulator setup",
        "Projector, impact screen, enclosure",
        "Clubs + balls included",
        "One on-site operator",
        "Casual play + standard courses",
      ],
      price: "Price: $150–$250 per hour (2-hour minimum)",
    },
    {
      title: "Premium Experience",
      features: [
        "Everything in Standard",
        "Premium simulator software + pro-level analytics",
        "Premium clubs (men’s, women’s, left-handed)",
        "Multiplayer modes + challenges",
        "LED lighting + upgraded visuals",
      ],
      price: "Price: $300–$450 per hour (2-hour minimum)",
    },
    {
      title: "Private Party Package",
      features: [
        "3–4 hour booking block",
        "Simulator + full event setup and breakdown",
        "Party games: longest drive, closest to pin",
        "Leaderboard + prize tracking",
        "On-site technician for full duration",
      ],
      price: "Price: $900–$1,400 per event",
    },
    {
      title: "Corporate & Brand Activation",
      features: [
        "4–6 hour booking",
        "Custom branding on simulator + screens",
        "Tournament mode + live leaderboard",
        "Staffed guest flow management",
        "Performance reports after the event",
      ],
      price: "Price: $1,800–$3,500 per event",
    },
  ];

  const addOns = [
    { name: "On-site golf coach", price: "$100–$180 per hour" },
    { name: "Custom branding wrap", price: "$200–$600" },
    { name: "Extra club sets", price: "$50–$100 per set" },
    { name: "Long-range outdoor enclosure upgrade", price: "$150–$300" },
  ];

  const courses = [
    {
      title: "Pebble Beach Golf Links",
      location: "California, USA",
      par: "Par 72 · 6,828 yards",
      highlight: "Cliffside winds and iconic ocean carries.",
      image: "/assets/loft-logo.jpg", // placeholder: replace with course imagery if available
    },
    {
      title: "St Andrews Old Course",
      location: "Fife, Scotland",
      par: "Par 72 · 7,279 yards",
      highlight: "Historic links, double greens, and rolling dunes.",
      image: "/assets/loft-logo.jpg",
    },
    {
      title: "Augusta National",
      location: "Georgia, USA",
      par: "Par 72 · 7,545 yards",
      highlight: "Amen Corner precision with lush fairways.",
      image: "/assets/loft-logo.jpg",
    },
  ];

  const [courseIndex, setCourseIndex] = useState(0);
  const currentCourse = courses[courseIndex];

  const nextCourse = () => setCourseIndex((prev) => (prev + 1) % courses.length);
  const prevCourse = () => setCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);

  return (
    <>
      <CardNav
        logo="/assets/loft-logo.jpg"
        logoAlt="Loft Mobile Golf Studio"
        items={navItems}
        baseColor="rgba(240, 234, 216, 0.15)"
        menuColor="#1D4E2B"
        buttonBgColor="#1D4E2B"
        buttonTextColor="#F0EAD8"
      />

      {/* Main Content */}
      <main className="bg-loft-off-white w-full">
        {/* Hero with video background */}
        <section className="relative min-h-screen flex flex-col items-center justify-end px-4 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src="/assets/herovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-loft-off-white/30 z-10"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-8 md:space-y-12 mt-32 md:mt-48">
            <section className="space-y-6 md:space-y-8" aria-labelledby="hero-heading">
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-gilda text-loft-green">
                Golf,Anywhere.
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-loft-green/90 max-w-2xl mx-auto leading-relaxed">
                Professional-grade golf simulation technology that comes to you. 
                Experience championship courses in the comfort of your own space.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  className="px-8 py-4 bg-loft-green text-white font-semibold text-lg rounded-lg hover:bg-loft-green/90 active:bg-loft-green/95 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-loft-green focus-visible:outline-offset-2"
                  aria-label="Discover more about Loft Mobile Golf Studio"
                >
                  Discover Loft
                </button>
              </div>
            </section>

            {/* Supporting Stats */}
            <section className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-loft-green/20" aria-label="Key features">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-gilda text-loft-green" aria-label="18 plus">18+</div>
                <div className="text-sm md:text-base text-loft-green/80">Championship Courses</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-gilda text-loft-green" aria-label="20 minutes">20 min</div>
                <div className="text-sm md:text-base text-loft-green/80">Setup Time</div>
              </div>
              <div className="space-y-2 col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl font-gilda text-loft-green">Mobile</div>
                <div className="text-sm md:text-base text-loft-green/80">Comes to You</div>
              </div>
            </section>
          </div>
        </section>

        {/* Transition into Courses */}
        <div className="h-24 -mt-16 pointer-events-none bg-gradient-to-b from-transparent via-loft-off-white/70 to-loft-off-white" />

        {/* Courses */}
        <section
          id="courses"
          className="relative w-full max-w-6xl mx-auto mt-12 md:mt-20 px-4"
          aria-labelledby="courses-heading"
        >
          <div className="bg-white/85 border border-loft-green/15 shadow-xl rounded-3xl p-6 sm:p-10 space-y-8">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-loft-green/70 font-semibold">Courses</p>
                <h2 id="courses-heading" className="text-3xl md:text-4xl font-gilda text-loft-green">
                  Championship courses on demand
                </h2>
                <p className="text-base md:text-lg text-loft-green/85 max-w-3xl">
                  Rotate through world-class venues with true-to-life physics, shot tracking, and pin-perfect visuals.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevCourse}
                  aria-label="Previous course"
                  className="h-10 w-10 rounded-full border border-loft-green/30 text-loft-green hover:bg-loft-green/10 transition"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextCourse}
                  aria-label="Next course"
                  className="h-10 w-10 rounded-full border border-loft-green/30 text-loft-green hover:bg-loft-green/10 transition"
                >
                  →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="md:col-span-2 rounded-2xl bg-loft-off-white/60 border border-loft-green/10 p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-sm uppercase tracking-[0.18em] text-loft-green/70 font-semibold">
                    Featured Course
                  </div>
                  <h3 className="text-2xl md:text-3xl font-gilda text-loft-green">{currentCourse.title}</h3>
                  <div className="text-loft-green/80 text-sm md:text-base">{currentCourse.location}</div>
                  <div className="text-loft-green/70 text-sm">{currentCourse.par}</div>
                  <p className="text-loft-green/90 text-base md:text-lg">{currentCourse.highlight}</p>
                </div>
                <div className="flex items-center gap-3 pt-6">
                  <button
                    type="button"
                    onClick={prevCourse}
                    aria-label="Previous course"
                    className="px-4 py-2 rounded-lg border border-loft-green/25 text-loft-green hover:bg-loft-green/10 transition"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextCourse}
                    aria-label="Next course"
                    className="px-4 py-2 rounded-lg bg-loft-green text-white hover:bg-loft-green/90 transition"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-loft-green/10 bg-white/70 shadow-md p-4 flex flex-col gap-3">
                <div className="h-32 rounded-xl bg-loft-off-white border border-loft-green/10 overflow-hidden flex items-center justify-center">
                  <img
                    src={currentCourse.image}
                    alt={currentCourse.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-sm uppercase tracking-[0.16em] text-loft-green/70 font-semibold">
                    Course info
                  </div>
                  <div className="text-loft-green/90 text-sm">
                    Rotate through the lineup with the arrows to preview featured courses in the simulator.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex sm:hidden items-center justify-center gap-2">
              <button
                type="button"
                onClick={prevCourse}
                aria-label="Previous course"
                className="h-10 w-10 rounded-full border border-loft-green/30 text-loft-green hover:bg-loft-green/10 transition"
              >
                ←
              </button>
              <button
                type="button"
                onClick={nextCourse}
                aria-label="Next course"
                className="h-10 w-10 rounded-full border border-loft-green/30 text-loft-green hover:bg-loft-green/10 transition"
              >
                →
              </button>
            </div>
          </div>
        </section>

        {/* Transition into Services */}
        <div className="h-20 -mt-10 pointer-events-none bg-gradient-to-b from-loft-off-white/0 via-loft-off-white/80 to-loft-off-white" />

        {/* Services */}
        <section
          id="services"
          className="relative w-full max-w-6xl mx-auto mt-16 md:mt-24 px-4 pb-20 md:pb-28"
          aria-labelledby="services-heading"
        >
          <div className="bg-loft-off-white border border-loft-green/15 shadow-xl rounded-3xl p-6 sm:p-10 space-y-10">
            <div className="space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-loft-green/70 font-semibold">Services</p>
              <h2 id="services-heading" className="text-3xl md:text-4xl font-gilda text-loft-green">Choose Your Loft Experience</h2>
              <p className="text-base md:text-lg text-loft-green/85 max-w-3xl mx-auto">
                Flexible packages for casual play, premium analytics, private parties, corporate events, and full-day activations. We bring the full simulator studio to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="h-full rounded-2xl border border-loft-green/15 bg-white/80 shadow-md p-6 sm:p-8 flex flex-col space-y-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="text-2xl font-gilda text-loft-green">{service.title}</h3>
                  <ul className="space-y-2 text-loft-green/90 text-base leading-relaxed list-disc list-inside">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="pt-2 text-lg font-semibold text-loft-green">{service.price}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-loft-green/15 pt-6">
              <h3 className="text-xl md:text-2xl font-gilda text-loft-green mb-4">Add-Ons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {addOns.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-loft-green/15 bg-white/80 px-4 py-3 flex items-center justify-between text-sm md:text-base text-loft-green/90"
                  >
                    <span>{item.name}</span>
                    <span className="font-semibold text-loft-green">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="bg-loft-green text-white mt-20 md:mt-28"
          aria-labelledby="footer-heading"
        >
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className="space-y-3">
              <div className="text-lg font-gilda" id="footer-heading">
                Loft Mobile Golf Studio
              </div>
              <p className="text-white/80 text-sm">
                Premium mobile golf simulator experiences—set up anywhere, any time.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-semibold text-white/90">Explore</div>
              <div className="space-y-2 text-white/80 text-sm">
                <a href="#services" className="hover:text-white">Services</a>
                <a href="#courses" className="hover:text-white">Courses</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="font-semibold text-white/90">Contact</div>
              <div className="space-y-2 text-white/80 text-sm">
                <a href="mailto:info@loftgolf.com" className="hover:text-white">info@loftgolf.com</a>
                <a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a>
                <div>Serving Greater Metro & Surrounding Areas</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="font-semibold text-white/90">Follow</div>
              <div className="space-y-2 text-white/80 text-sm">
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/15">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/70">
              <div>© {new Date().getFullYear()} Loft Mobile Golf Studio. All rights reserved.</div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
            </div>
          </div>
        </footer>
    </main>
    </>
  );
}

