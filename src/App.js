import React from 'react';
import Form from'./Form/form.component';
import {connect} from 'react-redux';
import './App.css';
import UseUser from './User/user.component'


function App({users}) {
  // console.log(users);
  
  return (
    <div className="App">
        <Form/>

        {
         
         users.map((user)=>(
         <UseUser key={user.id} user={user}/>
         ))
        }
    </div>
  );
}


const mapStateToProps=state=>({
  users:state.user.Users
})

export default connect(mapStateToProps)(App) ;
