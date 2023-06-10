import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructors from "../../hooks/useInstructors";


const Dashboars = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructors();
    return (
        <div className="drawer lg:drawer-open py-20">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-slate-300 text-base-content">
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to={'/dash/manageClasses'}>Manage Classes</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dash/manageUsers'}>Manage Users</NavLink>
                            </li>
                        </>
                    )}
                    {isInstructor && (
                        <>
                            <li>
                                <NavLink to={'/dash/addClass'}>Add a Class</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dash/myClasses'}>My Classes</NavLink>
                            </li>
                        </>
                    )}
                    {!isAdmin && !isInstructor && (
                        <>

                            <li>
                                <NavLink to={'/dash/selectedClass'}>My Selected Classes</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dash/enrolled'}>My Enrolled Classes</NavLink>
                            </li>
                        </>
                    )}



                </ul>

            </div>
        </div>
    );
};

export default Dashboars;