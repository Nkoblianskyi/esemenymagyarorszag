'use client'

import { Suspense } from 'react'
import EventosPageContent from '@/components/eventos-page-content'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info, Shield } from 'lucide-react'

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground relative overflow-hidden border-b-4 border-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          {/* Compliance disclaimer banner */}
          <div className="pt-6 pb-4">
            <Alert className="border-2 border-warning bg-warning/10 backdrop-blur-sm">
              
              <AlertDescription className="text-sm font-semibold text-white">
                <strong className="text-warning">Fontos:</strong> Mi egy árösszehasonlító platform vagyunk. 
                Nem mi értékesítünk jegyeket, hanem különböző viszonteladók ajánlatait hasonlítjuk össze. 
                Az árak magasabbak lehetnek a névértéknél.
              </AlertDescription>
            </Alert>
          </div>

          {/* Hero content */}
          <div className="py-12 text-center md:py-3">
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-balance">
              Összes Esemény Magyarországon
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8 text-pretty">
              Böngésszen több ezer esemény között és hasonlítsa össze a jegyárakat 
              8 vezető viszonteladó ajánlatai alapján
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-secondary">30+</div>
                <div className="text-sm md:text-base opacity-80 mt-1">Elérhető Esemény</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-success">8</div>
                <div className="text-sm md:text-base opacity-80 mt-1">Partner Forrás</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-accent">0 Ft</div>
                <div className="text-sm md:text-base opacity-80 mt-1">Használat Díja</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={
          <div className="flex items-center justify-center py-24">
            <div className="text-center">
              <div className="relative mx-auto mb-6 h-20 w-20">
                <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
                <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              </div>
              <p className="text-lg font-bold text-foreground">Események betöltése...</p>
              <p className="text-sm text-muted-foreground mt-2">8 viszonteladó árait hasonlítjuk össze</p>
            </div>
          </div>
        }>
          <EventosPageContent />
        </Suspense>
      </div>
    </div>
  )
}
