
import { useState } from "react"

import Header from "./componets/Header"
import Input from "./componets/Input"
import ListElement from "./componets/ListElement"


function App() {
  const [ShoppingListItems, setShoppingListItems] = useState(['carrot', 'potatoes', 'parsley'])


  return (
    <div className="mt-36 text-center">
      <Header />
      <Input />
      {ShoppingListItems.map(shoppingListItem => {
        return <ListElement 
        content={shoppingListItem}
        key={Date.now}/>
      })}
    </div>
  )
}

export default App
