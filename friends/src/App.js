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
      }
  )
      .then(res => {
        console.log(res)
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
    console.log(this.state.name)
    }

  handleAge = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    console.log(this.state.age)
    }

  handleEmail = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    console.log(this.state.email)
    }
  deleteFriend = (deletedFriend) => {
    const newList = this.state.friends.filter(friend => friend !== deletedFriend);

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
