import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";


const ManageClasses = () => {

    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch('https://summer-camp-server-santawkhan.vercel.app/courses');
        return res.json();
    });

    const handleApprove = course => {
        fetch(`https://summer-camp-server-santawkhan.vercel.app/courses/approve/${course._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }

            })

    }
    const handleDeny = course => {
        fetch(`https://summer-camp-server-santawkhan.vercel.app/courses/deny/${course._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
        <div className="grid md:grid-cols-2 gap-3">
            {
                courses.map(course => <div key={course._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={course.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{course.ClassName}</h2>
                        <p>Instructor Name:{course.instructorName}</p>
                        <p>Email:{course.email}</p>
                        <p>Status:{course.status}</p>
                        <p>Seats:{course.seats}</p>
                        <p>Price:${course.price}</p>

                        <div className="card-actions justify-end">
                            <button onClick={() => handleApprove(course)} className="btn btn-outline">Approve</button>
                            <button onClick={() => handleDeny(course)} className="btn btn-outline">Deny</button>
                            <Link to={'/dash/feedback'}> <button className="btn btn-outline">Feedback</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageClasses;


