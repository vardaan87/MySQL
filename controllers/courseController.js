import Course from "../model/course.js";

const addCourse = async (req, res) => {
  try {
    const { title, StudentId } = req.body;

    const course = await Course.create({
      title,
      StudentId,
    });

    res.status(201).json({
      message: `Course ${title} added successfully`,
      course,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addCourse, getAllCourses };
