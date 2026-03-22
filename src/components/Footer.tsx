const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg text-foreground">Home Molded Furniture</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Home Molded Furniture. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
