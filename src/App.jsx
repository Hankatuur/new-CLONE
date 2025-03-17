
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage/HomePage'
import Auth from './pages/Auth/Auth'
import PageLayout from './Latout/PageLayout/PageLayout'


function App() {
  

  return (
     <PageLayout>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
    </PageLayout>
    
  )
}

export default App
