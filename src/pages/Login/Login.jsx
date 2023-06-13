import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgLogin from '../../assets/images/undraw_Login_re_4vu2.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            });
        navigate(from, { replace: true });
        form.reset();

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl text-center font-serif font-bold">Welcome Back!</h1>
                    <p className="py-6 w-3/4 "><img src={bgLogin} className='rounded-xl' alt="" /></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-center font-serif font-bold text-2xl'>Login</h3>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="  input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

                        <p className='font-semibold'>Dont have an account please <Link to={'/SignUp'}> <span className='text-blue-800'>SignUp</span> </Link ></p>
                        <h3 className='text-center font-bold text-xl'>Or</h3>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Login;