import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import Contactpage from '../../Contact';

const images = [
    { url: "/man.jpg" },
];

const testimonials = [
    {
        text: "Working with this developer has been a game-changer for our business. Their expertise in both front-end and back-end development ensured a seamless and efficient project completion.",
        name: "Sara Wilsson",
        title: "Designer",
        image: images[0].url,
    },
    {
        text: "The professionalism and attention to detail displayed throughout the project were outstanding. Our website's performance and user experience have significantly improved.",
        name: "John Doe",
        title: "Project Manager",
        image: images[0].url,
    },
    {
        text: "Exceptional service and top-notch coding skills. Our mobile app turned out to be better than we envisioned, thanks to their innovative solutions.",
        name: "Emily Smith",
        title: "Product Owner",
        image: images[0].url,
    },
    {
        text: "Highly recommended! They understood our requirements perfectly and delivered a robust and secure application that has boosted our productivity.",
        name: "Michael Brown",
        title: "CEO",
        image: images[0].url,
    },
    {
        text: "A true professional who goes above and beyond to ensure the project's success. Their ability to handle complex requirements with ease is commendable.",
        name: "Laura Johnson",
        title: "CTO",
        image: images[0].url,
    },
];


const Testimonial = () => {
    const settings = {
        dots: true,
        dotsToshow: 3,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className='lg:w-[1199px] lg:ml-[320px] lg:p-10 scroll-auto w-full p-8 bg-[#060B27]  lg:mb-0 mb-5 '>
                <div>
                    <h1 className="text-white text-3xl font-bold py-3 lg:px-1 px-0">Testimonial</h1>
                    <div className="border-b-4 lg:border-blue-600 hidden w-[70px] m-1"></div>
                </div>
                <div>
                    <p className="text-base text-white">
                    Hear from some of our satisfied clients about their experiences working with us. Their words reflect our commitment to excellence, quality, and delivering impactful results.
                    </p>
                </div>
                <Slider {...settings} >
                    {testimonials.map((testimonial, index) => (
                        <div className="p-4 flex flex-col items-center" key={index}>
                            <p className="text-base border p-2 text-center box">{testimonial.text}</p>
                            <div className="flex  justify-center mt-4">
                                <Image
                                    className="rounded-full w-[90px] h-[90px]"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={90}
                                    height={90}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="font-bold text-white">{testimonial.name}</h3>
                                <h4 className="text-white">{testimonial.title}</h4>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
            <Contactpage />
        </>
    );
};

export default Testimonial;
