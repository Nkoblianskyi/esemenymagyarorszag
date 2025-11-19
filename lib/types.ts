// Core types for the ticket aggregator platform

export interface Event {
  id: number
  name: string
  category?: EventCategory
  venue: string
  city: string
  address?: string
  date: string
  time: string
  doors?: string
  image: string
  description: string
  faceValue: number
  capacity?: number
  eventUrl?: string
}

export type EventCategory = 
  | 'Conciertos' 
  | 'Deportes' 
  | 'Teatro' 
  | 'Festivales' 
  | 'Comedia'
  | 'Familia'

export interface TicketOffer {
  id: string
  eventId: number
  partner: Partner
  section: string
  row: string
  quantity: number
  price: number // Price per ticket
  totalPrice: number // Total for all tickets
  fees: number
  currency: string
  delivery: DeliveryMethod
  url: string
  rating: number
  verified: boolean
  lastUpdated: string
}

export type DeliveryMethod = 
  | 'E-Ticket' 
  | 'Mobile Transfer' 
  | 'Physical Ticket'
  | 'Will Call'

export interface Partner {
  id: string
  name: string
  logo: string
  description: string
  website: string
  founded: number
  headquarters: string
  rating: number
  features: string[]
  countries: number
  verified: boolean
  apiEndpoint?: string
  apiKey?: string
}

export interface PriceComparison {
  eventId: number
  faceValue: number
  lowestPrice: number
  highestPrice: number
  averagePrice: number
  offerCount: number
  partnerCount: number
  offers: TicketOffer[]
}

export interface SearchFilters {
  query?: string
  category?: EventCategory | 'all'
  city?: string
  dateFrom?: string
  dateTo?: string
  priceMin?: number
  priceMax?: number
  sortBy?: 'date' | 'price-low' | 'price-high' | 'popularity'
}
