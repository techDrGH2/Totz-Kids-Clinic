# Healthcare Website - SEO / AEO / GEO / Schema Cursor Prompt

> Paste this into `.cursorrules` or your Cursor project instructions file.
> Replace `{{PLACEHOLDERS}}` per client before use.

---

## PROJECT CONTEXT

You are building a **Next.js 14+ healthcare website** (App Router) for:

- **Client type**: `{{| clinic |}}`
- **Specialty**: `{{MBBS, DNB Pediatrics, IDPCCM Consultant Pediatrician & Pediatric Intensivist}}`
- **Business name**: `{{ Tiny Totz Kids Clinic.}}`
- **Location(s)**: `{{Puppalguda,hyderabd}}`
- **Primary services**: `{{Common Illness Management,Vaccination,Newborn Care,Well-Child Visits,Nutrition Assessment & Diet Advice,Allergies & Asthma,Obesity & Puberty Issues,Seizures & Developmental Abnormalities}}`
- **Languages served**: `{{e.g. English, Telugu, Hindi}}`
- **Domain**: `{{https://tinytotzclinic.com/}}`

Your job is to implement **world-class on-page SEO, AEO, GEO, and Schema Markup** across every page, component, and route so this site ranks on Google, answers AI search engines (Perplexity, Gemini, ChatGPT, Bing Copilot), and appears in local map packs.

---

## TECH STACK RULES

- **Framework**: Next.js 14+ with App Router only (`app/` directory).
- **Metadata**: Always use the `export const metadata` API or `generateMetadata()` - never `<head>` tags directly.
- **Structured Data**: Inject via `<script type="application/ld+json">` in `layout.tsx` or per-page `page.tsx`.
- **Images**: Always use `next/image` with descriptive `alt` text.
- **Links**: Use `next/link` for all internal links.
- **Fonts**: Use `next/font` (Google or local) for CLS-safe font loading.
- **Sitemap**: Generate via `app/sitemap.ts` using the `MetadataRoute.Sitemap` type.
- **Robots**: Generate via `app/robots.ts`.

---

## 1. METADATA - PER PAGE

Every `page.tsx` must export a `generateMetadata()` or `metadata` object. Use this pattern:

```ts
// app/services/knee-replacement/page.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Knee Replacement Surgery in {{City}} | {{Business Name}}',
  description:
    'Expert knee replacement surgery at {{Business Name}}, {{City}}. Board-certified orthopedic surgeons, advanced implants, fast recovery. Book a free consultation today.',
  keywords: [
    'knee replacement surgery {{City}}',
    'best orthopedic surgeon {{City}}',
    'total knee replacement cost {{City}}',
    'knee replacement hospital near me',
  ],
  alternates: {
    canonical: 'https://{{domain}}/services/knee-replacement',
  },
  openGraph: {
    title: 'Knee Replacement Surgery in {{City}} | {{Business Name}}',
    description: '...',
    url: 'https://{{domain}}/services/knee-replacement',
    siteName: '{{Business Name}}',
    images: [
      {
        url: '/og/knee-replacement.jpg',
        width: 1200,
        height: 630,
        alt: 'Knee replacement surgery at {{Business Name}}, {{City}}',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knee Replacement Surgery in {{City}}',
    description: '...',
    images: ['/og/knee-replacement.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};
```

**Title formula**: `[Primary Keyword in City] | [Business Name]` - max 60 chars.  
**Description formula**: Lead with the service + location benefit + a CTA - 140-160 chars.

---

## 2. SCHEMA MARKUP - REQUIRED TYPES

Inject all schemas as JSON-LD. Place global schemas in `app/layout.tsx` and page-level schemas in each `page.tsx`.

### 2a. Organization / LocalBusiness (layout.tsx - global)

