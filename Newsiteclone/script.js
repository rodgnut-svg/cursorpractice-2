const { useState, useEffect, useRef } = React;

// Text Animation Utility
const useTextAnimation = (text, delay = 0) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible && ref.current) {
            const words = text.split(' ');
            const chars = [];
            words.forEach((word, wordIndex) => {
                word.split('').forEach((char, charIndex) => {
                    chars.push({ char, wordIndex, charIndex, id: `${wordIndex}-${charIndex}` });
                });
                if (wordIndex < words.length - 1) {
                    chars.push({ char: ' ', wordIndex, charIndex: -1, id: `space-${wordIndex}` });
                }
            });

            chars.forEach((item, index) => {
                setTimeout(() => {
                    const charEl = ref.current?.querySelector(`[data-char-id="${item.id}"]`);
                    if (charEl) {
                        charEl.classList.add('visible');
                    }
                }, delay + index * 30);
            });
        }
    }, [isVisible, text, delay]);

    return { ref, isVisible };
};

// Navbar Component
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < 10) {
                // At top of page, always show
                setIsScrolled(false);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down, hide navbar
                setIsScrolled(true);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up, show navbar
                setIsScrolled(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`nav_component ${isScrolled ? 'hidden' : ''}`}>
            <div className="global-padding">
                <div className="container-large">
                    <div className="nav_inner">
                        <a href="#" className="nav_brand" aria-label="home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="138" height="25" viewBox="0 0 138 25" fill="none" className="pellonium_logo">
                                <path d="M31.8945 7.11317H38.4394C39.5825 7.11317 40.5646 7.33052 41.3858 7.76524C42.223 8.18386 42.859 8.77958 43.2937 9.55241C43.7445 10.3252 43.9699 11.2108 43.9699 12.209C43.9699 13.2072 43.7445 14.0928 43.2937 14.8656C42.859 15.6384 42.223 16.2422 41.3858 16.6769C40.5646 17.0955 39.5825 17.3048 38.4394 17.3048H34.4062V24.0188H31.8945V7.11317ZM38.3669 15.1313C39.3813 15.1313 40.138 14.8576 40.6371 14.3101C41.1362 13.7627 41.3858 13.0623 41.3858 12.209C41.3858 11.3557 41.1362 10.6553 40.6371 10.1079C40.138 9.56046 39.3813 9.28675 38.3669 9.28675H34.4062V15.1313H38.3669ZM51.0458 24.212C49.8221 24.212 48.7514 23.9222 47.8337 23.3426C46.916 22.763 46.2075 21.9901 45.7084 21.0241C45.2093 20.0581 44.9597 19.0035 44.9597 17.8603C44.9597 16.7172 45.1932 15.6787 45.6601 14.7449C46.127 13.7949 46.8033 13.0462 47.6888 12.4988C48.5743 11.9353 49.6209 11.6535 50.8284 11.6535C52.0359 11.6535 53.0664 11.9192 53.9197 12.4505C54.7892 12.9657 55.4493 13.6661 55.9001 14.5516C56.3509 15.4211 56.5763 16.3791 56.5763 17.4256C56.5763 17.7637 56.5602 18.0777 56.528 18.3675H47.2541C47.3507 19.5106 47.7451 20.4364 48.4375 21.1448C49.1298 21.8533 49.9992 22.2075 51.0458 22.2075C51.9313 22.2075 52.6558 22.0223 53.2193 21.652C53.7829 21.2817 54.1532 20.7504 54.3303 20.0581H56.6729C56.4636 21.3139 55.8518 22.3202 54.8375 23.0769C53.8231 23.8336 52.5592 24.212 51.0458 24.212ZM54.2095 16.5562C54.129 15.6223 53.7909 14.8898 53.1952 14.3584C52.6156 13.811 51.8266 13.5373 50.8284 13.5373C49.8785 13.5373 49.0976 13.7949 48.4858 14.3101C47.89 14.8254 47.5036 15.574 47.3265 16.5562H54.2095ZM59.295 6.7509H61.6376V24.0188H59.295V6.7509ZM65.0497 6.7509H67.3923V24.0188H65.0497V6.7509ZM76.2625 24.212C75.055 24.212 73.9762 23.9463 73.0263 23.415C72.0764 22.8676 71.3277 22.1189 70.7803 21.169C70.2489 20.2191 69.9833 19.1403 69.9833 17.9328C69.9833 16.7252 70.2489 15.6465 70.7803 14.6966C71.3277 13.7466 72.0764 13.006 73.0263 12.4747C73.9762 11.9272 75.055 11.6535 76.2625 11.6535C77.4701 11.6535 78.5488 11.9272 79.4987 12.4747C80.4487 13.006 81.1893 13.7466 81.7206 14.6966C82.2519 15.6465 82.5176 16.7252 82.5176 17.9328C82.5176 19.1403 82.2519 20.2191 81.7206 21.169C81.1893 22.1189 80.4487 22.8676 79.4987 23.415C78.5488 23.9463 77.4701 24.212 76.2625 24.212ZM76.2625 22.1592C77.4057 22.1592 78.3314 21.7647 79.0399 20.9758C79.7644 20.1869 80.1267 19.1725 80.1267 17.9328C80.1267 16.693 79.7644 15.6787 79.0399 14.8898C78.3314 14.1008 77.4057 13.7064 76.2625 13.7064C75.1033 13.7064 74.1614 14.1008 73.4369 14.8898C72.7284 15.6787 72.3742 16.693 72.3742 17.9328C72.3742 19.1725 72.7284 20.1869 73.4369 20.9758C74.1614 21.7647 75.1033 22.1592 76.2625 22.1592ZM85.1204 11.8467H87.4631V13.9962C87.7851 13.2394 88.2842 12.6598 88.9604 12.2573C89.6527 11.8548 90.4578 11.6535 91.3755 11.6535C92.7441 11.6535 93.8389 12.1044 94.66 13.006C95.4973 13.9076 95.9159 15.083 95.9159 16.532V24.0188H93.5732V16.9909C93.5732 16.0249 93.3076 15.244 92.7763 14.6482C92.261 14.0525 91.5768 13.7547 90.7234 13.7547C89.7735 13.7547 88.9926 14.1008 88.3808 14.7932C87.769 15.4855 87.4631 16.363 87.4631 17.4256V24.0188H85.1204V11.8467ZM99.177 11.8467H101.52V24.0188H99.177V11.8467ZM101.64 6.7509V9.69731H99.0321V6.7509H101.64ZM109.303 24.212C107.934 24.212 106.832 23.7612 105.994 22.8596C105.173 21.9579 104.763 20.7826 104.763 19.3335V11.8467H107.105V18.8747C107.105 19.8407 107.363 20.6216 107.878 21.2173C108.409 21.813 109.102 22.1109 109.955 22.1109C110.905 22.1109 111.686 21.7647 112.298 21.0724C112.926 20.3801 113.24 19.5026 113.24 18.4399V11.8467H115.582V24.0188H113.24V21.8694C112.918 22.6261 112.41 23.2057 111.718 23.6082C111.026 24.0107 110.221 24.212 109.303 24.212ZM118.988 11.8467H121.331V13.9962C121.589 13.2877 122.039 12.7242 122.683 12.3056C123.327 11.8709 124.092 11.6535 124.978 11.6535C125.928 11.6535 126.749 11.8789 127.441 12.3298C128.15 12.7645 128.624 13.3763 128.866 14.1652C129.124 13.4407 129.623 12.845 130.363 12.3781C131.12 11.895 131.941 11.6535 132.827 11.6535C134.147 11.6535 135.185 12.0722 135.942 12.9094C136.715 13.7466 137.101 14.8737 137.101 16.2905V24.0188H134.759V16.9426C134.759 15.9604 134.525 15.1796 134.058 14.5999C133.608 14.0042 132.98 13.7064 132.175 13.7064C131.273 13.7064 130.549 14.0686 130.001 14.7932C129.47 15.5016 129.204 16.363 129.204 17.3773V24.0188H126.861V16.9426C126.861 15.9604 126.628 15.1796 126.161 14.5999C125.71 14.0042 125.09 13.7064 124.301 13.7064C123.4 13.7064 122.675 14.0686 122.128 14.7932C121.597 15.5016 121.331 16.363 121.331 17.3773V24.0188H118.988V11.8467Z" fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9243 13.8113V21.5094H4.98096V24H22.4149V13.8113H19.9243Z" fill="currentColor"/>
                                <path d="M2.49056 13.8113H0V24H2.49247L2.49056 13.8113Z" fill="currentColor"/>
                                <path d="M17.4338 19.0189H4.98096V11.0943C4.98096 7.65879 7.78109 4.96997 11.2163 4.96997C14.6516 4.96997 17.4338 7.65879 17.4338 11.0943V19.0189ZM14.9432 16.5283V11.0943C14.9432 9.03199 13.279 7.46034 11.2166 7.46034C9.1543 7.46034 7.4766 9.03229 7.4766 11.0943V16.5283H14.9432Z" fill="currentColor"/>
                                <path d="M19.9245 11.0944C19.9245 6.38171 15.9019 2.49037 11.2166 2.49037C6.54241 2.49037 2.49056 6.38515 2.49056 11.0944H0C0 5.10183 5.21587 0 11.2166 0C17.1909 0 22.4151 5.03306 22.4151 11.0944H19.9245Z" fill="currentColor"/>
                            </svg>
                        </a>
                        <ul className={`nav_menu ${menuOpen ? 'active' : ''}`}>
                            <li><a href="#about" className="nav_menu_link" onClick={() => setMenuOpen(false)}>About Us</a></li>
                            <li><a href="#solutions" className="nav_menu_link" onClick={() => setMenuOpen(false)}>Solutions</a></li>
                            <li><a href="#media" className="nav_menu_link" onClick={() => setMenuOpen(false)}>Media</a></li>
                            <li><a href="#contact" className="nav_menu_link" onClick={() => setMenuOpen(false)}>Contact</a></li>
                            <li className="nav_button-wrapper-mobile">
                                <a href="#demo" className="button is-alt" onClick={() => setMenuOpen(false)}>Get Started</a>
                            </li>
                        </ul>
                        <div className="nav_button-wrapper">
                            <a href="#demo" className="button is-secondary is-small">Schedule a Demo</a>
                        </div>
                        <button 
                            className="nav_button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="menu"
                        >
                            <div className="nav_button-inner">
                                <div className="nav_button-dash _1"></div>
                                <div className="nav_button-dash _2"></div>
                                <div className="nav_button-dash _3"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Hero Component
const Hero = () => {
    const splineRef = useRef(null);
    const headingRef = useRef(null);
    const headingText = "Manage Exposure, Optimize Security";

    useEffect(() => {
        // Set initial text, then animate
        if (headingRef.current) {
            // Set initial text immediately
            headingRef.current.textContent = headingText;
            
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        const words = headingText.split(' ');
                        headingRef.current.innerHTML = words.map((word, wordIndex) => {
                            return word.split('').map((char, charIndex) => {
                                return `<span class="char" data-char-id="${wordIndex}-${charIndex}" style="display:inline-block;opacity:0;transform:translateY(150%);transition:all 0.3s ease ${charIndex * 0.03}s">${char === ' ' ? '&nbsp;' : char}</span>`;
                            }).join('');
                        }).join(' ');
                        
                        setTimeout(() => {
                            const chars = headingRef.current.querySelectorAll('.char');
                            chars.forEach((char, index) => {
                                setTimeout(() => {
                                    char.classList.add('visible');
                                }, index * 30);
                            });
                        }, 100);
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(headingRef.current);
        }
    }, [headingText]);

    useEffect(() => {
        // Load Spline scene
        if (splineRef.current) {
            // Try to load Spline using runtime
            const loadSpline = () => {
                if (window.SplineRuntime && window.SplineRuntime.Application) {
                    try {
                        const app = new window.SplineRuntime.Application();
                        app.load('https://prod.spline.design/CoX0eWco8mAeHPyZ/scene.splinecode')
                            .then(() => {
                                if (splineRef.current) {
                                    splineRef.current.innerHTML = '';
                                    splineRef.current.appendChild(app.canvas);
                                }
                            })
                            .catch(() => {
                                // Fallback to animated gradient
                                if (splineRef.current) {
                                    splineRef.current.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:8px;animation:gradientShift 8s ease infinite;"></div>';
                                }
                            });
                    } catch (e) {
                        // Fallback to animated gradient
                        if (splineRef.current) {
                            splineRef.current.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:8px;animation:gradientShift 8s ease infinite;"></div>';
                        }
                    }
                } else {
                    // Fallback to animated gradient
                    if (splineRef.current) {
                        splineRef.current.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:8px;animation:gradientShift 8s ease infinite;"></div>';
                    }
                }
            };

            // Wait a bit for Spline to load
            setTimeout(loadSpline, 500);
        }
    }, []);

    return (
        <section className="section_home-hero background-color-secondary">
            <div className="global-padding padding-home-hero">
                <div className="container-large">
                    <div className="home-hero">
                        <div className="home-hero_copy">
                            <h1 ref={headingRef} className="heading-style-h1"></h1>
                            <p className="text-size-md max-w-50">
                                Unified Security Optimization to continuously reduce cyber risk, maximize security stack performance, and deliver measurable ROI.
                            </p>
                            <div className="button-holder">
                                <a href="#demo" className="button">Schedule a Demo</a>
                            </div>
                        </div>
                        <div className="home-hero_spline animate fade-in-3">
                            <div className="home-hero_spline-3d" ref={splineRef}></div>
                        </div>
                        <div className="home-hero_card background-color-alternate animate">
                            <div className="home-hero_card-content">
                                <h2 className="heading-style-h2 max-w-70">The State of Security</h2>
                                <p className="text-size-md">
                                    As organizations ramp up their cyber investments to capitalize on new growth opportunities, security teams are under immense pressure to keep pace and stay aligned with business objectives.
                                    <br /><br />
                                    Pellonium transforms complexity into clarity by unifying cloud infrastructure, business applications, AI systems, and security tools into a continuous, automated security optimization platform.
                                </p>
                                <div className="button-group">
                                    <a href="#solutions" className="button is-inverted">Learn More</a>
                                    <a href="#contact" className="button is-secondary is-inverted">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Security Optimization Section
const SecurityOptimization = () => {
    const iconSVG = (type) => {
        const icons = {
            lock: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.24 2 7 4.24 7 7V9H6C4.9 9 4 9.9 4 11V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V11C20 9.9 19.1 9 18 9H17V7C17 4.24 14.76 2 12 2ZM12 4C13.66 4 15 5.34 15 7V9H9V7C9 5.34 10.34 4 12 4ZM6 11H18V19H6V11Z" fill="currentColor"/></svg>',
            chart: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21H21V19H5V3H3ZM7 17H9V10H7V17ZM11 17H13V7H11V17ZM15 17H17V13H15V17Z" fill="currentColor"/></svg>',
            gear: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.35 19.43 11.03L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.5 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.22 8.95 2.27 9.22 2.46 9.37L4.57 11.03C4.53 11.35 4.5 11.67 4.5 12C4.5 12.33 4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.5 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.5 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z" fill="currentColor"/></svg>',
            globe: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19.93C12.67 19.98 12.34 20 12 20C11.66 20 11.33 19.98 11 19.93V18.07C11.33 18.02 11.66 18 12 18C12.34 18 12.67 18.02 13 18.07V19.93ZM17.75 16.5C17.42 15.4 16.85 14.4 16.1 13.55L15.1 14.55C15.64 15.2 16.08 15.93 16.4 16.73C16.73 17.53 16.9 18.38 16.9 19.25H18.9C18.9 18.12 18.68 17.05 18.25 16.05L17.75 16.5ZM6.25 16.5L5.75 16.05C5.32 17.05 5.1 18.12 5.1 19.25H7.1C7.1 18.38 7.27 17.53 7.6 16.73C7.92 15.93 8.36 15.2 8.9 14.55L7.9 13.55C7.15 14.4 6.58 15.4 6.25 16.5ZM12 6C10.07 6 8.5 7.57 8.5 9.5C8.5 11.43 10.07 13 12 13C13.93 13 15.5 11.43 15.5 9.5C15.5 7.57 13.93 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H6.05C5.97 10.66 5.97 11.34 6.05 12H4.26ZM19.74 10H17.95C18.03 10.66 18.03 11.34 17.95 12H19.74C19.9 11.36 20 10.69 20 10C20 10.69 19.9 11.36 19.74 12H17.95C17.97 12.34 17.97 12.66 17.95 13H19.74C19.9 13.64 20 14.31 20 15C20 14.31 19.9 13.64 19.74 13H17.95C17.97 13.34 17.97 13.66 17.95 14H19.74C19.9 13.36 20 12.69 20 12C20 11.31 19.9 10.64 19.74 10ZM4.26 13H6.05C6.03 12.66 6.03 12.34 6.05 12H4.26C4.1 12.64 4 13.31 4 14C4 13.31 4.1 12.64 4.26 13Z" fill="currentColor"/></svg>',
            target: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="currentColor"/></svg>',
            trend: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="currentColor"/></svg>',
            robot: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 9V7C20 5.9 19.1 5 18 5H6C4.9 5 4 5.9 4 7V9C2.9 9 2 9.9 2 11V17C2 18.1 2.9 19 4 19H6V20C6 20.55 6.45 21 7 21H9C9.55 21 10 20.55 10 20V19H14V20C14 20.55 14.45 21 15 21H17C17.55 21 18 20.55 18 20V19H20C21.1 19 22 18.1 22 17V11C22 9.9 21.1 9 20 9ZM6 7H18V9H6V7ZM20 17H4V11H20V17ZM7 12H9V14H7V12ZM15 12H17V14H15V12Z" fill="currentColor"/></svg>',
            check: '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/></svg>'
        };
        return icons[type] || '';
    };

    const features = [
        {
            icon: iconSVG('lock'),
            title: "Dynamic Risk Equilibrium",
            description: "Balances threat activity, vulnerability criticality, and asset value through continuous optimization cycles that dynamically adjust risk prioritization to reflect evolving threat landscapes."
        },
        {
            icon: iconSVG('chart'),
            title: "Exposure Management",
            description: "Threat-informed scenarios prioritize attack vectors by simulating adversary objectives and business impact outcomes, to focus and optimize mitigation efforts."
        },
        {
            icon: iconSVG('gear'),
            title: "Control Efficacy Analysis",
            description: "Provides recommendations and adaptively adjusts security configurations based on live environment telemetry and performance data to ensure controls remain effective against emerging risks and changing operational conditions."
        },
        {
            icon: iconSVG('globe'),
            title: "Holistic",
            description: "Extends across cloud, SaaS, AI systems, and legacy infrastructure wherever cyber risk is present, with unified analytics that continuously tune security controls and workflows."
        },
        {
            icon: iconSVG('target'),
            title: "Organizationally Aligned",
            description: "Translates technical risks into financial exposure metrics tied to growth targets, ensuring security efforts directly support measurable business outcomes."
        },
        {
            icon: iconSVG('trend'),
            title: "Stack Optimization",
            description: "Continuously tunes tool configurations and eliminates redundant capabilities by analyzing real-world effectiveness, maximizing the return on security investments."
        },
        {
            icon: iconSVG('robot'),
            title: "Agentic Risk Orchestration",
            description: "Executes optimization workflows, validates control effectiveness, and autonomously responds to threats using evidence-based risk evaluations bound by risk appetite."
        },
        {
            icon: iconSVG('check'),
            title: "Effective Compliance",
            description: "Correlates control maturity and policy compliance directly to risk reduction, transforming compliance from a mere checkbox exercise into a measurable driver of the organization's security posture."
        }
    ];

    return (
        <section className="section_posture">
            <div className="global-padding padding-section-risk">
                <div className="container-large">
                    <div className="posture-wrapper">
                        <div className="posture_heading animate">
                            <div className="main-section-heading">
                                <h2 className="heading-style-h2">Security Optimization</h2>
                                <p className="text-size-md text-color-secondary">
                                    A transformative cybersecurity strategy that integrates diverse security domains into a seamless, risk-driven framework. Leveraging advanced analytics and AI, it delivers real-time, contextual risk visibility, prioritizes threats by their potential impact, and optimizes security controls and investments for maximum effectiveness. This approach empowers security teams to shift from reactive defense to operationalizing a proactive, self-adapting security ecosystem-dynamically evolving with emerging threats while aligning tightly with business objectives.
                                </p>
                            </div>
                            <div className="posture_heading-image fade-in-3">
                                <svg className="posture_heading-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="300" height="200" fill="rgba(255,255,255,0.1)"/>
                                    <path d="M50 100 L150 50 L250 100 L150 150 Z" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                                </svg>
                            </div>
                        </div>
                        <div className="posture_cards animate">
                            {features.map((feature, index) => (
                                <div key={index} className={`posture_card fade-in-${index + 1}`}>
                                    <div className="posture_card-icon" dangerouslySetInnerHTML={{__html: feature.icon}}></div>
                                    <div className="posture_card-content">
                                        <h3 className="heading-style-h4">{feature.title}</h3>
                                        <p className="text-size-sm text-color-secondary">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Risk Intelligence Section
const RiskIntelligence = () => {
    const swiperRef = useRef(null);
    const swiperInstanceRef = useRef(null);

    const intelligenceCards = [
        {
            number: "[01]",
            title: "Continuous Cyber Risk Observability",
            description: "Real-time, holistic evaluation of security risks across cloud, applications, and infrastructure for comprehensive awareness."
        },
        {
            number: "[02]",
            title: "Threat-Informed Risk Models",
            description: "Prioritize critical risk exposures by simulating adversary attack playbooks and assessing likelihood and impact dynamically."
        },
        {
            number: "[03]",
            title: "Business Impact Focused",
            description: "Risk assessments and recommendations are tuned to the organization's strategic objectives and financial goals, ensuring security efforts drive value."
        },
        {
            number: "[04]",
            title: "Optimized Recommendations",
            description: "Automated, actionable remediation tactics and curated treatment plans that reduce exposure and optimize security configurations."
        },
        {
            number: "[05]",
            title: "Performance-Driven ROI Analysis",
            description: "Data-driven insights to maximize the effectiveness of existing security investments, identify redundancies, and close capability gaps."
        },
        {
            number: "[06]",
            title: "Agentic AI-Powered",
            description: "AI leveraged to autonomously identify, prioritize, and remediate risks, continuously learning from evolving threats, and enabling proactive, adaptive security posture management."
        }
    ];

    useEffect(() => {
        // Wait for Swiper to be available and DOM to be ready
        const initSwiper = () => {
            if (swiperRef.current && window.Swiper) {
                swiperInstanceRef.current = new window.Swiper(swiperRef.current, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 1,
                        },
                        968: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }
                });
            }
        };

        // Try immediately, then with delay
        if (window.Swiper) {
            setTimeout(initSwiper, 100);
        } else {
            window.addEventListener('load', initSwiper);
        }

        return () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy();
            }
            window.removeEventListener('load', initSwiper);
        };
    }, []);

    return (
        <section className="section_intelligence background-color-tertiary">
            <div className="global-padding padding-section-medium">
                <div className="container-large">
                    <div className="intelligence-wrapper">
                        <div className="main-section-heading">
                            <h2 className="heading-style-h2">Pellonium Risk Intelligence</h2>
                            <p className="text-size-lg text-color-alternate-secondary">
                                Unified Security Optimization delivering continuous, data-driven precision that empowers security teams and stakeholders to efficiently manage, control, and mitigate cyber risks across their entire digital environment.
                            </p>
                        </div>
                        <div className="intelligence_slider animate">
                            <div ref={swiperRef} className="swiper is-intelligence">
                                <div className="swiper-wrapper is-intelligence">
                                    {intelligenceCards.map((card, index) => (
                                        <div key={index} className={`swiper-slide is-intelligence fade-in-${index + 2}`}>
                                            <div className="intelligence-card">
                                                <div className="intelligence-card_content">
                                                    <div className="intelligence-card_number">{card.number}</div>
                                                    <h3 className="heading-style-h4">{card.title}</h3>
                                                </div>
                                                <div className="intelligence-card_content is-wrap">
                                                    <p className="text-size-md">{card.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="swiper-arrows-wrapper fade-in-1">
                                <a href="#" className="swiper-arrow swiper-btn-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="swiper-arrow_svg">
                                        <path d="M6.90905 9.00009L10.0454 5.86373L9.09086 4.90918L4.99996 9.00009L9.09086 13.091L10.0454 12.1365L6.90905 9.00009Z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="#" className="swiper-arrow swiper-btn-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="swiper-arrow_svg">
                                        <path d="M9.13636 9.09091L6 5.95455L6.95455 5L11.0455 9.09091L6.95455 13.1818L6 12.2273L9.13636 9.09091Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intelligence-pattern container-large">
                <svg className="intelligence-pattern_svg" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 100 Q300 50 600 100 T1200 100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none"/>
                    <circle cx="100" cy="100" r="3" fill="rgba(255,255,255,0.1)"/>
                    <circle cx="600" cy="100" r="3" fill="rgba(255,255,255,0.1)"/>
                    <circle cx="1100" cy="100" r="3" fill="rgba(255,255,255,0.1)"/>
                </svg>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <section className="footer_component animate">
            <div className="global-padding footer-padding">
                <div className="container-large">
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
                        <div>
                            <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem'}}>
                                Copyright © 2025 Pellonium | Privacy Policy
                            </p>
                        </div>
                        <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
                            <a href="#about" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem'}}>About Us</a>
                            <a href="#solutions" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem'}}>Solutions</a>
                            <a href="#resources" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem'}}>Resources</a>
                            <a href="#pricing" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem'}}>Pricing</a>
                            <a href="#news" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem'}}>News</a>
                            <a href="#contact" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem'}}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Scroll Animation Observer
const useScrollAnimation = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                    }
                });
            },
            { threshold: 0.01, rootMargin: '0px 0px -100px 0px' }
        );

        // Observe all fade-in elements
        const observeElements = () => {
            const elements = document.querySelectorAll('.fade-in-1, .fade-in-2, .fade-in-3, .fade-in-4, .fade-in-5, .fade-in-6, .fade-in-7, .fade-in-8, .animate');
            elements.forEach((el) => {
                // Check if element is already in viewport
                const rect = el.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isInView && el.style.opacity !== '1') {
                    // Make immediately visible if already in view
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                } else {
                    observer.observe(el);
                }
            });
        };

        // Initial observation after a short delay
        setTimeout(observeElements, 100);
        
        // Re-observe after components render
        setTimeout(observeElements, 1000);

        return () => {
            const elements = document.querySelectorAll('.fade-in-1, .fade-in-2, .fade-in-3, .fade-in-4, .fade-in-5, .fade-in-6, .fade-in-7, .fade-in-8, .animate');
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

// Main App Component
const App = () => {
    useScrollAnimation();

    return (
        <main className="main-wrapper">
            <Navbar />
            <Hero />
            <SecurityOptimization />
            <RiskIntelligence />
            <Footer />
        </main>
    );
};

// Initialize React App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
