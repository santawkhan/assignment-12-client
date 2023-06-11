import { useQuery } from "@tanstack/react-query";
import ClassCard from "./Home/ClassCard";


const Classes = () => {
    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch('http://localhost:5000/courses');
        return res.json();
    });
    const approvedClasses = courses.filter(item => item.status === 'approved')
    return (
        <div>
            {
                approvedClasses.map(approvedClass => <ClassCard key={approvedClass._id} approvedClass={approvedClass} refetch={refetch} ></ClassCard>)}
        </div>
    );
};

export default Classes;