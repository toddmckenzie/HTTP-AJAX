import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Friends from './components/Friends';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000')
      .then(res => {
        //console.log(res))
        this.setState({ friends: res.data})
      })
      .catch(err => console.log(err))
  }

  addFriend() {
    //axios
      //.Post()
      console.log('hi')
  }

  handleChange() {
    console.log('yo')
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={props =>  <Friends  {...props}
        friends={this.state.friends}
        handleChange={this.handleChange}
        addFriend={this.addFriend}/>} />
      </div>
    );
  }

}

export default App;
