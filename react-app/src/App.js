//if you go to settings, search for react and then add javascript javascriptreact in vsc it will enable you to use shortcuts on react
// https://www.youtube.com/watch?v=9EMUJm7qdxM 5mins 30 in ish

//app.js is a root component. It sits at the top of the compontent structure
import React, { Component } from 'react';
import Ninjas from './ninjas'
import AddNinja from './addNinja';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  /* we passed in the state from the addNinja file */
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja=(id)=>{
    console.log(id);
    let ninjas = this.state.ninjas.filter((ninja)=>{
      return ninja.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }
  // fires when the component first mounts the dom
  // this seems to basically be when the component was rendered e.g. when you load the page
  componentDidMount(){
    console.log('component did mount');
  }
  //fires when you have a change of state or props
  componentDidUpdate(prevProps, prevState){
    console.log('compontent updated');
    console.log(prevProps);
    //prevState and prevProps allow you to compare previous state to current state and update accordingly
    console.log(prevState);
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <h1>My first React app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
    
      </div>
      </BrowserRouter>
    );
  }
}

export default App;