import productArmchair from "@/assets/product-armchair.jpg";
import productDiningChair from "@/assets/product-dining-chair.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productCoffeeTable from "@/assets/product-coffee-table.jpg";
import productBookshelf from "@/assets/product-bookshelf.jpg";
import productSideTable from "@/assets/product-side-table.jpg";

export interface Product {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  dimensions: string;
  materials: string;
  leadTime: string;
}

export const products: Product[] = [
  {
    slug: "onda-armchair",
    name: "Onda Armchair",
    category: "Seating",
    image: productArmchair,
    description:
      "The Onda Armchair wraps around you like a wave frozen mid-curl. Its continuous molded shell eliminates hard edges, distributing weight evenly for hours of effortless comfort. The sculptural silhouette adds presence to any living space without overwhelming it.",
    dimensions: "W 88 × D 82 × H 76 cm",
    materials: "Molded high-density foam, steel subframe, premium upholstery",
    leadTime: "6–8 weeks",
  },
  {
    slug: "elm-dining-chair",
    name: "Elm Dining Chair",
    category: "Dining",
    image: productDiningChair,
    description:
      "Clean lines meet organic warmth in the Elm Dining Chair. A gently curved seat shell rests on turned solid wood legs, creating a visual lightness that belies its sturdy construction. Equally at home around a farmhouse table or a modern dining set.",
    dimensions: "W 48 × D 54 × H 82 cm",
    materials: "Molded polypropylene shell, solid beech legs, fabric seat pad",
    leadTime: "4–6 weeks",
  },
  {
    slug: "arc-sofa",
    name: "Arc Sofa",
    category: "Seating",
    image: productSofa,
    description:
      "The Arc Sofa is a gentle crescent that invites conversation. Its sweeping curve creates an intimate seating arrangement, while the deep cushions and low profile encourage lingering. A statement piece that anchors the room with quiet confidence.",
    dimensions: "W 240 × D 100 × H 72 cm",
    materials: "Kiln-dried hardwood frame, pocket-spring suspension, down-blend cushions",
    leadTime: "8–10 weeks",
  },
  {
    slug: "pebble-coffee-table",
    name: "Pebble Coffee Table",
    category: "Tables",
    image: productCoffeeTable,
    description:
      "Inspired by river-smoothed stones, the Pebble Coffee Table features an organic kidney-shaped top carved from a single walnut slab. Tapered legs lift the surface just enough to maintain visual airiness while staying functional for everyday use.",
    dimensions: "W 110 × D 65 × H 38 cm",
    materials: "Solid American walnut, hand-oiled finish",
    leadTime: "6–8 weeks",
  },
  {
    slug: "wave-bookshelf",
    name: "Wave Bookshelf",
    category: "Storage",
    image: productBookshelf,
    description:
      "The Wave Bookshelf transforms storage into sculpture. Sinuous dividers flow between shelves, creating asymmetric compartments that turn everyday objects into a curated display. Wall-mounted or freestanding, it brings movement to any wall.",
    dimensions: "W 120 × D 35 × H 180 cm",
    materials: "Bent laminate beech, natural lacquer finish",
    leadTime: "8–10 weeks",
  },
  {
    slug: "loop-side-table",
    name: "Loop Side Table",
    category: "Tables",
    image: productSideTable,
    description:
      "A single continuous form that loops from base to tabletop, the Loop Side Table is as much art object as functional surface. Cast in a single pour, the matte black finish absorbs light beautifully, creating a striking silhouette beside any sofa or bed.",
    dimensions: "W 42 × D 42 × H 50 cm",
    materials: "Cast mineral composite, matte lacquer finish",
    leadTime: "4–6 weeks",
  },
];
