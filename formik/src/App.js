import { Formik, Form, ErrorMessage } from 'formik';
import TextInput from './components/TextInput'
import CheckBox from './components/CheckBox';
import Select from './components/Select'
import Radio from './components/Radio'

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

  if (!values.radio) {
    errors.radio = 'Requerido';
  }

  return errors
}

function App() {

  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: '', chancho: '', radio: '' }}
      validate={validate}
      onSubmit={values => console.log(values)} >
      {
        <Form>
          <TextInput name="name" label="Nombre" />
          <br />
          <TextInput name="lastname" label="Apellido" />
          <br />
          <TextInput name="email" label="Correo" />
          <Select label="tipo de chancho" name="chancho">
            <option value="">Seleccione Chancho</option>
            <option value="felipe">Felipe</option>
            <option value="chanchitoFeliz">Chanchito Feliz</option>
          </Select>
          <CheckBox name="accept">Aceptar terminos y condiciones </CheckBox>
          <Radio name="radio" value="chanchito1" label="chanchito1"></Radio>
          <Radio name="radio" value="chanchito2" label="chanchito2"></Radio>
          <Radio name="radio" value="chanchito3" label="chanchito3"></Radio>
          <ErrorMessage name="radio" />
          <button type="submit">Enviar</button>
          <br />
        </Form>}
    </Formik>
  );
}


export default App;
