import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './Components/Card';
import NavBar from './Components/NavBar';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cardStuff: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState ({
        cardStuff: res.data
      })
      console.log('player data', res.data)
    })
    .catch(err => {
      console.log('what is you doin', err)
    })
  };


  render() {
  return (
    <div>
      <h1> look at them champs! </h1>  
      <Card cardData={this.state.cardStuff}/>
    </div>
  );
}
}
export default App;
