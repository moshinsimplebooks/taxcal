
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Income from './pages/Income/Income'
import Employee from './pages/Income/Employee/Employee'
import Deduction from './pages/Deduction/Deduction'
import Medical from './pages/Deduction/Medical/Medical'
import Buisness from './pages/Income/Buisness/Buisness'
import Investment from './pages/Income/Investment/Investment'
import Housing from './pages/Deduction/Housing/Housing'
import Other from './pages/Income/Other/Other'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route index element={<Income/>}/>
          <Route  path='income' element={<Income/>}>
            <Route index element={<Employee/>}/>
            <Route path='employee' element={<Employee/>}/>
            <Route path='buisness' element={<Buisness/>}/>
            <Route path='investment' element={<Investment/>}/>
            <Route path='other' element={<Other/>}/>
          </Route>
          <Route path='deduction' element={<Deduction/>}>
            <Route index element={<Medical/>}/>
            <Route path='medical' element={<Medical/>}/>
            <Route path='housing' element={<Housing/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
