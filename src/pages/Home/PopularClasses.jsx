import { useEffect, useState } from "react";
import PopularCards from "./Home/PopularCards";
import { Bounce, Flip } from "react-awesome-reveal";


const PopularClasses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://summer-camp-server-santawkhan.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div><Bounce>  <h3 className="text-center mt-9 mb-5 uppercase text-2xl font-serif font-bold">Our popular classes</h3></Bounce>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {
                    courses.slice(0, 5).map(course => <PopularCards key={course._id} course={course}></PopularCards>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;