import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://calm-chamber-69476.herokuapp.com/api/getUsers")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div className="my-5">
            <h1 className="text-center">Total users: {users.length}</h1>
            <div className="container-fluid ">
                <div className="row ">
                    {users.map(user => (
                        <User
                            key={user.user_id}
                            user={user}
                        >
                        </User>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Users;