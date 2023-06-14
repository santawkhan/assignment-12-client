import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useSelecetedClass = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: Items = [], isLoading: loading } = useQuery({
        queryKey: ['Items'],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-santawkhan.vercel.app/mySelectedClass?email=${user?.email}`);
            return res.json();
        }
    })
    return [Items, loading, refetch]
};

export default useSelecetedClass;