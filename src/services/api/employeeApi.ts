import type { Employee } from "../../types/employee";

const EMPLOYEE_KEY = "employees";

export const getEmployees = (): Employee[] => {
  const data = localStorage.getItem(EMPLOYEE_KEY);

  return data
    ? JSON.parse(data).map((employee: Employee) => ({
        ...employee,
        status: employee.status || "Inactive",
      }))
    : [];
};

export const createEmployee = (
  employee: Employee
): Employee[] => {
  const employees = getEmployees();

  const exists = employees.some(
    (existingEmployee) =>
      existingEmployee.id === employee.id
  );

  if (exists) {
    throw new Error("Employee ID already exists");
  }

  const updatedEmployees = [
    ...employees,
    employee,
  ];

  localStorage.setItem(
    EMPLOYEE_KEY,
    JSON.stringify(updatedEmployees)
  );

  return updatedEmployees;
};

export const editEmployee = (
  updatedEmployee: Employee
): Employee[] => {
  const employees = getEmployees();

  const updatedEmployees = employees.map(
    (employee) =>
      employee.id === updatedEmployee.id
        ? updatedEmployee
        : employee
  );

  localStorage.setItem(
    EMPLOYEE_KEY,
    JSON.stringify(updatedEmployees)
  );

  return updatedEmployees;
};

export const removeEmployee = (
  employeeId: string
): Employee[] => {
  const employees = getEmployees();

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.id !== employeeId
  );

  localStorage.setItem(
    EMPLOYEE_KEY,
    JSON.stringify(filteredEmployees)
  );

  return filteredEmployees;
};