import './App.css'
import logo from './assets/logo.svg'

function App() {


  return (
    <main>
      <aside>
        <h1>Listado de elementos</h1>
          <h2>Añadir o eliminar elementos</h2>
        <form action="">
          <label htmlFor="">
              Elemento a introducir:
            <input
              type="text"
              name='item'
              required
              placeholder='Agrega el nombre de un item' />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
      <section>
        <div className='list-elements'>
          <h2>Elementos agregados</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div> 
        <div className='img-element'>
           <img src={logo} alt="" />
        </div>
      </section>
    </main>
  )
}

export default App
