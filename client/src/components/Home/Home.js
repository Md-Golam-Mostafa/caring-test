import React, { useState } from 'react';
const Home = () => {
    const [meetingID, setMeetingID] = useState("");
    const [userPassword, setUserPassword] = useState("");

    console.log("this is username", meetingID.trim().length);
    console.log("this is username", userPassword);

    const joinMeeting = () => {
        if (meetingID.trim().length > 0 && userPassword.trim().length > 0) {
            console.log(" All fields are Ok ");
            const meetingUrl = `https://us05web.zoom.us/j/${meetingID}?pwd=${userPassword}?role=1?name='gm'`
            window.location.replace(`${meetingUrl}`);
        }
    }
    return (
        <div className="my-4 text-center">
            <h1>Home</h1>

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
                    placeholder=" password"
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
                Join  Meeting
            </button>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Home;