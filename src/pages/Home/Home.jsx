import Banner from "./Banner";
import Gallery from "./Home/Gallery";
import PopularInstructors from "./Home/PopularInstructors";
import PopularClasses from "./PopularClasses";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <Gallery></Gallery>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;