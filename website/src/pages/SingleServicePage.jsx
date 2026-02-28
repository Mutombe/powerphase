import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Phone, ArrowRight, Zap, Sun, Building2, Wrench, Shield, Cable, Lightbulb, Factory } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, SectionHeading, CTAButton, GlowCard } from '../components/ui/SharedComponents'
import { usePageSEO } from '../utils/seo'

const serviceData = {
  'electrical-installations': {
    icon: Wrench,
    title: 'Electrical Installations',
    subtitle: 'Professional wiring and installation services for every sector',
    description: 'From new construction to renovation upgrades, our certified electricians deliver safe, code-compliant electrical installations that power your world. We handle everything from initial design and planning through to testing and commissioning.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80',
    features: ['Full commercial building wiring', 'Residential electrical installations', 'DB board installation & upgrades', 'Cable tray and trunking systems', 'Lighting design and installation', 'Data and network cabling', 'Fire alarm system wiring', 'Compliance upgrades and certification'],
    process: ['Site survey & assessment', 'Design & quotation', 'Material procurement', 'Installation works', 'Testing & commissioning', 'Handover & documentation'],
  },
  'power-distribution': {
    icon: Zap,
    title: 'Power Distribution',
    subtitle: 'High and low voltage distribution systems for industry',
    description: 'We design, install, and commission power distribution systems that form the backbone of industrial and commercial operations. From transformer installation to switchgear commissioning, we ensure reliable power delivery.',
    image: 'https://images.unsplash.com/photo-1753272691001-4d68806ac590?w=1920&q=80',
    features: ['Transformer installation & commissioning', 'HV/LV switchgear installation', 'Substation design & construction', 'Power factor correction', 'Cable jointing and termination', 'Protection relay coordination', 'Load flow analysis', 'Power quality assessment'],
    process: ['Load analysis & design', 'Engineering drawings', 'Equipment procurement', 'Installation & wiring', 'Protection testing', 'Commissioning & energization'],
  },
  'industrial-automation': {
    icon: Building2,
    title: 'Industrial Automation',
    subtitle: 'Smart control systems that drive efficiency',
    description: 'Harness the power of modern automation with our PLC programming, SCADA integration, and motor control solutions. We help manufacturers reduce downtime, improve quality, and cut operating costs through intelligent automation.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&q=80',
    features: ['PLC programming (Siemens, Allen-Bradley)', 'SCADA system design & integration', 'Motor control center installation', 'Variable speed drive systems', 'Process instrumentation', 'HMI development', 'Retrofitting legacy systems', 'Remote monitoring solutions'],
    process: ['Process analysis', 'System architecture design', 'PLC/HMI programming', 'Panel fabrication', 'On-site installation', 'Testing & optimization'],
  },
  'maintenance': {
    icon: Shield,
    title: 'Maintenance & Repair',
    subtitle: 'Keep your systems running at peak performance',
    description: 'Preventive maintenance is the key to avoiding costly downtime and unexpected failures. Our comprehensive maintenance programs keep your electrical systems reliable, efficient, and safe year-round.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80',
    features: ['Preventive maintenance programs', 'Emergency fault finding', '24/7 callout service', 'Thermal imaging inspections', 'Earth leakage testing', 'Circuit breaker testing', 'Motor rewinding & repair', 'Condition monitoring'],
    process: ['System audit', 'Maintenance schedule design', 'Regular inspections', 'Fault identification', 'Repairs & replacements', 'Performance reporting'],
  },
  'generators': {
    icon: Cable,
    title: 'Generator Systems',
    subtitle: 'Reliable backup power you can count on',
    description: 'When the grid goes down, your generator takes over seamlessly. We install, commission, and maintain standby and prime power generators for homes, businesses, and industrial facilities.',
    image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=1920&q=80',
    features: ['Standby generator installation', 'Automatic transfer switch (ATS)', 'Prime power solutions', 'Load bank testing', 'Generator servicing & repair', 'Fuel system design', 'Sound attenuation enclosures', 'Remote monitoring systems'],
    process: ['Power requirement analysis', 'Generator sizing & selection', 'Installation & wiring', 'ATS commissioning', 'Load testing', 'Handover & maintenance plan'],
  },
  'lighting-design': {
    icon: Lightbulb,
    title: 'Lighting Design',
    subtitle: 'Illuminate spaces with efficiency and style',
    description: 'Professional lighting design that combines aesthetics with energy efficiency. From architectural accent lighting to high-bay industrial installations, we create lighting solutions that transform spaces.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1920&q=80',
    features: ['LED lighting retrofits', 'Architectural lighting design', 'Outdoor & landscape lighting', 'Smart lighting controls (DALI)', 'Emergency lighting systems', 'Sports lighting design', 'Street and parking lot lighting', 'Energy audit & optimization'],
    process: ['Lux level calculations', 'Lighting layout design', 'Fixture selection', 'Installation works', 'Control programming', 'Commissioning & tuning'],
  },
  'project-management': {
    icon: Factory,
    title: 'Project Management',
    subtitle: 'End-to-end delivery of complex electrical projects',
    description: 'Our experienced project managers coordinate every aspect of your electrical project from initial feasibility through to final handover, ensuring on-time delivery, budget compliance, and quality excellence.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    features: ['Feasibility studies', 'Detailed engineering design', 'Bill of quantities & costing', 'Contractor coordination', 'Quality assurance & control', 'Safety management', 'Progress reporting', 'As-built documentation'],
    process: ['Project scoping', 'Resource planning', 'Execution management', 'Quality control', 'Progress monitoring', 'Final handover'],
  },
}

