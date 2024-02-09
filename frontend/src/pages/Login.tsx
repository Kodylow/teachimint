import { useState } from "react";
import { StudentLogin } from "../components/auth/StudentLogin";
import { TeacherLogin } from "../components/auth/TeacherLogin";
import { Dropdown } from "../components/inputs/Dropdown";

export const Login = () => {
  const [role, setRole] = useState("Student");
  const roles = ["Student", "Teacher"];
  const handleUpdateRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4 w-auto">
      <h1 className="text-4xl">Login</h1>
      <Dropdown options={roles} onChange={handleUpdateRole} value={role} />
      {role === "Student" ? <StudentLogin /> : <TeacherLogin />}
    </div>
  );
};
