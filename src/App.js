import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
          category: "sofas",
          price: "299.99",
        },
        {
          id: 4,
          title: "lamp",
          img: "lamp-1.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "lamps",
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
  }
  render() {
  return (
    <div className="wrapper">
       <Header/>
       <Items items={this.state.items}/>
       <Footer/>
    </div>
  )
  }
}

export default App;
