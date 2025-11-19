import { MapPin, Calendar, Clock, Users, AlertCircle, Info, Shield, ExternalLink, TrendingUp } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import Link from 'next/link'
import { mockEvents, mockOffers } from '@/lib/mock-data'
import { notFound } from 'next/navigation'
import EventDetailClient from '@/components/event-detail-client'
import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const eventData = mockEvents.find(e => e.id === parseInt(id))
  
  if (!eventData) {
    return {
      title: 'Esemény nem található - EseményMagyarország',
    }
  }

  return {
    title: `${eventData.name} - Jegyek ${eventData.faceValue} Ft-tól | EseményMagyarország`,
    description: `Hasonlítsa össze a jegyárakat a(z) ${eventData.name} eseményhez ${eventData.venue}, ${eventData.city}. ${eventData.date} ${eventData.time}. Találja meg a legjobb ajánlatokat az összes viszonteladótól.`,
    keywords: [
      eventData.name,
      `jegyek ${eventData.name}`,
      `${eventData.name} ${eventData.city}`,
      eventData.venue,
      eventData.city,
      eventData.category.toLowerCase(),
      'jegyár összehasonlítás',
      'olcsó jegyek',
    ],
    openGraph: {
      title: `${eventData.name} - Jegyek`,
      description: `${eventData.venue}, ${eventData.city} - ${eventData.date}`,
      images: [eventData.image],
      type: 'website',
    },
  }
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const eventData = mockEvents.find(e => e.id === parseInt(id))
  
  if (!eventData) {
    notFound()
  }

  const baseOffers = mockOffers[1] || []
  const offers = baseOffers.map((offer, index) => ({
    ...offer,
    id: `offer-${id}-${index}`,
    eventId: parseInt(id),
    price: eventData.faceValue + 1000 + (index * 500),
    totalPrice: (eventData.faceValue + 1000 + (index * 500)) * 2,
    fees: Math.round((eventData.faceValue + 1000 + (index * 500)) * 0.1),
  }))

  const lowestPrice = Math.min(...offers.map(o => o.price))
  const priceAboveFace = lowestPrice > eventData.faceValue

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary font-medium transition-colors">Főoldal</Link>
            <span>/</span>
            <Link href="/eventos" className="hover:text-primary font-medium transition-colors">Események</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{eventData.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Alert className="mb-8 border-2 border-primary/30 bg-primary/5">
          
          <AlertDescription className="text-sm md:text-base">
            <strong className="text-primary text-base">Fontos:</strong> Az EseményMagyarország.com nem értékesít közvetlenül jegyeket. 
            Mi összehasonlítjuk az engedélyezett viszonteladók ajánlatait és átirányítjuk Önt a partnereink weboldalára, 
            ahol biztonságosan véglegesítheti a vásárlást. Hasonlítsa össze az árakat és válassza ki a legjobb ajánlatot.
          </AlertDescription>
        </Alert>

        <EventDetailClient 
          eventData={eventData}
          offers={offers}
          lowestPrice={lowestPrice}
          priceAboveFace={priceAboveFace}
        />
      </div>
    </div>
  )
}
