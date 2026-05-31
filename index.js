/* ==========================================================================
   JavaScript Interactions - Civil Engineering & Management Portfolio
   Logic Features: Navigation Scroll, Mobile Menu, Project Filters,
                   Dynamic Structural Estimator, Contact Form Animations.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active Navigation Link on Scroll
        highlightNavLink();
    });

    // 2. Mobile Menu Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navNavigation = document.getElementById('nav-navigation');
    
    if (mobileNavToggle && navNavigation) {
        mobileNavToggle.addEventListener('click', () => {
            navNavigation.classList.toggle('mobile-open');
            const icon = mobileNavToggle.querySelector('i');
            if (navNavigation.classList.contains('mobile-open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
        
        // Close mobile menu when clicking nav items
        const navItems = navNavigation.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navNavigation.classList.remove('mobile-open');
                mobileNavToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    // Highlight active link helper
    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');
        
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }

    // 3. Category Filtering for Projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active to current
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    // Smooth reveal
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Smooth hide
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 4. Concrete Volume & Cost Estimator (Calculator)
    const structureTypeSelect = document.getElementById('calc-structure-type');
    const labelThickness = document.getElementById('label-thickness');
    
    const inputLength = document.getElementById('calc-length');
    const inputWidth = document.getElementById('calc-width');
    const inputThickness = document.getElementById('calc-thickness');
    const selectConcrete = document.getElementById('calc-concrete-class');
    const inputCost = document.getElementById('calc-unit-cost');
    
    const btnCalculate = document.getElementById('calc-submit-btn');
    
    // Outputs
    const resVolume = document.getElementById('res-volume');
    const resMass = document.getElementById('res-mass');
    const resCost = document.getElementById('res-cost');
    const resStrength = document.getElementById('res-strength');

    // Adapt label text and default values based on structure type selection
    if (structureTypeSelect) {
        structureTypeSelect.addEventListener('change', () => {
            const type = structureTypeSelect.value;
            if (type === 'slab') {
                labelThickness.innerText = 'Thickness (m)';
                inputLength.value = '12.0';
                inputWidth.value = '8.0';
                inputThickness.value = '0.25';
                inputCost.value = '160';
            } else if (type === 'beam') {
                labelThickness.innerText = 'Height / Depth (m)';
                inputLength.value = '6.0';
                inputWidth.value = '0.4';
                inputThickness.value = '0.5';
                inputCost.value = '180';
            }
        });
    }

    if (btnCalculate) {
        btnCalculate.addEventListener('click', (e) => {
            e.preventDefault();
            performCalculation();
        });
    }

    function performCalculation() {
        const length = parseFloat(inputLength.value) || 0;
        const width = parseFloat(inputWidth.value) || 0;
        const thickness = parseFloat(inputThickness.value) || 0;
        const unitCost = parseFloat(inputCost.value) || 0;
        const concreteGrade = selectConcrete.value;

        // Formula: Volume = L * W * H
        const volume = length * width * thickness;
        
        // Concrete Density: 2.5 t/m3 (reinforced concrete standard)
        const mass = volume * 2.5;
        
        // Total material cost
        const cost = volume * unitCost;

        // Characteristic Strengths (Eurocode 2: f_ck / f_ck_cube)
        let strengthText = '';
        switch(concreteGrade) {
            case 'C20/25':
                strengthText = '20 N/mm² (Cylinder) / 25 N/mm² (Cube)';
                break;
            case 'C25/30':
                strengthText = '25 N/mm² (Cylinder) / 30 N/mm² (Cube)';
                break;
            case 'C30/37':
                strengthText = '30 N/mm² (Cylinder) / 37 N/mm² (Cube)';
                break;
            case 'C35/45':
                strengthText = '35 N/mm² (Cylinder) / 45 N/mm² (Cube)';
                break;
            default:
                strengthText = 'Standard Strength';
        }

        // Apply smooth transition values
        animateValue(resVolume, parseFloat(resVolume.innerText), volume, 500, 2);
        animateValue(resMass, parseFloat(resMass.innerText.split(' ')[0]), mass, 500, 2, ' tons');
        animateValue(resCost, parseFloat(resCost.innerText.replace(/[^\d.]/g, '')), cost, 500, 2, '€', true);
        
        resStrength.innerText = strengthText;
    }

    // Count-up helper animation
    function animateValue(obj, start, end, duration, decimals = 0, suffix = '', prefixSymbol = false) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = progress * (end - start) + start;
            
            let formattedValue = current.toFixed(decimals);
            
            // Format currency if required
            if (prefixSymbol) {
                formattedValue = suffix + parseFloat(formattedValue).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            } else {
                formattedValue = formattedValue + suffix;
            }
            
            obj.innerHTML = formattedValue;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // 5. Contact Form Submission Animation
    const contactForm = document.getElementById('portfolio-contact-form');
    const successAlert = document.getElementById('form-success-alert');

    if (contactForm && successAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulating form sending animation
            const btn = document.getElementById('btn-submit-contact');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            setTimeout(() => {
                // Hide form elements smoothly
                contactForm.style.transition = 'opacity 0.3s ease';
                contactForm.style.opacity = '0';
                
                setTimeout(() => {
                    contactForm.style.display = 'none';
                    successAlert.style.display = 'block';
                }, 300);
            }, 1200);
        });
    }

    // 6. Scroll Reveal Animation (Intersection Observer)
    const animScrollItems = document.querySelectorAll('.animate-on-scroll');
    
    // Add same-class animation properties to other sections
    const sectionsToAnimate = ['#skills', '#projects', '#calculator', '#timeline', '#contact'];
    sectionsToAnimate.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.classList.add('animate-on-scroll');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.15
    });

    // Observe newly added scroll animations
    document.querySelectorAll('.animate-on-scroll').forEach(item => {
        revealObserver.observe(item);
    });
});
