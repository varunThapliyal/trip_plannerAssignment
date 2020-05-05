import React from 'react';
import {connect} from 'react-redux';
import uniqid from 'uniqid';
import Save_User from'../Redux/User/user.actions';





class Form2 extends React.Component{

    constructor(){
        super();
        this.state={
              id:uniqid(),
              first_name:'',
              last_name:'',
              vehicle_type:'',
              pickup_location:'',
              drop_location:'',
              date:'',
              time:'',
              baggage_count:0,
              passenger_count:0,
              vehicle_count:0,
              

        }
        
    }
    getValue = (e)=>{
        const{name,value}=e.target;
       this.setState({[name]:value});
       
  }
  passValue=(e)=>{
      e.preventDefault();
      this.props.save_user(this.state);
      this.props.handleSubmit();

  }
  incBaggageCount = ()=>{
      this.setState({baggage_count:this.state.baggage_count+1});
  }
  decBaggageCount = ()=>{
    if(this.state.baggage_count)
           {
           this.setState({baggage_count:this.state.baggage_count-1});
           }
}

incPassengerCount = ()=>{
    this.setState({passenger_count:this.state.passenger_count+1});
}
decPassengerCount = ()=>{
    if(this.state.passenger_count){
  this.setState({passenger_count:this.state.passenger_count-1});
    }
}

incVehicleCount = ()=>{
    this.setState({vehicle_count:this.state.vehicle_count+1});
}
decVehicleCount = ()=>{
    if(this.state.vehicle_count){
  this.setState({vehicle_count:this.state.vehicle_count-1});
    }
}
 



  render(){
       return(
        <form className='submission_form' name='details'onSubmit={this.passValue}>

            
    
        <div className='form-group'>
            <label htmlFor='fn'>First Name :</label>
            <input type='text'  name='first_name'  onChange={this.getValue} required id='fn'/>

            <label htmlFor='ln' className="com" >Last Name :</label>
            <input type='text'  name='last_name' onChange={this.getValue} required id='ln'/>


        </div>
    

      <div className='form-group'>

      <label htmlFor='vt'>Vehicle Type :</label>
      <select name="vehicle_type" id='vt' onChange={this.getValue}>

              <option value='' disabled selected hidden> Select Vehicle type</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              <option value="Luxury Coaches">Luxury Coaches</option>
              <option value="Van">Van</option>
              <option value="MiniBus">MiniBus</option>

      </select>
      
      <label htmlFor='count' className='com'>Vehicle Count :</label>
       <button className="btn-tiny" onClick={this.incVehicleCount}>
       <i className="fas fa-plus"></i>
         </button>
       <span className='count'>{this.state.vehicle_count}</span>
        <button className="btn-tiny" onClick={this.decVehicleCount}>
        <i className="fas fa-minus"></i>
        </button>
       
      </div>

      <div className="form-group">
         <label>Passenger Count :</label>
            <button className="btn-tiny" onClick={this.incPassengerCount}>
                <i className="fas fa-plus"></i>
             </button>
         <span className='count'>{this.state.passenger_count}</span>
            <button className="btn-tiny" onClick={this.decPassengerCount}>
                <i className="fas fa-minus"></i>
           </button>
       </div>


       <div className="form-group">
         <label>Baggage Count :</label>
           
       <button className="btn-tiny" onClick={this.incBaggageCount}>
       <i className="fas fa-plus"></i>
         </button>
       <span className='count'>{this.state.baggage_count}</span>
        <button className="btn-tiny" onClick={this.decBaggageCount}>
        <i className="fas fa-minus"></i>
        </button>
       </div>

          



      <div className='form-group'>

      <label htmlFor='date'>Date of Travel :</label>
      <input type='date' name='date' onChange={this.getValue} required id='dot'/>

      <label htmlFor='time' className='com'>Time of Travel :</label>
      <input type='time' name='time' onChange={this.getValue} required id='tot'/>
      </div>

    
      

      <div className='form-group'>

      <label htmlFor='pl'>Pickup_location :</label>
      <input type='text'  name='pickup_location' onChange={this.getValue} required id='pl'/>
      </div>

      

      <div className='form-group'>

      <label htmlFor='dl'>Drop_location :</label>
      <input type='text' name='drop_location' onChange={this.getValue} required id='dl'/>
      </div>

      
      <input type='submit' className='save_btn'  value='Save Transfer'/>
      
      </form>




       )


  }


}
const mapDispatchToProps=dispatch=>({
    save_user: user=>dispatch(Save_User(user))
})
 
export default connect(null,mapDispatchToProps)(Form2);