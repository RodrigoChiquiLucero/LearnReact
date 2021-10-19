const impura = () => new Date().toLocaleDateString();
console.log('impura - siempre cambian', impura())

const MiComponente = (props) => {
  const { miProp } = props
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const Intro = () => {
  return (
    <MiComponente miProp={'chanchitoFeliz'} />
  )
}

export default Intro
