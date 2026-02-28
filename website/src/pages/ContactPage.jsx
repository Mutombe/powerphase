import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ArrowRight, Zap } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, SectionHeading, GlowCard } from '../components/ui/SharedComponents'
import { usePageSEO, pageSEOData } from '../utils/seo'
import { toast } from 'sonner'

export default function ContactPage() {
  usePageSEO(pageSEOData.contact)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '+263 777 040 676', href: 'tel:+263777040676', desc: 'Mon-Sat, 6AM - 6PM' },
    { icon: Mail, label: 'Email Us', value: 'shonayishepard1999@gmail.com', href: 'mailto:shonayishepard1999@gmail.com', desc: 'Response within 24hrs' },
    { icon: MapPin, label: 'Visit Us', value: 'Corner Clifton, 22 Clifton Rd', href: '#map', desc: 'Greendale Ave, Harare' },
    { icon: Clock, label: 'Working Hours', value: 'Mon - Sun: 6AM - 6PM', href: null, desc: 'Emergency: 24/7' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero - Asymmetric split */}
      <section className="relative min-h-[55vh] flex items-center bg-power-dark overflow-hidden">
        <div className="absolute inset-0">
          {/* Vision: Professional office/workshop environment, warm lighting */}
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Contact us" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-power-dark via-power-dark/95 to-power-dark/80" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-power-orange/8 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-6">
              <MessageSquare size={14} className="text-power-orange" />
              <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
              Let's Start a <span className="text-gradient-orange">Conversation</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 font-body leading-relaxed">
              Have a project in mind? Need a quote? Our team of expert engineers is ready to help you with any electrical challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-power-off-white relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
            {contactInfo.map((info, idx) => (
              <StaggerItem key={idx}>
                <GlowCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-power-orange/10 flex items-center justify-center mb-4">
                    <info.icon size={22} className="text-power-orange" />
                  </div>
                  <h3 className="text-sm font-accent font-semibold text-power-gray-mid uppercase tracking-wider">{info.label}</h3>
                  {info.href ? (
                    <a href={info.href} className="text-power-dark font-heading font-bold mt-1 block hover:text-power-orange transition-colors text-sm break-all">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-power-dark font-heading font-bold mt-1 text-sm">{info.value}</p>
                  )}
                  <p className="text-power-gray-mid text-xs font-body mt-1">{info.desc}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quote Form + Map Section */}
      <section className="py-24 md:py-32 bg-white relative" id="quote">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <SectionHeading
                overline="Free Quote"
                title={<>Request a <span className="text-gradient-orange">Free Quote</span></>}
                description="Fill out the form below and our team will get back to you with a detailed quote within 24 hours."
              />

              <AnimatedSection delay={0.2}>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-accent font-medium text-power-dark mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-power-gray-pale bg-power-off-white text-power-dark font-body focus:outline-none focus:border-power-orange focus:ring-2 focus:ring-power-orange/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-accent font-medium text-power-dark mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-power-gray-pale bg-power-off-white text-power-dark font-body focus:outline-none focus:border-power-orange focus:ring-2 focus:ring-power-orange/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-accent font-medium text-power-dark mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-power-gray-pale bg-power-off-white text-power-dark font-body focus:outline-none focus:border-power-orange focus:ring-2 focus:ring-power-orange/20 transition-all"
                        placeholder="+263 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-accent font-medium text-power-dark mb-2">Service Needed *</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-power-gray-pale bg-power-off-white text-power-dark font-body focus:outline-none focus:border-power-orange focus:ring-2 focus:ring-power-orange/20 transition-all appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="solar">Solar Installation</option>
                        <option value="electrical">Electrical Installation</option>
                        <option value="power-dist">Power Distribution</option>
                        <option value="automation">Industrial Automation</option>
                        <option value="maintenance">Maintenance & Repair</option>
                        <option value="generator">Generator Systems</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-accent font-medium text-power-dark mb-2">Project Details *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-power-gray-pale bg-power-off-white text-power-dark font-body focus:outline-none focus:border-power-orange focus:ring-2 focus:ring-power-orange/20 transition-all resize-none"
                      placeholder="Describe your project, location, and any specific requirements..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={sending || sent}
                    className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 font-accent font-bold text-base rounded-xl transition-all duration-300 ${
                      sent
                        ? 'bg-green-500 text-white'
                        : 'bg-power-orange text-white hover:bg-power-orange-dark hover:shadow-glow'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : sent ? (
                      <>
                        <CheckCircle2 size={20} /> Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Request
                      </>
                    )}
                  </motion.button>
                </form>
              </AnimatedSection>
            </div>

            {/* Map / Info - 2 columns */}
            <div className="lg:col-span-2" id="map">
              <AnimatedSection direction="right">
                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden shadow-card border border-power-gray-pale/50 h-80 lg:h-[400px] bg-power-gray-pale relative">
                  {/* Vision: Embedded Google Map showing Greendale, Harare location */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0889!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDUnMjAuMCJF!5e0!3m2!1sen!2szw!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Powerphase Location"
                    className="w-full h-full"
                  />
                </div>

                {/* Quick contact card below map */}
                <div className="mt-6 bg-power-dark rounded-2xl p-6">
                  <h3 className="text-white font-heading font-bold text-lg flex items-center gap-2">
                    <Zap size={18} className="text-power-orange" />
                    Quick Contact
                  </h3>
                  <div className="mt-4 space-y-3">
                    <a href="tel:+263777040676" className="flex items-center gap-3 text-white/60 hover:text-power-orange transition-colors text-sm font-body">
                      <Phone size={16} className="text-power-orange" />
                      +263 777 040 676
                    </a>
                    <a href="mailto:shonayishepard1999@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-power-orange transition-colors text-sm font-body break-all">
                      <Mail size={16} className="text-power-orange" />
                      shonayishepard1999@gmail.com
                    </a>
                    <div className="flex items-start gap-3 text-white/60 text-sm font-body">
                      <MapPin size={16} className="text-power-orange shrink-0 mt-0.5" />
                      Corner Clifton, 22 Clifton Rd, Greendale Ave, Harare, Zimbabwe
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Powerphase+Electrical+Engineering+Harare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-power-orange font-accent font-semibold text-sm hover:underline"
                  >
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
