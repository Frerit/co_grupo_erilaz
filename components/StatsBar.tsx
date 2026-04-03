'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '3+', label: 'Productos en producción activa' },
  { value: '+47K', label: 'Usuarios en plataformas construidas' },
  { value: '6 años', label: 'Especializados en proptech colombiano' },
  { value: '+12', label: 'Integraciones con el ecosistema' },
]

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="border-y border-zinc-800/50 bg-zinc-900/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-zinc-800/50">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="px-8 py-10"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-3xl font-bold tracking-tight text-zinc-100 mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 leading-snug max-w-[18ch]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
