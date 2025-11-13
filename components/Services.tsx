import React from 'react';

const CheckIcon = () => (
    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const ServiceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <div className="flex-shrink-0">
            <CheckIcon />
        </div>
        <p className="ml-3 text-lg text-gray-700">{children}</p>
    </li>
);

const Services: React.FC = () => {
    return (
        <section id="hizmet-kapsami" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Hizmet Kapsamımız</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Tesisinizin ihtiyaçlarına göre özelleştirilmiş, kapsamlı bir hizmet paketi sunuyoruz.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <ul className="space-y-4 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                        <ServiceItem>Trafo merkezinin periyodik kontrolü</ServiceItem>
                        <ServiceItem>Hücrelerin ve kesicilerin denetimi</ServiceItem>
                        <ServiceItem>Topraklama ölçümleri ve raporlaması</ServiceItem>
                        <ServiceItem>Termal kamera ile ısı kontrolü</ServiceItem>
                        <ServiceItem>Yasal bildirimlerin yapılması</ServiceItem>
                        <ServiceItem>Acil durum manevralarının planlanması</ServiceItem>
                        <ServiceItem>Enerji kalitesi analizi</ServiceItem>
                        <ServiceItem>İlgili dağıtım şirketiyle (BEDAŞ/AYEDAŞ) koordinasyon</ServiceItem>
                        <ServiceItem>İşletme defterinin tutulması ve takibi</ServiceItem>
                        <ServiceItem>Danışmanlık ve teknik destek</ServiceItem>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;