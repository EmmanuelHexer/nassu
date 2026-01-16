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
      <section className="relative py-16 md:py-24 overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-primary-600/75"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{fontFamily: 'Playfair Display'}}>Become a Member</h1>
            <p className="text-lg md:text-xl text-white/90">
              Join thousands of supporters making their voices heard and shaping the future of sports
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{fontFamily: 'Playfair Display'}}>Why Become a Member?</h2>
            <div className="w-12 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 text-center mb-16">
              NASSU membership is open to all sports supporters who believe in
              democratic representation and supporter rights. When you join, you
              become part of a powerful collective voice advocating for positive
              change.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary-600 pl-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display'}}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{fontFamily: 'Playfair Display'}}>Membership Investment</h2>
          <div className="w-12 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-center text-gray-600 text-lg md:text-xl mb-16 max-w-2xl mx-auto">
            All members receive full voting rights and democratic participation in NASSU activities
          </p>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mb-8">
              <span className="text-5xl md:text-6xl font-bold text-primary-600" style={{fontFamily: 'Playfair Display'}}>
                GH₵2500
              </span>
              <span className="text-gray-600 ml-2 text-xl">registration fee</span>
            </div>
            <div className="mb-12">
              <span className="text-3xl md:text-4xl font-bold text-gray-900" style={{fontFamily: 'Playfair Display'}}>
                + GH₵50
              </span>
              <span className="text-gray-600 ml-2 text-xl">per month</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center" style={{fontFamily: 'Playfair Display'}}>
              What You Get
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {tiers[0].features.map((feature, featureIndex) => (
                <div key={featureIndex} className="border-l-2 border-primary-600 pl-4">
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center font-bold py-4 px-8 transition-colors duration-200 tracking-wide uppercase bg-primary-600 hover:bg-primary-700 text-white"
              >
                Join NASSU Today
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg">
              Student and concession rates available. Contact us for details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{fontFamily: 'Playfair Display'}}>How to Join</h2>
            <div className="w-12 h-1 bg-primary-600 mx-auto mb-6"></div>
            <div className="border-t-2 border-primary-600 pt-12 mt-12">
              <ol className="space-y-8">
                <li className="border-l-2 border-primary-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display'}}>
                    1. Choose Your Tier
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Select the membership level that best fits your needs and
                    budget.
                  </p>
                </li>
                <li className="border-l-2 border-primary-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display'}}>
                    2. Complete Application
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Fill out a simple online form with your details and
                    preferred membership tier.
                  </p>
                </li>
                <li className="border-l-2 border-primary-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display'}}>
                    3. Payment
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Securely pay your annual membership fee through our payment
                    portal.
                  </p>
                </li>
                <li className="border-l-2 border-primary-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display'}}>
                    4. Welcome Package
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Receive your membership confirmation and welcome materials
                    within 48 hours.
                  </p>
                </li>
              </ol>

              <div className="mt-12 pt-12 border-t-2 border-gray-200 text-center">
                <Link href="/contact" className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 transition-all duration-200 tracking-wide uppercase">
                  Start Your Membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
