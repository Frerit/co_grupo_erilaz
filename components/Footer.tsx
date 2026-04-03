import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const PRODUCTS = [
  { label: 'NidoRaiz', href: 'https://nidoraiz.co', external: true },
  { label: 'Erilaz', href: 'https://erilaz.co', external: true },
  {
    label: 'Cámara Nacional Inmobiliaria',
    href: 'https://camaranacionalinmobiliaria.org',
    external: true,
  },
]

const SERVICES = [
  'Desarrollo de Producto',
  'Consultoría Proptech',
  'Integraciones del Ecosistema',
  'UX/UI Especializado',
]

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/grupoerilaz' },
  { label: 'Instagram', href: 'https://instagram.com/grupoerilaz' },
  { label: 'GitHub', href: 'https://github.com/grupoerilaz' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/40 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-5">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 py-16">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/images/logo-erilaz.svg"
                alt="Grupo Erilaz"
                className="h-7 w-auto"
              />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mb-6 max-w-[32ch]">
              Fábrica de software especializada en proptech. Construimos los productos
              digitales que el sector inmobiliario colombiano necesita.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a href="#nosotros" className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-widest">
                Sobre Nosotros &rarr;
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest mb-5">
              Productos
            </p>
            <div className="flex flex-col gap-3">
              {PRODUCTS.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target={p.external ? '_blank' : undefined}
                  rel={p.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors group"
                >
                  {p.label}
                  {p.external && (
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-60 transition-opacity"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest mb-5">
              Servicios
            </p>
            <div className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <a
                  key={s}
                  href="#servicios"
                  className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest mb-5">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:grupo@erilaz.co"
                className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                grupo@erilaz.co
              </a>
              <span className="text-sm text-zinc-600">Medellín, Colombia</span>
              <a
                href="#contacto"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Iniciar un proyecto
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800/40 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-zinc-700">
            &copy; {new Date().getFullYear()} Grupo Erilaz S.A.S — Medellín, Colombia
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[11px] text-zinc-700 hover:text-zinc-500 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-[11px] text-zinc-700 hover:text-zinc-500 transition-colors">
              Términos de uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
