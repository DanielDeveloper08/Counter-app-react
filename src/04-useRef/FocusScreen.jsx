import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClickInput = ()=>{
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={inputRef}
            className='form-control'
            type="text"
            placeholder='Ingrese su nombre' 
            />

        <button className='btn btn-primary mt-3' onClick={onClickInput}>Set Focus</button>
    </>
  )
}
