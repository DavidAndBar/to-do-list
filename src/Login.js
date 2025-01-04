import { useState } from 'react';

const Login = ({ email, setEmail, password, setPassword, loginUser}) => {
    const URL = `http://localhost:8080/to-do-list/login`;
    
    const handleLogin = (e) =>{
        e.preventDefault();
        loginUser(URL,email, password);
    }

  
    return (
        <main>
            <div className='form-content'>
                <h2>Login</h2>
                <form className="forms" onSubmit={handleLogin}>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input 
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                    <button type="submit"> Login </button>
                    <p>Don't have an account? Sign up <a href="/register">here</a></p>
                </form>
            </div>
        </main>
    )
}

export default Login