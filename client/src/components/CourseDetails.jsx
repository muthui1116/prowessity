import React from "react";
import { useParams } from "react-router-dom";

export function CourseDetails() {
  const { id } = useParams();
  return (
    <div className="container mt-5 text-center">
      <h2>Welcome to the Course Details</h2>
      <p>You are viewing details for course ID: <b>{id}</b></p>
    </div>
  );
}