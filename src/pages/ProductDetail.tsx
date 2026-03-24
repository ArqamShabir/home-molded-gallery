import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Ruler, Layers, Clock, ChevronRight, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground">Product not found</h1>
          <Link to="/collection" className="mt-4 inline-block text-sm text-primary hover:underline">
            ← Back to collection
          </Link>
        </div>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/collection" className="hover:text-primary transition-colors">Collection</Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Hero */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="opacity-0 animate-fade-in">
              <div className="aspect-square overflow-hidden rounded-lg bg-card shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Details */}
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full tracking-wide uppercase">
                {product.category}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 leading-[1.1]">
                {product.name}
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed text-base lg:text-lg">
                {product.description}
              </p>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck size={16} className="text-primary" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck size={16} className="text-primary" />
                  <span>5-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <RotateCcw size={16} className="text-primary" />
                  <span>30-Day Returns</span>
                </div>
              </div>

              {/* Specs */}
              <div className="mt-10 space-y-0 border border-border rounded-lg overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 bg-card">
                  <Ruler size={18} className="text-primary shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Dimensions</p>
                    <p className="text-sm text-muted-foreground">{product.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-5 py-4 border-t border-border">
                  <Layers size={18} className="text-primary shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Materials</p>
                    <p className="text-sm text-muted-foreground">{product.materials}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-5 py-4 bg-card border-t border-border">
                  <Clock size={18} className="text-primary shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Lead Time</p>
                    <p className="text-sm text-muted-foreground">{product.leadTime}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-all active:scale-[0.97] duration-150 shadow-md shadow-primary/20"
              >
                Contact for Pricing
              </Link>
              <p className="mt-3 text-xs text-muted-foreground">
                Custom sizing & finishes available on request
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="bg-card/50 border-t border-border py-20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">More to explore</p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mt-2 mb-12">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {otherProducts.map((p) => (
                <Link key={p.slug} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-square overflow-hidden rounded-lg bg-background shadow-sm">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg text-foreground mt-4 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
