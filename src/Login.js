import React, {useState, state} from 'react'
import './Login.css'
import {Link, useHistory } from "react-router-dom"
import { auth } from './firebase'

function Login() {
    const history = useHistory(); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const signin = e => {
        e.preventDefault(); 
        //some fancy firbase longin 
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault(); 
        //some fancy firebare register
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)

            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://cdn.worldvectorlogo.com/logos/amazon-icon.svg" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange= { e => setEmail(e.target.value)}/>

                    <h5>E-mail</h5>
                    <input type="password" value={password} onChange= { e => setPassword(e.target.value)} />
                    
                    <button type="submit" onClick={signin} className="loginSignin_button">Sign In</button>
                </form>
                <p>
                    By signing in your agree to the Amazon clone conditions of use sale, please see our pricvacy notice our kookie notice and our inter base ads notice
                </p>
                <button onClick={register} className="login_RegisterButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
