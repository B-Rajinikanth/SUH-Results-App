import mongoose from "mongoose"

const studentSchema = mongoose.Schema(
    {
        urNumber: {
            type: String, 
            required: true,
        },
        studentName: {
            type: String,
            required: true,
        },
        branch: {
            type: String,
            required: true,
        },
        courses:{
            course_1:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_2:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_3:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_4:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_5:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_6:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_7:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_8:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_9:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_10:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_11:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
            course_12:{
                courseCode: {type: String, required: true},
                courseTitle: {type: String, required: true},
                result: {type: String, required: true},
                grade: {type: String, required: true},
                credits: {type: Number, required: true},
            },
        },
        sgpa: {
            type: String, 
            required: true,
        }
    }
);

export const Student = mongoose.model('Student', studentSchema);
