import { NavLink, Route, Routes } from "react-router-dom"
import Users from "./Components/Users"
import Photoes from "./Components/Photoes"
import ReactMecanism from "./Components/ReactMecanism"

function App() {
  return (
    <>
      <h1 className="text-center">useEffect</h1>
      <div className="text-center">
        <NavLink to="Photoes" className='btn btn-primary mx-2' >Photoes</NavLink>
        <NavLink to="/" className='btn btn-success mx-2'>Users</NavLink>
        <NavLink to="Mecanism" className='btn btn-warning mx-2'>Mecanism</NavLink>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="Photoes" element={<Photoes />} />
        <Route path="Mecanism" element={<ReactMecanism/>} />
      </Routes>
    </>
  )
}

export default App
