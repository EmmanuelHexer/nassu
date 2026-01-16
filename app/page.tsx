import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "United Voice for Ghanaian Supporters",
      description:
        "From Accra to Kumasi, from Hearts of Oak to Asante Kotoko - we unite supporters across Ghana to ensure your voice matters in the beautiful game.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Democratic & Transparent",
      description:
        "Member-elected leadership with full financial transparency. Every supporter has an equal vote in shaping our campaigns and direction.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Fighting for Fair Pricing",
      description:
        "Campaigning for affordable match tickets, accessible venues, and end to exploitative pricing that locks out ordinary Ghanaians from supporting their teams.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Stadium Safety Advocacy",
      description:
        "Working with clubs and authorities to improve stadium conditions, ensure safe facilities, and protect supporter rights at matches.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Community & Culture",
      description:
        "Regular supporter meetups, watch parties, and cultural events celebrating Ghana's rich football heritage and passionate fan culture.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Direct Club Representation",
      description:
        "Regular meetings with Ghana Premier League clubs, GFA officials, and stakeholders to represent supporter interests at the highest level.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "5,000+", label: "Active Members", sublabel: "Across Ghana" },
    { value: "15+", label: "Successful Campaigns", sublabel: "Since 2020" },
    { value: "18", label: "Partner Clubs", sublabel: "GPL & Division One" },
    { value: "100%", label: "Independent", sublabel: "No Corporate Control" },
  ];

  const recentWins = [
    {
      title: "Ticket Price Cap Secured",
      description: "Successfully negotiated 30% reduction in away supporter ticket prices across all GPL matches.",
      date: "December 2025",
    },
    {
      title: "Stadium Access Improved",
      description: "New accessible seating sections for disabled supporters at 8 major stadiums nationwide.",
      date: "November 2025",
    },
    {
      title: "Youth Program Launched",
      description: "Free football education workshops for young supporters in Accra, Kumasi, and Tamale.",
      date: "October 2025",
    },
  ];

  const testimonials = [
    {
      name: "Kwame Mensah",
      club: "Hearts of Oak Supporter",
      quote: "NASSU gave us a platform to finally be heard. The ticket price reductions have made it possible for my whole family to attend matches again.",
    },
    {
      name: "Akosua Darko",
      club: "Asante Kotoko Fan",
      quote: "As a woman supporter, I never felt safe speaking up. NASSU created a space where all voices matter equally.",
    },
    {
      name: "Ibrahim Sulemana",
      club: "Medeama SC Member",
      quote: "The transparency and democratic structure of NASSU proves that supporter organizations can be run properly in Ghana.",
    },
  ];

  return (
    <div>
      <section className="relative bg-linear-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
        }}></div>

        <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Ghana's Premier Supporters Union
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Your Voice.<br />
                Our Game.<br />
                <span className="text-primary-200">United Strong.</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-50 mb-8 leading-relaxed max-w-2xl">
                NASSU brings together football supporters across Ghana to fight for fair treatment,
                affordable access, and a stronger voice in the beautiful game we all love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Join the Movement
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200"
                >
                  Our Mission
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-primary-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Independent</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Member-Led</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Nationwide</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Latest Victory</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-lg">30% Ticket Price Reduction</p>
                        <p className="text-primary-100 text-sm">Negotiated with all GPL clubs</p>
                        <p className="text-primary-200 text-xs mt-1">December 2025</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/news" className="mt-6 inline-flex items-center text-sm font-semibold hover:underline">
                    See all our wins
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white border-y border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              What We Fight For
            </span>
            <h2 className="heading-lg mb-4">Why Ghana's Supporters Choose NASSU</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Accra Sports Stadium to Baba Yara, we're on the ground fighting for the rights
              and dignity of every Ghanaian football supporter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-primary-600 mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Recent Victories
            </span>
            <h2 className="heading-lg mb-4">Making Real Change for Ghanaian Supporters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Through collective action and strategic advocacy, we've secured major wins for supporters nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentWins.map((win, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-primary-400 text-sm font-semibold mb-3">{win.date}</div>
                <h3 className="text-2xl font-bold mb-4">{win.title}</h3>
                <p className="text-gray-300 leading-relaxed">{win.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/news" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold">
              View all campaign victories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Supporter Stories
            </span>
            <h2 className="heading-lg mb-4">Hear From Our Members</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real supporters. Real impact. Real change across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary-500"
              >
                <svg className="w-10 h-10 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary-600">{testimonial.club}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stand With Ghana's Supporters?
            </h2>
            <p className="text-xl md:text-2xl text-primary-50 mb-10 leading-relaxed">
              Join over 5,000 passionate supporters fighting for fair treatment,
              affordable access, and a stronger voice in Ghanaian football.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Become a Member Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
            <p className="mt-8 text-primary-100 text-sm">
              Membership starts from just GH₵50 per year • All clubs welcome • 100% supporter-owned
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
