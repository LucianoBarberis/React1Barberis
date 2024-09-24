import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const msg = prompt("Como te llamas?")
  return (
    <>
      <Header />
      <Main message={"Hola " + msg + "!"}/>
    </>
  )
}
//* No se como puedo hacer para que no se ejecute 2 veces el prompt *//
export default App
