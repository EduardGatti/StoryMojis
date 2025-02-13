import Demo2 from '../Demo2/Demo2.jsx'
import './Body.css'
import Demo1 from '../Demo1/Demo1.jsx'
function Body() {
  return (
    <div className='container-body'>
        <h1>Página importante para o mundo</h1>
        <Demo2 />
        <Demo1 />
    </div>
  )
}

export default Body