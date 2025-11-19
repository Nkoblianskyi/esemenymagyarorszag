import type { Metadata } from 'next'
import { Shield, Lock, Eye, UserCheck, FileText, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adatvédelmi Szabályzat | Esemény Magyarország',
  description: 'Az esemenymagyarorszag.com adatvédelmi szabályzata. Tudja meg, hogyan gyűjtjük, használjuk és védjük személyes adatait a GDPR szerint.',
  keywords: [
    'Adatvédelmi szabályzat',
    'Adatvédelem',
    'Privátszféra',
    'GDPR',
    'Személyes adatok',
    'Adatbiztonság',
  ],
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-primary/5 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-bold border-2">
              <Shield className="w-4 h-4 mr-2 inline" />
              GDPR-Megfelelő & Biztonságos
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-balance leading-tight">
              Adatvédelmi Szabályzat
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
            <Card className="mb-12 border-2 border-primary/20">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black mb-4">Bevezetés</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Az esemenymagyarorszag.com-nál komolyan vesszük felhasználóink magánéletét. Ez az Adatvédelmi Szabályzat 
                      elmagyarázza, hogyan gyűjtjük, használjuk, osztjuk meg és védjük az Ön személyes adatait, amikor 
                      jegyár-összehasonlító szolgáltatásunkat használja.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-8">Milyen adatokat gyűjtünk</h2>
              
              <div className="space-y-6">
                <Card className="border-2 border-primary/30">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <UserCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black mb-3">1. Ön által megadott információk</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          Amikor használja weboldalunkat, a következő információkat adhatja meg nekünk:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>Kapcsolattartási információk (név, e-mail), amikor üzenetet küld nekünk</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>Keresési preferenciák és alkalmazott szűrők</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>Megjegyzések vagy értékelések, amelyeket beküld</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/30">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary-foreground">
                        <Eye className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black mb-3">2. Automatikusan gyűjtött információk</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          Amikor meglátogatja weboldalunkat, automatikusan gyűjtjük:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <span>IP-cím és hozzávetőleges földrajzi hely</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <span>Böngésző típusa és eszköz információk</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <span>Meglátogatott oldalak és ott töltött idő</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <span>Események, amelyeket keres</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <span>Kattintások partnereink ajánlataira</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/30">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary-foreground">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black mb-3">3. Sütik és hasonló technológiák</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Sütiket használunk az Ön élményének javítása érdekében. További információkért tekintse meg{' '}
                          <Link href="/cookies" className="text-primary hover:underline font-bold">
                            Cookie Szabályzatunkat
                          </Link>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* How We Use Data */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Hogyan használjuk az Ön adatait</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                A gyűjtött információkat a következő célokra használjuk:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Árösszehasonlító szolgáltatásunk biztosítása és fejlesztése',
                  'Az Ön élményének személyre szabása és releváns eredmények megjelenítése',
                  'Weboldal használatának elemzése optimalizálás céljából',
                  'Kommunikáció Önnel kérései esetén',
                  'Csalás vagy rosszindulatú tevékenységek felderítése és megelőzése',
                  'Jogi kötelezettségeink teljesítése',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border-2 border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <Card className="border-2 border-secondary bg-secondary/10">
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="flex items-start gap-4 mb-6">
                    <AlertTriangle className="h-8 w-8 text-secondary shrink-0" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black mb-3">Adatok megosztása</h2>
                      <p className="text-lg font-black text-foreground mb-4">
                        NEM adjuk el az Ön személyes adatait harmadik feleknek.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Azonban korlátozott információkat megosztunk a következő esetekben:
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-3">Partnereinkkel</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Amikor rákattint egy ajánlatra és átirányítjuk Önt egy partnerhez (Jegy.hu, Interticket, stb.), 
                        alapvető információkat osztunk meg, mint például:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Az esemény, amely érdekli Önt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>A kiválasztott kategória vagy ár</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Anonim azonosító a konverzió követésére</span>
                        </li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3 italic font-medium">
                        Minden partnernek saját adatvédelmi szabályzata van, amely szabályozza, hogyan kezelik az Ön információit, miután meglátogatja weboldalukat.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3">Szolgáltatók</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Harmadik fél szolgáltatókat használunk weboldalunk működtetésére:
                      </p>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div className="p-3 bg-background border-2 rounded-lg">
                          <p className="font-bold text-sm mb-1">Google Analytics</p>
                          <p className="text-xs text-muted-foreground">Webforgalom elemzés</p>
                        </div>
                        <div className="p-3 bg-background border-2 rounded-lg">
                          <p className="font-bold text-sm mb-1">Vercel</p>
                          <p className="text-xs text-muted-foreground">Tárhely & Teljesítmény</p>
                        </div>
                        <div className="p-3 bg-background border-2 rounded-lg">
                          <p className="font-bold text-sm mb-1">E-mail szolgáltatások</p>
                          <p className="text-xs text-muted-foreground">Kérések megválaszolása</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">Jogi kötelezettségek</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Kizárólag akkor hozhatjuk nyilvánosságra az Ön információit, ha azt a törvény előírja, vagy jogaink védelmében szükséges.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* GDPR Rights */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Az Ön jogai (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Ha az Európai Unióban él, az Általános Adatvédelmi Rendelet (GDPR) szerint a következő jogokkal rendelkezik:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Eye, title: 'Hozzáférési jog', desc: 'Kérheti az Önről tárolt adatok másolatát' },
                  { icon: FileText, title: 'Helyesbítési jog', desc: 'Kérheti a pontatlan adatok javítását' },
                  { icon: AlertTriangle, title: 'Törlési jog', desc: 'Kérheti személyes adatainak törlését' },
                  { icon: Lock, title: 'Korlátozási jog', desc: 'Kérheti adatai felhasználásának korlátozását' },
                  { icon: FileText, title: 'Adathordozhatóság', desc: 'Kérheti adatait strukturált formátumban' },
                  { icon: Shield, title: 'Tiltakozási jog', desc: 'Tiltakozhat adatai feldolgozása ellen' },
                ].map((item, index) => (
                  <Card key={index} className="border-2 border-primary/20">
                    <CardContent className="pt-6 pb-6 px-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6 font-medium">
                Ezen jogok bármelyikének gyakorlásához lépjen velünk kapcsolatba:{' '}
                <a href="mailto:info@esemenymagyarorszag.com" className="text-primary hover:underline font-bold">
                  info@esemenymagyarorszag.com
                </a>
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <Card className="border-2 border-primary/30 bg-card">
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Lock className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black mb-3">Adatbiztonság</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Technikai és szervezeti biztonsági intézkedéseket vezetünk be személyes adatainak védelmére:
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'SSL/TLS titkosítás minden adatátvitelhez',
                      'Korlátozott hozzáférés a személyes adatokhoz',
                      'Rendszeres biztonsági ellenőrzések',
                      'Biztonságos tárolás védett szervereken',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 border-2 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mt-6 italic font-medium">
                    Azonban egyetlen internetes átviteli módszer sem 100%-osan biztonságos, ezért nem garantálhatunk abszolút biztonságot.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Adatmegőrzés</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Személyes adatait csak addig őrizzük meg, amíg az szükséges az ebben a szabályzatban leírt célok eléréséhez, 
                kivéve, ha a törvény hosszabb megőrzési időt ír elő vagy engedélyez.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-primary/30">
                  <CardContent className="pt-6 pb-6 px-6 text-center">
                    <h3 className="font-bold text-base mb-2">Kapcsolattartási adatok</h3>
                    <p className="text-2xl font-black text-primary mb-2">Határozatlan</p>
                    <p className="text-xs text-muted-foreground">Amíg nem kéri a törlést</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-secondary/30">
                  <CardContent className="pt-6 pb-6 px-6 text-center">
                    <h3 className="font-bold text-base mb-2">Böngészési adatok</h3>
                    <p className="text-2xl font-black text-secondary mb-2">26 hónap</p>
                    <p className="text-xs text-muted-foreground">Analitikai sütik</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/30">
                  <CardContent className="pt-6 pb-6 px-6 text-center">
                    <h3 className="font-bold text-base mb-2">Szerver naplók</h3>
                    <p className="text-2xl font-black text-accent mb-2">90 nap</p>
                    <p className="text-xs text-muted-foreground">Biztonsági naplók</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Harmadik fél weboldalakra mutató linkek</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Weboldalunk harmadik fél weboldalakra (partnereink) mutató linkeket tartalmaz. Nem vagyunk felelősek 
                ezeknek a weboldalaknak az adatvédelmi gyakorlataiért. Javasoljuk, hogy olvassa el minden meglátogatott 
                weboldal adatvédelmi szabályzatát.
              </p>
            </div>

            {/* Minors */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Kiskorúak</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Szolgáltatásunk nem 16 év alatti személyeknek szól. Tudatosan nem gyűjtünk személyes információkat 
                kiskorúaktól. Ha megállapítjuk, hogy kiskorú adatait gyűjtöttük, azonnal töröljük azokat.
              </p>
            </div>

            {/* Policy Changes */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Szabályzat változásai</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Időnként frissíthetjük ezt az Adatvédelmi Szabályzatot. Minden lényeges változásról értesítjük Önt azáltal, 
                hogy közzétesszük az új szabályzatot ezen az oldalon és frissítjük az "Utolsó frissítés" dátumot.
              </p>
            </div>

            {/* Contact */}
            <Card className="border-2 border-primary/30 bg-primary/5">
              <CardContent className="pt-8 pb-8 px-8">
                <h2 className="text-2xl font-black mb-4">Kapcsolat</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ha bármilyen kérdése van ezzel az Adatvédelmi Szabályzattal vagy személyes adatainak kezelésével kapcsolatban, lépjen velünk kapcsolatba:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-background border-2 rounded-lg">
                    <p className="font-bold text-sm mb-1">E-mail:</p>
                    <p className="text-primary hover:underline font-semibold">
                      info@esemenymagyarorszag.com
                    </p>
                  </div>
                  <div className="p-4 bg-background border-2 rounded-lg">
                    <p className="font-bold text-sm mb-1">Adatkezelő:</p>
                    <p className="text-sm font-semibold">esemenymagyarorszag.com</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link href="/contact">
                    <Badge variant="default" className="px-6 py-3 text-sm font-bold cursor-pointer hover:bg-primary/90">
                      Kapcsolati űrlap
                    </Badge>
                  </Link>
                  <Link href="/cookies">
                    <Badge variant="outline" className="px-6 py-3 text-sm font-bold cursor-pointer hover:bg-muted border-2">
                      Cookie Szabályzat megtekintése
                    </Badge>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
