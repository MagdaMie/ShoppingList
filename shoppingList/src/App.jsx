
import { useState } from "react"

import Header from "./componets/Header"
import Input from "./componets/Input"
import ListElement from "./componets/ListElement"


function App() {
  const [ShoppingListItems, setShoppingListItems] = useState([])

  const[Item, setItem] = useState('')

  const handleSetItem = (e) => {
    setItem(e.target.value)
  }

  const handleAddItemToTheList = (e) => {
    e.preventDefault()
    setShoppingListItems([...ShoppingListItems, Item])
    setItem('')
  }

  const handleRemoveItemfromTheList = (id) => {
    setShoppingListItems(ShoppingListItems.filter(shoppingListItem => shoppingListItem !== id))
  }



  return (
    <div className="mt-36 text-center">
      <Header />
      <Input 
      onChange={handleSetItem}
      onSubmit={handleAddItemToTheList}
      value={Item}/>
      {ShoppingListItems.map((shoppingListItem, index) => {
        return <ListElement 
        content={shoppingListItem}
        key={index}
        id={index}
        onClick={() => handleRemoveItemfromTheList(shoppingListItem)}/>
      })}
    </div>
  )
}

export default App
