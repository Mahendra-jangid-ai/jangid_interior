export interface Project {
  id: string
  title: string
  category: string
  location: string
  description: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'luxury-living-room',
    title: 'Luxury Living Room',
    category: 'Residential',
    location: 'Bandra, Mumbai',
    description:
      'A 900 sq ft living space transformed into a warm, layered sanctuary with custom joinery, bespoke upholstery, and a dramatic stone feature wall.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    tags: ['Living Room', 'Luxury', 'Residential'],
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Makeover',
    category: 'Kitchen',
    location: 'Bopal, Ahmedabad',
    description:
      'A sleek, high-gloss modular kitchen with integrated appliances, quartz countertops, and an island that doubles as a breakfast bar.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    tags: ['Kitchen', 'Modular', 'Modern'],
  },
  {
    id: 'master-bedroom',
    title: 'Master Bedroom Retreat',
    category: 'Bedroom',
    location: 'Baner, Pune',
    description:
      'A tranquil master suite with custom headboard, walk-in wardrobe, and layered lighting designed for rest and restoration.',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    tags: ['Bedroom', 'Luxury', 'Suite'],
  },
  {
    id: 'office-interior',
    title: 'Corporate Office Interior',
    category: 'Commercial',
    location: 'Powai, Mumbai',
    description:
      'A 4,000 sq ft tech company office designed around collaboration zones, focus pods, and a brand identity that employees are proud of.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tags: ['Office', 'Commercial', 'Corporate'],
  },
  {
    id: 'complete-home',
    title: 'Complete Home Interior',
    category: 'Residential',
    location: 'Satellite, Ahmedabad',
    description:
      'Full 3BHK home interior from living room to study — unified by a warm neutral palette, custom furniture, and premium textures throughout.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    tags: ['Full Home', 'Residential', '3BHK'],
  },
  {
    id: 'tv-unit',
    title: 'Minimal TV Unit Design',
    category: 'Living Room',
    location: 'Wakad, Pune',
    description:
      'A floor-to-ceiling media wall with integrated shelving, LED backlight, and fluted panel detailing that anchors the entire living space.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    tags: ['TV Unit', 'Living Room', 'Minimal'],
  },
  {
    id: 'wardrobe-storage',
    title: 'Custom Wardrobe Storage',
    category: 'Bedroom',
    location: 'Andheri, Mumbai',
    description:
      'A full-room walk-in wardrobe with custom compartmentalization, sensor lighting, and premium laminates — a dressing room worthy of a boutique hotel.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    tags: ['Wardrobe', 'Storage', 'Custom'],
  },
  {
    id: 'dining-area',
    title: 'Dining Area Design',
    category: 'Dining',
    location: 'Thaltej, Ahmedabad',
    description:
      'A formal dining room where a handcrafted table for eight is anchored by a statement chandelier and a dramatic fluted marble sideboard.',
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
    tags: ['Dining', 'Formal', 'Statement'],
  },
  {
    id: 'commercial-workspace',
    title: 'Commercial Workspace',
    category: 'Commercial',
    location: 'SG Highway, Ahmedabad',
    description:
      'A boutique co-working space designed for community and focus — biophilic elements, warm materials, and flexible zones that work for everyone.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    tags: ['Office', 'Commercial', 'Co-working'],
  },
]
