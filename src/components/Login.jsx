import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import {setUser} from '../store/slices/usersSlice';
import './Login.css'

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(() => alert('Invalid user!'))
    }


    return (
        <div className="login-container">
        <div className="login-form">
            <h2 className="login-title">Sign in</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Sign in</button>
            <div className="checkbox-container">
                <label>
                    <input type="checkbox" />
                    Remember me
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" />
                    Login with Facebook
                </label>
            </div>
            <p className="new-to-netflix">
                New to Netflix? Sign up now
            </p>
            <p className="recaptcha-text">
                This page is protected by Google reCAPTCHA to ensure you’re not a bot. Learn more.
            </p>
            <div className="divider"></div>
            <div className="login-options">
                <span>Need help?</span>
                <span>© 2023 Netflix, Inc.</span>
            </div>
        </div>
        <Form
    title="Sign in"
    handleClick={handleLogin}
/>
    </div>
       
    )
}

export {Login}