import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "NASSU is the Ashanti Region's premier football supporters union based at Baba Yara Sports Stadium in Kumasi with 300+ active members fighting for fair treatment and affordable access.",
  openGraph: {
    title: "NASSU Ashanti - Kumasi Football Supporters Union | Baba Yara Stadium",
    description: "Join 300+ Ashanti football supporters united at Baba Yara Stadium fighting for fair treatment, affordable tickets, and stronger voices in Ghana football.",
    url: "https://nassuashanti.com",
    type: "website",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NASSU - National Sports Supporters Union",
    "alternateName": "NASSU Ashanti",
    "url": "https://nassuashanti.com",
    "logo": "https://nassuashanti.com/logo.png",
    "description": "The Ashanti Region's premier independent football supporters union based at Baba Yara Sports Stadium in Kumasi, uniting 300+ supporters fighting for fair treatment and affordable access.",
    "email": "nassu.blackstars@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Baba Yara Sports Stadium",
      "addressLocality": "Kumasi",
      "addressRegion": "Ashanti Region",
      "addressCountry": "GH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.6745",
      "longitude": "-1.6163"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Ashanti Region, Ghana"
    },
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "Ghana Premier League"
    },
    "sameAs": [
      "https://twitter.com/nassu_ghana",
      "https://facebook.com/nassuashanti",
      "https://instagram.com/nassuashanti"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NASSU - National Sports Supporters Union",
    "description": "Ashanti Region's premier football supporters union at Baba Yara Sports Stadium",
    "url": "https://nassuashanti.com",
    "telephone": "+233-XXX-XXXXXX",
    "email": "nassu.blackstars@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Baba Yara Sports Stadium",
      "addressLocality": "Kumasi",
      "addressRegion": "Ashanti Region",
      "postalCode": "00233",
      "addressCountry": "GH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.6745",
      "longitude": "-1.6163"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "GH₵50-500",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };
  const features = [
    {
      title: "United Voice for Ashanti",
      description:
        "Based in Kumasi, the heart of Ghana football. From Baba Yara Stadium to every corner of Ashanti - we unite supporters to ensure your voice matters in the beautiful game.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Democratic & Transparent",
      description:
        "Member-elected leadership with full financial transparency. Every supporter has an equal vote in shaping our campaigns.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Fighting Fair Pricing",
      description:
        "Campaigning for affordable tickets and accessible venues. Ending exploitative pricing that locks out ordinary Ghanaians.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Stadium Safety",
      description:
        "Working with clubs to improve stadium conditions, ensure safe facilities, and protect supporter rights at matches.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Ashanti Community Culture",
      description:
        "Regular supporter meetups in Kumasi, watch parties at Baba Yara, and events celebrating Ashanti's rich football heritage and the most passionate fans in Ghana.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Direct Representation",
      description:
        "Regular meetings with GPL clubs, GFA officials, and stakeholders representing supporter interests at the highest level.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "300+", label: "Active Members", sublabel: "In Ashanti Region" },
    { value: "15+", label: "Campaigns Won", sublabel: "Since 2020" },
    { value: "10+", label: "Ashanti Clubs", sublabel: "Partnership" },
    { value: "100%", label: "Independent", sublabel: "Supporter Owned" },
  ];

  const recentWins = [
    {
      title: "Baba Yara Ticket Cap",
      description: "30% reduction in supporter ticket prices at Baba Yara Stadium and across Ashanti region matches.",
      date: "December 2025",
    },
    {
      title: "Stadium Safety Upgrades",
      description: "New accessible seating and improved facilities for supporters at Baba Yara and other Ashanti stadiums.",
      date: "November 2025",
    },
    {
      title: "Kumasi Youth Program",
      description: "Free football education workshops launched in Kumasi for young Ashanti supporters.",
      date: "October 2025",
    },
  ];

  const testimonials = [
    {
      name: "Kwame Mensah",
      club: "Asante Kotoko Supporter",
      quote: "NASSU gave us Kumasi supporters a platform to be heard. The ticket price reductions at Baba Yara made it possible for my family to attend matches again.",
    },
    {
      name: "Akosua Darko",
      club: "Asante Kotoko Fan",
      quote: "As a woman supporter in Kumasi, I never felt safe speaking up. NASSU created a space where all Ashanti voices matter equally.",
    },
    {
      name: "Ibrahim Sulemana",
      club: "King Faisal Supporter",
      quote: "The transparency and democratic structure proves that supporter organizations can be run properly in Ashanti. NASSU represents all clubs fairly.",
    },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="overflow-x-hidden">
        {/* Hero Section - Premium Ghana Style */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 hero-overlay z-10"></div>

        {/* Hero Content */}
        <div className="container-custom relative z-30 text-center">
          <div className="max-w-5xl mx-auto fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center bg-gold-400/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-gold-400/30">
              <span className="text-gold-400 font-bold text-sm uppercase tracking-wider">Ashanti Region's Premier Supporters Union</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-display-premium mb-8 leading-none text-white">
              <span className="block">Your Voice.</span>
              <span className="block text-gold-400">Our Game.</span>
              <span className="block">United Strong.</span>
            </h1>

            {/* Description */}
            <p className="text-body-premium text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white opacity-95" style={{textShadow: "0 2px 4px rgba(0,0,0,0.3)"}}>
              Based in Kumasi, NASSU unites football supporters across the Ashanti Region to fight for fair treatment, affordable access, and a stronger voice in the beautiful game we all love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/membership" className="btn-primary group">
                <span className="flex items-center justify-center">
                  Join the Movement
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/about" className="btn-secondary group">
                <span className="flex items-center justify-center">
                  Our Mission
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">100% Independent</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Member-Led</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Ghana Colors */}
      <section className="py-16 relative" style={{background: "linear-gradient(135deg, #CE1126 0%, #006B3F 100%)"}}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2" style={{fontFamily: 'Playfair Display'}}>
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-white/80 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-bold text-sm uppercase tracking-wider mb-3">What We Fight For</span>
            <h2 className="text-display text-5xl md:text-6xl text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
              Why Ashanti Supporters Choose NASSU
            </h2>
            <p className="text-body-premium text-xl text-gray-600 max-w-3xl mx-auto">
              From Baba Yara Stadium to every corner of Kumasi, we're fighting for the rights and dignity of every Ashanti football supporter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card p-8 shadow-lg border border-gray-100 group">
                <div className="text-primary-600 mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900" style={{fontFamily: 'Playfair Display'}}>
                  {feature.title}
                </h3>
                <p className="text-body-premium text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Wins Section - Parallax */}
      <section className="section-padding parallax-bg relative overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop')"
      }}>
        <div className="gradient-overlay-ghana"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-gold-400 font-bold text-sm uppercase tracking-wider mb-3">Recent Victories</span>
            <h2 className="text-display text-5xl md:text-6xl text-white mb-6 text-shadow-premium" style={{fontFamily: 'Playfair Display'}}>
              Making Real Change
            </h2>
            <p className="text-body-premium text-xl text-white/90 max-w-3xl mx-auto" style={{textShadow: "0 1px 3px rgba(0,0,0,0.3)"}}>
              Through collective action and strategic advocacy, we've secured major wins for supporters across the Ashanti Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentWins.map((win, index) => (
              <div key={index} className="clean-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-gold-400 text-sm font-bold mb-3">{win.date}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{fontFamily: 'Playfair Display'}}>{win.title}</h3>
                <p className="text-body-premium text-gray-700 leading-relaxed">{win.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/news" className="inline-flex items-center text-gold-400 hover:text-gold-500 font-bold text-lg">
              View All Campaign Victories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-bold text-sm uppercase tracking-wider mb-3">Supporter Stories</span>
            <h2 className="text-display text-5xl md:text-6xl text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
              Hear From Our Members
            </h2>
            <p className="text-body-premium text-xl text-gray-600 max-w-3xl mx-auto">
              Real Ashanti supporters. Real impact. Real change across Kumasi and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary-600">
                <svg className="w-10 h-10 text-gold-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-body-premium text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900" style={{fontFamily: 'Playfair Display'}}>{testimonial.name}</p>
                  <p className="text-sm text-primary-600">{testimonial.club}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Premium Ghana Style */}
      <section className="section-padding relative overflow-hidden" style={{background: "linear-gradient(135deg, #CE1126 0%, #006B3F 50%, #FCD116 100%)"}}>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-display text-4xl md:text-5xl font-bold mb-6 text-shadow-premium" style={{fontFamily: 'Playfair Display'}}>
              Ready to Stand With Ashanti Supporters?
            </h2>
            <p className="text-body-premium text-xl md:text-2xl mb-10 leading-relaxed" style={{textShadow: "0 1px 3px rgba(0,0,0,0.2)"}}>
              Join over 300 passionate Ashanti supporters fighting for fair treatment, affordable access, and a stronger voice in Kumasi football.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/membership" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
                Become a Member Today
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 inline-flex items-center">
                Get in Touch
              </Link>
            </div>

            <p className="mt-8 text-white/90 text-sm">
              Membership from GH₵50/year • All clubs welcome • 100% supporter-owned
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
