import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowUpRight, Tag, Clock } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, SectionHeading, CTAButton } from '../components/ui/SharedComponents'
import { usePageSEO, pageSEOData } from '../utils/seo'

const posts = [
  {
    title: 'Why Solar Energy is the Future of Zimbabwe\'s Power Supply',
    excerpt: 'With persistent load shedding and rising electricity costs, solar energy offers a reliable and cost-effective alternative for homes and businesses across Zimbabwe.',
    category: 'Solar Energy',
    date: 'Feb 15, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=80',
    featured: true,
  },
  {
    title: '10 Signs Your Building Needs an Electrical Audit',
    excerpt: 'Flickering lights, frequent breaker trips, and warm outlets are just the beginning. Learn the critical warning signs that indicate it\'s time for a professional electrical audit.',
    category: 'Safety',
    date: 'Feb 8, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1566417110090-6b15a06ec800?w=800&q=80',
  },
  {
    title: 'Understanding the 6.2 KVA Solar System: A Complete Guide',
    excerpt: 'Everything you need to know about our most popular solar package — what it powers, how it works, and why it\'s the perfect fit for most Zimbabwean households.',
    category: 'Solar Energy',
    date: 'Jan 28, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1763114613273-ec505136d03a?w=800&q=80',
  },
  {
    title: 'Industrial Automation: How PLC Systems Save Manufacturers Millions',
    excerpt: 'Modern PLC and SCADA systems can reduce downtime by 40% and energy consumption by 25%. Here\'s how automation is transforming Zimbabwe\'s manufacturing sector.',
    category: 'Automation',
    date: 'Jan 15, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1764185800646-f75f7e16e465?w=800&q=80',
  },
  {
    title: 'Generator Maintenance Checklist: Keep Your Backup Power Ready',
    excerpt: 'A well-maintained generator is a reliable generator. Follow our comprehensive maintenance checklist to ensure your backup power is always ready when you need it.',
    category: 'Maintenance',
    date: 'Jan 5, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1624280341680-5dee2199bce3?w=800&q=80',
  },
  {
    title: 'Electrical Safety Tips Every Homeowner Should Know',
    excerpt: 'From proper extension cord use to recognizing dangerous wiring, these essential safety tips could prevent electrical fires and protect your family.',
    category: 'Safety',
    date: 'Dec 20, 2025',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1762330465376-b89b5584306d?w=800&q=80',
  },
]

export default function BlogPage() {
  usePageSEO(pageSEOData.blog)
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero - Minimal, editorial style */}
      <section className="relative bg-power-dark overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-power-orange/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-power-orange/10 border border-power-orange/20 rounded-full mb-6">
              <span className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase">Blog & Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
              Industry <span className="text-gradient-orange">Knowledge</span>
            </h1>
            <p className="mt-4 text-lg text-white/50 font-body max-w-2xl mx-auto">
              Expert insights, energy-saving tips, and the latest in electrical engineering and solar technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 bg-power-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="group bg-white rounded-2xl border border-power-gray-pale/50 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img src={featured.image} alt={featured.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-power-orange text-white text-xs font-accent font-bold rounded-full">Featured</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-flex items-center gap-1.5 text-power-orange text-xs font-accent font-semibold uppercase tracking-wider">
                      <Tag size={12} /> {featured.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-power-dark mt-3 group-hover:text-power-orange transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-power-gray-mid font-body mt-3 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 mt-6 text-power-gray-mid text-xs font-accent">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime} read</span>
                    </div>
                    <div className="flex items-center gap-2 mt-6 text-power-orange font-accent font-semibold text-sm">
                      Read Article <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-24 bg-power-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline="Latest Articles" title={<>Stay <span className="text-gradient-orange">Informed</span></>} />
          <StaggerContainer className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {rest.map((post, idx) => (
              <StaggerItem key={idx}>
                <div className="group bg-white rounded-2xl border border-power-gray-pale/50 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-power-orange text-xs font-accent font-semibold rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-heading font-bold text-power-dark group-hover:text-power-orange transition-colors leading-snug">{post.title}</h3>
                    <p className="text-power-gray-mid font-body text-sm mt-2 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-power-gray-pale/50 text-power-gray-mid text-xs font-accent">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-power-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Stay <span className="text-gradient-orange">Energized</span></h2>
            <p className="text-white/50 font-body mt-4">Get the latest articles and energy-saving tips delivered to your inbox.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-body placeholder:text-white/30 focus:outline-none focus:border-power-orange/50 transition-all"
              />
              <button className="w-full sm:w-auto px-6 py-3.5 bg-power-orange text-white font-accent font-bold rounded-xl hover:bg-power-orange-dark transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
