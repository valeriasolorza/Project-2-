import React from 'react';
import { useFormInput } from '../Helpers/helpers';
import { sendSignIn } from '../API/api';

const SignIn = () => {
    const username = useFormInput('');
    const password = useFormInput('');

    const handleSignIn = async e => {
        e.preventDefault();
        const data = await sendSignIn(username.value, password.value);
        alert(data.message);
        if(data.success) {
            window.location.href = '/';
        }
    };

    return (
        <div className="SignIn">
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
            <input
                type="text"
                placeholder="Username"
                value={username.value}
                onChange={username.onChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password.value}
                onChange={password.onChange}
            />
            <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
