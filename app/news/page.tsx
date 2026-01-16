import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Stay informed with the latest news, campaign updates, and advocacy wins from NASSU.",
};

export default function NewsPage() {
  const newsItems = [
    {
      date: "January 15, 2026",
      category: "Campaign Win",
      title: "Major Victory: Ticket Price Cap Approved",
      excerpt:
        "After 18 months of campaigning, we've secured agreement for a maximum ticket price cap for away supporters at all league matches.",
      slug: "ticket-price-cap-approved",
    },
    {
      date: "January 10, 2026",
      category: "Announcement",
      title: "Annual General Meeting Scheduled for March",
      excerpt:
        "Save the date for our AGM on March 15th. All members are invited to attend and vote on key union decisions.",
      slug: "agm-march-2026",
    },
    {
      date: "January 5, 2026",
      category: "Update",
      title: "Safe Standing Campaign Progress Report",
      excerpt:
        "Our safe standing initiative has gained support from 75% of surveyed clubs. Read about our next steps and how you can help.",
      slug: "safe-standing-progress",
    },
    {
      date: "December 28, 2025",
      category: "Campaign Win",
      title: "Improved Accessibility Standards Implemented",
      excerpt:
        "New accessibility requirements for all venues are now in effect following our successful advocacy campaign.",
      slug: "accessibility-standards",
    },
    {
      date: "December 20, 2025",
      category: "News",
      title: "NASSU Membership Reaches 10,000 Supporters",
      excerpt:
        "A huge milestone as we welcome our 10,000th member. Thank you for being part of this movement.",
      slug: "10k-members",
    },
    {
      date: "December 15, 2025",
      category: "Update",
      title: "Holiday Schedule: Office Hours",
      excerpt:
        "Our offices will operate on reduced hours during the holiday period. Emergency contacts remain available 24/7.",
      slug: "holiday-schedule",
    },
  ];

  return (
    <div>
      <section className="bg-linear-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">News & Updates</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              The latest from NASSU's campaigns, events, and advocacy work
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <article
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <time className="text-sm text-gray-500">{item.date}</time>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.category === "Campaign Win"
                          ? "bg-green-100 text-green-800"
                          : item.category === "Announcement"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Want to stay updated with our latest news?
              </p>
              <button className="btn-primary">Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
