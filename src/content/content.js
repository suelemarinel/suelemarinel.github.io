export const content = {
  hero: {
    name: "Sue Le Marinel",
    title: "Web developer",
    tagline: "I build custom websites that turn your visitors into clients.",
  },
  about: {
    heading: "Hi, I'm Sue.",
    paragraphs: [
      "I design and build custom websites — no templates, no shortcuts. Every business has its own personality, and my job is to turn yours into a unique identity that doesn't just look good, but works hard to convert visitors into clients.",
      "The way I work is simple: we build it together. From the first sketch to the final pixel, I keep you in the loop at every step — you'll never wonder where your project stands.",
      "And here's my rule: a project isn't finished when the site goes live. It's finished when you're 100% happy. Even then, I stick around — as your business grows, your website and identity grow with it.",
    ],
    punchline: "Great websites are built by people who care. Let's build yours.",
  },
  projects: {
    heading: "Selected work",
    seeAll: "See all projects",
    portfolioTitle: "Portfolio",
    portfolioIntro:
      "A selection of client work and concept projects — each one designed around a real business goal.",
    backHome: "← Back home",
    items: [
      {
        id: "rentart",
        name: "Rentart",
        client: "Galerie Sept — Brussels & Knokke",
        type: "Catalogue website",
        demo: false,
        description:
          "An art rental platform for professional spaces. Browsable catalogue with smart filters, artwork detail pages and integrated appointment booking — built to turn curious visitors into gallery meetings.",
        stack: ["React", "Vercel"],
        url: "https://rentart.vercel.app/",
        images: [
          "/projects/rentart-1.png",
          "/projects/rentart-2.png",
          "/projects/rentart-3.png",
        ],
      },
      {
        id: "atelier-lune",
        name: "Atelier Lune",
        client: "Concept — artisan pastry shop",
        type: "Brand & showcase website",
        demo: true,
        description:
          "A concept identity for an artisan pastry shop: warm visuals, a mouth-watering gallery and a simple order-ahead flow designed to bring locals through the door.",
        stack: ["React", "GSAP"],
        url: null,
        images: [],
      },
      {
        id: "studio-verde",
        name: "Studio Verde",
        client: "Concept — landscape architect",
        type: "Portfolio website",
        demo: true,
        description:
          "A concept portfolio for a landscape architect, built around full-screen project imagery and a clear contact journey — because outdoor work deserves to breathe on screen.",
        stack: ["React", "GSAP"],
        url: null,
        images: [],
      },
    ],
  },
}