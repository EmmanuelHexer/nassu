import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NASSU. Whether you have questions about membership, want to get involved, or need support, we're here to help.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Email",
      details: "nassu.blackstars@gmail.com",
      description: "For general inquiries and membership questions",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Phone",
      details: "0203116147",
      description: "Call us during business hours",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Office Location",
      details: "Baba Yara Sports Stadium",
      description: "Kumasi, Ashanti Region, Ghana",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
  ];

  const departments = [
    {
      name: "Membership Inquiries",
      email: "membership@nassu.org",
      description: "Questions about joining, renewals, and member benefits",
    },
    {
      name: "Media & Press",
      email: "press@nassu.org",
      description: "Press releases, interviews, and media inquiries",
    },
    {
      name: "Campaigns",
      email: "campaigns@nassu.org",
      description: "Information about current campaigns and how to get involved",
    },
    {
      name: "Board Contact",
      email: "board@nassu.org",
      description: "Direct contact with NASSU board members",
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{fontFamily: 'Playfair Display'}}>Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90">
              Visit us at Baba Yara Sports Stadium or get in touch. We're here to answer your questions and help you get involved.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {method.details}
                </p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Department Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-primary-600 hover:text-primary-700 font-medium mb-2 block"
                  >
                    {dept.email}
                  </a>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Send Us a Message</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="campaign">Campaign Information</option>
                    <option value="media">Media/Press Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1 mr-3"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to be contacted by NASSU regarding my inquiry and
                    understand that my information will be handled according to
                    the privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <p className="text-center text-gray-600 mt-6">
              We typically respond within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How long does it take to process membership applications?
                </h3>
                <p className="text-gray-600">
                  Most membership applications are processed within 48 hours. You
                  will receive a confirmation email with your membership details
                  and welcome package.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Can I attend meetings if I'm not a member?
                </h3>
                <p className="text-gray-600">
                  General meetings are open to all supporters, but only members
                  have voting rights and access to exclusive member events and
                  forums.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How can I get involved in campaigns?
                </h3>
                <p className="text-gray-600">
                  Members receive regular updates about active campaigns and
                  opportunities to participate. You can also email
                  campaigns@nassu.org to learn about current initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
