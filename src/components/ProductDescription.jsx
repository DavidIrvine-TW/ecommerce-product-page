import React from 'react'
import AddtoCart from './AddtoCart'

function ProductDescription({setCount, count, setCost, cost, setCartItems}) {
  return (
    <article className='max-w-[500px] p-[1.5em] mx-auto desktop:p-[0] desktop:w-[445px] desktop:mt-[4.375rem]'>
        <div>
            <h2 className='uppercase text-orange text-[0.75rem] desktop:text-[0.8125rem] font-bold tracking-[1.8px] leading-[15px] mb-[1rem]'>sneaker company</h2>
            <h1 className='text-vdblue text-[1.75rem] font-bold leading-[32px] mb-[1rem] desktop:mb-[2rem] desktop:text-h1-desktop desktop:h-[96px] desktop:leading-h1-desktop'>Fall Limited Edition Sneakers</h1>
            <p className='text-[0.9375rem] leading-[25px] text-dgblue mb-[1.5rem] desktop:text-[1rem] text-justify'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className='flex justify-between items-center mb-[1.5rem] desktop:mb-[2rem] desktop:flex-col desktop:items-start'>
                    <div className='flex gap-[1.5rem] font-bold items-center'>
                        <p className='text-[1.75rem] font-bold tracking-[-1.5px] text-vdblue'>$125.00</p> 
                        <div className='bg-lightorange text-orange rounded w-[50px] h-[27px] flex text-center justify-center'>
                            <p>50%</p>
                        </div>
                    </div>
                    <p className='font-bold text-[1rem] text-gblue line-through'>$250.00</p> 
                </div>
                <AddtoCart setCount={setCount} count={count} cost={cost} setCost={setCost} setCartItems={setCartItems}/>
        </div>
  </article>
  )
}

export default ProductDescription