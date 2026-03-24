import heroImage from "@/assets/hero-living-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious molded furniture in a sunlit living room"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-background leading-[1.1] opacity-0 animate-fade-up"
            style={{ textWrap: "balance" }}
          >
            Furniture shaped around the way you live
          </h1>
          <p
            className="mt-6 text-background/85 text-lg sm:text-xl max-w-lg leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Handcrafted molded pieces designed for comfort, built to last a lifetime.
          </p>
          <div className="mt-8 flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a
              href="#collection"
              className="bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-lg hover:opacity-90 transition-all active:scale-[0.97] duration-150 shadow-lg shadow-primary/30"
            >
              View Collection
            </a>
            <a
              href="#contact"
              className="border border-background/40 text-background px-7 py-3.5 text-sm font-medium rounded-lg hover:bg-background/10 transition-colors active:scale-[0.97] duration-150"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
