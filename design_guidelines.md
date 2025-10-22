# Design Guidelines: FixMy Laptop & PC Website

## Design Approach
**Hybrid Approach**: Service business best practices + Material Design foundation
- Inspired by professional service platforms (Thumbtack, Yelp for Business) with trust-building elements
- Clean, accessible design that builds credibility for local tech repair services
- Mobile-first approach (many customers will visit via phone)

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Brand Blue: 215 85% 40% (trust, technology)
- Deep Navy: 215 60% 20% (professionalism)

**Accent & Supporting:**
- Success Green: 142 70% 45% (for positive CTAs, reviews)
- Warm Orange: 25 95% 55% (WhatsApp CTA, urgency elements)
- Light Background: 220 15% 96%
- White: 0 0% 100%

**Dark Mode** (if implemented): Deep Navy base with muted blues

### B. Typography
**Font Stack:**
- Primary: 'Inter' (Google Fonts) - headings, navigation, buttons
- Secondary: 'Open Sans' - body text, descriptions

**Hierarchy:**
- H1: 3xl to 4xl, bold (hero headlines)
- H2: 2xl to 3xl, semibold (section headers)
- H3: xl to 2xl, semibold (service cards, subsections)
- Body: base to lg, regular
- Small: sm (captions, supporting text)

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 (mobile)
- Card gaps: gap-6 to gap-8

**Container Strategy:**
- Full-width sections with inner max-w-7xl
- Content sections: max-w-6xl
- Forms: max-w-2xl

### D. Component Library

**Navigation:**
- Sticky header with logo, navigation links, prominent "Contact Us" CTA
- Mobile: Hamburger menu with smooth slide-in
- WhatsApp quick-access icon in top-right corner

**Home Page:**
- Hero: Full-width with background image (repair shop or tech workspace), overlay with gradient (deep navy to transparent)
  - Main headline: "Expert Laptop & PC Repair in Yewalewadi, Pune"
  - Subheadline highlighting quick turnaround/quality service
  - Dual CTAs: "Get Free Quote" (primary) + "WhatsApp Us" (with icon, orange accent)
- Services preview: 3-column grid (laptop, PC, mobile) with icons, brief descriptions, "Learn More" links
- Trust section: 2-column with stats (years in business, customers served, satisfaction rate) + location highlight
- Quick CTA banner: "Need Urgent Repair?" with phone and WhatsApp buttons
- Recent testimonials: 2-3 cards with star ratings

**Services Page:**
- Page header with breadcrumbs
- Service cards: Left-aligned image + right content layout alternating
  - Each card: Service icon, name, detailed description, price range indicator, CTA
- Common repairs list: Checklist-style with checkmarks
- Process timeline: 4-step visual (Diagnose → Repair → Test → Deliver)

**About Us:**
- Business story section with photo of shop/team
- Location highlight: Embedded map, address with "Get Directions" link
- Why choose us: 4-column grid (certified technicians, genuine parts, warranty, quick service)
- Team section: Cards with photos (if available), names, roles

**Contact Page:**
- Split layout: Left (contact form), Right (info card)
- Info card includes: Full address, phone (clickable), WhatsApp button (prominent, orange), business hours
- Map integration below form
- Alternative contact methods: Email, social media links

**Customer Reviews:**
- Star rating summary at top (average + total count)
- Review cards: Grid layout, each with customer name, rating stars, date, review text, service type
- Filter by rating/service type
- "Leave a Review" CTA button

**Gallery:**
- Masonry grid layout (2-3 columns responsive)
- Categories: Shop Interior, Repair Work, Before/After
- Lightbox on click for full-size viewing
- Captions describing repair type

**Footer:**
- 3-column: Business Info (logo, tagline), Quick Links (all pages), Contact Info
- Location emphasis: "Serving Yewalewadi, Pune"
- Social proof: "Trusted by 1000+ customers" badge

### E. Interactive Elements
**Buttons:**
- Primary: Solid blue with white text, rounded-lg, px-6 py-3
- Secondary: Outline blue with subtle hover fill
- WhatsApp CTA: Orange background, white WhatsApp icon + text
- On hero images: Backdrop blur (backdrop-blur-sm) with semi-transparent background

**Cards:**
- Service cards: White background, shadow-md, rounded-xl, hover:shadow-lg transition
- Review cards: Border, rounded-lg, subtle hover lift
- Consistent padding: p-6

**Forms:**
- Input fields: Border-2, rounded-lg, focus:ring-2 (blue accent)
- Labels above inputs
- Clear error states with red accent
- Success feedback in green

### Images
**Required Images:**
1. **Hero (Home)**: Wide shot of repair workspace or technician fixing laptop - professional, well-lit
2. **Services**: Individual images for laptop repair, PC repair, mobile repair work
3. **About Us**: Shop exterior/interior, team photo if available
4. **Gallery**: 12-15 images minimum - mix of workspace, repair process, before/after shots, customer handoffs
5. **Testimonial avatars**: Placeholder or actual customer photos (with permission)

**Image Treatment:**
- Hero: Overlay with gradient (from deep navy at 70% opacity to transparent)
- Service images: Rounded corners, aspect-ratio 16:9
- Gallery: Natural aspect ratios, rounded-lg

### F. Animations
Minimal, purposeful animations only:
- Smooth page transitions
- Hover states on cards (lift + shadow)
- Button hover/active states (built-in)
- Mobile menu slide-in
- No scroll animations or excessive motion

### Trust & Credibility Elements
- Prominent display of certifications/badges (if applicable)
- Customer count/years in business
- Star ratings prominently shown
- Location emphasized (local business credibility)
- WhatsApp integration (familiar, trusted communication)
- Before/after gallery showcasing quality work

**Design Principle**: Clean, trustworthy, accessible - prioritize clarity over creativity. Users need confidence in repair quality and easy contact access.