import React from 'react';
import { useFormInput } from '../Helpers/helpers';
import { sendSignUp } from '../API/api';

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
        <div className="SignUp">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
            <input
                type="text"
                placeholder="Username"
                value={username.value}
                onChange={username.onChange}
            />
            <input
                type="text"
                placeholder="Email"
                value={email.value}
                onChange={email.onChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password.value}
                onChange={password.onChange}
            />
            <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;