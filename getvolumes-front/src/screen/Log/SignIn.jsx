import './Login.css'
import homestud from '../../assets/homestud.jpg'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const body = { email: email, password: password };
          const response = await axios.post(
            "http://localhost:4000/auth/signin",
            body
          );
        } catch (error) {
          console.log(error);
        }
      };

    return (  
        <div className='main-login' style={{backgroundImage: `url(${homestud})`}}>
            <form className='form-log'>
                <h2>Register an account</h2>
                <label htmlFor="email">Email :</label>
                <input 
                type="email"
                name="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="password">Password :</label>
                <input 
                type='password' 
                onChange={(event) => setPassword(event.target.value)}
                />
                <input type='submit' value="SignIn" onClick={handleSubmit} style={{color: '#39414D'}}/>
            </form>

        </div>
    );
}
 
export default Login;