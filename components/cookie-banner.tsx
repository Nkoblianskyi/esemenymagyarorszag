'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Cookie, Shield, X } from 'lucide-react'
import Link from 'next/link'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(false)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t-4 border-primary shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <Cookie className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-black mb-2 text-foreground">
                Sütiket használunk
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Az esemenymagyarorszag.com sütiket használ a felhasználói élmény javítása érdekében. 
                Saját és harmadik féltől származó sütiket használunk.
              </p>
              <Link 
                href="/cookies" 
                className="text-sm font-bold text-primary hover:text-primary/80 underline inline-flex items-center gap-1"
              >
                <Shield className="h-4 w-4" />
                Süti szabályzat
              </Link>
            </div>
          </div>
          
          <div className="flex gap-3 w-full lg:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={rejectCookies}
              className="flex-1 lg:flex-none font-bold border-2"
            >
              Elutasítom
            </Button>
            <Button 
              size="lg" 
              onClick={acceptCookies}
              className="flex-1 lg:flex-none font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              Elfogadom
            </Button>
          </div>

          <button
            onClick={rejectCookies}
            className="absolute top-3 right-3 lg:relative lg:top-0 lg:right-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Bezárás"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    // </CHANGE>
  )
}
