import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Sun, Building2, Wrench, Shield, Cable, Lightbulb, Factory, ArrowUpRight } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, SectionHeading, CTAButton } from '../components/ui/SharedComponents'
import { usePageSEO, pageSEOData } from '../utils/seo'

const services = [
  { icon: Sun, slug: 'solar-solutions', title: 'Solar Energy Solutions', desc: 'Complete solar panel installations — monocrystalline panels, hybrid inverters, lithium batteries, mounting kits, and protection systems. From 3KVA residential to 20KVA+ commercial.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80', tags: ['Solar Panels', 'Inverters', 'Batteries', 'Off-Grid'], featured: true },
  { icon: Zap, slug: 'power-distribution', title: 'Power Distribution', desc: 'High voltage and low voltage distribution systems, transformer installation, switchgear commissioning, and substation design for industrial and commercial facilities.', image: 'https://images.unsplash.com/photo-1753272691001-4d68806ac590?w=800&q=80', tags: ['HV/LV', 'Transformers', 'Switchgear'] },
  { icon: Building2, slug: 'industrial-automation', title: 'Industrial Automation', desc: 'PLC programming, SCADA integration, motor control centers, and comprehensive automation solutions for manufacturing, mining, and processing industries.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80', tags: ['PLC', 'SCADA', 'Automation'] },
  { icon: Wrench, slug: 'electrical-installations', title: 'Electrical Installations', desc: 'Full electrical installations for commercial buildings, residential homes, and industrial facilities. DB board installations, cable management, and lighting systems.', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80', tags: ['Commercial', 'Residential', 'Industrial'] },
  { icon: Shield, slug: 'maintenance', title: 'Maintenance & Repair', desc: 'Preventive maintenance programs, fault finding and diagnostics, emergency repair services, thermal imaging inspections, and compliance testing.', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80', tags: ['Preventive', 'Emergency', 'Testing'] },
  { icon: Cable, slug: 'generators', title: 'Generator Systems', desc: 'Standby and prime power generator installation, automatic transfer switches, load bank testing, and comprehensive generator maintenance programs.', image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=800&q=80', tags: ['Standby', 'Diesel', 'ATS'] },
  { icon: Lightbulb, slug: 'lighting-design', title: 'Lighting Design', desc: 'Professional LED lighting design, energy-efficient retrofits, architectural lighting, outdoor and landscape lighting, and smart lighting control systems.', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', tags: ['LED', 'Smart', 'Design'] },
  { icon: Factory, slug: 'project-management', title: 'Project Management', desc: 'End-to-end electrical project management from feasibility studies and design through to installation, commissioning, and handover documentation.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', tags: ['Design', 'Install', 'Commission'] },
]

export default function ServicesPage() {
  usePageSEO(pageSEOData.services)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-power-dark overflow-hidden">
        <div className="absolute inset-0">
          {/* Vision: Wide angle shot of electrical engineering work, sparks, industrial */}
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80" alt="Engineering services" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-power-dark/90 to-power-dark" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-6">
              <Wrench size={14} className="text-power-orange" />
              <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">Our Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight max-w-4xl">
              Comprehensive Electrical <span className="text-gradient-orange">Engineering Services</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 font-body max-w-2xl">Every phase of power. Every aspect of engineering. One trusted partner.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-power-off-white relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {services.map((service, idx) => (
              <StaggerItem key={idx}>
                <Link to={service.slug === 'solar-solutions' ? '/solar-solutions' : `/services/${service.slug}`}>
                  <motion.div
                    className={`group relative bg-white rounded-2xl border border-power-gray-pale/50 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 ${service.featured ? 'md:col-span-2' : ''}`}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`grid ${service.featured ? 'md:grid-cols-2' : ''}`}>
                      <div className="relative h-56 md:h-64 overflow-hidden">
                        <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 rounded-xl bg-power-orange/90 backdrop-blur-sm flex items-center justify-center">
                            <service.icon size={24} className="text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-heading font-bold text-power-dark group-hover:text-power-orange transition-colors">{service.title}</h3>
                        <p className="text-power-gray-mid font-body text-sm mt-3 leading-relaxed">{service.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {service.tags.map((tag, tidx) => (
                            <span key={tidx} className="px-3 py-1 bg-power-orange/5 text-power-orange text-xs font-accent font-medium rounded-full">{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 mt-6 text-power-orange font-accent font-semibold text-sm">
                          Learn More <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-power-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Need a <span className="text-gradient-orange">Custom Solution</span>?</h2>
            <p className="text-white/50 font-body mt-4">Our engineers will assess your specific requirements and design a tailored solution.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CTAButton to="/contact#quote">Request a Quote</CTAButton>
              <CTAButton to="/contact" variant="outline-white">Contact an Engineer</CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
