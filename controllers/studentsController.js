import db from "../utils/db-connection.js";

// POST /students - Insert a new student
const addStudent = (req, res) => {
  const { name, email, age } = req.body;

  const query = `INSERT INTO students (name, email, age) 
                VALUES (?,?,?)`;

  db.execute(query, [name, email, age], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }

    res.status(201).json({
      message: `Student added with ${name} successfully`,
    });
  });
};

// GET /students - Retrieve all students
const getAllStudents = (req, res) => {
  const query = "SELECT * FROM students";

  db.execute(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(result);
  });
};

// GET /students/:id - Retrieve student by ID
const getStudentById = (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM students WHERE id = ?";

  db.execute(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(result[0]);
  });
};

// PUT /students/:id - Update student
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const query = `
    UPDATE students
    SET name = ?, email = ?, age = ?
    WHERE id = ?
  `;

  db.execute(query, [name, email, age, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student updated successfully" });
  });
};

// DELETE /students/:id - Delete student
const deleteStudent = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM students WHERE id = ?";

  db.execute(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  });
};

export {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
