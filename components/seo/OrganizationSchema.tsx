export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.nomadissimi.com/#organization",
    name: "Nomadissimi",
    url: "https://www.nomadissimi.com",
    logo: "https://www.nomadissimi.com/logo.png",
    image: "https://www.nomadissimi.com/logo.png",
    description:
      "Nomadissimi is a boutique Italy relocation and consultation business helping digital nomads, remote workers, freelancers, and internationally mobile clients move to Italy with more clarity, strategy, and cultural understanding.",
    sameAs: ["https://www.instagram.com/nomadissimi/"],
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
    knowsAbout: [
      "Italy relocation",
      "moving to Italy",
      "digital nomad visa Italy",
      "remote worker relocation to Italy",
      "freelancers moving to Italy",
      "Italy residence setup",
      "Italy tax orientation",
      "settling in Italy",
      "Italian bureaucracy for new arrivals",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
