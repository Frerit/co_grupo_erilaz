'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico',
    subtitle: '1–2 semanas',
    desc: 'Entendemos tu negocio, tu cliente y el mercado donde compites. Sin suposiciones. Hacemos las preguntas incómodas que otros evitan.',
  },
  {
    n: '02',
    title: 'Diseño de solución',
    subtitle: '2–3 semanas',
    desc: 'Arquitectura técnica y diseño de producto. Definimos el alcance exacto, los flujos clave y los criterios de éxito. Nada es genérico.',
  },
  {
    n: '03',
    title: 'Construcción iterativa',
    subtitle: 'Sprints de 2 semanas',
    desc: 'Entregas reales cada dos semanas. Demos constantes. Tu feedback entra en el siguiente sprint. Visibilidad total, sin cajas negras.',
  },
  {
    n: '04',
    title: 'Lanzamiento',
    subtitle: 'Deploy a producción',
    desc: 'El producto sale al mercado con usuarios reales. Monitoreamos métricas de adopción, estabilidad y negocio desde el día uno.',
  },
  {
    n: '05',
    title: 'Escala',
    subtitle: 'A largo plazo',
    desc: 'Iteramos contigo. A medida que el negocio crece, el producto crece. Somos el equipo técnico que permanece, no el que desaparece.',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proceso" className="py-28 lg:py-36 border-t border-zinc-800/40 bg-zinc-900/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <motion.div
          className="mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">
            Cómo trabajamos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-100 mt-3">
            Un proceso construido para el sector inmobiliario.
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical mobile */}
        <div className="hidden lg:grid grid-cols-5 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Circle */}
              <div className="relative z-10 w-14 h-14 rounded-full border border-zinc-700 bg-zinc-950 flex items-center justify-center mb-5 group-hover:border-emerald-500/40 transition-colors">
                <span className="text-xs font-bold text-zinc-500 font-mono">{step.n}</span>
                {i === 0 && (
                  <span className="absolute inset-0 rounded-full bg-emerald-500/10 border border-emerald-500/30" />
                )}
              </div>

              <div className="text-[10px] font-medium text-emerald-400 mb-1.5 uppercase tracking-widest">
                {step.subtitle}
              </div>
              <h3 className="text-sm font-bold text-zinc-100 tracking-tight mb-2">{step.title}</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              className="grid grid-cols-[48px_1fr] gap-5 pb-10 last:pb-0 relative"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Vertical line */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-zinc-700/60 to-transparent" />
              )}

              {/* Circle */}
              <div className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-950 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-zinc-500 font-mono">{step.n}</span>
              </div>

              <div className="pt-1">
                <div className="text-[10px] font-medium text-emerald-400 mb-1 uppercase tracking-widest">
                  {step.subtitle}
                </div>
                <h3 className="text-base font-bold text-zinc-100 tracking-tight mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
