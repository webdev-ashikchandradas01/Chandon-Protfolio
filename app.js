// Projects item-1
const card = document.getElementById('tilt-card');
const container = document.getElementById('card-container');

// We only apply the 3D tilt on devices with a mouse (Desktop)
container.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt: 15 degrees max
    const rotateX = (centerY - y) / 25;
    const rotateY = (x - centerX) / 35;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
// Projects item-2
// --- Project Item-2 Logic ---
const card2 = document.getElementById('tilt-card-2');
const container2 = document.getElementById('card-container-2');

container2.addEventListener('mousemove', (e) => {
    const rect = card2.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 25;
    const rotateY = (x - centerX) / 35;

    card2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container2.addEventListener('mouseleave', () => {
    card2.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card2.style.transition = 'transform 0.5s ease'; // Smooth reset
});

container2.addEventListener('mouseenter', () => {
    card2.style.transition = 'none'; // Snappy while moving
});

// Project item 3 
// --- Project Item-3 Logic ---
const card3 = document.getElementById('tilt-card-3');
const container3 = document.getElementById('card-container-3');

container3.addEventListener('mousemove', (e) => {
    const rect = card3.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 25;
    const rotateY = (x - centerX) / 35;

    card3.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container3.addEventListener('mouseleave', () => {
    card3.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card3.style.transition = 'transform 0.5s ease'; // Smooth return
});

container3.addEventListener('mouseenter', () => {
    card3.style.transition = 'none'; // Instant response on hover
});


// apps i use 

const marqueeBox = document.getElementById('software-section');
const glassSurface = document.getElementById('marquee-glass-body');

marqueeBox.addEventListener('mousemove', (e) => {
    const rect = marqueeBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle Tilt for a long section
    const rotateX = (centerY - y) / 40;
    const rotateY = (x - centerX) / 80;

    glassSurface.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

marqueeBox.addEventListener('mouseleave', () => {
    glassSurface.style.transform = `rotateX(0deg) rotateY(0deg)`;
});


// Video Selection

const portfolioCards = document.querySelectorAll('.tilt-card');

portfolioCards.forEach(cardItem => {
    cardItem.addEventListener('mousemove', (e) => {
        const rect = cardItem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle rotation for cards
        const rotateX = (centerY - y) / 15;
        const rotateY = (x - centerX) / 15;

        cardItem.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    cardItem.addEventListener('mouseleave', () => {
        cardItem.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});

VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 10,       // Max tilt rotation (degrees)
    speed: 400,    // Speed of the enter/exit transition
    glare: true,   // Enables glare effect
    "max-glare": 0.2, // Max opacity of glare
});



// Testimonil 

const containers = document.querySelectorAll('.js-tilt-container');

containers.forEach(container => {
    const card = container.querySelector('.js-tilt-card');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle tilt logic
        const rotateX = (centerY - y) / 20;
        const rotateY = (x - centerX) / 30;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.transition = 'none'; // Instant movement
    });

    container.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    });
});