import React from 'react';
import './Home.css'

export default function Home() {
    

    return (
            
        <div className="home-c">
            <div className ="sub">

            <form onSubmit>
                <input type='username' name='username' placeholder='email...' required onChange/>
                <input type='password' name='password' placeholder='password...' required onChange/>
                <div className="profile">
                    <button onSubmit>Log In</button>
                </div>
                <p className="link">
                    <a href="#">Forgot password?</a> Or<a href="#">Sign Up</a>
                </p>
            </form>
            </div>
        </div>
    )
    
}