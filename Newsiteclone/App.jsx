/**
 * Pellonium Landing Page
 * Built with React and Vite, featuring 3D animations, interactive carousels, and smooth scroll animations.
 * 
 * Component Structure:
 * - Navbar: Fixed navigation with mobile menu
 * - Hero: Hero section with animated heading and Hyperspeed background
 * - SecurityOptimization: Feature cards grid (8 cards)
 * - RiskIntelligence: Swiper carousel with 6 intelligence cards
 * - Footer: Footer with links
 */

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } from 'postprocessing';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Shield, Zap, Target, TrendingUp, Mail, MapPin, Phone } from 'lucide-react';

// ============================================
// UTILITIES & HOOKS
// ============================================

/**
 * Text Animation Utility Hook
 * Animates text character-by-character when element enters viewport
 */
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

// ============================================
// COMPONENTS
// ============================================

/**
 * Navbar Component
 * Fixed navigation bar with scroll-based hide/show behavior and mobile menu
 */
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
            <a href="#" className="nav_brand" aria-label="Pellonium Home">
              <svg xmlns="http://www.w3.org/2000/svg" width="138" height="25" viewBox="0 0 138 25" fill="none" className="pellonium_logo">
                <path d="M31.8945 7.11317H38.4394C39.5825 7.11317 40.5646 7.33052 41.3858 7.76524C42.223 8.18386 42.859 8.77958 43.2937 9.55241C43.7445 10.3252 43.9699 11.2108 43.9699 12.209C43.9699 13.2072 43.7445 14.0928 43.2937 14.8656C42.859 15.6384 42.223 16.2422 41.3858 16.6769C40.5646 17.0955 39.5825 17.3048 38.4394 17.3048H34.4062V24.0188H31.8945V7.11317ZM38.3669 15.1313C39.3813 15.1313 40.138 14.8576 40.6371 14.3101C41.1362 13.7627 41.3858 13.0623 41.3858 12.209C41.3858 11.3557 41.1362 10.6553 40.6371 10.1079C40.138 9.56046 39.3813 9.28675 38.3669 9.28675H34.4062V15.1313H38.3669ZM51.0458 24.212C49.8221 24.212 48.7514 23.9222 47.8337 23.3426C46.916 22.763 46.2075 21.9901 45.7084 21.0241C45.2093 20.0581 44.9597 19.0035 44.9597 17.8603C44.9597 16.7172 45.1932 15.6787 45.6601 14.7449C46.127 13.7949 46.8033 13.0462 47.6888 12.4988C48.5743 11.9353 49.6209 11.6535 50.8284 11.6535C52.0359 11.6535 53.0664 11.9192 53.9197 12.4505C54.7892 12.9657 55.4493 13.6661 55.9001 14.5516C56.3509 15.4211 56.5763 16.3791 56.5763 17.4256C56.5763 17.7637 56.5602 18.0777 56.528 18.3675H47.2541C47.3507 19.5106 47.7451 20.4364 48.4375 21.1448C49.1298 21.8533 49.9992 22.2075 51.0458 22.2075C51.9313 22.2075 52.6558 22.0223 53.2193 21.652C53.7829 21.2817 54.1532 20.7504 54.3303 20.0581H56.6729C56.4636 21.3139 55.8518 22.3202 54.8375 23.0769C53.8231 23.8336 52.5592 24.212 51.0458 24.212ZM54.2095 16.5562C54.129 15.6223 53.7909 14.8898 53.1952 14.3584C52.6156 13.811 51.8266 13.5373 50.8284 13.5373C49.8785 13.5373 49.0976 13.7949 48.4858 14.3101C47.89 14.8254 47.5036 15.574 47.3265 16.5562H54.2095ZM59.295 6.7509H61.6376V24.0188H59.295V6.7509ZM65.0497 6.7509H67.3923V24.0188H65.0497V6.7509ZM76.2625 24.212C75.055 24.212 73.9762 23.9463 73.0263 23.415C72.0764 22.8676 71.3277 22.1189 70.7803 21.169C70.2489 20.2191 69.9833 19.1403 69.9833 17.9328C69.9833 16.7252 70.2489 15.6465 70.7803 14.6966C71.3277 13.7466 72.0764 13.006 73.0263 12.4747C73.9762 11.9272 75.055 11.6535 76.2625 11.6535C77.4701 11.6535 78.5488 11.9272 79.4987 12.4747C80.4487 13.006 81.1893 13.7466 81.7206 14.6966C82.2519 15.6465 82.5176 16.7252 82.5176 17.9328C82.5176 19.1403 82.2519 20.2191 81.7206 21.169C81.1893 22.1189 80.4487 22.8676 79.4987 23.415C78.5488 23.9463 77.4701 24.212 76.2625 24.212ZM76.2625 22.1592C77.4057 22.1592 78.3314 21.7647 79.0399 20.9758C79.7644 20.1869 80.1267 19.1725 80.1267 17.9328C80.1267 16.693 79.7644 15.6787 79.0399 14.8898C78.3314 14.1008 77.4057 13.7064 76.2625 13.7064C75.1033 13.7064 74.1614 14.1008 73.4369 14.8898C72.7284 15.6787 72.3742 16.693 72.3742 17.9328C72.3742 19.1725 72.7284 20.1869 73.4369 20.9758C74.1614 21.7647 75.1033 22.1592 76.2625 22.1592ZM85.1204 11.8467H87.4631V13.9962C87.7851 13.2394 88.2842 12.6598 88.9604 12.2573C89.6527 11.8548 90.4578 11.6535 91.3755 11.6535C92.7441 11.6535 93.8389 12.1044 94.66 13.006C95.4973 13.9076 95.9159 15.083 95.9159 16.532V24.0188H93.5732V16.9909C93.5732 16.0249 93.3076 15.244 92.7763 14.6482C92.261 14.0525 91.5768 13.7547 90.7234 13.7547C89.7735 13.7547 88.9926 14.1008 88.3808 14.7932C87.769 15.4855 87.4631 16.363 87.4631 17.4256V24.0188H85.1204V11.8467ZM99.177 11.8467H101.52V24.0188H99.177V11.8467ZM101.64 6.7509V9.69731H99.0321V6.7509H101.64ZM109.303 24.212C107.934 24.212 106.832 23.7612 105.994 22.8596C105.173 21.9579 104.763 20.7826 104.763 19.3335V11.8467H107.105V18.8747C107.105 19.8407 107.363 20.6216 107.878 21.2173C108.409 21.813 109.102 22.1109 109.955 22.1109C110.905 22.1109 111.686 21.7647 112.298 21.0724C112.926 20.3801 113.24 19.5026 113.24 18.4399V11.8467H115.582V24.0188H113.24V21.8694C112.918 22.6261 112.41 23.2057 111.718 23.6082C111.026 24.0107 110.221 24.212 109.303 24.212ZM118.988 11.8467H121.331V13.9962C121.589 13.2877 122.039 12.7242 122.683 12.3056C123.327 11.8709 124.092 11.6535 124.978 11.6535C125.928 11.6535 126.749 11.8789 127.441 12.3298C128.15 12.7645 128.624 13.3763 128.866 14.1652C129.124 13.4407 129.623 12.845 130.363 12.3781C131.12 11.895 131.941 11.6535 132.827 11.6535C134.147 11.6535 135.185 12.0722 135.942 12.9094C136.715 13.7466 137.101 14.8737 137.101 16.2905V24.0188H134.759V16.9426C134.759 15.9604 134.525 15.1796 134.058 14.5999C133.608 14.0042 132.98 13.7064 132.175 13.7064C131.273 13.7064 130.549 14.0686 130.001 14.7932C129.47 15.5016 129.204 16.363 129.204 17.3773V24.0188H126.861V16.9426C126.861 15.9604 126.628 15.1796 126.161 14.5999C125.71 14.0042 125.09 13.7064 124.301 13.7064C123.4 13.7064 122.675 14.0686 122.128 14.7932C121.597 15.5016 121.331 16.363 121.331 17.3773V24.0188H118.988V11.8467Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M19.9243 13.8113V21.5094H4.98096V24H22.4149V13.8113H19.9243Z" fill="currentColor" />
                <path d="M2.49056 13.8113H0V24H2.49247L2.49056 13.8113Z" fill="currentColor" />
                <path d="M17.4338 19.0189H4.98096V11.0943C4.98096 7.65879 7.78109 4.96997 11.2163 4.96997C14.6516 4.96997 17.4338 7.65879 17.4338 11.0943V19.0189ZM14.9432 16.5283V11.0943C14.9432 9.03199 13.279 7.46034 11.2166 7.46034C9.1543 7.46034 7.4766 9.03229 7.4766 11.0943V16.5283H14.9432Z" fill="currentColor" />
                <path d="M19.9245 11.0944C19.9245 6.38171 15.9019 2.49037 11.2166 2.49037C6.54241 2.49037 2.49056 6.38515 2.49056 11.0944H0C0 5.10183 5.21587 0 11.2166 0C17.1909 0 22.4151 5.03306 22.4151 11.0944H19.9245Z" fill="currentColor" />
              </svg>
            </a>
            <ul id="nav-menu" className={`nav_menu ${menuOpen ? 'active' : ''}`} role="menubar">
              <li><a href="#state-of-security" className="nav_menu_link" onClick={() => setMenuOpen(false)}>The State</a></li>
              <li><a href="#posture" className="nav_menu_link" onClick={() => setMenuOpen(false)}>Platform</a></li>
              <li><a href="#intelligence" className="nav_menu_link" onClick={() => setMenuOpen(false)}>Intelligence</a></li>
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
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
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

