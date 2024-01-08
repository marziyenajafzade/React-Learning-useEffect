import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000);

        //unmouting state | claenup function
        return () => {
            console.log('unmouting state');
            clearInterval(interval);
        }
    }, [count])
    return (
        <div>Count: {count}</div>
    )
}

export default Counter