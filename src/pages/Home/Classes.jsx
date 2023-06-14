import { useQuery } from "@tanstack/react-query";
import ClassCard from "./Home/ClassCard";


const Classes = () => {
    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch('https://summer-camp-server-santawkhan.vercel.app/courses');
        return res.json();
    });
    const approvedClasses = courses.filter(item => item.status === 'approved')
    return (
        <div className="py-32 grid md:grid-cols-3">
            {
                approvedClasses.map(approvedClass => <ClassCard key={approvedClass._id} approvedClass={approvedClass} refetch={refetch} ></ClassCard>)}
        </div>
    );
};

export default Classes;