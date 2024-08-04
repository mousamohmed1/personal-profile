document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('شكرًا لتواصلك معنا!');
    });

    // توصيات المحتوى المعتمدة على الذكاء الاصطناعي
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    const recommendedWorks = [
        { title: "تصميمات ملهمة", image: "images/work3.jpg" },
        { title: "تصميم", image: "images/work4.jpg" },
    ];

    recommendedWorks.forEach(work => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.innerHTML = `
            <img src="${work.image}" alt="${work.title}">
            <p>${work.title}</p>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });

    // الذكاء الاصطناعي لتحليل تفاعل المستخدم
    trackUserInteractions();
});

function trackUserInteractions() {
    // مثال على تتبع تفاعلات وسلوكيات المستخدم
    console.log('جارٍ تتبع تفاعلات المستخدم...');
    // يمكن توسيع هذه الوظيفة لتتبع إجراءات محددة وتعديل المحتوى بشكل ديناميكي
}