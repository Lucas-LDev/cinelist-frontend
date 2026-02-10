import logo from '@/assets/logo/Logo.svg';
import tmdb from '@/assets/svgs/tmdb.svg';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '@/config/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-medium pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <Link to="/">
              <img
                src={logo}
                alt="CineList Logo"
                className="h-8 w-auto accent"
              />
            </Link>
            <p className="text-gray-light text-sm max-w-[250px]">
              Sua fonte definitiva para descobrir filmes e séries. Fique por
              dentro das novidades do cinema.
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div
              key={column.title}
              className="flex flex-col gap-2 md:gap-6 items-center md:items-start"
            >
              <h3 className="text-white text-lg font-bold tracking-wide">
                {column.title}
              </h3>

              <ul className="flex flex-col md:gap-3 text-center md:text-left">
                {column.sections.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-light hover:text-lime accent text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-gray-light hover:text-lime accent text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 text-center flex flex-col items-center gap-4">
          <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
            <img src={tmdb} alt="Logo do site TMDB" className="w-72" />
          </a>
          <p className="text-white text-base">
            Este projeto utiliza a API do <strong>The Movie Database (TMDB)</strong> para obtenção de dados
            sobre filmes e séries. O TMDB <strong> não endossa, certifica ou é responsável por este projeto.</strong>
          </p>
        </div>

        <div className="border-t border-gray-medium/30 pt-8 text-center">
          <p className="text-white text-sm">
            © {currentYear} CineList. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
