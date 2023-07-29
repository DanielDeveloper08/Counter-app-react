import React from 'react'

export const Small = React.memo(({value}) => {

    console.log("Se volvio a generar, solo cuando existan cambios en los props, gracias al memo.")
  return (
    <>
        <small>{value}</small>
    </>
  )
})
