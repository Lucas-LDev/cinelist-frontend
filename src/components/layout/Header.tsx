import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo/Logo.svg';
import { HEADER_LINKS } from '@/config/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="w-full
                  backdrop-blur-[20px]
                  sticky top-0 left-0 right-0 z-50"
    >
      <nav className="flex flex-col items-center md:flex-row md:justify-between page-container py-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo do site CineList"
              className="h-[26px] w-auto accent"
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-lime accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul
          className={`flex flex-col text-center gap-1 md:flex-row md:gap-7 font-semibold text-md w-full md:w-auto overflow-hidden transition-all duration-300 md:p-2 ${
            isOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 md:max-h-none opacity-0 md:opacity-100'
          }`}
        >
          {HEADER_LINKS.map((link, index) => (
            <li
              key={link.to}
              className={`transition-all duration-500  ${
                isOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2 opacity-0 md:translate-y-0 md:opacity-100'
              }`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              <Link
                to={link.to}
                className="text-white hover:text-lime accent"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
