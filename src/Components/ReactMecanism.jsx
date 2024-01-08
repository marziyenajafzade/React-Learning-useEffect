import { useState } from "react"

function ReactMecanism() {
    const [isShow, setIsShow] = useState(false);
  return (
    <div className="px-5">
        <h1>React Mecanism</h1>
        {isShow && <h3>session-118 </h3>}
        {isShow && <button className="btn btn-success" onClick={()=>setIsShow((isShow)=>!isShow)}>hide</button>}
        {!isShow && <button className="btn btn-info" onClick={()=>setIsShow((isShow)=>!isShow)}>show</button>}

        </div>
  )
}

export default ReactMecanism