import React, { useRef, useState } from "react";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import slider4 from '../../assets/images/slider4.jpg'
import slider5 from '../../assets/images/slider5.jpg'
import slider6 from '../../assets/images/slider6.jpg'
const Slider = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="sliderbg">
                        <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center  py-20    px-36">
                            <div> <img className='rounded w-2/3' src={slider1} alt="" /> </div>
                            <div className="md:ml-10">

                                <p className="uppercase">LOVE PHOTOGRAPHY?</p>
                                <p> Digital Photography School has what you need to take your photography to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                                <button className="btn btn-outline border-0 border-b-4 mt-6 uppercase">Start here</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderbg">
                        <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center  py-20    px-36">
                            <div> <img className='rounded w-2/3' src={slider2} alt="" /> </div>
                            <div className="md:ml-10">

                                <p className="uppercase">LOVE PHOTOGRAPHY?</p>
                                <p> Digital Photography School has what you need to take your photography to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                                <button className="btn btn-outline border-0 border-b-4 mt-6 uppercase">Start here</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderbg">
                        <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center  py-20    px-36">
                            <div> <img className='rounded w-2/3' src={slider3} alt="" /> </div>
                            <div className="md:ml-10">

                                <p className="uppercase">LOVE PHOTOGRAPHY?</p>
                                <p> Digital Photography School has what you need to take your photography to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                                <button className="btn btn-outline border-0 border-b-4 mt-6 uppercase">Start here</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderbg">
                        <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center  py-20    px-36">
                            <div> <img className='rounded w-2/3' src={slider4} alt="" /> </div>
                            <div className="md:ml-10">

                                <p className="uppercase">LOVE PHOTOGRAPHY?</p>
                                <p> Digital Photography School has what you need to take your photography to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                                <button className="btn btn-outline border-0 border-b-4 mt-6 uppercase">Start here</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderbg">
                        <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center  py-20    px-36">
                            <div> <img className='rounded w-2/3' src={slider5} alt="" /> </div>
                            <div className="md:ml-10">

                                <p className="uppercase">LOVE PHOTOGRAPHY?</p>
                                <p> Digital Photography School has what you need to take your photography to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                                <button className="btn btn-outline border-0 border-b-4 mt-6 uppercase">Start here</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderbg">
                        <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center  py-20    px-36">
                            <div> <img className='rounded w-2/3' src={slider6} alt="" /> </div>
                            <div className="md:ml-10">

                                <p className="uppercase">LOVE PHOTOGRAPHY?</p>
                                <p> Digital Photography School has what you need to take your photography to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                                <button className="btn btn-outline border-0 border-b-4 mt-6 uppercase">Start here</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;