import React, { useState } from "react";
import './SignupPage.css';
import axios from "axios";
import { Link } from "react-router-dom";


 const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(' ');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password.length<8)
        {

            setError("Password must be 8 characters");
            return;
        }
        const tst=/^[A-Z]$/
        if (!tst.test(password.charAt(0))) {
            setError("First letter should be a capital character");
            return;
        }
        // if (password.charAt(0) === password.charAt(0).toUpperCase()) {
        //     setError("First Character should be capital");
        //     return;
            
        // }
        
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError('');
        try {

            const response = await axios.post("http://localhost:5000/get", {
                name,
                email,
                password
            });
            window.location.href="/Login";
            console.log(response.data);
        } catch (err) {
            setError("user already exists");
        }
    };

    return (
        <>
            <div className="Parent">
                <div className="Main-container">
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign Up</h2>
                            <div className="input-itm">
                                <label>Fullname</label>
                                <input type="text" placeholder="Enter your Fullname"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </div>
                            <div className="input-itm">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div className="input-itm">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>
                            <div className="input-itm">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm your Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required />
                            </div>
                            {error && <p className="error">{error}</p>}
                            <button type="submit" className="submit-btn">Signup</button>
                        </form>
                        <p className="toggle-text">Already have an account? <span><Link to='/Login'>Login</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;