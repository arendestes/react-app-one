import React, { Component } from 'react';
import Ninjas from "./Ninjas"
import AddNinja from "./AddNinja"

class App extends Component {
  state = {
    ninjas: [
      { name: "Christopher", age: 12, belt: "purple", id: 1 },
      { name: "Jonny", age: 10, belt: "red", id: 2 },
      { name: "Arya", age: 1.5, belt: "yellow", id: 3 },
      { name: "Lyanna", age: "2 month", belt: "white", id: 4 },
      { name: "Tiffany", age: 32, belt: "black", id: 5 },
      { name: "Arend", age: 34, belt: "black", id: 6 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja)=>{
      return ninja.id !== id;
    });
    this.setState({ninjas: ninjas})
  }

  componentDidMount(){
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevState);
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome all!</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
