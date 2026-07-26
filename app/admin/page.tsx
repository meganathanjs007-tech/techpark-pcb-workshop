"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
interface Registration {
  id: number;
  full_name: string;
  mobile: string;
  email: string;
  college: string;
  department: string;
  year: string;
  place: string;
  experience: string;
  reason: string;
  created_at: string;
}

export default function AdminPage() {
  const router = useRouter();

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");

    if (loggedIn !== "true") {
      router.replace("/admin/login");
      return;
    }

    loadRegistrations();
  }, [router]);

  async function loadRegistrations() {
    try {
      setLoading(true);

     const response = await fetch(
  "https://techpark-backend.onrender.com/registrations"
);
      const data = await response.json();
      setRegistrations(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load registrations.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteRegistration(id: number) {
    const ok = confirm("Delete this registration?");

    if (!ok) return;

    try {
    await fetch(
  `https://techpark-backend.onrender.com/registrations/${id}`,
  {
    method: "DELETE",
  }
);
      loadRegistrations();
    } catch (error) {
      console.error(error);
      alert("Delete failed.");
    }
  }

  function exportExcel() {
    const exportData = registrations.map((item) => ({
      ID: item.id,
      Name: item.full_name,
      Mobile: item.mobile,
      Email: item.email,
      College: item.college,
      Department: item.department,
      Year: item.year,
      Place: item.place,
      Experience: item.experience,
      Reason: item.reason,
      Registered_On: new Date(
        item.created_at
      ).toLocaleString(),
    }));

    const worksheet =
      XLSX.utils.json_to_sheet(exportData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Registrations"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(file, "TechPark_Registrations.xlsx");
  }

  const filtered = useMemo(() => {
    return registrations.filter((item) =>
      (
        item.full_name +
        item.mobile +
        item.email +
        item.college +
        item.department +
        item.place
      )
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [registrations, search]);

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h1 className="text-4xl font-bold text-gray-900">
              TechPark Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Manage Workshop Registrations
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={loadRegistrations}
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Refresh
            </button>

            <button
              onClick={exportExcel}
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Export Excel
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("adminLoggedIn");
                router.replace("/admin/login");
              }}
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              Logout
            </button>

          </div>

        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">

            <p className="text-gray-500">
              Total Registrations
            </p>

            <h2 className="mt-2 text-4xl font-bold text-orange-500">
              {registrations.length}
            </h2>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow md:col-span-2">

            <input
              type="text"
              placeholder="Search by Name, Mobile, Email..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />

          </div>

        </div>
                <div className="overflow-hidden rounded-2xl bg-white shadow">

          {loading ? (

            <div className="p-10 text-center text-lg font-medium text-gray-500">
              Loading registrations...
            </div>

          ) : filtered.length === 0 ? (

            <div className="p-10 text-center text-lg font-medium text-gray-500">
              No registrations found.
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="min-w-full">

                <thead className="bg-orange-500 text-white">

                  <tr>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Mobile</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">College</th>
                    <th className="px-4 py-3 text-left">Department</th>
                    <th className="px-4 py-3 text-left">Year</th>
                    <th className="px-4 py-3 text-left">Place</th>
                    <th className="px-4 py-3 text-left">Experience</th>
                    <th className="px-4 py-3 text-left">Reason</th>
                    <th className="px-4 py-3 text-left">Registered</th>
                    <th className="px-4 py-3 text-center">
                      Action
                    </th>
                  </tr>

                </thead>

                <tbody>

                  {filtered.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b hover:bg-orange-50"
                    >

                      <td className="px-4 py-3 font-medium">
                        {item.full_name}
                      </td>

                      <td className="px-4 py-3">
                        {item.mobile}
                      </td>

                      <td className="px-4 py-3">
                        {item.email}
                      </td>

                      <td className="px-4 py-3">
                        {item.college}
                      </td>

                      <td className="px-4 py-3">
                        {item.department}
                      </td>

                      <td className="px-4 py-3">
                        {item.year}
                      </td>

                      <td className="px-4 py-3">
                        {item.place}
                      </td>

                      <td className="px-4 py-3">
                        {item.experience}
                      </td>

                      <td className="px-4 py-3 max-w-xs">
                        <div className="truncate">
                          {item.reason}
                        </div>
                      </td>

                      <td className="px-4 py-3">
                        {new Date(
                          item.created_at
                        ).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-3 text-center">

                        <button
                          onClick={() =>
                            deleteRegistration(item.id)
                          }
                          className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </main>
  );
}