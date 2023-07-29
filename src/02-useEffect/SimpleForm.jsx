import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [form, setForm] = useState({
        email: '',
        username: ''
    })

    const { email, username } = form;

    const inputChange = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log("CAMBIOS EN FORMULARIO")
    }, [form])

    useEffect(() => {
        // console.log("CAMBIOS EN USERNAME")
    }, [username])

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
                value={form.username}
            />

            <input
                type="email"
                className='form-control mt-3'
                placeholder='daniel@google.com'
                name='email'
                onChange={inputChange}
                value={form.email}
            />


            {
                username == 'daniel' && <Message />
            }

        </>
    )
}
