import { useState } from "react";
import { Send, MapPin, Mail, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-card border-b border-border py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase opacity-0 animate-fade-up">Get in Touch</p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-3 leading-[1.1] opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms", textWrap: "balance" }}
            >
              Ready to find your perfect piece?
            </h1>
            <p
              className="mt-5 text-muted-foreground text-lg max-w-lg leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Tell us what you're looking for and we'll respond with pricing and availability within 24 hours.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Visit Our Showroom</p>
                      <p className="text-sm text-muted-foreground mt-0.5">123 Design District, Suite 400<br />New York, NY 10013</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email Us</p>
                      <p className="text-sm text-muted-foreground mt-0.5">hello@homemolded.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Call Us</p>
                      <p className="text-sm text-muted-foreground mt-0.5">+1 (212) 555-0194</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Showroom Hours</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Mon – Fri: 10am – 6pm<br />Sat: 11am – 4pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-lg p-8 sm:p-10">
                <h2 className="font-display text-2xl text-foreground mb-6">Send an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full bg-background border border-border px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-background border border-border px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Product of Interest</label>
                    <input
                      type="text"
                      placeholder="e.g., Onda Armchair, Arc Sofa"
                      className="w-full bg-background border border-border px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      placeholder="Tell us about your project, space, or any custom requirements..."
                      rows={5}
                      className="w-full bg-background border border-border px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98] duration-150 flex items-center justify-center gap-2 shadow-sm shadow-primary/20"
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
