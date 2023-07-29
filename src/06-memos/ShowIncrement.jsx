import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log("boton se volvio a generar")
  return (
        <button 
            className='btn btn-primary'
            onClick={()=>{ increment() }}>
                Incrementar
        </button>
    )
})
