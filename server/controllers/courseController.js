import { sql } from '../config/db.js';

export const getCoursesForUser = async (req, res) => {
  const userId = req.session.userId;
  const courses = await sql`
    SELECT courses.* FROM courses
    JOIN enrollments ON courses.id = enrollments.course_id
    WHERE enrollments.user_id = ${userId}
  `;
  res.json({ courses });
};

export const enrollCourse = async (req, res) => {
  const userId = req.session.userId;
  const { courseId } = req.body;
  await sql`
    INSERT INTO enrollments (user_id, course_id)
    VALUES (${userId}, ${courseId})
    ON CONFLICT DO NOTHING
  `;
  res.json({ message: "Enrolled" });
};