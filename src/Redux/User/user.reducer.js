const INITIAL_STATE={
    Users:[]
}

const User_Reducer = (state=INITIAL_STATE,action)=>{

    switch(action.type){
         case('SAVE_USER'):
             return{
                 ...state,
                 Users:[...state.Users,action.payload]
             };

             case('DELETE_USER'):
             return{
                 ...state,
                 Users:state.Users.filter((user)=>(user.id!==action.payload.id))
             };


             default:return state;
         
         

    }



}
export default User_Reducer;