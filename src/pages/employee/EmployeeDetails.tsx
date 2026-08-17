import { useParams } from "react-router-dom";

import EmployeeDetailsCard from "../../components/employee/EmployeeDetails";

import type { Employee } from "../../types/employee";

function EmployeeDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const data = localStorage.getItem("employees");

  const employees: Employee[] = data
    ? JSON.parse(data)
    : [];

  const employee = employees.find(
    (item) => item.id === id
  );

  if (!employee) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white">

            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Employee Not Found
            </h1>

            <p className="text-gray-600">
              The requested employee could not be found.
            </p>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-16">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white">

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Employee Details
          </h1>

          <EmployeeDetailsCard employee={employee} />

        </div>

      </div>
    </section>
  );
}

export default EmployeeDetailsPage;