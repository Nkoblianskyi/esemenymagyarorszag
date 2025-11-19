import { ExternalLink, Shield, Star, CheckCircle2, Info, Award, Clock, Globe, TrendingUp, Users, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partnereink | Esemény Magyarország - Megbízható jegyvizsgálók',
  description: 'Fedezze fel ellenőrzött partner platformjainkat a jegyvásárláshoz Magyarországon: Jegy.hu, Interticket, TicketExpress, Eventim HU és még sok más.',
  keywords: [
    'jegy partnerek magyarország',
    'jegy.hu',
    'interticket',
    'ticketexpress',
    'eventim magyarország',
    'tixa',
    'jegymester',
    'engedélyezett viszonteladók',
  ],
}

const partners = [
  {
    id: 1,
    name: 'Jegy.hu',
    logo: '/jegy-hu-logo.jpg',
    description: 'Magyarország egyik vezető online jegyértékesítő platformja több mint 15 éves tapasztalattal. Koncertek, színházi előadások, sportesemények széles választéka.',
    website: 'https://jegy.hu',
    founded: 2007,
    headquarters: 'Budapest, Magyarország',
    rating: 4.7,
    features: ['Magyar piaci vezető', 'E-jegy', 'Mobiljegy', 'Vásárlóvédelem', '24/7 ügyfélszolgálat'],
    countries: 1,
    verified: true,
    monthlyUsers: '2.5M+'
  },
  {
    id: 2,
    name: 'Interticket',
    logo: '/interticket-logo.jpg',
    description: 'Magyarország legnagyobb jegyirodai hálózata élő üzletekkel és online értékesítéssel. Megbízható szolgáltatás kulturális és sportesemények jegyeihez.',
    website: 'https://interticket.hu',
    founded: 1990,
    headquarters: 'Budapest, Magyarország',
    rating: 4.6,
    features: ['Országos lefedettség', 'Élő kasszák', 'Online értékesítés', 'Print@Home', 'Csoportos kedvezmények'],
    countries: 1,
    verified: true,
    monthlyUsers: '1.8M+'
  },
  {
    id: 3,
    name: 'TicketExpress',
    logo: '/ticketexpress-logo.jpg',
    description: 'Prémium jegyértékesítő szolgáltatás Magyarországon és Közép-Európában. Kiváló ügyfélszolgálat és széles rendezvényválaszték jellemzi.',
    website: 'https://ticketexpress.hu',
    founded: 2001,
    headquarters: 'Budapest, Magyarország',
    rating: 4.5,
    features: ['VIP jegyek', 'Expressz szállítás', 'Rugalmas fizetés', 'Megbízható értékesítő', 'Helyszíni átvétel'],
    countries: 3,
    verified: true,
    monthlyUsers: '850K+'
  },
  {
    id: 4,
    name: 'Eventim HU',
    logo: '/eventim-hu-logo.jpg',
    description: 'Az európai Eventim csoport magyar leányvállalata. Nemzetközi szabványok és helyi ismeret kombinációja garantálja a kiváló szolgáltatást.',
    website: 'https://eventim.hu',
    founded: 2015,
    headquarters: 'Budapest, Magyarország',
    rating: 4.6,
    features: ['Nemzetközi háttér', 'Mobilapplikáció', 'E-ticket rendszer', 'Fan protection', 'Európai események'],
    countries: 21,
    verified: true,
    monthlyUsers: '1.2M+'
  },
  {
    id: 5,
    name: 'Tixa',
    logo: '/tixa-logo.jpg',
    description: 'Modern online jegyplatform innovatív funkcionalitással. Különösen népszerű zenei és kulturális eseményeknél, egyszerű használattal.',
    website: 'https://tixa.hu',
    founded: 2018,
    headquarters: 'Budapest, Magyarország',
    rating: 4.4,
    features: ['Modern felület', 'Gyors vásárlás', 'Mobilbarát', 'Azonnali jegy', 'Fiatal közönség'],
    countries: 1,
    verified: true,
    monthlyUsers: '650K+'
  },
  {
    id: 6,
    name: 'Jegymester',
    logo: '/jegymester-logo.jpg',
    description: 'Megbízható magyar jegyplatform kiemelt fókusszal a színházi és zenei előadásokra. Kiváló ügyfélélmény és átlátható árazás.',
    website: 'https://jegymester.hu',
    founded: 2012,
    headquarters: 'Budapest, Magyarország',
    rating: 4.5,
    features: ['Színházi specialista', 'Áttekinthető árak', 'Ülésválasztás', 'Csoportos foglalás', 'Visszaváltás'],
    countries: 1,
    verified: true,
    monthlyUsers: '580K+'
  },
  {
    id: 7,
    name: 'StubHub',
    logo: '/stubhub-logo.jpg',
    description: 'Nemzetközi másodlagos jegypiac FanProtect garanciával. Magyar események széles választéka világszínvonalú vásárlóvédelemmel.',
    website: 'https://stubhub.hu',
    founded: 2000,
    headquarters: 'San Francisco, USA',
    rating: 4.4,
    features: ['FanProtect™', 'Szállítási garancia', 'E-jegyek', 'Mobil app', 'Árátláthatóság'],
    countries: 40,
    verified: true,
    monthlyUsers: '18M+'
  },
  {
    id: 8,
    name: 'Viagogo',
    logo: '/viagogo-logo.jpg',
    description: 'Globális eseményjegy piactér vásárlói garanciával. Magyar események nemzetközi szinten 100%-os szállítási garanciával.',
    website: 'https://viagogo.hu',
    founded: 2006,
    headquarters: 'Genf, Svájc',
    rating: 4.3,
    features: ['Világméretű lefedettség', '100% szállítási garancia', 'Több deviza', 'Biztonságos fizetés', 'Vásárlóvédelem'],
    countries: 160,
    verified: true,
    monthlyUsers: '20M+'
  },
]

