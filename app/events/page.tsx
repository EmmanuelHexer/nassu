import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join NASSU at upcoming member events, meetings, and supporter gatherings. Connect with fellow fans and get involved.",
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: "March 15, 2026",
      time: "6:00 PM - 9:00 PM",
      title: "Annual General Meeting 2026",
      location: "Grand Hall, City Center",
      type: "Meeting",
      description:
        "Our annual general meeting where members vote on key decisions, elect board members, and review the year's achievements.",
      rsvpRequired: true,
    },
    {
      date: "February 28, 2026",
      time: "7:00 PM - 10:00 PM",
      title: "Supporter Rights Workshop",
      location: "Community Center, Downtown",
      type: "Workshop",
      description:
        "Interactive workshop on supporter rights, how to engage with clubs, and effective advocacy strategies.",
      rsvpRequired: true,
    },
    {
      date: "February 14, 2026",
      time: "5:00 PM - 8:00 PM",
      title: "Monthly Member Social",
      location: "The Supporters' Pub",
      type: "Social",
      description:
        "Casual gathering for members to network, discuss current campaigns, and connect with fellow supporters.",
      rsvpRequired: false,
    },
    {
      date: "February 5, 2026",
      time: "6:30 PM - 8:00 PM",
      title: "Campaign Strategy Meeting",
      location: "Online via Zoom",
      type: "Meeting",
      description:
        "Planning session for our upcoming safe standing campaign. All members welcome to contribute ideas.",
      rsvpRequired: true,
    },
  ];

  const pastEvents = [
    {
      date: "January 20, 2026",
      title: "10,000 Members Celebration",
      description: "Celebration event marking our milestone of 10,000 members.",
    },
    {
      date: "December 10, 2025",
      title: "Year-End Review & Holiday Social",
      description: "Looking back at 2025's achievements and celebrating together.",
    },
    {
      date: "November 15, 2025",
      title: "Guest Speaker: Stadium Safety Expert",
      description: "Educational evening with leading stadium safety consultant.",
    },
  ];

  return (
    <div>
      <section className="bg-linear-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Events</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Connect with fellow supporters and get involved in NASSU activities
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-md mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-700">
                        {event.type}
                      </span>
                      {event.rsvpRequired && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                          RSVP Required
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-3 mt-0.5 shrink-0"
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
                    <div>
                      <p className="font-semibold text-gray-900">{event.date}</p>
                      <p className="text-gray-600 text-sm">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-3 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-700">{event.location}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <button className="btn-primary">
                  {event.rsvpRequired ? "RSVP Now" : "Learn More"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-primary-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Host an Event?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              NASSU members can propose and organize regional events, local
              supporter meetups, and advocacy workshops. Get in touch to discuss
              your ideas.
            </p>
            <button className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block">
              Contact Events Team
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Event Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Member Events
                </h3>
                <p className="text-gray-600">
                  Most events are exclusive to NASSU members. If you're not yet a
                  member, join today to access all events and activities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Event Updates
                </h3>
                <p className="text-gray-600">
                  Members receive email notifications about upcoming events. Check
                  your member portal regularly for the latest updates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Accessibility
                </h3>
                <p className="text-gray-600">
                  All our venues are wheelchair accessible. Contact us in advance
                  if you have specific accessibility requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Virtual Options
                </h3>
                <p className="text-gray-600">
                  Many events offer virtual attendance options for members who
                  cannot attend in person. Details provided with each event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
