// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  readAllUsers,
  readSingleUser,
  deleteSingleUser,
  updateUserUsingQueryParams,
} = require("../Controllers/userController.js");
const loginLimiter = require("../middlewares/rateLimit.js");
const {
  createStudent,
  getAllStudents,
  createCourse,
  getAllCourses,
  enrollStudent,
  enrollStudentAsAdmin,
  adminPayments,
  getPaymentsSummary,
} = require("../Controllers/adminController.js");
const {
  studentEnrollCourse,
  enrollInCourse,
  makePayment,
  getEnrolledStudents,
} = require("../Controllers/studentControllers.js");
const { authenticateAdmin } = require("../middlewares/Authnticate.js");
const { authenticateStudent } = require("../middlewares/stdAuthenticate.js");

router.post("/signup", signup);

router.post("/login", loginLimiter, login);
router.get("/alluser", readAllUsers);
router.get("/singleuser/:email", readSingleUser);
router.delete("/deleteuser", deleteSingleUser);
router.put("/updatesingle", updateUserUsingQueryParams);
router.post("/add", authenticateAdmin, createStudent);
router.get("/getallStudents", authenticateAdmin, getAllStudents);
router.post("/addcourse", authenticateAdmin, createCourse);
router.get("/getAllCourses", authenticateAdmin, getAllCourses);
router.post("/payments", authenticateAdmin, adminPayments);
router.get("/summary", authenticateAdmin, getPaymentsSummary);
router.get("/student/course", authenticateStudent, studentEnrollCourse);
router.post("/enroll", authenticateStudent, enrollInCourse); // Enroll in a course
router.get(
  "/getenrollStudent/:course_id",

  getEnrolledStudents
);
module.exports = router;
