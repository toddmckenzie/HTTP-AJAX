import React from 'react';
//import { Route, Link } from 'react-router-dom';
import './friends.css'


class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
        friend: {
        id: '',
        name: '',
        age: '',
        email: ''
      }
    }
  }


autoUpdateFill = (friend) => {
  this.setState({
    friend: {
      id: friend.id,
      name: friend.name,
      age: friend.age,
      email: friend.email,
    }
  })
}

handleNameChange = event => {
  event.preventDefault();
  console.log(event.target.value)
  this.setState({
      friend: {
        id: this.state.friend.id,
        [event.target.name]: event.target.value,
        age: this.state.friend.age,
        email: this.state.friend.email
      }

  })
}


handleEmailChange = event => {
  event.preventDefault();
  this.setState({
    friend: {
      id: this.state.friend.id,
      name: this.state.friend.name,
      age: this.state.friend.age,
      [event.target.name]: event.target.value
    }
  })
}

handleAgeChange = event => {
  event.preventDefault();
  this.setState({
    friend: {
      id: this.state.friend.id,
      name: this.state.friend.name,
      [event.target.name]: event.target.value,
      email: this.state.friend.email
    }
  })
}


render() {
  console.log(this.state.friend)
  console.log(this.state.friend.name)
  console.log(this.state.friend.age)
  console.log(this.state.friend.email)
  console.log(this.state.friend.id)
  return (
    <div className='container'>
      <div className='friends'>
        <div className='flexes'>
          <p className='name1'>Name</p>
          <p className='age1'>Age</p>
          <p className='email1'>email</p>
        </div>
        {this.props.friends.map(friend =>
          <div className='flexes' key={friend.id}>
            <p className='name'>{friend.name}</p>
            <p className='age'>{friend.age}</p>
            <p className='email'>{friend.email}</p>
            <button className='update' onClick={() => this.autoUpdateFill(friend)}>Update Info</button>
            <button className='delete' onClick={() => this.props.deleteFriend(friend)}>Delete</button>
          </div>
        )}
      </div>

        <form onSubmit={this.props.addFriend}>
          <input type='text' placeholder='name' name='name' value={this.props.name} onChange={this.props.handleName}></input>
          <input type='text' placeholder='age' name='age' value={this.props.age} onChange={this.props.handleAge}></input>
          <input type='text'  placeholder='email' name='email' value={this.props.email} onChange={this.props.handleEmail}></input>
          <button onClick={this.props.addFriend} className='add'>Add Friend</button>
        </form>

        <form onSubmit={(event) =>  this.props.updateFriend(event,this.state.friend) }>
          <input type='text' name='name' value={this.state.friend.name} onChange={this.handleNameChange}></input>
          <input type='text' name='age' value={this.state.friend.age} onChange={this.handleAgeChange}></input>
          <input type='text' name='email' value={this.state.friend.email} onChange={this.handleEmailChange}></input>
          <button onClick={(event) =>  this.props.updateFriend(event,this.state.friend) } className='add'>Update Friend</button>
        </form>
    </div>
    )
  }

}
export default Friends;
