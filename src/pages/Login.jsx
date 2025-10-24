import React, { use, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate  } from 'react-router-dom';
import { AuthContext, PlantsDataContext } from '../AppContext/AppContext';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState('');
    const plantsData = use(PlantsDataContext);
    const { signInEmailPassword,signInGoogle,passwordReset } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();
    console.log(location);
    
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInEmailPassword( email,password )
        .then(result => {
            console.log(result.user);
            setError('')
            navigate(location.state || '/');
            toast.success('Login successfully!')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
            
        })
    }
    const handleSignInGoogle = () => {
        signInGoogle()
        .then(result => {
            console.log(result.user);
            navigate(location.state || '/');
            toast.success('Login successfully!')
        })
        .catch(error => {
            console.log(error.message);
        })
     }
     const handlePasswordReset = () => {
        const email = emailRef.current.value
        
        passwordReset(email)
        .then( ()=> {
            console.log('password reset');
            toast.success(`Password reset email sent-${email}`)
        })
        .catch( error => {
            console.log(error.message);
            toast.error(`${error.message}`)

        })

     }
    return (
        <div>
            <div className=" pb-10">
                <h1 className='text-4xl text-center text-black mt-10'>Login Now</h1>


                <div className="card-body card bg-base-100 w-full max-w-sm m-auto my-10 ">
                    
                    <form onSubmit={handleSignIn}>
                        
                        <fieldset className="fieldset">
                        <label className="label">Email</label>

                        <input ref={emailRef} type="email" name='email' className="input" placeholder="Email" required/>
                        
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input 
                            type=''
                            className="input" 
                            name='password' 
                            placeholder="Password" 
                            required
                            />
                            <span className='absolute p-2 cursor-pointer right-5 z-50  text-xl top-1'>
                            
                            </span>
                        </div>
                        <div>
                            <span onClick={handlePasswordReset} className="link link-hover mt-2 inline-block">Forgot password?</span>
                            {
                                <p className="text-red-600 my-2">{error ? error : ''}</p>
                            }
                        </div>
                            <input type='submit' className="btn btn-neutral" placeholder='red'
                            value='Login'
                            ></input>
                            <span className='bg-black p-3 flex justify-center mt-2'>
                                <FcGoogle onClick={handleSignInGoogle} className='text-2xl mr-4 cursor-pointer' />
                            </span>
                            {/* <span className='bg-black p-3 flex justify-center mt-2'>
                                <FcGoogle onClick={handleSignGoogle} className='text-2xl mr-4 cursor-pointer' />
                                <FaGithub  className='text-2xl cursor-pointer'  />
                            </span> */}
                                <div className='z-100'>
                                Don't have an account? <Link to={'/register'} className='link link-hover underline'>Register </Link>
                            </div>
                            
                        </fieldset>
    
                    </form>
    
                </div>
            </div>
        </div>
    );
};

export default Login;