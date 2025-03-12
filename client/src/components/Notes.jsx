import React from 'react'

const notesList = [
  {
    info: 'Students must secure a minimum of 35% in internal assessments (out of 50 marks) and minimum of 35% in external assessments and an aggregate of 40% to be eligible for passing the course.', 
    key: 0
  },
  {
    info: 'Revaluation of theory papers are only permitted.', 
    key: 1
  },
  {
    info: 'A Revaluation Form with prescribed fees through HOD and Dean, should reach the O/o Controller of Examinations, Sreenidhi University within 15 days from the date of publication of results.', 
    key: 2
  },
  {
    info: 'Late request will not be considered under any circumstances.', 
    key: 3
  },
  {
    info: 'Please Contact the Controller of Examinations within 15 days of publication of the results for any clarification.', 
    key: 4
  },

]

const Notes = () => {
  return (
    <div className='p-5 lg:px-10 border border-gray-300 rounded-md'>
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
