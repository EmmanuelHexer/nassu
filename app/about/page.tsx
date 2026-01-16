import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NASSU's mission, values, and how we advocate for sports supporter rights across the nation.",
};

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Mr. Anthony Kwame Boateng",
      role: "Chair",
      description: "Leading Ashanti supporter and advocate for fair treatment in Ghana football",
    },
    {
      name: "Mr. Eric Tuffour",
      role: "Vice Chair",
      description: "Dedicated supporter with extensive experience in grassroots organizing",
    },
    {
      name: "Mr. Nana Amoateng",
      role: "Secretary",
      description: "Passionate advocate for supporter rights and community engagement",
    },
  ];

  const values = [
    {
      title: "Independence",
      description:
        "We are entirely independent from clubs, leagues, and commercial interests. Our loyalty is to supporters only.",
    },
    {
      title: "Democracy",
      description:
        "Every member has an equal voice. Our board is elected by members through transparent democratic processes.",
    },
    {
      title: "Transparency",
      description:
        "We operate with complete openness, publishing meeting notes, financial reports, and decision-making processes.",
    },
    {
      title: "Inclusivity",
      description:
        "All supporters are welcome regardless of the sport, team, or background. We represent the entire supporter community.",
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
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{fontFamily: 'Playfair Display'}}>About</h1>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-16 md:py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600/10 to-gold-400/10 px-6 py-2.5 rounded-full mb-6">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                <span className="text-primary-600 font-bold text-sm uppercase tracking-widest">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display'}}>
                Fighting for <span className="text-primary-600">Supporter Rights</span>
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed border-l-4 border-gold-400 pl-6">
                The National Sports Supporters Union exists to give fans a
                collective voice in the sports they love. We are an independent,
                democratic organization that represents supporter interests in
                discussions with clubs, leagues, and governing bodies.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Founded by supporters, for supporters, we believe that fans are the
                lifeblood of sport and deserve meaningful representation in
                decisions that affect their experience, their clubs, and the future
                of the games we all cherish.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Unlike traditional supporters clubs that may be affiliated with or
                run by teams, NASSU maintains complete independence, ensuring our
                advocacy is always focused on what benefits supporters, not what
                serves commercial or institutional interests.
              </p>
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-full mb-6 shadow-sm border border-primary-600/10">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-primary-600 font-bold text-sm uppercase tracking-widest">Core Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display'}}>
              What We <span className="text-primary-600">Stand For</span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
            {values.map((value, index) => (
              <div key={index} className="group">
                {/* Number and Title Row */}
                <div className="flex items-start gap-8 mb-6">
                  {/* Large Number */}
                  <div className="flex-shrink-0">
                    <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-600/10 group-hover:text-primary-600/20 transition-colors duration-300" style={{fontFamily: 'Playfair Display'}}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 group-hover:text-primary-600 transition-colors duration-300" style={{fontFamily: 'Playfair Display'}}>
                      {value.title}
                    </h3>
                    <div className="h-px w-20 bg-gradient-to-r from-primary-600 via-gold-400 to-transparent mb-6 group-hover:w-32 transition-all duration-500"></div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-16 pb-8 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -translate-x-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600/10 via-gold-400/10 to-green-600/10 px-6 py-2.5 rounded-full mb-6 border border-primary-600/20">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              <span className="text-primary-600 font-bold text-sm uppercase tracking-widest">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{fontFamily: 'Playfair Display'}}>
              Meet Our <span className="text-green-600">Leadership Team</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated Ashanti supporters leading the fight for fair treatment and stronger voices in Ghana football.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center group relative">
                {/* Avatar with gradient border */}
                <div className="relative w-36 h-36 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-gold-400 to-green-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative w-36 h-36 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-lg">
                    <span className="text-5xl font-bold text-white" style={{fontFamily: 'Playfair Display'}}>
                      {member.name
                        .split(" ")
                        .slice(-2)
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300" style={{fontFamily: 'Playfair Display'}}>
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-primary-600/10 px-4 py-1.5 rounded-full">
                    <span className="text-primary-600 font-bold uppercase text-xs tracking-wider">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                    {member.description}
                  </p>
                </div>

                {/* Decorative bottom line */}
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
