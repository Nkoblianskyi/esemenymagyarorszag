import Link from 'next/link'
import { Ticket, Menu, Search, AlertCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background backdrop-blur-lg border-b border-border shadow-sm">
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <AlertCircle className="h-3.5 w-3.5 text-accent" />
                <span className="font-semibold">Független összehasonlító • Nem értékesítünk jegyeket</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">Kapcsolat</span>
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="font-semibold text-accent">8 ellenőrzött partner</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
            <div className="relative">
              <Image src="/favicon.ico" alt="Esemény Magyarország" width={32} height={32} />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent border-2 border-background"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black leading-tight text-foreground tracking-tight">
                Esemény Magyarország
              </span>
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                Jegyár-összehasonlító
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all"
            >
              Főoldal
            </Link>
            <Link 
              href="/eventos" 
              className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all"
            >
              Események
            </Link>
            <Link 
              href="/partners" 
              className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all"
            >
              Partnereink
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all"
            >
              Rólunk
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all"
            >
              Kapcsolat
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/eventos" className="hidden sm:block">
              <Button 
                size="default"
                className="font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
              >
                <Search className="mr-2 h-4 w-4" />
                Összehasonlítás
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="shadow-sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menü</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left font-black text-lg">Navigáció</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-8">
                  <Link 
                    href="/" 
                    className="flex items-center text-base font-semibold hover:bg-accent/10 rounded-lg px-4 py-3 transition-colors"
                  >
                    Főoldal
                  </Link>
                  <Link 
                    href="/eventos" 
                    className="flex items-center gap-3 text-base font-semibold hover:bg-accent/10 rounded-lg px-4 py-3 transition-colors text-primary"
                  >
                    <Search className="h-5 w-5" />
                    Események
                  </Link>
                  <Link 
                    href="/partners" 
                    className="flex items-center text-base font-semibold hover:bg-accent/10 rounded-lg px-4 py-3 transition-colors"
                  >
                    Partnereink
                  </Link>
                  <Link 
                    href="/about" 
                    className="flex items-center text-base font-semibold hover:bg-accent/10 rounded-lg px-4 py-3 transition-colors"
                  >
                    Rólunk
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex items-center text-base font-semibold hover:bg-accent/10 rounded-lg px-4 py-3 transition-colors"
                  >
                    Kapcsolat
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
