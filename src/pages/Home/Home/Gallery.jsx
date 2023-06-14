import { Zoom } from 'react-awesome-reveal'
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
                <Zoom> <img src={img} alt="" /></Zoom>
                <Zoom> <img src={img1} alt="" /></Zoom>
                <Zoom> <img src={img2} alt="" /></Zoom>
                <Zoom> <img src={img3} alt="" /></Zoom>
                <Zoom> <img src={img4} alt="" /></Zoom>
                <Zoom> <img src={img7} alt="" /></Zoom>


            </div>
        </div>
    );
};

export default Gallery;