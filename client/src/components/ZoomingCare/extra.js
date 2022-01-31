import React, { useState } from 'react';
import './ZoomingCare.css';
import axios from "axios";
const ZoomingCare = () => {
    const [clientName, setClientName] = useState("");

    const zoomMeeting = () => {

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
                    ) + `?role=1?name=${clientName}`;
                console.log(URL);
                window.location.replace(`${URL}`);
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="App">
            <header className="App-header">
                {/* <Company /> */}
                <h1>Autowoven Zoom Meeting</h1>
                <div className="card">

                    <h5>
                        Host Name&nbsp;&nbsp;
                        <input
                            type="text"
                            name="name"
                            style={{
                                width: "300px",
                                borderRadius: "5px",
                                padding: "8px 12px",
                                fontSize: "18px",
                            }}
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                        />
                    </h5>



                    <div className="row" style={{ margin: "10px" }}>
                        <div className="column">
                            <div
                                className="row"
                                style={{ margin: "10px", marginTop: "120px" }}
                            >
                                <button
                                    className="btn btn-info"
                                    style={{
                                        width: "290px",
                                        height: "80px",
                                        fontSize: "20px",
                                        fontFamily: "cursive",
                                    }}
                                    onClick={zoomMeeting}
                                >
                                    New Meeting
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