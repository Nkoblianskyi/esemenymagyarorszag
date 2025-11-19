'use client'

import { Search, Info, TrendingUp, Shield, CheckCircle2, ArrowRight, Building2, Star, Clock, Award, Zap, HelpCircle, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { EventCard } from '@/components/event-card'
import { mockEvents } from '@/lib/mock-data'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function HomePage() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const featuredEvents = mockEvents.slice(0, 6)

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (searchValue.trim()) {
      router.push(`/eventos?q=${encodeURIComponent(searchValue.trim())}`)
    } else {
      router.push('/eventos')
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Mi az az eseményaggregátor?",
      answer: "Az esemenymagyarorszag.com egy független árösszehasonlító platform, amely 8 hivatalos jegy-viszonteladó ajánlatait hasonlítja össze valós időben. Nem értékesítünk közvetlenül jegyeket, hanem segítünk megtalálni a legjobb árakat."
    },
    {
      question: "Miért haladják meg az árak a névértéket?",
      answer: "A viszonteladók piacán a kereslet és kínálat határozza meg az árakat. Az árak tartalmazhatnak szolgáltatási díjakat, szállítási költségeket és felárakat. Mi minden árat átláthatóan megjelenítünk a névértékkel együtt, hogy Ön informált döntést hozhasson."
    },
    {
      question: "Honnan származnak a jegyek?",
      answer: "Minden jegy hivatalos viszonteladóktól származik: Jegy.hu, Interticket, TicketExpress, Eventim HU, StubHub, Viagogo, Tixa és Jegymester. Ezek mind engedélyezett, ellenőrzött platformok."
    },
    {
      question: "Díjmentes a szolgáltatás?",
      answer: "Igen, a platform használata 100% ingyenes. Nem számítunk fel semmilyen díjat az összehasonlításért vagy átirányításért. A vásárlást közvetlenül a kiválasztott partnernél hajtja végre, az ő feltételeik szerint."
    },
    {
      question: "Biztonságos a vásárlás?",
      answer: "Minden partnerünk hivatalos, engedéllyel rendelkező viszonteladó. A vásárlást közvetlenül náluk hajtja végre biztonságos fizetési megoldásokkal. Mi csak összehasonlítjuk az árakat és átirányítjuk Önt."
    },
    {
      question: "Hogyan találom meg a legjobb árat?",
      answer: "Egyszerűen keressen rá az eseményre vagy előadóra. Az eredményeknél látni fogja az összes elérhető ajánlatot 8 forrásból, ár szerint rendezve. A névérték és a teljes ár mindig látható."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Compliance Disclaimer */}
      <section className="relative py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Alert className="mb-10 border-2 border-primary-foreground/20 bg-primary-foreground/95 max-w-5xl mx-auto shadow-lg">
            <Info className="h-5 w-5 text-primary shrink-0" />
            <AlertTitle className="text-base font-black mb-1.5 text-foreground">
              Fontos információ – Kérjük, olvassa el
            </AlertTitle>
            <AlertDescription className="text-sm leading-relaxed text-foreground">
              <p className="mb-2">
                <strong>Az EsemenyMagyarorszag.com független jegyár-összehasonlító (aggregátor).</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li><strong>Nem értékesítünk jegyeket</strong> – Átirányítjuk a viszonteladókhoz</li>
                <li><strong>Partnerek:</strong> Jegy.hu, Interticket, TicketExpress, Eventim HU, StubHub, Viagogo, Tixa, Jegymester</li>
                <li><strong>Árak meghaladhatják a névértéket</strong> – Minden ár átláthatóan megjelenítve</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-5 bg-accent text-accent-foreground px-4 py-1.5 text-xs font-bold">
              Átlátható árösszehasonlítás • 8 partner
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-balance leading-[1.1]">
              Hasonlítsa össze jegyárakat
              <br />
              <span className="text-secondary">5 hivatalos forrásból</span>
            </h1>
            
            <p className="text-base md:text-lg mb-8 text-pretty max-w-2xl mx-auto leading-relaxed opacity-95">
              Találja meg a legjobb ajánlatokat koncertekre, sportrendezvényekre és eseményekre. 
              100% ingyenes és átlátható.
            </p>

            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto mb-7">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted pointer-events-none" />
                <Input 
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Esemény, előadó vagy város keresése..." 
                  className="pl-12 pr-32 h-14 text-base border-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-2 focus-visible:ring-accent font-medium"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 text-sm font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Keresés
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs mt-2.5 font-semibold opacity-90">
                <CheckCircle2 className="inline h-3.5 w-3.5 mr-1" />
                10.000+ esemény
                <span className="mx-2">•</span>
                <CheckCircle2 className="inline h-3.5 w-3.5 mr-1" />
                Minden díj feltüntetve
              </p>
            </form>

            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-6 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-black mb-0.5">5</div>
                <div className="text-xs font-semibold opacity-90">Partner</div>
              </div>
              <div className="text-center border-x border-primary-foreground/20">
                <div className="text-3xl font-black mb-0.5">10K+</div>
                <div className="text-xs font-semibold opacity-90">Esemény</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-0.5">100%</div>
                <div className="text-xs font-semibold opacity-90">Ingyenes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Sources Section */}
      <section className="py-12 md:py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5 mr-1.5 inline" />
              Partner források
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-balance leading-tight">
              Összehasonlítjuk <span className="text-secondary">5 ellenőrzött partnert</span>
            </h2>
            <p className="text-base text-muted-foreground">
              Hivatalos jegy-viszonteladók. Teljes átláthatóság minden ajánlatnál.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Jegy.hu', type: 'Elsődleges' },
              { name: 'Interticket', type: 'Elsődleges' },
              { name: 'TicketExpress', type: 'Viszonteladó' },
              { name: 'Eventim HU', type: 'Viszonteladó' },
              { name: 'StubHub', type: 'Viszonteladó' },
              { name: 'Viagogo', type: 'Viszonteladó' },
              { name: 'Tixa', type: 'Elsődleges' },
              { name: 'Jegymester', type: 'Elsődleges' },
            ].map((partner, index) => (
              <Card key={index} className="hover:border-primary/40 hover:shadow-lg transition-all">
                <CardContent className="p-5 text-center">
                  <div className="font-bold text-base mb-1">{partner.name}</div>
                  <div className="text-xs text-muted-foreground font-medium">{partner.type}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-balance">
              Miért válassza az
              <br />
              <span className="text-primary">Esemény Magyarországot?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded bg-accent/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-black text-lg mb-2">100% Átlátható</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Mindig látható a <strong>névérték</strong> és a <strong>teljes ár minden díjjal</strong>. Nincsenek rejtett költségek.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    <span>Névérték feltüntetve</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    <span>Minden díj benne</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded bg-secondary/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-black text-lg mb-2">Legjobb árak</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  <strong>8 viszonteladót</strong> keresünk át. Megmutatjuk a legolcsóbb ajánlatokat.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-secondary shrink-0 mt-0.5" />
                    <span>Valós idejű összehasonlítás</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-secondary shrink-0 mt-0.5" />
                    <span>Ár szerint rendezve</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-black text-lg mb-2">Biztonságos & Ingyenes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  <strong>100% ingyenes</strong> szolgáltatás. Biztonságosan vásárol ellenőrzött partnerektől.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>Nincs regisztráció</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>Ellenőrzött partnerek</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12 md:py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-bold">
                Népszerű események
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black mb-2 text-balance">
                Trend Magyarországon
              </h2>
              <p className="text-base text-muted-foreground">
                A legkeresettebb események – hasonlítsa össze most
              </p>
            </div>
            <Link href="/eventos">
              <Button size="lg" className="hidden md:flex font-bold bg-primary hover:bg-primary/90">
                Összes esemény
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredEvents.map((event) => (
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
                minPrice={event.faceValue + 1500}
                faceValue={event.faceValue}
                partnersCount={8}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/eventos">
              <Button size="lg" className="font-bold bg-primary hover:bg-primary/90">
                Összes esemény
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-balance">
              Hogyan működik?
              <br />
              <span className="text-primary">3 egyszerű lépés</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-black text-xl mb-4">
                1
              </div>
              <h3 className="font-black text-lg mb-2">Esemény keresése</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Írja be az esemény, előadó vagy csapat nevét az összes időpont megjelenítéséhez.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground font-black text-xl mb-4">
                2
              </div>
              <h3 className="font-black text-lg mb-2">Árak összehasonlítása</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Láthatja az összes ajánlatot 8 viszonteladótól – névértékkel együtt.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground font-black text-xl mb-4">
                3
              </div>
              <h3 className="font-black text-lg mb-2">Vásárlás partnernél</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Válassza ki a legjobb ajánlatot és vásároljon biztonságosan a partnernél.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/eventos">
              <Button size="lg" className="font-bold h-14 px-10 text-base bg-primary hover:bg-primary/90">
                Árak összehasonlítása most
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5 mr-1.5 inline" />
              Gyakran Ismételt Kérdések
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-balance">
              Tudjon meg többet
              <br />
              <span className="text-primary">szolgáltatásunkról</span>
            </h2>
            <p className="text-base text-muted-foreground">
              A leggyakoribb kérdések és válaszok az árösszehasonlításról
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-primary/40 transition-all overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-black text-base mb-0.5">{faq.question}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {openFaqIndex === index ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Nem találja a választ? Lépjen kapcsolatba velünk
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="font-bold h-12 px-8">
                Kapcsolatfelvétel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-balance">
              Találja meg a legjobb jegyárakat
              <br />
              következő eseményéhez
            </h2>
            <p className="text-base md:text-lg mb-8 leading-relaxed opacity-95">
              Ingyenes, átlátható és független árösszehasonlítás
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Link href="/eventos">
                <Button size="lg" className="font-bold h-14 px-10 text-base w-full sm:w-auto bg-background hover:bg-background/90 text-foreground">
                  Események böngészése
                  <Search className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="font-bold h-14 px-10 text-base border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary w-full sm:w-auto bg-transparent text-secondary-foreground">
                  Tudjon meg többet
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-secondary-foreground/20">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-bold">Ingyenes</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-bold">8 Partner</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-bold">10K+ Esemény</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-bold">Átlátható</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
