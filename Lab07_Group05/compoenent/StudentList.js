import React from 'react';
import Student from './Student';

function StudentList({ studentList }) {
  return (
    <div>
      <h2>รายชื่อนักศึกษา</h2>
      <ul>
        {studentList.map((student, index) => (
          <li key={index}>
            <Student name={student.name} nickname={student.nickname} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
