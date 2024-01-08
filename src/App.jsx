import { NavLink, Route, Routes } from "react-router-dom"
import Users from "./Components/Users"
import Photoes from "./Components/Photoes"

function App() {
  return (
    <>
      <h1 className="text-center">useEffect</h1>
      <div className="text-center">
        <NavLink to="Photoes" className='btn btn-primary mx-2' >Photoes</NavLink>
        <NavLink to="/" className='btn btn-success mx-2'>Users</NavLink>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="Photoes" element={<Photoes />} />
      </Routes>
    </>
  )
}

export default App
