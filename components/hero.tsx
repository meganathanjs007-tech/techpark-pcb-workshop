import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            FREE PCB Design Workshop
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            PCB Design Workshop
          </h1>

          <p className="mt-4 text-xl font-semibold text-orange-500">
            Organized by TechPark
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Learn PCB Design from scratch with practical sessions,
            industry-oriented training and hands-on experience.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="btn-primary"
            >
              Register Now
            </Link>

            <a
              href="#details"
              className="btn-outline"
            >
              Workshop Details
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-orange-500">
                02
              </h3>

              <p className="mt-2 font-medium text-gray-600">
                August 2026
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-3xl font-bold text-orange-500">
                10 AM
              </h3>

              <p className="mt-2 font-medium text-gray-600">
                to 1 PM
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-3xl font-bold text-orange-500">
                FREE
              </h3>

              <p className="mt-2 font-medium text-gray-600">
                Registration
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-3xl font-bold text-orange-500">
                🎓
              </h3>

              <p className="mt-2 font-medium text-gray-600">
                E-Certificate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}