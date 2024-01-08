import { useState } from "react"

function ReactMecanism() {
    const [isShow, setIsShow] = useState(false);
  return (
    <div>
        <h1>React Mecanism</h1>
        {isShow && <h3>session-118 </h3>}
        
        <button onClick={()=>setIsShow((isShow)=>!isShow)}>change</button>
        </div>
  )
}

export default ReactMecanism