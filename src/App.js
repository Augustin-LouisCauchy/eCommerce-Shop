import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "сhair gray",
          img: "сhair-gray.jpeg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "table",
          img: "table-1.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "tables",
          price: "149",
        },
        {
          id: 3,
          title: "sofa",
          img: "sofa-1.avif",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "sofa",
          price: "299.99",
        },
        {
          id: 4,
          title: "lamp",
          img: "lamp-1.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "light",
          price: "15",
        },
        {
          id: 5,
          title: "сhair white",
          img: "chair-white.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "chairs",
          price: "51.99",
        },
      ]
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
  return (
    <div className="wrapper">
       <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
       <Categories chooseCategory={this.chooseCategory}/>
       <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
       <Footer/>
    </div>
  )
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items});
      return
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category)
    })
  }

  deleteOrder(id) {
   this.setState({orders: this.state.orders.filter((el) => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
    this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;
