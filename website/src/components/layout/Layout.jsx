import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUp, Cookie, Shield, FileText } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'

// Scroll Progress Bar
function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5">
      <motion.div
        className="h-full bg-gradient-to-r from-power-orange via-power-orange-light to-power-orange"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// Back to Top button
function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggle, { passive: true })
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-power-orange text-white shadow-glow flex items-center justify-center hover:bg-power-orange-dark transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// Cookie Consent Banner
function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('pp-cookies-accepted')) {
        setShow(true)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    localStorage.setItem('pp-cookies-accepted', 'true')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[60] p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="max-w-5xl mx-auto bg-power-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Cookie size={24} className="text-power-orange shrink-0 mt-1 sm:mt-0" />
            <div className="flex-1">
              <p className="text-white font-accent font-medium text-sm">We use cookies</p>
              <p className="text-white/40 text-xs mt-1 font-body">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => setShow(false)}
                className="px-4 py-2 text-white/50 hover:text-white text-sm font-accent transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 bg-power-orange text-white font-accent font-semibold text-sm rounded-xl hover:bg-power-orange-dark transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Policy Modal Component
function PolicyModal({ title, icon: Icon, children, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-2xl max-h-[80vh] bg-power-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-power-orange/10 flex items-center justify-center">
                  <Icon size={20} className="text-power-orange" />
                </div>
                <h3 className="text-white font-heading font-bold text-lg">{title}</h3>
              </div>
              <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh] text-white/60 text-sm font-body leading-relaxed space-y-4">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Layout() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false)

  useEffect(() => {
    const openPrivacy = () => setPrivacyOpen(true)
    const openTerms = () => setTermsOpen(true)
    const openCookie = () => setCookiePolicyOpen(true)
    document.addEventListener('openPrivacyPolicy', openPrivacy)
    document.addEventListener('openTerms', openTerms)
    document.addEventListener('openCookiePolicy', openCookie)
    return () => {
      document.removeEventListener('openPrivacyPolicy', openPrivacy)
      document.removeEventListener('openTerms', openTerms)
      document.removeEventListener('openCookiePolicy', openCookie)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
      <CookieConsent />

      {/* Privacy Policy Modal */}
      <PolicyModal title="Privacy Policy" icon={Shield} isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)}>
        <p><strong className="text-white">Effective Date:</strong> January 1, 2024</p>
        <p>Powerphase Electrical Engineering Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        <h4 className="text-white font-semibold mt-4">Information We Collect</h4>
        <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. This includes names, phone numbers, email addresses, and mailing addresses.</p>
        <h4 className="text-white font-semibold mt-4">How We Use Your Information</h4>
        <p>We use personal information collected via our website for business purposes including: providing and maintaining our services, responding to your inquiries and requests, sending you marketing and promotional communications (with your consent), and improving our website and services.</p>
        <h4 className="text-white font-semibold mt-4">Information Security</h4>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, no security measures are perfect or impenetrable.</p>
        <h4 className="text-white font-semibold mt-4">Contact Us</h4>
        <p>If you have questions about this Privacy Policy, please contact us at shonayishepard1999@gmail.com or call +263 777 040 676.</p>
      </PolicyModal>

      {/* Terms Modal */}
      <PolicyModal title="Terms of Service" icon={FileText} isOpen={termsOpen} onClose={() => setTermsOpen(false)}>
        <p><strong className="text-white">Last Updated:</strong> January 1, 2024</p>
        <p>These Terms of Service govern your use of the Powerphase Electrical Engineering Pvt Ltd website and services. By accessing or using our services, you agree to be bound by these terms.</p>
        <h4 className="text-white font-semibold mt-4">Services</h4>
        <p>Powerphase provides electrical engineering services including but not limited to solar installations, power distribution, industrial automation, and general electrical works. All services are subject to availability and applicable regulations in Zimbabwe.</p>
        <h4 className="text-white font-semibold mt-4">Quotes & Pricing</h4>
        <p>All quotes provided are estimates and may be subject to change based on site conditions, material costs, and project scope. Final pricing will be confirmed in a formal agreement before work commences.</p>
        <h4 className="text-white font-semibold mt-4">Limitation of Liability</h4>
        <p>Powerphase shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.</p>
        <h4 className="text-white font-semibold mt-4">Governing Law</h4>
        <p>These terms shall be governed by the laws of Zimbabwe. Any disputes shall be resolved in the courts of Harare.</p>
      </PolicyModal>

      {/* Cookie Policy Modal */}
      <PolicyModal title="Cookie Policy" icon={Cookie} isOpen={cookiePolicyOpen} onClose={() => setCookiePolicyOpen(false)}>
        <p><strong className="text-white">About Cookies</strong></p>
        <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
        <h4 className="text-white font-semibold mt-4">Types of Cookies We Use</h4>
        <p><strong className="text-white/80">Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</p>
        <p><strong className="text-white/80">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information.</p>
        <p><strong className="text-white/80">Preference Cookies:</strong> Allow us to remember your preferences and settings for future visits.</p>
        <h4 className="text-white font-semibold mt-4">Managing Cookies</h4>
        <p>You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your experience on our website.</p>
      </PolicyModal>
    </div>
  )
}
