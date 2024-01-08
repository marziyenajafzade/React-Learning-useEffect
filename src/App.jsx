import { NavLink, Route, Routes } from "react-router-dom"
import Users from "./Components/Users"
import Photoes from "./Components/Photoes"

function App() {
  return (
    <>
      <h1>useEffect</h1>
      <NavLink to="Photoes" className='btn ms-lg-3 fs-small btn-opt-nj border-0' type="button">Photoes</NavLink>
      <NavLink to="/" className='btn ms-lg-3 fs-small btn-opt-nj border-0'>Users</NavLink>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="Photoes" element={<Photoes />} />
      </Routes>
    </>
  )
}

export default App
