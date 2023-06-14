import { Link } from "react-router-dom";
import useSelecetedClass from "../../hooks/useSelecetedClass";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";


const MySelectedClasses = () => {
    const [Items, refetch] = useSelecetedClass();
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-santawkhan.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class image</th>
                        <th>Class Name</th>
                        <th>Price</th>

                        <th>Delete Class</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Items.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        {/* <div className="font-bold">{item?.ClassName}</div> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.ClassName}
                            </td>
                            <td>${item.price}</td>

                            <td><button onClick={() => handleDelete(item)}><FaTrashAlt></FaTrashAlt></button></td>
                            <td><Link to="/dash/pay"><button className="btn btn-square btn-outline">Pay</button></Link></td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MySelectedClasses;