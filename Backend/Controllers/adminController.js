const pool = require("../config/pgdb");

const adminPayments = async (req, res) => {
  const { enrollment_id, amount_paid, payment_status, payment_date } = req.body;

  const query = `
      INSERT INTO payments (enrollment_id, amount_paid, payment_status, payment_date)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
  const values = [enrollment_id, amount_paid, payment_status, payment_date];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating payment:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPaymentsSummary = async (req, res) => {
  try {
    const query = `
        SELECT 
          TO_CHAR(payment_date, 'YYYY-MM-DD') AS date,
          SUM(amount_paid) AS total_paid
        FROM payments
        GROUP BY date
        ORDER BY date DESC;
      `;

    const result = await pool.query(query);

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching payment summary:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createStudent = async (req, res) => {
  const { first_name, last_name, email, reg_no } = req.body;
  if (!first_name || !last_name || !email || !reg_no) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const checkQuery = "SELECT * FROM students WHERE email = $1 OR reg_no = $2";
  const checkValues = [email, reg_no];

  try {
    const existingStudent = await pool.query(checkQuery, checkValues);
    if (existingStudent.rows.length > 0) {
      return res.status(400).json({
        message: "Student with this email or roll number already exists.",
      });
    }

    const insertQuery = `
        INSERT INTO students (first_name, last_name, email, reg_no)
        VALUES ($1, $2, $3, $4) RETURNING *;
      `;
    const result = await pool.query(insertQuery, [
      first_name,
      last_name,
      email,
      reg_no,
    ]);
    res.status(201).json({ student: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create student." });
  }
};

const getAllStudents = async (req, res) => {
  const getQuery = "SELECT * FROM students";

  try {
    const result = await pool.query(getQuery);
    res.status(200).json({ students: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve students." });
  }
};

const createCourse = async (req, res) => {
  const { name, description, fee } = req.body;
  if (!name || !description || !fee) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const insertQuery = `
      INSERT INTO courses (name, description, fee)
      VALUES ($1, $2, $3) RETURNING *;
    `;
  try {
    const result = await pool.query(insertQuery, [name, description, fee]);
    res.status(201).json({ course: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create course." });
  }
};

const getAllCourses = async (req, res) => {
  const selectQuery = `
      SELECT * FROM courses; 
    `;

  try {
    const result = await pool.query(selectQuery);
    res.status(200).json({ courses: result.rows });
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve courses." });
  }
};

module.exports = {
  createStudent,
  createCourse,
  getAllStudents,
  getAllCourses,
  adminPayments,
  getPaymentsSummary,
};
