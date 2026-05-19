export interface Testimonial {
  id: string
  name: string
  location: string
  role: string
  quote: string
  rating: number
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    location: 'Andheri, Mumbai',
    role: 'Homeowner',
    quote:
      'Jangid Interior transformed our 3BHK into a space we genuinely love coming home to. Every detail was considered, every material was premium, and the team delivered exactly on time. Extraordinary work.',
    rating: 5,
    initials: 'PS',
  },
  {
    id: 'rahul-mehta',
    name: 'Rahul Mehta',
    location: 'Bopal, Ahmedabad',
    role: 'Homeowner',
    quote:
      'Exceptional craftsmanship and on-time delivery — two things most design firms cannot promise simultaneously. Our modular kitchen looks stunning and functions even better than it looks.',
    rating: 5,
    initials: 'RM',
  },
  {
    id: 'sneha-kulkarni',
    name: 'Sneha Kulkarni',
    location: 'Baner, Pune',
    role: 'Homeowner',
    quote:
      'Their team understood our vision from the very first meeting. The outcome exceeded every expectation we had — the bedroom they designed for us feels like a five-star retreat.',
    rating: 5,
    initials: 'SK',
  },
  {
    id: 'arjun-patel',
    name: 'Arjun Patel',
    location: 'SG Highway, Ahmedabad',
    role: 'Business Owner',
    quote:
      'Professional, responsive, and brilliant in execution. Our office interior has become a key part of how we attract and retain talent. I only wish we had engaged Jangid Interior sooner.',
    rating: 5,
    initials: 'AP',
  },
  {
    id: 'kavita-nair',
    name: 'Kavita Nair',
    location: 'Powai, Mumbai',
    role: 'Homeowner',
    quote:
      'The false ceiling and TV unit they designed for our living room are conversation starters at every gathering. People always ask who did our interiors. We are always happy to share the name.',
    rating: 5,
    initials: 'KN',
  },
  {
    id: 'deepak-gupta',
    name: 'Deepak Gupta',
    location: 'Kothrud, Pune',
    role: 'Property Developer',
    quote:
      'We engaged Jangid Interior for a complete turnkey solution across three of our luxury apartments. Flawless execution, not a single hassle, and results that helped us sell the units above asking price.',
    rating: 5,
    initials: 'DG',
  },
]
