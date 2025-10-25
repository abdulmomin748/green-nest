import { use } from "react";
import { AuthContext } from "../AppContext/AppContext";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const ResetPasswordPage = () => {
    const { passwordReset,setLoading,user } = use(AuthContext);
    const location = useLocation();
    const currentUser = user?.email;

    const handleResetPasword = e => {
        e.preventDefault();
        const email = e.target.email.value
        
        passwordReset(email)
        .then( ()=> {
            // console.log('password reset');
            toast.success(`Password reset email sent-${email}`)
            setLoading(false)

        })
        .catch( error => {
            // console.log(error.message);
            toast.error(`${error.message}`)
    })

     }
     
    return (
        <div className='max-w-100 m-auto py-50'>
            <h2 className='text-3xl mb-6'>Reset your password</h2>
             <form onSubmit={handleResetPasword}>
                <fieldset className="fieldset">
                    <label className="label text-xl">Email</label>

                    <input type="email" value={location?.state || currentUser} name='email' className="input text-xl py-7 w-full" placeholder="Write Your email here........" required/>

                </fieldset>
                <input type='submit' className="btn text-[15px] mt-3 w-full font-semibold btn-neutral" placeholder='red'
                value='Reset your email password'
                ></input>
            </form>
        </div>
    );
};

export default ResetPasswordPage;