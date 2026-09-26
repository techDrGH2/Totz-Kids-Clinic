# Clinic images

Do not use stock photographs of other doctors or clinics on this site.

When a real photograph is ready, export a compressed WebP (AVIF is also fine) and save it at the path below. The site checks for the WebP first. If it is missing, it shows the labelled SVG placeholder.

Recommended width: portraits 800px, rooms and exterior 1600px. Keep the important subject away from the edges.

| File | Use |
| --- | --- |
| `public/images/tiny-totz-kids-clinic-logo.png` | Header and footer logo. Black backdrop removed so it sits on the navy bar. |
| `public/images/doctor/dr-shilpa-reddy-paediatrician-puppalguda.webp` | Portrait of Dr. Shilpa Reddy T. Alt text is already set in `lib/doctor.ts`. |
| `public/images/doctor/dr-shilpa-reddy-hero.png` | Transparent hero portrait composition (rounded frame + teal circle) for the homepage hero. |
| `public/images/clinic/tiny-totz-kids-clinic-puppalguda.webp` | Exterior or entrance of the clinic at DNS Business Hub. |
| `public/images/clinic/paediatric-consultation-room-puppalguda.webp` | Consultation room. |
| `public/images/clinic/newborn-care-paediatrician-puppalguda.webp` | Newborn or infant consultation, only if the photograph is from this clinic and consent is in place. |
| `public/images/services/child-vaccination-puppalguda.webp` | Optional image for the vaccination article. Use a real clinic moment, not a stock syringe photo presented as the clinic. |
| `public/images/services/child-vaccination.png` | Image for Vaccination & Immunisation on the services grid and vaccination detail page. |
| `public/images/services/newborn-care.jpg` | Image for Newborn Care on the services grid and newborn care detail page. |
| `public/images/services/well-child-visits.jpg` | Image for Well-Child Visits on the services grid and service detail page. |
| `public/images/services/nutrition-assessment.png` | Image for Nutrition & Growth on the services grid and nutrition detail page. |
| `public/images/services/allergies-asthma.png` | Image for Allergies & Asthma on the services grid and allergies detail page. |
| `public/images/services/obesity-puberty.png` | Image for Obesity & Puberty Concerns on the services grid and service detail page. |
| `public/images/services/seizures-development.jpg` | Image for Seizure Evaluation on the services grid and service detail page. |
| `public/images/services/developmental-concerns.png` | Image for Developmental Concerns on the services grid and developmental care detail page. |
| `public/images/services/common-illness-management.png` | Image for Common Childhood Illnesses on the services grid and service detail page. |

SVG files with the same base name are placeholders. They are not photographs of the doctor. Remove or keep them after the WebP is added; the WebP is preferred automatically.

Open Graph cards are generated in `app/opengraph-image.tsx` from the clinic name and location. They do not use a portrait.

Update phone, hours, address and published review figures only in `lib/clinic.ts`.
