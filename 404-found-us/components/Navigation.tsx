"use client";

import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Portfolio', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const index = navItems.findIndex(item => item.href === hash);
      if (index !== -1) {
        setActiveIndex(index);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <nav className="w-full py-8 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif font-medium">
          404 Found
        </div>
        
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 -m-2 text-neutral-900 transition active:scale-95"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

          <div className="hidden md:flex items-center gap-2 p-1 bg-neutral-100 rounded-full">
            {navItems.map((item, index) => (
              <PillNavItem 
                key={index} 
                item={item} 
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-50 text-neutral-900">
          <div className="flex items-center justify-between px-8 py-8">
            <div className="text-2xl font-serif font-medium">
              404 Found
            </div>
            <button
              type="button"
              aria-label="Close menu"
              className="h-12 w-12 grid place-items-center text-neutral-900 transition active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] gap-10 px-8 text-center">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveIndex(index);
                  setIsMenuOpen(false);
                }}
                className="text-3xl sm:text-4xl font-semibold tracking-tight hover:text-neutral-500 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-base font-medium text-white shadow-sm transition hover:bg-neutral-800 active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

interface PillNavItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

const PillNavItem: React.FC<PillNavItemProps> = ({ item, isActive, onClick }) => {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ease-in-out ${
        isActive
          ? 'text-white bg-neutral-900 shadow-md'
          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
      }`}
    >
      <span className="relative z-10">{item.label}</span>
    </a>
  );
};