export default function PartnersPage() {
  const totalCountries = Math.max(...partners.map(p => p.countries))
  const avgRating = (partners.reduce((sum, p) => sum + p.rating, 0) / partners.length).toFixed(1)

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground border-b-4 border-secondary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 text-sm px-4 py-1.5 font-bold">
              <Shield className="h-3.5 w-3.5 mr-1.5" />
              ELLENŐRZÖTT PARTNEREK
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance leading-tight">
              Megbízható Partnereink
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-balance max-w-2xl mx-auto leading-relaxed font-medium">
              Kizárólag ellenőrzött, bevizsgált jegyviszonteladókkal dolgozunk együtt, 
              hogy garantálhassuk a legjobb árakat és a maximális biztonságot
            </p>
            
            <Alert className="text-left border-2 border-secondary bg-card text-card-foreground max-w-2xl mx-auto shadow-lg">
              <Info className="h-5 w-5 text-secondary" />
              <AlertDescription className="text-sm leading-relaxed">
                <strong className="text-secondary font-bold">Fontos tudnivaló:</strong> Az esemenymagyarorszag.com egy árösszehasonlító platform. 
                Nem értékesítünk közvetlenül jegyeket. Az "Ajánlat megtekintése" gombra kattintva átirányítjuk 
                Önt a kiválasztott partner viszonteladó weboldalára, ahol biztonságosan véglegesítheti vásárlását.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 -mt-8">
          <Card className="border-2 border-border shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-4xl font-black text-foreground mb-2">{partners.length}</p>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-wide">Aktív partner</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-border shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-accent-foreground" />
              </div>
              <p className="text-4xl font-black text-foreground mb-2">{totalCountries}+</p>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-wide">Lefedett ország</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-border shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="h-6 w-6 text-secondary-foreground" />
              </div>
              <p className="text-4xl font-black text-foreground mb-2">100%</p>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-wide">Ellenőrizve</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-border shadow-lg bg-card hover:shadow-xl transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-4xl font-black text-foreground mb-2">{avgRating}</p>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-wide">Átlag értékelés</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Partnereink részletesen</h2>
          <p className="text-muted-foreground mb-10 text-lg font-medium">
            Minden partnert gondosan ellenőriztünk és teljesíti a biztonság és megbízhatóság magas követelményeit
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <Card key={partner.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary bg-card">
                <div className="bg-muted/30 p-6 border-b-2 border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-black text-2xl mb-2">{partner.name}</h3>
                      {partner.verified && (
                        <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Ellenőrizve
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 bg-card px-3 py-2 rounded-lg shadow-sm border-2 border-border">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="font-black text-lg">{partner.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {partner.description}
                  </p>
                </div>

                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2.5 p-3 bg-muted/50 rounded-lg">
                      <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5 font-bold uppercase">Alapítva</p>
                        <p className="font-black text-sm">{partner.founded}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 bg-muted/50 rounded-lg">
                      <Globe className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5 font-bold uppercase">Országok</p>
                        <p className="font-black text-sm">{partner.countries}+</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 bg-muted/50 rounded-lg">
                      <Building2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5 font-bold uppercase">Székhely</p>
                        <p className="font-black text-sm">{partner.headquarters}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5 font-bold uppercase">Havi felhasználó</p>
                        <p className="font-black text-sm">{partner.monthlyUsers}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-black mb-3 text-muted-foreground uppercase tracking-wide">Főbb jellemzők:</p>
                    <div className="flex flex-wrap gap-2">
                      {partner.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs font-bold">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="default" className="w-full font-bold" size="lg" asChild>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      Weboldal megtekintése
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-muted/30 border-2 border-border mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl font-black">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Info className="h-5 w-5 text-primary-foreground" />
              </div>
              Így működik az árösszehasonlításunk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-black text-xl shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-black mb-2 text-lg">Valós idejű adatgyűjtés</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    Folyamatosan gyűjtjük az aktuális ár- és elérhetőségi adatokat minden partner platformról, 
                    hogy mindig a legfrissebb ajánlatokat mutathassuk be.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-black text-xl shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-black mb-2 text-lg">Átlátható árösszehasonlítás</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    Minden ajánlat áttekinthetően megjelenítve névértékkel (face value), 
                    szolgáltatási díjakkal és teljes árral a maximális átláthatóság érdekében.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center font-black text-xl shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-black mb-2 text-lg">Biztonságos átirányítás partnerhez</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    Az ajánlat kiválasztásánál közvetlenül a partner biztonságos weboldalára irányítjuk. 
                    A vásárlás az ő általános szerződési feltételeik és vásárlóvédelmük alapján történik.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-black text-xl shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-black mb-2 text-lg">Ingyenes szolgáltatás</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    Az összehasonlító szolgáltatásunk teljesen ingyenes. Pontosan a partnernél 
                    megjelenített árat fizeti - nincs rejtett felár vagy díj tőlünk.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black mb-4">Miért bízhat partnereinkben</h3>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto font-medium">
            Minden partner szigorú ellenőrzési folyamaton megy keresztül és teljesíti magas biztonsági követelményeinket
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-border hover:border-primary hover:shadow-xl transition-all bg-card">
              <CardContent className="pt-8 pb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-black text-xl mb-3">Szigorú ellenőrzés</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  Csak bevált platformokkal dolgozunk hosszú múlttal, 
                  ellenőrzött hírnévvel és pozitív vásárlói értékelésekkel.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-border hover:border-accent hover:shadow-xl transition-all bg-card">
              <CardContent className="pt-8 pb-6">
                <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-black text-xl mb-3">Átfogó vásárlóvédelem</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  Minden partner erős vásárlói garanciákat, szállítási garanciát és teljes 
                  védelmet biztosít minden jegyvásárlási tranzakcióhoz.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-border hover:border-secondary hover:shadow-xl transition-all bg-card">
              <CardContent className="pt-8 pb-6">
                <div className="h-16 w-16 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-black text-xl mb-3">Kiváló hírnév</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  Milliónyi sikeres tranzakció világszerte és következetesen pozitív 
                  vásárlói értékelések igazolják partnereink megbízhatóságát.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
