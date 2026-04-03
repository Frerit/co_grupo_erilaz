'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'

const WORDS = ['proptech', 'inmobiliario', 'digital', 'escalable'] as const

function useTypewriter(words: readonly string[]) {
  const [text, setText] = useState('')
  const [wIndex, setWIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const word = words[wIndex]
    const delay = deleting
      ? text.length === 0 ? 400 : 38
      : text.length === word.length ? 2200 : 78

    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < word.length) setText(word.slice(0, text.length + 1))
        else setDeleting(true)
      } else {
        if (text.length > 0) setText(text.slice(0, -1))
        else { setDeleting(false); setWIndex((i) => (i + 1) % words.length) }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, wIndex, words, mounted])

  return mounted ? text : ''
}

function ProductCard({
  name, url, desc, className,
}: { name: string; url: string; desc: string; className: string }) {
  return (
    <div
      className={`absolute bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/40 rounded-2xl p-4 w-56
        shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
        <span className="text-[10px] font-mono text-zinc-500 tracking-wide">{url}</span>
      </div>
      <p className="text-sm font-semibold text-zinc-100 leading-tight">{name}</p>
      <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug">{desc}</p>
    </div>
  )
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as number[] },
})

export default function Hero() {
  const displayText = useTypewriter(WORDS)

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center overflow-hidden dot-grid"
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-emerald-950/20 pointer-events-none" />
      <div className="absolute top-1/4 right-[30%] w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 w-full pt-28 pb-20 lg:pt-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] items-center min-h-[100dvh]">

          {/* ─── Left Content ─── */}
          <div className="max-w-2xl py-24 lg:py-0">

            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 border border-emerald-500/20 bg-emerald-500/[0.07] px-3.5 py-1.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                Fábrica de Software · Proptech
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tighter leading-[1.04] text-zinc-100 mb-6"
              {...fadeUp(0.08)}
            >
              Construimos el software
              <br />
              que el sector{' '}
              <span className="text-emerald-400">
                {displayText}
                <span className="animate-blink ml-0.5 text-emerald-300/60">|</span>
              </span>
              <br />
              necesita.
            </motion.h1>

            {/* Body */}
            <motion.p
              className="text-base text-zinc-400 leading-relaxed max-w-[54ch] mb-10"
              {...fadeUp(0.16)}
            >
              Somos una fábrica de software colombiana especializada en proptech.
              Diseñamos, desarrollamos y escalamos productos digitales que ya
              mueven el mercado inmobiliario de Colombia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              {...fadeUp(0.24)}
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97] group"
              >
                Cuéntanos tu proyecto
                <ArrowRight
                  size={15}
                  weight="bold"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2 text-zinc-300 hover:text-zinc-100 font-medium px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-200 active:scale-[0.97] text-sm"
              >
                Ver nuestros productos
                <ArrowUpRight size={14} className="opacity-50" />
              </a>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              className="mt-14 pt-8 border-t border-zinc-800/60"
              {...fadeUp(0.32)}
            >
              <p className="text-[11px] text-zinc-600 uppercase tracking-widest mb-4 font-medium">
                Productos que ya están en producción
              </p>
              <div className="flex flex-wrap items-center gap-5">
                {['nidoraiz.co', 'erilaz.co', 'camaranacionalinmobiliaria.org'].map((d) => (
                  <span key={d} className="text-xs text-zinc-500 font-mono">{d}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── Right Visual ─── */}
          <div className="hidden lg:block relative h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-90">

                {/* SVG connection lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ zIndex: 0 }}
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                      <stop offset="50%" stopColor="#10b981" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Center → top-left card */}
                  <line
                    x1="50%" y1="50%" x2="22%" y2="18%"
                    stroke="url(#lg1)" strokeWidth="1"
                    strokeDasharray="5 5" className="svg-dash"
                  />
                  {/* Center → top-right card */}
                  <line
                    x1="50%" y1="50%" x2="78%" y2="28%"
                    stroke="url(#lg1)" strokeWidth="1"
                    strokeDasharray="5 5" className="svg-dash"
                    style={{ animationDelay: '-1.2s' }}
                  />
                  {/* Center → bottom-left card */}
                  <line
                    x1="50%" y1="50%" x2="20%" y2="78%"
                    stroke="url(#lg1)" strokeWidth="1"
                    strokeDasharray="5 5" className="svg-dash"
                    style={{ animationDelay: '-2s' }}
                  />
                </svg>

                {/* Central node */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.35)] p-3.5">
                      <img
                        src="/images/logo.svg"
                        alt="Erilaz Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Product cards */}
                <motion.div
                  className="animate-float-a"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProductCard
                    name="NidoRaiz"
                    url="nidoraiz.co"
                    desc="Portal inmobiliario para familias colombianas"
                    className="top-10 left-4"
                  />
                </motion.div>

                <motion.div
                  className="animate-float-b"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProductCard
                    name="Erilaz Platform"
                    url="erilaz.co"
                    desc="CRM y operaciones para inmobiliarias"
                    className="top-24 right-2"
                  />
                </motion.div>

                <motion.div
                  className="animate-float-c"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProductCard
                    name="Cámara Nacional Inmobiliaria"
                    url="camaranacionalinmobiliaria.org"
                    desc="Presencia digital del gremio colombiano"
                    className="bottom-20 left-8 w-64"
                  />
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  )
}
