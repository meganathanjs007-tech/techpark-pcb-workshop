export default function About() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="container">
        <h2 className="section-title">
          About the <span className="gradient-text">Workshop</span>
        </h2>

        <p className="section-subtitle">
          A beginner-friendly PCB Design Workshop designed for students and
          electronics enthusiasts.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="card shadow-soft">
            <h3 className="mb-4 text-2xl font-bold">
              Why Join This Workshop?
            </h3>

            <p className="leading-8 text-gray-600">
              This workshop is specially designed for beginners who want to
              learn PCB Design from scratch. You will understand how electronic
              circuits are converted into professional Printed Circuit Boards
              using modern PCB design software.
            </p>
          </div>

          <div className="card shadow-soft">
            <h3 className="mb-4 text-2xl font-bold">
              Who Can Participate?
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✅ Diploma Students</li>
              <li>✅ Engineering Students</li>
              <li>✅ Electronics Hobbyists</li>
              <li>✅ Beginners in PCB Design</li>
              <li>✅ Anyone interested in Embedded Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}