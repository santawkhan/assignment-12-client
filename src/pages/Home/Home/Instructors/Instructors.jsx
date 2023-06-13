import { useQuery } from "@tanstack/react-query";
import PopularCards from "../PopularCards";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";


const Instructors = () => {
    const { user } = useContext(AuthContext)
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });
    const instructors = users.filter(item => item.role === 'instructor')
    return (
        <div className="py-28">

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Photo</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map((instructor, index) => <tr key={instructor._id}>
                                <th>{index + 1}</th>
                                <td>{instructor.name}</td>
                                <td>{instructor.email}</td>
                                <td><img src={instructor.photo} alt="" /></td>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;



