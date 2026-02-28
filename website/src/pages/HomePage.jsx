import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Zap, Sun, Building2, Wrench, Shield, Clock, Award, Users, ChevronLeft, ChevronRight, Star, Play, CheckCircle2, Phone } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, Counter, GlowCard, DarkCard, SectionHeading, CTAButton, LightningBolt } from '../components/ui/SharedComponents'
import { useInView } from '../hooks/useAnimations'
import { usePageSEO, pageSEOData } from '../utils/seo'

// ============================================================
// HERO SECTION - Full viewport, dark theme, cinematic
// Vision: Dark industrial atmosphere with orange energy accents,
// floating geometric shapes, and a powerful headline
// Image: Dramatic wide shot of electrical infrastructure at dusk
// ============================================================
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-power-dark" id="hero">
      {/* Background image with parallax */}
      {/* Vision: Wide cinematic shot of power lines against dramatic sunset/dusk sky, industrial feel */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
          alt="Electrical power infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-power-dark via-power-dark/90 to-power-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-power-dark via-transparent to-power-dark/30" />
      </motion.div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-[15%] w-32 h-32 border border-power-orange/20 rounded-2xl"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
        />
        <motion.div
          className="absolute top-[60%] right-[8%] w-20 h-20 border border-power-orange/10 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[5%] w-16 h-16 bg-power-orange/5 rounded-lg rotate-45"
          animate={{ y: [0, 30, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Large circle accent */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] border border-power-orange/5 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] border border-power-orange/10 rounded-full" />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-power-orange/10 rounded-full blur-[150px] animate-pulse-glow" />

      {/* Content */}
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Overline badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-power-orange animate-pulse" />
              <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">
                Zimbabwe's Premier Electrical Engineers
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              Powering
              <br />
              <span className="text-gradient-orange">Tomorrow's</span>
              <br />
              Infrastructure
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="mt-6 text-lg text-white/50 font-body leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              From high-voltage distribution to solar installations, we engineer reliable power solutions that transform businesses and communities across Zimbabwe.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link
                to="/contact#quote"
                className="group flex items-center gap-2 px-7 py-4 bg-power-orange text-white font-accent font-bold rounded-xl hover:bg-power-orange-dark transition-all duration-300 hover:shadow-glow text-base"
              >
                Get Free Quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 px-7 py-4 border-2 border-white/15 text-white font-accent font-medium rounded-xl hover:border-power-orange/50 hover:text-power-orange transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex items-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-power-orange/30 to-power-dark border-2 border-power-dark flex items-center justify-center">
                      <Star size={10} className="text-power-orange" />
                    </div>
                  ))}
                </div>
                <div className="text-white/50 text-sm font-body">
                  <span className="text-white font-semibold">5.0</span> Rating
                </div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-white/50 text-sm font-body">
                <span className="text-white font-semibold">9</span> Google Reviews
              </div>
            </motion.div>
          </div>

          {/* Right side - Feature cards stack */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative">
              {/* Floating feature cards */}
              {[
                { icon: Sun, label: 'Solar Systems', value: '6.2+ KVA', color: 'from-amber-500/20 to-orange-500/20' },
                { icon: Zap, label: 'Power Solutions', value: '24/7 Service', color: 'from-orange-500/20 to-red-500/20' },
                { icon: Shield, label: 'Certified', value: 'Licensed', color: 'from-blue-500/20 to-cyan-500/20' },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  className="mb-4"
                  animate={{ y: [0, idx % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                >
                  <div className="glass-card p-5 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                      <card.icon size={24} className="text-power-orange" />
                    </div>
                    <div>
                      <div className="text-white font-accent font-semibold">{card.label}</div>
                      <div className="text-power-orange text-sm font-mono">{card.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Decorative bolt */}
              <motion.div
                className="absolute -top-8 -right-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <LightningBolt className="text-power-orange/30" size={80} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/30 text-xs font-accent tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-power-orange rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

// ============================================================
// SERVICES OVERVIEW - Bento grid layout
// Vision: Modern bento-box card layout with hover animations
// ============================================================
function ServicesSection() {
  const services = [
    {
      icon: Sun,
      title: 'Solar Energy Solutions',
      desc: 'Complete solar panel installations from 3KVA to 20KVA+. Monocrystalline panels, hybrid inverters, and lithium batteries.',
      path: '/solar-solutions',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
      // Vision: Aerial view of solar panels on a rooftop, warm sunlight
      featured: true,
    },
    {
      icon: Zap,
      title: 'Power Distribution',
      desc: 'High and low voltage distribution systems, transformers, switchgear, and substation installations.',
      path: '/services/power-distribution',
      image: 'https://images.unsplash.com/photo-1753272691001-4d68806ac590?w=600&q=80',
      // Vision: Industrial electrical panel/switchgear close-up
    },
    {
      icon: Building2,
      title: 'Industrial Automation',
      desc: 'PLC programming, SCADA systems, and complete automation solutions for manufacturing and processing.',
      path: '/services/industrial-automation',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
      // Vision: Modern factory automation equipment, robotic arms
    },
    {
      icon: Wrench,
      title: 'Electrical Installations',
      desc: 'Commercial, residential, and industrial wiring. New builds, renovations, and compliance upgrades.',
      path: '/services/electrical-installations',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
      // Vision: Electrician working on panel, professional setting
    },
    {
      icon: Shield,
      title: 'Maintenance & Repair',
      desc: 'Preventive maintenance programs, fault finding, emergency repairs, and safety inspections.',
      path: '/services/maintenance',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
      // Vision: Technician testing electrical equipment with multimeter
    },
    {
      icon: Zap,
      title: 'Generator Systems',
      desc: 'Standby and prime power generators. Installation, commissioning, and ongoing maintenance.',
      path: '/services/generators',
      image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=600&q=80',
      // Vision: Industrial diesel generator in a technical room
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-power-off-white relative overflow-hidden" id="services">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-power-orange/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="What We Do"
          title={<>Engineering <span className="text-gradient-orange">Excellence</span> Across Every Phase</>}
          description="From concept to completion, our comprehensive electrical engineering services power industries, illuminate homes, and drive Zimbabwe's growth."
          align="center"
        />

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <StaggerContainer key={idx}>
              <StaggerItem>
                <Link to={service.path}>
                  <GlowCard className={service.featured ? 'md:col-span-2 lg:col-span-1' : ''}>
                    <div className="relative h-48 -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden rounded-t-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-power-orange flex items-center justify-center">
                          <service.icon size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-power-dark group-hover:text-power-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-power-gray-mid font-body text-sm mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-power-orange font-accent font-semibold text-sm">
                      Learn More
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </GlowCard>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <CTAButton to="/services" variant="outline">
            View All Services
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ============================================================
// STATS SECTION - Dark theme with animated counters
// Vision: Industrial dark background with glowing orange numbers
// ============================================================
function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-power-dark overflow-hidden" id="stats">
      {/* Background image */}
      {/* Vision: Dark industrial setting, factory silhouette, dramatic lighting */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=70"
          alt="Industrial background"
          loading="lazy"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-power-dark/80" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-power-orange/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-power-orange/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.2em] uppercase">By The Numbers</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3">
            Delivering Power <span className="text-gradient-orange">With Precision</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Counter end={500} suffix="+" label="Projects Completed" />
          <Counter end={12} suffix="+" label="Years Experience" />
          <Counter end={200} suffix="+" label="Happy Clients" />
          <Counter end={50} suffix="+" label="Expert Engineers" />
        </div>

        {/* Decorative line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-power-orange/30 to-transparent" />
        
        {/* Trust logos marquee */}
        <AnimatedSection className="mt-12 text-center">
          <p className="text-white/30 text-xs font-accent tracking-[0.15em] uppercase mb-6">Trusted By Industry Leaders</p>
          <div className="flex items-center justify-center gap-12 opacity-30 flex-wrap">
            {['ZESA', 'ZETDC', 'ZPC', 'ZINARA', 'CBZ'].map((brand, idx) => (
              <span key={idx} className="text-white font-heading font-bold text-xl tracking-wider">
                {brand}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ============================================================
// ABOUT PREVIEW - Split layout with image
// Vision: Professional team photo or engineer at work,
// diagonal clip with overlapping elements
// ============================================================
function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="about-preview">
      <div className="absolute inset-0 stripe-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              {/* Main image */}
              {/* Vision: Professional engineer/technician working with electrical panel, orange PPE */}
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                  alt="Powerphase engineers at work"
                  loading="lazy"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              
              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-power-orange rounded-2xl p-6 shadow-glow"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-white text-3xl font-heading font-bold">12+</div>
                <div className="text-white/70 text-sm font-accent">Years of Excellence</div>
              </motion.div>

              {/* Secondary image overlapping */}
              {/* Vision: Close-up of solar panel installation or wiring work */}
              <div className="hidden md:block absolute -left-8 top-1/2 w-40 h-40 rounded-xl overflow-hidden shadow-card border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1700529289398-dd313f11c9cc?w=300&q=80"
                  alt="Solar panel close-up"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-power-orange/20 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <SectionHeading
              overline="Who We Are"
              title={<>Pioneering Electrical Solutions <span className="text-gradient-orange">Since Day One</span></>}
              description="Powerphase Electrical Engineering is Zimbabwe's trusted partner for comprehensive electrical solutions. From humble beginnings in Harare, we've grown to become the go-to engineering firm for businesses and homeowners alike."
            />

            <AnimatedSection delay={0.2} className="mt-8 space-y-6">
              {[
                { icon: Award, text: 'Licensed & certified electrical engineering company' },
                { icon: Clock, text: '24/7 emergency response and support' },
                { icon: Users, text: 'Experienced team of 50+ skilled professionals' },
                { icon: Shield, text: 'Full warranty on all installations & materials' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-power-orange/10 flex items-center justify-center shrink-0 group-hover:bg-power-orange/20 transition-colors">
                    <item.icon size={18} className="text-power-orange" />
                  </div>
                  <p className="text-power-gray-mid font-body pt-2">{item.text}</p>
                </div>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-10 flex flex-wrap gap-4">
              <CTAButton to="/about">
                Discover Our Story
              </CTAButton>
              <CTAButton to="/contact" variant="ghost">
                Talk to an Engineer
              </CTAButton>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// TESTIMONIALS - Carousel with dark cards
// Vision: Client testimonials with star ratings
// ============================================================
function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const testimonials = [
    { name: 'Tendai Moyo', role: 'Operations Director, ManuCo Ltd', text: 'Powerphase transformed our entire factory electrical system. Their solar installation has cut our energy costs by 60%. Professional team with deep technical expertise.', rating: 5 },
    { name: 'Sarah Chikwava', role: 'Property Manager, Greendale Estates', text: 'We have been using Powerphase for all our residential projects. Their attention to safety standards and clean installations is unmatched. Highly recommend for any electrical work.', rating: 5 },
    { name: 'David Mutasa', role: 'CEO, Mutasa Holdings', text: 'The 6.2KVA solar system they installed has been running flawlessly for over a year now. The team was prompt, professional, and transparent with pricing throughout.', rating: 5 },
    { name: 'Grace Nhemachena', role: 'Farm Manager, Nhemachena Agriculture', text: 'Powerphase installed our borehole pump system and full solar setup. Even during load shedding, our operations run without a hitch. Outstanding service!', rating: 5 },
  ]

  const next = () => setCurrent((p) => (p + 1) % testimonials.length)
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 md:py-32 bg-power-dark relative overflow-hidden" id="testimonials">
      {/* Background effects */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-power-orange/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              overline="Client Voices"
              title={<>What Our Clients <span className="text-gradient-orange">Say About Us</span></>}
              description="We let our work speak for itself—but our clients often have something to add."
              dark
            />
            
            <AnimatedSection delay={0.2} className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-power-orange fill-power-orange" />
                ))}
              </div>
              <span className="text-white font-heading font-bold text-2xl">5.0</span>
              <span className="text-white/40 font-body text-sm">on Google Reviews</span>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-6 flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white/60 hover:border-power-orange/50 hover:text-power-orange transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white/60 hover:border-power-orange/50 hover:text-power-orange transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </AnimatedSection>
          </div>

          {/* Testimonial card */}
          <AnimatedSection direction="right">
            <motion.div
              key={current}
              className="glass-card p-8 md:p-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-power-orange fill-power-orange" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-white/80 font-body text-lg leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              
              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-power-orange to-power-orange-dark flex items-center justify-center text-white font-heading font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-accent font-semibold">{testimonials[current].name}</div>
                  <div className="text-white/40 text-sm font-body">{testimonials[current].role}</div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === current ? 'w-8 bg-power-orange' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// WHY CHOOSE US - Feature grid with icons
// ============================================================
function WhyChooseUs() {
  const features = [
    { icon: CheckCircle2, title: 'Quality Guaranteed', desc: 'Every installation meets international safety standards with full warranty coverage.' },
    { icon: Clock, title: 'Rapid Response', desc: '24/7 emergency services with average response time under 2 hours in Harare.' },
    { icon: Award, title: 'Licensed & Certified', desc: 'Fully licensed electrical engineering company with certified technicians.' },
    { icon: Shield, title: 'Safety First', desc: 'Rigorous safety protocols and comprehensive risk assessments on every project.' },
    { icon: Users, title: 'Expert Team', desc: '50+ experienced engineers and technicians with decades of combined expertise.' },
    { icon: Sun, title: 'Green Solutions', desc: 'Pioneering renewable energy adoption with advanced solar technology systems.' },
  ]

  return (
    <section className="py-24 md:py-32 bg-power-cream relative overflow-hidden">
      <div className="absolute inset-0 stripe-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Why Powerphase"
          title={<>The Powerphase <span className="text-gradient-orange">Advantage</span></>}
          description="We don't just deliver electrical solutions—we deliver peace of mind."
          align="center"
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {features.map((feature, idx) => (
            <StaggerItem key={idx}>
              <GlowCard>
                <div className="w-12 h-12 rounded-xl bg-power-orange/10 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-power-orange" />
                </div>
                <h3 className="text-lg font-heading font-bold text-power-dark">{feature.title}</h3>
                <p className="text-power-gray-mid font-body text-sm mt-2 leading-relaxed">{feature.desc}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// ============================================================
// FINAL CTA - Full width orange gradient
// ============================================================
function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-power-orange via-power-orange-dark to-power-dark" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <motion.div
            className="inline-flex mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <LightningBolt className="text-white/80" size={60} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
            Ready to Power Up<br />Your Next Project?
          </h2>
          <p className="mt-6 text-white/70 font-body text-lg max-w-2xl mx-auto">
            Get a free consultation and detailed quote from our expert engineers. We'll design the perfect electrical solution for your needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact#quote"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-power-dark font-accent font-bold rounded-xl hover:bg-power-off-white transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            >
              Get Your Free Quote
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+263777040676"
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-accent font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Phone size={18} />
              Call +263 777 040 676
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ============================================================
// HOME PAGE ASSEMBLY
// ============================================================
export default function HomePage() {
  usePageSEO(pageSEOData.home)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutPreview />
      <TestimonialsSection />
      <WhyChooseUs />
      <FinalCTA />
    </motion.div>
  )
}
