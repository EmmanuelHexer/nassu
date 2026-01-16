import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join NASSU at upcoming member events, meetings, and supporter gatherings. Connect with fellow fans and get involved.",
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: "Wednesday, June 17, 2026",
      time: "7:00 PM ET",
      title: "Ghana vs. Panama",
      location: "BMO Field, Toronto, Canada",
      type: "World Cup",
      matchNumber: "Match 1",
      description:
        "The Black Stars kick off their World Cup 2026 campaign! Join NASSU members for watch parties across Ghana as we rally behind our team in their opening Group L match.",
      rsvpRequired: false,
    },
    {
      date: "Tuesday, June 23, 2026",
      time: "4:00 PM ET",
      title: "England vs. Ghana",
      location: "Gillette Stadium, Boston, USA",
      type: "World Cup",
      matchNumber: "Match 2",
      description:
        "A massive clash against England! The Black Stars face one of football's giants. This is where legends are made. Unite with fellow supporters as we cheer our team to victory.",
      rsvpRequired: false,
    },
    {
      date: "Saturday, June 27, 2026",
      time: "5:00 PM ET",
      title: "Croatia vs. Ghana",
      location: "Lincoln Financial Field, Philadelphia, USA",
      type: "World Cup",
      matchNumber: "Match 3",
      description:
        "The final group stage battle! Ghana takes on Croatia with everything on the line. Join NASSU watch parties and supporter events as we push the Black Stars into the knockout rounds.",
      rsvpRequired: false,
    },
  ];

  // Generate Event schema for upcoming events
  const eventsSchema = {
    "@context": "https://schema.org",
    "@graph": upcomingEvents.map((event) => ({
      "@type": "Event",
      "name": event.title,
      "description": event.description,
      "startDate": "2026-06-17T19:00:00-04:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": event.location,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "Ontario",
          "addressCountry": "CA"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "NASSU - National Sports Supporters Union",
        "url": "https://nassuashanti.com"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "GHS",
        "availability": "https://schema.org/InStock",
        "url": "https://nassuashanti.com/membership"
      }
    }))
  };

  return (
    <>
      {/* Structured Data for Events */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventsSchema),
        }}
      />
      <div>
      <section className="relative py-24 md:py-32 overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-primary-600/75"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{fontFamily: 'Playfair Display'}}>Events</h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-primary-600/10 via-gold-400/10 to-green-600/10 px-6 py-2.5 rounded-full mb-6 border border-primary-600/20">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              <span className="text-primary-600 font-bold text-sm uppercase tracking-widest">World Cup 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{fontFamily: 'Playfair Display'}}>
              Black Stars <span className="text-green-600">World Cup Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ghana faces Panama, England, and Croatia in Group L. Join NASSU watch parties and supporter events across Ghana as we rally behind the Black Stars!
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
              >
                {/* Premium Header */}
                <div className="bg-linear-to-br from-green-600 via-green-700 to-green-800 p-6 md:p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-3 border border-white/20">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                        </svg>
                        <span className="font-bold text-xs uppercase tracking-wider">{event.matchNumber} • Group L</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{fontFamily: 'Playfair Display'}}>
                        {event.title}
                      </h3>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-lg md:text-xl font-semibold text-white/90 mb-1">{event.date}</p>
                      <p className="text-base md:text-lg text-white/80">{event.time}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 bg-linear-to-br from-primary-600/10 to-gold-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Venue</p>
                        <p className="text-lg font-semibold text-gray-900">{event.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="border-l-4 border-gold-400 pl-6 py-2">
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <a href="/contact" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                        Join Us at the World Cup
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
