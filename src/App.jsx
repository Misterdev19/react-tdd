import { useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'

const INICIAL_ITEMS = [
  
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Video juegos',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Libros de programación',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Peliculas de accion',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Comprar un nuevo auto',
  }
]

function App() {
  const [items, setItems] = useState(INICIAL_ITEMS)

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
          <h2>Elementos agregados</h2>
        <ul>
          {
             items.map((item) => (
                  <li key={item.id}>{item.text}</li>
             ))
          }
          </ul>
      </section>
      <article>
           <img src={logo} alt="" /> 
      </article>
    </main>
  )
}

export default App
