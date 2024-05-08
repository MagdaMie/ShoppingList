
import { useState } from "react"

import Header from "./componets/Header"
import Input from "./componets/Input"
import ListElement from "./componets/ListElement"


function App() {
  const [shoppingListItems, setShoppingListItems] = useState([])

  const[Item, setItem] = useState('')
  const[isEditing, setIsediting] = useState(false)

  const handleSetItem = (e) => {
    setItem(e.target.value)
  }

  const handleAddItemToTheList = (e) => {
    e.preventDefault()
    setShoppingListItems([...shoppingListItems, Item])
    setItem('')
  }

  const handleRemoveItemfromTheList = (id) => {
    setShoppingListItems(shoppingListItems.filter(shoppingListItem => shoppingListItem !== id))
  }

  const handleEditShoppingListItem = (id) => {
    setItem(id)
    setIsediting(true)
    setShoppingListItems(shoppingListItems.filter(shoppingListItem => shoppingListItem !== id))
  }



  return (
    <div className="mt-36 text-center">
      <Header />
      <Input 
      onChange={handleSetItem}
      onSubmit={handleAddItemToTheList}
      value={Item}
      buttonValue={isEditing? 'Edit' : 'Add'}/>
      {shoppingListItems.map((shoppingListItem, index) => {
        return <ListElement 
        content={shoppingListItem}
        key={index}
        id={index}
        onClick={() => handleRemoveItemfromTheList(shoppingListItem)}
        edit={() => handleEditShoppingListItem(shoppingListItem)}/>
      })}
    </div>
  )
}

export default App
