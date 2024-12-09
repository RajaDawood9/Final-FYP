import React, { useState, useEffect } from "react";
import axiosInstance from "../Api/axiosInstance";

const ShowStudents = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("Authorization token missing");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get("/api/getallStudents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setStudents(response.data.students);
        setFilteredStudents(response.data.students);
      } else {
        setError(response.data.message || "Failed to fetch students");
      }
    } catch (error) {
      console.error("Request failed:", error);

      if (error.response) {
        setError(error.response.data.message || "Failed to fetch students.");
      } else {
        setError("An error occurred while fetching students.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter((student) =>
        student.reg_no.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded-md mb-4">
          {error}
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4">Student List</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Registration Number"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">First Name</th>
              <th className="px-4 py-2 border-b">Last Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Registration Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-4 py-2 border-b">{student.first_name}</td>
                  <td className="px-4 py-2 border-b">{student.last_name}</td>
                  <td className="px-4 py-2 border-b">{student.email}</td>
                  <td className="px-4 py-2 border-b">{student.reg_no}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-2 text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowStudents;
