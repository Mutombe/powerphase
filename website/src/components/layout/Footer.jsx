import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, ArrowUpRight, Zap, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useInView } from '../../hooks/useAnimations'

export default function Footer() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const footerLinks = {
    'Solutions': [
      { label: 'Solar Energy', path: '/solar-solutions' },
      { label: 'Power Distribution', path: '/services/power-distribution' },
      { label: 'Industrial Automation', path: '/services/industrial-automation' },
      { label: 'Electrical Installations', path: '/services/electrical-installations' },
      { label: 'Generator Systems', path: '/services/generators' },
      { label: 'Maintenance', path: '/services/maintenance' },
    ],
    'Company': [
      { label: 'About Us', path: '/about' },
      { label: 'Our Projects', path: '/projects' },
      { label: 'Careers', path: '/careers' },
      { label: 'Blog & Insights', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ],
    'Resources': [
      { label: 'Request a Quote', path: '/contact#quote' },
      { label: 'Solar Calculator', path: '/solar-solutions#calculator' },
      { label: 'FAQs', path: '/contact#faq' },
      { label: 'Testimonials', path: '/#testimonials' },
    ],
  }

  return (
    <footer ref={ref} className="relative bg-power-dark overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-power-orange/50 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-power-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-power-orange/3 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-overlay opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter CTA Section */}
        <motion.div
          className="py-16 border-b border-white/5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Ready to <span className="text-gradient-orange">power up?</span>
              </h3>
              <p className="text-white/50 mt-2 font-body max-w-md">
                Get expert electrical engineering solutions tailored to your needs. Free consultation and quote.
              </p>
            </div>
            <Link
              to="/contact#quote"
              className="group flex items-center gap-3 px-8 py-4 bg-power-orange text-white font-accent font-bold rounded-xl hover:bg-power-orange-dark transition-all duration-300 hover:shadow-glow text-lg"
            >
              Start Your Project
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg width="36" height="36" viewBox="0 0 32 32">
                <path d="M18 4L8 18h6l-2 10 10-14h-6z" fill="#F27B20" />
              </svg>
              <div>
                <span className="text-white font-heading font-bold text-xl tracking-wide">POWERPHASE</span>
                <span className="block text-power-gray-light text-[10px] tracking-[0.2em] uppercase font-accent">Electrical & Engineering</span>
              </div>
            </Link>
            <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs mb-6">
              Zimbabwe's premier electrical engineering company delivering world-class power solutions, solar installations, and comprehensive electrical services since inception.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:+263777040676" className="flex items-center gap-3 text-white/50 hover:text-power-orange transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-power-orange/10 flex items-center justify-center group-hover:bg-power-orange/20 transition-colors">
                  <Phone size={14} className="text-power-orange" />
                </div>
                +263 777 040 676
              </a>
              <a href="mailto:shonayishepard1999@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-power-orange transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-power-orange/10 flex items-center justify-center group-hover:bg-power-orange/20 transition-colors">
                  <Mail size={14} className="text-power-orange" />
                </div>
                shonayishepard1999@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <div className="w-8 h-8 rounded-lg bg-power-orange/10 flex items-center justify-center">
                  <MapPin size={14} className="text-power-orange" />
                </div>
                Corner Clifton, 22 Clifton Rd, Greendale, Harare
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-power-orange hover:border-power-orange/30 hover:bg-power-orange/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-power-orange text-xs font-accent font-semibold tracking-[0.15em] uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="text-white/40 hover:text-white text-sm font-body transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-power-orange" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Powerphase Electrical & Engineering Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => document.dispatchEvent(new CustomEvent('openPrivacyPolicy'))}
              className="text-white/30 hover:text-white/60 text-xs font-body transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent('openTerms'))}
              className="text-white/30 hover:text-white/60 text-xs font-body transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent('openCookiePolicy'))}
              className="text-white/30 hover:text-white/60 text-xs font-body transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
