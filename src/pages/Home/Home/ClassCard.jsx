/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const ClassCard = ({ approvedClass, refetch }) => {
    const { user } = useContext(AuthContext)
    const { ClassName, seats, image, price, _id } = approvedClass;
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddClass = approvedClass => {
        console.log(approvedClass);
        if (user && user.email) {
            const cartItem = { ClassItemId: _id, ClassName, seats, image, price, email: user.email }
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name:{ClassName}</h2>
                    <p>Seats:{seats}</p>
                    <p>Instructor Name:{seats}</p>
                    <p>Price:${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddClass(approvedClass)} className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;