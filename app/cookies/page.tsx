import type { Metadata } from 'next'
import { Cookie, Shield, CheckCircle2, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Szabályzat | Esemény Magyarország',
  description: 'Tudja meg, hogyan használ az esemenymagyarorszag.com sütiket (cookie-kat) az Ön élményének javítása érdekében. Információk a sütik típusairól és kezeléséről.',
  keywords: [
    'Cookie szabályzat',
    'Sütik',
    'Adatvédelem',
    'GDPR',
    'Cookie kezelés',
  ],
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-primary/5 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-bold border-2">
              <Cookie className="w-4 h-4 mr-2 inline" />
              Átláthatóság & Adatvédelem
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-balance leading-tight">
              Cookie Szabályzat
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-semibold">
              Utolsó frissítés: Január 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-10 border-2 border-primary/20">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="flex items-start gap-4">
                  <Info className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-black mb-3">Mik azok a sütik (cookie-k)?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A sütik (cookie-k) kisméretű szöveges fájlok, amelyeket az eszközén tárolunk, amikor ellátogat egy weboldalra. 
                      Széles körben használják őket arra, hogy a weboldalak hatékonyabban működjenek, és hogy információkat biztosítsanak 
                      a weboldal üzemeltetői számára.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Hogyan használjuk a sütiket</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Az esemenymagyarorszag.com sütiket használ az Ön élményének javítása érdekében. 
                A sütik segítenek nekünk abban, hogy:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Eltároljuk az Ön preferenciáit és beállításait',
                  'Megértsük, hogyan használja a weboldalunkat',
                  'Javítsuk a teljesítményt és funkcionalitást',
                  'Személyre szabott tartalmat biztosítsunk',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border-2 border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-8">Általunk használt sütik típusai</h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <Card className="border-2 border-primary/30">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black mb-2">1. Alapvető (elengedhetetlen) sütik</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          Ezek a sütik szükségesek ahhoz, hogy a weboldal megfelelően működjön. 
                          Nem lehet őket letiltani a rendszereinkben.
                        </p>
                        <div className="space-y-2 text-sm bg-muted/50 p-4 rounded-lg">
                          <div className="flex items-start gap-2">
                            <span className="font-bold text-foreground min-w-[160px]">cookie-consent:</span>
                            <span className="text-muted-foreground">Tárolja az Ön cookie preferenciáját</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-bold text-foreground min-w-[160px]">session:</span>
                            <span className="text-muted-foreground">Aktívan tartja az Ön munkamenetét böngészés közben</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Analytics Cookies */}
                <Card className="border-2 border-secondary/30">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary-foreground">
                        <Cookie className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black mb-2">2. Analitikai sütik</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          Ezek a sütik lehetővé teszik számunkra, hogy megszámoljuk a látogatásokat és megismerjük a forgalom forrásait, 
                          hogy mérjük és javítsuk weboldalunk teljesítményét.
                        </p>
                        <div className="space-y-2 text-sm bg-muted/50 p-4 rounded-lg">
                          <div className="flex items-start gap-2">
                            <span className="font-bold text-foreground min-w-[160px]">Google Analytics:</span>
                            <span className="text-muted-foreground">Elemzi a felhasználói interakciókat weboldalunkkal</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-bold text-foreground min-w-[160px]">_ga, _gid:</span>
                            <span className="text-muted-foreground">Egyedileg azonosítja és megkülönbözteti a felhasználókat</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Functionality Cookies */}
                <Card className="border-2 border-accent/30">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary-foreground">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black mb-2">3. Funkcionális sütik</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          Ezek a sütik lehetővé teszik, hogy a weboldal emlékezzen az Ön választásaira, 
                          hogy javított és személyre szabott funkciókat biztosítsunk Önnek.
                        </p>
                        <div className="space-y-2 text-sm bg-muted/50 p-4 rounded-lg">
                          <div className="flex items-start gap-2">
                            <span className="font-bold text-foreground min-w-[160px]">theme:</span>
                            <span className="text-muted-foreground">Tárolja az Ön téma preferenciáját (Világos/Sötét)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-bold text-foreground min-w-[160px]">language:</span>
                            <span className="text-muted-foreground">Tárolja az Ön nyelvi preferenciáját</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Partner Cookies */}
                <Card className="border-2 border-primary/30">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Info className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black mb-2">4. Partner sütik</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Amikor rákattint partnereink linkjeire (Jegy.hu, Interticket, stb.), ők saját sütiket helyezhetnek el. 
                          Mi nem kontrollálunk ezeket a sütiket, és azt javasoljuk, hogy minden partner adatvédelmi szabályzatát nézze meg.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Sütik kezelése</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Ön szabadon kontrollálhatja és/vagy törölheti a sütiket. Törölheti az eszközén lévő összes sütit, 
                és a legtöbb böngészőt beállíthatja úgy, hogy megakadályozzák azok elhelyezését.
              </p>

              <Card className="border-2 bg-card">
                <CardContent className="pt-8 pb-8 px-8">
                  <h3 className="text-xl font-black mb-6">Böngésző beállítások:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { browser: 'Chrome', path: 'Beállítások → Adatvédelem és biztonság → Sütik' },
                      { browser: 'Firefox', path: 'Beállítások → Adatvédelem és biztonság → Sütik' },
                      { browser: 'Safari', path: 'Beállítások → Adatvédelem → Sütik' },
                      { browser: 'Edge', path: 'Beállítások → Adatvédelem → Sütik' },
                    ].map((item) => (
                      <div key={item.browser} className="p-4 bg-muted/50 border-2 rounded-lg">
                        <p className="font-bold mb-1">{item.browser}:</p>
                        <p className="text-sm text-muted-foreground">{item.path}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 leading-relaxed font-medium">
                    Kérjük, vegye figyelembe: Ha blokkol minden sütit, előfordulhat, hogy weboldalunk egyes funkciói nem működnek megfelelően.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Cookie Duration */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Sütik élettartama</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/30">
                  <CardContent className="pt-6 pb-6 px-6">
                    <h3 className="font-bold text-lg mb-2">Munkamenet sütik</h3>
                    <p className="text-sm text-muted-foreground">
                      Törlődnek, amikor bezárja a böngészőt
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-secondary/30">
                  <CardContent className="pt-6 pb-6 px-6">
                    <h3 className="font-bold text-lg mb-2">Állandó sütik</h3>
                    <p className="text-sm text-muted-foreground">
                      30 naptól 2 évig maradnak, típustól függően
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Policy Changes */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Szabályzat változásai</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Időnként frissíthetjük ezt a Cookie Szabályzatot. Minden változásról értesítjük Önt azáltal, 
                hogy közzétesszük az új szabályzatot ezen az oldalon és frissítjük az "Utolsó frissítés" dátumot.
              </p>
            </div>

            {/* Contact */}
            <Card className="border-2 border-primary/30 bg-primary/5">
              <CardContent className="pt-8 pb-8 px-8">
                <h2 className="text-2xl font-black mb-4">Kérdései vannak?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ha bármilyen kérdése van Cookie Szabályzatunkkal kapcsolatban, lépjen velünk kapcsolatba:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Badge variant="default" className="px-6 py-3 text-sm font-bold cursor-pointer hover:bg-primary/90">
                      Kapcsolati űrlap
                    </Badge>
                  </Link>
                  <a href="mailto:info@esemenymagyarorszag.com">
                    <Badge variant="outline" className="px-6 py-3 text-sm font-bold cursor-pointer hover:bg-muted border-2">
                      info@esemenymagyarorszag.com
                    </Badge>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
