import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
       <ul>
         <li><Link to="/test2">test2</Link></li>
         <li><Link to="/test1">test1</Link></li>
       </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
