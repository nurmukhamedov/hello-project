import { useState } from "react";
import firebase from '../firebase';
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email && !password) {
            setError('Please fill all fields');
            return;
        }
        else {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (error) {
                if (error.code === 'auth/user-not-found') {
                    setError('User not found')
                } else if (error.code === 'auth/wrong-password') {
                    setError('Wrong password please try again')
                } else {
                    setError(error.message)
                }
            }
        }
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div>
            {error}
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password: <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button onClick={toggleShowPassword}>{showPassword ? 'Hide' : 'Show Password'}</button>

                <button type="submit">Login</button>
                <span>Register</span>
                <Link to='/register'>Register</Link>

            </form>
        </div>
    )
}

export default Login