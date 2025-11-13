# SEO Optimization TODO for Abhishek Pharma Website

## Phase 1: Meta Tags Implementation
- [ ] Install react-helmet-async dependency
- [ ] Create src/components/SEO.jsx reusable component
- [ ] Add HelmetProvider to src/App.jsx
- [ ] Add SEO component to Home.jsx with pharma-specific meta tags
- [ ] Add SEO component to About.jsx
- [ ] Add SEO component to Products.jsx
- [ ] Add SEO component to Contact.jsx
- [ ] Add SEO component to Request.jsx

## Phase 2: Sitemap & Robots Setup
- [ ] Create public/sitemap.xml with all routes
- [ ] Create public/robots.txt allowing all crawlers
- [ ] Verify sitemap and robots are accessible after build

## Phase 3: Structured Data (JSON-LD)
- [ ] Create src/components/StructuredData.jsx component
- [ ] Add Organization schema for Abhishek Pharma
- [ ] Add Product schema (generic medicine example)
- [ ] Add FAQ schema to Home.jsx
- [ ] Integrate StructuredData component into relevant pages

## Phase 4: Technical SEO - Prerendering
- [ ] Choose prerendering method (Prerender.io or react-snap)
- [ ] Implement prerendering configuration in vite.config.js
- [ ] Test prerendered pages for SEO friendliness
- [ ] Update build process to include prerendering

## Phase 5: Core Web Vitals Optimization
- [ ] Convert images to WebP format and implement responsive images
- [ ] Add lazy loading to images
- [ ] Optimize CSS/JS bundle size (minification, tree shaking)
- [ ] Fix LCP (Largest Contentful Paint) issues
- [ ] Fix CLS (Cumulative Layout Shift) issues
- [ ] Fix INP (Interaction to Next Paint) issues
- [ ] Run Lighthouse audits and iterate on scores

## Phase 6: Google Search Console Setup
- [ ] Verify abhishekpharma.in domain ownership
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Request indexing for all pages
- [ ] Monitor coverage reports and fix issues
- [ ] Set up performance monitoring

## Phase 7: Content & Pharma SEO Guidelines
- [ ] Review and optimize content for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- [ ] Implement keyword strategy for pharma/medical terms
- [ ] Structure pages for better ranking (headings, internal links)
- [ ] Add trust signals (certifications, testimonials, contact info)

## Phase 8: Optional - Migration to Next.js
- [ ] Evaluate benefits vs. effort for migration
- [ ] Create Next.js project structure if proceeding
- [ ] Migrate components with SEO optimizations
- [ ] Test SSR/SSG performance

## Phase 9: Final Review & Monitoring
- [ ] Run final SEO audit
- [ ] Create SEO checklist for ongoing maintenance
- [ ] Document common mistakes to avoid
- [ ] Create prioritized action plan for future improvements
- [ ] Set up ongoing monitoring and reporting
