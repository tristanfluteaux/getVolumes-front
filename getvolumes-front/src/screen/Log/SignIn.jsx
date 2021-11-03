import './Login.css'
import homestud from '../../assets/homestud.jpg'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {



    return (  
        <div className='main-login' style={{backgroundImage: `url(${homestud})`}}>
            <form className='form-log'>
                <label>Login :</label>
                <input 
                type='email'
                name="email"
                id="email"
                onChange={(event) => (event.target.value)}
                />
                <label>email :</label>
                <input />
                <label>Password :</label>
                <input type='password' />
                <input type='submit'/>
            </form>

        </div>
    );
}
 
export default Login;