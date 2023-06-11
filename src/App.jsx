import Carosel from "./components/Carosel";
import Nav from "./components/Nav";
import ProductDescription from "./components/ProductDescription";
import { useState } from "react";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [count, setCount] = useState(0);
  const [cost, setCost] = useState(0)
  console.log(cost)
  

  return (
    <>
      <Nav
        setCartActive={setCartActive}
        cartActive={cartActive}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setMenuState={setMenuState}
        menuState={menuState}
        setCount={setCount}
        count={count}
        setCost={setCost}
        cost={cost}
      />
      <main className="desktop:flex desktop:w-[1015px] mx-auto desktop:gap-[7.8125em] desktop:mt-[5.625rem]">
        <Carosel
          cartActive={cartActive}
          cartItems={cartItems}
          setCartItems={setCartItems}
          setCartActive={setCartActive}
          setCount={setCount}
          count={count}
          setCost={setCost}
          cost={cost}
        />
        <ProductDescription setCount={setCount} count={count} setCost={setCost} cost={cost} setCartItems={setCartItems}/>
      </main>
    </>
  );
}

export default App;
