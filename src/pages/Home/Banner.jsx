import banner from '../../assets/images/banner1.jpg'
import '../Css/Banner.css'


const Banner = () => {
    return (
        <div className="featured-item text-white  bg-fixed py-9">

            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-20    px-36">
                <div> <img className='rounded w-2/3' src={banner} alt="" /> </div>
                <div className="md:ml-10">

                    <p className="uppercase">LOVE PHOTOGRAPHY?</p>
                    <p> Digital Photography School has what you need to take your photography to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-6 uppercase">Start here</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;