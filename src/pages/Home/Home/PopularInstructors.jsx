import { Hinge } from 'react-awesome-reveal'
import ins1 from '../../../assets/images/ins1.jpg'
import ins2 from '../../../assets/images/ins2.jpg'
import ins3 from '../../../assets/images/ins3.jpg'
import ins4 from '../../../assets/images/ins4.jpg'
import ins5 from '../../../assets/images/ins5.jpg'
import ins6 from '../../../assets/images/ins6.jpg'


const PopularInstructors = () => {
    return (
        <div>
            <h3 className="text-center mt-9 uppercase text-2xl  mb-9 font-serif font-bold">Our popular instructors</h3>
            <div className='grid md:grid-cols-3 gap-7'>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={ins1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Instructor name:Jack

                            </h2>
                            <p>Enrolled Students:9</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={ins2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Instructor name:Jack

                            </h2>
                            <p>Enrolled Students:9</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={ins3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Instructor name:Jack

                            </h2>
                            <p>Enrolled Students:8</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={ins4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Instructor name:Jack

                            </h2>
                            <p>Enrolled Students:5</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={ins5} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Instructor name:Jack

                            </h2>
                            <p>Enrolled Students:4</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={ins6} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Instructor name:Jack

                            </h2>
                            <p>Enrolled Students:4</p>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default PopularInstructors;