import React, { useState } from 'react';
const Home = () => {

    const [meetingUrl, setMeetingUrl] = useState("");

    const joinMeeting = () => {
        if (meetingUrl.trim().length > 0) {
            window.location.replace(`${meetingUrl}`);
        }
    }
    return (
        <div className="my-5 text-center">
            <h1>Meeting add by meeting URL</h1>
            <h5>
                <input
                    type="text"
                    name="meetingId"
                    placeholder="Enter Meeting Url"
                    style={{
                        width: "300px",
                        borderRadius: "5px",
                        padding: "8px 12px",
                        fontSize: "18px",
                    }}
                    value={meetingUrl}
                    onChange={(e) => setMeetingUrl(e.target.value)}
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
        </div>
    );
};

export default Home;