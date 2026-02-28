import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sun, Battery, Zap, CheckCircle2, ArrowRight, Phone, Shield, Clock, Award, ChevronDown } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, SectionHeading, CTAButton, GlowCard, DarkCard, Counter } from '../components/ui/SharedComponents'
import { usePageSEO, pageSEOData } from '../utils/seo'

const solarPackages = [
  { name: '3.5 KVA System', price: '$1,800', powers: 'Lights, TV, Fridge, Small Appliances', panels: '410W × 4', inverter: '3.5KVA Hybrid', battery: '48V 50Ah Lithium', popular: false },
  { name: '6.2 KVA System', price: '$2,900', powers: '3 Fridges, TV, Borehole (4HP), Booster Pump (2HP), Lights, PA System', panels: '410W × 6 Monocrystalline', inverter: '6.2KVA Hybrid', battery: '48V 100Ah Lithium', popular: true },
  { name: '10 KVA System', price: '$5,200', powers: 'Full House, Workshop, Commercial Use', panels: '410W × 12', inverter: '10KVA Hybrid', battery: '48V 200Ah Lithium', popular: false },
  { name: '20 KVA System', price: '$12,500', powers: 'Large Commercial, Small Industrial', panels: '410W × 24', inverter: '20KVA Hybrid', battery: '48V 400Ah Lithium', popular: false },
]

const faqs = [
  { q: 'How long does a solar installation take?', a: 'Most residential installations are completed within 1-3 days. Larger commercial systems may take 1-2 weeks depending on complexity.' },
  { q: 'What warranty do you offer?', a: 'We provide a 25-year warranty on solar panels, 10 years on inverters, and 5 years on lithium batteries. Labor warranty is 2 years.' },
  { q: 'Can I expand my system later?', a: 'Absolutely! All our systems are designed to be scalable. You can add more panels and batteries as your needs grow.' },
  { q: 'Do you handle the permits?', a: 'Yes, we manage the entire process including council permits, ZESA applications, and all regulatory compliance.' },
  { q: 'What happens during load shedding?', a: 'Your solar system with battery backup provides seamless power transition. You won\'t even notice when grid power drops.' },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-power-gray-pale/50 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-power-dark font-accent font-semibold pr-4 group-hover:text-power-orange transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-power-orange shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
        <p className="pb-5 text-power-gray-mid font-body text-sm leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  )
}

export default function SolarPage() {
  usePageSEO(pageSEOData.solar)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero - Different layout: split diagonal */}
      <section className="relative min-h-[70vh] flex items-center bg-power-dark overflow-hidden">
        <div className="absolute inset-0">
          {/* Vision: Beautiful solar farm or rooftop solar panels with golden sunrise */}
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80" alt="Solar energy" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-power-dark via-power-dark/90 to-power-orange/10" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-6">
                <Sun size={14} className="text-power-orange" />
                <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">Solar Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
                Harness the <span className="text-gradient-orange">Sun's Power</span>
              </h1>
              <p className="mt-6 text-lg text-white/50 font-body leading-relaxed">
                Complete solar system packages designed for Zimbabwe's energy needs. Cut your electricity costs by up to 80% with our premium installations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton to="/contact#quote">Get Solar Quote</CTAButton>
                <a href="tel:+263777040676" className="flex items-center gap-2 px-6 py-3 border-2 border-white/15 text-white font-accent font-medium rounded-xl hover:border-power-orange/50 transition-all">
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </motion.div>

            <motion.div className="hidden lg:grid grid-cols-2 gap-4" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              {[
                { icon: Sun, label: 'Monocrystalline', value: '410W Panels' },
                { icon: Battery, label: 'Lithium Battery', value: '48V Systems' },
                { icon: Zap, label: 'Hybrid Inverter', value: 'Up to 20KVA' },
                { icon: Shield, label: 'Full Warranty', value: '25 Year Panels' },
              ].map((item, idx) => (
                <motion.div key={idx} className="glass-card p-5" animate={{ y: [0, idx % 2 === 0 ? -6 : 6, 0] }} transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}>
                  <item.icon size={24} className="text-power-orange mb-3" />
                  <div className="text-white font-accent font-semibold text-sm">{item.label}</div>
                  <div className="text-power-orange text-xs font-mono mt-1">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 md:py-32 bg-power-off-white relative" id="packages">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline="Solar Packages" title={<>Choose Your <span className="text-gradient-orange">Solar System</span></>} description="From compact home systems to large commercial installations, we have the perfect package." align="center" />

          <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {solarPackages.map((pkg, idx) => (
              <StaggerItem key={idx}>
                <motion.div className={`relative bg-white rounded-2xl border ${pkg.popular ? 'border-power-orange shadow-glow' : 'border-power-gray-pale/50 shadow-card'} overflow-hidden h-full flex flex-col`} whileHover={{ y: -8 }}>
                  {pkg.popular && (
                    <div className="bg-power-orange text-white text-xs font-accent font-bold text-center py-2 tracking-wider uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-power-dark">{pkg.name}</h3>
                    <div className="mt-3">
                      <span className="text-3xl font-heading font-bold text-gradient-orange">{pkg.price}</span>
                    </div>
                    <p className="text-power-gray-mid text-xs font-body mt-2 italic">{pkg.powers}</p>
                    <div className="mt-6 space-y-3 flex-1">
                      {[
                        { label: 'Panels', value: pkg.panels },
                        { label: 'Inverter', value: pkg.inverter },
                        { label: 'Battery', value: pkg.battery },
                        { label: 'Extras', value: 'Protection + Mounting Kit' },
                      ].map((spec, sidx) => (
                        <div key={sidx} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-power-orange shrink-0 mt-0.5" />
                          <div>
                            <span className="text-power-dark font-accent text-xs font-semibold">{spec.label}: </span>
                            <span className="text-power-gray-mid text-xs font-body">{spec.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <CTAButton to="/contact#quote" variant={pkg.popular ? 'primary' : 'outline'} className="w-full justify-center mt-6">
                      Get This Package
                    </CTAButton>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline="FAQs" title={<>Common <span className="text-gradient-orange">Questions</span></>} align="center" />
          <AnimatedSection className="mt-12 bg-power-off-white rounded-2xl p-6 md:p-8">
            {faqs.map((faq, idx) => <FAQItem key={idx} question={faq.q} answer={faq.a} />)}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-power-orange to-power-orange-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Start Saving <span className="text-white/80">Today</span></h2>
            <p className="text-white/70 font-body mt-4">Free site assessment and detailed quote within 24 hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CTAButton to="/contact#quote" variant="secondary">Request Free Assessment</CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
