import { useState } from "react";
import { StudentLogin } from "./StudentLogin";
import { TeacherLogin } from "./TeacherLogin";
import { Dropdown } from "../inputs/Dropdown";

export const Login = () => {
  const [role, setRole] = useState("Student");
  const roles = ["Student", "Teacher"];
  const handleUpdateRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl text-green-500 mb-4">Login</h1>
      <Dropdown options={roles} onChange={handleUpdateRole} value={role} />
      {role === "Student" ? <StudentLogin /> : <TeacherLogin />}
    </div>
  );
};
