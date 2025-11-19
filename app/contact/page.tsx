'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Send, Clock, CheckCircle2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-16 md:py-24 overflow-hidden bg-primary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold shadow-lg">
              <MessageSquare className="w-4 h-4 mr-2 inline" />
              Segítünk Neked
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance leading-tight text-white">
              Lépj Kapcsolatba Velünk
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
              Kérdésed van az árösszehasonlítással kapcsolatban? Csapatunk szívesen segít
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-28 relative z-20 mb-16">
            <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 bg-card">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Mail className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-black text-lg mb-2">E-mail</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Írj nekünk e-mailt
                </p>
                <a href="mailto:info@esemenymagyarorszag.com" className="text-primary hover:underline font-bold text-sm">
                  info@esemenymagyarorszag.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-2xl transition-all duration-300 bg-card">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                    <Clock className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-black text-lg mb-2">Nyitvatartás</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Hétfő - Péntek
                </p>
                <p className="font-bold text-sm">
                  9:00 - 18:00
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 bg-card">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-black text-lg mb-2">Válaszidő</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Átlagos reakcióidő
                </p>
                <p className="font-bold text-sm">
                  24-48 óra
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4">Küldj Nekünk Üzenetet</h2>
                <p className="text-muted-foreground text-lg">
                  Töltsd ki az űrlapot és hamarosan jelentkezünk
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold">
                      Neved <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Kovács János"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold">
                      E-mail Cím <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@példa.hu"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold">
                    Tárgy <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Miben segíthetünk?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold">
                    Üzeneted <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Írd ide az üzeneted..."
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto font-bold text-base px-10 h-14 shadow-lg">
                  <Send className="mr-2 h-5 w-5" />
                  Üzenet Küldése
                </Button>
              </form>
            </div>

            <div className="mt-16 bg-muted/50 border-2 border-border rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <MessageSquare className="h-7 w-7 text-primary" />
                Gyakran Ismételt Kérdések
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2 text-base">Közvetlenül eladtok jegyeket?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nem, mi egy árösszehasonlító szolgáltatás vagyunk. Megmutatjuk a legjobb ajánlatokat ellenőrzött viszonteladóktól 
                    és átirányítunk a biztonságos vásárláshoz.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-base">Ingyenes a szolgáltatásotok?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Igen, az árösszehasonlításunk 100%-ban ingyenes. Csak a viszonteladónál fizetsz a jegyekért. 
                    Nincsenek rejtett díjak, regisztráció sem szükséges.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-base">Mit tegyek, ha probléma van a rendelésemmel?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A jegyvásárlással kapcsolatos problémák esetén kérjük, lépj kapcsolatba közvetlenül azzal a viszonteladóval, 
                    akinél vásároltál. Ők kezelik az összes tranzakciót és ügyfélszolgálatot. Szívesen segítünk a megfelelő kapcsolattartó megtalálásában.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-base">Miért magasabbak az árak a névértéknél?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A másodlagos piacon hasonlítjuk össze az engedélyezett viszonteladók ajánlatait. Az árak a kereslet és kínálat alapján 
                    alakulnak, és eseménytől függően az eredeti névérték felett vagy alatt is lehetnek. 
                    Mindkét árat átláthatóan megjelenítjük.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">Üzenet Elküldve!</DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Köszönjük az üzeneted. Megkaptuk, és 24-48 órán belül jelentkezünk.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowSuccess(false)} size="lg" className="font-bold">
              Bezárás
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
