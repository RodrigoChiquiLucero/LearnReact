import { useState } from "react";

const useFormulario = (incial) => {
    const [formulario, setformulario] = useState(incial)
    const handleChange = (e) => {
        setformulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    return [formulario, handleChange];
}

export default useFormulario;