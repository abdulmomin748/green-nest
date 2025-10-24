
import { FaRegEye  } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { use, useState } from "react";
import { AuthContext } from "../AppContext/AppContext";
const Register = () => {

    const { crateUserEP,signInGoogle } = use(AuthContext);
    const [error,setError] = useState('');
    const [pError,setPError] = useState('');
    const location  = useLocation();
    const navigate = useNavigate();
    
     const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value;
        

        if(!/(?=.{6,})/.test(password)){
            return setPError('Password Should be at least 6 charecter or long');
        }else{
            setPError('');
        }
        if(!/(?=.*[a-z])/.test(password)){
            return setPError('Password should be contain at least 1 lowercase alphabetical character');
        }else{
            setPError('');
        }
        if(!(/(?=.*[A-Z])/.test(password))){
            return setPError('Password should be contain at least 1 uppercase alphabetical character');
        }else{
            setPError('');
        }if(!(/(?=.*[0-9])/.test(password))){
            return setPError('Password should be contain at least 1 numeric character');
        }else{
            setPError('');
        }

        crateUserEP(email,password)
        .then((result) => {
            const user = result.user;
            setError('')
            setPError('')
            console.log(user);
            navigate(location.state || '/')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            
        });


     }  
     
     const handleSignInGoogle = () => {
        signInGoogle()
        .then(result => {
            console.log(result.user);
            navigate(location.state || '/')
        })
        .catch(error => {
            console.log(error.message);
        })
     }

    return (
        <div>
            <div className="pb-10">
                <h1 className='text-4xl text-center text-black mt-10'>Register Now</h1>
                <div className="card-body card bg-base-100 w-full max-w-sm m-auto my-10 ">
                    <form onSubmit={handleRegister}>
                        
                      <fieldset className="fieldset">

                       
                        <label className="label">Name </label>
                        <input type="text" name='name' className="input" placeholder="Your Name" required/>

                        <label className="label">Photo Url</label>
                        <input type="url" name='photoUrl' className="input" placeholder="Photo Url" required/>


                        <label className="label">Email</label>

                        <input type="email" name='email' className="input" placeholder="Email" required/>
                        
                        <label className="label">Password</label>
                        
                        <div className='relative'>
                            <input 
                           
                            className="input" 
                            name='password' 
                            placeholder="Password" 
                            required/>
                            {
                               <p className="text-red-600 mt-2">{pError ? pError : ''}</p>
                            }
                        </div>
                        <div>
                            <label className="label block my-2">
                                <input type="checkbox" name='terms' defaultChecked 
                                className="checkbox" />
                                <span className='ml-2'>Accept Our Terms & condition</span>
                                {
                                    <p className="text-red-600 mt-2">{error ? error : ''}</p>
                                }
                            </label>
                        </div>
                            <input type='submit' className="btn btn-neutral mt-2" placeholder='red'
                            value='Register'
                            ></input>
                            
                            <span className='bg-black p-3 flex justify-center mt-2'>
                                <FcGoogle onClick={handleSignInGoogle} className='text-2xl mr-4 cursor-pointer' />
                            </span>
                             <div className='z-100'>
                                Already have an account? <Link to={'/login'} className='link link-hover underline'> Login </Link>
                            </div>
                            
                        </fieldset>
  
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;