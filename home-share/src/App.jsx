import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from './pages/Dashbord'
import Expenses from './pages/Expenses'
import Member from './pages/Member';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashbord/>}/>
      <Route path='/expenses' element={<Expenses/>}/>
      <Route path='/members' element={<Member/>}/>
      {/* <Route path='/summary' element={<Dashbord/>}/> */}
      {/* <Route path='/settings' element={<Dashbord/>}/> */}
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
