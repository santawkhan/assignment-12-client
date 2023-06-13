import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const EnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const { data: Items = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['Items'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolled?email=${user?.email}`);
            return res.json();
        }
    })
    return (
        <table className="table w-[500px]">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>Class image</th>
                    <th>Class Name</th>
                    <th>Instructor Name</th>
                    <th>Instructor Email</th>

                </tr>
            </thead>
            <tbody>
                {
                    Items.map((course, index) => <tr key={course._id}>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            <div className="flex items-center space-x-3">

                                <div>
                                    {/* <div className="font-bold">{item?.ClassName}</div> */}
                                </div>
                            </div>
                        </td>
                        <td>
                            {course.ClassName}
                        </td>






                    </tr>)
                }

            </tbody>
        </table>

    );
};

export default EnrolledClasses;