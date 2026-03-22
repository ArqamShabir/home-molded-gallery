import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Ruler, Layers, Clock } from "lucide-react";
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
          <Link to="/" className="mt-4 inline-block text-sm text-primary hover:underline">
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
          <Link
            to="/#collection"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Collection
          </Link>
        </div>

        {/* Product Hero */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="aspect-square overflow-hidden rounded-sm bg-card opacity-0 animate-fade-in">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                {product.category}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2 leading-[1.1]">
                {product.name}
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed text-base">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mt-10 space-y-5 border-t border-border pt-8">
                <div className="flex items-start gap-3">
                  <Ruler size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Dimensions</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{product.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Materials</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{product.materials}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Lead Time</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{product.leadTime}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/#contact"
                className="mt-10 inline-flex items-center justify-center w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-sm text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.97] duration-150"
              >
                Contact for Pricing
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="bg-card py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl text-foreground mb-10">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {otherProducts.map((p) => (
                <Link key={p.slug} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-square overflow-hidden rounded-sm bg-background">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