/**
 * Hyperspeed Background Component
 * Exact code from reactbits.dev - Three.js based hyperspeed effect
 */
const Hyperspeed = ({
  effectOptions = {
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3
    }
  }
}) => {
  const hyperspeed = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    initializeHyperspeed();

    function initializeHyperspeed() {
      if (appRef.current) {
        appRef.current.dispose();
        const container = document.getElementById('lights');
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
      }

      const mountainUniforms = {
        uFreq: { value: new THREE.Vector3(3, 6, 10) },
        uAmp: { value: new THREE.Vector3(30, 30, 20) }
      };

      const xyUniforms = {
        uFreq: { value: new THREE.Vector2(5, 2) },
        uAmp: { value: new THREE.Vector2(25, 15) }
      };

      const LongRaceUniforms = {
        uFreq: { value: new THREE.Vector2(2, 3) },
        uAmp: { value: new THREE.Vector2(35, 10) }
      };

      const turbulentUniforms = {
        uFreq: { value: new THREE.Vector4(4, 8, 8, 1) },
        uAmp: { value: new THREE.Vector4(25, 5, 10, 10) }
      };

      const deepUniforms = {
        uFreq: { value: new THREE.Vector2(4, 8) },
        uAmp: { value: new THREE.Vector2(10, 20) },
        uPowY: { value: new THREE.Vector2(20, 2) }
      };

      let nsin = val => Math.sin(val) * 0.5 + 0.5;

      const distortions = {
        mountainDistortion: {
          uniforms: mountainUniforms,
          getDistortion: `
            uniform vec3 uAmp;
            uniform vec3 uFreq;
            #define PI 3.14159265358979
            float nsin(float val){
              return sin(val) * 0.5 + 0.5;
            }
            vec3 getDistortion(float progress){
              float movementProgressFix = 0.02;
              return vec3( 
                cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
                nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
                nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
              );
            }
          `,
          getJS: (progress, time) => {
            let movementProgressFix = 0.02;
            let uFreq = mountainUniforms.uFreq.value;
            let uAmp = mountainUniforms.uAmp.value;
            let distortion = new THREE.Vector3(
              Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x -
              Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
              nsin(progress * Math.PI * uFreq.y + time) * uAmp.y -
              nsin(movementProgressFix * Math.PI * uFreq.y + time) * uAmp.y,
              nsin(progress * Math.PI * uFreq.z + time) * uAmp.z -
              nsin(movementProgressFix * Math.PI * uFreq.z + time) * uAmp.z
            );
            let lookAtAmp = new THREE.Vector3(2, 2, 2);
            let lookAtOffset = new THREE.Vector3(0, 0, -5);
            return distortion.multiply(lookAtAmp).add(lookAtOffset);
          }
        },
        xyDistortion: {
          uniforms: xyUniforms,
          getDistortion: `
            uniform vec2 uFreq;
            uniform vec2 uAmp;
            #define PI 3.14159265358979
            vec3 getDistortion(float progress){
              float movementProgressFix = 0.02;
              return vec3( 
                cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
                sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
                0.
              );
            }
          `,
          getJS: (progress, time) => {
            let movementProgressFix = 0.02;
            let uFreq = xyUniforms.uFreq.value;
            let uAmp = xyUniforms.uAmp.value;
            let distortion = new THREE.Vector3(
              Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x -
              Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
              Math.sin(progress * Math.PI * uFreq.y + time + Math.PI / 2) * uAmp.y -
              Math.sin(movementProgressFix * Math.PI * uFreq.y + time + Math.PI / 2) * uAmp.y,
              0
            );
            let lookAtAmp = new THREE.Vector3(2, 0.4, 1);
            let lookAtOffset = new THREE.Vector3(0, 0, -3);
            return distortion.multiply(lookAtAmp).add(lookAtOffset);
          }
        },
        LongRaceDistortion: {
          uniforms: LongRaceUniforms,
          getDistortion: `
            uniform vec2 uFreq;
            uniform vec2 uAmp;
            #define PI 3.14159265358979
            vec3 getDistortion(float progress){
              float camProgress = 0.0125;
              return vec3( 
                sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
                sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
                0.
              );
            }
          `,
          getJS: (progress, time) => {
            let camProgress = 0.0125;
            let uFreq = LongRaceUniforms.uFreq.value;
            let uAmp = LongRaceUniforms.uAmp.value;
            let distortion = new THREE.Vector3(
              Math.sin(progress * Math.PI * uFreq.x + time) * uAmp.x -
              Math.sin(camProgress * Math.PI * uFreq.x + time) * uAmp.x,
              Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y -
              Math.sin(camProgress * Math.PI * uFreq.y + time) * uAmp.y,
              0
            );
            let lookAtAmp = new THREE.Vector3(1, 1, 0);
            let lookAtOffset = new THREE.Vector3(0, 0, -5);
            return distortion.multiply(lookAtAmp).add(lookAtOffset);
          }
        },
        turbulentDistortion: {
          uniforms: turbulentUniforms,
          getDistortion: `
            uniform vec4 uFreq;
            uniform vec4 uAmp;
            float nsin(float val){
              return sin(val) * 0.5 + 0.5;
            }
            #define PI 3.14159265358979
            float getDistortionX(float progress){
              return (
                cos(PI * progress * uFreq.r + uTime) * uAmp.r +
                pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
              );
            }
            float getDistortionY(float progress){
              return (
                -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
                -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
              );
            }
            vec3 getDistortion(float progress){
              return vec3(
                getDistortionX(progress) - getDistortionX(0.0125),
                getDistortionY(progress) - getDistortionY(0.0125),
                0.
              );
            }
          `,
          getJS: (progress, time) => {
            const uFreq = turbulentUniforms.uFreq.value;
            const uAmp = turbulentUniforms.uAmp.value;

            const getX = p =>
              Math.cos(Math.PI * p * uFreq.x + time) * uAmp.x +
              Math.pow(Math.cos(Math.PI * p * uFreq.y + time * (uFreq.y / uFreq.x)), 2) * uAmp.y;

            const getY = p =>
              -nsin(Math.PI * p * uFreq.z + time) * uAmp.z -
              Math.pow(nsin(Math.PI * p * uFreq.w + time / (uFreq.z / uFreq.w)), 5) * uAmp.w;

            let distortion = new THREE.Vector3(
              getX(progress) - getX(progress + 0.007),
              getY(progress) - getY(progress + 0.007),
              0
            );
            let lookAtAmp = new THREE.Vector3(-2, -5, 0);
            let lookAtOffset = new THREE.Vector3(0, 0, -10);
            return distortion.multiply(lookAtAmp).add(lookAtOffset);
          }
        },
        turbulentDistortionStill: {
          uniforms: turbulentUniforms,
          getDistortion: `
            uniform vec4 uFreq;
            uniform vec4 uAmp;
            float nsin(float val){
              return sin(val) * 0.5 + 0.5;
            }
            #define PI 3.14159265358979
            float getDistortionX(float progress){
              return (
                cos(PI * progress * uFreq.r) * uAmp.r +
                pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
              );
            }
            float getDistortionY(float progress){
              return (
                -nsin(PI * progress * uFreq.b) * uAmp.b +
                -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
              );
            }
            vec3 getDistortion(float progress){
              return vec3(
                getDistortionX(progress) - getDistortionX(0.02),
                getDistortionY(progress) - getDistortionY(0.02),
                0.
              );
            }
          `
        },
        deepDistortionStill: {
          uniforms: deepUniforms,
          getDistortion: `
            uniform vec4 uFreq;
            uniform vec4 uAmp;
            uniform vec2 uPowY;
            float nsin(float val){
              return sin(val) * 0.5 + 0.5;
            }
            #define PI 3.14159265358979
            float getDistortionX(float progress){
              return (
                sin(progress * PI * uFreq.x) * uAmp.x * 2.
              );
            }
            float getDistortionY(float progress){
              return (
                pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
              );
            }
            vec3 getDistortion(float progress){
              return vec3(
                getDistortionX(progress) - getDistortionX(0.02),
                getDistortionY(progress) - getDistortionY(0.05),
                0.
              );
            }
          `
        },
        deepDistortion: {
          uniforms: deepUniforms,
          getDistortion: `
            uniform vec4 uFreq;
            uniform vec4 uAmp;
            uniform vec2 uPowY;
            float nsin(float val){
              return sin(val) * 0.5 + 0.5;
            }
            #define PI 3.14159265358979
            float getDistortionX(float progress){
              return (
                sin(progress * PI * uFreq.x + uTime) * uAmp.x
              );
            }
            float getDistortionY(float progress){
              return (
                pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
              );
            }
            vec3 getDistortion(float progress){
              return vec3(
                getDistortionX(progress) - getDistortionX(0.02),
                getDistortionY(progress) - getDistortionY(0.02),
                0.
              );
            }
          `,
          getJS: (progress, time) => {
            const uFreq = deepUniforms.uFreq.value;
            const uAmp = deepUniforms.uAmp.value;
            const uPowY = deepUniforms.uPowY.value;

            const getX = p => Math.sin(p * Math.PI * uFreq.x + time) * uAmp.x;
            const getY = p => Math.pow(p * uPowY.x, uPowY.y) + Math.sin(p * Math.PI * uFreq.y + time) * uAmp.y;

            let distortion = new THREE.Vector3(
              getX(progress) - getX(progress + 0.01),
              getY(progress) - getY(progress + 0.01),
              0
            );
            let lookAtAmp = new THREE.Vector3(-2, -4, 0);
            let lookAtOffset = new THREE.Vector3(0, 0, -10);
            return distortion.multiply(lookAtAmp).add(lookAtOffset);
          }
        }
      };

      class App {
        constructor(container, options = {}) {
          this.options = options;
          if (this.options.distortion == null) {
            this.options.distortion = {
              uniforms: distortion_uniforms,
              getDistortion: distortion_vertex
            };
          }

          this.container = container;
          this.renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true
          });
          this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.composer = new EffectComposer(this.renderer);
          container.append(this.renderer.domElement);

          this.camera = new THREE.PerspectiveCamera(
            options.fov,
            container.offsetWidth / container.offsetHeight,
            0.1,
            10000
          );
          this.camera.position.z = -5;
          this.camera.position.y = 8;
          this.camera.position.x = 0;
          this.scene = new THREE.Scene();
          this.scene.background = null;

          let fog = new THREE.Fog(options.colors.background, options.length * 0.2, options.length * 500);
          this.scene.fog = fog;
          this.fogUniforms = {
            fogColor: { value: fog.color },
            fogNear: { value: fog.near },
            fogFar: { value: fog.far }
          };
          this.clock = new THREE.Clock();
          this.assets = {};
          this.disposed = false;

          this.road = new Road(this, options);
          this.leftCarLights = new CarLights(
            this,
            options,
            options.colors.leftCars,
            options.movingAwaySpeed,
            new THREE.Vector2(0, 1 - options.carLightsFade)
          );
          this.rightCarLights = new CarLights(
            this,
            options,
            options.colors.rightCars,
            options.movingCloserSpeed,
            new THREE.Vector2(1, 0 + options.carLightsFade)
          );
          this.leftSticks = new LightsSticks(this, options);

          this.fovTarget = options.fov;
          this.speedUpTarget = 0;
          this.speedUp = 0;
          this.timeOffset = 0;

          this.tick = this.tick.bind(this);
          this.init = this.init.bind(this);
          this.setSize = this.setSize.bind(this);
          this.onMouseDown = this.onMouseDown.bind(this);
          this.onMouseUp = this.onMouseUp.bind(this);

          this.onTouchStart = this.onTouchStart.bind(this);
          this.onTouchEnd = this.onTouchEnd.bind(this);
          this.onContextMenu = this.onContextMenu.bind(this);

          window.addEventListener('resize', this.onWindowResize.bind(this));
        }

        onWindowResize() {
          const width = this.container.offsetWidth;
          const height = this.container.offsetHeight;

          this.renderer.setSize(width, height);
          this.camera.aspect = width / height;
          this.camera.updateProjectionMatrix();
          this.composer.setSize(width, height);
        }

        initPasses() {
          this.renderPass = new RenderPass(this.scene, this.camera);
          this.bloomPass = new EffectPass(
            this.camera,
            new BloomEffect({
              luminanceThreshold: 0.2,
              luminanceSmoothing: 0,
              resolutionScale: 1
            })
          );

          const smaaPass = new EffectPass(
            this.camera,
            new SMAAEffect({
              preset: SMAAPreset.MEDIUM,
              searchImage: SMAAEffect.searchImageDataURL,
              areaImage: SMAAEffect.areaImageDataURL
            })
          );
          this.renderPass.renderToScreen = false;
          this.bloomPass.renderToScreen = false;
          smaaPass.renderToScreen = true;
          this.composer.addPass(this.renderPass);
          this.composer.addPass(this.bloomPass);
          this.composer.addPass(smaaPass);
        }

        loadAssets() {
          const assets = this.assets;
          return new Promise(resolve => {
            const manager = new THREE.LoadingManager(resolve);

            const searchImage = new Image();
            const areaImage = new Image();
            assets.smaa = {};
            searchImage.addEventListener('load', function () {
              assets.smaa.search = this;
              manager.itemEnd('smaa-search');
            });

            areaImage.addEventListener('load', function () {
              assets.smaa.area = this;
              manager.itemEnd('smaa-area');
            });
            manager.itemStart('smaa-search');
            manager.itemStart('smaa-area');

            searchImage.src = SMAAEffect.searchImageDataURL;
            areaImage.src = SMAAEffect.areaImageDataURL;
          });
        }

        init() {
          this.initPasses();
          const options = this.options;
          this.road.init();
          this.leftCarLights.init();

          this.leftCarLights.mesh.position.setX(-options.roadWidth / 2 - options.islandWidth / 2);
          this.rightCarLights.init();
          this.rightCarLights.mesh.position.setX(options.roadWidth / 2 + options.islandWidth / 2);
          this.leftSticks.init();
          this.leftSticks.mesh.position.setX(-(options.roadWidth + options.islandWidth / 2));

          this.container.addEventListener('mousedown', this.onMouseDown);
          this.container.addEventListener('mouseup', this.onMouseUp);
          this.container.addEventListener('mouseout', this.onMouseUp);

          this.container.addEventListener('touchstart', this.onTouchStart, { passive: true });
          this.container.addEventListener('touchend', this.onTouchEnd, { passive: true });
          this.container.addEventListener('touchcancel', this.onTouchEnd, { passive: true });

          this.container.addEventListener('contextmenu', this.onContextMenu);

          this.tick();
        }

        onMouseDown(ev) {
          if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
          this.fovTarget = this.options.fovSpeedUp;
          this.speedUpTarget = this.options.speedUp;
        }

        onMouseUp(ev) {
          if (this.options.onSlowDown) this.options.onSlowDown(ev);
          this.fovTarget = this.options.fov;
          this.speedUpTarget = 0;
        }

        onTouchStart(ev) {
          if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
          this.fovTarget = this.options.fovSpeedUp;
          this.speedUpTarget = this.options.speedUp;
        }

        onTouchEnd(ev) {
          if (this.options.onSlowDown) this.options.onSlowDown(ev);
          this.fovTarget = this.options.fov;
          this.speedUpTarget = 0;
        }

        onContextMenu(ev) {
          ev.preventDefault();
        }

        update(delta) {
          let lerpPercentage = Math.exp(-(-60 * Math.log2(1 - 0.1)) * delta);
          this.speedUp += lerp(this.speedUp, this.speedUpTarget, lerpPercentage, 0.00001);
          this.timeOffset += this.speedUp * delta;

          let time = this.clock.elapsedTime + this.timeOffset;

          this.rightCarLights.update(time);
          this.leftCarLights.update(time);
          this.leftSticks.update(time);
          this.road.update(time);

          let updateCamera = false;
          let fovChange = lerp(this.camera.fov, this.fovTarget, lerpPercentage);
          if (fovChange !== 0) {
            this.camera.fov += fovChange * delta * 6;
            updateCamera = true;
          }

          if (this.options.distortion.getJS) {
            const distortion = this.options.distortion.getJS(0.025, time);

            this.camera.lookAt(
              new THREE.Vector3(
                this.camera.position.x + distortion.x,
                this.camera.position.y + distortion.y,
                this.camera.position.z + distortion.z
              )
            );
            updateCamera = true;
          }
          if (updateCamera) {
            this.camera.updateProjectionMatrix();
          }

          if (this.options.isHyper) {
            console.log(this.options.isHyper);
          }
        }

        render(delta) {
          this.composer.render(delta);
        }

        dispose() {
          this.disposed = true;

          if (this.renderer) {
            this.renderer.dispose();
          }
          if (this.composer) {
            this.composer.dispose();
          }
          if (this.scene) {
            this.scene.clear();
          }

          window.removeEventListener('resize', this.onWindowResize.bind(this));
          if (this.container) {
            this.container.removeEventListener('mousedown', this.onMouseDown);
            this.container.removeEventListener('mouseup', this.onMouseUp);
            this.container.removeEventListener('mouseout', this.onMouseUp);

            this.container.removeEventListener('touchstart', this.onTouchStart);
            this.container.removeEventListener('touchend', this.onTouchEnd);
            this.container.removeEventListener('touchcancel', this.onTouchEnd);
            this.container.removeEventListener('contextmenu', this.onContextMenu);
          }
        }

        setSize(width, height, updateStyles) {
          this.composer.setSize(width, height, updateStyles);
        }

        tick() {
          if (this.disposed || !this) return;
          if (resizeRendererToDisplaySize(this.renderer, this.setSize)) {
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
          }
          const delta = this.clock.getDelta();
          this.render(delta);
          this.update(delta);
          requestAnimationFrame(this.tick);
        }
      }

      const distortion_uniforms = {
        uDistortionX: { value: new THREE.Vector2(80, 3) },
        uDistortionY: { value: new THREE.Vector2(-40, 2.5) }
      };

      const distortion_vertex = `
        #define PI 3.14159265358979
        uniform vec2 uDistortionX;
        uniform vec2 uDistortionY;
        float nsin(float val){
          return sin(val) * 0.5 + 0.5;
        }
        vec3 getDistortion(float progress){
          progress = clamp(progress, 0., 1.);
          float xAmp = uDistortionX.r;
          float xFreq = uDistortionX.g;
          float yAmp = uDistortionY.r;
          float yFreq = uDistortionY.g;
          return vec3( 
            xAmp * nsin(progress * PI * xFreq - PI / 2.),
            yAmp * nsin(progress * PI * yFreq - PI / 2.),
            0.
          );
        }
      `;

      const random = base => {
        if (Array.isArray(base)) return Math.random() * (base[1] - base[0]) + base[0];
        return Math.random() * base;
      };

      const pickRandom = arr => {
        if (Array.isArray(arr)) return arr[Math.floor(Math.random() * arr.length)];
        return arr;
      };

      function lerp(current, target, speed = 0.1, limit = 0.001) {
        let change = (target - current) * speed;
        if (Math.abs(change) < limit) {
          change = target - current;
        }
        return change;
      }

      class CarLights {
        constructor(webgl, options, colors, speed, fade) {
          this.webgl = webgl;
          this.options = options;
          this.colors = colors;
          this.speed = speed;
          this.fade = fade;
        }

        init() {
          const options = this.options;
          let curve = new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1));
          let geometry = new THREE.TubeGeometry(curve, 40, 1, 8, false);

          let instanced = new THREE.InstancedBufferGeometry().copy(geometry);
          instanced.instanceCount = options.lightPairsPerRoadWay * 2;

          let laneWidth = options.roadWidth / options.lanesPerRoad;

          let aOffset = [];
          let aMetrics = [];
          let aColor = [];

          let colors = this.colors;
          if (Array.isArray(colors)) {
            colors = colors.map(c => new THREE.Color(c));
          } else {
            colors = new THREE.Color(colors);
          }

          for (let i = 0; i < options.lightPairsPerRoadWay; i++) {
            let radius = random(options.carLightsRadius);
            let length = random(options.carLightsLength);
            let speed = random(this.speed);

            let carLane = i % options.lanesPerRoad;
            let laneX = carLane * laneWidth - options.roadWidth / 2 + laneWidth / 2;

            let carWidth = random(options.carWidthPercentage) * laneWidth;
            let carShiftX = random(options.carShiftX) * laneWidth;
            laneX += carShiftX;

            let offsetY = random(options.carFloorSeparation) + radius * 1.3;

            let offsetZ = -random(options.length);

            aOffset.push(laneX - carWidth / 2);
            aOffset.push(offsetY);
            aOffset.push(offsetZ);

            aOffset.push(laneX + carWidth / 2);
            aOffset.push(offsetY);
            aOffset.push(offsetZ);

            aMetrics.push(radius);
            aMetrics.push(length);
            aMetrics.push(speed);

            aMetrics.push(radius);
            aMetrics.push(length);
            aMetrics.push(speed);

            let color = pickRandom(colors);
            aColor.push(color.r);
            aColor.push(color.g);
            aColor.push(color.b);

            aColor.push(color.r);
            aColor.push(color.g);
            aColor.push(color.b);
          }

          instanced.setAttribute('aOffset', new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false));
          instanced.setAttribute('aMetrics', new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 3, false));
          instanced.setAttribute('aColor', new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));

          let material = new THREE.ShaderMaterial({
            fragmentShader: carLightsFragment,
            vertexShader: carLightsVertex,
            transparent: true,
            uniforms: Object.assign(
              {
                uTime: { value: 0 },
                uTravelLength: { value: options.length },
                uFade: { value: this.fade }
              },
              this.webgl.fogUniforms,
              options.distortion.uniforms
            )
          });

          material.onBeforeCompile = shader => {
            shader.vertexShader = shader.vertexShader.replace(
              '#include <getDistortion_vertex>',
              options.distortion.getDistortion
            );
          };

          let mesh = new THREE.Mesh(instanced, material);
          mesh.frustumCulled = false;
          this.webgl.scene.add(mesh);
          this.mesh = mesh;
        }

        update(time) {
          this.mesh.material.uniforms.uTime.value = time;
        }
      }

      const carLightsFragment = `
        #define USE_FOG;
        ${THREE.ShaderChunk['fog_pars_fragment']}
        varying vec3 vColor;
        varying vec2 vUv; 
        uniform vec2 uFade;
        void main() {
          vec3 color = vec3(vColor);
          float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
          gl_FragColor = vec4(color, alpha);
          if (gl_FragColor.a < 0.0001) discard;
          ${THREE.ShaderChunk['fog_fragment']}
        }
      `;

      const carLightsVertex = `
        #define USE_FOG;
        ${THREE.ShaderChunk['fog_pars_vertex']}
        attribute vec3 aOffset;
        attribute vec3 aMetrics;
        attribute vec3 aColor;
        uniform float uTravelLength;
        uniform float uTime;
        varying vec2 vUv; 
        varying vec3 vColor; 
        #include <getDistortion_vertex>
        void main() {
          vec3 transformed = position.xyz;
          float radius = aMetrics.r;
          float myLength = aMetrics.g;
          float speed = aMetrics.b;

          transformed.xy *= radius;
          transformed.z *= myLength;

          transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
          transformed.xy += aOffset.xy;

          float progress = abs(transformed.z / uTravelLength);
          transformed.xyz += getDistortion(progress);

          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
          gl_Position = projectionMatrix * mvPosition;
          vUv = uv;
          vColor = aColor;
          ${THREE.ShaderChunk['fog_vertex']}
        }
      `;

      class LightsSticks {
        constructor(webgl, options) {
          this.webgl = webgl;
          this.options = options;
        }

        init() {
          const options = this.options;
          const geometry = new THREE.PlaneGeometry(1, 1);
          let instanced = new THREE.InstancedBufferGeometry().copy(geometry);
          let totalSticks = options.totalSideLightSticks;
          instanced.instanceCount = totalSticks;

          let stickoffset = options.length / (totalSticks - 1);
          const aOffset = [];
          const aColor = [];
          const aMetrics = [];

          let colors = options.colors.sticks;
          if (Array.isArray(colors)) {
            colors = colors.map(c => new THREE.Color(c));
          } else {
            colors = new THREE.Color(colors);
          }

          for (let i = 0; i < totalSticks; i++) {
            let width = random(options.lightStickWidth);
            let height = random(options.lightStickHeight);
            aOffset.push((i - 1) * stickoffset * 2 + stickoffset * Math.random());

            let color = pickRandom(colors);
            aColor.push(color.r);
            aColor.push(color.g);
            aColor.push(color.b);

            aMetrics.push(width);
            aMetrics.push(height);
          }

          instanced.setAttribute('aOffset', new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 1, false));
          instanced.setAttribute('aColor', new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));
          instanced.setAttribute('aMetrics', new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 2, false));

          const material = new THREE.ShaderMaterial({
            fragmentShader: sideSticksFragment,
            vertexShader: sideSticksVertex,
            side: THREE.DoubleSide,
            uniforms: Object.assign(
              {
                uTravelLength: { value: options.length },
                uTime: { value: 0 }
              },
              this.webgl.fogUniforms,
              options.distortion.uniforms
            )
          });

          material.onBeforeCompile = shader => {
            shader.vertexShader = shader.vertexShader.replace(
              '#include <getDistortion_vertex>',
              options.distortion.getDistortion
            );
          };

          const mesh = new THREE.Mesh(instanced, material);
          mesh.frustumCulled = false;
          this.webgl.scene.add(mesh);
          this.mesh = mesh;
        }

        update(time) {
          this.mesh.material.uniforms.uTime.value = time;
        }
      }

      const sideSticksVertex = `
        #define USE_FOG;
        ${THREE.ShaderChunk['fog_pars_vertex']}
        attribute float aOffset;
        attribute vec3 aColor;
        attribute vec2 aMetrics;
        uniform float uTravelLength;
        uniform float uTime;
        varying vec3 vColor;
        mat4 rotationY( in float angle ) {
          return mat4(	cos(angle),		0,		sin(angle),	0,
                       0,		1.0,			 0,	0,
                  -sin(angle),	0,		cos(angle),	0,
                  0, 		0,				0,	1);
        }
        #include <getDistortion_vertex>
        void main(){
          vec3 transformed = position.xyz;
          float width = aMetrics.x;
          float height = aMetrics.y;

          transformed.xy *= vec2(width, height);
          float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

          transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

          transformed.z += - uTravelLength + time;

          float progress = abs(transformed.z / uTravelLength);
          transformed.xyz += getDistortion(progress);

          transformed.y += height / 2.;
          transformed.x += -width / 2.;
          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
          gl_Position = projectionMatrix * mvPosition;
          vColor = aColor;
          ${THREE.ShaderChunk['fog_vertex']}
        }
      `;

      const sideSticksFragment = `
        #define USE_FOG;
        ${THREE.ShaderChunk['fog_pars_fragment']}
        varying vec3 vColor;
        void main(){
          vec3 color = vec3(vColor);
          gl_FragColor = vec4(color,1.);
          ${THREE.ShaderChunk['fog_fragment']}
        }
      `;

      class Road {
        constructor(webgl, options) {
          this.webgl = webgl;
          this.options = options;
          this.uTime = { value: 0 };
        }

        createPlane(side, width, isRoad) {
          const options = this.options;
          let segments = 100;
          const geometry = new THREE.PlaneGeometry(
            isRoad ? options.roadWidth : options.islandWidth,
            options.length,
            20,
            segments
          );
          let uniforms = {
            uTravelLength: { value: options.length },
            uColor: { value: new THREE.Color(isRoad ? options.colors.roadColor : options.colors.islandColor) },
            uTime: this.uTime
          };

          if (isRoad) {
            uniforms = Object.assign(uniforms, {
              uLanes: { value: options.lanesPerRoad },
              uBrokenLinesColor: { value: new THREE.Color(options.colors.brokenLines) },
              uShoulderLinesColor: { value: new THREE.Color(options.colors.shoulderLines) },
              uShoulderLinesWidthPercentage: { value: options.shoulderLinesWidthPercentage },
              uBrokenLinesLengthPercentage: { value: options.brokenLinesLengthPercentage },
              uBrokenLinesWidthPercentage: { value: options.brokenLinesWidthPercentage }
            });
          }

          const material = new THREE.ShaderMaterial({
            fragmentShader: isRoad ? roadFragment : islandFragment,
            vertexShader: roadVertex,
            side: THREE.DoubleSide,
            uniforms: Object.assign(uniforms, this.webgl.fogUniforms, options.distortion.uniforms)
          });

          material.onBeforeCompile = shader => {
            shader.vertexShader = shader.vertexShader.replace(
              '#include <getDistortion_vertex>',
              options.distortion.getDistortion
            );
          };

          const mesh = new THREE.Mesh(geometry, material);
          mesh.rotation.x = -Math.PI / 2;
          mesh.position.z = -options.length / 2;
          mesh.position.x += (this.options.islandWidth / 2 + options.roadWidth / 2) * side;
          this.webgl.scene.add(mesh);

          return mesh;
        }

        init() {
          this.leftRoadWay = this.createPlane(-1, this.options.roadWidth, true);
          this.rightRoadWay = this.createPlane(1, this.options.roadWidth, true);
          this.island = this.createPlane(0, this.options.islandWidth, false);
        }

        update(time) {
          this.uTime.value = time;
        }
      }

      const roadBaseFragment = `
        #define USE_FOG;
        varying vec2 vUv; 
        uniform vec3 uColor;
        uniform float uTime;
        #include <roadMarkings_vars>
        ${THREE.ShaderChunk['fog_pars_fragment']}
        void main() {
          vec2 uv = vUv;
          vec3 color = vec3(uColor);
          #include <roadMarkings_fragment>
          gl_FragColor = vec4(color, 1.);
          ${THREE.ShaderChunk['fog_fragment']}
        }
      `;

      const islandFragment = roadBaseFragment
        .replace('#include <roadMarkings_fragment>', '')
        .replace('#include <roadMarkings_vars>', '');

      const roadMarkings_vars = `
        uniform float uLanes;
        uniform vec3 uBrokenLinesColor;
        uniform vec3 uShoulderLinesColor;
        uniform float uShoulderLinesWidthPercentage;
        uniform float uBrokenLinesWidthPercentage;
        uniform float uBrokenLinesLengthPercentage;
        highp float random(vec2 co) {
          highp float a = 12.9898;
          highp float b = 78.233;
          highp float c = 43758.5453;
          highp float dt = dot(co.xy, vec2(a, b));
          highp float sn = mod(dt, 3.14);
          return fract(sin(sn) * c);
        }
      `;

      const roadMarkings_fragment = `
        uv.y = mod(uv.y + uTime * 0.05, 1.);
        float laneWidth = 1.0 / uLanes;
        float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
        float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

        float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
        float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

        brokenLines = mix(brokenLines, sideLines, uv.x);
      `;

      const roadFragment = roadBaseFragment
        .replace('#include <roadMarkings_fragment>', roadMarkings_fragment)
        .replace('#include <roadMarkings_vars>', roadMarkings_vars);

      const roadVertex = `
        #define USE_FOG;
        uniform float uTime;
        ${THREE.ShaderChunk['fog_pars_vertex']}
        uniform float uTravelLength;
        varying vec2 vUv; 
        #include <getDistortion_vertex>
        void main() {
          vec3 transformed = position.xyz;
          vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
          transformed.x += distortion.x;
          transformed.z += distortion.y;
          transformed.y += -1. * distortion.z;  
          
          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
          gl_Position = projectionMatrix * mvPosition;
          vUv = uv;
          ${THREE.ShaderChunk['fog_vertex']}
        }
      `;

      function resizeRendererToDisplaySize(renderer, setSize) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          setSize(width, height, false);
        }
        return needResize;
      }

      (function () {
        const container = document.getElementById('lights');
        if (!container) return;
        const options = { ...effectOptions };
        options.distortion = distortions[options.distortion];

        const myApp = new App(container, options);
        appRef.current = myApp;
        myApp.loadAssets().then(myApp.init);
      })();
    }

    return () => {
      if (appRef.current) {
        appRef.current.dispose();
      }
    };
  }, [effectOptions]);

  return <div id="lights" ref={hyperspeed}></div>;
};

