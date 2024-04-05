import { useState } from 'react'
export const UserItems = () => {
    const [items, setItems] = useState([]);    
    
    const addItems =  (text) => {
        const  newItem = {
            id: crypto.randomUUID(),
            timestamp: Date.now(),
            text
          }
      
      
          setItems((prevItem) => {
            return [...prevItem, newItem]
          });
    }

    const removeItem  = (id) => {
        setItems((prevItem) => {
            return prevItem.filter((item) => item.id !== id)
          })
    }

    return { items, addItems, removeItem }
}