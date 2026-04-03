'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Rocket,
  ChartLineUp,
  Plug,
  PenNib,
} from '@phosphor-icons/react'

const SERVICES = [
  {
    number: '01',
    icon: Rocket,
    name: 'Desarrollo de Producto',
    short: 'De la idea al mercado en semanas, no en meses.',
    description:
      'Construimos MVPs que llegan a producción real. Metodología ágil con entregas continuas, demos cada dos semanas y visibilidad total del proceso. Sin promesas vacías, solo producto funcionando.',
    tags: ['MVP', 'Entregas continuas', 'React / Next.js', 'Node.js'],
  },
  {
    number: '02',
    icon: ChartLineUp,
    name: 'Consultoría Proptech',
    short: 'Tu proceso comercial convertido en tecnología que funciona.',
    description:
      'Entendemos el ciclo de ventas inmobiliario por dentro. Mapeamos tu operación y diseñamos la solución tecnológica que la hace escalar, sin sobre-ingeniería y sin perder de vista el negocio.',
    tags: ['Diagnóstico técnico', 'Roadmap de producto', 'Arquitectura'],
  },
  {
    number: '03',
    icon: Plug,
    name: 'Integraciones del Ecosistema',
    short: 'Tu negocio conectado al ecosistema inmobiliario completo.',
    description:
      'Conectamos tus sistemas con portales inmobiliarios, MLS, firmas digitales, plataformas de pagos y herramientas de gestión. El ecosistema proptech, integrado a tu operación.',
    tags: ['APIs inmobiliarias', 'Portales', 'Firmas digitales', 'Pagos'],
  },
  {
    number: '04',
    icon: PenNib,
    name: 'UX/UI Especializado',
    short: 'Interfaces diseñadas para el comprador, el agente y el desarrollador.',
    description:
      'Sabemos cómo funciona el flujo de compra inmobiliaria: desde la búsqueda hasta el cierre. Diseñamos experiencias que convierten, porque entendemos al usuario del sector.',
    tags: ['Research inmobiliario', 'Diseño de flujos', 'Prototipado', 'Testing'],
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-28 lg:py-36 border-t border-zinc-800/40" ref={ref}>
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">
              Lo que construimos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-100 mt-3">
              Software hecho para el sector inmobiliario.
            </h2>
          </motion.div>
          <motion.p
            className="text-sm text-zinc-400 leading-relaxed max-w-[50ch] self-end"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Seis años construyendo proptech en Colombia nos dan una ventaja clara:
            conocemos el sector desde adentro. Cada servicio que ofrecemos está
            calibrado para la realidad del mercado inmobiliario latinoamericano.
          </motion.p>
        </div>

        {/* Services list */}
        <div className="divide-y divide-zinc-800/50">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.number}
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr_320px] gap-6 lg:gap-12 py-10 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Number + icon */}
                <div className="flex items-start gap-4 lg:flex-col lg:gap-5">
                  <span className="text-[2.5rem] font-bold tracking-tighter text-zinc-800 leading-none group-hover:text-zinc-700 transition-colors">
                    {service.number}
                  </span>
                  <div className="lg:mt-auto p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-200">
                    <Icon size={20} weight="duotone" />
                  </div>
                </div>

                {/* Name + description */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-100 tracking-tight mb-1.5">
                    {service.name}
                  </h3>
                  <p className="text-sm font-medium text-zinc-400 mb-3">{service.short}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-[50ch]">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 content-start lg:justify-end lg:pt-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
