import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Friends from './components/Friends';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res)
        this.setState({ friends: res.data})
      })
      .catch(err => console.log(err))
  }

  addFriend = event => {
    event.preventDefault();
    axios.post('http://localhost:5000', this.newFriend)
      .then(res => {
        //this.setState(friends: res.data)
        console.log(res)
      })
      .catch(err => {
        console.log('errr' + err)
      })
  }

  handleChange = event => {
    this.setState({ newFriend: {
      [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value
    } })
  }

  render() {
    console.log('hi')
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
