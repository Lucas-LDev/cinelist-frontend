import logo from '@/assets/logo/Logo.svg';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/movies', label: 'Filmes' },
  { to: '/tv', label: 'Séries' },
  { to: '/discover', label: 'Explorar e Filtrar' },
];

export default function Header() {
  return (
    <header
      className="w-full
                  backdrop-blur-[20px]
                  md:sticky md:top-0 md:left-0 md:right-0 md:z-10"
    >
      <nav className="flex flex-col items-center md:flex-row md:justify-between max-w-[1600px] mx-auto px-5 p-3 gap-y-3 py-4">
        <Link to={'/'}>
          <img
            src={logo}
            alt="Logo do site CineList"
            className="h-[30px] w-auto accent"
          />
        </Link>

        <ul className="flex flex-col text-center gap-1 md:flex-row md:gap-7 font-semibold text-md">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-white hover:text-lime accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
