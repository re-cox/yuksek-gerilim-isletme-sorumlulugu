
import React, { useState } from 'react';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-gray-800"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-5 pr-4 text-gray-600">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "Yüksek Gerilim İşletme Sorumluluğu hizmeti almak yasal bir zorunluluk mu?",
        answer: "Evet. Enerji ve Tabii Kaynaklar Bakanlığı tarafından yayımlanan 'Elektrik Kuvvetli Akım Tesisleri Yönetmeliği' gereğince, 1000V (1kV) ve üzeri gerilime sahip tesislerde, EMO tarafından yetkilendirilmiş bir elektrik mühendisinin işletme sorumlusu olarak görevlendirilmesi kanunen zorunludur.",
    },
    {
        question: "Fiyatlandırma nasıl yapılıyor ve nelere bağlı?",
        answer: "Fiyatlandırma; tesisinizin kurulu gücü, trafo sayısı, hücre tipi, konumu ve talep edilen ek hizmetlere (periyodik bakımlar, ölçümler vb.) göre değişiklik göstermektedir. Ücretsiz keşif sonrası size özel en uygun teklifi sunuyoruz.",
    },
    {
        question: "Acil bir durumda ne kadar sürede müdahale ediyorsunuz?",
        answer: "İstanbul içindeki tüm lokasyonlara arıza bildiriminden sonra en geç 2-4 saat içinde ulaşmayı hedefliyoruz. Sözleşmemizde müdahale sürelerimiz net olarak belirtilmektedir.",
    },
    {
        question: "Sözleşme süresi ne kadar?",
        answer: "Sözleşmelerimiz genellikle yıllık olarak yapılmaktadır. Ancak tesisinizin ihtiyaçlarına göre esnek sözleşme süreleri de sunabilmekteyiz.",
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="sss" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Sıkça Sorulan Sorular</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
