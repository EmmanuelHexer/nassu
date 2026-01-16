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
      name: "Standard Membership",
      price: "$25",
      period: "per year",
      features: [
        "Full voting rights",
        "Regular updates and newsletters",
        "Access to member forums",
        "Invitation to member events",
        "Campaign participation",
      ],
      recommended: false,
    },
    {
      name: "Supporter Plus",
      price: "$50",
      period: "per year",
      features: [
        "All Standard benefits",
        "Priority event registration",
        "Exclusive merchandise discount",
        "Quarterly leadership Q&A sessions",
        "Early campaign access",
      ],
      recommended: true,
    },
    {
      name: "Champion Member",
      price: "$100",
      period: "per year",
      features: [
        "All Supporter Plus benefits",
        "Recognition on website",
        "Annual appreciation event",
        "Direct line to board members",
        "Special advocate badge",
      ],
      recommended: false,
    },
  ];

  return (
    <div>
      <section className="bg-linear-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Become a Member</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Join thousands of supporters making their voices heard and shaping
              the future of sports
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="heading-md mb-6 text-center">Why Become a Member?</h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              NASSU membership is open to all sports supporters who believe in
              democratic representation and supporter rights. When you join, you
              become part of a powerful collective voice advocating for positive
              change.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
                >
                  <div className="shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md mb-4 text-center">Membership Tiers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the membership level that works best for you. All tiers
            include full voting rights and democratic participation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  tier.recommended ? "ring-4 ring-primary-500 relative" : ""
                }`}
              >
                {tier.recommended && (
                  <div className="bg-primary-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-600">
                      {tier.price}
                    </span>
                    <span className="text-gray-600 ml-2">{tier.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-3 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                      tier.recommended
                        ? "bg-primary-600 hover:bg-primary-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Student and concession rates available. Contact us for details.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-6">How to Join</h2>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Choose Your Tier
                    </h3>
                    <p className="text-gray-600">
                      Select the membership level that best fits your needs and
                      budget.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Complete Application
                    </h3>
                    <p className="text-gray-600">
                      Fill out a simple online form with your details and
                      preferred membership tier.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Payment
                    </h3>
                    <p className="text-gray-600">
                      Securely pay your annual membership fee through our payment
                      portal.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Welcome Package
                    </h3>
                    <p className="text-gray-600">
                      Receive your membership confirmation and welcome materials
                      within 48 hours.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <Link href="/contact" className="btn-primary">
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
