"use client";

import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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

  return (
    <nav className="w-full py-8 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif font-medium">
          404 Found
        </div>
        
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

