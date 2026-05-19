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
    phone: "+91 89051 87368",
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
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    address: "B-45, Baner Road, Near Westend Mall, Pune, Maharashtra 411045",
    phone: "+91 89051 87368",
    description:
      "Expert interior designers in Pune offering modular kitchen, bedroom, and complete home interior solutions in Baner, Wakad, Hinjewadi, Kothrud, and Viman Nagar.",
    areas: [
      "Baner",
      "Wakad",
      "Hinjewadi",
      "Kothrud",
      "Hadapsar",
      "Viman Nagar",
      "Aundh",
      "Kalyani Nagar",
    ],
    slug: "pune",
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    address:
      "C-78, SG Highway, Near Iscon Cross Roads, Ahmedabad, Gujarat 380015",
    phone: "+91 89051 87368",
    description:
      "Luxury interior design company in Ahmedabad. Transforming homes in Navrangpura, Satellite, Bopal, SG Highway, and Thaltej with contemporary designs.",
    areas: [
      "Navrangpura",
      "Satellite",
      "Bopal",
      "SG Highway",
      "Thaltej",
      "Prahlad Nagar",
      "Vastrapur",
      "Bodakdev",
    ],
    slug: "ahmedabad",
  },
];

export const companyInfo = {
  name: "Jangid Interior",
  tagline: "Premium Interior Design Company in Mumbai, Pune & Ahmedabad",
  phone: "+91 89051 87368",
  email: "mahendra.jangid.official@gmail.com",
  whatsapp: "+918905187368",
  address: "Mumbai, Pune & Ahmedabad",
  workingHours: "Mon - Sat: 10:00 AM - 7:00 PM",
  socialLinks: {
    facebook: "https://facebook.com/jangidinterior",
    instagram: "https://instagram.com/jangidinterior",
    youtube: "https://youtube.com/jangidinterior",
    linkedin: "https://linkedin.com/company/jangidinterior",
    pinterest: "https://pinterest.com/jangidinterior",
  },
};
