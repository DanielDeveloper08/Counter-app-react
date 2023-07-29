import { useState } from "react"

export const useForm = (initialForm = {})=>{

    const [form, setForm] = useState(initialForm)

    const inputChange = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onResetForm = () => {
        setForm(initialForm);
    }

    return {
        form,
        ...form,
        inputChange,
        onResetForm
    }
}