import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight, Heart, BookOpen, Shield, TrendingUp, Users, Zap } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, SectionHeading, CTAButton, GlowCard, DarkCard } from '../components/ui/SharedComponents'
import { usePageSEO, pageSEOData } from '../utils/seo'
import { Link } from 'react-router-dom'

const openings = [
  { title: 'Senior Electrical Engineer', type: 'Full-time', location: 'Harare', dept: 'Engineering', desc: 'Lead complex electrical installation projects for commercial and industrial clients.' },
  { title: 'Solar Installation Technician', type: 'Full-time', location: 'Harare', dept: 'Solar Division', desc: 'Install and commission residential and commercial solar systems.' },
  { title: 'Apprentice Electrician', type: 'Apprenticeship', location: 'Harare', dept: 'Training', desc: 'Learn the trade under experienced engineers with on-the-job training.' },
  { title: 'Project Coordinator', type: 'Full-time', location: 'Harare', dept: 'Operations', desc: 'Coordinate project timelines, client communication, and resource allocation.' },
  { title: 'AutoCAD Drafter', type: 'Contract', location: 'Remote/Harare', dept: 'Design', desc: 'Create detailed electrical drawings and schematics for engineering projects.' },
]

const benefits = [
  { icon: Heart, title: 'Health Coverage', desc: 'Comprehensive medical insurance for you and your family' },
  { icon: BookOpen, title: 'Professional Growth', desc: 'Sponsored certifications, courses, and conference attendance' },
  { icon: Shield, title: 'Safety First', desc: 'Premium PPE, safety training, and comfortable working conditions' },
  { icon: TrendingUp, title: 'Career Progression', desc: 'Clear career paths with regular performance reviews and promotions' },
  { icon: Users, title: 'Team Culture', desc: 'Collaborative environment with regular team events and activities' },
  { icon: Zap, title: 'Competitive Pay', desc: 'Industry-leading compensation with performance bonuses' },
]

export default function CareersPage() {
  usePageSEO(pageSEOData.careers)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero - Unique split design */}
      <section className="relative min-h-[65vh] flex items-center bg-power-dark overflow-hidden">
        <div className="absolute inset-0">
          {/* Vision: Team of engineers collaborating, diverse, professional setting */}
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80" alt="Join our team" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-power-dark to-power-dark/85" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-power-orange/8 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-6">
              <Briefcase size={14} className="text-power-orange" />
              <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">Careers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
              Build Your Future <span className="text-gradient-orange">With Us</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 font-body leading-relaxed">
              Join Zimbabwe's fastest-growing electrical engineering company. We're looking for passionate professionals who want to make a real impact.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <CTAButton to="#positions">View Open Positions</CTAButton>
              <div className="text-white/40 font-mono text-sm">
                <span className="text-power-orange font-bold">{openings.length}</span> positions open
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 md:py-32 bg-white relative" id="benefits">
        <div className="absolute inset-0 stripe-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline="Why Join Us" title={<>Perks & <span className="text-gradient-orange">Benefits</span></>} description="We believe in investing in our people." align="center" />
          <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {benefits.map((b, idx) => (
              <StaggerItem key={idx}>
                <GlowCard>
                  <div className="w-12 h-12 rounded-xl bg-power-orange/10 flex items-center justify-center mb-4">
                    <b.icon size={24} className="text-power-orange" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-power-dark">{b.title}</h3>
                  <p className="text-power-gray-mid font-body text-sm mt-2">{b.desc}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 md:py-32 bg-power-dark relative" id="positions">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline="Open Roles" title={<>Current <span className="text-gradient-orange">Openings</span></>} dark align="center" />

          <div className="mt-12 space-y-4">
            {openings.map((job, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  className="group glass-card p-6 hover:border-power-orange/30 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 8 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white group-hover:text-power-orange transition-colors">{job.title}</h3>
                      <p className="text-white/40 font-body text-sm mt-1">{job.desc}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        <span className="flex items-center gap-1 text-white/40 text-xs font-accent"><MapPin size={12} />{job.location}</span>
                        <span className="flex items-center gap-1 text-white/40 text-xs font-accent"><Clock size={12} />{job.type}</span>
                        <span className="px-3 py-1 bg-power-orange/10 text-power-orange text-xs font-accent rounded-full">{job.dept}</span>
                      </div>
                    </div>
                    <Link to="/contact" className="flex items-center gap-2 px-5 py-2.5 bg-power-orange/10 text-power-orange font-accent font-semibold text-sm rounded-xl hover:bg-power-orange hover:text-white transition-all shrink-0">
                      Apply <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" delay={0.3}>
            <p className="text-white/40 font-body">Don't see your role? We're always looking for talented people.</p>
            <div className="mt-4"><CTAButton to="/contact">Send Open Application</CTAButton></div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
