import React from "react";
import { Student } from "../type/index";
import view from "../assets/icons/checked.svg";
type GridViewProps = {
  students: Student[];
  onSelectStudent: (student: Student) => void;
};

const GridView: React.FC<GridViewProps> = ({ students, onSelectStudent }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          onClick={() => onSelectStudent(student)}
        >
          <h3 className="text-sm text-blue-1 text-center">
            Student: {student.id}
          </h3>
          <div className="flex items-center justify-center gap-2">
            <img src={view} alt={"view"} height={20} width={20} />
            <h3 className="text-xl font-bold text-dark-1 text-center my-1">
              {student.name}
            </h3>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="text-sm text-blue-1 hover:text-blue-800 ">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
