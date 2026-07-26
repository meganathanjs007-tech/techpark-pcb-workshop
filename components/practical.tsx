export default function Practical() {
  const sessions = [
    {
      title: "Software Installation",
      description:
        "Learn how to install and set up PCB design software on your computer.",
    },
    {
      title: "Schematic Creation",
      description:
        "Create a complete electronic circuit from scratch using professional tools.",
    },
    {
      title: "PCB Routing",
      description:
        "Practice component placement, track routing, and PCB optimization.",
    },
    {
      title: "Generate Gerber Files",
      description:
        "Export manufacturing-ready Gerber files for PCB fabrication.",
    },
  ];

  return (
    <section id="practical" className="bg-slate-50">
      <div className="container">
        <h2 className="section-title">
          Practical <span className="gradient-text">Session</span>
        </h2>

        <p className="section-subtitle">
          Hands-on training to build your first PCB design.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {sessions.map((session, index) => (
            <div
              key={session.title}
              className="card shadow-soft flex gap-5 items-start"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {session.title}
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  {session.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-25 rounded-2xl bg-orange-500 p-8 text-center text-white shadow-soft">
          <h3 className="text-3xl font-bold">
            Build Your First PCB During the Workshop
          </h3>

          <p className="mt-3 text-lg">
            Every participant will design a PCB step-by-step with guidance from
            the TechPark team.
          </p>
        </div>
      </div>
    </section>
  );
}