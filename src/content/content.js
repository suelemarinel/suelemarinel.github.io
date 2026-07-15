export const content = {
  intro: {
    welcome: "Welcome to my portfolio",
    hint: "click to enter",
  },  
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
          caseStudy: {
          intro:
            "Galerie Sept needed a way to bring art rental to professional spaces — restaurants, hotels, offices. The goal: make browsing artworks as easy as booking a table.",
          sections: [
            {
              text: "A filterable catalogue puts the collection front and center. Visitors browse by size and budget, and every artwork gets its own detail page with multiple views.",
              image: "https://picsum.photos/seed/rentart-a/1800/1100",
            },
            {
              text: "The journey ends with one clear action: booking a consultation at the gallery, integrated directly with their calendar.",
              image: "https://picsum.photos/seed/rentart-b/1800/1100",
            },
          ],
          details: {
            completed: "2026",
            type: "Catalogue website",
            role: "Design & development",
            client: "Galerie Sept",
          },
        },
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
        images: ["https://picsum.photos/seed/atelierlune/1600/1000"],
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
        images: ["https://picsum.photos/seed/studioverde/1600/1000"],
      },
    ],
  },
  skills: {
    heading: "What I can do for you",
    items: [
      {
        title: "Custom design & identity",
        description:
          "A visual identity built from scratch around your business — colors, typography and layout that make you instantly recognizable.",
      },
      {
        title: "Websites that convert",
        description:
          "Fast, responsive and thought through: every page is designed to guide your visitors toward becoming clients.",
      },
      {
        title: "Motion & interactions",
        description:
          "Subtle animations that bring your site to life and make people remember it — never at the cost of speed.",
      },
      {
        title: "Long-term partnership",
        description:
          "SEO foundations, easy content updates and ongoing improvements as your business grows. I don't disappear after launch.",
      },
    ],
  },
  contact: {
    heading: "Let's work together",
    text: "Got a project in mind, or just want to explore an idea? Tell me about your business — I'll tell you how a website can help it grow.",
    cta: "Say hi",
    email: "sue.lemarinel@gmail.com",
    socials: [
      { label: "GitHub", url: "https://github.com/suelemarinel" },
      { label: "LinkedIn", url: "https://linkedin.com/in/TON-PROFIL" },
    ],
  },
}
