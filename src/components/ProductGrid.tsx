import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
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
    <div
      ref={ref}
      className={`group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 80}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="aspect-square overflow-hidden rounded-sm bg-card">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="mt-4 flex items-start justify-between">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-lg text-foreground hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{product.category}</p>
        </Link>
        <a
          href="/#contact"
          className="text-xs font-medium text-primary border border-primary/30 px-3 py-1.5 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors active:scale-[0.97] duration-150 whitespace-nowrap"
        >
          Inquire
        </a>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section id="collection" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">Our Collection</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-3 leading-tight" style={{ textWrap: "balance" }}>
            Each piece tells its own story
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            From sculpted armchairs to flowing bookshelves, every item is molded with precision and care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
