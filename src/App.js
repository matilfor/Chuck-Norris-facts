import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: 'Chuck Norris can text using his walkie talkie and without batteries.'
    };
    
    this.getFact = this.getFact.bind(this);
  }
  
  getFact() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
      this.setState({fact: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return(
      <div className="container text-center">
        <h1 className="facts">Chuck Norris Facts</h1>
        <h3>{'"' + this.state.fact + '"'}</h3>
        <Button variant="dark" onClick={this.getFact}>More Chuck Facts!</Button>
      </div>
    );
  }
}

export default App;