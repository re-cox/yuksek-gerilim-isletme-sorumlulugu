import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-bold text-white">YG Sorumluluk İstanbul</span>
            </div>
            <p className="text-sm">
              İstanbul'daki yüksek gerilim tesisleriniz için güvenilir ve profesyonel çözüm ortağınız.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
                <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
                 <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base font-semibold text-white tracking-wider uppercase">Hizmetlerimiz</h3>
                  <ul className="mt-4 space-y-2">
                    <li><a href="#hizmet" className="hover:text-white transition-colors">Yüksek Gerilim İşletme Sorumluluğu</a></li>
                    <li><a href="#hizmet-kapsami" className="hover:text-white transition-colors">Periyodik Bakım ve Kontrol</a></li>
                    <li><a href="#hizmet-kapsami" className="hover:text-white transition-colors">Topraklama Ölçümü ve Raporlama</a></li>
                    <li><a href="#neden-biz" className="hover:text-white transition-colors">Danışmanlık Hizmetleri</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white tracking-wider uppercase">İletişim</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                        <a href="mailto:recep@aydemmuhendislik.com" className="hover:text-white transition-colors">recep@aydemmuhendislik.com</a>
                    </li>
                    <li className="flex items-center justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                        <a href="tel:+905325729185" className="hover:text-white transition-colors">+90 532 572 91 85</a>
                    </li>
                     <li className="flex items-center justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        <span>İstanbul, Türkiye</span>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base">&copy; {new Date().getFullYear()} YG Sorumluluk Hizmetleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;