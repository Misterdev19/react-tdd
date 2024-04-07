import { ItemsElement } from './components/ItemsElement.jsx';
import './App.css'
import logo from './assets/logo.svg'
import { UseItems } from './hooks/useItems.js';
import { useSEO } from './hooks/userSEO.js';


function App() {
  const { items, addItems, removeItem } = UseItems();
  useSEO({
    title: `[${items.length}] Listado de elementos`,
    descripcion:'Listado de elementos de React'
  });

  const hadleSutmit = (event) => {

    event.preventDefault()
    const { elements } = event.currentTarget;
    const input = elements.namedItem('item');
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input === null) return;

    addItems(input.value)

    input.value = '';

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
          items.length === 0 ? (
            <p><strong>No hay elementos</strong></p>
          ) : (
            <ul>
              {
                items.map((item) => {
                  return <ItemsElement
                    key={item.id}
                    {...item}
                    habdleClick={() => removeItem(item.id)}
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