/**
 * Hero Component
 * Main hero section with animated heading and Hyperspeed background
 */
const Hero = () => {
  const headingText = "Manage Exposure, Optimize Identity";

  return (
    <section className="section_home-hero">
      <div className="home-hero_spline animate fade-in-3">
        <Hyperspeed />
      </div>
      <div className="global-padding padding-home-hero">
        <div className="container-large">
          <div className="home-hero">
            <div className="home-hero_copy">
              <h1 className="heading-style-h1">
                {headingText}
              </h1>
              <p className="text-size-md">
                Unified Security Optimization to continuously reduce cyber risk, maximize security stack performance, and deliver measurable ROI.
              </p>
              <div className="button-holder">
                <a href="#demo" className="button">Schedule a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * State of Security Component
 * Card section displaying the problem statement
 */
const StateOfSecurity = () => {
  return (
    <section id="state-of-security" className="section_state-of-security">
      <div className="global-padding">
        <div className="container-large">
          <div className="state-of-security_wrapper animate">
            <div className="home-hero_card">
              <div className="home-hero_card-content">
                <h2 className="heading-style-h2 max-w-70">The State of Security</h2>
                <p className="text-size-md">
                  As organizations ramp up their cyber investments to capitalize on new growth opportunities, security teams are under immense pressure to keep pace and stay aligned with business objectives.
                  <br /><br />
                  <span className="copyright-blur">Pellonium</span> transforms complexity into clarity by unifying cloud infrastructure, business applications, AI systems, and security tools into a continuous, automated security optimization platform.
                </p>
                <div className="button-group">
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

/**
 * Risk Ecosystem Component
 * Interactive 3D orbital system displaying security optimization options
 */
const RiskEcosystem = () => {
  const containerRef = useRef(null);
  const orbitGroupRef = useRef(null);
  const nodesRef = useRef([]);
  const rotationRef = useRef(0);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNodeIndex, setHoveredNodeIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef(null);

  // Premium monochrome refined color scheme
  const colorScheme = {
    nodeGradients: [
      'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 50%, #020617 100%)'
    ],
    nodeBorder: '#000000', // Black crisp border
    nodeShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    nodeShadowHover: '0 4px 12px rgba(0, 0, 0, 0.4)',
    orbitRingColor: 'rgba(94, 234, 212, 0.08)',
    textColor: '#f8fafc', // Near-white for better contrast
    labelBg: 'rgba(15, 23, 42, 0.95)',
    labelBorder: 'rgba(94, 234, 212, 0.2)',
    centerLabelGlow: '0 0 20px rgba(94, 234, 212, 0.15), 0 0 40px rgba(94, 234, 212, 0.08)'
  };

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
    { id: 0, icon: iconSVG('lock'), title: "Dynamic Risk Equilibrium", shortTitle: "Risk Equilibrium", description: "Balances threat activity, vulnerability criticality, and asset value through continuous optimization cycles that dynamically adjust risk prioritization to reflect evolving threat landscapes." },
    { id: 1, icon: iconSVG('chart'), title: "Exposure Management", shortTitle: "Exposure", description: "Threat-informed scenarios prioritize attack vectors by simulating adversary objectives and business impact outcomes, to focus and optimize mitigation efforts." },
    { id: 2, icon: iconSVG('gear'), title: "Control Efficacy Analysis", shortTitle: "Control Efficacy", description: "Provides recommendations and adaptively adjusts security configurations based on live environment telemetry and performance data to ensure controls remain effective against emerging risks and changing operational conditions." },
    { id: 3, icon: iconSVG('globe'), title: "Holistic", shortTitle: "Holistic", description: "Extends across cloud, SaaS, AI systems, and legacy infrastructure wherever cyber risk is present, with unified analytics that continuously tune security controls and workflows." },
    { id: 4, icon: iconSVG('target'), title: "Organizationally Aligned", shortTitle: "Org Aligned", description: "Translates technical risks into financial exposure metrics tied to growth targets, ensuring security efforts directly support measurable business outcomes." },
    { id: 5, icon: iconSVG('trend'), title: "Stack Optimization", shortTitle: "Stack Opt", description: "Continuously tunes tool configurations and eliminates redundant capabilities by analyzing real-world effectiveness, maximizing the return on security investments." },
    { id: 6, icon: iconSVG('robot'), title: "Agentic Risk Orchestration", shortTitle: "Orchestration", description: "Executes optimization workflows, validates control effectiveness, and autonomously responds to threats using evidence-based risk evaluations bound by risk appetite." },
    { id: 7, icon: iconSVG('check'), title: "Effective Compliance", shortTitle: "Compliance", description: "Correlates control maturity and policy compliance directly to risk reduction, transforming compliance from a mere checkbox exercise into a measurable driver of the organization's security posture." }
  ];

  // Relationship mapping: [fromIndex, toIndex]
  const relationships = [
    [0, 1], // Risk Equilibrium → Exposure Management
    [1, 2], // Exposure Management → Control Efficacy
    [2, 7], // Control Efficacy → Compliance
    [3, 0], [3, 1], [3, 2], [3, 4], [3, 5], [3, 6], [3, 7], // Holistic → all
    [4, 0], [4, 1], // Org Aligned → Risk, Exposure
    [5, 2], // Stack Opt → Control Efficacy
    [6, 0], [6, 1], [6, 2], // Orchestration → Risk, Exposure, Control
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize pure 2D CSS transform system
  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 500;
    const centerX = width / 2;
    const centerY = height / 2;
    const nodeRadius = Math.min(width, height) * 0.35; // Adaptive orbit radius based on container size

    // Create orbit group container (for rotation) - pure 2D CSS
    const orbitGroup = document.createElement('div');
    orbitGroup.style.position = 'absolute';
    orbitGroup.style.left = '50%';
    orbitGroup.style.top = '50%';
    orbitGroup.style.width = '1px';
    orbitGroup.style.height = '1px';
    orbitGroup.style.transformOrigin = '0 0';
    container.appendChild(orbitGroup);
    orbitGroupRef.current = orbitGroup;

    // Use monochrome refined color scheme
    const scheme = colorScheme; // colorScheme is the monochrome color scheme object

    // Orbit ring removed per user request

    // Create nodes array for tracking
    const nodes = [];
    const nodeElements = [];
    const nodeLabels = [];

    features.forEach((feature, index) => {
      // Calculate initial position in circle
      const angle = (index * Math.PI * 2) / 8;
      const initialX = Math.cos(angle) * nodeRadius;
      const initialY = Math.sin(angle) * nodeRadius;

      // Create node element - premium clean styling
      const nodeElement = document.createElement('div');
      nodeElement.className = 'orbit-node';
      nodeElement.style.position = 'absolute';
      nodeElement.style.width = '120px';
      nodeElement.style.height = '120px';
      nodeElement.style.borderRadius = '50%';
      nodeElement.style.background = scheme.nodeGradients[index % scheme.nodeGradients.length];
      nodeElement.style.boxShadow = scheme.nodeShadow;
      nodeElement.style.transform = `translate3d(${initialX}px, ${initialY}px, 0) translate(-50%, -50%)`;
      nodeElement.style.cursor = 'pointer';
      nodeElement.style.display = 'flex';
      nodeElement.style.alignItems = 'center';
      nodeElement.style.justifyContent = 'center';
      nodeElement.style.padding = '0.5rem';
      nodeElement.style.overflow = 'visible';
      nodeElement.style.border = `2px solid ${scheme.nodeBorder}`;
      nodeElement.dataset.nodeIndex = index;
      nodeElement.dataset.shadowHover = scheme.nodeShadowHover;
      nodeElement.dataset.shadowNormal = scheme.nodeShadow;

      // Create text element that will counter-rotate to stay upright
      const textElement = document.createElement('span');
      textElement.textContent = feature.shortTitle;
      textElement.style.color = scheme.textColor;
      textElement.style.fontSize = '0.875rem';
      textElement.style.fontWeight = '600';
      textElement.style.textAlign = 'center';
      textElement.style.lineHeight = '1.3';
      textElement.style.wordWrap = 'break-word';
      textElement.style.display = 'block';
      textElement.style.transformOrigin = 'center center';
      textElement.style.letterSpacing = '0.02em';
      textElement.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.6)';
      textElement.style.pointerEvents = 'none';
      nodeElement.appendChild(textElement);

      orbitGroup.appendChild(nodeElement);
      nodeElements.push(nodeElement);

      // Create HTML label for node - enhanced minimalist styling
      const label = document.createElement('div');
      label.className = 'risk-ecosystem-node-label';
      label.textContent = feature.shortTitle;
      label.style.position = 'absolute';
      label.style.pointerEvents = 'none';
      label.style.color = scheme.textColor;
      label.style.fontSize = '0.95rem';
      label.style.fontWeight = '600';
      label.style.textAlign = 'center';
      label.style.whiteSpace = 'nowrap';
      label.style.opacity = '0';
      label.style.display = 'none';
      label.style.background = scheme.labelBg;
      label.style.padding = '0.4rem 0.8rem';
      label.style.borderRadius = '8px';
      label.style.backdropFilter = 'blur(10px)';
      label.style.border = `1px solid ${scheme.labelBorder}`;
      label.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.9)';
      label.style.transform = 'translate(-50%, -50%)';
      label.style.zIndex = '20';
      label.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      label.style.letterSpacing = '0.025em';
      container.appendChild(label);
      nodeLabels.push({ element: label, nodeIndex: index, initialX, initialY });

      nodes.push({ element: nodeElement, feature: feature, index, initialX, initialY });
    });
    nodesRef.current = nodes;

    // Mouse move handler for hover detection - pure 2D with throttling
    let lastMouseMoveTime = 0;
    const handleMouseMove = (event) => {
      const now = performance.now();
      // Throttle to ~60fps to avoid conflicts with animation loop
      if (now - lastMouseMoveTime < 16) return;
      lastMouseMoveTime = now;

      const rect = container.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Check which node is hovered (simple distance check)
      let hoveredIndex = null;
      nodes.forEach((node) => {
        const nodeRect = node.element.getBoundingClientRect();
        const nodeCenterX = nodeRect.left + nodeRect.width / 2 - rect.left;
        const nodeCenterY = nodeRect.top + nodeRect.height / 2 - rect.top;
        const distance = Math.sqrt(
          Math.pow(mouseX - nodeCenterX, 2) + Math.pow(mouseY - nodeCenterY, 2)
        );
        if (distance < 60) {
          hoveredIndex = node.index;
        }
      });
      setHoveredNodeIndex(hoveredIndex);
    };

    // Click handler - pure 2D
    const handleClick = (event) => {
      const rect = container.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      nodes.forEach((node) => {
        const nodeRect = node.element.getBoundingClientRect();
        const nodeCenterX = nodeRect.left + nodeRect.width / 2 - rect.left;
        const nodeCenterY = nodeRect.top + nodeRect.height / 2 - rect.top;
        const distance = Math.sqrt(
          Math.pow(mouseX - nodeCenterX, 2) + Math.pow(mouseY - nodeCenterY, 2)
        );
        if (distance < 60) {
          setSelectedNode(node.feature);
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Pure 2D animation loop - only rotateZ (clockwise)
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Clockwise rotation (negative for clockwise) - pure 2D rotateZ only
      rotationRef.current -= 0.001;
      const rotationDeg = (rotationRef.current * 180) / Math.PI;

      // Apply only rotateZ transform
      orbitGroup.style.transform = `rotate(${rotationDeg}deg)`;

      // Update node positions based on rotation - pure translateX/translateY
      nodes.forEach((node, index) => {
        const angle = (index * Math.PI * 2) / 8 + rotationRef.current;
        const x = Math.cos(angle) * nodeRadius;
        const y = Math.sin(angle) * nodeRadius;

        // Counter-rotate text inside node to keep it upright
        const textElement = node.element.querySelector('span');
        if (textElement) {
          const counterRotationDeg = -(rotationRef.current * 180) / Math.PI;
          textElement.style.transform = `rotate(${counterRotationDeg}deg)`;
        }

        // Update label positions
        const labelData = nodeLabels[index];
        if (labelData) {
          const labelX = centerX + x;
          const labelY = centerY + y;
          labelData.element.style.left = `${labelX}px`;
          labelData.element.style.top = `${labelY}px`;
        }

        // Only update position, let CSS handle hover effects
        node.element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

        // Update hover class without touching transform
        if (hoveredNodeIndex === node.index) {
          if (!node.element.classList.contains('is-hovered')) {
            node.element.classList.add('is-hovered');
          }
        } else {
          if (node.element.classList.contains('is-hovered')) {
            node.element.classList.remove('is-hovered');
          }
        }

        // Hide labels (only show on click)
        if (labelData) {
          labelData.element.style.display = 'none';
          labelData.element.style.opacity = '0';
        }
      });
    };
    animate();

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // Remove all created elements
      nodeLabels.forEach((labelData) => {
        if (labelData.element && labelData.element.parentNode) {
          labelData.element.parentNode.removeChild(labelData.element);
        }
      });
      if (orbitGroup && orbitGroup.parentNode) {
        orbitGroup.parentNode.removeChild(orbitGroup);
      }
    };
  }, [isMobile, hoveredNodeIndex]);

  const hoveredNode = hoveredNodeIndex !== null ? features[hoveredNodeIndex] : null;

  return (
    <section id="posture" className="section_posture">
      <div className="global-padding padding-section-risk">
        <div className="container-large">
          <div className="posture-wrapper">
            {isMobile ? (
              <>
                <div className="posture_heading animate">
                  <div className="main-section-heading">
                    <h2 className="heading-style-h2">Security Options</h2>
                  </div>
                </div>
                <div className="posture_cards animate">
                  {features.map((feature, index) => (
                    <div key={index} className={`posture_card fade-in-${index + 1}`}>
                      <div className="posture_card-icon" dangerouslySetInnerHTML={{ __html: feature.icon }}></div>
                      <div className="posture_card-content">
                        <h3 className="heading-style-h4">{feature.title}</h3>
                        <p className="text-size-sm text-color-secondary">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="posture-layout-desktop">
                  <div className="posture-text-content">
                    <h2 className="heading-style-h2">Security Options</h2>
                    <p className="text-size-md text-color-secondary">
                      Explore our comprehensive suite of security optimization capabilities designed to continuously reduce cyber risk and maximize the performance of your security infrastructure.
                    </p>
                    <div className="posture-features-grid">
                      <div className="posture-feature-item">
                        <Shield className="posture-feature-icon" size={20} strokeWidth={2} />
                        <span className="posture-feature-text">Advanced Protection</span>
                      </div>
                      <div className="posture-feature-item">
                        <Zap className="posture-feature-icon" size={20} strokeWidth={2} />
                        <span className="posture-feature-text">Real-Time Response</span>
                      </div>
                      <div className="posture-feature-item">
                        <Target className="posture-feature-icon" size={20} strokeWidth={2} />
                        <span className="posture-feature-text">Precision Targeting</span>
                      </div>
                      <div className="posture-feature-item">
                        <TrendingUp className="posture-feature-icon" size={20} strokeWidth={2} />
                        <span className="posture-feature-text">Continuous Improvement</span>
                      </div>
                    </div>
                  </div>
                  <div className="risk-ecosystem-container" ref={containerRef}>
                  </div>
                </div>
                {selectedNode && (
                  <>
                    <div className="risk-ecosystem-panel-overlay" onClick={() => setSelectedNode(null)}></div>
                    <div className="risk-ecosystem-panel">
                      <button className="risk-ecosystem-panel-close" onClick={() => setSelectedNode(null)}>×</button>
                      <div className="risk-ecosystem-panel-icon" dangerouslySetInnerHTML={{ __html: selectedNode.icon }}></div>
                      <h3 className="risk-ecosystem-panel-title">{selectedNode.title}</h3>
                      <p className="risk-ecosystem-panel-description">{selectedNode.description}</p>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
/**
 * Security Optimization Component
 * Wrapper that uses RiskEcosystem
 */
const SecurityOptimization = () => {
  return <RiskEcosystem />;
};

/**
 * Risk Intelligence Component
 * Swiper carousel displaying 6 intelligence cards
 */
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
    // Wait for DOM to be ready
    const initSwiper = () => {
      if (swiperRef.current) {
        swiperInstanceRef.current = new Swiper(swiperRef.current, {
          modules: [Navigation],
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

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(initSwiper, 100);

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="intelligence" className="section_intelligence background-color-tertiary">
      <div className="global-padding padding-section-medium">
        <div className="container-large">
          <div className="intelligence-wrapper">
            <div className="main-section-heading">
              <h2 className="heading-style-h2"><span className="copyright-blur">Pellonium</span> Risk Intelligence</h2>
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
                <button type="button" className="swiper-arrow swiper-btn-prev" aria-label="Previous slide">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="swiper-arrow_svg">
                    <path d="M6.90905 9.00009L10.0454 5.86373L9.09086 4.90918L4.99996 9.00009L9.09086 13.091L10.0454 12.1365L6.90905 9.00009Z" fill="currentColor" />
                  </svg>
                </button>
                <button type="button" className="swiper-arrow swiper-btn-next" aria-label="Next slide">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="swiper-arrow_svg">
                    <path d="M9.13636 9.09091L6 5.95455L6.95455 5L11.0455 9.09091L6.95455 13.1818L6 12.2273L9.13636 9.09091Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intelligence-pattern container-large">
        <svg className="intelligence-pattern_svg" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 Q300 50 600 100 T1200 100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="3" fill="rgba(255,255,255,0.1)" />
          <circle cx="600" cy="100" r="3" fill="rgba(255,255,255,0.1)" />
          <circle cx="1100" cy="100" r="3" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
    </section>
  );
};

/**
 * Contact Section Component
 * Professional contact form and information
 */
const ContactSection = () => {
  return (
    <section id="contact" className="section_contact">
      <div className="global-padding padding-section-medium">
        <div className="container-large">
          <div className="contact-wrapper">
            <div className="contact-info animate">
              <h2 className="heading-style-h2">Get in Touch</h2>
              <p className="text-size-lg text-color-secondary margin-bottom-md">
                Ready to transform your security posture? Our team is here to help you navigate the complex landscape of cyber risk.
              </p>

              <div className="contact-methods">
                <div className="contact-method-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-method-text">
                    <h3 className="heading-style-h4">Email Us</h3>
                    <a href="mailto:solutions@pellonium.com" className="contact-link">solutions@<span className="copyright-blur">pellonium</span>.com</a>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-method-text">
                    <h3 className="heading-style-h4">Visit Us</h3>
                    <p className="text-size-md">100 Cyber Point, Suite 500<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container animate">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" id="firstName" className="form-input" placeholder="Jane" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" id="lastName" className="form-input" placeholder="Doe" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Work Email</label>
                  <input type="email" id="email" className="form-input" placeholder="jane@company.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-input is-textarea" placeholder="Tell us about your security needs..." rows="4"></textarea>
                </div>

                <button type="submit" className="button is-full-width">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Footer Component
 * Site footer with links and copyright information
 */
const Footer = () => {
  return (
    <section className="footer_component animate">
      <div className="global-padding footer-padding">
        <div className="container-large">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                Copyright © 2025 <span className="copyright-blur">Pellonium</span> | Privacy Policy
              </p>
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="#about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>About Us</a>
              <a href="#solutions" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Solutions</a>
              <a href="#resources" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Resources</a>
              <a href="#pricing" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Pricing</a>
              <a href="#news" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>News</a>
              <a href="#contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// ANIMATION HOOKS
// ============================================

/**
 * Scroll Animation Hook
 * Observes elements and triggers fade-in animations on scroll
 */
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

// ============================================
// LENIS SMOOTH SCROLLING
// ============================================

/**
 * Lenis Smooth Scrolling Hook
 * Initializes Lenis for inertia-style resistant scrolling with gentle centering
 */
const useLenisSmoothScroll = () => {
  useEffect(() => {
    // Only run on client side (not SSR)
    if (typeof window === 'undefined') return;

    let lenisInstance = null;
    let rafId = null;
    let snapTimeout = null;

    // Load Lenis via script injection
    const loadLenis = () => {
      return new Promise((resolve, reject) => {
        if (window.Lenis) {
          resolve(window.Lenis);
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js';
        script.async = true;
        script.onload = () => {
          if (window.Lenis) resolve(window.Lenis);
          else reject(new Error('Lenis failed to load'));
        };
        script.onerror = () => reject(new Error('Failed to load Lenis script'));
        document.head.appendChild(script);
      });
    };

    // Initialize Lenis
    const initLenis = async () => {
      try {
        const Lenis = await loadLenis();

        // Base configuration for "resisted" feel
        lenisInstance = new Lenis({
          lerp: 0.05, // Lower base lerp for heavier/resisted feel (default is usually ~0.1)
          duration: 1.5,
          smoothWheel: true,
          wheelMultiplier: 0.8, // Slightly lower multiplier for more control
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothTouch: false,
          touchMultiplier: 2,
        });

        // Get all main sections to snap to
        // We target specific sections to ensure we only snap to the main screens
        const getSections = () => {
          return [
            document.querySelector('.section_home-hero'),
            document.querySelector('.section_state-of-security'),
            document.querySelector('.section_posture'),
            document.querySelector('.section_intelligence')
          ].filter(Boolean);
        };

        lenisInstance.on('scroll', ({ scroll, velocity }) => {
          const sections = getSections();
          const viewportHeight = window.innerHeight;
          const viewportCenter = scroll + (viewportHeight / 2);

          let nearestSection = null;
          let minDistance = Infinity;

          // Find the section closest to center
          sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTopAbsolute = scroll + rect.top;
            const sectionCenterAbsolute = sectionTopAbsolute + (rect.height / 2);
            const distance = Math.abs(sectionCenterAbsolute - viewportCenter);

            if (distance < minDistance) {
              minDistance = distance;
              nearestSection = {
                element: section,
                centerScroll: sectionCenterAbsolute - (viewportHeight / 2),
                distance: distance
              };
            }
          });

          // Dynamic resistance and snapping logic
          if (nearestSection) {
            const threshold = viewportHeight * 0.25; // Zone where resistance kicks in

            if (nearestSection.distance < threshold) {
              // We are near a center... raise the resistance (lower lerp)
              // 0.05 base -> drops to 0.02 at center
              const proximity = 1 - (nearestSection.distance / threshold); // 0 to 1
              const newLerp = 0.05 - (0.03 * proximity);
              lenisInstance.options.lerp = Math.max(0.02, newLerp);

              // Gentle Snap Logic
              // Only snap if moving very slowly and very close to center
              if (Math.abs(velocity) < 0.1 && nearestSection.distance < 50) {
                clearTimeout(snapTimeout);
                snapTimeout = setTimeout(() => {
                  lenisInstance.scrollTo(nearestSection.centerScroll, {
                    duration: 1.2,
                    easing: (t) => 1 - Math.pow(1 - t, 4), // EaseOutQuart
                    lock: false, // Don't lock scroll
                    force: false
                  });
                }, 50);
              }
            } else {
              // Reset to base resistance
              lenisInstance.options.lerp = 0.05;
            }
          }
        });

        const raf = (time) => {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

      } catch (error) {
        console.error('Failed to initialize Lenis:', error);
      }
    };

    initLenis();

    return () => {
      if (snapTimeout) clearTimeout(snapTimeout);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);
};

// ============================================
// MAIN APP COMPONENT
// ============================================

/**
 * Main App Component
 * Root component that renders all page sections
 */
const App = () => {
  useScrollAnimation();
  useLenisSmoothScroll();

  return (
    <main className="main-wrapper">
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Navbar />
      <div id="main-content">
        <Hero />
        <StateOfSecurity />
        <SecurityOptimization />
        <RiskIntelligence />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

// ============================================
// EXPORTS
// ============================================

export default App;
