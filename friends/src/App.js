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
        console.log(res)
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
//  handleChange = event => {
    //this.setState({ newFriend: {
    //  [event.target.name]: event.target.value,
      //  [event.target.name]: event.target.value,
      //  [event.target.name]: event.target.value
    //} })
  //  console.log(this.state.newFriend)
  //}
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

  render() {
    return (
      <div className="App">
        <Route path='/' render={props =>  <Friends  {...props}
        friends={this.state.friends}
        handleName={this.handleName}
        handleAge={this.handleAge}
        handleEmail={this.handleEmail}
        addFriend={this.addFriend}/>} />
      </div>
    );
  }

}

export default App;
