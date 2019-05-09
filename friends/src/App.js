import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Friends from './components/Friends';
import axios from 'axios';
import Update from './components/Update';


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
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }


  addFriend = event => {
    event.preventDefault();
    if (this.state.name.length > 0 && this.state.age.length > 0 && this.state.email.length > 0) {
      axios.post('http://localhost:5000/friends', {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
          })
        .then(res => {
          console.log(res.data)
          this.setState({ friends: res.data,
          name: '',
          age: '',
          email: '' })
        })
        .catch(err => {
          console.log('errr' + err)
        })
      }else {
        alert('Please fill in all fields.')
      }
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

  updateFriend = (friend) => {
    console.log(friend.id)
    axios.put(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="App">

        <Route exact path='/' render={props =>  <Friends  {...props}
        friends={this.state.friends}
        name={this.state.name}
        age={this.state.age}
        email={this.state.email}
        handleName={this.handleName}
        handleAge={this.handleAge}
        handleEmail={this.handleEmail}
        addFriend={this.addFriend}
        deleteFriend={this.deleteFriend}
        changeFriendName={this.changeFriendName}
        updateFriend={this.updateFriend}/>}
        />
      </div>
    );
  }

}

export default App;
