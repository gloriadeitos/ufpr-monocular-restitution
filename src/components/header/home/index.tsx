import './styles.css';

const HeaderHome = () => {
    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
                Restituição Monocular
            </div>
            <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                <a href="#" className="hover:text-blue-600 transition">Sobre</a>
                <a href="#" className="hover:text-blue-600 transition">Créditos</a>
            </nav>
            <div className="md:hidden">
                <button className="text-gray-700 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default HeaderHome;
