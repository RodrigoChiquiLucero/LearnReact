import useFormulario from './hooks/useFormulario/useFormulario';
import Input from './components/Input';

function App() {
  const [formulario, handleChange] = useFormulario({ name: '', lastname: '' })
  console.log(formulario);
  return (
    <form>
      <Input label="Nombre" name="name" value={formulario.name} onChange={handleChange}></Input>
      <Input label="Apellido" name="lastname" value={formulario.lastname} onChange={handleChange}></Input>
    </form>
  );
}

export default App;
