export interface Location {
  id: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  description: string;
  areas: string[];
  slug: string;
}

export const locations: Location[] = [
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    address:
      "A-123, Andheri West, Near Lokhandwala Complex, Mumbai, Maharashtra 400053",
    phone: "+91 75684 91519",
    description:
      "Premium interior design services across Mumbai. Serving Andheri, Bandra, Powai, Malad, Goregaon, Borivali, and Dadar with luxury home and office interiors.",
    areas: [
      "Andheri",
      "Bandra",
      "Powai",
      "Malad",
      "Goregaon",
      "Borivali",
      "Dadar",
      "Worli",
      "Juhu",
    ],
    slug: "mumbai",
  },
];

export const companyInfo = {
  name: "SK Interior",
  tagline: "Premium Interior Design Company in Mumbai",
  phone: "+91 75684 91519",
  email: "mahendra.jangid.official@gmail.com",
  whatsapp: "+917568491519",
  address: "Mumbai",
  workingHours: "Mon - Sat: 10:00 AM - 7:00 PM",
  socialLinks: {
    facebook: "https://facebook.com/skinterior",
    instagram: "https://instagram.com/skinterior",
    youtube: "https://youtube.com/skinterior",
    linkedin: "https://linkedin.com/company/skinterior",
    pinterest: "https://pinterest.com/skinterior",
  },
};
