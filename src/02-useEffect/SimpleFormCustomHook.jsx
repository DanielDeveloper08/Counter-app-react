import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const SimpleFormCustomHook = () => {


    const { form, inputChange, username, password, email, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    return (
        <>
            <h1>Formulario simple</h1>

            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                onChange={inputChange}
                value={username}
            />

            <input
                type="email"
                className='form-control mt-3'
                placeholder='daniel@google.com'
                name='email'
                onChange={inputChange}
                value={email}
            />

            <input
                type="password"
                className='form-control mt-3'
                placeholder='Contraseña'
                name='password'
                onChange={inputChange}
                value={password}
            />

            <button onClick={onResetForm} className='btn btn-dark mt-3'>Limpiar</button>

            <div className='mt-5'>
                {
                    JSON.stringify(form)
                }
            </div>


        </>
    )
}
