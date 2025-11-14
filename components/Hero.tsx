import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-800 pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center text-center text-white overflow-hidden">
      <img
        src="https://picsum.photos/seed/powerplant/1920/1080.webp"
        alt="Yüksek gerilim hatları ve bir enerji santrali"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        // @ts-ignore - fetchPriority is not in standard React DOM types yet
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          İstanbul'da Yüksek Gerilim Tesisleriniz <span className="text-yellow-400">Emin Ellerde</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
          Yasal zorunluluk olan Yüksek Gerilim İşletme Sorumluluğu hizmetimizle tesisinizin güvenliğini, verimliliğini ve yasalara uygunluğunu sağlıyoruz.
        </p>
        <a 
          href="#teklif-al"
          className="inline-block bg-yellow-500 text-gray-900 font-bold text-lg py-4 px-10 rounded-lg shadow-xl hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          Ücretsiz Keşif ve Teklif Alın
        </a>
      </div>
    </section>
  );
};

export default Hero;
