export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-orange-500">Tech</span>Park
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              TechPark is committed to empowering students through practical
              workshops in PCB Design, Embedded Systems, IoT, Robotics, and
              modern engineering technologies.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="#about" className="hover:text-orange-400">
                  About
                </a>
              </li>

              <li>
                <a href="#learn" className="hover:text-orange-400">
                  Learn
                </a>
              </li>

              <li>
                <a href="#details" className="hover:text-orange-400">
                  Workshop Details
                </a>
              </li>

              <li>
                <a href="#register" className="hover:text-orange-400">
                  Register
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-orange-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-3 text-slate-300">
              <p>📞 +91 88076 92621</p>
              <p>📞 +91 84289 93002</p>
              <p>📍 SDLC, Namakkal</p>

              <a
                href="https://www.instagram.com/tech_park.info_/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-400"
              >
                Instagram: @tech_park.info_
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          <p>
            © {year} <span className="font-semibold text-white">TechPark</span>.
            All Rights Reserved.
          </p>

          <p className="mt-2">
            Designed & Developed by{" "}
            <span className="font-semibold text-orange-400">
              TechPark Team
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}