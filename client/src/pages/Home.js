import React from 'react';
import './Home.css'

export default function Home() {
    

    return (
            
        <div className="home-c">
            <div className ="sub">
            <form onSubmit>
                <input type='username' name='username' placeholder='email...' required onChange/>
                <input type='password' name='password' placeholder='password...' required onChange/>
                <button onSubmit>Log In</button>
            </form>
            </div>
        </div>
    )
    
}