```ts
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalOrganization', 'LocalBusiness'],
  name: '{{Business Name}}',
  url: 'https://{{domain}}',
  logo: 'https://{{domain}}/logo.png',
  image: 'https://{{domain}}/og/clinic.jpg',
  description: '{{One-line description of the clinic and its specialty}}',
  telephone: '{{+91-XXXXXXXXXX}}',
  email: '{{contact@example.com}}',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '{{Street}}',
    addressLocality: '{{City}}',
    addressRegion: '{{State}}',
    postalCode: '{{PIN}}',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '{{lat}}',
    longitude: '{{lng}}',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  priceRange: '{{₹₹ or Free Consultation}}',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Card, UPI, Insurance',
  hasMap: 'https://maps.google.com/?q={{lat}},{{lng}}',
  sameAs: [
    '{{https://www.facebook.com/page}}',
    '{{https://www.instagram.com/handle}}',
    '{{https://www.linkedin.com/company/slug}}',
    '{{https://g.page/google-business-id}}',
  ],
};
```

### 2b. Physician / Doctor (for doctor profile pages)

```ts
const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. {{Full Name}}',
  description: '{{Short bio with specialty and years of experience}}',
  image: 'https://{{domain}}/doctors/dr-name.jpg',
  telephone: '{{+91-XXXXXXXXXX}}',
  url: 'https://{{domain}}/doctors/{{slug}}',
  medicalSpecialty: '{{e.g. Orthopedic Surgery}}',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    recognizedBy: { '@type': 'Organization', name: '{{Medical College / Board}}' },
  },
  worksFor: {
    '@type': 'MedicalOrganization',
    name: '{{Business Name}}',
    url: 'https://{{domain}}',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: '{{City}}',
    addressRegion: '{{State}}',
    addressCountry: 'IN',
  },
  availableService: [
    { '@type': 'MedicalProcedure', name: '{{Service 1}}' },
    { '@type': 'MedicalProcedure', name: '{{Service 2}}' },
  ],
};
```

### 2c. MedicalProcedure / Service (for each service page)

```ts
const procedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: '{{Procedure Name, e.g. Total Knee Replacement}}',
  description: '{{Full description of the procedure}}',
  procedureType: 'https://health-lifesci.schema.org/SurgicalProcedure',
  bodyLocation: '{{e.g. Knee Joint}}',
  followup: '{{e.g. Physiotherapy for 6 weeks post-surgery}}',
  preparation: '{{e.g. Pre-op blood tests, fasting 8 hours}}',
  howPerformed: '{{e.g. Minimally invasive surgery under spinal anaesthesia}}',
  recognizingAuthority: {
    '@type': 'MedicalOrganization',
    name: '{{e.g. Indian Orthopaedic Association}}',
  },
  relevantSpecialty: {
    '@type': 'MedicalSpecialty',
    name: '{{e.g. Orthopedic Surgery}}',
  },
  performer: {
    '@type': 'Physician',
    name: 'Dr. {{Name}}',
    url: 'https://{{domain}}/doctors/{{slug}}',
  },
};
```

### 2d. FAQ Schema (for every FAQ section)

```ts
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does {{procedure}} cost in {{City}}?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of {{procedure}} at {{Business Name}} in {{City}} ranges from ₹X to ₹Y depending on the implant type, hospital room, and insurance coverage. Call us at {{phone}} for a free cost estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is {{procedure}} covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most health insurance plans cover {{procedure}}. We are empanelled with major insurers including Star Health, HDFC Ergo, and Ayushman Bharat. Our billing team will help you with cashless processing.',
      },
    },
    // Add 5-10 questions per page
  ],
};
```

### 2e. Review / AggregateRating

```ts
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: '{{Business Name}}',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '{{number from Google/platform}}',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: '{{Patient First Name + Initial}}' },
      datePublished: '{{YYYY-MM-DD}}',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: '{{Verbatim review text}}',
    },
  ],
};
```

### 2f. BreadcrumbList (every inner page)

```ts
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://{{domain}}' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://{{domain}}/services' },
    {
      '@type': 'ListItem',
      position: 3,
      name: '{{Page Name}}',
      item: 'https://{{domain}}/services/{{slug}}',
    },
  ],
};
```

### 2g. WebSite + Sitelinks Search

