import React, { useState, useEffect } from "react";
import axiosInstance from "../Api/axiosInstance";

const ShowCourses = () => {
  // State variables to handle courses, loading, and error
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("Authorization token missing");
      return;
    }
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("/api/getAllCourses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);

        setCourses(response.data.courses); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded-md mb-4">
          {error}
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4">Course List</h2>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Course Name</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Fee</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id}>
                  <td className="px-4 py-2 border-b">{course.name}</td>
                  <td className="px-4 py-2 border-b">{course.description}</td>
                  <td className="px-4 py-2 border-b">{course.fee}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-2 text-center">
                  No courses found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowCourses;
