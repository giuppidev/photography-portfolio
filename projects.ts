interface Project {
  coverImage: string;
  title: string;
  subtitle: string;
  href: string;
  contentPath: string;
  description: string;
  slug: string;
  rows: number;
  cols: number;
}

export const projects: Project[] = [
  {
    coverImage: "04.jpg",
    title: "Luoghi",
    subtitle: "",
    href: "projects/luoghi",
    contentPath: "",
    description: "",
    slug: "luoghi",
    rows: 2,
    cols: 2,
  },
  {
    coverImage: "20.jpg",
    title: "Persone",
    subtitle: "",
    href: "projects/persone",
    contentPath: "",
    description: "Belle foto fatte a Valfrejus",
    slug: "persone",
    rows: 1,
    cols: 1,
  },
  {
    coverImage: "01.jpg",
    title: "Cose",
    subtitle: "",
    href: "projects/cose",
    contentPath: "",
    description: "Si dice che le cose non abbiano anima. Sarà vero?",
    slug: "cose",
    rows: 1,
    cols: 1,
  },
  {
    coverImage: "02.jpg",
    title: "Napoli gotica",
    subtitle: "",
    href: "projects/napoli-gotica",
    contentPath: "",
    description: ` <div>
        <p>
          La parola "gotico" fa pensare alle grandi cattedrali dell'Europa
          Centrale o, se riferita all'Italia, al Duomo di Milano o ad altre
          grandiose chiese dell'Italia centro settentrionale.
        </p>
        <p>Napoli viene perlopiù associata al barocco.</p>
        <p>
          Eppure è proprio a Napoli che si trovano alcuni dei più mirabili
          esempi di arte e architettura gotica presenti in Italia.
        </p>
      </div>`,
    slug: "napoli-gotica",
    rows: 1,
    cols: 2,
  },
];
