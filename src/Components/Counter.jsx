import { useEffect } from "react"

const Counter = () =>{
    useEffect(()=>{

        //unmouting state | claenup function
        return ()=>{console.log('unmouting state')}
    },[])
  return (
    <div>Counter</div>
  )
}

export default Counter