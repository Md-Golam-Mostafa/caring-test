import React, { useState } from 'react';
import axios from "axios";
const Home = () => {
    const [userName, setUserName] = useState("");
    const [meetingID, setMeetingID] = useState("");
    const [userPassword, setUserPassword] = useState("");
    console.log("this is username", userName.trim().length);
    console.log("this is username", meetingID);
    console.log("this is username", userPassword);



    const joinMeeting = () => {
        if (userName.trim().length > 0 && meetingID.trim().length > 0 && userPassword.trim().length > 0) {
            console.log(" All fields are Ok ");
            const data = {
                email: "gmshakilcse@gmail.com"
            };

            axios.post(`http://localhost:5000/meeting`, data)
                // axios.post(`https://calm-chamber-69476.herokuapp.com/meeting`, data)
                .then((response) => {
                    let URL =
                        response.data.join_url.replaceAll(
                            "https://us04web.zoom.us/j/",
                            "https://elegant-minsky-b3aba2.netlify.app/?"
                        ) + `?role=1?name=${userName}`;
                    console.log(URL);
                    const agreed = window.confirm('are you sure , you want to connect with zoomMeeting?');
                    if (agreed) {
                        window.location.replace(`${URL}`);
                    }

                })
                .catch((err) => console.error(err));

        }
        else {
            alert("Please fill-up the following fields.");
        }

    }
    return (
        <div>
            <h1>Home</h1>
            <h5>
                {/* Name&nbsp;&nbsp; */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    style={{
                        width: "300px",
                        borderRadius: "5px",
                        padding: "8px 12px",
                        fontSize: "18px",
                    }}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </h5>
            <h5>
                {/* Meeting number&nbsp;&nbsp; */}
                <input
                    type="number"
                    name="meetingId"
                    placeholder="Meeting Number"
                    style={{
                        width: "300px",
                        borderRadius: "5px",
                        padding: "8px 12px",
                        fontSize: "18px",
                    }}
                    value={meetingID}
                    onChange={(e) => setMeetingID(e.target.value)}
                />
            </h5>
            <h5>
                {/* User Password&nbsp;&nbsp; */}
                <input
                    type="text"
                    name="userPassword"
                    placeholder="Please enter your password"
                    style={{
                        width: "300px",
                        borderRadius: "5px",
                        padding: "8px 12px",
                        fontSize: "18px",
                    }}
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
            </h5>
            <button
                className="btn btn-success"
                style={{
                    width: "290px",
                    height: "40px",
                    fontSize: "20px",
                    fontFamily: "cursive",
                }}
                onClick={joinMeeting}
            >
                Join new Meeting
            </button>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Home;