import React, { useState } from 'react'
import Notes from './Notes'

const ShowResult = ({currentStudent}) => {
    const [semester, setSemester] = useState("1")
    const [degree, setDegree] = useState("B. Tech")

    return (
        <div className='bg-gray-50 shadow py-3 px-5 rounded md:my-2 md:mx-5 lg:p-10'>
            {/* Displaying Student Details */}
            <div className="flex flex-col md:flex-row gap-3 justify-between md:px-5 lg:px-10">
                <p>Student Name: <span className='font-bold'>{currentStudent.studentName}</span></p>
                <p>UR Number: <span className='font-bold'>{currentStudent.urNumber}</span></p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 justify-between md:px-5 lg:px-10">
                <p>Program: {degree}</p>
                <p>Branch: {currentStudent.branch}</p>
                <p>Semester: {semester}</p>
            </div>

            {/* Displaying Results Table */}
            <div className='flex flex-col justify-center items-center my-5 mx-3'>
            <table className="table-auto bg-cyan-50">
                <tbody>
                    <tr className='bg-cyan-300 border'>
                        <td className='px-3 py-1 font-bold border'>Course Code</td>
                        <td className='px-3 py-1 font-bold border'>Course Title</td>
                        <td className='px-3 py-1 font-bold border'>Result</td>
                        <td className='px-3 py-1 font-bold border'>Grade</td>
                    </tr>

                    {
                        currentStudent.courses.map(item => {
                            return(
                                item.courseCode != "NA" && 
                                <tr className=''>
                                    <td className='px-3 py-1 text-center border'>{item.courseCode}</td>
                                    <td className='px-3 py-1 border'>{item.courseTitle}</td>
                                    <td className='px-3 py-1 text-center border'>{item.result}</td>
                                    <td className='px-3 py-1 text-center border'>{item.grade}</td>
                                </tr>
                            );
                        })
                    }

                    <tr className=''>
                        <td className='px-3 py-1 text-center border text-xl font-bold' colSpan={4}>SGPA &rarr; {currentStudent.sgpa}</td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
            <Notes />
            <div className='text-center mt-5'>
                <button onClick={()=>window.print()} className='bg-green-800 hover:bg-green-900 cursor-pointer rounded-md px-4 py-2 text-white'><i className="fa-solid fa-print"></i> &nbsp; Print</button>
            </div>
        </div>
    )
}

export default ShowResult
