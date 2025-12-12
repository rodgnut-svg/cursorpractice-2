"use client";

import { useState, useRef, useEffect } from "react";
import { countryCodes, type CountryCode, defaultCountryCode } from "@/lib/countryCodes";

interface CountrySelectorProps {
  value: CountryCode;
  onChange: (country: CountryCode) => void;
}

export default function CountrySelector({ value, onChange }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when dropdown is open
      document.body.style.overflow = "hidden";
      
      // Scroll selected item into view
      if (listRef.current) {
        const selectedButton = listRef.current.querySelector(`[data-country-code="${value.code}"]`) as HTMLElement;
        if (selectedButton) {
          setTimeout(() => {
            selectedButton.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }, 0);
        }
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, value.code]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country: CountryCode) => {
    onChange(country);
    setIsOpen(false);
    // Return focus to button after selection
    setTimeout(() => {
      buttonRef.current?.focus();
    }, 0);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
        className={`shake-hint min-w-[80px] border-b bg-transparent px-1.5 py-0.5 focus:outline-none flex items-center gap-1 text-lg md:text-xl lg:text-xl font-serif transition-colors ${
          isOpen
            ? "border-[#0077B6] text-[#0077B6]"
            : "border-muted text-black hover:border-black"
        }`}
        aria-label="Select country code"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base">{value.flag}</span>
        <span>{value.dialCode}</span>
        <span className="text-muted-foreground text-xs ml-0.5">▼</span>
      </button>

      {isOpen && (
        <div
          ref={listRef}
          className="absolute top-full left-0 mt-1 bg-white border border-black shadow-lg z-[9999] max-h-[250px] overflow-y-auto min-w-[240px] overscroll-contain"
          role="listbox"
          onWheel={(e) => {
            // Prevent scrolling from closing the dropdown
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            // Prevent touch scrolling from closing the dropdown
            e.stopPropagation();
          }}
        >
          {countryCodes.map((country) => (
            <button
              key={country.code}
              data-country-code={country.code}
              type="button"
              onClick={() => handleSelect(country)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(country);
                }
              }}
              className={`w-full text-left px-3 py-1.5 flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0077B6] text-sm ${
                value.code === country.code
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-50"
              }`}
              role="option"
              aria-selected={value.code === country.code}
            >
              <span className="text-base">{country.flag}</span>
              <span className="flex-1">{country.name}</span>
              <span className={value.code === country.code ? "text-white" : "text-muted-foreground"}>
                {country.dialCode}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

