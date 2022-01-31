import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    console.log(user);
    const { avatar, full_name, city, country, user_id } = user;
    let navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/user/${user_id}`);
    }

    return (
        <div className="col-sm-6 col-xs-6 shadow col-md-3 mt-3">
            <div className="h-50 border rounded bg-light ">
                <img style={{ height: "150px" }} className=" img-fluid w-lg-50 w-md-50 w-100"
                    src={avatar} alt={''} />
                {/* src={"https://i.ibb.co/Ptf7W1j/image-not-found.png"} alt={''} /> */}
                {/* src={(avatar) ? avatar : "https://i.ibb.co/Ptf7W1j/image-not-found.png"} alt={''} /> */}
                <h6>Name: {full_name}</h6>
                <h6>City: {city}</h6>
                <h6>Country: {country}</h6>
                <div>
                    <Link to={`/user/${user_id}`} onClick={handleDetails} className="btn btn-warning"> Details <i className="fas fa-info-circle"></i></Link>
                </div>

            </div>
        </div>
    );
};

export default User;