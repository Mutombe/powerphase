// Search index for site-wide search functionality
// Each entry maps searchable content to a route and section
export const searchIndex = [
  // Home Page
  { title: 'Home', path: '/', section: 'hero', keywords: ['home', 'powerphase', 'electrical', 'engineering', 'main'], description: 'Powerphase home page' },
  { title: 'Our Services Overview', path: '/#services', section: 'services', keywords: ['services', 'electrical', 'solar', 'wiring', 'installation', 'maintenance', 'distribution'], description: 'Overview of all electrical services' },
  { title: 'Company Statistics', path: '/#stats', section: 'stats', keywords: ['stats', 'projects', 'clients', 'experience', 'years', 'completed', 'numbers'], description: 'Our achievements in numbers' },
  { title: 'Client Testimonials', path: '/#testimonials', section: 'testimonials', keywords: ['testimonials', 'reviews', 'clients', 'feedback', 'rating'], description: 'What our clients say about us' },

  // About Page
  { title: 'About Us', path: '/about', section: 'hero', keywords: ['about', 'company', 'history', 'story', 'who we are'], description: 'Learn about Powerphase' },
  { title: 'Our Mission & Vision', path: '/about#mission', section: 'mission', keywords: ['mission', 'vision', 'values', 'goals', 'purpose'], description: 'Our mission and vision statements' },
  { title: 'Our Team', path: '/about#team', section: 'team', keywords: ['team', 'staff', 'engineers', 'technicians', 'leadership', 'people'], description: 'Meet our expert team' },
  { title: 'Company Timeline', path: '/about#timeline', section: 'timeline', keywords: ['timeline', 'history', 'milestones', 'journey', 'growth'], description: 'Our company journey' },

  // Services Page
  { title: 'All Services', path: '/services', section: 'hero', keywords: ['services', 'all services', 'what we do', 'solutions'], description: 'Complete list of our services' },
  { title: 'Electrical Installations', path: '/services/electrical-installations', section: 'service', keywords: ['electrical', 'installation', 'wiring', 'commercial', 'residential', 'industrial'], description: 'Professional electrical installations' },
  { title: 'Power Distribution', path: '/services/power-distribution', section: 'service', keywords: ['power', 'distribution', 'transformer', 'switchgear', 'substation', 'high voltage'], description: 'Power distribution systems' },
  { title: 'Solar Energy Solutions', path: '/solar-solutions', section: 'hero', keywords: ['solar', 'panels', 'energy', 'renewable', 'green', 'photovoltaic', 'inverter', 'battery'], description: 'Solar panel installation services' },
  { title: 'Industrial Automation', path: '/services/industrial-automation', section: 'service', keywords: ['automation', 'industrial', 'PLC', 'SCADA', 'control', 'systems'], description: 'Industrial automation solutions' },
  { title: 'Maintenance Services', path: '/services/maintenance', section: 'service', keywords: ['maintenance', 'repair', 'service', 'preventive', 'corrective', 'support'], description: 'Electrical maintenance and repair' },
  { title: 'Generator Installation', path: '/services/generators', section: 'service', keywords: ['generator', 'backup', 'power', 'standby', 'diesel', 'emergency'], description: 'Generator installation and maintenance' },

  // Solar Solutions Page
  { title: 'Solar Panel Systems', path: '/solar-solutions', section: 'systems', keywords: ['solar', 'panel', 'system', 'KVA', 'monocrystalline', 'hybrid'], description: 'Solar system packages' },
  { title: '6.2 KVA Solar System', path: '/solar-solutions#packages', section: 'packages', keywords: ['6.2 KVA', 'solar package', 'lithium', 'battery', 'inverter', '2900'], description: '6.2 KVA Solar System package' },
  { title: 'Solar Financing', path: '/solar-solutions#financing', section: 'financing', keywords: ['financing', 'payment', 'plan', 'afford', 'cost', 'price', 'budget'], description: 'Solar financing options' },

  // Projects Page
  { title: 'Our Projects', path: '/projects', section: 'hero', keywords: ['projects', 'portfolio', 'work', 'completed', 'case study'], description: 'View our completed projects' },
  { title: 'Commercial Projects', path: '/projects#commercial', section: 'commercial', keywords: ['commercial', 'office', 'business', 'retail', 'shop'], description: 'Commercial electrical projects' },
  { title: 'Residential Projects', path: '/projects#residential', section: 'residential', keywords: ['residential', 'home', 'house', 'domestic'], description: 'Residential electrical projects' },
  { title: 'Industrial Projects', path: '/projects#industrial', section: 'industrial', keywords: ['industrial', 'factory', 'manufacturing', 'plant', 'warehouse'], description: 'Industrial electrical projects' },

  // Careers Page
  { title: 'Careers', path: '/careers', section: 'hero', keywords: ['careers', 'jobs', 'hiring', 'employment', 'work with us', 'opportunities', 'vacancy'], description: 'Join our team' },
  { title: 'Open Positions', path: '/careers#positions', section: 'positions', keywords: ['positions', 'openings', 'vacancies', 'apply', 'job listing'], description: 'Current job openings' },
  { title: 'Company Benefits', path: '/careers#benefits', section: 'benefits', keywords: ['benefits', 'perks', 'salary', 'insurance', 'training', 'development'], description: 'Employee benefits and perks' },

  // Contact Page
  { title: 'Contact Us', path: '/contact', section: 'hero', keywords: ['contact', 'reach', 'phone', 'email', 'address', 'location', 'map'], description: 'Get in touch with us' },
  { title: 'Request a Quote', path: '/contact#quote', section: 'quote', keywords: ['quote', 'estimate', 'pricing', 'cost', 'request', 'inquiry'], description: 'Request a free quote' },
  { title: 'Our Location', path: '/contact#map', section: 'map', keywords: ['location', 'map', 'directions', 'address', 'Greendale', 'Harare', 'Clifton'], description: 'Find our office' },

  // Blog Page
  { title: 'Blog & Insights', path: '/blog', section: 'hero', keywords: ['blog', 'news', 'articles', 'insights', 'updates', 'tips'], description: 'Latest news and electrical tips' },
]

// Fuzzy search function
export function searchSite(query) {
  if (!query || query.length < 2) return []
  
  const normalizedQuery = query.toLowerCase().trim()
  const terms = normalizedQuery.split(/\s+/)
  
  const results = searchIndex.map(item => {
    let score = 0
    const titleLower = item.title.toLowerCase()
    const descLower = item.description.toLowerCase()
    
    // Exact title match
    if (titleLower.includes(normalizedQuery)) score += 10
    
    // Term matching in title
    terms.forEach(term => {
      if (titleLower.includes(term)) score += 5
    })
    
    // Term matching in description
    terms.forEach(term => {
      if (descLower.includes(term)) score += 3
    })
    
    // Keyword matching
    terms.forEach(term => {
      item.keywords.forEach(keyword => {
        if (keyword.includes(term) || term.includes(keyword)) score += 4
      })
    })
    
    return { ...item, score }
  })
  
  return results
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
}
