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