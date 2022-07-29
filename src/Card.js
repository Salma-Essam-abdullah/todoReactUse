import React from 'react';
function Card(props) {
    // console.log(props)
    return (
      <>
      <h2>Title: {props.title}</h2> 
      <h2>Completed: {props.completed}</h2> 
      <h2>Date:{props.date}</h2>
      <h2>User Id:{props.user_id}</h2>
      <hr/>
      </>
   );
 }
 
 export default Card;