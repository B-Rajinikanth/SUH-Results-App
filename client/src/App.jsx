import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import Header from './components/Header'
import ResultForm from './components/ResultForm'
import HeadLine from './components/HeadLine'
import ShowResult from './components/ShowResult'

function App() {


  const [students, setStudents] = useState([])

  useEffect(()=> {
    axios
      .get('https://suh-results-app-server.onrender.com/students')
      .then((response)=> {
          setStudents(response.data.data);
          console.log('Data recieved!')
      })
      .catch((error)=> {
          alert('Not Data received!')
          console.log(error)
      }) 
  }, []);

  return (
    <>
      <Header />
      <HeadLine />
      <ResultForm studentInfo= {students} />
    </>
  )
}

export default App
