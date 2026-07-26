export default function TechPark() {
  const services = [
    "PCB Design",
    "Embedded Systems",
    "IoT Development",
    "Firmware Development",
    "Robotics Projects",
    "Student Workshops",
  ];

  return (
    <section id="techpark" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">TechPark</span>
        </h2>

        <p className="section-subtitle">
          Empowering students and innovators through practical technology
          education.
        </p>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Left Card */}
          <div className="card shadow-soft flex h-full flex-col">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Who We Are
            </h3>

            <p className="leading-8 text-gray-600">
              TechPark is a technology-focused organization dedicated to
              providing high-quality training in PCB Design, Embedded Systems,
              IoT, Robotics and modern engineering technologies.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our mission is to bridge the gap between academic knowledge and
              real-world industry skills through practical workshops and
              hands-on learning.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              We help students gain confidence, improve technical skills and
              prepare for internships, placements and engineering careers.
            </p>
          </div>

          {/* Right Card */}
          <div className="card shadow-soft flex h-full flex-col">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Our Services
            </h3>

            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex min-h-[70px] items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 px-4 py-4 text-center font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-100"
                >
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-orange-500 p-6 text-white">
              

             
            </div>
          </div>
        </div>

        {/* Bottom Card */}
       
          
        </div>
      
    </section>
  );
}