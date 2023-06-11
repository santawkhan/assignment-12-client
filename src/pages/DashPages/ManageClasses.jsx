import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch('http://localhost:5000/courses');
        return res.json();
    });

    const handleApprove = course => {
        fetch(`http://localhost:5000/courses/approve/${course._id}`, {
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
        fetch(`http://localhost:5000/courses/deny/${course._id}`, {
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
        <div>
            <table className="table w-[500px]">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Total Enrolled Students</th>
                        <th>Approve</th>
                        <th>Deny</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course, index) => <tr key={course._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        {/* <div className="font-bold">{item?.ClassName}</div> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                {course.ClassName}
                            </td>
                            <td>{course.instructorName}</td>
                            <td>{course.email}</td>
                            <td>{course.seats}</td>
                            <td>{course.price}</td>
                            <td>{course.status}</td>
                            <td>
                                {course.Enrolled}
                            </td>
                            <td><button onClick={() => handleApprove(course)}>Approve</button></td>
                            <td><button onClick={() => handleDeny(course)}>Deny</button></td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;