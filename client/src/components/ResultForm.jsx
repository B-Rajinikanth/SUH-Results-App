import React, { useState } from 'react'
import ShowResult from './ShowResult'

const ResultForm = ({studentInfo}) => {

  const [urNumberEntered, setUrNumberEntered] = useState('')
  const [stud, setStud] = useState([])

  const handleSubmission = async ()=> {
      const currentStud = await studentInfo.filter((item)=> item.urNumber == urNumberEntered.toUpperCase())
      setStud(currentStud)
      if(currentStud[0]) {
        console.log(currentStud)
      } else {
        alert('Student not found, enter the correct University Registration Number.')
      }
  }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-3 bg-green-100 p-5 rounded md:m-5 lg:p-10'>
          <label className='text-green-900 hidden md:block' htmlFor="URNumber">Enter UR Number</label>
          <input value={urNumberEntered} onChange={(e)=>setUrNumberEntered(e.target.value)} placeholder='enter UR Number' className='bg-gray-100 border-1 border-gray-400 rounded-md w-full md:w-lg font-bold px-3 py-2 text-center' type="text" />
          <button onClick={handleSubmission} className='bg-green-800 text-white px-4 py-2 rounded-md cursor-pointer my-3 hover:bg-green-900'><i className="fa-solid fa-paper-plane"></i> &nbsp; Submit</button>
        </div>
        <div>
        {
          stud[0] && <ShowResult currentStudent={stud[0]} />
        }
        </div>
    </div>
  )
}

export default ResultForm;
