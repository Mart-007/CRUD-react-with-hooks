import React from 'react';
import  '../tables/UserTable.css';
const UserTable = (props) =>{
    console.log(props);
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, username} = user;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button className="delete">Delete</button>
                                    
                                </td>
                                <td>
                                    <button className="edit">Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}> No users found</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
}
export default UserTable;