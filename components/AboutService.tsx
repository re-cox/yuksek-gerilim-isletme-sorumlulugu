import React from 'react';

// FIX: Changed icon type from JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const InfoCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 2.944a12.02 12.02 0 009-2.944a12.02 12.02 0 00-1.618-12.944z" />
    </svg>
);

const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const OfficeBuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const AboutService: React.FC = () => {
  return (
    <section id="hizmet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Yüksek Gerilim İşletme Sorumluluğu Nedir?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Tesisinizin kalbi olan yüksek gerilim ekipmanlarının güvenli, verimli ve yasalara uygun çalışmasını sağlayan profesyonel mühendislik hizmetidir.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard icon={<BookOpenIcon />} title="Yasal Zorunluluk">
            Elektrik Kuvvetli Akım Tesisleri Yönetmeliği'ne göre, 1kV üzeri gerilime sahip tüm tesislerde yetkili bir elektrik mühendisinin işletme sorumluluğunu üstlenmesi kanunen zorunludur.
          </InfoCard>
          <InfoCard icon={<ShieldIcon />} title="Can ve Mal Güvenliği">
            Olası elektrik arızaları, kazalar ve yangın risklerine karşı en etkili önlemdir. Profesyonel denetim, tesisinizin ve çalışanlarınızın güvenliğini en üst düzeye çıkarır.
          </InfoCard>
          <InfoCard icon={<OfficeBuildingIcon />} title="Kimler İçin Gerekli?">
            Alışveriş merkezleri, fabrikalar, hastaneler, oteller, endüstriyel tesisler, büyük siteler ve kendine ait trafo merkezi bulunan tüm işletmeler bu hizmeti almakla yükümlüdür.
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
