import type { Employee } from "../../types/employee";

interface EmployeeDetailsProps {
  employee: Employee & {
    phone?: string;
    joiningDate?: string;
    status?: string;
  };
}

const EmployeeDetails = ({
  employee,
}: EmployeeDetailsProps) => {
  return (
    <div className="employee-details">

      <h2>Employee Details</h2>

      <div className="employee-details-grid">

        <p>
          <strong>Employee ID:</strong>
          <span>{employee.id}</span>
        </p>

        <p>
          <strong>Name:</strong>
          <span>{employee.name}</span>
        </p>

        <p>
          <strong>Department:</strong>
          <span>{employee.department}</span>
        </p>

        <p>
          <strong>Designation:</strong>
          <span>{employee.designation}</span>
        </p>

        <p>
          <strong>Email:</strong>
          <span>{employee.email}</span>
        </p>

        <p>
          <strong>Phone:</strong>
          <span>{employee.phone || "-"}</span>
        </p>

        <p>
          <strong>Joining Date:</strong>
          <span>{employee.joiningDate || "-"}</span>
        </p>

        <p>
          <strong>Status:</strong>
          <span>{employee.status || "Inactive"}</span>
        </p>

      </div>

    </div>
  );
};

export default EmployeeDetails;