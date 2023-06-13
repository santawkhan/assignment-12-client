import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";






const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [confirmPassword, setConfirmPassword] = useState("");
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {
        if (data.password !== confirmPassword) {
            // alert("Passwords do not match!");
            return Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
            )
        }

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        const savedUser = { name: data.name, photo: data.PhotoURL, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    console.log('info updated')
                                    reset();
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
        console.log(data)
    };


    return (
        <div className="py-16 ">
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Please SignUp now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h3 className='text-center font-serif font-bold text-2xl mt-4'>Sign Up</h3>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600 font-semibold">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("PhotoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.PhotoURL && <span className="text-red-600 font-semibold">This field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600 font-semibold">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="confirm password"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="SignUp" />
                                </div>
                            </form>

                            <p>Already have an account ? <Link to={'/login'}>Login</Link ></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;