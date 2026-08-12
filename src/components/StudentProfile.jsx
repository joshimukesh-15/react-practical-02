import React from "react";

function StudentProfile(props) {
  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Semester: {props.semester}</p>
    </div>
  );
}

export default StudentProfile;