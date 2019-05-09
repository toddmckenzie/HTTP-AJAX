import React from 'react';
//import { Route, Link } from 'react-router-dom';
import './friends.css'


class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      id: ''
    }
  }


autoUpdateFill = (friend) => {
  this.setState({
    name: friend.name,
    age: friend.age,
    email: friend.email,
    id: friend.id
  })
}

handleName = event => {
  console.log(event)
}


render() {
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
          <input type='text' placeholder='email' name='email' value={this.props.email} onChange={this.props.handleEmail}></input>
          <button onClick={this.props.addFriend} className='add'>Add Friend</button>
        </form>

        <form onSubmit={this.props.updateFriend}>
          <input type='text' placeholder='name' value={this.state.name} onChange={this.handleName}></input>
          <input type='text' placeholder='age'  value={this.state.age} onChange={this.handleName}></input>
          <input type='text' placeholder='email' value={this.state.email} onChange={this.handleName}></input>
          <button onClick={this.props.updateFriend} className='add'>Update Friend</button>
        </form>
    </div>
    )
  }

}
export default Friends;
