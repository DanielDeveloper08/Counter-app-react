import { useState } from "react"

export const useCounter = (valueInitial = 1) => {

    const [counter, setCounter] = useState(valueInitial)

     
    const increment = (value = 1) =>{
        setCounter(counter + value)
    }

    
    const decrement = (value = 1) =>{
        value > 0 ? setCounter(counter - value) : null
    }

    const reset = ()=>{
        setCounter(valueInitial);
    }


    return {
        counter,
        increment,
        decrement,
        reset
    }
}