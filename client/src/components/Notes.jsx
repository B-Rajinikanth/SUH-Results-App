import React from 'react'

const notesList = [
  {
    info: 'Students must secure a minimum of 35% in internal assessments (out of 50 marks) and minimum of 35% in external assessments and an aggregate of 40% to be eligible for passing the Theory courses.', 
    key: 0
  },
  {
    info: 'Students must secure a minimum of 35% in internal assessments (out of 50 marks) and minimum of 35% in external assessments and an aggregate of 50% to be eligible for passing the Practical courses.', 
    key: 1
  },
  {
    info: 'Please Contact the Controller of Examinations within 15 days of publication of the results for any clarification', 
    key: 2
  },
]

const Notes = () => {
  return (
    <div className='p-5 lg:px-10 border border-gray-300 rounded-md'>
        <div className='flex justify-center'>
          <p className='font-bold text-red-600 mx-5'>*-  Results Withheld</p>
        </div>
        <p className='font-bold'>Note:</p>
        <ul>
          {notesList.map(note => {
            return(
              <li key={note.key}>{note.key+1}. {note.info}</li>
            );
          })}
        </ul>
    </div>
  )
}

export default Notes
