import React from 'react';
//import { Route, Link } from 'react-router-dom';
import './friends.css'

const Friends = props => {
  return (
    <div>
      {props.friends.map(friend =>
        <div className='flexes' key={friend.id}>
          <p className='name'>{friend.name}</p>
          <p className='age'>{friend.age}</p>
          <p className='email'>{friend.email}</p>
        </div>
      )}

      <form onSubmit={props.addFriend}>
        <input type='text' placeholder='name' name='name' onChange={props.handleName}></input>
        <input type='text' placeholder='age' name='age' onChange={props.handleAge}></input>
        <input type='text' placeholder='email' name='email' onChange={props.handleEmail}></input>
        <button onClick={props.addFriend}>Add Friend</button>
      </form>
    </div>
  )
}

export default Friends;
