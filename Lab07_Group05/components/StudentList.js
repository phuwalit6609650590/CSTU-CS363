import React, { useState } from "react";
import Student from "./Student";
import "../App.css";

function StudentList({ studentList }) {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [studentArray, setStudentArray] = useState(studentList)

  const handleItemClick = (index) => {
    setHighlightedIndex(index);
  };

  const handleDoubleClick = (index) => {
    setStudentArray((prev)=>prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2>รายชื่อนักศึกษา</h2>
      <ul>
        {studentList.map((student, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            onDoubleClick={() => handleDoubleClick(index)}
            className={highlightedIndex === index ? "highlighted" : ""}
          >
            <Student name={student.name} nickname={student.nickname} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
