/* ========================================
   Mateo M. Rodriguez - Inmobiliaria
   JavaScript Principal
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar-custom');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    
    // Close mobile nav on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
    
    // ========================================
    // Gallery System
    // ========================================
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    let currentFilter = 'all';
    let displayedItems = 0;
    const itemsPerLoad = 12;
    let filteredData = [];
    
    // Initialize gallery
    function initGallery() {
        filteredData = galleryData;
        displayedItems = 0;
        galleryGrid.innerHTML = '';
        loadMoreItems();
    }
    
    // Load more items
    function loadMoreItems() {
        const itemsToLoad = filteredData.slice(displayedItems, displayedItems + itemsPerLoad);
        
        itemsToLoad.forEach((item, index) => {
            const galleryItem = createGalleryItem(item, displayedItems + index);
            galleryGrid.appendChild(galleryItem);
            
            // Animate in
            setTimeout(() => {
                galleryItem.style.opacity = '1';
                galleryItem.style.transform = 'translateY(0)';
            }, index * 50);
        });
        
        displayedItems += itemsToLoad.length;
        
        // Hide load more button if all items are displayed
        if (displayedItems >= filteredData.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
    
    // Create gallery item element
    function createGalleryItem(item, index) {
        const div = document.createElement('div');
        div.className = `gallery-item ${item.isVideo ? 'video-item' : ''}`;
        div.setAttribute('data-category', item.category);
        div.setAttribute('data-index', index);
        div.style.opacity = '0';
        div.style.transform = 'translateY(20px)';
        div.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        if (item.isVideo) {
            div.innerHTML = `
                <img src="${item.poster || 'images/video-placeholder.jpg'}" alt="${item.title}">
                <div class="gallery-overlay">
                    <h5 class="gallery-title">${item.title}</h5>
                </div>
                <div class="gallery-icon">
                    <i class="bi bi-play-fill"></i>
                </div>
            `;
        } else {
            div.innerHTML = `
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <h5 class="gallery-title">${item.title}</h5>
                </div>
                <div class="gallery-icon">
                    <i class="bi bi-zoom-in"></i>
                </div>
            `;
        }
        
        div.addEventListener('click', () => openLightbox(item, index));
        
        return div;
    }
    
    // Filter gallery
    function filterGallery(category) {
        currentFilter = category;
        
        if (category === 'all') {
            filteredData = galleryData;
        } else {
            filteredData = galleryData.filter(item => item.category === category);
        }
        
        displayedItems = 0;
        galleryGrid.innerHTML = '';
        loadMoreItems();
    }
    
    // Filter button click handlers
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterGallery(btn.getAttribute('data-filter'));
        });
    });
    
    // Load more button click handler
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreItems);
    }
    
    // Initialize gallery on load
    if (typeof galleryData !== 'undefined') {
        initGallery();
    }
    
    // ========================================
// Lightbox System
// ========================================
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCounter = document.getElementById('lightboxCounter');
const closeLightbox = document.getElementById('closeLightbox');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');

let currentLightboxIndex = 0;

function openLightbox(item, index) {
    currentLightboxIndex = index;

    // 👉 CONTENEDOR DEL CONTENIDO DEL LIGHTBOX (NO SE TOCA ESTRUCTURA)
    const content = lightboxModal.querySelector('.lightbox-content');

    // 👉 LIMPIAR SOLO VIDEO PREVIO SI EXISTE
    const oldVideo = content.querySelector('video');
    if (oldVideo) oldVideo.remove();

    if (item.isVideo) {
        // === VIDEO ===
        lightboxImg.style.display = 'none';

        const video = document.createElement('video');
        video.controls = true;
        video.autoplay = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '80vh';

        const source = document.createElement('source');
        source.src = item.src;
        source.type = 'video/mp4';

        video.appendChild(source);
        content.appendChild(video);

    } else {
        // === IMAGEN ===
        lightboxImg.src = item.src;
        lightboxImg.style.display = 'block';
    }

    lightboxCaption.textContent = item.title;
    lightboxCounter.textContent = `${index + 1} / ${filteredData.length}`;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightboxModal() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';

    // 👉 LIMPIAR SOLO VIDEO
    const existingVideo = lightboxModal.querySelector('video');
    if (existingVideo) existingVideo.remove();

    lightboxImg.style.display = 'block';
}

function showPrevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredData.length) % filteredData.length;
    const item = filteredData[currentLightboxIndex];
    openLightbox(item, currentLightboxIndex);
}

function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredData.length;
    const item = filteredData[currentLightboxIndex];
    openLightbox(item, currentLightboxIndex);
}

// Lightbox event listeners
if (closeLightbox) {
    closeLightbox.addEventListener('click', closeLightboxModal);
}

if (prevImage) {
    prevImage.addEventListener('click', showPrevImage);
}

if (nextImage) {
    nextImage.addEventListener('click', showNextImage);
}

// Close on background click
if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightboxModal();
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightboxModal();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
});

    
    // ========================================
    // Contact Form Handler
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Create WhatsApp message
            const whatsappMessage = encodeURIComponent(
                `¡Hola! Me interesa la propiedad en Jardines del Valle.\n\n` +
                `Nombre: ${name}\n` +
                `Teléfono: ${phone}\n` +
                `Email: ${email}\n\n` +
                `Mensaje: ${message}`
            );
            
            // Open WhatsApp with the message
            window.open(`https://wa.me/521234567890?text=${whatsappMessage}`, '_blank');
            
            // Show success message
            alert('¡Gracias por tu mensaje! Serás redirigido a WhatsApp.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ========================================
    // Smooth Scroll for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Scroll Animations
    // ========================================
    const animateElements = document.querySelectorAll('.floor-card, .price-card, .contact-card, .contact-form-card, .location-info, .map-container');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ========================================
    // Image Error Handler (Fallback)
    // ========================================
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
            e.target.alt = 'Imagen no disponible';
        }
    }, true);
    
});
