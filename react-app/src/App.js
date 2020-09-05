//if you go to settings, search for react and then add javascript javascriptreact in vsc it will enable you to use shortcuts on react
// https://www.youtube.com/watch?v=9EMUJm7qdxM 5mins 30 in ish

//app.js is a root component. It sits at the top of the compontent structure
import React, { Component } from 'react';
import Ninjas from './ninjas'
import AddNinja from './addNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;