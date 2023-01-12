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
  photos: string[];
}
export const projects: Project[] = [
  {
    coverImage: "04_eammoz",
    title: "Luoghi",
    subtitle: "",
    href: "projects/luoghi",
    contentPath: "demartino/luoghi",
    description:
      "Ovunque si vada, anche a pochi passi da casa, ci sono luoghi da vedere. E da immortalare.",
    slug: "luoghi",
    rows: 2,
    cols: 2,
    photos: [
      "01_ln3ozx",
      "02_js7hwe",
      "03_lmrlt8",
      "04_eammoz",
      "05_ewa6mi",
      "06_sx8a0i",
      "07_lqkctt",
      "08_g29zbu",
      "09_ctrego",
      "10_mdbqng",
      "11_nnmvif",
      "12_xt9jkj",
      "13_afed9k",
      "14_dwaxcy",
      "15_xwrdt5",
      "16_vupwvb",
      "17_ucbeih",
      "18_kjreop",
      "19_ygklyj",
      "20_nitr3m",
    ],
  },
  {
    coverImage: "20_sxodpx",
    title: "Persone",
    subtitle: "",
    href: "projects/persone",
    contentPath: "demartino/persone",
    description:
      "Che la si chiami fotografia di cerimonia, di eventi o ritratto, l'unica cosa che conta sono le persone...",
    slug: "persone",
    rows: 1,
    cols: 1,
    photos: [
      "01_xzthot",
      "02_c1xsvr",
      "03_xre9mz",
      "04_bhpbm7",
      "05_r77okf",
      "06_fzvekh",
      "07_uobunb",
      "08_gd74ia",
      "09_ecptbq",
      "10_qoqwn3",
      "11_thyc6w",
      "12_au19pz",
      "13_kxsce9",
      "14_an8cpu",
      "15_rtefgi",
      "16_w0p9ip",
      "17_qkdgz2",
      "18_vlncxw",
      "19_ahvlqz",
      "20_sxodpx",
    ],
  },
  {
    coverImage: "01_qzxu5x",
    title: "Cose",
    subtitle: "",
    href: "projects/cose",
    contentPath: "demartino/cose",
    description: "Si dice che le cose non abbiano anima. Sarà vero?",
    slug: "cose",
    rows: 1,
    cols: 1,
    photos: [
      "01_qzxu5x",
      "02_rxhbu6",
      "03_x6d7gl",
      "04_rqdih7",
      "05_o0qqfiy",
      "06_gkv7ei",
      "07_hqt5ev",
      "08_zavb0i",
      "09_xr5l5t",
      "10_fri54s",
    ],
  },
  {
    coverImage: "02_st8qxv",
    title: "Napoli gotica",
    subtitle: "",
    href: "projects/napoli-gotica",
    contentPath: "demartino/napoli-gotica",
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
    photos: [
      "01_xssxcr",
      "02_st8qxv",
      "03_dhinav",
      "04_egvl13",
      "05_fu9lys",
      "06_j2e9xv",
      "07_u74yoq",
      "08_ihavz8",
      "09_knbo8f",
      "10_gj4ude",
    ],
  },
];
