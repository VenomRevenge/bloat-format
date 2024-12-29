import { useState } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Format1v1v from './Format-1v1v'

function App() {
  const [homePageState, setHomePageState] = useState(true)

  return (
    <>
      <Header />
       {/* <Home /> */}
       <Format1v1v/>
    </>
  )
}

export default App
