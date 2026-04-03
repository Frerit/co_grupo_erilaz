'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  UsersThree,
  Buildings,
  Pulse,
  MapPin,
  Buildings as BuildingsIcon,
  ShieldCheck,
} from '@phosphor-icons/react'

const PILLARS = [
  {
    icon: BuildingsIcon,
    title: 'Especialización Proptech',
    description: 'Más de 6 años dedicados exclusivamente a transformar el sector inmobiliario a través de tecnología de alto impacto.',
    highlight: '6+ Años',
  },
  {
    icon: Pulse,
    title: 'Agilidad de Ejecución',
    description: 'De la idea al mercado en semanas. Nuestra metodología ágil garantiza productos funcionales en tiempos récord.',
    highlight: 'MVP-Ready',
  },
  {
    icon: MapPin,
    title: 'Desde Medellín para Latam',
    description: 'Combinamos el talento técnico de Medellín con una visión profunda del mercado inmobiliario latinoamericano.',
    highlight: 'ADN Digital',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="nosotros" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background glow shadow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side: Narrative */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1 rounded-full mb-6">
                Conoce a Grupo Erilaz
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-100 leading-tight mb-8">
                Tecnología con raíces en Medellín, <br className="hidden md:block" />
                <span className="text-zinc-500 italic block mt-1">visión inmobiliaria global.</span>
              </h2>
              
              <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed max-w-[50ch]">
                <p>
                  Nacimos con un propósito claro: <strong className="text-zinc-200">eliminar la fricción tecnológica</strong> en el sector inmobiliario. No somos solo desarrolladores; entendemos el lenguaje del bróker, del constructor y del cliente final.
                </p>
                <p>
                  Desde nuestra sede en Medellín, Colombia, hemos construido las plataformas que hoy mueven las operaciones de las inmobiliarias más innovadoras del país.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-zinc-800/60">
                <div>
                  <p className="text-2xl font-bold text-zinc-100">6+</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Años de experiencia</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-zinc-100">100%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Enfoque Proptech</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side: Pillars Grid */}
          <div className="grid grid-cols-1 gap-4">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 hover:border-emerald-500/30 p-6 rounded-2xl transition-all duration-300"
                >
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300 shadow-lg">
                      <Icon size={24} weight="duotone" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] font-mono text-zinc-600 bg-zinc-800/80 px-2 py-0.5 rounded uppercase">
                          {pillar.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
