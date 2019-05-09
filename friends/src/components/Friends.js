import React from 'react';
//import { Route, Link } from 'react-router-dom';
import './friends.css'

const Friends = props => {
  return (
    <div className='container'>
    <div className='friends'>
      <div className='flexes'>
        <p className='name1'>Name</p>
        <p className='age1'>Age</p>
        <p className='email1'>email</p>
      </div>
      {props.friends.map(friend =>
        <div className='flexes' key={friend.id}>
          <input className='name' placeholder={friend.name}onClick={() => props.changeFriendName(friend)}></input>
          <input className='age' placeholder={friend.age}></input>
          <input className='email' placeholder={friend.email}></input>
          <button className='delete' onClick={() => props.deleteFriend(friend)}>Delete</button>
        </div>
      )}
    </div>

      <form onSubmit={props.addFriend}>
        <input type='text' placeholder='name' name='name' value={props.name} onChange={props.handleName}></input>
        <input type='text' placeholder='age' name='age' value={props.age} onChange={props.handleAge}></input>
        <input type='text' placeholder='email' name='email' value={props.email} onChange={props.handleEmail}></input>
        <button onClick={props.addFriend} className='add'>Add Friend</button>
      </form>
    </div>
  )
}

export default Friends;
