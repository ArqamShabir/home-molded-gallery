import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">Get in Touch</p>
          <h2
            className="font-display text-3xl sm:text-4xl text-foreground mt-3 leading-tight"
            style={{ textWrap: "balance" }}
          >
            Ready to find your perfect piece?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us what you're looking for and we'll respond with pricing and availability within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full bg-card border border-border px-4 py-3 rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full bg-card border border-border px-4 py-3 rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow"
            />
          </div>
          <input
            type="text"
            placeholder="Which product are you interested in?"
            className="w-full bg-card border border-border px-4 py-3 rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full bg-card border border-border px-4 py-3 rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98] duration-150 flex items-center justify-center gap-2"
          >
            {submitted ? (
              "Thank you! We'll be in touch soon."
            ) : (
              <>
                Send Inquiry <Send size={15} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
