import React, { useState } from "react";
import GridView from "../components/GridView";
import { useFetch } from "../hooks/fetch";
import { Student } from "../type/index";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "../components/ui/dialog"; // Assuming you're using shadcn
import view from "../assets/icons/checked.svg";

const GridPage: React.FC = () => {
  const {
    data: students,
    loading,
    error,
  } = useFetch<Student[]>("https://freetestapi.com/api/v1/students?limit=12");

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleCloseDialog = () => {
    setSelectedStudent(null);
  };
  console.log(selectedStudent, "selected");

  return (
    <div className="grid-page p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Students Data</h1>

      {/* Handle loading and error */}
      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {/* Display grid of students */}
      {students && (
        <GridView students={students} onSelectStudent={handleSelectStudent} />
      )}

      {/* Dialog for showing selected student details */}
      {selectedStudent && (
        <Dialog open={!!selectedStudent} onOpenChange={handleCloseDialog}>
          <DialogTrigger className="hidden" /> {/* Hidden trigger */}
          <DialogContent className="bg-white border-2 border-light-1 max-w-full sm:max-w-lg lg:max-w-lg w-full">
            <DialogDescription>
              <div className="mb-4 flex items-center w-full justify-center gap-2">
                <div className="text-lg font-bold text-dark-1 text-center flex gap-2">
                  {selectedStudent.name}'s Details
                <img src={view} alt={"view"} height={20} width={20} />
                </div>
              </div>
              <div className="flex flex-col w-full space-y-3">
                {/* Age */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">Age:</span>
                  <span className="text-gray-600 truncate max-w-[70%]">
                    {selectedStudent.age}
                  </span>
                </div>

                {/* Gender */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">Gender:</span>
                  <span className="text-gray-600 truncate max-w-[70%]">
                    {selectedStudent.gender}
                  </span>
                </div>

                {/* Email */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">Email:</span>
                  <span className="text-gray-600 truncate max-w-[70%]">
                    {selectedStudent.email}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">Phone:</span>
                  <span className="text-gray-600 truncate max-w-[70%]">
                    {selectedStudent.phone}
                  </span>
                </div>

                {/* Address */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">Address:</span>
                  <span className="text-gray-600 truncate max-w-[70%]">
                    {selectedStudent.address.street}, {selectedStudent.address.city}, {selectedStudent.address.country}
                  </span>
                </div>

                {/* GPA */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">GPA:</span>
                  <span className="text-gray-600 truncate max-w-[70%]">
                    {selectedStudent.gpa}
                  </span>
                </div>

                {/* Courses */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">Courses:</span>
                  <span className="text-gray-600 truncate max-w-[70%]">
                    {selectedStudent.courses.join(", ")}
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="py-2 px-6 rounded-sm text-white bg-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="py-2 px-6 rounded-sm text-white bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default GridPage;
