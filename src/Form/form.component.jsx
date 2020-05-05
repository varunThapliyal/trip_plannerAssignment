import React from 'react';
import Popup from "reactjs-popup";
import Form2 from'./form2.component'










class Form extends React.Component{
      

  
  
  

render(){

    return(
        <Popup trigger={<button className="button">Transfer Services </button>} modal>
        {close => (
          <div className="modal">
            <a className="close" href='# ' onClick={close}>
              &times;
            </a>
            <div className="header"> Create Transfer </div>
            <div className="content">
              {" "}
    
             <Form2 handleSubmit={close}/>
              
            </div>
           
          </div>
        )}
      </Popup>

    )
}

    
    

}

export default Form;

