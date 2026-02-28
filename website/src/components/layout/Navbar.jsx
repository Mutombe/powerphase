import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Menu, ChevronDown, Phone, Mail, MapPin, ArrowRight, Zap, Sun, Building2, Wrench, Users, Briefcase, FileText, MessageSquare } from 'lucide-react'
import { searchSite } from '../../utils/searchIndex'

const navLinks = [
  {
    label: 'Company',
    children: [
      { label: 'About Us', path: '/about', icon: Building2, desc: 'Our story, mission & vision' },
      { label: 'Our Team', path: '/about#team', icon: Users, desc: 'Meet our expert engineers' },
      { label: 'Careers', path: '/careers', icon: Briefcase, desc: 'Join our growing team' },
      { label: 'Blog & Insights', path: '/blog', icon: FileText, desc: 'Industry news & tips' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'All Services', path: '/services', icon: Wrench, desc: 'Complete service catalog' },
      { label: 'Solar Energy', path: '/solar-solutions', icon: Sun, desc: 'Solar panel systems' },
      { label: 'Power Distribution', path: '/services/power-distribution', icon: Zap, desc: 'HV/LV distribution' },
      { label: 'Industrial Automation', path: '/services/industrial-automation', icon: Building2, desc: 'PLC & SCADA systems' },
    ],
  },
  {
    label: 'Portfolio',
    path: '/projects',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [activeDropdown, setActiveDropdown] = useState(null)
  const searchInputRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  // Search handler
  useEffect(() => {
    const results = searchSite(searchQuery)
    setSearchResults(results)
  }, [searchQuery])

  // Focus search input
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSearchNavigate = (path) => {
    setSearchOpen(false)
    setSearchQuery('')
    navigate(path)
  }

  return (
    <>
      {/* Top bar - contact info */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'
        }`}
      >
        <div className="h-full bg-power-dark/90 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between text-xs text-power-gray-light">
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+263777040676" className="flex items-center gap-1.5 hover:text-power-orange transition-colors">
                <Phone size={12} /> +263 777 040 676
              </a>
              <a href="mailto:shonayishepard1999@gmail.com" className="flex items-center gap-1.5 hover:text-power-orange transition-colors">
                <Mail size={12} /> shonayishepard1999@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-power-gray-light/70">
              <MapPin size={12} className="text-power-orange" />
              <span>Corner Clifton, 22 Clifton Rd, Greendale, Harare</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-power-dark/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
            : 'top-10 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="40" height="40" viewBox="0 0 32 32" className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(242,123,32,0.6)]">
                  <path d="M18 4L8 18h6l-2 10 10-14h-6z" fill="#F27B20" />
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-lg tracking-wide leading-tight">
                  POWERPHASE
                </span>
                <span className="text-power-gray-light text-[10px] tracking-[0.2em] uppercase font-accent">
                  Electrical & Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-sm font-accent font-medium transition-colors duration-300 rounded-lg hover:text-power-orange ${
                        location.pathname === item.path ? 'text-power-orange' : 'text-white/80'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="px-4 py-2 text-sm font-accent font-medium text-white/80 transition-colors duration-300 rounded-lg hover:text-power-orange flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === idx && (
                      <motion.div
                        className="absolute top-full left-0 pt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-power-dark/95 backdrop-blur-xl rounded-2xl border border-white/10 p-3 min-w-[300px] shadow-2xl shadow-black/50">
                          {item.children.map((child, cidx) => {
                            const Icon = child.icon
                            return (
                              <Link
                                key={cidx}
                                to={child.path}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                              >
                                <div className="w-10 h-10 rounded-lg bg-power-orange/10 flex items-center justify-center shrink-0 group-hover/item:bg-power-orange/20 transition-colors">
                                  <Icon size={18} className="text-power-orange" />
                                </div>
                                <div>
                                  <div className="text-white font-accent font-medium text-sm group-hover/item:text-power-orange transition-colors">
                                    {child.label}
                                  </div>
                                  <div className="text-white/40 text-xs mt-0.5">{child.desc}</div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side - Search + CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* CTA Button */}
              <Link
                to="/contact#quote"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-power-orange text-white font-accent font-semibold text-sm rounded-xl hover:bg-power-orange-dark transition-all duration-300 hover:shadow-glow group"
              >
                Get a Quote
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white hover:bg-white/5 transition-all"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-power-dark border-l border-white/10 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-24">
                {navLinks.map((item, idx) => (
                  <div key={idx} className="mb-4">
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="block py-3 px-4 text-white font-accent font-medium text-lg hover:text-power-orange transition-colors rounded-xl hover:bg-white/5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <div className="py-3 px-4 text-power-orange font-accent font-semibold text-xs tracking-widest uppercase">
                          {item.label}
                        </div>
                        {item.children.map((child, cidx) => {
                          const Icon = child.icon
                          return (
                            <Link
                              key={cidx}
                              to={child.path}
                              className="flex items-center gap-3 py-2.5 px-4 text-white/70 font-accent hover:text-white transition-colors rounded-xl hover:bg-white/5"
                              onClick={() => setMobileOpen(false)}
                            >
                              <Icon size={16} className="text-power-orange/60" />
                              {child.label}
                            </Link>
                          )
                        })}
                      </>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <Link
                  to="/contact#quote"
                  className="flex items-center justify-center gap-2 w-full mt-6 px-6 py-4 bg-power-orange text-white font-accent font-bold rounded-xl hover:bg-power-orange-dark transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Free Quote
                  <ArrowRight size={16} />
                </Link>

                {/* Mobile contact info */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <a href="tel:+263777040676" className="flex items-center gap-3 text-white/60 hover:text-power-orange transition-colors text-sm">
                    <Phone size={14} /> +263 777 040 676
                  </a>
                  <a href="mailto:shonayishepard1999@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-power-orange transition-colors text-sm break-all">
                    <Mail size={14} /> shonayishepard1999@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-start justify-center pt-[15vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setSearchOpen(false)} />
            <motion.div
              className="relative w-full max-w-2xl mx-4 bg-power-dark/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              initial={{ y: -30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <Search size={20} className="text-power-orange shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, pages, solar systems..."
                  className="flex-1 bg-transparent text-white font-accent placeholder:text-white/30 focus:outline-none text-lg"
                />
                <kbd className="hidden sm:inline-block px-2 py-1 text-xs text-white/30 bg-white/5 rounded-md border border-white/10 font-mono">
                  ESC
                </kbd>
                <button onClick={() => setSearchOpen(false)} className="text-white/40 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Search results */}
              <div className="max-h-[50vh] overflow-y-auto">
                {searchQuery.length > 1 && searchResults.length > 0 ? (
                  <div className="p-2">
                    {searchResults.map((result, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSearchNavigate(result.path)}
                        className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-power-orange/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-power-orange/20 transition-colors">
                          <Zap size={14} className="text-power-orange" />
                        </div>
                        <div>
                          <div className="text-white font-accent font-medium text-sm group-hover:text-power-orange transition-colors">
                            {result.title}
                          </div>
                          <div className="text-white/40 text-xs mt-0.5">{result.description}</div>
                          <div className="text-power-orange/40 text-xs mt-1 font-mono">{result.path}</div>
                        </div>
                        <ArrowRight size={14} className="text-white/20 shrink-0 ml-auto mt-2 group-hover:text-power-orange transition-colors" />
                      </button>
                    ))}
                  </div>
                ) : searchQuery.length > 1 ? (
                  <div className="p-8 text-center text-white/40">
                    <Search size={32} className="mx-auto mb-3 opacity-50" />
                    <p className="font-accent">No results found for "{searchQuery}"</p>
                    <p className="text-sm mt-1">Try different keywords or browse our pages</p>
                  </div>
                ) : (
                  <div className="p-4">
                    <p className="text-xs text-white/30 font-accent uppercase tracking-wider px-3 mb-2">Quick Links</p>
                    {[
                      { label: 'Solar Solutions', path: '/solar-solutions' },
                      { label: 'Request a Quote', path: '/contact#quote' },
                      { label: 'Our Services', path: '/services' },
                      { label: 'Career Openings', path: '/careers' },
                    ].map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSearchNavigate(link.path)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all font-accent text-sm"
                      >
                        <ArrowRight size={14} className="text-power-orange/50" />
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
