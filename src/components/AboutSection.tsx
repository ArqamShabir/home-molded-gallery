import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div>
          <p className="text-sm font-medium text-primary tracking-wide uppercase">Our Craft</p>
          <h2
            className="font-display text-3xl sm:text-4xl text-foreground mt-3 leading-tight"
            style={{ textWrap: "balance" }}
          >
            Where form meets function
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Home Molded Furniture, we believe great design should feel inevitable. Each piece begins as a
            hand-sculpted form — refined through dozens of iterations until the shape feels right in a room
            and right in your body.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We work with sustainably sourced hardwoods, responsibly produced foams, and fabrics chosen for
            both beauty and durability. No shortcuts, no compromises.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Years of Craft", value: "12" },
            { label: "Unique Designs", value: "86" },
            { label: "Happy Homes", value: "2,400+" },
            { label: "Materials Sourced Locally", value: "73%" },
          ].map((stat) => (
            <div key={stat.label} className="bg-background p-6 rounded-sm">
              <p className="font-display text-2xl text-foreground tabular-nums">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
