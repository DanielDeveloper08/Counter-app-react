import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

  return (
    <>
        <h2>Counter1: {state.counter1}</h2>
        <h2>Counter2: {state.counter2}</h2>
        <h2>Counter3: {state.counter3}</h2>
        <hr />

        <button onClick={()=>{
            setCounter({
                ...state,
                counter1: state.counter1+ +1
            })
        }} className='btn btn-info'>+1</button>
        {/* <button >-1</button> */}

    </>
  )
}
