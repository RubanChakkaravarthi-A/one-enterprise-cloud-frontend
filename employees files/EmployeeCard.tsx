import { useState } from "react";
import type { Employee } from "../src/types/employee";
import EmployeeDetails from "./EmployeeDetails";

interface EmployeeCardProps {
  employee: Employee & {
    photo?: string;
    phone?: string;
    joiningDate?: string;
    status?: string;
  };
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const isActive = employee.status === "Active";

  const handleEmployeeClick = () => {
    setShowDetails((previousState) => !previousState);
  };

  return (
    <div
      className="employee-card"
      onClick={handleEmployeeClick}
    >
      <img
        src={employee.photo || "https://i.pravatar.cc/150"}
        alt={employee.name}
      />

      <h3>{employee.name}</h3>

      <p>
        <strong>Employee ID:</strong> {employee.id}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Designation:</strong> {employee.designation}
      </p>

      <span
        className={`status ${
          isActive ? "active" : "inactive"
        }`}
      >
        {employee.status || "Inactive"}
      </span>

      {showDetails && (
        <EmployeeDetails employee={employee} />
      )}
    </div>
  );
};

export default EmployeeCard;