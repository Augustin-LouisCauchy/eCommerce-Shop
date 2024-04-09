import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)
  
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className="nav">
              <li className='bott'>About Us</li>
              <li className='bott'>Contacts</li>
              <li className='bott'>Account</li>
            </ul>
            <FaShoppingBag onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        </div>

        {cartOpen && (
          <div className="shop-cart">
            
          </div>
        )}
        <div className="presentation">

        </div>
    </header>
  )
}
