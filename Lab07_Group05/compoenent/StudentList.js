import React from 'react';

function StudentList({ studentList }) {
  return (
    <div>
      <h2>รายชื่อนักศึกษา</h2>
      <ul>
        {studentList.map((student, index) => (
          <li key={index}>
            {student.name} ({student.nickname})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
