import React from 'react';
import Header from './components/Header';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
      
  //   };
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
