import React from 'react';

// FIX: Changed icon type from JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500 text-white">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{children}</p>
        </div>
    </div>
);

const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "7/24 Acil Müdahale",
        description: "İstanbul'un her noktasına en kısa sürede ulaşarak arızalara anında müdahale ediyor, iş sürekliliğinizi güvence altına alıyoruz."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        title: "Detaylı Raporlama ve Takip",
        description: "Tüm denetim, ölçüm ve bakım işlemlerini düzenli olarak raporluyor, yasal süreçlerinizi şeffaf bir şekilde yönetiyoruz."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
        title: "Sertifikalı Uzman Kadro",
        description: "Tüm mühendislerimiz EMO (Elektrik Mühendisleri Odası) tarafından yetkilendirilmiş, alanında deneyimli profesyonellerdir."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
        title: "Önleyici Bakım Anlayışı",
        description: "Sadece arızaları gidermekle kalmıyor, periyodik bakımlarla potansiyel sorunları oluşmadan tespit edip önlem alıyoruz."
    }
];

const WhyUs: React.FC = () => {
    return (
        <section id="neden-biz" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Neden Bizi Tercih Etmelisiniz?</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Güvenliğiniz bizim önceliğimiz. İstanbul'un dinamik yapısına uygun, hızlı, güvenilir ve yasalara tam uyumlu hizmet anlayışımızla fark yaratıyoruz.
                        </p>
                        <div className="mt-10 space-y-10">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} icon={feature.icon} title={feature.title}>
                                    {feature.description}
                                </FeatureCard>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 relative" aria-hidden="true">
                        <img className="rounded-lg shadow-xl object-cover w-full h-full" src="https://i.ibb.co/XhKc9Rn/Electrical-Services.png" alt="Mühendis" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
