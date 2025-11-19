'use client'

import { useState } from 'react'
import { MapPin, Calendar, Clock, Users, ExternalLink, TrendingUp, Info, ArrowUpDown, Ticket, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface EventDetailClientProps {
  eventData: any
  offers: any[]
  lowestPrice: number
  priceAboveFace: boolean
}

export default function EventDetailClient({ eventData, offers, lowestPrice, priceAboveFace }: EventDetailClientProps) {
  const [sortBy, setSortBy] = useState<'price' | 'section'>('price')

  const sortedOffers = [...offers].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price
    return a.section.localeCompare(b.section)
  })

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div>
          <Badge className="mb-4 text-sm px-3 py-1.5 bg-primary text-primary-foreground">{eventData.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance leading-tight text-foreground">
            {eventData.name}
          </h1>
          
          <div className="aspect-video relative rounded-2xl overflow-hidden mb-8 shadow-xl border-2 border-border">
            <img 
              src={eventData.image || "/placeholder.svg"} 
              alt={eventData.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-semibold">{eventData.venue}</p>
              <p className="text-sm opacity-90">{eventData.city}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base mb-1.5">Dátum és időpont</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(eventData.date).toLocaleDateString('hu-HU', { 
                        weekday: 'long',
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                    <p className="text-sm font-semibold mt-1">{eventData.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-base mb-1.5">Kapunyitás</p>
                    <p className="text-sm font-semibold">{eventData.doors}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-base mb-1.5">Helyszín</p>
                    <p className="text-sm text-muted-foreground">{eventData.venue}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{eventData.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-highlight/10 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-highlight" />
                  </div>
                  <div>
                    <p className="font-bold text-base mb-1.5">Kapacitás</p>
                    <p className="text-sm font-semibold">{eventData.capacity.toLocaleString('hu-HU')} fő</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-2">
          <CardHeader className="bg-muted/30">
            <CardTitle className="flex items-center gap-2.5 text-xl">
              <Info className="h-5 w-5 text-primary" />
              Az eseményről
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              {eventData.description}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 shadow-lg">
          <CardHeader className="bg-muted/30 border-b">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="mb-2 flex items-center gap-2.5 text-2xl">
                  <Ticket className="h-6 w-6 text-primary" />
                  Jegyár-összehasonlítás
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {offers.length} ajánlat {new Set(offers.map(o => o.partner.name)).size} különböző viszonteladótól
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortBy(sortBy === 'price' ? 'section' : 'price')}
                className="gap-2"
              >
                <ArrowUpDown className="h-4 w-4" />
                {sortBy === 'price' ? 'Ár szerint' : 'Szektor szerint'}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <Alert className={priceAboveFace ? 'border-highlight/30 bg-highlight/5' : 'border-accent/30 bg-accent/5'}>
              <Info className="h-5 w-5 text-highlight" />
              <AlertDescription>
                <strong className="text-foreground">Névérték (Face Value):</strong> {eventData.faceValue.toLocaleString('hu-HU')} Ft jegyenként
                {priceAboveFace && (
                  <span className="block mt-2 text-xs text-highlight">
                    A jelenlegi ajánlatok a névérték felett vannak a nagy kereslet vagy korlátozott elérhetőség miatt.
                  </span>
                )}
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              {sortedOffers.map((offer, index) => (
                <Card key={offer.id} className={`${index === 0 ? 'border-2 border-accent shadow-md' : 'border-2'} overflow-hidden hover:shadow-lg transition-shadow`}>
                  <CardContent className="p-6">
                    {index === 0 && (
                      <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90 text-sm px-3 py-1">
                         Legjobb ajánlat
                      </Badge>
                    )}
                    
                    <div className="flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
                      <div className="flex-1 space-y-4 min-w-0">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-xl overflow-hidden bg-muted flex items-center justify-center shrink-0 border-2">
                            <img 
                              src={offer.partner.logo || "/placeholder.svg"} 
                              alt={`${offer.partner.name} Logo`}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-lg">{offer.partner.name}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-yellow-600 flex items-center">★ {offer.rating}</span>
                              {offer.verified && (
                                <>
                                  <span className="text-muted-foreground">·</span>
                                  <span className="text-accent flex items-center gap-1">
                                    <Shield className="h-3.5 w-3.5" />
                                    Ellenőrizve
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground text-xs font-medium mb-1.5">Szektor</p>
                            <p className="font-semibold">{offer.section}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs font-medium mb-1.5">Sor és mennyiség</p>
                            <p className="font-semibold">{offer.row} · {offer.quantity} jegy</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs font-medium mb-1.5">Szállítás</p>
                            <p className="font-semibold">{offer.delivery}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs font-medium mb-1.5">Szolgáltatási díj</p>
                            <p className="font-semibold">{offer.fees.toLocaleString('hu-HU')} Ft</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0 flex flex-col items-end">
                        <div className="mb-4">
                          <p className="text-4xl font-bold text-primary mb-1">{offer.price.toLocaleString('hu-HU')} Ft</p>
                          <p className="text-xs text-muted-foreground mb-2">jegyenként</p>
                          {offer.price > eventData.faceValue && (
                            <div className="flex items-center gap-1.5 justify-end">
                              <TrendingUp className="h-4 w-4 text-highlight" />
                              <span className="text-sm font-medium text-highlight">
                                +{(offer.price - eventData.faceValue).toLocaleString('hu-HU')} Ft a névérték felett
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Összesen: <span className="font-bold text-foreground">{(offer.totalPrice + offer.fees).toLocaleString('hu-HU')} Ft</span>
                        </p>
                        <Button asChild size="lg" className="w-full min-w-[180px]">
                          <a href={offer.url} target="_blank" rel="noopener noreferrer">
                            Ajánlat megtekintése
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle>Árak áttekintése</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="text-center p-6 bg-primary text-primary-foreground rounded-xl">
                <p className="text-sm mb-2 opacity-90">Legolcsóbb ár</p>
                <p className="text-5xl font-bold mb-1">{lowestPrice.toLocaleString('hu-HU')}</p>
                <p className="text-xs opacity-75">Ft / jegy</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground mb-2">Névérték (Face Value)</p>
                <p className="text-3xl font-bold text-foreground">{eventData.faceValue.toLocaleString('hu-HU')} Ft</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-semibold mb-3">Statisztikák</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Elérhető ajánlatok:</span>
                    <Badge variant="secondary" className="font-bold">{offers.length}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Viszonteladók:</span>
                    <Badge variant="secondary" className="font-bold">{new Set(offers.map(o => o.partner.name)).size}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Legmagasabb ár:</span>
                    <span className="font-bold">{Math.max(...offers.map(o => o.price)).toLocaleString('hu-HU')} Ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Átlagár:</span>
                    <span className="font-bold">{Math.round(offers.reduce((sum, o) => sum + o.price, 0) / offers.length).toLocaleString('hu-HU')} Ft</span>
                  </div>
                </div>
              </div>

              <Alert className="bg-primary/5 border-primary/30">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-xs">
                  <strong>Megjegyzés:</strong> Az árak 5 percenként frissülnek. 
                  Az "Ajánlat megtekintése" gombra kattintva a viszonteladó weboldalára kerül.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
