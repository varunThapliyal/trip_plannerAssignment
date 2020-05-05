const deleteUser=(user)=>(
    {
        type:'DELETE_USER',
        payload:user
    }
)

export default deleteUser;