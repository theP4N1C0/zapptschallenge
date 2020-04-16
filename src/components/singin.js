import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Validator
import { validateEmail } from '../utils/validator';

//Imgs
import logoGoogle from '../assets/imgs/google.png';

//Validation msg
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const [hasEmpty, setHasEmpty] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasEmpty(false);

        if (!email || !password) {
            setHasEmpty(true);
            return;
        }

        setError({});
        if (!validateEmail(email)) {
            setError(...error, { email: 'Email address is invalid' });
            return;
        }

        window.alert('Logged!');
    };

    //View
    return (
        <section className="login">
            <h1 className="title">Welcome to Invision</h1>

            <form onSubmit={handleSubmit} noValidate>
                <div className={`input-group ${error.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">Users name or Email</label>
                    <input type="email" id="email" name="email" placeholder="youremail@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {hasEmpty && !email && <p className="help has-error">*This field can not be empty</p>}
                    {error.email && <p className="help has-error">{error.email}</p>}
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="email" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {hasEmpty && !password && <p className="help has-error">*This field can not be empty</p>}
                </div>

                <a href="/" className="forgot-link">
                    Forgot password?
                </a>

                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
            </form>

            <span className="separator">Or</span>

            <button type="button" className="btn btn-md btn-shadow">
                <img src={logoGoogle} alt="Google logo" width="30px" />
                Sign in with Google
            </button>

            <span className="create-link">
                New Invision? <Link to="register">Create account</Link>
            </span>
        </section>
    );
};

export default LoginForm;
