import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks';
import { Small } from './Small';


  const heavyStuff = (iteracionNumber = 100)=>{
      for (let index = 0; index < iteracionNumber ; index++) {
          console.log("Iteracion")
      }

      return `${iteracionNumber} iteraciones realizadas`
  }

export const MemoHook = () => {

    console.log("RENDER")
    const [show, setShow] = useState(false);
    const {counter, increment} = useCounter(200);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
      <hr />

      <h4> {memorizeValue}</h4>
        <button  
            className='btn btn-primary'
            onClick={() => increment()}>
                +1
        </button>

        <button
            className='btn btn-outline-primary ms-2'
            onClick={()=> setShow(!show)}>
                Show / Hide
        </button>
    </>
  )
}
