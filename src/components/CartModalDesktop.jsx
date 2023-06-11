import React from 'react'
import thumbnail from '../assets/image-product-1-thumbnail.jpg';
import trashcan from '../assets/icon-delete.svg';
import {useState} from 'react'

function CartModalDesktop({cartActive, setCartItems, cartItems, setCount, count, cost, setCost}) {
    const [checkout, setCheckout] = useState(false)
    const modal = cartActive ? "" : "hidden";

    const trashCanHandler = () => {
      setCartItems(0)
      setCount(0)
      setCheckout((prevState) => !prevState) 
    }

    const checkoutHandler = () => {
      setCheckout((prevState) => !prevState)  
    }
  
   
    const btnStyle = checkout ? 'bg-lgblue text-dgblue' : 'bg-orange text-white'



  return (
    <div id="modal-desktop" className={`modal-desktop ${modal} bg-white rounded-xl p-[1.5rem] h-[256px] z-10 desktop:w-[360px] left-[-1100%] top-[200%] absolute`}>
      <div className='border-b-2 border-lgblue'>
        <h3 className='font-bold text-[1rem] leading-[20px] mb-[1.5rem]'>Cart</h3>
      </div>

      {count < 1 ? (
        <div className='flex items-center justify-center w-[312px] mt-[4.8125rem] font-bold text-[1rem] text-dgblue'>
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className='mt-[1.5rem]'>
          <div className='flex gap-[1rem] items-center justify-center'>
            <img className="w-[50px] h-[50px] rounded" src={thumbnail} alt="Thumbnail" />
            <div>
              <div>
                <h4 className='text-dgblue'>Fall Limited Edition Sneakers</h4>
              </div>
              <div className='flex gap-[5px] text-dgblue'>
                <span>$125.00</span><span>x</span><span>{cartItems} =</span><span className='font-bold text-vdblue'>${cost}</span>
              </div>
            </div>
            <img onClick={trashCanHandler} className="w-[14px] h-[16px] cursor-pointer" src={trashcan} alt="Trashcan" />
          </div>

          <button onClick={checkoutHandler} className={`checkout w-[312px] h-[56px] rounded-xl  ${btnStyle} text-[1rem] font-bold leading-[20px] mt-[1.5rem]`}>Checkout</button>
          {
            checkout ? <p className='flash text-end text-[.8rem] text-orange mt-[4px]'>demo purposes only</p> : ''
          }
        </div>
      )}
    </div>
  )
}

export default CartModalDesktop