export default function Highlights() {
  const highlights = [
    "100% Free Workshop",
    "Hands-on Practical Session",
    "Industry-Oriented Learning",
    "E-Certificate for Participants",
    "Live PCB Design Demonstration",
    "Beginner Friendly",
    "Career Guidance in PCB Design",
    "Interactive Q&A Session",
  ];

  return (
    <section id="highlights" className="bg-white">
      <div className="container">
        <h2 className="section-title">
          Workshop <span className="gradient-text">Highlights</span>
        </h2>

        <p className="section-subtitle">
          Everything you get by participating in this workshop.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="card shadow-soft text-center transition hover:border-orange-500"
            >
              <div className="mb-4 text-5xl">✅</div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}