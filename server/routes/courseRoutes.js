import express from 'express';
import { getCoursesForUser, enrollCourse } from '../controllers/courseController.js';
import { requireLogin } from '../middleware/requireLogin.js';

const router = express.Router();
router.get('/', requireLogin, getCoursesForUser);
router.post('/enroll', requireLogin, enrollCourse);
export default router;