```ts
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '{{Business Name}}',
  url: 'https://{{domain}}',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://{{domain}}/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};
```

---

## 3. AEO - ANSWER ENGINE OPTIMIZATION

AI search engines (Perplexity, Gemini, Bing Copilot, ChatGPT) pull direct answers from pages. Implement all of the following:

### 3a. Every Service / Condition Page Must Have

1. **Definition paragraph** - first 100 words must directly define the topic.  
   Format: *"{{Procedure}} is a surgical/medical procedure that... performed at {{Business Name}} in {{City}} by..."*

2. **Concise answer blocks** - use `<section>` with a single `<h2>` question + `<p>` answer (1-3 sentences). This is what AI engines extract.

3. **"At a glance" summary box** - a `<dl>` or styled card at the top of each service page:
   ```html
   <dl>
     <dt>Procedure Duration</dt><dd>2-3 hours</dd>
     <dt>Hospital Stay</dt><dd>3-5 days</dd>
     <dt>Recovery Time</dt><dd>6-8 weeks</dd>
     <dt>Success Rate</dt><dd>95%+</dd>
     <dt>Cost Range</dt><dd>₹1.2L - ₹2.5L</dd>
   </dl>
   ```

4. **FAQ component** (minimum 8 questions per service page):
   - Use the `<details>/<summary>` HTML pattern OR a React accordion.
   - Always wrap the section in a `<div itemScope itemType="https://schema.org/FAQPage">` and each Q&A in itemProp markup alongside the JSON-LD.

5. **Step-by-step process section** - "What happens during your visit":
   ```html
   <ol>
     <li><strong>Consultation</strong> - 30-min with Dr. {{Name}}...</li>
     <li><strong>Pre-op Tests</strong> - Blood work, X-ray, ECG...</li>
     ...
   </ol>
   ```

6. **Comparison table** for treatments (when alternatives exist):
   | | Option A | Option B | Our Approach |
   |-|----------|----------|-------------|
   Wrap in `<table>` with `<caption>` for accessibility.

### 3b. Content Rules for AEO

- Every heading (`h1`, `h2`, `h3`) must be a **complete question or statement** a patient would type.
- Use **plain language** (7th-grade reading level). Avoid jargon without immediate definition.
- Add **"People also ask" style H3s** throughout content: *"Is knee replacement painful?"*, *"How long do I need to rest after surgery?"*
- First sentence of every paragraph must be a standalone answer; supporting detail follows.
- Never bury the key fact. Put it first, then explain.

---

## 4. GEO - GENERATIVE ENGINE OPTIMIZATION

GEO ensures AI-generated answers cite and reference your site. Apply these rules:

### 4a. E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trust)

Every service page must include:
- **Author byline** with doctor's name, degree, years of experience, and link to `/doctors/{{slug}}`
- **Last reviewed date**: `<time dateTime="{{YYYY-MM-DD}}">Last reviewed: {{Month YYYY}}</time>`
- **Citations section**: Link to 2-3 authoritative sources (PubMed, WHO, ICMR, MOH).
- **Credentials block** on doctor pages: qualifications, hospital affiliations, publications.

### 4b. Unique Statistics and Data

AI engines prefer pages with specific, citable data. Always include:
- Local outcome statistics: *"Over 2,000 knee replacements performed at our {{City}} centre"*
- Specific timeframes: *"Patients typically walk within 24 hours post-surgery"*
- Named technology/implants: *"We use Zimmer Biomet and Stryker implants with 20-year guarantee"*

### 4c. Entity Mentions (for AI knowledge graph)

Mention related named entities consistently throughout copy:
- Doctor full name + credentials
- Clinic/hospital full name + city
- Specific procedures (use the exact medical term + common name)
- Insurance names, implant brand names, hospital affiliations
- Geographic landmarks near the clinic (for local context)

### 4d. Semantic Content Clusters

