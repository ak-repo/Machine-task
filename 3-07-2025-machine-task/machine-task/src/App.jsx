
import React, { Component} from 'react'



// Create a functional component called Welcome that returns a greeting message using JSX.


// Create a class component called Greet that returns a message like "Welcome to Class Component".


// Import and display both components inside App.js.




// functionl component greetings,
function Fun() {
 
  return (
    <h1> Welcome to Function based Components</h1>
   
    )
}


//Class component greetings

class Greet extends Component{
  render(){
    return <h3>Welcome All, This is Class based component !</h3>
  }
}

function App(){
  return(
   <div>
    <Fun />
    <Greet />
   </div>
  )
}


export default  App;