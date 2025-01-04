import { useState } from 'react';

const Register = ({ email, setEmail, password, setPassword, loginUser }) => {
    const URL = `http://localhost:8080/to-do-list/register`;
    const URLlogin = `http://localhost:8080/to-do-list/login`;

    const [username, setUsername] = useState('');
    const [uName, setUName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        
        const registerOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email, password: password, username: username, name: uName})
          }
        console.log({email: email, password: password, username: username, name: uName});
        
        fetch(URL, registerOptions)
        .then(res => res.json().then(async result => {
            
            if (result.message) {
                loginUser(URLlogin, email, password);
            } else {
                // logic here to show the user wrong credentials
            }}))
        .catch( cat => console.log(cat));
    }

    return (
        <main>
                <div className='form-content'>
                    <h2>Register</h2>
                    <form className="forms" onSubmit={handleRegister}>
                        <label htmlFor="username">
                                Username:
                        </label>
                        <input 
                            type="text"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input 
                            type="text"
                            placeholder="Name"
                            required
                            value={uName}
                            onChange={(e)=>setUName(e.target.value)}
                            />
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
                        <label htmlFor="password">
                            Confirm password:
                        </label>
                        <input 
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit"> Login </button>
                        <p>Already have an account? Sign up <a href="/">here</a></p>
                    </form>
                </div>
            </main>
  )
}

export default Register