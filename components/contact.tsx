export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-orange-50 py-20"
    >
      <div className="container">
        <h2 className="section-title">
          Contact <span className="gradient-text">Us</span>
        </h2>

        <p className="section-subtitle">
          Have questions? Reach out to the TechPark team anytime.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Card */}
          <div className="card shadow-soft flex flex-col">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Workshop Contact
            </h3>

            <div className="space-y-8">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
                  Phone Numbers
                </p>

                <a
                  href="tel:+918807692621"
                  className="block text-lg font-medium text-gray-700 transition hover:text-orange-500"
                >
                  +91 88076 92621
                </a>

                <a
                  href="tel:+918428993002"
                  className="mt-2 block text-lg font-medium text-gray-700 transition hover:text-orange-500"
                >
                  +91 84289 93002
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
                  Instagram
                </p>

                <a
                  href="https://www.instagram.com/tech_park.info_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-700 transition hover:text-orange-500"
                >
                  @tech_park.info_
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
                  Venue
                </p>

                <p className="text-lg text-gray-700">
                  SDLC, Namakkal
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
                  Workshop Schedule
                </p>

                <p className="text-lg text-gray-700">
                  📅 02 August 2026
                  <br />
                  🕙 10:00 AM – 1:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex h-full flex-col rounded-2xl bg-orange-500 p-20 text-white shadow-soft">
            <h3 className="text-2xl font-bold">
              Ready to Join?
            </h3>

            <p className="mt-6 text-lg leading-8 text-orange-50">
              Learn professional PCB Design through practical sessions,
              real-world examples and industry-oriented guidance.
            </p>

          
            <div className="mt-2 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <ul className="space-y-5 text-lg">
                <li>✅ FREE Registration</li>
               
                <li>✅ E-Certificate</li>
                <li>✅ Industry-Oriented Learning</li>
                <li>✅ Beginner Friendly</li>
              </ul>
            </div>

            <div className="mt-auto pt-8">
              <p className="text-center text-sm text-orange-100">
                Register to reserve your place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}