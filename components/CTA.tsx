'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle, WarningCircle } from '@phosphor-icons/react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  company: string
  project: string
}

interface FormErrors {
  name?: string
  company?: string
  project?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Tu nombre es requerido'
  if (!data.company.trim()) errors.company = 'El nombre de tu empresa es requerido'
  if (!data.project.trim() || data.project.trim().length < 20)
    errors.project = 'Cuéntanos un poco más sobre tu proyecto (mínimo 20 caracteres)'
  return errors
}

const INPUT_BASE =
  'w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-all duration-200 focus:border-emerald-500/60 focus:bg-zinc-900 focus:ring-2 focus:ring-emerald-500/10'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormData>({ name: '', company: '', project: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [state, setState] = useState<FormState>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setState('loading')
    // Simulated async submit — replace with your endpoint
    await new Promise((r) => setTimeout(r, 1400))
    setState('success')
  }

  return (
    <section id="contacto" className="py-28 lg:py-36 border-t border-zinc-800/40" ref={ref}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">
              Trabajemos juntos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-100 mt-3 mb-6 leading-[1.06]">
              ¿Tienes un proyecto inmobiliario que necesita tecnología de verdad?
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-[50ch] mb-10">
              Hemos construido herramientas que el mercado colombiano ya usa.
              Ahora queremos construir la tuya. No hacemos promesas de agencia;
              hacemos producto.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-3">
              {[
                'Respuesta en menos de 24 horas',
                'Primera sesión de diagnóstico sin costo',
                'Propuesta técnica detallada incluida',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-zinc-400">
                  <CheckCircle size={16} weight="duotone" className="text-emerald-400 shrink-0" />
                  {point}
                </div>
              ))}
            </div>

            {/* Divider + contact alt */}
            <div className="mt-12 pt-8 border-t border-zinc-800/60">
              <p className="text-xs text-zinc-600 mb-3">O escríbenos directamente</p>
              <a
                href="mailto:hola@grupoerilaz.co"
                className="text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                hola@grupoerilaz.co
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl">
                <CheckCircle size={40} weight="duotone" className="text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-zinc-100 tracking-tight mb-2">
                  ¡Recibimos tu mensaje!
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[34ch]">
                  Te contactaremos en menos de 24 horas para agendar una primera
                  sesión de diagnóstico.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-zinc-900/50 border border-zinc-800/60 rounded-2xl p-8 flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-medium text-zinc-400">
                    Tu nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Andrés Morales"
                    value={form.name}
                    onChange={handleChange}
                    className={`${INPUT_BASE} ${errors.name ? 'border-red-500/50' : 'border-zinc-800'}`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 flex items-center gap-1.5">
                      <WarningCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-medium text-zinc-400">
                    Empresa o proyecto
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Inmobiliaria Del Norte S.A.S"
                    value={form.company}
                    onChange={handleChange}
                    className={`${INPUT_BASE} ${errors.company ? 'border-red-500/50' : 'border-zinc-800'}`}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-400 flex items-center gap-1.5">
                      <WarningCircle size={12} /> {errors.company}
                    </p>
                  )}
                </div>

                {/* Project */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="project" className="text-xs font-medium text-zinc-400">
                    ¿Qué quieres construir?
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto, qué problema resuelve y en qué etapa estás..."
                    value={form.project}
                    onChange={handleChange}
                    className={`${INPUT_BASE} resize-none ${errors.project ? 'border-red-500/50' : 'border-zinc-800'}`}
                  />
                  {errors.project && (
                    <p className="text-xs text-red-400 flex items-center gap-1.5">
                      <WarningCircle size={12} /> {errors.project}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97] group"
                >
                  {state === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <ArrowRight
                        size={15}
                        weight="bold"
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </>
                  )}
                </button>

                {state === 'error' && (
                  <p className="text-xs text-red-400 text-center">
                    Algo salió mal. Escríbenos directamente a hola@grupoerilaz.co
                  </p>
                )}
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
