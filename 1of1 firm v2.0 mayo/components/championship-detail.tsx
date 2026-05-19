"use client"

import { useState, useEffect } from "react"
import { Menu, Calendar, MapPin, Clock, Shield, ChevronRight, Play } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface ChampionshipDetailProps {
  onNavigate?: (page: string) => void
}

export default function ChampionshipDetail({ onNavigate }: ChampionshipDetailProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 22,
    hours: 10,
    minutes: 48,
    seconds: 51,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          days--
        }
        if (days < 0) {
          days = 0
          hours = 0
          minutes = 0
          seconds = 0
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleNavigate = (page: string) => {
    setIsMenuOpen(false)
    onNavigate?.(page)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <img 
          src="/logo.png" 
          alt="1 OF 1 FIRM" 
          className="h-10 md:h-12 w-auto"
        />
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white p-2 hover:text-red-500 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        currentPage="championship"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pt-20 pb-8">
          <div className="max-w-lg mx-auto w-full">
            {/* Event Label */}
            <p className="text-red-500 text-xs tracking-[0.3em] mb-4">SIGNATURE EVENT</p>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide leading-tight">
              <span className="text-white">THE 1 OF 1</span>
              <br />
              <span className="text-white">CHAMPIONSHIP</span>
            </h1>

            {/* Tagline */}
            <div className="mt-6 border-l-2 border-red-500 pl-4">
              <p className="text-white/90 text-sm tracking-wider">4 SATURDAYS.</p>
              <p className="text-white/90 text-sm tracking-wider">4 FIGHTS PER NIGHT.</p>
              <p className="text-white/90 text-sm tracking-wider">ONE CHAMPION.</p>
            </div>

            {/* Event Details */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Calendar className="w-5 h-5 text-white/50" />
                <span className="text-sm tracking-wider">COMING SOON</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-white/50" />
                <span className="text-sm tracking-wider">BARRANQUILLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="px-4 py-8 bg-black/90 border-y border-white/10">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-4 bg-black/50 border border-white/10 p-4 rounded">
            <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white/70" />
            </div>
            <div>
              <p className="text-white/50 text-xs tracking-wider">FALTA PARA</p>
              <p className="text-white text-sm font-medium tracking-wider">THE 1 OF 1 CHAMPIONSHIP</p>
            </div>
            <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
              {[
                { value: timeLeft.days, label: "DÍAS" },
                { value: timeLeft.hours, label: "HORAS" },
                { value: timeLeft.minutes, label: "MIN" },
                { value: timeLeft.seconds, label: "SEG" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-red-500">{String(item.value).padStart(2, "0")}</div>
                  <div className="text-[8px] md:text-[10px] text-white/50 tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          {/* Stage Label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-white/20 flex-1" />
            <span className="text-white/70 text-xs tracking-[0.2em]">ETAPA CREYENTES</span>
            <div className="h-px bg-white/20 flex-1" />
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-2 gap-3">
            {/* Full Pass */}
            <div className="border border-white/20 p-4 hover:border-red-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border border-red-500/50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium tracking-wider text-sm">FULL PASS</h3>
                </div>
              </div>
              <p className="text-white/50 text-[10px] tracking-wider leading-relaxed mb-3">
                ACCESO A LAS 4 FECHAS<br />Y TODOS LOS COMBATES
              </p>
              <p className="text-red-500 text-xl font-light mb-4">
                $250.000 <span className="text-xs text-white/50">COP</span>
              </p>
              <button className="w-full py-2 border border-white/30 text-white text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                COMPRAR
              </button>
            </div>

            {/* Fight Pass */}
            <div className="border border-white/20 p-4 hover:border-red-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border border-red-500/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 3h10v2H7V3zm10 4H7v2h10V7zm0 4H7v2h10v-2zm-6 8h2v-4h-2v4zm8-14h-2v16h2V5zm-16 0H1v16h2V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium tracking-wider text-sm">FIGHT PASS</h3>
                </div>
              </div>
              <p className="text-white/50 text-[10px] tracking-wider leading-relaxed mb-3">
                ACCESO A 1 FECHA<br />Y TODOS LOS COMBATES
              </p>
              <p className="text-red-500 text-xl font-light mb-4">
                $100.000 <span className="text-xs text-white/50">COP</span>
              </p>
              <button className="w-full py-2 border border-white/30 text-white text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                COMPRAR
              </button>
            </div>
          </div>

          {/* Exclusive Pricing Note */}
          <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-[10px] tracking-wider">
            <Shield className="w-3 h-3" />
            <span>PRECIOS EXCLUSIVOS ETAPA CREYENTES. POR TIEMPO LIMITADO.</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto">
          <div 
            className="relative p-6 overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-white text-lg font-light tracking-wider italic">LOS CAMPEONES NO NACEN,</p>
                <p className="text-red-500 text-lg font-light tracking-wider italic">SE HACEN AQUÍ.</p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-xs tracking-widest flex items-center gap-2 transition-colors">
                ASEGURA TU LUGAR
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer Section */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <div className="border border-white/10 overflow-hidden">
            <div className="flex items-center">
              {/* Left Content */}
              <div className="flex-1 p-6">
                <p className="text-red-500 text-[10px] tracking-[0.2em] mb-2">REVIVE LA EXPERIENCIA</p>
                <h3 className="text-white text-xl font-light tracking-wider mb-4">THE 1 OF 1 CHAMPIONSHIP</h3>
                <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Play className="w-4 h-4" />
                  <span className="text-xs tracking-wider">VER TRAILER</span>
                </button>
              </div>
              {/* Right Image */}
              <div 
                className="w-1/3 h-32 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 border-t border-white/10">
        <div className="max-w-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-white text-sm tracking-wider">1 OF 1 FIRM</span>
            <div className="text-white/50 text-xs tracking-wider">
              <p>THIS IS NOT FOR EVERYONE.</p>
              <p className="text-red-500">#1UNIQUEEXPERIENCE</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {[
              { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
              { name: "WhatsApp", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
              { name: "TikTok", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
              { name: "Spotify", icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="text-white/50 hover:text-red-500 transition-colors"
                aria-label={social.name}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
