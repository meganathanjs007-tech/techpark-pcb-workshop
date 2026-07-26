"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "techpark123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin");
    } else {
      alert("Invalid Username or Password");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-100 to-white p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-orange-600">
            TechPark
          </h1>

          <p className="mt-2 text-gray-600">
            PCB Workshop Admin Login
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>

            <label className="mb-2 block font-medium">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />

          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 text-lg font-semibold text-white transition hover:bg-orange-600"
          >
            Login
          </button>

        </form>

        <div className="mt-8 rounded-xl bg-orange-50 p-4 text-center text-sm text-gray-600">

        

        </div>

      </div>

    </main>
  );
}