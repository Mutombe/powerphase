import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Award, Users, Briefcase, Clock, Shield, ArrowRight, CheckCircle2, Zap } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, SectionHeading, CTAButton, DarkCard, GlowCard, LightningBolt, Counter } from '../components/ui/SharedComponents'
import { usePageSEO, pageSEOData } from '../utils/seo'

function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-power-dark overflow-hidden">
      {/* Vision: Team of engineers working together, hard hats, industrial setting */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="Engineering team" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-power-dark via-power-dark/95 to-power-dark/80" />
      </div>
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-power-orange/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-power-orange animate-pulse" />
            <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight max-w-3xl">
            Building Zimbabwe's <span className="text-gradient-orange">Electrical Future</span>
          </h1>
          <p className="mt-6 text-lg text-white/50 font-body max-w-2xl leading-relaxed">
            From a small workshop in Greendale to serving hundreds of clients nationwide, Powerphase Electrical Engineering has been redefining excellence in the electrical industry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function MissionVisionValues() {
  const cards = [
    { icon: Target, title: 'Our Mission', text: 'To deliver world-class electrical engineering solutions that empower businesses and communities across Zimbabwe, setting new standards for quality, safety, and innovation in every project we undertake.', color: 'from-orange-500 to-red-500' },
    { icon: Eye, title: 'Our Vision', text: 'To become Southern Africa\'s most trusted electrical engineering company, pioneering sustainable energy solutions and driving industrial advancement through cutting-edge technology.', color: 'from-amber-500 to-orange-500' },
    { icon: Heart, title: 'Our Values', text: 'Integrity in every connection, excellence in every installation, safety without compromise, and innovation that powers progress. These are the pillars that define Powerphase.', color: 'from-orange-400 to-amber-500' },
  ]

  return (
    <section className="py-24 md:py-32 bg-white relative" id="mission">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading overline="Purpose" title={<>Driven by <span className="text-gradient-orange">Purpose</span>, Guided by Excellence</>} align="center" />
        <StaggerContainer className="mt-16 grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {cards.map((card, idx) => (
            <StaggerItem key={idx}>
              <GlowCard>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6`}>
                  <card.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-power-dark mb-3">{card.title}</h3>
                <p className="text-power-gray-mid font-body text-sm leading-relaxed">{card.text}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function Timeline() {
  const milestones = [
    { year: '2012', title: 'The Beginning', desc: 'Powerphase Electrical Engineering was founded in Greendale, Harare, with a vision to transform Zimbabwe\'s electrical industry.' },
    { year: '2015', title: 'Growing Strong', desc: 'Expanded our team to 20+ engineers and secured major commercial contracts across Harare.' },
    { year: '2018', title: 'Solar Pioneer', desc: 'Launched our solar energy division, becoming one of the first to offer comprehensive solar solutions in Zimbabwe.' },
    { year: '2020', title: 'Industrial Expansion', desc: 'Began serving major industrial clients with automation and high-voltage distribution systems.' },
    { year: '2023', title: 'Market Leader', desc: 'Achieved 500+ completed projects and expanded our service area across all provinces of Zimbabwe.' },
    { year: '2024', title: 'Innovation Forward', desc: 'Introduced smart energy management systems and expanded our team to 50+ professionals.' },
  ]

  return (
    <section className="py-24 md:py-32 bg-power-dark relative overflow-hidden" id="timeline">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-power-orange/5 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading overline="Our Journey" title={<>A Timeline of <span className="text-gradient-orange">Growth</span></>} align="center" dark />

        <div className="mt-16 relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-power-orange/50 via-power-orange/20 to-transparent md:-translate-x-px" />

          {milestones.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} direction={idx % 2 === 0 ? 'left' : 'right'} className="mb-12 last:mb-0">
              <div className={`flex items-start gap-6 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-power-orange font-mono text-sm">{item.year}</span>
                  <h3 className="text-xl font-heading font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-white/40 font-body text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
                {/* Dot on timeline */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-power-orange border-4 border-power-dark shadow-glow" style={{ top: `${idx * (100 / (milestones.length - 1))}%` }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    { name: 'Shepard Shonayi', role: 'Managing Director', /* Vision: Professional headshot, dark background */ },
    { name: 'Chief Engineer', role: 'Head of Operations', },
    { name: 'Solar Division Lead', role: 'Renewable Energy Specialist', },
    { name: 'Project Manager', role: 'Commercial Projects', },
  ]

  return (
    <section className="py-24 md:py-32 bg-power-off-white relative" id="team">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading overline="Our People" title={<>The Experts Behind <span className="text-gradient-orange">The Power</span></>} description="Our team of certified engineers and technicians bring decades of combined experience to every project." align="center" />
        <StaggerContainer className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {team.map((member, idx) => (
            <StaggerItem key={idx}>
              <GlowCard>
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-power-gray-pale to-power-gray-light/50 mb-4 flex items-center justify-center overflow-hidden">
                  {/* Vision: Professional headshot photos of team members */}
                  <div className="w-20 h-20 rounded-full bg-power-orange/10 flex items-center justify-center">
                    <Users size={32} className="text-power-orange/50" />
                  </div>
                </div>
                <h4 className="font-heading font-bold text-power-dark text-center">{member.name}</h4>
                <p className="text-power-gray-mid text-sm font-accent text-center mt-1">{member.role}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default function AboutPage() {
  usePageSEO(pageSEOData.about)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <AboutHero />
      <MissionVisionValues />
      <Timeline />
      <TeamSection />
      {/* CTA */}
      <section className="py-20 bg-power-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Join the Powerphase <span className="text-gradient-orange">Family</span></h2>
            <p className="text-white/50 font-body mt-4">We're always looking for talented engineers and technicians to join our growing team.</p>
            <div className="mt-8"><CTAButton to="/careers">View Career Opportunities</CTAButton></div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
