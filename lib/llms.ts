import { addressInline, clinic, medicalDisclaimer, siteUrl } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { posts } from "@/lib/blog";
import { areas } from "@/lib/locations";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/services";

function link(title: string, path: string, note?: string) {
  const line = `- [${title}](${absoluteUrl(path)})`;
  return note ? `${line}: ${note}` : line;
}

/** Markdown map for LLMs - served at /llms.txt */
export function buildLlmsTxt() {
  const lines = [
    `# ${clinic.name}`,
    "",
    `> Paediatric clinic in ${clinic.address.area}, ${clinic.address.city}, led by ${doctor.name} (${doctor.qualificationsInline}).`,
    "",
    `${clinic.name} provides child healthcare for newborns, infants, children and adolescents.`,
    `Consultations run ${clinic.hours.summary}. Address: ${addressInline()}.`,
    `Phone: ${clinic.phoneDisplay}. Email: ${clinic.email}.`,
    `Languages: ${clinic.languages.join(", ")}.`,
    "",
    medicalDisclaimer,
    "",
    "## Primary pages",
    "",
    link("Home", "/", "Clinic overview and paediatric services in Puppalguda"),
    link("About", "/about", "About Tiny Totz Kids Clinic"),
    link("Doctor", "/doctor", `${doctor.name}, ${doctor.role}`),
    link("Services", "/services", "Full list of paediatric services"),
    link("Book appointment", "/appointment", "Request an evening consultation"),
    link("Contact", "/contact", "Phone, WhatsApp, email, map and hours"),
    link("FAQ", "/faq", "Common parent questions"),
    link("Gallery", "/gallery", "Clinic photographs"),
    link("Areas we serve", "/areas-we-serve", "Neighbourhoods around Puppalguda"),
    link("Blog", "/blog", "Parent education articles from the clinic"),
    "",
    "## Services",
    "",
    ...services.map((service) =>
      link(service.title, service.href, service.description),
    ),
    "",
    "## Care topic pages",
    "",
    link("Vaccination", "/vaccination", "Child immunisation guidance"),
    link("Newborn care", "/newborn-care", "Newborn and infant visits"),
    link("Child health", "/child-health", "Well-child and illness care"),
    link("Nutrition & growth", "/nutrition-growth", "Growth and diet discussions"),
    link("Allergies & asthma", "/allergies-asthma", "Allergy and wheezing care"),
    link("Developmental care", "/developmental-care", "Development concerns"),
    "",
    "## Areas served",
    "",
    ...areas.map((area) =>
      link(
        `Paediatrician near ${area.name}`,
        `/areas-we-serve/${area.slug}`,
        area.clinicIsHere
          ? "Clinic location"
          : `Paediatric care for families in ${area.name}`,
      ),
    ),
    "",
    "## Blog",
    "",
    ...posts.map((post) => link(post.title, `/blog/${post.slug}`, post.description)),
    "",
    "## Legal",
    "",
    link("Privacy policy", "/privacy"),
    link("Terms", "/terms"),
    link("Medical disclaimer", "/medical-disclaimer"),
    "",
    "## Optional",
    "",
    `- [Sitemap](${siteUrl}/sitemap.xml): Machine-readable list of all public URLs`,
    `- [Robots](${siteUrl}/robots.txt): Crawler rules`,
    "",
  ];

  return `${lines.join("\n").trim()}\n`;
}
