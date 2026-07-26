export default function Learn() {
  const topics = [
    {
      title: "Introduction to PCB",
      description:
        "Understand what a Printed Circuit Board is and why it is used in electronic products.",
    },
    {
      title: "Electronic Components",
      description:
        "Learn Resistors, Capacitors, Diodes, LEDs, Transistors, ICs and Connectors.",
    },
    {
      title: "Schematic Design",
      description:
        "Create professional circuit schematics using modern PCB design software.",
    },
    {
      title: "PCB Layout",
      description:
        "Convert schematic diagrams into PCB layouts with proper placement and routing.",
    },
    {
      title: "Design Rules",
      description:
        "Learn trace width, clearance, vias, copper layers and PCB design best practices.",
    },
    {
      title: "Manufacturing Process",
      description:
        "Understand fabrication, assembly, testing and final PCB production workflow.",
    },
  ];

  return (
    <section id="learn" className="bg-white">
      <div className="container">
        <h2 className="section-title">
          What You&apos;ll <span className="gradient-text">Learn</span>
        </h2>

        <p className="section-subtitle">
          Industry-focused topics taught from basic to advanced level.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic.title} className="card shadow-soft">
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {topic.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}