// src/components/Login.js

import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Implement your login logic here
        console.log('Email:', email);
        console.log('Password:', password);

        // Reset the form fields after submission (optional)
        setEmail('');
        setPassword('');
    };

    return (
        <div class="wrapper">
            <h1>Hello Again!</h1>
            <p>Welcome back you've <br /> been missed!</p>
            <form>
                <input type="text" placeholder="Enter username" />
                <input type="password" placeholder="Password" />
                <p class="recover">
                    <a href="#">Recover Password</a>
                </p>
            </form>
            <button>Sign in</button>
            <p class="or">
                ----- or continue with -----
            </p>
            <div class="icons">
                <i class="fab fa-google"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-facebook"></i>
            </div>
            <div class="not-member">
                Not a member? <a href="#">Register Now</a>
            </div>
        </div>
    );
};

export default Login;
