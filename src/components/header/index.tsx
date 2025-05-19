import './styles.css';
import { FontAwesomeIcon, faLinkedin, faGithub, faInstagram } from '../../utils/icons';

import ufpr from '../../assets/header/ufpr.png';
import engCarto from '../../assets/header/eng-carto-2.png';
import gloriadeitosLogo from '../../assets/header/gloriadeitos-logo.png';

import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header-bg bg-white shadow-md fixed w-full z-10 transition-colors duration-300">
            <nav className="container mx-auto px-6 py-3 flex items-center relative">
                {/* Esquerda */}
                <div className="flex items-center space-x-1 md:space-x-1 sm:space-x-1.5 z-20">
                    <img src={ufpr} alt="Engenharia Cartográfica" className="h-8 w-auto" />
                    <img src={engCarto} alt="Engenharia Cartográfica" className="h-8 w-auto" />

                    {/* Espaço maior para mobile entre imagens e título */}
                    <div className="hidden sm:block md:hidden w-6" />
                    <div className="hidden md:block h-6 border-l border-gray-400 mx-3" />

                    <a
                        href="#"
                        className="text-1xl font-bold whitespace-nowrap ml-2 md:ml-0 text-[#214f6d]">
                        Restituição Monocular
                    </a>
                </div>

                {/* Centro - menu fixado no centro da tela, só aparece em md+ */}
                <div className="hidden md:flex space-x-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <a href="#about" className="hover:text-primary-light transition-colors duration-300 text-[#214f6d]">Sobre</a>
                    <a href="#projects" className="hover:text-primary-light transition-colors duration-300 text-[#214f6d]">Projects</a>
                </div>

                {/* Direita */}
                <div className="flex items-center space-x-3 ml-auto z-20">
                    {/* Ícones sociais e login só em md+ */}
                    <div className="hidden md:flex items-center space-x-3 text-[#214f6d]">
                        <a href="https://www.linkedin.com/in/gloriadeitos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-xl">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/gloriadeitos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xl">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.instagram.com/gloriadeitos_dev/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-xl">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <div className="h-6 border-l border-gray-400 mx-3" />

                        <img src={gloriadeitosLogo} alt="Logo Gloriadeitos" className="h-8 w-auto" />
                    </div>

                    {/* Botão menu mobile - só aparece no mobile */}
                    <button
                        id="mobileMenuToggle"
                        className="md:hidden focus:outline-none"
                        aria-label="Toggle mobile menu"
                        onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Menu mobile: aparece/desaparece com toggle */}
            <div id="mobileMenu"
                className={`header-bg md:hidden bg-white transition-colors duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
                {/* Links principais centralizados, com fonte maior e espaçamento */}
                <div className="flex flex-col items-center py-6 space-y-6">
                    <a
                        href="#about"
                        className="text-lg font-semibold hover:text-primary-light transition-colors duration-300 text-[#214f6d]"
                        onClick={() => setMenuOpen(false)}>
                        Sobre
                    </a>
                    <a
                        href="#projects"
                        className="text-lg font-semibold hover:text-primary-light transition-colors duration-300 text-[#214f6d]"
                        onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-lg font-semibold hover:text-primary-light transition-colors duration-300 text-[#214f6d]"
                        onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </div>

                {/* Barra horizontal separadora */}
                <hr className="my-4 border-gray-300" />

                {/* Container centralizado com logo + barra vertical + ícones */}
                <div className="flex justify-center items-center space-x-9 py-1 mb-4">
                    {/* Logo Glória */}
                    <img src={gloriadeitosLogo} alt="Logo Gloriadeitos" className="h-10 w-auto" />

                    {/* Barra vertical */}
                    <div className="h-8 border-l border-gray-400 mt-1 md:mt-3" />

                    {/* Ícones sociais */}
                    <div className="flex space-x-9 text-2xl text-[#214f6d]">
                        <a href="https://www.linkedin.com/in/gloriadeitos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/gloriadeitos" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.instagram.com/gloriadeitos_dev/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
