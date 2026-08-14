import { useState } from "react";

interface EmployeeFormData {
  id: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  phone: string;
  joiningDate: string;
  status: string;
  photo: string;
}

interface EmployeeFormProps {
  onAddEmployee: (employee: EmployeeFormData) => void;
}

const EmployeeForm = ({ onAddEmployee }: EmployeeFormProps) => {
  const [formData, setFormData] = useState<EmployeeFormData>({
    id: "",
    name: "",
    email: "",
    department: "",
    designation: "",
    phone: "",
    joiningDate: "",
    status: "Active",
    photo: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !formData.id ||
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.designation
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onAddEmployee(formData);

    setFormData({
      id: "",
      name: "",
      email: "",
      department: "",
      designation: "",
      phone: "",
      joiningDate: "",
      status: "Active",
      photo:"",
    });
  };

  return (
    <div className="employee-form-card">

      <div className="employee-form-header">
        <h2>Add Employee</h2>

        <p>
          Enter employee information below.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="employee-form-grid">

          <div className="form-group">
            <label>Employee ID</label>

            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="EMP002"
              required
            />
          </div>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
            />
          </div>

          <div className="form-group">
            <label>Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Department
              </option>

              <option value="HR">
                HR
              </option>

              <option value="Development">
                Development
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="CRM">
                CRM
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Designation</label>

            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Software Engineer"
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Joining</label>

            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
  <label>Employee Photo</label>

  <input
    type="text"
    name="photo"
    value={formData.photo}
    onChange={handleChange}
    placeholder="Enter Photo URL"
  />
</div>

          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>
          </div>

        </div>

        <div className="form-button-group">

          <button
            type="submit"
            className="add-employee-btn"
          >
            Add Employee
          </button>

        </div>

      </form>

    </div>
  );
};

export default EmployeeForm;