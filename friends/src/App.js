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
        name: '',
        age: '',
        email: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data)
        this.setState({ friends: res.data})
      })
      .catch(err => console.log(err))
  }


  addFriend = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        })
      .then(res => {
        console.log(res.data)
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log('errr' + err)
      })
  }

  handleName = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    }

  handleAge = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    }

  handleEmail = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    }

  deleteFriend = (friend) => {
    axios.delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="App">
        <Route path='/' render={props =>  <Friends  {...props}
        friends={this.state.friends}
        handleName={this.handleName}
        handleAge={this.handleAge}
        handleEmail={this.handleEmail}
        addFriend={this.addFriend}
        deleteFriend={this.deleteFriend}/>}
        />
      </div>
    );
  }

}

export default App;
