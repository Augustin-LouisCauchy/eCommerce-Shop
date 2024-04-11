import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  /*{<-------------------Перебор всех товаров}*/
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price));
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="sum">Amount: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>There are no goods...</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li className="bott">About Us</li>
          <li className="bott">Contacts</li>
          <li className="bott">Account</li>
        </ul>
        <FaShoppingBag
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
      </div>

      {cartOpen && (
        <div className="shop-cart">
          {props.orders.length > 0 ? showOrders(props) : showNothing()}{" "}
          {/*<----------Если есть элементы в корзине showOrders отрабатывает*/}
        </div>
      )}
      <div className="presentation"></div>
    </header>
  );
}
