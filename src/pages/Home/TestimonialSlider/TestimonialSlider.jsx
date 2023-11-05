// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//React Rating
import Rating from "react-rating";
import ReactStarsRating from 'react-awesome-stars-rating';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TestimonialSlider = () => {
  const testimonialData = [
    {
      id: "aB1&cD2eF3gH4iJ5kL6@",
      clientName: "John Doe",
      jobTitle: "Freelancer",
      testimonial:
        "This platform has transformed my freelancing career. I've found great projects, and the support is top-notch. Highly recommended!",
      image: "https://i.ibb.co/GpN8WQ6/client-4.jpg",
      rating: 5,
    },
    {
      id: "xY2#z3A4bC5dE6fG7!",
      clientName: "Jane Smith",
      jobTitle: "Employer",
      testimonial:
        "Finding skilled professionals for my projects has never been easier. This platform simplifies the hiring process, and the results speak for themselves.",
      image: "https://i.ibb.co/xLfbgPM/client-3.jpg",
      rating: 4,
    },
    {
      id: "H4iJ5kL6mN7oP8qR9*",
      clientName: "David Johnson",
      jobTitle: "Startup Founder",
      testimonial:
        "I owe much of my startup's success to this platform. The experts I've connected with have been instrumental in our growth. Great experience!",
      image: "https://i.ibb.co/17bhsfV/client-1.jpg",
      rating: 4.5,
    },
    {
      id: "pQ1&R2sT3uV4wX5yZ6*",
      clientName: "Emily Brown",
      jobTitle: "Graphic Designer",
      testimonial:
        "As a graphic designer, this platform has provided me with exciting design projects and a supportive community. It's a great place to showcase your creative skills.",
      image: "https://i.ibb.co/b5dNshM/client-5.jpg",
      rating: 4.8,
    },
  ];

  return (
    <div className="mb-32">
      <h3 className="font-bold text-3xl text-center mb-3">Testimonials</h3>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonialData?.map((client) => (
          <SwiperSlide>
            <div className="flex justify-center items-center mb-10">
              <div className="flex flex-col justify-center items-center">
              <img
                    className="w-20 h-20 rounded-full bottom-[-40px] relative border-solid border-2 border-gray-400"
                    src={client.image}
                    alt={client.clientName}
                  />
                <div className="text-center shadow-lg max-w-[500px] border-[1px] border-solid border-gray-200 p-5 pt-10 rounded-lg space-y-3">
                  <p className="font-bold text-2xl text-[#2a40e8bd]">{client.clientName}</p>
                  <p className="font-semibold">{client.jobTitle}</p>
                  <div className="flex justify-center"><ReactStarsRating className="flex" value={client.rating}></ReactStarsRating></div>
                  <p className="text-gray-400">{client.testimonial}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
