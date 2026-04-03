'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, MapPin, ChartBar, DeviceMobile, Globe } from '@phosphor-icons/react'

/* ─── Browser Mockup Shell ─── */
function BrowserFrame({
  url,
  children,
  className = '',
}: {
  url: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-zinc-700/40 bg-zinc-900 shadow-[0_24px_64px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700/40">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/60" />
        <div className="flex-1 ml-2 bg-zinc-700/50 rounded px-3 py-0.5">
          <span className="text-[10px] text-zinc-500 font-mono">{url}</span>
        </div>
      </div>
      {children}
    </div>
  )
}

/* ─── NidoRaiz Mockup ─── */
function NidoRaizMockup() {
  return (
    <div className="p-5 bg-zinc-950/40 h-60">
      {/* Search bar */}
      <div className="flex items-center gap-2 bg-zinc-800/60 rounded-xl px-4 py-2.5 mb-4 border border-zinc-700/30">
        <div className="w-3.5 h-3.5 rounded-full border border-zinc-600 opacity-60" />
        <div className="h-1.5 w-32 bg-zinc-700/60 rounded" />
        <div className="ml-auto h-6 w-16 rounded-lg bg-emerald-500/80" />
      </div>
      {/* Property cards */}
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { price: '$380M', area: '72m²', rooms: '3 hab' },
          { price: '$245M', area: '58m²', rooms: '2 hab' },
          { price: '$520M', area: '95m²', rooms: '4 hab' },
        ].map((prop, i) => (
          <div key={i} className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700/30">
            <div
              className="h-14"
              style={{
                background: `linear-gradient(135deg,
                  rgba(16,185,129,${0.08 + i * 0.04}) 0%,
                  rgba(6,78,59,${0.15 + i * 0.05}) 100%)`,
              }}
            />
            <div className="p-2">
              <div className="text-[9px] font-semibold text-emerald-400">{prop.price}</div>
              <div className="text-[8px] text-zinc-500 mt-0.5">{prop.area} · {prop.rooms}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Erilaz Mockup ─── */
function ErilazMockup() {
  return (
    <div className="flex h-44">
      {/* Sidebar */}
      <div className="w-10 bg-zinc-800/50 border-r border-zinc-700/30 flex flex-col items-center py-4 gap-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-md ${i === 0 ? 'bg-emerald-500/70' : 'bg-zinc-700/50'}`}
          />
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-4 bg-zinc-950/30">
        <div className="h-2 w-20 bg-zinc-700/60 rounded mb-3" />
        <div className="grid grid-cols-3 gap-2 mb-3">
          {['24', '8', '91%'].map((v, i) => (
            <div key={i} className="bg-zinc-800/50 rounded-lg p-2 border border-zinc-700/30">
              <div className="text-[11px] font-bold text-zinc-200">{v}</div>
              <div className="h-1 w-8 bg-zinc-700/40 rounded mt-1" />
            </div>
          ))}
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-zinc-800/40 last:border-0">
            <div className="w-4 h-4 rounded-full bg-zinc-700/50" />
            <div className="flex-1 h-1.5 bg-zinc-700/40 rounded" />
            <div className="h-1.5 w-8 bg-emerald-500/30 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Camara Mockup ─── */
function CamaraMockup() {
  return (
    <div className="h-40 bg-zinc-950/30">
      <div className="h-8 bg-zinc-800/50 border-b border-zinc-700/30 flex items-center px-4 gap-4">
        <div className="h-3 w-16 bg-zinc-600/60 rounded" />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-1.5 w-10 bg-zinc-700/40 rounded" />
        ))}
      </div>
      <div className="p-4">
        <div className="h-16 rounded-xl bg-gradient-to-r from-zinc-800/60 to-zinc-700/30 border border-zinc-700/20 flex items-center px-4 gap-4">
          <div>
            <div className="h-2 w-28 bg-zinc-500/60 rounded mb-1.5" />
            <div className="h-1.5 w-20 bg-zinc-600/40 rounded" />
          </div>
          <div className="ml-auto h-7 w-20 rounded-lg bg-zinc-600/40" />
        </div>
      </div>
    </div>
  )
}

/* ─── Data ─── */
const PRODUCTS = [
  {
    name: 'NidoRaiz',
    url: 'nidoraiz.co',
    category: 'Portal Inmobiliario',
    description:
      'Plataforma de búsqueda, publicación y gestión de inmuebles que conecta familias colombianas con su próximo hogar. Motor de búsqueda inteligente, comparador de precios y gestión de proyectos nuevos.',
    tags: ['Portal de búsqueda', 'Publicación de inmuebles', 'Proyectos nuevos'],
    mockup: NidoRaizMockup,
    featured: true,
  },
  {
    name: 'Erilaz Platform',
    url: 'erilaz.co',
    category: 'CRM Inmobiliario',
    description:
      'Plataforma operativa para inmobiliarias que quieren gestionar clientes, propiedades y negocios desde un solo lugar. Pipeline de ventas, automatizaciones y reportes en tiempo real.',
    tags: ['CRM', 'Pipeline de ventas', 'Automatizaciones'],
    mockup: ErilazMockup,
    featured: false,
  },
  {
    name: 'Cámara Nacional Inmobiliaria',
    url: 'camaranacionalinmobiliaria.org',
    category: 'Plataforma Gremial',
    description:
      'Portal institucional y plataforma de servicios digitales para el gremio inmobiliario colombiano. Gestión de agremiados, publicaciones y eventos del sector.',
    tags: ['Plataforma institucional', 'Membresías', 'Contenido gremial'],
    mockup: CamaraMockup,
    featured: false,
  },
]

/* ─── Internal Tools Data ─── */
const TOOLS = [
  {
    icon: MapPin,
    category: 'Gestión territorial',
    name: 'Sistema de Gestión de Tierras y Master Plan',
    description:
      'Herramienta para gestión, análisis y seguimiento de predios, lotes y proyectos de master plan. Visualización geoespacial, fases de desarrollo y trazabilidad de trámites con entidades.',
    tags: ['GIS', 'Master plan', 'Predios', 'Fases de obra'],
    span: 'lg:col-span-2',
    accent: 'from-amber-500/8 to-amber-600/4',
    iconColor: 'text-amber-400',
    border: 'hover:border-amber-500/20',
  },
  {
    icon: ChartBar,
    category: 'Inteligencia de mercado',
    name: 'Herramientas de Análisis de Mercado',
    description:
      'Suite de análisis para entender precios por zona, absorción de proyectos, competencia y tendencias del mercado inmobiliario con datos en tiempo real.',
    tags: ['Precios por zona', 'Absorción', 'Tendencias'],
    span: 'lg:col-span-1',
    accent: 'from-sky-500/8 to-sky-600/4',
    iconColor: 'text-sky-400',
    border: 'hover:border-sky-500/20',
  },
  {
    icon: DeviceMobile,
    category: 'Producto mobile',
    name: 'Apps Mobile para el Sector',
    description:
      'Aplicaciones nativas y multiplataforma para compradores, agentes y administradores. Desde portales de búsqueda hasta herramientas de campo para asesores comerciales.',
    tags: ['React Native', 'iOS / Android', 'Offline first'],
    span: 'lg:col-span-1',
    accent: 'from-violet-500/8 to-violet-600/4',
    iconColor: 'text-violet-400',
    border: 'hover:border-violet-500/20',
  },
  {
    icon: Globe,
    category: 'Visibilidad digital',
    name: 'Posicionamiento y SEO Estratégico',
    description:
      'Estrategia y ejecución de SEO técnico y de contenidos para portales y proyectos inmobiliarios. Arquitectura de información, velocidad de carga, contenido por intención de búsqueda y posicionamiento local.',
    tags: ['SEO técnico', 'Contenido', 'Core Web Vitals', 'Local SEO'],
    span: 'lg:col-span-2',
    accent: 'from-emerald-500/8 to-emerald-600/4',
    iconColor: 'text-emerald-400',
    border: 'hover:border-emerald-500/20',
  },
]

/* ─── Tag Badge ─── */
function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-medium text-zinc-400 border border-zinc-700/50 bg-zinc-800/40 px-2.5 py-1 rounded-full">
      {label}
    </span>
  )
}

export default function Products() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = PRODUCTS[0]
  const secondary = PRODUCTS.slice(1)

  return (
    <section id="productos" className="py-28 lg:py-36" ref={ref}>
      <div className="max-w-7xl mx-auto px-5">

        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">
            Lo que hemos construido
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-100 mt-3 max-w-lg">
            Productos que ya mueven el mercado.
          </h2>
        </motion.div>

        {/* Asymmetric grid: featured left, secondary stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-5">

          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <BrowserFrame url={featured.url}>
              <featured.mockup />
            </BrowserFrame>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-medium text-emerald-400 uppercase tracking-widest">
                  {featured.category}
                </span>
                <h3 className="text-xl font-bold text-zinc-100 tracking-tight mt-1 mb-2">
                  {featured.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[52ch]">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {featured.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
              <a
                href={`https://${featured.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2.5 border border-zinc-800 hover:border-emerald-500/40 text-zinc-500 hover:text-emerald-400 rounded-xl transition-all duration-200 active:scale-[0.96] group-hover:border-zinc-700"
                aria-label={`Abrir ${featured.name}`}
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Secondary stack */}
          <div className="flex flex-col gap-5">
            {secondary.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.18 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <BrowserFrame url={product.url}>
                  <product.mockup />
                </BrowserFrame>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-medium text-emerald-400 uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-zinc-100 tracking-tight mt-1 mb-1.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-[42ch]">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {product.tags.map((t) => <Tag key={t} label={t} />)}
                    </div>
                  </div>
                  <a
                    href={`https://${product.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 border border-zinc-800 hover:border-emerald-500/40 text-zinc-500 hover:text-emerald-400 rounded-xl transition-all duration-200 active:scale-[0.96]"
                    aria-label={`Abrir ${product.name}`}
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ─── Additional capabilities ─── */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Sub-header */}
          <div className="flex items-end justify-between mb-10 border-t border-zinc-800/50 pt-12">
            <div>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                También hemos construido
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-zinc-100 mt-2">
                Capacidades y herramientas del ecosistema.
              </h3>
            </div>
            <span className="hidden md:block text-xs text-zinc-600 text-right max-w-[28ch] leading-relaxed">
              Herramientas construidas para clientes y proyectos específicos del sector.
            </span>
          </div>

          {/* Bento grid: 3 columns, rows alternate 2+1 / 1+2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {TOOLS.map((tool, i) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  className={`
                    relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/50
                    p-7 flex flex-col gap-5
                    transition-all duration-300 group cursor-default
                    ${tool.span} ${tool.border}
                    hover:bg-zinc-900/80
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.42 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Ambient gradient bg */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Top row: icon + badge */}
                  <div className="relative flex items-start justify-between">
                    <div className={`p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/40 ${tool.iconColor} group-hover:border-zinc-700 transition-colors`}>
                      <Icon size={20} weight="duotone" />
                    </div>
                    <span className="text-[9px] font-medium text-zinc-600 border border-zinc-800 bg-zinc-900 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tool.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col gap-2.5">
                    <h4 className="text-base font-bold text-zinc-100 tracking-tight leading-snug">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{tool.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="relative flex flex-wrap gap-1.5">
                    {tool.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-medium text-zinc-600 border border-zinc-800/80 px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
