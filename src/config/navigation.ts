export interface NavLink {
  to: string;
  label: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  sections: NavLink[];
}

//Links do Header
export const HEADER_LINKS: NavLink[] = [
  { to: '/movies', label: 'Filmes' },
  { to: '/tv', label: 'Séries' },
  { to: '/discover', label: 'Explorar e Filtrar' },
];

//Links do Footer
export const FOOTER_LINKS: FooterSection[] = [
  {
    title: 'Navegação',
    sections: [{ to: '/', label: 'Página Inicial' }, ...HEADER_LINKS],
  },
  {
    title: 'Legal',
    sections: [
      { to: '/disclaimer', label: 'Aviso legal' },
      {
        to: 'https://developer.themoviedb.org/docs',
        label: 'TMDB API',
        external: true,
      },
    ],
  },
  {
    title: 'Institucional',
    sections: [
      { to: '/about', label: 'Sobre o projeto' },
      { to: '/faq', label: 'Perguntas frequentes' },
      { to: '/contact', label: 'Contato' },
    ],
  },
];