export default function SingleServicePage() {
  const { serviceSlug } = useParams()
  const service = serviceData[serviceSlug]

  usePageSEO({
    title: service ? `${service.title} | Powerphase Electrical & Engineering` : 'Service Not Found',
    description: service?.description?.slice(0, 160) || '',
    canonical: `https://powerphase.co.zw/services/${serviceSlug}`,
  })

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-power-dark pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-white">Service Not Found</h1>
          <p className="text-white/50 mt-4 font-body">The service you're looking for doesn't exist.</p>
          <div className="mt-8"><CTAButton to="/services">View All Services</CTAButton></div>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center bg-power-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-power-dark via-power-dark/95 to-power-dark/70" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-power-orange transition-colors font-accent text-sm mb-8">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-6">
              <Icon size={16} className="text-power-orange" />
              <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight max-w-3xl">{service.title}</h1>
            <p className="mt-3 text-xl text-power-orange font-accent">{service.subtitle}</p>
            <p className="mt-6 text-lg text-white/50 font-body max-w-2xl leading-relaxed">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton to="/contact#quote">Get a Quote</CTAButton>
              <a href="tel:+263777040676" className="flex items-center gap-2 px-6 py-3 border-2 border-white/15 text-white font-accent font-medium rounded-xl hover:border-power-orange/50 transition-all">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-power-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading overline="What We Offer" title={<>Service <span className="text-gradient-orange">Features</span></>} />
              <AnimatedSection delay={0.2} className="mt-8 grid gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 size={18} className="text-power-orange shrink-0 mt-0.5" />
                    <span className="text-power-gray-mid font-body">{feature}</span>
                  </div>
                ))}
              </AnimatedSection>
            </div>
            <div>
              <SectionHeading overline="Our Process" title={<>How We <span className="text-gradient-orange">Deliver</span></>} />
              <AnimatedSection delay={0.3} className="mt-8 space-y-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-power-orange/10 flex items-center justify-center shrink-0 font-heading font-bold text-power-orange text-sm">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="font-accent font-semibold text-power-dark">{step}</h4>
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-power-orange to-power-orange-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Ready to Get Started?</h2>
            <p className="text-white/70 font-body mt-4">Contact us for a free assessment and detailed quote.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CTAButton to="/contact#quote" variant="secondary">Request Free Quote</CTAButton>
              <CTAButton to="/services" variant="outline-white">View Other Services</CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
