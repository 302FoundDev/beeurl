import { useState } from 'react'
import './App.css'

function App() {

  const [loading, setLoading] = useState(false)
  const [covidData, setCovidData] = useState(null)

  const fetchData = () => {
    fetch('https://covid-19-data.p.rapidapi.com/country/code?format=json&code=es', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "e2e616f75fmsh4b483c19582684dp15912bjsn6034d9ac086c"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setCovidData(data)
        setLoading(!loading)
      })
  }

  return (
    <main className='flex flex-col gap-4 text-center'>
      <div>
        <h2 className='text-3xl'>Api test</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-xl'><span>Covid api</span></p>
        <button onClick={fetchData} className='text-xl flex'>Fetch data</button>
      </div>

      <div>
        {loading && <p>Loading...</p>}
        {covidData && 
          <div className='flex flex-col gap-4'>
            <h3>COVID Data for Spain</h3>
            <pre>{JSON.stringify(covidData, null, 2)}</pre>
          </div>
        }
      </div>
    </main>
  )
}

export default App
