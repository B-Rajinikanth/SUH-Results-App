import express from "express"
import { Student } from "../models/studentModel.js"

const router = express.Router();

// Pulling all students data
router.get('/', async (request, response)=> {
    try {
        const students = await Student.find({});

        return response.status(200).json({
            count: students.length,
            data: students
        });

    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message: error.message});
    }
})

export default router;