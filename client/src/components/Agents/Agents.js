import React, { useState, useEffect } from 'react';

const Agents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetch("https://calm-chamber-69476.herokuapp.com/api/getAgents")
            .then(res => res.json())
            .then(data => {
                setAgents(data)
            })
    }, [])
    return (
        <div className="my-5 mx-2">
            <h1 className="text-center">Total agents :{agents.length}</h1>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Name</th>
                    </tr>
                </thead>

                {
                    agents.map(agent =>
                        <>
                            <tbody>
                                <tr class="table-active">
                                    <th scope="row">{agent.id}</th>
                                    <td>{agent.fullname}</td>
                                    <td>{agent.email}</td>
                                    <td>{agent.username}</td>
                                </tr>
                            </tbody>
                        </>
                    )
                }
            </table>

        </div>
    );
};

export default Agents;