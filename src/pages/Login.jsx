import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSignIn = () => {

    }
    return (
        <div>
            <div className="shrink-0 shadow-2xl pb-10">
                <h1 className='text-4xl text-center text-black mt-10'>Login Now</h1>


                <div className="card-body card bg-base-100 w-full max-w-sm m-auto my-10 ">
                    
                    <form onSubmit={handleSignIn}>
                        
                        <fieldset className="fieldset">
                        <label className="label">Email</label>

                        <input type="email" name='email' className="input" placeholder="Email" />
                        
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input 
                            type=''
                            className="input" 
                            name='password' 
                            placeholder="Password" 
                            />
                            <span className='absolute p-2 cursor-pointer right-5 z-50  text-xl top-1'>
                            
                            </span>
                        </div>
                        <div>
                            <label className="label block my-2">
                                <input type="checkbox" name='terms' defaultChecked 
                                className="checkbox" />
                                <span className='ml-2'>Accept Our Terms & condition</span>
                            </label>

                            <span  className="link link-hover">Forgot password?</span>
                        </div>
                            <input type='submit' className="btn btn-neutral mt-4" placeholder='red'
                            value='Login'
                            ></input>
                            
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