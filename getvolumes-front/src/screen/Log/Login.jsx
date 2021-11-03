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
          "http://localhost:4000/auth/login",
          body
        );
      } catch (error) {
        console.log(error);
      }
    };
    return (  
        <div className='main-login' style={{backgroundImage: `url(${homestud})`}}>
            <form className='form-log' onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor='email'>Login :</label>
                <input 
                type="email"
                name="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor='loginPassword'>Password :</label>
                <input 
                name="loginPassword"
                id="loginPassword"
                onChange={(event) => setPassword(event.target.value)}
                />
                <input type='submit' value="Login"/>
            </form>

        </div>
    );
}
 
export default Login;