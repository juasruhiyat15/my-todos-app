import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAccessToken, login, putAccessToken, register } from "../utils/network";
import '../App.css';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function onSubmitHandler(event) {
        event.preventDefault();
        const response = await register({username: username, password: password});
        console.log(response);
        if(response.error === true){
            navigate('/login');
        }else if(response.error === false){
            alert('Berhasil Register!')
            navigate('/login');
        }

    }

    return (
        <div className="container mt-5 ">
            <div className="lebar shadow-sm">
                <form className="border border-1 p-4 rounded" onSubmit={(event) => onSubmitHandler(event)}>
                    <h3>Sign Up</h3>
                    <p className="mt-4 mb-3">Sign up for free try! 👏 </p>
                    <div className="mb-3">
                        <label className="form-label text-start">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Username"
                            onChange={(e) => { setUsername(e.target.value) }}
                            value={username}
                            autoFocus
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                            required
                        />
                    </div>
                    <div className="fs-6 mb-3">
                        <label className="form-label">
                            Already have an account?
                            <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover text-primary ms-1" href="/login">Log In</a>
                        </label>
                    </div>
                    {username && password ? (<Button type="submit">Sign Up</Button>) : (<Button type="submit" variant='danger' disabled >Sign Up</Button>)}
                </form>
            </div>
        </div>
    )
}

export default Register;