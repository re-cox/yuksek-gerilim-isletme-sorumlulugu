import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // !!! DEĞİŞTİRİLMESİ GEREKEN ALAN !!!
    // Formspree.io'dan aldığınız form ID'nizi buraya yapıştırın.
    // Örneğin: 'mgegygqv'
    const FORMSPREE_FORM_ID = 'xjkjkavn';

    if (FORMSPREE_FORM_ID === 'xjkjkavn') {
        console.error("Lütfen ContactForm.tsx dosyasındaki FORMSPREE_FORM_ID'yi güncelleyin.");
        setStatus('error');
        // Kullanıcıya yönelik bir uyarı da eklenebilir.
        setTimeout(() => setStatus(''), 5000);
        return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${xjkjkavn}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', phone: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Form gönderilirken bir hata oluştu:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="teklif-al" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ücretsiz Keşif ve Teklif İçin Bize Ulaşın</h2>
          <p className="mt-4 text-lg text-gray-300">
            Formu doldurun, uzman ekibimiz en kısa sürede sizinle iletişime geçerek tesisinize özel çözümler sunsun.
          </p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Adınız Soyadınız</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-600 focus:ring-yellow-500 focus:border-yellow-500 text-white"/>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">Firma Adı</label>
              <input type="text" name="company" id="company" required value={formData.company} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-600 focus:ring-yellow-500 focus:border-yellow-500 text-white"/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Telefon Numaranız</label>
              <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-600 focus:ring-yellow-500 focus:border-yellow-500 text-white"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-posta Adresiniz</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-600 focus:ring-yellow-500 focus:border-yellow-500 text-white"/>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mesajınız (Tesisiniz hakkında kısa bilgi)</label>
              <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-600 focus:ring-yellow-500 focus:border-yellow-500 text-white"></textarea>
            </div>
            <div className="sm:col-span-2 text-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-4 border border-transparent text-lg font-bold rounded-md shadow-sm text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Gönderiliyor...' : 'Teklif İsteğimi Gönder'}
              </button>
            </div>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-center text-green-400">Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.</p>
          )}
          {status === 'error' && (
             <p className="mt-4 text-center text-red-400">Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan bize ulaşın.</p>
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-700 text-center">
            <h3 className="text-xl font-semibold text-white">Veya Doğrudan Bize Ulaşın</h3>
            <p className="mt-2 text-gray-400">Teklif formunu beklemek istemiyorsanız, bize aşağıdaki kanallardan ulaşabilirsiniz.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
                <a href="tel:+902121234567" className="flex items-center text-lg text-yellow-400 hover:text-yellow-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    <span>+90 212 123 45 67</span>
                </a>
                <a href="mailto:info@ygsorumluluk.ist" className="flex items-center text-lg text-yellow-400 hover:text-yellow-300 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    <span>info@ygsorumluluk.ist</span>
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;