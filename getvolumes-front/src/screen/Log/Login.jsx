import './Login.css'
import homestud from '../../assets/homestud.jpg'
import { useContext, useState } from 'react';
import axios from 'axios';
import { ContextUser } from '../../context/Context';


const Login = () => {

    // const { dispatch, access_token } = useContext(ContextUser);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   try {
    //     const body = { email: email, password: password };
    //     const response = await axios.post(
    //       "http://localhost:4000/auth/login",
    //       body
    //     );
    //     if (response.data.access_token) {
    //       dispatch({
    //         type: "LOGIN_SUCCESS",
    //         payload: response.data.access_token,
    //       });
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  
    // const logout = () => {
    //   localStorage.removeItem("access_token");
    //   dispatch({ type: "LOGOUT" });
    // };

    return (  
        <div className='main-login' style={{backgroundImage: `url(${homestud})`}}>
            <form className='form-log' onSubmit={(event) => (event)}>
            <h2>Login</h2>
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
                <input type="button" value="Logout" />
            </form>

        </div>
    );
}
 
export default Login;