Build topical authority by interlinking:
```
/conditions/knee-arthritis  ←→  /services/knee-replacement
/services/knee-replacement  ←→  /doctors/dr-name
/doctors/dr-name            ←→  /blog/recovery-after-knee-surgery
```
Every service page must link to:
- The relevant condition page
- The performing doctor's page
- 2+ related blog posts
- The appointment booking page

---

## 5. LOCAL SEO - GOOGLE MAPS / GMB

### 5a. NAP Consistency

The **Name, Address, Phone** must be identical across:
- Every page footer
- Schema markup
- Google Business Profile
- All directory listings (Practo, Justdial, Sulekha)

Footer NAP markup:
```html
<address itemScope itemType="https://schema.org/LocalBusiness">
  <span itemProp="name">{{Business Name}}</span>
  <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
    <span itemProp="streetAddress">{{Street}}</span>,
    <span itemProp="addressLocality">{{City}}</span>,
    <span itemProp="addressRegion">{{State}}</span> -
    <span itemProp="postalCode">{{PIN}}</span>
  </span>
  <a href="tel:{{+91XXXXXXXXXX}}" itemProp="telephone">{{+91 XXXX XXX XXX}}</a>
</address>
```

### 5b. Location Pages (for multi-location clinics)

Create `/locations/{{city-name}}/page.tsx` for each location with:
- Unique h1: *"{{Business Name}} - {{City}} Branch"*
- Local area keyword density (mention landmarks, nearby localities)
- Embedded Google Maps iframe
- Location-specific reviews
- Location-specific schema with exact geo coordinates

### 5c. Service-Area Content

In page content, naturally mention:
- The clinic's city and PIN code
- Nearby localities patients come from
- Distance references: *"Serving patients from Kondapur, Madhapur, Gachibowli, and HITEC City"*

---

## 6. TECHNICAL SEO

### 6a. app/sitemap.ts

```ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://{{domain}}';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/doctors`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    // Add each service, doctor, blog post, and location dynamically
  ];
}
```

### 6b. app/robots.ts

```ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you', '/_next/'],
      },
    ],
    sitemap: 'https://{{domain}}/sitemap.xml',
    host: 'https://{{domain}}',
  };
}
```

### 6c. Core Web Vitals - Mandatory

- All images: `<Image>` with explicit `width` and `height`. Hero image gets `priority` prop.
- Above-fold LCP image: `fetchPriority="high"` or `priority` on `<Image>`.
- No layout shift on fonts: use `next/font` with `display: 'swap'`.
- Lazy load all below-fold images (default in `next/image`).
- No render-blocking scripts: use `<Script strategy="afterInteractive">` or `"lazyOnload"`.

### 6d. Canonical URLs

```ts
// In every page's metadata
alternates: {
  canonical: 'https://{{domain}}/{{page-path}}',
}
```

### 6e. Hreflang (if multilingual)

```ts
alternates: {
  canonical: 'https://{{domain}}/services/knee-replacement',
  languages: {
    'en-IN': 'https://{{domain}}/services/knee-replacement',
    'te-IN': 'https://{{domain}}/te/services/knee-replacement',
  },
}
```

---

## 7. COMPONENT PATTERNS

### 7a. SchemaInjector Component

```tsx
// components/SchemaInjector.tsx
export function SchemaInjector({ schema }: { schema: object | object[] }) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
```

Usage in `page.tsx`:
```tsx
<SchemaInjector schema={[procedureSchema, faqSchema, breadcrumbSchema]} />
```

### 7b. FAQ Accordion with Schema Markup

```tsx
// components/FaqSection.tsx
export function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section itemScope itemType="https://schema.org/FAQPage">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <details>
            <summary itemProp="name">{faq.q}</summary>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">{faq.a}</p>
            </div>
          </details>
        </div>
      ))}
    </section>
  );
}
```

### 7c. Doctor Card (with Schema)

```tsx
// components/DoctorCard.tsx
export function DoctorCard({ doctor }) {
  return (
    <article itemScope itemType="https://schema.org/Physician">
      <Image
        src={doctor.image}
        alt={`${doctor.name}, ${doctor.specialty} at {{Business Name}}`}
        width={300}
        height={300}
        itemProp="image"
      />
      <h2 itemProp="name">{doctor.name}</h2>
      <p itemProp="medicalSpecialty">{doctor.specialty}</p>
      <p itemProp="description">{doctor.bio}</p>
      <a href={`tel:${doctor.phone}`} itemProp="telephone">{doctor.phone}</a>
    </article>
  );
}
```

---

## 8. CONTENT CHECKLIST - PER PAGE

Before marking any page complete, verify all of the following:

### On-Page SEO
- [ ] Title tag 50-60 chars, includes primary keyword + city + brand
- [ ] Meta description 140-160 chars, includes CTA
- [ ] Canonical URL set and correct
- [ ] OG image 1200×630px, descriptive alt text
- [ ] H1 is unique, contains primary keyword, appears once
- [ ] H2s are question-format covering semantically related topics
- [ ] All images have descriptive alt text (not "image1.jpg")
- [ ] Internal links to related services, doctors, blog posts
- [ ] Breadcrumb visible and schema-marked

### AEO / GEO
- [ ] Definition paragraph in first 100 words
- [ ] At-a-glance summary block present
- [ ] FAQ section with min. 8 questions + JSON-LD schema
- [ ] Step-by-step process section
- [ ] Author byline with credentials and last-reviewed date
- [ ] Citations to authoritative sources
- [ ] Specific statistics and named technologies mentioned
- [ ] Entity mentions (doctor name, clinic name, city, specialty) consistent

### Schema
- [ ] LocalBusiness/MedicalOrganization (global)
- [ ] Physician schema (doctor pages)
- [ ] MedicalProcedure schema (service pages)
- [ ] FAQPage schema (FAQ sections)
- [ ] AggregateRating schema (pages with reviews)
- [ ] BreadcrumbList schema (all inner pages)
- [ ] WebSite + SearchAction schema (homepage)

### Technical
- [ ] `sitemap.xml` includes this URL with correct priority
- [ ] Page indexed in `robots.ts` (not in disallow)
- [ ] No render-blocking resources
- [ ] LCP element has `priority` on `<Image>`
- [ ] CLS = 0 (fonts, images have explicit dimensions)
- [ ] Mobile viewport meta correct (handled by Next.js)
- [ ] HTTPS, no mixed content

### Local SEO
- [ ] NAP in footer matches schema and GMB exactly
- [ ] City/locality mentioned naturally 3-5× in body copy
- [ ] Google Maps embed on contact/location pages
- [ ] Reviews displayed with schema markup

---

## 9. BLOG / CONTENT PAGES

Every blog post must follow this structure:

```ts
export const metadata: Metadata = {
  title: '{{Long-tail keyword question}} | {{Business Name}}',
  description: '...',
  authors: [{ name: 'Dr. {{Name}}', url: '/doctors/{{slug}}' }],
  alternates: { canonical: '...' },
};
```

And include:
- **ArticleSchema**: `@type: MedicalWebPage` or `Article` with `author`, `datePublished`, `dateModified`, `publisher`
- **Expert author box** at top and bottom
- **Related services CTA** at the end (link to service page)
- **Table of contents** for posts > 800 words

---

## 10. QUICK REFERENCE - SCHEMA TYPES FOR HEALTHCARE

| Page Type | Schema Types |
|-----------|--------------|
| Homepage | WebSite, MedicalOrganization, LocalBusiness |
| Service page | MedicalProcedure, FAQPage, BreadcrumbList |
| Condition page | MedicalCondition, FAQPage, BreadcrumbList |
| Doctor profile | Physician, BreadcrumbList |
| Location page | LocalBusiness (branch), GeoCoordinates |
| Blog post | MedicalWebPage, Article, BreadcrumbList |
| Reviews page | AggregateRating, Review |
| Contact page | LocalBusiness, GeoCoordinates, OpeningHoursSpecification |

---

*End of prompt. Replace all `{{PLACEHOLDERS}}` before use. Run Google Rich Results Test and Schema Markup Validator after each deployment.*
