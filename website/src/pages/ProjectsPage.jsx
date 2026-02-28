import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Calendar, ArrowUpRight, Filter } from 'lucide-react'
import { AnimatedSection, SectionHeading, CTAButton } from '../components/ui/SharedComponents'
import { usePageSEO, pageSEOData } from '../utils/seo'

const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Solar']

const projects = [
  { title: 'CBD Office Complex Rewiring', category: 'Commercial', location: 'Harare CBD', year: '2024', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', desc: 'Complete electrical redesign and rewiring of a 12-story office complex.' },
  { title: 'Greendale Solar Farm', category: 'Solar', location: 'Greendale, Harare', year: '2024', image: 'https://images.unsplash.com/photo-1756913455724-6b3a2ae0130b?w=800&q=80', desc: 'Large-scale 50KW solar installation for agricultural operations.' },
  { title: 'Msasa Industrial Park', category: 'Industrial', location: 'Msasa, Harare', year: '2023', image: 'https://images.unsplash.com/photo-1768796371834-dbd477427306?w=800&q=80', desc: 'High-voltage distribution and automation for manufacturing facility.' },
  { title: 'Borrowdale Luxury Homes', category: 'Residential', location: 'Borrowdale', year: '2024', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', desc: 'Smart home electrical systems for premium residential estate.' },
  { title: 'Shopping Mall Power Upgrade', category: 'Commercial', location: 'Eastgate Mall', year: '2023', image: 'https://images.unsplash.com/photo-1766600115358-1c5ce9c7c87d?w=800&q=80', desc: 'Generator backup system and power distribution upgrade.' },
  { title: 'Farm Solar & Borehole', category: 'Solar', location: 'Marondera', year: '2023', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80', desc: '10KVA solar system powering irrigation and cold storage.' },
  { title: 'Factory Automation System', category: 'Industrial', location: 'Graniteside', year: '2024', image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=800&q=80', desc: 'Full PLC automation and SCADA integration for food processing.' },
  { title: 'Residential Estate Lighting', category: 'Residential', location: 'Mt Pleasant', year: '2023', image: 'https://images.unsplash.com/photo-1769967399843-5486cfc5daed?w=800&q=80', desc: 'LED lighting design and installation for 40-unit residential estate.' },
]

export default function ProjectsPage() {
  usePageSEO(pageSEOData.projects)
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero - Unique angled layout */}
      <section className="relative min-h-[60vh] flex items-center bg-power-dark overflow-hidden">
        <div className="absolute inset-0">
          {/* Vision: Overhead shot of completed solar installation or lit-up building at night */}
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Our projects" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-power-dark to-power-dark/90" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-6">
              <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight max-w-3xl">
              Projects That <span className="text-gradient-orange">Speak Volumes</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 font-body max-w-2xl">Explore our track record of excellence across commercial, residential, industrial, and solar installations.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 md:py-32 bg-power-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap items-center gap-3 mb-12">
            <Filter size={16} className="text-power-gray-mid" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-accent font-medium transition-all duration-300 ${
                  active === cat ? 'bg-power-orange text-white shadow-glow' : 'bg-white text-power-gray-mid border border-power-gray-pale hover:border-power-orange/30 hover:text-power-orange'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Projects grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-power-gray-pale/50 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-power-orange/90 backdrop-blur-sm text-white text-xs font-accent font-semibold rounded-full">{project.category}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/70 text-xs">
                          <MapPin size={12} /> {project.location}
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-xs">
                          <Calendar size={12} /> {project.year}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-bold text-power-dark group-hover:text-power-orange transition-colors">{project.title}</h3>
                      <p className="text-power-gray-mid text-sm font-body mt-2">{project.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-power-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Let's Build Something <span className="text-gradient-orange">Amazing</span></h2>
            <p className="text-white/50 font-body mt-4">Your project could be next. Get started with a free consultation.</p>
            <div className="mt-8"><CTAButton to="/contact#quote">Start Your Project</CTAButton></div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
