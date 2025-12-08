(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/404 found us/components/PillNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/404 found us/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const PillNav = ({ logo, logoAlt = 'Logo', items, activeHref, className = '', ease = 'power3.easeOut', baseColor = '#fff', pillColor = '#060010', hoveredPillTextColor = '#060010', pillTextColor, onMobileMenuClick, initialLoadAnimation = true })=>{
    _s();
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const circleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tlRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const activeTweenRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const logoImgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PillNav.useEffect": ()=>{
            const layout = {
                "PillNav.useEffect.layout": ()=>{
                    circleRefs.current.forEach({
                        "PillNav.useEffect.layout": (circle)=>{
                            if (!circle?.parentElement) return;
                            const pill = circle.parentElement;
                            const rect = pill.getBoundingClientRect();
                            const { width: w, height: h } = rect;
                            const R = (w * w / 4 + h * h) / (2 * h);
                            const D = Math.ceil(2 * R) + 2;
                            const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - w * w / 4))) + 1;
                            const originY = D - delta;
                            circle.style.width = `${D}px`;
                            circle.style.height = `${D}px`;
                            circle.style.bottom = `-${delta}px`;
                            __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(circle, {
                                xPercent: -50,
                                scale: 0,
                                transformOrigin: `50% ${originY}px`
                            });
                            const label = pill.querySelector('.pill-label');
                            const white = pill.querySelector('.pill-label-hover');
                            if (label) __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(label, {
                                y: 0
                            });
                            if (white) __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(white, {
                                y: h + 12,
                                opacity: 0
                            });
                            const index = circleRefs.current.indexOf(circle);
                            if (index === -1) return;
                            tlRefs.current[index]?.kill();
                            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                                paused: true
                            });
                            tl.to(circle, {
                                scale: 1.2,
                                xPercent: -50,
                                duration: 2,
                                ease,
                                overwrite: 'auto'
                            }, 0);
                            if (label) {
                                tl.to(label, {
                                    y: -(h + 8),
                                    duration: 2,
                                    ease,
                                    overwrite: 'auto'
                                }, 0);
                            }
                            if (white) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(white, {
                                    y: Math.ceil(h + 100),
                                    opacity: 0
                                });
                                tl.to(white, {
                                    y: 0,
                                    opacity: 1,
                                    duration: 2,
                                    ease,
                                    overwrite: 'auto'
                                }, 0);
                            }
                            tlRefs.current[index] = tl;
                        }
                    }["PillNav.useEffect.layout"]);
                }
            }["PillNav.useEffect.layout"];
            layout();
            const onResize = {
                "PillNav.useEffect.onResize": ()=>layout()
            }["PillNav.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            if (document.fonts) {
                document.fonts.ready.then(layout).catch({
                    "PillNav.useEffect": ()=>{}
                }["PillNav.useEffect"]);
            }
            const menu = mobileMenuRef.current;
            if (menu) {
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                    visibility: 'hidden',
                    opacity: 0,
                    scaleY: 1,
                    y: 0
                });
            }
            if (initialLoadAnimation) {
                const logo = logoRef.current;
                const navItems = navItemsRef.current;
                if (logo) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(logo, {
                        scale: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(logo, {
                        scale: 1,
                        duration: 0.6,
                        ease
                    });
                }
                if (navItems) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(navItems, {
                        width: 0,
                        overflow: 'hidden'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(navItems, {
                        width: 'auto',
                        duration: 0.6,
                        ease
                    });
                }
            }
            return ({
                "PillNav.useEffect": ()=>window.removeEventListener('resize', onResize)
            })["PillNav.useEffect"];
        }
    }["PillNav.useEffect"], [
        items,
        ease,
        initialLoadAnimation
    ]);
    const handleEnter = (i)=>{
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: 'auto'
        });
    };
    const handleLeave = (i)=>{
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };
    const handleLogoEnter = ()=>{
        const img = logoImgRef.current;
        if (!img) return;
        logoTweenRef.current?.kill();
        __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(img, {
            rotate: 0
        });
        logoTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
            rotate: 360,
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };
    const toggleMobileMenu = ()=>{
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;
        if (hamburger) {
            const lines = hamburger.querySelectorAll('.hamburger-line');
            if (newState) {
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                    rotation: 45,
                    y: 3,
                    duration: 0.3,
                    ease
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                    rotation: -45,
                    y: -3,
                    duration: 0.3,
                    ease
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease
                });
            }
        }
        if (menu) {
            if (newState) {
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                    visibility: 'visible'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1
                }, {
                    opacity: 1,
                    y: 0,
                    scaleY: 1,
                    duration: 0.3,
                    ease,
                    transformOrigin: 'top center'
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                            visibility: 'hidden'
                        });
                    }
                });
            }
        }
        onMobileMenuClick?.();
    };
    const isExternalLink = (href)=>href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#');
    const isRouterLink = (href)=>href && !isExternalLink(href);
    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor,
        ['--nav-h']: '42px',
        ['--logo']: '36px',
        ['--pill-pad-x']: '18px',
        ['--pill-gap']: '3px'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-[1em] z-[1000] w-full left-0 md:w-auto md:left-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0 ${className}`,
                "aria-label": "Primary",
                style: cssVars,
                children: [
                    isRouterLink(items?.[0]?.href) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: items[0].href,
                        "aria-label": "Home",
                        onMouseEnter: handleLogoEnter,
                        role: "menuitem",
                        ref: (el)=>{
                            logoRef.current = el;
                        },
                        className: "rounded-full p-2 inline-flex items-center justify-center overflow-hidden",
                        style: {
                            width: 'var(--nav-h)',
                            height: 'var(--nav-h)',
                            background: 'var(--base, #000)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: logo,
                            alt: logoAlt,
                            ref: logoImgRef,
                            className: "w-full h-full object-cover block"
                        }, void 0, false, {
                            fileName: "[project]/404 found us/components/PillNav.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/PillNav.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: items?.[0]?.href || '#',
                        "aria-label": "Home",
                        onMouseEnter: handleLogoEnter,
                        ref: (el)=>{
                            logoRef.current = el;
                        },
                        className: "rounded-full p-2 inline-flex items-center justify-center overflow-hidden",
                        style: {
                            width: 'var(--nav-h)',
                            height: 'var(--nav-h)',
                            background: 'var(--base, #000)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: logo,
                            alt: logoAlt,
                            ref: logoImgRef,
                            className: "w-full h-full object-cover block"
                        }, void 0, false, {
                            fileName: "[project]/404 found us/components/PillNav.tsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/PillNav.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: navItemsRef,
                        className: "relative items-center rounded-full hidden md:flex ml-2",
                        style: {
                            height: 'var(--nav-h)',
                            background: 'var(--base, #000)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            role: "menubar",
                            className: "list-none flex items-stretch m-0 p-[3px] h-full",
                            style: {
                                gap: 'var(--pill-gap)'
                            },
                            children: items.slice(1).map((item, i)=>{
                                const actualIndex = i + 1;
                                const isActive = activeHref === item.href;
                                const pillStyle = {
                                    background: 'var(--pill-bg, #fff)',
                                    color: 'var(--pill-text, var(--base, #000))',
                                    paddingLeft: 'var(--pill-pad-x)',
                                    paddingRight: 'var(--pill-pad-x)'
                                };
                                const PillContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none",
                                            style: {
                                                background: 'var(--base, #000)',
                                                willChange: 'transform'
                                            },
                                            "aria-hidden": "true",
                                            ref: (el)=>{
                                                circleRefs.current[actualIndex] = el;
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/PillNav.tsx",
                                            lineNumber: 319,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "label-stack relative inline-block leading-[1] z-[2]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pill-label relative z-[2] inline-block leading-[1]",
                                                    style: {
                                                        willChange: 'transform'
                                                    },
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/404 found us/components/PillNav.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pill-label-hover absolute left-0 top-0 z-[3] inline-block",
                                                    style: {
                                                        color: 'var(--hover-text, #fff)',
                                                        willChange: 'transform, opacity'
                                                    },
                                                    "aria-hidden": "true",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/404 found us/components/PillNav.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/404 found us/components/PillNav.tsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]",
                                            style: {
                                                background: 'var(--base, #000)'
                                            },
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/PillNav.tsx",
                                            lineNumber: 349,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true);
                                const basePillClasses = 'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    role: "none",
                                    className: "flex h-full",
                                    children: isRouterLink(item.href) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        role: "menuitem",
                                        href: item.href,
                                        className: basePillClasses,
                                        style: pillStyle,
                                        "aria-label": item.ariaLabel || item.label,
                                        onMouseEnter: ()=>handleEnter(actualIndex),
                                        onMouseLeave: ()=>handleLeave(actualIndex),
                                        children: PillContent
                                    }, void 0, false, {
                                        fileName: "[project]/404 found us/components/PillNav.tsx",
                                        lineNumber: 364,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        role: "menuitem",
                                        href: item.href,
                                        className: basePillClasses,
                                        style: pillStyle,
                                        "aria-label": item.ariaLabel || item.label,
                                        onMouseEnter: ()=>handleEnter(actualIndex),
                                        onMouseLeave: ()=>handleLeave(actualIndex),
                                        children: PillContent
                                    }, void 0, false, {
                                        fileName: "[project]/404 found us/components/PillNav.tsx",
                                        lineNumber: 376,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, item.href, false, {
                                    fileName: "[project]/404 found us/components/PillNav.tsx",
                                    lineNumber: 362,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/404 found us/components/PillNav.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/PillNav.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: hamburgerRef,
                        onClick: toggleMobileMenu,
                        "aria-label": "Toggle menu",
                        "aria-expanded": isMobileMenuOpen,
                        className: "md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative",
                        style: {
                            width: 'var(--nav-h)',
                            height: 'var(--nav-h)',
                            background: 'var(--base, #000)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                style: {
                                    background: 'var(--pill-bg, #fff)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/PillNav.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                style: {
                                    background: 'var(--pill-bg, #fff)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/PillNav.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/404 found us/components/PillNav.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/404 found us/components/PillNav.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mobileMenuRef,
                className: "md:hidden absolute top-[3em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top",
                style: {
                    ...cssVars,
                    background: 'var(--base, #f0f0f0)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-none m-0 p-[3px] flex flex-col gap-[3px]",
                    children: items.slice(1).map((item)=>{
                        const defaultStyle = {
                            background: 'var(--pill-bg, #fff)',
                            color: 'var(--pill-text, #fff)'
                        };
                        const hoverIn = (e)=>{
                            e.currentTarget.style.background = 'var(--base)';
                            e.currentTarget.style.color = 'var(--hover-text, #fff)';
                        };
                        const hoverOut = (e)=>{
                            e.currentTarget.style.background = 'var(--pill-bg, #fff)';
                            e.currentTarget.style.color = 'var(--pill-text, #fff)';
                        };
                        const linkClasses = 'block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: isRouterLink(item.href) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: linkClasses,
                                style: defaultStyle,
                                onMouseEnter: hoverIn,
                                onMouseLeave: hoverOut,
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/PillNav.tsx",
                                lineNumber: 446,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: linkClasses,
                                style: defaultStyle,
                                onMouseEnter: hoverIn,
                                onMouseLeave: hoverOut,
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/PillNav.tsx",
                                lineNumber: 457,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, item.href, false, {
                            fileName: "[project]/404 found us/components/PillNav.tsx",
                            lineNumber: 444,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/404 found us/components/PillNav.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/404 found us/components/PillNav.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/404 found us/components/PillNav.tsx",
        lineNumber: 250,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PillNav, "j4uiNziWn+3m/kaZPDy9YzlOg6w=");
_c = PillNav;
const __TURBOPACK__default__export__ = PillNav;
var _c;
__turbopack_context__.k.register(_c, "PillNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/TextType.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/404 found us/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TextType = ({ text, as: Component = 'div', typingSpeed = 50, initialDelay = 0, pauseDuration = 2000, deletingSpeed = 30, loop = true, className = '', showCursor = true, hideCursorWhileTyping = false, cursorCharacter = '|', cursorClassName = '', cursorBlinkDuration = 0.5, textColors = [], textClassNames = [], variableSpeed, onSentenceComplete, startOnVisible = false, reverseMode = false, ...props })=>{
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentCharIndex, setCurrentCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTextIndex, setCurrentTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!startOnVisible);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextType.useMemo[textArray]": ()=>Array.isArray(text) ? text : [
                text
            ]
    }["TextType.useMemo[textArray]"], [
        text
    ]);
    const getRandomSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextType.useCallback[getRandomSpeed]": ()=>{
            if (!variableSpeed) return typingSpeed;
            const { min, max } = variableSpeed;
            return Math.random() * (max - min) + min;
        }
    }["TextType.useCallback[getRandomSpeed]"], [
        variableSpeed,
        typingSpeed
    ]);
    const getCurrentTextColor = ()=>{
        if (textColors.length === 0) return;
        return textColors[currentTextIndex % textColors.length];
    };
    const getCurrentTextClassName = ()=>{
        if (textClassNames.length === 0) return '';
        return textClassNames[currentTextIndex % textClassNames.length];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!startOnVisible || !containerRef.current) return;
            const observer = new IntersectionObserver({
                "TextType.useEffect": (entries)=>{
                    entries.forEach({
                        "TextType.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                            }
                        }
                    }["TextType.useEffect"]);
                }
            }["TextType.useEffect"], {
                threshold: 0.1
            });
            observer.observe(containerRef.current);
            return ({
                "TextType.useEffect": ()=>observer.disconnect()
            })["TextType.useEffect"];
        }
    }["TextType.useEffect"], [
        startOnVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (showCursor && cursorRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursorRef.current, {
                    opacity: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                    opacity: 0,
                    duration: cursorBlinkDuration,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power2.inOut'
                });
            }
        }
    }["TextType.useEffect"], [
        showCursor,
        cursorBlinkDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!isVisible) return;
            let timeout;
            const currentText = textArray[currentTextIndex];
            const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;
            const executeTypingAnimation = {
                "TextType.useEffect.executeTypingAnimation": ()=>{
                    if (isDeleting) {
                        if (displayedText === '') {
                            setIsDeleting(false);
                            if (currentTextIndex === textArray.length - 1 && !loop) {
                                return;
                            }
                            if (onSentenceComplete) {
                                onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                            }
                            setCurrentTextIndex({
                                "TextType.useEffect.executeTypingAnimation": (prev)=>(prev + 1) % textArray.length
                            }["TextType.useEffect.executeTypingAnimation"]);
                            setCurrentCharIndex(0);
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{}
                            }["TextType.useEffect.executeTypingAnimation"], pauseDuration);
                        } else {
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setDisplayedText({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev.slice(0, -1)
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], deletingSpeed);
                        }
                    } else {
                        if (currentCharIndex < processedText.length) {
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setDisplayedText({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev + processedText[currentCharIndex]
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                    setCurrentCharIndex({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev + 1
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], variableSpeed ? getRandomSpeed() : typingSpeed);
                        } else if (textArray.length >= 1) {
                            if (!loop && currentTextIndex === textArray.length - 1) return;
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setIsDeleting(true);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], pauseDuration);
                        }
                    }
                }
            }["TextType.useEffect.executeTypingAnimation"];
            if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
                timeout = setTimeout(executeTypingAnimation, initialDelay);
            } else {
                executeTypingAnimation();
            }
            return ({
                "TextType.useEffect": ()=>clearTimeout(timeout)
            })["TextType.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TextType.useEffect"], [
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        textArray,
        currentTextIndex,
        loop,
        initialDelay,
        isVisible,
        reverseMode,
        variableSpeed,
        onSentenceComplete
    ]);
    const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Component, {
        ref: containerRef,
        className: `text-type ${className}`,
        suppressHydrationWarning: true,
        ...props
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-type__content ${getCurrentTextClassName()}`,
        style: {
            color: getCurrentTextColor() || 'inherit'
        },
        suppressHydrationWarning: true,
        children: displayedText
    }, void 0, false, {
        fileName: "[project]/404 found us/components/TextType.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: cursorRef,
        className: `text-type__cursor ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`,
        children: cursorCharacter
    }, void 0, false, {
        fileName: "[project]/404 found us/components/TextType.tsx",
        lineNumber: 303,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(TextType, "k/kjnOJHf95wviZL9f1jrutKGec=");
_c = TextType;
const __TURBOPACK__default__export__ = TextType;
var _c;
__turbopack_context__.k.register(_c, "TextType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/Cubes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/404 found us/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Cubes = ({ gridSize = 10, cubeSize, maxAngle = 45, radius = 3, easing = 'power3.out', duration = {
    enter: 0.3,
    leave: 0.6
}, cellGap, borderStyle = '1px solid #fff', faceColor = '#060010', shadow = false, autoAnimate = true, rippleOnClick = true, rippleColor = '#fff', rippleSpeed = 2 })=>{
    _s();
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idleTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const simPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const simTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const simRAFRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colGap = typeof cellGap === 'number' ? `${cellGap}px` : cellGap?.col !== undefined ? `${cellGap.col}px` : '5%';
    const rowGap = typeof cellGap === 'number' ? `${cellGap}px` : cellGap?.row !== undefined ? `${cellGap.row}px` : '5%';
    const enterDur = duration.enter;
    const leaveDur = duration.leave;
    const tiltAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Cubes.useCallback[tiltAt]": (rowCenter, colCenter)=>{
            if (!sceneRef.current) return;
            sceneRef.current.querySelectorAll('.cube').forEach({
                "Cubes.useCallback[tiltAt]": (cube)=>{
                    const r = +cube.dataset.row;
                    const c = +cube.dataset.col;
                    const dist = Math.hypot(r - rowCenter, c - colCenter);
                    if (dist <= radius) {
                        const pct = 1 - dist / radius;
                        const angle = pct * maxAngle;
                        __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cube, {
                            duration: enterDur,
                            ease: easing,
                            overwrite: true,
                            rotateX: -angle,
                            rotateY: angle
                        });
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cube, {
                            duration: leaveDur,
                            ease: 'power3.out',
                            overwrite: true,
                            rotateX: 0,
                            rotateY: 0
                        });
                    }
                }
            }["Cubes.useCallback[tiltAt]"]);
        }
    }["Cubes.useCallback[tiltAt]"], [
        radius,
        maxAngle,
        enterDur,
        leaveDur,
        easing
    ]);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Cubes.useCallback[onPointerMove]": (e)=>{
            userActiveRef.current = true;
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
            const rect = sceneRef.current.getBoundingClientRect();
            const cellW = rect.width / gridSize;
            const cellH = rect.height / gridSize;
            const colCenter = (e.clientX - rect.left) / cellW;
            const rowCenter = (e.clientY - rect.top) / cellH;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame({
                "Cubes.useCallback[onPointerMove]": ()=>tiltAt(rowCenter, colCenter)
            }["Cubes.useCallback[onPointerMove]"]);
            idleTimerRef.current = setTimeout({
                "Cubes.useCallback[onPointerMove]": ()=>{
                    userActiveRef.current = false;
                }
            }["Cubes.useCallback[onPointerMove]"], 3000);
        }
    }["Cubes.useCallback[onPointerMove]"], [
        gridSize,
        tiltAt
    ]);
    const resetAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Cubes.useCallback[resetAll]": ()=>{
            if (!sceneRef.current) return;
            sceneRef.current.querySelectorAll('.cube').forEach({
                "Cubes.useCallback[resetAll]": (cube)=>__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cube, {
                        duration: leaveDur,
                        rotateX: 0,
                        rotateY: 0,
                        ease: 'power3.out'
                    })
            }["Cubes.useCallback[resetAll]"]);
        }
    }["Cubes.useCallback[resetAll]"], [
        leaveDur
    ]);
    const onTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Cubes.useCallback[onTouchMove]": (e)=>{
            e.preventDefault();
            userActiveRef.current = true;
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
            const rect = sceneRef.current.getBoundingClientRect();
            const cellW = rect.width / gridSize;
            const cellH = rect.height / gridSize;
            const touch = e.touches[0];
            const colCenter = (touch.clientX - rect.left) / cellW;
            const rowCenter = (touch.clientY - rect.top) / cellH;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame({
                "Cubes.useCallback[onTouchMove]": ()=>tiltAt(rowCenter, colCenter)
            }["Cubes.useCallback[onTouchMove]"]);
            idleTimerRef.current = setTimeout({
                "Cubes.useCallback[onTouchMove]": ()=>{
                    userActiveRef.current = false;
                }
            }["Cubes.useCallback[onTouchMove]"], 3000);
        }
    }["Cubes.useCallback[onTouchMove]"], [
        gridSize,
        tiltAt
    ]);
    const onTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Cubes.useCallback[onTouchStart]": ()=>{
            userActiveRef.current = true;
        }
    }["Cubes.useCallback[onTouchStart]"], []);
    const onTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Cubes.useCallback[onTouchEnd]": ()=>{
            if (!sceneRef.current) return;
            resetAll();
        }
    }["Cubes.useCallback[onTouchEnd]"], [
        resetAll
    ]);
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Cubes.useCallback[onClick]": (e)=>{
            if (!rippleOnClick || !sceneRef.current) return;
            const rect = sceneRef.current.getBoundingClientRect();
            const cellW = rect.width / gridSize;
            const cellH = rect.height / gridSize;
            const clientX = e.clientX || e.touches && e.touches[0].clientX;
            const clientY = e.clientY || e.touches && e.touches[0].clientY;
            const colHit = Math.floor((clientX - rect.left) / cellW);
            const rowHit = Math.floor((clientY - rect.top) / cellH);
            const baseRingDelay = 0.15;
            const baseAnimDur = 0.3;
            const baseHold = 0.6;
            const spreadDelay = baseRingDelay / rippleSpeed;
            const animDuration = baseAnimDur / rippleSpeed;
            const holdTime = baseHold / rippleSpeed;
            const rings = {};
            sceneRef.current.querySelectorAll('.cube').forEach({
                "Cubes.useCallback[onClick]": (cube)=>{
                    const r = +cube.dataset.row;
                    const c = +cube.dataset.col;
                    const dist = Math.hypot(r - rowHit, c - colHit);
                    const ring = Math.round(dist);
                    if (!rings[ring]) rings[ring] = [];
                    rings[ring].push(cube);
                }
            }["Cubes.useCallback[onClick]"]);
            Object.keys(rings).map(Number).sort({
                "Cubes.useCallback[onClick]": (a, b)=>a - b
            }["Cubes.useCallback[onClick]"]).forEach({
                "Cubes.useCallback[onClick]": (ring)=>{
                    const delay = ring * spreadDelay;
                    const faces = rings[ring].flatMap({
                        "Cubes.useCallback[onClick].faces": (cube)=>Array.from(cube.querySelectorAll('.cube-face'))
                    }["Cubes.useCallback[onClick].faces"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(faces, {
                        backgroundColor: rippleColor,
                        duration: animDuration,
                        delay,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(faces, {
                        backgroundColor: faceColor,
                        duration: animDuration,
                        delay: delay + animDuration + holdTime,
                        ease: 'power3.out'
                    });
                }
            }["Cubes.useCallback[onClick]"]);
        }
    }["Cubes.useCallback[onClick]"], [
        rippleOnClick,
        gridSize,
        faceColor,
        rippleColor,
        rippleSpeed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cubes.useEffect": ()=>{
            if (!autoAnimate || !sceneRef.current) return;
            simPosRef.current = {
                x: Math.random() * gridSize,
                y: Math.random() * gridSize
            };
            simTargetRef.current = {
                x: Math.random() * gridSize,
                y: Math.random() * gridSize
            };
            const speed = 0.02;
            const loop = {
                "Cubes.useEffect.loop": ()=>{
                    if (!userActiveRef.current) {
                        const pos = simPosRef.current;
                        const tgt = simTargetRef.current;
                        pos.x += (tgt.x - pos.x) * speed;
                        pos.y += (tgt.y - pos.y) * speed;
                        tiltAt(pos.y, pos.x);
                        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
                            simTargetRef.current = {
                                x: Math.random() * gridSize,
                                y: Math.random() * gridSize
                            };
                        }
                    }
                    simRAFRef.current = requestAnimationFrame(loop);
                }
            }["Cubes.useEffect.loop"];
            simRAFRef.current = requestAnimationFrame(loop);
            return ({
                "Cubes.useEffect": ()=>{
                    if (simRAFRef.current != null) cancelAnimationFrame(simRAFRef.current);
                }
            })["Cubes.useEffect"];
        }
    }["Cubes.useEffect"], [
        autoAnimate,
        gridSize,
        tiltAt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cubes.useEffect": ()=>{
            const el = sceneRef.current;
            if (!el) return;
            el.addEventListener('pointermove', onPointerMove);
            el.addEventListener('pointerleave', resetAll);
            el.addEventListener('click', onClick);
            el.addEventListener('touchmove', onTouchMove, {
                passive: false
            });
            el.addEventListener('touchstart', onTouchStart, {
                passive: true
            });
            el.addEventListener('touchend', onTouchEnd, {
                passive: true
            });
            return ({
                "Cubes.useEffect": ()=>{
                    el.removeEventListener('pointermove', onPointerMove);
                    el.removeEventListener('pointerleave', resetAll);
                    el.removeEventListener('click', onClick);
                    el.removeEventListener('touchmove', onTouchMove);
                    el.removeEventListener('touchstart', onTouchStart);
                    el.removeEventListener('touchend', onTouchEnd);
                    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
                    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
                }
            })["Cubes.useEffect"];
        }
    }["Cubes.useEffect"], [
        onPointerMove,
        resetAll,
        onClick,
        onTouchMove,
        onTouchStart,
        onTouchEnd
    ]);
    const cells = Array.from({
        length: gridSize
    });
    const sceneStyle = {
        gridTemplateColumns: cubeSize ? `repeat(${gridSize}, ${cubeSize}px)` : `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: cubeSize ? `repeat(${gridSize}, ${cubeSize}px)` : `repeat(${gridSize}, 1fr)`,
        columnGap: colGap,
        rowGap: rowGap,
        perspective: '99999999px',
        gridAutoRows: '1fr'
    };
    const wrapperStyle = {
        '--cube-face-border': borderStyle,
        '--cube-face-bg': faceColor,
        '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
        ...cubeSize ? {
            width: `${gridSize * cubeSize}px`,
            height: `${gridSize * cubeSize}px`
        } : {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        style: wrapperStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: sceneRef,
            className: "grid w-full h-full",
            style: sceneStyle,
            children: cells.map((_, r)=>cells.map((__, c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cube relative w-full h-full aspect-square [transform-style:preserve-3d]",
                        "data-row": r,
                        "data-col": c,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute pointer-events-none -inset-9"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Cubes.tsx",
                                lineNumber: 314,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cube-face absolute inset-0 flex items-center justify-center",
                                style: {
                                    background: 'var(--cube-face-bg)',
                                    border: 'var(--cube-face-border)',
                                    boxShadow: 'var(--cube-face-shadow)',
                                    transform: 'translateY(-50%) rotateX(90deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Cubes.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cube-face absolute inset-0 flex items-center justify-center",
                                style: {
                                    background: 'var(--cube-face-bg)',
                                    border: 'var(--cube-face-border)',
                                    boxShadow: 'var(--cube-face-shadow)',
                                    transform: 'translateY(50%) rotateX(-90deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Cubes.tsx",
                                lineNumber: 325,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cube-face absolute inset-0 flex items-center justify-center",
                                style: {
                                    background: 'var(--cube-face-bg)',
                                    border: 'var(--cube-face-border)',
                                    boxShadow: 'var(--cube-face-shadow)',
                                    transform: 'translateX(-50%) rotateY(-90deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Cubes.tsx",
                                lineNumber: 334,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cube-face absolute inset-0 flex items-center justify-center",
                                style: {
                                    background: 'var(--cube-face-bg)',
                                    border: 'var(--cube-face-border)',
                                    boxShadow: 'var(--cube-face-shadow)',
                                    transform: 'translateX(50%) rotateY(90deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Cubes.tsx",
                                lineNumber: 343,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cube-face absolute inset-0 flex items-center justify-center",
                                style: {
                                    background: 'var(--cube-face-bg)',
                                    border: 'var(--cube-face-border)',
                                    boxShadow: 'var(--cube-face-shadow)',
                                    transform: 'rotateY(-90deg) translateX(50%) rotateY(90deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Cubes.tsx",
                                lineNumber: 352,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cube-face absolute inset-0 flex items-center justify-center",
                                style: {
                                    background: 'var(--cube-face-bg)',
                                    border: 'var(--cube-face-border)',
                                    boxShadow: 'var(--cube-face-shadow)',
                                    transform: 'rotateY(90deg) translateX(-50%) rotateY(-90deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Cubes.tsx",
                                lineNumber: 361,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `${r}-${c}`, true, {
                        fileName: "[project]/404 found us/components/Cubes.tsx",
                        lineNumber: 308,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))))
        }, void 0, false, {
            fileName: "[project]/404 found us/components/Cubes.tsx",
            lineNumber: 305,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/404 found us/components/Cubes.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Cubes, "gJl9JSPxARgvsPe+dp5KwSpSeb4=");
_c = Cubes;
const __TURBOPACK__default__export__ = Cubes;
var _c;
__turbopack_context__.k.register(_c, "Cubes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/404 found us/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$TextType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/TextType.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$Cubes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/Cubes.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full px-8 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-8 md:space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-[1.1] text-balance",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$TextType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: [
                                        "404 FOUND",
                                        "We Design",
                                        "We Build"
                                    ],
                                    typingSpeed: 75,
                                    pauseDuration: 1500,
                                    showCursor: true,
                                    cursorCharacter: "|",
                                    as: "span",
                                    textClassNames: [
                                        "font-bold uppercase",
                                        "",
                                        ""
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/404 found us/components/HeroSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/HeroSection.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed",
                                children: "We partner with ambitious brands to design and build websites that don't just look beautiful — they drive results."
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/HeroSection.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "text-base px-8 py-6 rounded-sm hover:opacity-90 transition-opacity",
                                    children: [
                                        "Start a conversation",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2 h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/HeroSection.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/404 found us/components/HeroSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/HeroSection.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/404 found us/components/HeroSection.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-auto md:flex-shrink-0 flex items-center justify-center md:justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$Cubes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                gridSize: 10,
                                faceColor: "#1a0b2e",
                                borderStyle: "1px solid rgba(0, 255, 255, 0.6)",
                                shadow: false,
                                autoAnimate: true,
                                rippleOnClick: true,
                                rippleColor: "#00ffff"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/HeroSection.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/404 found us/components/HeroSection.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/HeroSection.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/404 found us/components/HeroSection.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/404 found us/components/HeroSection.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/404 found us/components/HeroSection.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/404 found us/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/404 found us/components/ui/dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/ui/dialog.tsx",
                                lineNumber: 46,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/ui/dialog.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/404 found us/components/ui/dialog.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/404 found us/components/ui/dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/404 found us/components/ui/dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ui/dialog.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ui/dialog.tsx",
        lineNumber: 86,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ui/dialog.tsx",
        lineNumber: 101,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/DesignPreviewModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignPreviewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/404 found us/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/404 found us/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/404 found us/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DesignPreviewModal({ isOpen, onClose, title, images, websiteUrl }) {
    _s();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(websiteUrl ? "live" : "images");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-6xl max-h-[90vh] overflow-hidden p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "px-6 pt-6 pb-4 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-2xl font-serif",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        websiteUrl && images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewMode("live"),
                                    className: `flex items-center gap-2 px-4 py-2 rounded-sm text-sm transition-colors ${viewMode === "live" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        "Live Preview"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewMode("images"),
                                    className: `flex items-center gap-2 px-4 py-2 rounded-sm text-sm transition-colors ${viewMode === "images" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        "Screenshots"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        websiteUrl && images.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-2 px-4 py-2 rounded-sm text-sm bg-primary text-primary-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    "Live Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto",
                    style: {
                        height: 'calc(90vh - 140px)'
                    },
                    children: viewMode === "live" && websiteUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex flex-col items-center justify-center p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "h-16 w-16 text-muted-foreground mb-4"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-serif mb-2",
                                children: "Live Preview Unavailable"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-6 max-w-md",
                                children: "This website doesn't allow embedding. Click the button below to view it in a new tab."
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>window.open(websiteUrl, '_blank', 'noopener,noreferrer'),
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    "Open Website"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 p-6",
                        children: images.length > 0 ? images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full aspect-video bg-muted rounded-sm overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: image,
                                    alt: `${title} preview ${index + 1}`,
                                    fill: true,
                                    className: "object-cover",
                                    sizes: "(max-width: 1024px) 100vw, 1024px"
                                }, void 0, false, {
                                    fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 21
                                }, this)
                            }, index, false, {
                                fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                lineNumber: 93,
                                columnNumber: 19
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: "No preview images available yet."
                                }, void 0, false, {
                                    fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mt-2",
                                    children: "Add images to the images array for this project."
                                }, void 0, false, {
                                    fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                            lineNumber: 104,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/404 found us/components/DesignPreviewModal.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(DesignPreviewModal, "S8CEbA+92Y4nbtiTpVpML/JOJtI=");
_c = DesignPreviewModal;
var _c;
__turbopack_context__.k.register(_c, "DesignPreviewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/TrueFocus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TrueFocus = ({ sentence = 'True Focus', separator = ' ', manualMode = false, blurAmount = 5, borderColor = 'green', glowColor = 'rgba(0, 255, 0, 0.6)', animationDuration = 0.5, pauseBetweenAnimations = 1, className = '' })=>{
    _s();
    const words = sentence.split(separator);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastActiveIndex, setLastActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [focusRect, setFocusRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrueFocus.useEffect": ()=>{
            if (!manualMode) {
                const interval = setInterval({
                    "TrueFocus.useEffect.interval": ()=>{
                        setCurrentIndex({
                            "TrueFocus.useEffect.interval": (prev)=>(prev + 1) % words.length
                        }["TrueFocus.useEffect.interval"]);
                    }
                }["TrueFocus.useEffect.interval"], (animationDuration + pauseBetweenAnimations) * 1000);
                return ({
                    "TrueFocus.useEffect": ()=>clearInterval(interval)
                })["TrueFocus.useEffect"];
            }
        }
    }["TrueFocus.useEffect"], [
        manualMode,
        animationDuration,
        pauseBetweenAnimations,
        words.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrueFocus.useEffect": ()=>{
            if (currentIndex === null || currentIndex === -1) return;
            if (!wordRefs.current[currentIndex] || !containerRef.current) return;
            const parentRect = containerRef.current.getBoundingClientRect();
            const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();
            setFocusRect({
                x: activeRect.left - parentRect.left,
                y: activeRect.top - parentRect.top,
                width: activeRect.width,
                height: activeRect.height
            });
        }
    }["TrueFocus.useEffect"], [
        currentIndex,
        words.length
    ]);
    const handleMouseEnter = (index)=>{
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };
    const handleMouseLeave = ()=>{
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-flex gap-4 items-center flex-wrap ${className}`,
        ref: containerRef,
        style: {
            outline: 'none',
            userSelect: 'none'
        },
        children: [
            words.map((word, index)=>{
                const isActive = index === currentIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    ref: (el)=>{
                        wordRefs.current[index] = el;
                    },
                    className: "relative cursor-pointer inline-block",
                    style: {
                        filter: manualMode ? isActive ? `blur(0px)` : `blur(${blurAmount}px)` : isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
                        transition: `filter ${animationDuration}s ease`,
                        outline: 'none',
                        userSelect: 'none'
                    },
                    onMouseEnter: ()=>handleMouseEnter(index),
                    onMouseLeave: handleMouseLeave,
                    children: word
                }, index, false, {
                    fileName: "[project]/404 found us/components/TrueFocus.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 pointer-events-none box-border border-0",
                animate: {
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex >= 0 ? 1 : 0
                },
                transition: {
                    duration: animationDuration
                },
                style: {
                    '--border-color': borderColor,
                    '--glow-color': glowColor
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0",
                        style: {
                            borderColor: 'var(--border-color)',
                            filter: 'drop-shadow(0 0 4px var(--border-color))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/TrueFocus.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0",
                        style: {
                            borderColor: 'var(--border-color)',
                            filter: 'drop-shadow(0 0 4px var(--border-color))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/TrueFocus.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0",
                        style: {
                            borderColor: 'var(--border-color)',
                            filter: 'drop-shadow(0 0 4px var(--border-color))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/TrueFocus.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0",
                        style: {
                            borderColor: 'var(--border-color)',
                            filter: 'drop-shadow(0 0 4px var(--border-color))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/TrueFocus.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/404 found us/components/TrueFocus.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/404 found us/components/TrueFocus.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TrueFocus, "pBTTAUAXuvS9jVYuokE75NhEZgk=");
_c = TrueFocus;
const __TURBOPACK__default__export__ = TrueFocus;
var _c;
__turbopack_context__.k.register(_c, "TrueFocus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/PortfolioSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$DesignPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/DesignPreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$TrueFocus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/TrueFocus.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const projects = [
    {
        title: "Automated Booking Agency",
        category: "AI Automation",
        description: "AI-powered automation platform featuring WhatsApp bots, booking systems, and CRM flows that streamline business operations.",
        year: "2024",
        websiteUrl: "https://www.zimsaas.io",
        image: "/portfolio/zimsaas-preview.png",
        images: []
    },
    {
        title: "Loft Golf Studio",
        category: "Premium Experience",
        description: "Elegant landing page for a mobile golf simulation studio, emphasizing luxury and accessibility.",
        year: "2024",
        websiteUrl: "https://augustacountryclub.co/",
        image: "/portfolio/loft-golf.svg",
        images: []
    },
    {
        title: "Urban Collective",
        category: "Architecture Firm",
        description: "Portfolio website showcasing innovative architectural projects with a focus on visual storytelling.",
        year: "2023",
        websiteUrl: "https://www.zara.com/",
        image: "/portfolio/urban-collective.svg",
        images: []
    }
];
function PortfolioSection() {
    _s();
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: targetRef,
        offset: [
            "start start",
            "end end"
        ],
        layoutEffect: false
    });
    // Calculate transform based on number of items
    // Each item is ~600px + 48px gap, we want to scroll through all items
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "1%",
        "-66%"
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: targetRef,
                id: "work",
                className: "relative w-full h-[400vh]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 h-screen flex flex-col justify-center overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-8 md:px-12 lg:px-16 mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-serif font-bold uppercase leading-tight",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$TrueFocus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sentence: "SELECTED WORK.",
                                        separator: " ",
                                        blurAmount: 3,
                                        borderColor: "black",
                                        glowColor: "rgba(0, 0, 0, 0.3)",
                                        animationDuration: 0.6,
                                        pauseBetweenAnimations: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                x
                            },
                            className: "flex gap-8 md:gap-12 px-8 md:px-12 lg:px-16",
                            children: [
                                projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: index * 0.1,
                                            duration: 0.5
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "flex-shrink-0 w-[400px] md:w-[500px] lg:w-[600px] group cursor-pointer",
                                        onClick: ()=>setSelectedProject(index),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full aspect-[4/3] bg-white border border-border rounded-sm overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: project.image,
                                                            alt: project.title,
                                                            fill: true,
                                                            className: "object-contain p-8 transition-transform duration-500 group-hover:scale-105",
                                                            sizes: "(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white text-lg font-medium bg-black/50 px-6 py-3 rounded-sm",
                                                                    children: "View project"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-2xl md:text-3xl font-serif",
                                                                    children: project.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: project.year
                                                                }, void 0, false, {
                                                                    fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base text-muted-foreground leading-relaxed",
                                                            children: project.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs uppercase tracking-wider text-muted-foreground",
                                                                children: project.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 w-8 md:w-12 lg:w-16"
                                }, void 0, false, {
                                    fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            selectedProject !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$DesignPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: selectedProject !== null,
                onClose: ()=>setSelectedProject(null),
                title: projects[selectedProject].title,
                images: projects[selectedProject].images,
                websiteUrl: projects[selectedProject].websiteUrl
            }, void 0, false, {
                fileName: "[project]/404 found us/components/PortfolioSection.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(PortfolioSection, "/KLCCevA7WZdDO07SfPoucbrTHA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = PortfolioSection;
var _c;
__turbopack_context__.k.register(_c, "PortfolioSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ui/label.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/ui/label.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ContactSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "w-full px-8 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-12 md:space-y-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight text-balance",
                                children: [
                                    "Let's create something",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/404 found us/components/ContactSection.tsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "italic",
                                        children: "extraordinary"
                                    }, void 0, false, {
                                        fileName: "[project]/404 found us/components/ContactSection.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/404 found us/components/ContactSection.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto",
                                children: "Ready to transform your digital presence? Get in touch and let's start the conversation."
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/ContactSection.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/404 found us/components/ContactSection.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "name",
                                            className: "text-sm",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/ContactSection.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "name",
                                            type: "text",
                                            placeholder: "Your name",
                                            className: "h-12 rounded-sm border-border focus:ring-1 focus:ring-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/ContactSection.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/404 found us/components/ContactSection.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "email",
                                            className: "text-sm",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/ContactSection.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "email",
                                            type: "email",
                                            placeholder: "your@email.com",
                                            className: "h-12 rounded-sm border-border focus:ring-1 focus:ring-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/ContactSection.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/404 found us/components/ContactSection.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "message",
                                            className: "text-sm",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/ContactSection.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "message",
                                            rows: 5,
                                            placeholder: "Tell us about your project...",
                                            className: "w-full px-3 py-2 rounded-sm border border-border focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/404 found us/components/ContactSection.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/404 found us/components/ContactSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        size: "lg",
                                        className: "w-full text-base px-8 py-6 rounded-sm hover:opacity-90 transition-opacity",
                                        children: "Send message"
                                    }, void 0, false, {
                                        fileName: "[project]/404 found us/components/ContactSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/404 found us/components/ContactSection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/404 found us/components/ContactSection.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/ContactSection.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/404 found us/components/ContactSection.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/404 found us/components/ContactSection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/404 found us/components/ContactSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full px-8 md:px-12 lg:px-16 py-12 border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-muted-foreground",
                        children: "© 2025 404 Found. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/404 found us/components/Footer.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Footer.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                children: "Twitter"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Footer.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                children: "Instagram"
                            }, void 0, false, {
                                fileName: "[project]/404 found us/components/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/404 found us/components/Footer.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/404 found us/components/Footer.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/404 found us/components/Footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/404 found us/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/404 found us/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$PillNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/PillNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$PortfolioSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/PortfolioSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/ContactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/404 found us/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const [activeHash, setActiveHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleHashChange = {
                "Home.useEffect.handleHashChange": ()=>{
                    setActiveHash(window.location.hash || "#work");
                }
            }["Home.useEffect.handleHashChange"];
            handleHashChange();
            window.addEventListener("hashchange", handleHashChange);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("hashchange", handleHashChange)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const navItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Work',
            href: '#work'
        },
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Contact',
            href: '#contact'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$PillNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                logo: "/logo.svg",
                logoAlt: "404 Found",
                items: navItems,
                activeHref: activeHash,
                baseColor: "#fff",
                pillColor: "#060010",
                hoveredPillTextColor: "#fff",
                pillTextColor: "#060010"
            }, void 0, false, {
                fileName: "[project]/404 found us/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/404 found us/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-32 md:h-40 lg:h-48"
                    }, void 0, false, {
                        fileName: "[project]/404 found us/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$PortfolioSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/404 found us/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/404 found us/app/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/404 found us/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$404__found__us$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/404 found us/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/404 found us/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Home, "DZFuN7ot209At71W6Y1/W/gemMU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=404%20found%20us_0ef28699._.js.map