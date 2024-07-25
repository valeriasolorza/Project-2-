import React from 'react';
import { useFormInput } from '../Helpers/helpers';
import { sendSignIn } from '../API/api';
import './SignIn.css';

const SignIn = () => {
    const username = useFormInput('');
    const password = useFormInput('');

    const handleSignIn = async e => {
        e.preventDefault();
        const data = await sendSignIn(username.value, password.value);
        alert(data.message);
        if (data.success) {
            window.location.href = '/';
        }
    };

    return (
        <div className="sign-in-container">
            <h1 className="sign-in-title">Sign In</h1>
            <form className="sign-in-form" onSubmit={handleSignIn}>
                <input
                    className="sign-in-input"
                    type="text"
                    placeholder="Username"
                    value={username.value}
                    onChange={username.onChange}
                />
                <input
                    className="sign-in-input"
                    type="password"
                    placeholder="Password"
                    value={password.value}
                    onChange={password.onChange}
                />
                <button className="sign-in-button" type="submit">Sign In</button>
                <div className="small-buttons">
                    <a className="small-button" href="http://localhost:3001">Home</a>
                    <a className="small-button" href="http://localhost:3001/signup">Sign Up</a>
                </div>
            </form>
        </div>
    );
};

export default SignIn;