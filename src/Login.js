import { useState } from 'react';

const Login = ({ URL, email, setEmail, password, setPassword, loginUser}) => {
    const loginURL = `${URL}/login`;
    
    const handleLogin = (e) =>{
        e.preventDefault();
        loginUser(loginURL,email, password);
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