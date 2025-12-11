"use client";

export default function ContactSection() {
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

          <div className="space-y-8 text-left text-2xl md:text-3xl lg:text-4xl leading-snug font-serif">
            <p className="flex flex-wrap items-baseline gap-2">
              <span>Hello, I am</span>
              <input
                aria-label="Your name"
                type="text"
                placeholder="your name"
                className="shake-hint min-w-[140px] border-b border-muted bg-transparent px-2 py-1 text-[#0077B6] caret-[#0077B6] placeholder:text-muted-foreground/80 focus:border-[#0077B6] focus:outline-none"
              />
              <span>, representing</span>
              <input
                aria-label="Your company"
                type="text"
                placeholder="your company"
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
                className="shake-hint min-w-[180px] border-b border-muted bg-transparent px-2 py-1 text-[#0077B6] caret-[#0077B6] placeholder:text-muted-foreground/80 focus:border-[#0077B6] focus:outline-none"
              />
            </p>

            <p className="flex flex-wrap items-baseline gap-2">
              <span>Here is my phone number so you can contact me:</span>
              <input
                aria-label="Phone number"
                type="tel"
                placeholder="phone number"
                className="shake-hint min-w-[160px] border-b border-muted bg-transparent px-2 py-1 text-[#0077B6] caret-[#0077B6] placeholder:text-muted-foreground/80 focus:border-[#0077B6] focus:outline-none"
              />
            </p>
          </div>

          <div className="pt-10 flex justify-center">
            <button
              type="button"
              className="rounded-full bg-black px-8 py-4 text-base font-medium text-white shadow-lg transition hover:opacity-90"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

