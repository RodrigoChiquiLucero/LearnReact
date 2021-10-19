import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({ normal: '13', texto: 'xz', select: '', check: false, estado: 'feliz' })
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }))
  }
  console.log(value)
  return (
    <div>
      {value.length < 5 ? <span> Longitud min de 5</span> : null}
      <input type='text' name="normal" value={value.normal} onChange={handleChange} />
      <textarea onChange={handleChange} name="texto" value={value.texto} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value=''> -- Selection</option>
        <option value='chanchoFeliz'> chanchoFeliz</option>
        <option value='chanchitoFeliz'>chanchitoFeliz</option>
        <option value='chanchitoTriste'>chanchitoTriste</option>
        <option value='felipe'>felipe</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check} />

      <div >
        <label>Chancho</label>
        <input onChange={handleChange} type="radio" value="feliz" name="estado" checked={value.estado === 'feliz'} />feliz
        <input onChange={handleChange} type="radio" value="triste" name="estado" checked={value.estado === 'triste'} />triste
        <input onChange={handleChange} type="radio" value="felipe" name="estado" checked={value.estado === 'felipe'} />felipe
      </div>
    </div>
  )
}

export default App;