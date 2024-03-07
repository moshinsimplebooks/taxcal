
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Employee from './pages/Employee/Employee'
import Buisness from './pages/Buisness/Buisness'
import Investment from './pages/Investment/Investment'
import Medical from './pages/Medical/Medical'
import Housing from './pages/Housing/Housing'
import Educational from './pages/Educational/Educational'
import Donations from './pages/Donations/Donations'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Employee />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/buisness' element={<Buisness />} />
          <Route path='/investment' element={<Investment />} />
          <Route path='/medical' element={<Medical />} />
          <Route path='/housing' element={<Housing />} />
          <Route path='/educational' element={<Educational />} />
          <Route path='/donations' element={<Donations />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
