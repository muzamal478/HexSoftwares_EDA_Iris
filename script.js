// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Lazy Loading Observer
const images = document.querySelectorAll('img[loading="lazy"]');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src || entry.target.src;
            observer.unobserve(entry.target);
        }
    });
});
images.forEach(img => observer.observe(img));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chart.js Interactive Pairplot (Sepal Length vs Petal Length)
const ctx = document.getElementById('pairplotChart')?.getContext('2d');
if (ctx) {
    const data = {
        datasets: [
            {
                label: 'Setosa',
                data: Array(50).fill().map((_, i) => ({ x: 5.0 + Math.random() * 2.9, y: 1.4 + Math.random() * 0.5 })),
                backgroundColor: 'rgba(13, 110, 253, 0.6)',
                borderColor: '#0d6efd',
                pointRadius: 5
            },
            {
                label: 'Versicolor',
                data: Array(50).fill().map((_, i) => ({ x: 5.5 + Math.random() * 2.4, y: 4.0 + Math.random() * 1.4 })),
                backgroundColor: 'rgba(111, 66, 193, 0.6)',
                borderColor: '#6f42c1',
                pointRadius: 5
            },
            {
                label: 'Virginica',
                data: Array(50).fill().map((_, i) => ({ x: 6.0 + Math.random() * 1.9, y: 5.0 + Math.random() * 1.9 })),
                backgroundColor: 'rgba(25, 135, 84, 0.6)',
                borderColor: '#198754',
                pointRadius: 5
            }
        ]
    };

    new Chart(ctx, {
        type: 'scatter',
        data: data,
        options: {
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            },
            scales: {
                x: {
                    title: { display: true, text: 'Sepal Length (cm)', color: '#e0e0e0' },
                    grid: { borderColor: '#333333' }
                },
                y: {
                    title: { display: true, text: 'Petal Length (cm)', color: '#e0e0e0' },
                    grid: { borderColor: '#333333' }
                }
            },
            plugins: {
                legend: { labels: { color: '#e0e0e0' } }
            }
        }
    });
}