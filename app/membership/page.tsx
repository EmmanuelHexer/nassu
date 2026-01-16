import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join NASSU today and be part of the movement giving supporters a collective voice. Learn about membership benefits and how to join.",
};

export default function MembershipPage() {
  const benefits = [
    {
      title: "Democratic Voting Rights",
      description:
        "Vote in board elections and on major decisions affecting the union's direction and campaigns.",
    },
    {
      title: "Regular Updates",
      description:
        "Receive detailed meeting notes, campaign progress reports, and direct updates from union leadership.",
    },
    {
      title: "Member Events",
      description:
        "Access to exclusive member gatherings, celebrations, networking events, and guest speaker sessions.",
    },
    {
      title: "Direct Representation",
      description:
        "Your views represented in regular meetings with clubs, leagues, and governing bodies.",
    },
    {
      title: "Campaign Participation",
      description:
        "Be part of active campaigns for fair pricing, better facilities, and improved supporter experience.",
    },
    {
      title: "Member Forums",
      description:
        "Access to online forums and discussion groups to connect with fellow supporters nationwide.",
    },
  ];

  const tiers = [
    {
      name: "NASSU Membership",
      price: "GH₵2500",
      period: "registration fee + GH₵50/month",
      features: [
        "Full voting rights",
        "Regular updates and newsletters",
        "Access to member forums",
        "Invitation to member events",
        "Campaign participation",
        "Direct representation",
      ],
      recommended: true,
    },
  ];

  return (
    <div>
      <section className="relative py-24 md:py-32 overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-primary-600/75"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{fontFamily: 'Playfair Display'}}>Membership</h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600/10 to-gold-400/10 px-6 py-2.5 rounded-full mb-6">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                <span className="text-primary-600 font-bold text-sm uppercase tracking-widest">Member Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{fontFamily: 'Playfair Display'}}>
                Why Become a <span className="text-green-600">Member?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                NASSU membership is open to all sports supporters who believe in
                democratic representation and supporter rights. When you join, you
                become part of a powerful collective voice advocating for positive
                change.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-600/10 to-gold-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold text-primary-600">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300" style={{fontFamily: 'Playfair Display'}}>
                        {benefit.title}
                      </h3>
                      <div className="h-px w-12 bg-gradient-to-r from-primary-600 via-gold-400 to-transparent mb-4 group-hover:w-20 transition-all duration-500"></div>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CE1126' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-full mb-6 shadow-sm border border-primary-600/10">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="text-primary-600 font-bold text-sm uppercase tracking-widest">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{fontFamily: 'Playfair Display'}}>
              Membership <span className="text-primary-600">Investment</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              All members receive full voting rights and democratic participation in NASSU activities
            </p>
          </div>

          {/* Pricing Box */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
              {/* Gradient Header */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 md:p-12 text-center text-white">
                <div className="mb-6">
                  <span className="text-6xl md:text-7xl font-bold" style={{fontFamily: 'Playfair Display'}}>
                    GH₵2,500
                  </span>
                  <span className="block text-lg md:text-xl mt-3 text-white/90">one-time registration fee</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="text-2xl md:text-3xl font-bold" style={{fontFamily: 'Playfair Display'}}>
                    + GH₵50
                  </span>
                  <span className="text-base md:text-lg">/ month dues</span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center" style={{fontFamily: 'Playfair Display'}}>
                  What You Get
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {tiers[0].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-600/10 rounded-full flex items-center justify-center group-hover:bg-green-600/20 transition-colors duration-300">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-base md:text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center font-bold py-4 px-10 rounded-xl transition-all duration-200 bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  >
                    Join NASSU Today
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -translate-x-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600/10 via-gold-400/10 to-green-600/10 px-6 py-2.5 rounded-full mb-6 border border-primary-600/20">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-primary-600 font-bold text-sm uppercase tracking-widest">Getting Started</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{fontFamily: 'Playfair Display'}}>
                Ready to Make Your <span className="text-green-600">Voice Heard?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
                Join thousands of passionate Ghanaian supporters who are transforming the future of our beloved game. We'd love to welcome you to the NASSU family.
              </p>
              <Link href="/contact" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                Get in Touch with Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
