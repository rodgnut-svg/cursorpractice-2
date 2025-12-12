"use client";

import { useState, FormEvent } from "react";
import CountrySelector from "./CountrySelector";
import { type CountryCode, defaultCountryCode } from "@/lib/countryCodes";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    project: "",
    whatsapp: "",
    email: "",
  });
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(defaultCountryCode);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.company.trim() || !formData.project.trim() || !formData.whatsapp.trim() || !formData.email.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Combine country code with WhatsApp number
      const whatsappWithCountryCode = `${selectedCountry.dialCode}${formData.whatsapp.replace(/\D/g, "")}`;
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          whatsapp: whatsappWithCountryCode,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          company: "",
          project: "",
          whatsapp: "",
          email: "",
        });
        setSelectedCountry(defaultCountryCode);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full px-8 md:px-12 lg:px-16 pt-16 md:pt-24 pb-24 md:pb-32 lg:pb-40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-4 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Let's create
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight">
              A fast way to start the conversation.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-8 text-left text-2xl md:text-3xl lg:text-4xl leading-snug font-serif">
              <p className="flex flex-wrap items-baseline gap-2">
                <span>Hello, I am</span>
                <input
                  aria-label="Your name"
                  type="text"
                  placeholder="your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="shake-hint min-w-[140px] border-b border-muted bg-transparent px-2 py-1 text-[#0077B6] caret-[#0077B6] placeholder:text-muted-foreground/80 focus:border-[#0077B6] focus:outline-none"
                />
                <span>, representing</span>
                <input
                  aria-label="Your company"
                  type="text"
                  placeholder="your company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required
                  className="shake-hint min-w-[140px] border-b border-muted bg-transparent px-2 py-1 text-[#0077B6] caret-[#0077B6] placeholder:text-muted-foreground/80 focus:border-[#0077B6] focus:outline-none"
                />
                <span>.</span>
              </p>

              <p className="flex flex-wrap items-baseline gap-2">
                <span>We would like to discuss a project —</span>
                <input
                  aria-label="Describe your project"
                  type="text"
                  placeholder="describe your project…"
                  value={formData.project}
                  onChange={(e) => handleInputChange("project", e.target.value)}
                  required
                  className="shake-hint min-w-[180px] border-b border-muted bg-transparent px-2 py-1 text-[#0077B6] caret-[#0077B6] placeholder:text-muted-foreground/80 focus:border-[#0077B6] focus:outline-none"
                />
              </p>

              <div className="flex flex-wrap items-baseline gap-2">
                <span>Here is my whatsapp number:</span>
                <div className="flex items-baseline gap-2">
                  <CountrySelector
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                  />
                  <input
                    aria-label="WhatsApp number"
                    type="tel"
                    placeholder="whatsapp number"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    required
                    className="shake-hint min-w-[160px] border-b border-muted bg-transparent px-2 py-1 text-[#0077B6] caret-[#0077B6] placeholder:text-muted-foreground/80 focus:border-[#0077B6] focus:outline-none"
                  />
                </div>
              </div>

              <p className="flex flex-wrap items-baseline gap-2">
                <span>and your email</span>
                <input
                  aria-label="Your email"
                  type="email"
                  placeholder="your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="shake-hint min-w-[180px] border-b border-muted bg-transparent px-2 py-1 text-[#0077B6] caret-[#0077B6] placeholder:text-muted-foreground/80 focus:border-[#0077B6] focus:outline-none"
                />
              </p>
            </div>

            {submitStatus.type && (
              <div
                className={`text-center text-sm md:text-base ${
                  submitStatus.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="pt-10 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-black px-8 py-4 text-base font-medium text-white shadow-lg transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

