import React, {useState} from 'react';

const AddUserForm = (props) => {
    
    const initUser = {id: null, name: '', username: ''}; 

    const [user, setUser] = useState(initUser);

    const handleChange = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(user.name && user.username){
            handleChange(e, props.addUser(user));
        }
    }
    return(
        <form>
            <label>Name:</label> 
            <input type="text" className="u-full-width" name="name" value={user.name} onChange={handleChange}/> <br />
            <label>Username:</label>
            <input type="text" className="u-full-width" name="username" value={user.username} onChange={handleChange}/> <br />
            <button type="submit" className="button-primary" onClick={handleSubmit}>Add user</button>
        </form>
    )
}

 export default AddUserForm;