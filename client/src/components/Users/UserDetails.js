import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { user_id } = useParams();
    const [user, setUser] = useState({});
    const { address, city, country, email, phone, membership_level, user_name, full_name } = user;
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data[0])
            });
    }, [user_id]);

    return (
        <div className="text-center">
            <h6>ID: {user_id}</h6>
            <h6>Name: {full_name}</h6>
            <h6>User Name: {user_name}</h6>
            <h6>Email : {email}</h6>
            <h6>Phone : {phone}</h6>
            <h6>City : {city}</h6>
            <h6>Country : {country}</h6>
            <h6>Address : {address}</h6>
            <h6>membership_level : {membership_level}</h6>
        </div>
    );
};

export default UserDetails;