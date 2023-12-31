import useData from "../../hooks/useData";


const MyClasses = () => {
    const [Items, refetch] = useData();
    return (
        <div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class image</th>
                        <th>Class Name</th>
                        <th>Status</th>
                        <th>Total Enrolled Students</th>
                        <th>Feedback</th>
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
                            <td className="text-right">{item.status}</td>
                            <td>
                                {item.Enrolled}
                            </td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;