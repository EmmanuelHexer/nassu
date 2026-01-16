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
      <section className="relative py-16 md:py-24 overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-primary-600/75"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{fontFamily: 'Playfair Display'}}>About NASSU</h1>
            <p className="text-lg md:text-xl text-white/90">
              The independent voice of sports supporters nationwide
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{fontFamily: 'Playfair Display'}}>Our Mission</h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
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

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900" style={{fontFamily: 'Playfair Display'}}>Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="mb-4">
                  <div className="w-12 h-1 bg-primary-600 mb-6"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display'}}>
                    {value.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900" style={{fontFamily: 'Playfair Display'}}>Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <span className="text-4xl font-bold text-white" style={{fontFamily: 'Playfair Display'}}>
                    {member.name
                      .split(" ")
                      .slice(-2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Playfair Display'}}>
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4 uppercase text-sm tracking-wide">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg">
              Board members are elected annually by NASSU members through a democratic voting process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-4xl font-bold mb-3">1</div>
                <h3 className="text-xl font-bold mb-3">Listen</h3>
                <p className="text-primary-100">
                  We gather feedback from members about issues affecting
                  supporters and identify key concerns.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-3">2</div>
                <h3 className="text-xl font-bold mb-3">Advocate</h3>
                <p className="text-primary-100">
                  We engage with clubs, leagues, and authorities to represent
                  supporter interests and push for positive change.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-3">3</div>
                <h3 className="text-xl font-bold mb-3">Deliver</h3>
                <p className="text-primary-100">
                  We campaign relentlessly until we achieve results that benefit
                  the wider supporter community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
