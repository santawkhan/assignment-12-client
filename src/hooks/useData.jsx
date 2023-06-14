import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useData = () => {
    const { user } = useContext(AuthContext);
    const { data: Items = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['Items'],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-santawkhan.vercel.app/Course?email=${user?.email}`);
            return res.json();
        }
    })
    return [Items, loading, refetch]
};

export default useData;