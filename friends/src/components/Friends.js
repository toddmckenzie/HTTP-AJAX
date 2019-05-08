import React from 'react';
//import { Route, Link } from 'react-router-dom';


const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => {
         <p>{friend}</p>
      })}
      <form onSubmit={props.addFriend}>
        <input type='text' placeholder='name' name='name' onChange={props.handleChange}></input>
        <input type='text' placeholder='age' name='age' onChange={props.handleChange}></input>
        <input type='text' placeholder='email' name='email' onChange={props.handleChange}></input>
      </form>
    </div>
  )
}

export default Friends;
