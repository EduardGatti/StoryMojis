import { FcAlarmClock } from 'react-icons/fc'
import './Demo1.css'


function Demo1() {
  function responderClique(){

    alert("Voce Clicou, Parabens")

  }
  const tratarEntrada = () => {

    

  }
  return (
    <div className='container-demo1'>
        <button onClick={responderClique}>Clique Aqui</button>
        <button onClick={() => {alert("Eu nasci de uma arrow function.")}}>➡️</button>

        <img className='img-dev' src="./image/Pair programming.gif" alt="" />
        <FcAlarmClock />
    </div>
  )
}

export default Demo1