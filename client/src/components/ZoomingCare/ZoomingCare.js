import React, { useState } from 'react';
import './ZoomingCare.css';
import axios from "axios";
const ZoomingCare = () => {

    const [userName, setUserName] = useState("");

    const joinMeeting = () => {
        if (userName.trim().length > 0) {
            console.log(" All fields are Ok ");
            const data = {
                email: "gmshakilcse@gmail.com"
            };

            // axios.post(`http://localhost:5000/meeting`, data)
            axios.post(`https://powerful-beyond-20129.herokuapp.com/meeting`, data)
                .then((response) => {
                    console.log('Then response is sent====', response);
                    let URL =
                        response.data.join_url.replaceAll(
                            "https://us04web.zoom.us/j/"
                            // ,"https://elegant-minsky-b3aba2.netlify.app/?"
                        ) + `?role=1?name=${userName}`;
                    console.log(URL);
                    const agreed = window.confirm(URL);
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
        <div className="App">
            <header className="App-header">
                {/* <Company /> */}
                <h1>Autowoven Zoom Meeting</h1>
                <div className="card">

                    <div className="row" style={{ margin: "10px" }}>
                        <div className="column">
                            <div
                                className="row"
                                style={{ margin: "10px", marginTop: "120px" }}
                            >
                                <h5>
                                    Host Name&nbsp;&nbsp;
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        style={{
                                            width: "100%",
                                            borderRadius: "5px",
                                            padding: "8px 12px",
                                            fontSize: "18px",
                                        }}
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </h5>

                                <button
                                    className="btn btn-info"
                                    style={{
                                        width: "270px",
                                        height: "60px",
                                        fontSize: "20px",
                                        fontFamily: "cursive",
                                    }}
                                    onClick={joinMeeting}
                                >
                                    Join new Meeting
                                </button>
                                <br />


                            </div>
                        </div>
                        <div className="column" style={{ float: "right" }}>
                            <img
                                src="\meeting.png"
                                height="330px"
                                width="400px"
                                style={{
                                    margin: "10px",
                                    borderRadius: "50px",
                                }}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ZoomingCare;