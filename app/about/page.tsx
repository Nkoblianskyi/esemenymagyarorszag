import { Shield, Users, Target, Award, Heart, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rólunk - Jegyár-összehasonlítás | EseményMagyarország',
  description: 'Az EseményMagyarország.com Magyarország vezető független jegyár-összehasonlító szolgáltatása. Tudjon meg többet küldetésünkről és értékeinkről.',
  keywords: [
    'rólunk',
    'jegyösszehasonlítás magyarország',
    'jegy aggregátor',
    'árösszehasonlítás jegyek',
    'kik vagyunk',
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white text-center mb-6">Rólunk</h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed font-medium">
            Magyarország megbízható partnere az átlátható jegyár-összehasonlításban
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Kik Vagyunk Mi</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Az EseményMagyarország.com Magyarország vezető <strong className="text-foreground font-bold">független jegyár-összehasonlító szolgáltatása</strong>. 
                Küldetésünk egyszerű és világos: segítünk megtalálni a legjobb ajánlatokat kedvenc eseményeidre – 
                legyen szó koncertekről, labdarúgó-mérkőzésekről, színházi előadásokról vagy fesztiválokról.
              </p>
              <p className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <strong className="text-foreground text-xl block mb-2">Fontos tudni:</strong> 
                Mi egy tiszta összehasonlító és aggregátor szolgáltatás vagyunk. 
                <strong className="text-foreground font-bold"> Nem mi adjuk el a jegyeket közvetlenül</strong>. Ehelyett több ellenőrzött viszonteladói platformról 
                (mint Jegy.hu, Interticket, TicketExpress, Eventim és mások) hasonlítjuk össze az ajánlatokat, 
                és átirányítjuk Önt a partner weboldalára, ahol a vásárlás megtörténik.
              </p>
              <p>
                2025-ben alapítottuk platformunkat abból az igényből, hogy nagyobb átláthatóságot teremtsünk a jegyek másodlagos piacán. 
                Tudjuk, mennyire időigényes és frusztráló lehet manuálisan összehasonlítani az árakat különböző weboldalakon – 
                ezért ezt mi tesszük meg helyetted.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">Teljes Átláthatóság</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Egyértelműen megmutatjuk a névértéket (face value) és a viszonteladási árat, 
                így mindig pontosan tudod, mennyivel fizetsz többet az eredeti árnál.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-secondary hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">Ellenőrzött Partnerek</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Kizárólag elismert viszonteladói platformokkal dolgozunk, 
                amelyek szállítási garanciát és átfogó vásárlóvédelmet kínálnak.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">Időmegtakarítás</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ahelyett, hogy 6-7 különböző weboldalt látogatnál meg, egy helyen hasonlítsd össze az összes ajánlatot 
                és másodpercek alatt találd meg a legjobb árat.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-secondary hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">Mindig Ingyenes</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Összehasonlító szolgáltatásunk 100%-ban ingyenes. Nem számítunk fel plusz díjakat – 
                a partnernél látott ár az, amit fizetsz.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 border-2 border-border rounded-lg p-8 md:p-10 mb-16">
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-destructive" />
              Ígéretünk Neked
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-4">
                <span className="text-primary font-black text-2xl mt-1">✓</span>
                <span className="leading-relaxed">Világos és pontos információkat biztosítunk minden elérhető ajánlatról</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-black text-2xl mt-1">✓</span>
                <span className="leading-relaxed">Valós időben frissítjük az árakat, hogy mindig a legfrissebb információkat kapd</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-black text-2xl mt-1">✓</span>
                <span className="leading-relaxed">Csak megbízható partnerekkel dolgozunk, akik garantálják a jegyek hitelességét</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-black text-2xl mt-1">✓</span>
                <span className="leading-relaxed">Platformunkat ingyenesen és tolakodó reklámok nélkül tartjuk</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-black text-2xl mt-1">✓</span>
                <span className="leading-relaxed">Tiszteletben tartjuk magánéletedet és megvédjük személyes adataidat</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black mb-12">Értékeink</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="font-black text-xl mb-3">Innováció</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Folyamatosan fejlesztünk új funkciókat, hogy még könnyebbé tegyük a jegykeresést
                </p>
              </div>
              <div>
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="font-black text-xl mb-3">Bizalom</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Az átláthatóság és őszinteség minden üzleti kapcsolatunk középpontjában áll
                </p>
              </div>
              <div>
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h4 className="font-black text-xl mb-3">Ügyfélközpontúság</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Elégedettséged és a kiváló felhasználói élmény a legfontosabb prioritásunk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
