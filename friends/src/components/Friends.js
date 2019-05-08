import React from 'react';
//import { Route, Link } from 'react-router-dom';


const Friends = props => {
  return (
    <div>
      <form onSubmit='props.addFriend'>
        <input value='name' onChange={props.handleChange}></input>
        <input value='age' onChange={props.handleChange}></input>
        <input value='email' onChange={props.handleChange}></input>
      </form>
    </div>
  )
}

export default Friends;
