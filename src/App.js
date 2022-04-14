import React from 'react';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import foods from './foods.json';
import Button from './Components/Button';
import FoodsAdd from './Components/FoodsAdd';


function App() {

  const [showModal, setShowModal] = useState(false);
  const [allFoods, setAllFoods] = useState([...foods]);

  console.log(showModal)

  return (
    <div className="App">

      <Button setShowModal={setShowModal} showModal={showModal}/>

      {showModal ? <FoodsAdd /> : null }
      
      {allFoods.map((currentFood) => {
        return (
          <FoodBox nameFoods={currentFood}/>
        )
      })}

      
    </div>

  );
}

export default App;
