import { Metadata } from "next"
import AboveFooter from "@/components/abovefooter"
import AppDisplay from "@/components/appdisplay"

import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Pricing from "@/components/pricing"
import RippleGrid from "@/components/ripplegrid"
import TheWhy from "@/components/thewhy"

export const metadata: Metadata = {
  title: "Maskani - Smart Property Management Software in Kenya",
  description:
    "Transform your property management with Maskani. Automated rent tracking, tenant management, expense recording, and detailed analytics for Kenyan property managers and landlords. Start at Ksh 70/month per unit.",
  keywords: [
    "property management Kenya",
    "rent tracking software",
    "tenant management",
    "landlord software Kenya",
    "property portfolio management",
    "automated rent collection",
    "property analytics",
    "real estate management Kenya",
    "rental property software",
    "property expense tracking",
    "vacancy advertising",
    "SMS rent reminders",
  ],
  authors: [{ name: "Maskani Team" }],
  creator: "Maskani",
  publisher: "Maskani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://maskani.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://maskani.ke",
    title: "Maskani - Smart Property Management Software in Kenya",
    description:
      "Transform your property management with Maskani. Automated rent tracking, tenant management, expense recording, and detailed analytics for Kenyan property managers and landlords.",
    siteName: "Maskani",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maskani Property Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maskani - Smart Property Management Software in Kenya",
    description:
      "Transform your property management with Maskani. Automated rent tracking, tenant management, expense recording, and detailed analytics.",
    images: ["/twitter-image.jpg"],
    creator: "@maskani_ke",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Maskani Property Management Software",
            description:
              "Smart property management software for Kenyan landlords and property managers with automated rent tracking, tenant management, and analytics.",
            url: "https://maskani.ke",
            applicationCategory: "Real Estate Software",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "70",
              priceCurrency: "KES",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "70",
                priceCurrency: "KES",
                referenceQuantity: "1",
                unitCode: "MONTH",
                unitText: "per unit per month",
              },
            },
            provider: {
              "@type": "Organization",
              name: "Maskani",
              url: "https://maskani.ke",
              email: "app.maskani.ke@gmail.com",
              telephone: "+254107641197",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Kenya",
              },
            },
            feature: [
              "Property & unit listing",
              "Tenancy management",
              "Automatic rent tracking",
              "Payment notifications",
              "Monthly SMS reminders",
              "Expense recording",
              "Detailed analytics",
              "Vacancy advertising",
              "Dedicated support",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "500",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
      <div>
        <div className=" opacity-20 absolute h-125 w-full overflow-hidden -z-1000">
          <RippleGrid
            enableRainbow={false}
            gridColor="#6FA5D6"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={15}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.9}
          />
        </div>
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="features">
            <TheWhy />
          </section>
          <section id="dashboard">
            <AppDisplay />
          </section>
          <section id="pricing">
            <Pricing />
          </section>
          <section id="cta">
            <AboveFooter />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Index
