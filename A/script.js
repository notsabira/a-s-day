document.addEventListener('DOMContentLoaded', () => {
    addInteractiveEffects();
    createSparkles();
});

function addInteractiveEffects() {
    const cards = document.querySelectorAll('.memory-card, .wish-card, .nav-button');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
}

function createSparkles() {
    const container = document.querySelector('.floating-elements');
    if (!container) return;

    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'float-element';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        sparkle.style.width = sparkle.style.height = (Math.random() * 5 + 5) + 'px';

        container.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 7000);
    }, 800);
}

const memoryCards = document.querySelectorAll('.memory-card');
memoryCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
});

const wishCards = document.querySelectorAll('.wish-card');
wishCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.style.transform = 'translateX(15px)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
});
