import { Award, Users, Leaf, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { label: "Years of Craft", value: "12", icon: Award },
  { label: "Unique Designs", value: "86", icon: Heart },
  { label: "Happy Homes", value: "2,400+", icon: Users },
  { label: "Locally Sourced", value: "73%", icon: Leaf },
];

const values = [
  {
    title: "Handcrafted with Purpose",
    description:
      "Each piece begins as a hand-sculpted form — refined through dozens of iterations until the shape feels right in a room and right in your body.",
  },
  {
    title: "Sustainable Materials",
    description:
      "We work with sustainably sourced hardwoods, responsibly produced foams, and fabrics chosen for both beauty and durability. No shortcuts, no compromises.",
  },
  {
    title: "Built to Last",
    description:
      "Our furniture is engineered to withstand generations of daily use. We use time-tested joinery techniques combined with modern materials science.",
  },
  {
    title: "Designed for Living",
    description:
      "We believe great design should feel inevitable — furniture that adapts to your life, not the other way around. Every curve has a reason.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-card border-b border-border py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase opacity-0 animate-fade-up">About Us</p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-3 leading-[1.1] opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms", textWrap: "balance" }}
            >
              Where form meets function
            </h1>
            <p
              className="mt-5 text-muted-foreground text-lg max-w-lg leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              At Home Molded Furniture, we believe great design should feel inevitable.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <stat.icon className="mx-auto text-primary mb-3" size={24} />
                <p className="font-display text-3xl text-foreground tabular-nums">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-card/50 border-y border-border py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl text-foreground">Our Story</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Founded in 2013, Home Molded Furniture started in a small workshop with a simple idea:
                furniture should be as beautiful to touch as it is to look at. What began as experiments
                with molded plywood and organic shapes has grown into a full collection of handcrafted pieces
                that grace homes across the country.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                Today, our team of skilled artisans continues to push the boundaries of what molded furniture
                can be — creating pieces that are sculptural yet comfortable, bold yet timeless.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground text-center mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-border rounded-lg p-8 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <h3 className="font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-primary-foreground">
              Ready to find your perfect piece?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-md mx-auto">
              Get in touch with us and let's create something beautiful together.
            </p>
            <a
              href="/contact"
              className="inline-block mt-8 bg-background text-foreground px-8 py-3.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all active:scale-[0.97]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
