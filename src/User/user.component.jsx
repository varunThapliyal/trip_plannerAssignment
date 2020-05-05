import React from 'react';
import {connect} from 'react-redux';
import deleteUser from '../Redux/User/delete.actions';
import './user.style.css';

const UseUser= ({user,delete_user}) => (
<div className='mainDiv'>
    <div className='title'>Transfer Service</div>
    <div className='userDetails'>
        <div className='common_div'>
        <label className='cl'>First Name :</label>
         <span className='comright'>{user.first_name}</span>
         
         <label className='cl'>Last Name :</label>
         <span className='com'>{user.last_name}</span>

        </div>
        <div className='common_div'>
        <label className='cl'>Vehicle Type :</label>
         <span className='comright'>{user.vehicle_type}</span>
         
         <label className='cl'>Vehicle Count :</label>
         <span className='com'>{user.vehicle_count}</span>
                  

        </div>
        <div className='common_div'> 
        <label className='cl'>Pickup Location :</label>
         <span className='comright'>{user.pickup_location}</span>
         
         <label className='cl'>Drop Location :</label>
         <span className='com'>{user.drop_location}</span>
                  

        </div>
        <div className='common_div'>
        <label className='cl'>Passenger Count:</label>
         <span className='comright'>{user.passenger_count}</span>
         
         <label className='cl'>Baggage Count :</label>
         <span className='com'>{user.baggage_count}</span>
                  

        </div>

        <div className='common_div'>
        <label className='cl'>Travel Date :</label>
         <span className='comright'>{user.date}</span>
         
         <label className='cl'>Travel Time :</label>
         <span className='com'>{user.time}</span>
                  

        </div>
        
         
    </div>


    
<button className='btnDelete' onClick={()=>delete_user(user)}>Delete</button>

</div>

)

const mapDispatchToProps=dispatch=>({
    delete_user: user=>dispatch(deleteUser(user))
})

export default connect(null,mapDispatchToProps)(UseUser);