document.addEventListener('DOMContentLoaded', () => {
    const langPtButton = document.getElementById('lang-pt');
    const langEnButton = document.getElementById('lang-en');

    const setLanguage = (language) => {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
        document.documentElement.lang = language;
        localStorage.setItem('language', language);
    };

    langPtButton.addEventListener('click', () => setLanguage('pt-BR'));
    langEnButton.addEventListener('click', () => setLanguage('en-US'));

    const currentLanguage = localStorage.getItem('language') || 'pt-BR';
    setLanguage(currentLanguage);
});