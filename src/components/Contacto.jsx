import { useState } from 'react'
import { toast } from 'sonner'

const initialForm = { nombre: '', email: '', mensaje: '' }
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const contactInfo = [
  { icon: 'mail',            label: 'EMAIL',    value: 'jg.cabello@icloud.com',  color: 'text-primary',   bg: 'bg-primary/10' },
  { icon: 'alternate_email', label: 'LINKEDIN', value: '/in/joaquingdeveloper',  color: 'text-secondary', bg: 'bg-secondary/10' },
  { icon: 'terminal',        label: 'GITHUB',   value: '@Juakoo2103',            color: 'text-tertiary',  bg: 'bg-tertiary/10' },
]

export default function Contacto() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const set = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const errs = {
      nombre: !form.nombre,
      email: !emailRe.test(form.email),
      mensaje: !form.mensaje,
    }
    setErrors(errs)
    if (Object.values(errs).some(Boolean)) return
    toast.success('Mensaje enviado correctamente')
    setForm(initialForm)
    setErrors({})
  }

  const inputBase = 'w-full bg-surface-container-low py-3 px-0 text-on-surface text-sm transition-all outline-none placeholder:text-outline border-0 border-b focus:border-secondary'

  return (
    <section className="py-28 px-5 md:px-16 max-w-[1200px] mx-auto" id="contacto">
      <div className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2" data-usal="fade-u duration-600">
        {/* Left */}
        <div
          className="p-10 md:p-16"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(125,76,231,0.08) 100%)' }}
        >
          <h2
            className="text-on-surface mb-6 text-3xl font-semibold"
            style={{ fontFamily: '"Geist", sans-serif', letterSpacing: '-0.02em' }}
          >
            Hablemos de tu próximo proyecto
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed mb-12" style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>
            ¿Tienes una idea innovadora o buscas un desarrollador front-end comprometido? Estoy disponible para colaboraciones y nuevos retos.
          </p>

          <div className="space-y-8">
            {contactInfo.map(({ icon, label, value, color, bg }) => (
              <div key={label} className="flex items-center gap-5">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center bg-surface-container-highest ${bg}`}>
                  <span className={`material-symbols-outlined text-xl ${color}`}>{icon}</span>
                </div>
                <div>
                  <p
                    className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mb-0.5"
                    style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
                  >
                    {label}
                  </p>
                  <p className="text-on-surface text-sm" style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-10 md:p-16">
          <form onSubmit={submit} noValidate className="space-y-6">
            {[
              { id: 'nombre',  label: 'Nombre Completo', type: 'text',  placeholder: 'Tu nombre' },
              { id: 'email',   label: 'Correo Electrónico', type: 'email', placeholder: 'hola@mundo.com' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mb-2"
                  style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={set(id)}
                  className={`${inputBase} ${errors[id] ? 'border-error' : 'border-outline-variant/30'}`}
                  style={{ fontFamily: '"Hanken Grotesk", sans-serif', background: 'transparent' }}
                />
                {errors[id] && (
                  <p className="text-error text-xs mt-1">{id === 'email' ? 'Ingresa un email válido.' : 'Este campo es requerido.'}</p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="mensaje"
                className="block text-on-surface-variant text-[11px] font-bold uppercase tracking-widest mb-2"
                style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                placeholder="¿En qué puedo ayudarte?"
                value={form.mensaje}
                onChange={set('mensaje')}
                className={`${inputBase} resize-none ${errors.mensaje ? 'border-error' : 'border-outline-variant/30'}`}
                style={{ fontFamily: '"Hanken Grotesk", sans-serif', background: 'transparent' }}
              />
              {errors.mensaje && (
                <p className="text-error text-xs mt-1">Este campo es requerido.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-on-primary-container transition-all hover:shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:scale-[1.01]"
              style={{ background: '#2563eb', fontFamily: '"Hanken Grotesk", sans-serif' }}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
