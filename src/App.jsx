import { useState } from 'react'
import { ItemsElement } from './components/ItemsElement.jsx';
import './App.css'
import logo from './assets/logo.svg'


// const INICIAL_ITEMS = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Video juegos',
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Libros de programación',
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Peliculas de accion',
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Comprar un nuevo auto',
//   }
// ]

function App() {
  const [items, setItems] = useState([]);
   
  const hadleSutmit = (event) => {
    
    event.preventDefault()
    const { elements } = event.currentTarget;
    const input = elements.namedItem('item');
    const isInput = input instanceof HTMLInputElement;
    if(!isInput ||  input === null) return;
    
    const  newItem = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value
    }


    setItems((prevItem) => {
      return [...prevItem, newItem]
    });
    
    input.value = '';
    
  }

  const deleteItem = (id) => {
    console.log("delete item", id);
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id !== id)
    })
  }

  return (
    <main>
      <aside>
        <h1>Listado de elementos</h1>
          <h2>Añadir o eliminar elementos</h2>
        <form onSubmit={hadleSutmit} aria-label='Form to add new item'>
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
        {
            items.length === 0  ? (
              <p><strong>No hay elementos</strong></p>
            ) : ( 
              <ul>
                {
                  items.map((item) => {
                     return  <ItemsElement
                        key={item.id}
                        {...item}
                        habdleClick={()=> deleteItem(item.id)}
                    />
                    
                  })
                }
              </ul>
            )
          }
      </section>
      <article>
           <img src={logo} alt="" /> 
      </article>
    </main>
  )
}

export default App
