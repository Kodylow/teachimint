import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Toggle } from "../inputs/Toggle";
import { Dropdown } from "../inputs/Dropdown";
import { TextInput } from "../inputs/TextInput";
import { Button } from "../inputs/Button";

export function StudentLogin() {
  const [classroom, setClassroom] = useState("");
  const [classroomOptions, setClassroomOptions] = useState<string[]>([]);
  const [classroomType, setClassroomType] = useState("public");
  const [studentDisplayName, setStudentDisplayName] = useState("");
  const navigate = useNavigate();

  const handleDisplayNameUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentDisplayName(e.target.value);
  };
  const handleClassroomUpdate = (
    e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>,
  ) => {
    setClassroom(e.target.value);
  };
  const handleClassroomTypeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? (setClassroomType("private"), setClassroom(""))
      : (setClassroomType("public"), setClassroom(""));
  };
  console.log(classroom);

  useEffect(() => {
    // fetch("http://localhost:3000/classrooms")
    //   .then((response) => response.json())
    //   .then((data) => setClassrooms(data))
    //   .catch((error) => console.error("Error:", error));
    setClassroomOptions(["Classroom 1", "Classroom 2", "Classroom 3"]);
  }, []);

  const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.alert(`TODO: Send request to join classroom
    Classroom: ${classroom}
    Display name: ${studentDisplayName}`);

    navigate(`/student/${classroom}`);
  };

  const formValid = studentDisplayName && classroom;

  const validClassroomId = true;

  const labelClassName = "block text-gray-700 text-sm font-bold -mb-3";

  return (
    <form onSubmit={handleJoin} className="flex flex-col gap-4">
      <label className={labelClassName} htmlFor="display-name">
        Display Name
      </label>
      <TextInput
        id="display-name"
        placeholder="Display name"
        value={studentDisplayName}
        onChange={handleDisplayNameUpdate}
      />
      <Toggle labelText="Private classroom" onChange={handleClassroomTypeUpdate} />
      <label className={labelClassName} htmlFor="classroom-id">
        Classroom ID
      </label>
      {classroomType === "public" && (
        <Dropdown
          id="classroom-id"
          placeholder="Select Classroom"
          value={classroom}
          options={classroomOptions}
          onChange={handleClassroomUpdate}
        />
      )}
      {classroomType === "private" && (
        <TextInput
          id="classroom-id"
          placeholder="Classroom ID"
          value={classroom}
          className={!validClassroomId ? "border-red-500 focus:outline-red-500" : ""}
          onChange={handleClassroomUpdate}
        />
      )}
      {!validClassroomId && <p className="text-red-500 text-xs italic">Invalid classroom ID.</p>}
      <Button disabled={!formValid} type="submit" text="Join" />
    </form>
  );
}
