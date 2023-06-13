import { useEffect, useState } from "react";
import PopularCards from "./Home/PopularCards";


const PopularClasses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div> <h3 className="text-center mt-9 mb-5 uppercase text-2xl font-serif font-bold">Our popular classes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {
                    courses.slice(0, 5).map(course => <PopularCards key={course._id} course={course}></PopularCards>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;