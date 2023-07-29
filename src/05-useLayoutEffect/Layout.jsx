import React, { useEffect } from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quate } from '../03-exercises/components';


export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/?page=${counter}`);

    const { name, species, image } = !!data && data.results[0];


    useEffect(() => {

    }, [counter])


    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                (!hasError)
                    ?
                    // (isLoading)
                    //     ? <LoadingQuote />
                        <Quate name={name} species={species} image={image} />

                    : null
            }

            {
                hasError && <div className='text-center mt-5 fw-bolder alert alert-danger'> Upss.. Hubo un error al mostrar las caricaturas..!</div>
            }


            {
                (!hasError) &&
                <div className='d-flex justify-content-center'>
                    <button
                        className='btn btn-primary me-3'
                        disabled={isLoading}
                        onClick={() => decrement()}>
                        Anterior
                    </button>
                    <button
                        className='btn btn-danger me-3'
                        onClick={() => reset()}>
                        <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                    <button
                        className='btn btn-primary'
                        disabled={isLoading}
                        onClick={() => increment()}>
                        Siguiente
                    </button>
                </div>
            }



        </>
    )
}
