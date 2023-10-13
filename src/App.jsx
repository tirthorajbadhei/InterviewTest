
import './App.css'
import Navbar from './Components/Navbar'
import AllRoute from './Routes/AllRoutes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="main-container ">
        <AllRoute />
      </div>

    </>
  )
}

export default App
