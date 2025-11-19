import Link from 'next/link'
import { Mail, MapPin, AlertTriangle, Shield, CheckCircle2, ExternalLink, Facebook, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      

      <div className="container mx-auto px-4 py-3.5">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image src="/favicon.ico" alt="Esemény Magyarország" width={32} height={32} />
              <span className="text-lg font-black text-foreground">
                Esemény Magyarország
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-sm">
              Magyarország vezető jegyár-összehasonlító platformja. 8 ellenőrzött viszonteladó összehasonlítása valós időben.
            </p>
            
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center gap-2.5 text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@esemenymagyarorszag.com" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  info@esemenymagyarorszag.com
                </a>
              </div>
              
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground font-medium">
                  Budapest, Magyarország
                </span>
              </div>
            </div>

            
          </div>
          
          <div>
            <h4 className="font-black text-sm mb-4 text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Főoldal
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Események
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Partnereink
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>
          
          
          
          <div>
            <h4 className="font-black text-sm mb-4 text-foreground">Jogi információk</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Adatvédelmi szabályzat
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Cookie szabályzat
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Általános szerződési feltételek
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-medium">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Shield className="h-5 w-5 text-accent shrink-0" />
              <div>
                <div className="text-xs font-black">100% Biztonságos</div>
                <div className="text-[10px] text-muted-foreground">SSL titkosítás</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="text-xs font-black">8 Partner</div>
                <div className="text-[10px] text-muted-foreground">Ellenőrzött források</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
              <div>
                <div className="text-xs font-black">GDPR</div>
                <div className="text-[10px] text-muted-foreground">Megfelelő</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
              <div>
                <div className="text-xs font-black">Ingyenes</div>
                <div className="text-[10px] text-muted-foreground">Nincs rejtett költség</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-secondary/10 border-l-4 border-secondary rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <h5 className="font-black text-base mb-3">Fontos megfelelőségi nyilatkozat</h5>
                  <div className="text-sm leading-relaxed space-y-2 text-foreground">
                    <p>
                      Az <strong>esemenymagyarorszag.com</strong> egy <strong>független árösszehasonlító platform (aggregátor)</strong>. 
                      <strong className="text-secondary"> Nem értékesítünk közvetlenül jegyeket</strong>, csak összehasonlítjuk 
                      az engedélyezett viszonteladók ajánlatait.
                    </p>
                    <p>
                      <strong>Az árak meghaladhatják a névértéket (face value)</strong>. Minden ár átláthatóan megjelenik, 
                      a névértékkel és az összes díjjal együtt. A vásárlást a kiválasztott partnernél hajtja végre.
                    </p>
                    <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                      <strong>Partnereink:</strong> Jegy.hu, Interticket, TicketExpress, Eventim HU, StubHub, Viagogo, Tixa, Jegymester
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm font-bold text-foreground">
                © 2025 esemenymagyarorszag.com – Független jegyár-összehasonlító platform
              </p>
              <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Minden márkanév, logó és védjegy a jogos tulajdonosok tulajdona. 
                Nem állunk kapcsolatban hivatalos jegykiadókkal vagy rendezvényszervezőkkel. 
                Ez egy független összehasonlító szolgáltatás.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
