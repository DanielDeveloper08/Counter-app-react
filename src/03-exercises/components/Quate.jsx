import React from 'react'

export const Quate = ({ name, species, image }) => {
    return (
        <>
            <div className='d-flex justify-content-center flex-column align-items-center'>
            <img src={image} alt={name} />
            <blockquote className='blockquote text-center'>
                <p className='mb-1'>{name}</p>
                <footer className='blockquote-footer mt-1'>{species}</footer>
            </blockquote>
            </div>
        </>
    )
}
