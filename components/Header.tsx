import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || menuOpen ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <a href="#" className="flex items-center space-x-2" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-xl font-bold text-gray-800">YG Sorumluluk</span>
             </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <a href="#hizmet" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Hizmetimiz</a>
              <a href="#neden-biz" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Neden Biz?</a>
              <a href="#sss" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">S.S.S</a>
            </nav>
          </div>
          <div className="flex items-center">
            <a 
              href="#teklif-al"
              className="hidden sm:inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
            >
              Hızlı Teklif Al
            </a>
            <div className="md:hidden ml-3">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-label="Menüyü aç">
                {menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <a href="#hizmet" onClick={closeMenu} className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Hizmetimiz</a>
          <a href="#neden-biz" onClick={closeMenu} className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Neden Biz?</a>
          <a href="#sss" onClick={closeMenu} className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">S.S.S</a>
          <a href="#teklif-al" onClick={closeMenu} className="bg-blue-50 text-blue-700 block px-3 py-3 rounded-md text-base font-medium text-center">Hızlı Teklif Al</a>
        </div>
      </div>
    </header>
  );
};

export default Header;