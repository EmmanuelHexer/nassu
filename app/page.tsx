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
    "telephone": "+233-20-311-6147",
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
      <section className="hero-section relative h-screen md:h-screen pt-0 md:pt-20 flex items-center justify-center text-white overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 hero-overlay z-10"></div>

        {/* Desktop Hero Content */}
        <div className="hidden md:block container-custom relative z-30 text-center">
          <div className="max-w-6xl mx-auto fade-in-up">
            {/* Main Heading */}
            <h1 className="text-display-premium mb-8 leading-none text-white max-w-5xl mx-auto">
              <span className="block">Your Voice. Our Game.</span>
              <span className="block text-gold-400">United Strong.</span>
            </h1>

            {/* Description */}
            <p className="text-body-premium text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white opacity-95" style={{textShadow: "0 2px 4px rgba(0,0,0,0.3)"}}>
              Based in Kumasi, NASSU unites football supporters across the Ashanti Region to fight for fair treatment, affordable access, and a stronger voice in the beautiful game we all love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/membership" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 inline-flex items-center group">
                <span className="flex items-center justify-center">
                  Join the Movement
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/about" className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 inline-flex items-center group">
                <span className="flex items-center justify-center">
                  Our Mission
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span className="font-semibold">Ashanti Focused</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Content - Clean & Unique */}
        <div className="block md:hidden container-custom relative z-30 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 leading-tight text-white" style={{textShadow: "0 2px 4px rgba(0,0,0,0.3)"}}>
              National Sports Supporters Union
            </h1>

            <p className="text-lg mb-8 text-gray-100 leading-relaxed" style={{textShadow: "0 1px 3px rgba(0,0,0,0.2)"}}>
              Kumasi's premier supporters union. Fighting for fair prices, safer stadiums, and real change in Ghana football.
            </p>

            <Link href="/membership" className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-block shadow-lg hover:shadow-xl active:scale-95">
              Join NASSU
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Value Proposition - Offset Section */}
      <section className="block md:hidden py-12 mobile-value-offset bg-gradient-to-br from-primary-50 to-green-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-body-premium text-lg text-gray-800 leading-relaxed text-left" style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)"}}>
              Based at Baba Yara Sports Stadium in the heart of Kumasi, we unite Ashanti football supporters to advocate for affordable ticket prices, improved stadium safety, and stronger representation in Ghana football. Through democratic leadership and transparent operations, NASSU ensures every supporter's voice matters in the beautiful game.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean Ghana Colors */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-300" style={{fontFamily: 'Playfair Display'}}>
                  {stat.value}
                </div>
                <div className="text-gray-900 font-bold mb-1 text-sm md:text-base">{stat.label}</div>
                <div className="text-gray-600 text-xs md:text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Clean Typography-Led Design */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="mb-20 md:mb-32 text-center mx-auto max-w-4xl">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-6">What We Fight For</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{fontFamily: 'Playfair Display'}}>
              Why Ashanti Supporters Choose NASSU
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              From Baba Yara Stadium to every corner of Kumasi, we're fighting for the rights and dignity of every Ashanti football supporter.
            </p>
          </div>

          {/* Simple Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 md:gap-y-20">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-primary-600 mt-1">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight flex-1" style={{fontFamily: 'Playfair Display'}}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed pl-15">
                  {feature.description}
                </p>
                <div className="w-12 h-px bg-primary-600 mt-6 ml-15 group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Wins Section - Clean Apple-Inspired */}
      <section className="py-24 md:py-32 parallax-bg relative overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop')"
      }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-custom relative z-10 max-w-5xl">
          <div className="text-center mb-20 md:mb-24 mx-auto max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-6">Recent Victories</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Playfair Display'}}>
              Making Real Change
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Through collective action and strategic advocacy, we've secured major wins for supporters across the Ashanti Region.
            </p>
          </div>

          {/* Clean Numbered List */}
          <div className="space-y-12 md:space-y-16">
            {recentWins.map((win, index) => (
              <div key={index} className="flex gap-8 md:gap-12 group">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xl md:text-2xl" style={{fontFamily: 'Playfair Display'}}>{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="mb-3">
                    <span className="text-gold-400 text-xs md:text-sm font-semibold uppercase tracking-wide">{win.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight" style={{fontFamily: 'Playfair Display'}}>
                    {win.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed">
                    {win.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 md:mt-20">
            <Link href="/news" className="inline-flex items-center text-white hover:text-gold-400 font-semibold text-base group transition-colors duration-200">
              View All Campaign Victories
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl -translate-x-1/3"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center bg-primary-600/10 backdrop-blur-sm px-6 py-2.5 rounded-full mb-6 border border-primary-600/20">
              <span className="text-primary-600 font-bold text-sm uppercase tracking-wider">Supporter Stories</span>
            </div>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 max-w-4xl mx-auto leading-tight" style={{fontFamily: 'Playfair Display'}}>
              Hear From Our Members
            </h2>
            <p className="text-body-premium text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real Ashanti supporters. Real impact. Real change across Kumasi and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl border-t-4 border-primary-600 hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                {/* Decorative Quote Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                {/* Quote Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold-400/20 to-gold-500/20 rounded-2xl">
                    <svg className="w-8 h-8 text-gold-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <p className="relative text-body-premium text-gray-700 group-hover:text-gray-800 mb-8 leading-relaxed italic text-lg transition-colors duration-300">
                  "{testimonial.quote}"
                </p>

                <div className="relative border-t-2 border-gray-100 group-hover:border-primary-600/30 pt-5 transition-colors duration-300">
                  <p className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors duration-300" style={{fontFamily: 'Playfair Display'}}>{testimonial.name}</p>
                  <p className="text-sm font-semibold text-primary-600 mt-1">{testimonial.club}</p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-gold-400 to-green-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Clean Style */}
      <section className="section-padding relative overflow-hidden" style={{
        backgroundImage: "url('/supporters.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-primary-600/90"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{fontFamily: 'Playfair Display'}}>
              Ready to Stand With Ashanti Supporters?
            </h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-white/95">
              Join over 300 passionate Ashanti supporters fighting for fair treatment, affordable access, and a stronger voice in Kumasi football.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/membership" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 inline-flex items-center group">
                Become a Member Today
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 inline-flex items-center">
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
