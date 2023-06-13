import banner from '../../assets/images/banner1.jpg'
import '../Css/Banner.css'


const Banner = () => {
    return (
        <div className="featured-item text-white  bg-fixed py-9">

            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-20    px-36">
                <div> <img className='rounded w-2/3' src={banner} alt="" /> </div>
                <div className="md:ml-10" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-center">

                    <p data-aos="flip-left" className="uppercase text-orange-400 font-serif font-bold text-xl ">Online Photography Classes</p>
                    <p>Find what fascinates you as you explore these Photography classes.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-6 uppercase">Start For here</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;


