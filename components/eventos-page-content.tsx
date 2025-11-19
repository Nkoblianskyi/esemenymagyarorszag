'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Search, MapPin, Filter, X, SlidersHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { EventCard } from './event-card'
import { mockEvents } from '@/lib/mock-data'

export default function EventosPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') || '')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCity, setSelectedCity] = useState('all')
  const [sortBy, setSortBy] = useState('date')


  const categories = ['all', 'Koncertek', 'Sport', 'Színház', 'Komédia', 'Fesztivál']
  const cities = ['all', 'Budapest', 'Debrecen', 'Sopron', 'Zamárdi']

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

  const hasActiveFilters = selectedCategory !== 'all' || selectedCity !== 'all' || searchQuery

  return (
    <div className="space-y-8">
      <Card className="border-2 border-border shadow-lg overflow-hidden relative">
        {/* Angled accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        
        <CardContent className="p-6 space-y-6">
          {/* Search input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Keressen eseményeket, előadókat, csapatokat vagy helyszíneket..." 
              className="pl-12 pr-12 h-14 text-base border-2 focus:border-primary bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <SlidersHorizontal className="h-4 w-4" />
              Szűrők:
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px] h-10 border-2 font-semibold">
                <SelectValue placeholder="Kategória" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Minden Kategória</SelectItem>
                {categories.filter(c => c !== 'all').map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-[180px] h-10 border-2 font-semibold">
                <SelectValue placeholder="Város" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Minden Város</SelectItem>
                {cities.filter(c => c !== 'all').map(city => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] h-10 border-2 font-semibold">
                <SelectValue placeholder="Rendezés" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Dátum szerint</SelectItem>
                <SelectItem value="price-low">Ár: Alacsony → Magas</SelectItem>
                <SelectItem value="price-high">Ár: Magas → Alacsony</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedCity('all')
                  setSearchQuery('')
                }}
                className="ml-auto border-2 font-semibold"
              >
                <X className="h-4 w-4 mr-2" />
                Visszaállítás
              </Button>
            )}
          </div>

          {/* Active filters display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-dashed border-border">
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="gap-2 font-semibold">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('all')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedCity !== 'all' && (
                <Badge variant="secondary" className="gap-2 font-semibold">
                  <MapPin className="h-3 w-3" />
                  {selectedCity}
                  <button onClick={() => setSelectedCity('all')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {searchQuery && (
                <Badge variant="secondary" className="gap-2 font-semibold">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-foreground">
            {sortedEvents.length} Esemény
          </h2>
          <p className="text-sm text-muted-foreground mt-1 font-semibold">
            8 partner valós idejű összehasonlítása
          </p>
        </div>
      </div>

      {/* Events grid */}
      {sortedEvents.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              name={event.name}
              category={event.category}
              venue={event.venue}
              city={event.city}
              date={event.date}
              time={event.time}
              image={event.image}
              minPrice={Math.round((event.faceValue || 0) * 1.15)}
              faceValue={event.faceValue || 0}
              partnersCount={8}
            />
          ))}
        </div>
      ) : (
        <Card className="p-16 text-center border-2 border-dashed bg-muted/30">
          <div className="max-w-md mx-auto">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 border-4 border-border">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-foreground">Nincs találat</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Sajnos nem találtunk olyan eseményt, amely megfelel a keresési feltételeinek. 
              Próbáljon más szűrőket vagy keresési kifejezéseket használni.
            </p>
            <Button 
              onClick={() => {
                setSelectedCategory('all')
                setSelectedCity('all')
                setSearchQuery('')
              }}
              className="bg-primary hover:bg-primary/90 font-bold"
            >
              Minden szűrő visszaállítása
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
