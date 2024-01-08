import { useState } from "react"

function ReactMecanism() {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className="px-5">
            <h1>React Mecanism</h1>
            {isShow && <h3>session-118 </h3>}
            <button
                className={`btn ${isShow ? 'btn-success' : 'btn-info'}`}
                onClick={() => setIsShow((isShow) => !isShow)}
            >
                {isShow ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}

export default ReactMecanism