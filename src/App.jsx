import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import { MainLayout } from './main-layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          
        </Route>
      </Routes>
    </>
  )
}

export default App
