import { useFormik } from 'formik'

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Requerido'
    } else if (values.name.length < 5) {
        errors.name = 'El nombre es muy corto'
    }

    if (!values.lastname) {
        errors.lastname = 'Requerido'
    } else if (values.lastname.length < 5) {
        errors.lastname = 'El Apellido es muy corto'
    }

    return errors
}

function App() {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: ''
        },
        onSubmit: values => console.log(values),
        validate: validate
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Nombre</label>
            <input type='text' {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <br />
            <label>Apellido</label>
            <input type='text' {...formik.getFieldProps('lastname')} />
            {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
            <br />
            <label>Email</label>
            <input type='email' {...formik.getFieldProps('email')} />
            <button type="submit">Enviar</button>
            <br />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </form>
    );
}

export default App;
