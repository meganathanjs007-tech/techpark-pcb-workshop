"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface RegistrationForm {
  full_name: string;
  mobile: string;
  email: string;
  college: string;
  department: string;
  year: string;
  place: string;
  experience: string;
  reason: string;
}

const initialForm: RegistrationForm = {
  full_name: "",
  mobile: "",
  email: "",
  college: "",
  department: "",
  year: "",
  place: "",
  experience: "",
  reason: "",
};

export default function Registration() {
  const [form, setForm] = useState<RegistrationForm>(initialForm);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Registration failed");
      }

      alert("Registration Successful!");

      setForm(initialForm);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="register"
      className="bg-gradient-to-b from-orange-50 via-white to-slate-50 py-20"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Register <span className="text-orange-500">Now</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Secure your FREE seat for the TechPark PCB Design Workshop.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-200 bg-white p-10 shadow-2xl"
        >
          <div className="grid gap-8 md:grid-cols-2">

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* College */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                College Name
              </label>

              <input
                type="text"
                name="college"
                value={form.college}
                onChange={handleChange}
                required
                placeholder="Enter your college name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>
                        {/* Department */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Department
              </label>

              <input
                type="text"
                name="department"
                value={form.department}
                onChange={handleChange}
                required
                placeholder="ECE / EEE / CSE / IT"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Year */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Year
              </label>

              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="Final Year">Final Year</option>
              </select>
            </div>

            {/* Place */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Place
              </label>

              <input
                type="text"
                name="place"
                value={form.place}
                onChange={handleChange}
                required
                placeholder="Enter your city or town"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Experience */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Previous PCB Experience
              </label>

              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Reason */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Why do you want to join this workshop?
              </label>

              <textarea
                rows={5}
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
                placeholder="Tell us why you are interested..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Terms */}
            <div className="md:col-span-2">
              <label className="flex items-start gap-3 rounded-xl bg-orange-50 p-4">
                <input
                  type="checkbox"
                  required
                  className="mt-2 h-5 w-5 accent-orange-500"
                />

                <span className="text-sm text-gray-700">
                  I confirm that the information provided is correct and I
                  agree to participate in the TechPark PCB Design Workshop.
                </span>
              </label>
            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-20 w-full rounded-2xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Register for FREE"}
          </button>
        </form>
      </div>
    </section>
  );
}