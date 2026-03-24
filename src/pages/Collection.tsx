import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const Collection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Banner */}
        <div className="bg-card border-b border-border py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase opacity-0 animate-fade-up">Our Collection</p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-3 leading-[1.1] opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms", textWrap: "balance" }}
            >
              Each piece tells its own story
            </h1>
            <p
              className="mt-5 text-muted-foreground text-lg max-w-lg leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              From sculpted armchairs to flowing bookshelves, every item is molded with precision and care.
            </p>
          </div>
        </div>

        {/* Filter & Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filtered.map((product) => (
              <Link key={product.slug} to={`/product/${product.slug}`} className="group">
                <div className="aspect-square overflow-hidden rounded-lg bg-card shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{product.category}</p>
                  </div>
                  <span className="text-xs font-medium text-primary border border-primary/30 px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap">
                    Inquire
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collection;
