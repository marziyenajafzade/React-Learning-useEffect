import { useState } from "react"

function ReactMecanism() {
    const [isShow, setIsShow] = useState(false);
    const [text, setText] = useState("");
    const [count, setCount]= useState(0);

    const clickHandler = ()=>{
        setIsShow((isShow)=>!isShow);
        setCount(count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setText("new text")

    }
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
            <h2>state batching</h2>
            <strong>{count}</strong>
            <p>{text}</p>
            <button onClick={clickHandler} className="btn btn-light">update text</button>
        </div>
    )
}

export default ReactMecanism