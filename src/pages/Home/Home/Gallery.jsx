import img from '../../../assets/images/g1.jpg'
import img1 from '../../../assets/images/g2.jpg'
import img2 from '../../../assets/images/g3.jpg'
import img3 from '../../../assets/images/g4.jpg'
import img4 from '../../../assets/images/g5.jpg'
import img7 from '../../../assets/images/g7.jpg'

const Gallery = () => {
    return (
        <div> <h3 className="text-center mt-9 uppercase text-2xl  mb-9 font-serif font-bold">Our Gallery</h3>
            <div className='grid md:grid-cols-3 gap-3'>
                <img src={img} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img7} alt="" />
            </div>
        </div>
    );
};

export default Gallery;