import { MapPin, Calendar, TrendingUp, ExternalLink, Ticket } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface EventCardProps {
  id: number
  name: string
  category: string
  venue: string
  city: string
  date: string
  time: string
  image: string
  minPrice: number
  faceValue: number
  partnersCount: number
}

export function EventCard({
  id,
  name,
  category,
  venue,
  city,
  date,
  time,
  image,
  minPrice,
  faceValue,
  partnersCount,
}: EventCardProps) {
  const priceDiff = minPrice - faceValue
  const percentAboveFace = ((priceDiff / faceValue) * 100).toFixed(0)

  return (
    <Link href={`/evento/${id}`}>
      <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col border-2 border-border hover:border-primary bg-card">
        {/* Angled image section */}
        <div className="h-56 relative shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
          <img 
            src={image || "/placeholder.svg"} 
            alt={name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Category badge with angled design */}
          <div className="absolute top-0 right-0 z-20">
            <div className="bg-primary text-primary-foreground px-6 py-2 font-bold text-xs uppercase tracking-wide shadow-lg"
                 style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
              {category}
            </div>
          </div>
          
          {/* Price tag with angled corner */}
          <div className="absolute bottom-0 left-0 z-20">
            <div className="bg-secondary text-secondary-foreground px-5 py-3 shadow-xl"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}>
              <div className="text-xs font-semibold opacity-90">Legjobb ár</div>
              <div className="text-2xl font-black">{minPrice.toLocaleString('hu-HU')} Ft</div>
            </div>
          </div>

          {/* Diagonal accent line */}
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-secondary z-10"></div>
        </div>
        
        <CardContent className="p-5 flex flex-col flex-grow relative">
          {/* Angled divider at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -skew-x-12"></div>
          
          <h3 className="font-black text-xl mb-4 text-balance leading-tight line-clamp-2 min-h-[56px] text-foreground group-hover:text-primary transition-colors pt-2">
            {name}
          </h3>
          
          <div className="space-y-3 text-sm mb-4">
            <div className="flex items-start gap-2 p-2 rounded bg-muted/50 border-l-4 border-secondary">
              <MapPin className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
              <div className="flex-1">
                <div className="font-bold text-foreground line-clamp-1">{venue}</div>
                <div className="text-xs text-muted-foreground">{city}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-muted/50 border-l-4 border-accent">
              <Calendar className="h-4 w-4 shrink-0 text-accent" />
              <span className="font-bold text-foreground text-sm">
                {new Date(date).toLocaleDateString('hu-HU', { 
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          <div className="flex-grow"></div>

          {/* Price comparison box with angled design */}
          <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-lg p-4 space-y-3 border-2 border-border overflow-hidden">
            {/* Angled accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 transform rotate-45 translate-x-10 -translate-y-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground font-bold uppercase flex items-center gap-1">
                  <Ticket className="h-3 w-3" />
                  Névérték
                </span>
                <span className="font-bold text-foreground">{faceValue.toLocaleString('hu-HU')} Ft</span>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-xs text-muted-foreground font-semibold">
                  {partnersCount} viszonteladó
                </span>
                <div className="flex items-center gap-1 font-bold text-secondary">
                  <TrendingUp className="h-3 w-3" />
                  <span>+{percentAboveFace}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover CTA with angled background */}
          <div className="mt-4 relative overflow-hidden rounded-md group-hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12 scale-110"></div>
            <div className="relative z-10 py-2 flex items-center justify-center text-foreground group-hover:text-primary-foreground font-bold text-sm transition-colors">
              <span>Árak megtekintése</span>
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
