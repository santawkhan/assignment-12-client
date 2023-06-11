import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useSelecetedClass = () => {
    const { user } = useContext(AuthContext);
    const { data: Items = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['Items'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mySelectedClass?email=${user?.email}`);
            return res.json();
        }
    })
    return [Items, loading, refetch]
};

export default useSelecetedClass;