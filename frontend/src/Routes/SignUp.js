import React from 'react';
import { useFormInput } from '../Helpers/helpers';
import { sendSignUp } from '../API/api';
import { useHistory } from 'react-router-dom';
import './SignUp.css'; 

const SignUp = () => {
    const username = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');

    const handleSignUp = async e => {
        e.preventDefault();
        const data = await sendSignUp(username.value, email.value, password.value);
        alert(data.message);
        if(data.success) {
            window.location.href = '/';
        }
    };

    return (
        <div className="sign-up-container">
            <h1 className="sign-up-title">Sign Up</h1>
            <form className="sign-up-form" onSubmit={handleSignUp}>
                <input
                    className="sign-up-input"
                    type="text"
                    placeholder="Username"
                    value={username.value}
                    onChange={username.onChange}
                />
                <input
                    className="sign-up-input"
                    type="email"
                    placeholder="Email"
                    value={email.value}
                    onChange={email.onChange}
                />
                <input
                    className="sign-up-input"
                    type="password"
                    placeholder="Password"
                    value={password.value}
                    onChange={password.onChange}
                />
                <button className="sign-up-button" type="submit">Sign Up</button>
                <div className="small-buttons">
                    <a className="small-button" href="http://localhost:3001">Home</a>
                    <a className="small-button" href="http://localhost:3001/signin">Sign In</a>
                </div>
            </form>
        </div>
    );
};

export default SignUp;