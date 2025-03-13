import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import ResultForm from './components/ResultForm'
import HeadLine from './components/HeadLine'
import suhShortLogo from './assets/suhShortLogo.png'

function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true) // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://suh-results-app-server.onrender.com/students')
        if (response.data?.data) {
          setStudents(response.data.data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false) // Set loading to false after fetching
      }
    }

    fetchData()
  }, [])

  // Show loading screen until data is fetched
  if (loading) {
    return (
      <div className="flex flex-col h-screen justify-center items-center loading-screen">
        <img src={suhShortLogo} className='h-auto max-w-xs' alt="Sreenidhi University" />
        <p className='text-green-800 font-bold'>Loading...</p>
        <p className='text-red-800 mt-2'>Please do not close, refresh, or press the back button.</p>
      </div>
    )
  }

  return (
    <>
      <Header />
      <HeadLine />
      <ResultForm studentInfo={students} />
    </>
  )
}

export default App


