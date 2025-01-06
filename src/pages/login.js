import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../services/api';

const Login = () => {
    const pageRedirect = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = e => {
      setEmail(e.target.value)
    }

    const changePassword = e => {
      setPassword(e.target.value)
    }

    const onLoginUser = async () => {
      const resp = await LoginUser(email, password);
      if(resp?.access_token){
        localStorage.setItem('token', resp?.access_token);
        pageRedirect('/profile')
      }
      console.log({resp})
    }
    
  return (
    <>
        <div className="login">
            <section className='loginleft flex-1'></section>
                <section className='loginRight flex-1'>
                    <div className="lignForm">
                        <h1>Login to your account</h1>
                        <p>See what is going on to your business</p>
                        <form action={onLoginUser}>
                            <div className='input'>
                                <input value={email} type="email" onChange={changeEmail} required/>
                                <label htmlFor="email">Email </label>
                            </div>
                            <div className='input'>
                                <input value={password} type="password" onChange={changePassword} />
                                <label htmlFor="password">Password </label>
                            </div>

                            <div className="forgot">
                                <span>
                                    <input type="checkbox" name="checkbox"/>
                                    <label htmlFor='checkbox'>Remember Me</label>
                                </span>
                                <span>
                                    <p>Forgot Password?</p>
                                </span>
                            </div>
                            <button type='submit' className='button'>Login</button>
                        </form>
                    </div>
                </section>
        </div>
    </>
  )
}

export default Login;