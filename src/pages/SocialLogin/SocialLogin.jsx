import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://summer-camp-server-santawkhan.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {


                        navigate(from, { replace: true });

                    })


            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center">  <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline"><FcGoogle></FcGoogle></button> </div>
        </div>
    );
};

export default SocialLogin;