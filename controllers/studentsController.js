import Student from "../model/student.js";

// POST /students - Insert a new student
const addStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const student = await Student.create({
      name,
      email,
      age,
    });

    res.status(201).json({
      message: `Student ${name} added successfully`,
      student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /students - Retrieve all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /students/:id - Retrieve student by ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /students/:id - Update student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const [updatedRows] = await Student.update(
      { name, email, age },
      { where: { id } },
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /students/:id - Delete student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRows = await Student.destroy({
      where: { id },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
