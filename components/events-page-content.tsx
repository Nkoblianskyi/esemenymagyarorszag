'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, MapPin, Calendar } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'
import { mockEvents } from '@/lib/mock-data'

export default function EventsPageContent() {
  const searchParams = useSearchParams()
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCity, setSelectedCity] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  useEffect(() => {
    const queryFromUrl = searchParams.get('q')
    if (queryFromUrl) {
      setSearchQuery(queryFromUrl)
    }
  }, [])

  const categories = ['all', 'Konzerte', 'Sport', 'Theater', 'Festivals']
  const cities = ['all', 'Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Leipzig', 'Dresden', 'Bremen', 'Hannover']

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.venue.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    const matchesCity = selectedCity === 'all' || event.city === selectedCity
    return matchesSearch && matchesCategory && matchesCity
  })

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === 'date') return new Date(a.date).getTime() - new Date(b.date).getTime()
    if (sortBy === 'price-low') return (a.faceValue || 0) - (b.faceValue || 0)
    if (sortBy === 'price-high') return (b.faceValue || 0) - (a.faceValue || 0)
    return 0
  })

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Events Suchen</h1>
        
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Events, Künstler, Teams, Veranstaltungsorte suchen..." 
                className="pl-10 h-12 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Kategorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat === 'all' ? 'Alle Kategorien' : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Stadt" />
              </SelectTrigger>
              <SelectContent>
                {cities.map(city => (
                  <SelectItem key={city} value={city}>
                    {city === 'all' ? 'Alle Städte' : city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sortieren nach" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Datum</SelectItem>
                <SelectItem value="price-low">Preis: Niedrig bis Hoch</SelectItem>
                <SelectItem value="price-high">Preis: Hoch bis Niedrig</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          {sortedEvents.length} {sortedEvents.length === 1 ? 'Event gefunden' : 'Events gefunden'}
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map((event) => (
          <Link href={`/event/${event.id}`} key={event.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer h-[520px] flex flex-col border-2 hover:border-primary/30">
              <div className="h-[220px] relative shrink-0">
                <img 
                  src={event.image || "/placeholder.svg"} 
                  alt={event.name}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-3 right-3 bg-background/90 text-foreground hover:bg-background shadow-sm">
                  {event.category}
                </Badge>
              </div>
              <CardContent className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold mb-2 h-[56px] flex items-center text-balance line-clamp-2">
                  {event.name}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4 h-[64px]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="line-clamp-1">{event.venue}, {event.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span className="line-clamp-1">
                      {new Date(event.date).toLocaleDateString('de-DE', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })} · {event.time}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-3 space-y-1 mt-auto h-[76px]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground">Ab</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">€{Math.round((event.faceValue || 0) * 1.2)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Nennwert: €{event.faceValue}</span>
                    <span className="text-muted-foreground">5 Quellen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {sortedEvents.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-lg text-muted-foreground mb-2">Keine Events gefunden</p>
          <p className="text-sm text-muted-foreground">
            Versuchen Sie, Ihre Filter oder Suche anzupassen
          </p>
        </Card>
      )}
    </>
  )
}
