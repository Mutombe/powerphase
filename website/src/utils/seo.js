import React from 'react'
import { useEffect } from 'react'

const defaultSEO = {
  title: 'Powerphase Electrical & Engineering | Premier Electrical Solutions in Zimbabwe',
  description: 'Zimbabwe\'s leading electrical engineering company offering solar installations, power distribution, industrial wiring, and comprehensive electrical solutions in Harare.',
  keywords: 'electrical engineering Zimbabwe, solar installation Harare, power distribution, Powerphase',
  ogImage: '/og-image.jpg',
  canonical: 'https://powerphase.co.zw',
}

export function usePageSEO(pageSEO = {}) {
  useEffect(() => {
    const merged = { ...defaultSEO, ...pageSEO }

    // Set title
    document.title = merged.title

    // Helper to set meta tag
    const setMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', merged.description)
    setMeta('keywords', merged.keywords)
    setMeta('og:title', merged.title, true)
    setMeta('og:description', merged.description, true)
    setMeta('og:image', merged.ogImage, true)
    setMeta('twitter:title', merged.title, true)
    setMeta('twitter:description', merged.description, true)

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', merged.canonical)

    return () => {
      document.title = defaultSEO.title
    }
  }, [pageSEO.title])
}

// Page-specific SEO data
export const pageSEOData = {
  home: {
    title: 'Powerphase Electrical & Engineering | Premier Electrical Solutions in Zimbabwe',
    description: 'Zimbabwe\'s leading electrical engineering company. Solar installations, industrial wiring, power distribution, and comprehensive electrical solutions in Harare.',
    keywords: 'electrical engineering Zimbabwe, solar installation Harare, power distribution, Powerphase, electrical contractor',
    canonical: 'https://powerphase.co.zw',
  },
  about: {
    title: 'About Us | Powerphase Electrical & Engineering',
    description: 'Learn about Powerphase Electrical Engineering - our history, mission, team, and commitment to excellence in electrical solutions across Zimbabwe.',
    keywords: 'about Powerphase, electrical engineering company Zimbabwe, our team, company history',
    canonical: 'https://powerphase.co.zw/about',
  },
  services: {
    title: 'Our Services | Powerphase Electrical & Engineering',
    description: 'Comprehensive electrical engineering services including solar installations, power distribution, industrial automation, and maintenance in Zimbabwe.',
    keywords: 'electrical services, solar installation, power distribution, industrial automation, generator installation',
    canonical: 'https://powerphase.co.zw/services',
  },
  solar: {
    title: 'Solar Solutions | Powerphase Electrical & Engineering',
    description: 'Professional solar panel installation services in Zimbabwe. Complete solar systems including panels, inverters, batteries, and mounting kits.',
    keywords: 'solar panels Zimbabwe, solar installation Harare, solar system packages, renewable energy Zimbabwe',
    canonical: 'https://powerphase.co.zw/solar-solutions',
  },
  projects: {
    title: 'Our Projects | Powerphase Electrical & Engineering',
    description: 'Browse our portfolio of completed electrical engineering projects across Zimbabwe - commercial, residential, and industrial installations.',
    keywords: 'electrical projects Zimbabwe, completed installations, project portfolio, case studies',
    canonical: 'https://powerphase.co.zw/projects',
  },
  careers: {
    title: 'Careers | Powerphase Electrical & Engineering',
    description: 'Join Zimbabwe\'s leading electrical engineering team. View current openings and apply for exciting career opportunities at Powerphase.',
    keywords: 'electrical engineering jobs Zimbabwe, careers Harare, job openings, hiring electricians',
    canonical: 'https://powerphase.co.zw/careers',
  },
  contact: {
    title: 'Contact Us | Powerphase Electrical & Engineering',
    description: 'Get in touch with Powerphase Electrical Engineering. Request a quote, find our location, or call us at +263 777 040 676.',
    keywords: 'contact Powerphase, electrical engineering quote, Harare electrician, phone number, location',
    canonical: 'https://powerphase.co.zw/contact',
  },
  blog: {
    title: 'Blog & Insights | Powerphase Electrical & Engineering',
    description: 'Read the latest electrical engineering insights, solar energy tips, and industry news from Powerphase.',
    keywords: 'electrical blog, solar energy tips, power saving, electrical safety, Zimbabwe energy',
    canonical: 'https://powerphase.co.zw/blog',
  },
}
