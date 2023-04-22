import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {


  function handleClick(){
    setAppClass(!appClass)
  }



  const [appClass , setAppClass] = useState(true);

  return (
    <div className={appClass? "App Light": "App Dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
