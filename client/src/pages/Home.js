import React, { useState } from 'react';
import './Home.css'
import LoginForm from './LoginForm';

export default function Home() {
    const adminUser = {
        email: "test@gmail.com",
        password: "test"
    }
    const [user,setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged in");
            setUser({
                name:details.name,
                email: details.email,
            });
        } else {
            console.log("Invalid Login");
            setError("Invalid Login");
        }
    }
    const Logout = () => {
        setUser({name: "", email: ""})
    } 
    return (
            
        <div className="home-c">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Login, <span>{user.name}</span></h2>
                    <button onClick ={Logout}>Logout</button>
                </div>
            )   : (
                <LoginForm Login={Login} error={error} />
            )}
            
        </div>
    )
    
}