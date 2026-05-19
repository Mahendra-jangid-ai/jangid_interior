export interface Service {
  id: string
  title: string
  icon: string
  shortDesc: string
  fullDesc: string
}

export const services: Service[] = [
  {
    id: 'home-interior',
    title: 'Home Interior Design',
    icon: 'Home',
    shortDesc: 'Complete home transformation with bespoke design solutions.',
    fullDesc:
      'We reimagine your entire living space with a unified design language. From spatial planning to final furnishing, every element is curated to reflect your lifestyle and personality — creating a home that is as functional as it is beautiful.',
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Design',
    icon: 'ChefHat',
    shortDesc: 'Smart, beautiful kitchens engineered for how you actually cook.',
    fullDesc:
      'Our modular kitchen designs blend ergonomic layouts with premium finishes. We create cooking spaces that optimize storage, workflow, and aesthetics — whether you prefer a sleek contemporary look or a warm classic style.',
  },
  {
    id: 'living-room',
    title: 'Living Room Design',
    icon: 'Sofa',
    shortDesc: 'Living rooms that become the heart of your home.',
    fullDesc:
      'The living room sets the tone for your entire home. We design spaces that are inviting, elegant, and perfectly suited to how you live — balancing comfort, conversation, and visual impact in every square foot.',
  },
  {
    id: 'bedroom-interior',
    title: 'Bedroom Interior Design',
    icon: 'BedDouble',
    shortDesc: 'Serene, personal bedrooms that restore and inspire.',
    fullDesc:
      'Your bedroom should be a sanctuary. We design private retreats that prioritize rest, warmth, and personal expression — from the perfect lighting scheme to bespoke storage solutions that keep your space serene.',
  },
  {
    id: 'wardrobe-design',
    title: 'Wardrobe Design',
    icon: 'Shirt',
    shortDesc: 'Custom wardrobes that maximize every inch of space.',
    fullDesc:
      'Our custom wardrobe solutions are designed around your wardrobe and daily routine. With intelligent compartmentalization, premium hardware, and beautiful finishes, getting dressed becomes a pleasure — not a chore.',
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling Design',
    icon: 'Layers',
    shortDesc: 'Architectural ceiling details that elevate every room.',
    fullDesc:
      'A well-designed ceiling transforms the entire feel of a room. From coffered patterns to dramatic cove lighting, our false ceiling designs add architectural interest, hide utilities, and create the perfect ambient atmosphere.',
  },
  {
    id: 'tv-unit',
    title: 'TV Unit Design',
    icon: 'Tv',
    shortDesc: 'Statement TV units that anchor your living space.',
    fullDesc:
      'We design TV units that are far more than a place to mount a screen. Our bespoke media walls integrate storage, display, and ambient lighting into a single design statement that anchors and elevates your living room.',
  },
  {
    id: 'office-interior',
    title: 'Office Interior Design',
    icon: 'Briefcase',
    shortDesc: 'Workspaces designed to inspire focus and productivity.',
    fullDesc:
      'Great offices attract great people. We design work environments that balance brand identity with employee comfort — creating spaces that foster focus, collaboration, and the kind of pride that comes from working somewhere beautiful.',
  },
  {
    id: 'commercial-interior',
    title: 'Commercial Interior Design',
    icon: 'Building2',
    shortDesc: "Commercial spaces that communicate your brand's values.",
    fullDesc:
      "From retail stores to hospitality spaces, we design commercial interiors that create powerful first impressions. Every element is intentional — guiding customer experience and communicating your brand's unique identity.",
  },
  {
    id: 'turnkey-solutions',
    title: 'Turnkey Interior Solutions',
    icon: 'Key',
    shortDesc: 'End-to-end project delivery from design to handover.',
    fullDesc:
      'Our turnkey service manages every aspect of your interior project — design, material procurement, civil work, fabrication, installation, and styling. You simply walk into a finished space that matches exactly what was promised.',
  },
  {
    id: 'renovation',
    title: 'Renovation Services',
    icon: 'Wrench',
    shortDesc: 'Thoughtful renovations that breathe new life into existing spaces.',
    fullDesc:
      "Whether it's a single room or an entire home, our renovation services bring fresh vision to existing spaces. We assess what works, reimagine what doesn't, and execute upgrades that feel seamless and substantial.",
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture Design',
    icon: 'Armchair',
    shortDesc: 'Bespoke furniture crafted exactly to your specifications.',
    fullDesc:
      "When off-the-shelf won't do, we design and fabricate custom furniture pieces that fit your space perfectly. Every curve, dimension, and finish is chosen with intention — resulting in pieces that become heirlooms.",
  },
]
