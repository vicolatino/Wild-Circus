import React from 'react';
import './App.css';
import Home from './component/Home'
import Navbar from './component/Navbar'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events:[],
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:8000/events')
      .then(response => response.data)
      .then(data => {
        this.setState({
          events: data
        })
      })
  }    
  render(){
    return(
      <div className="App">
      <Navbar />
      <Home />
      </div>
    )
  };
}

export default App;
