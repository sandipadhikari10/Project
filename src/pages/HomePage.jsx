import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import backimg2 from "../assets/members/bg2.png";
import backimg1 from "../assets/members/bg1.png";
import hari from "../assets/gallery/hari.jpg";
import CalendarComponent from "./CalendarComponent";
import ExecutiveBoard from "./Dropdowns/ExecutiveBoard";
import FAQPage from "@/components/FAQ/FAQPage";
import { Clock } from "lucide-react";

const pastEvents = [
  {
    id: 1,
    date: "30 Mar 2024",
    time: "2:00 pm to 12:00 am",
    title: "NRN Citizenship Interaction",
    image: "src/assets/logo/logo.png",
    status: "Expired",
  },
  {
    id: 2,
    date: "16 Feb 2025",
    time: "All day",
    title: "NRN Citizenship Interaction",
    image: "src/assets/logo/logo.png",
    status: "UPCOMING",
  },
];

const HomePage = () => {
  const imageSlides = [backimg2, backimg1];

  return (
    <div>
      {/* Swiper Image Section */}
      <section>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }} // allow us to navigation button
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]} // include navigation module
          className="container mx-auto px-4"
        >
          {imageSlides.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="min-w-full h-125 object-cover rounded shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="flex flex-col lg:flex-row justify-center gap-10 absolute left-8 cursor-pointer lg:left-60 z-10 mb-20 top-160 ">
        <div className="flex flex-col items-center py-12 w-full lg:w-120 bg-white rounded shadow-md">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-fas-people-carry w-10 h-10 fill-[#0884DC]"
            viewBox="0 0 640 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path>
          </svg>
          <h3 className="font-extrabold text-xl text-[#0884DC]">4 +</h3>
          <p className="mt-2">Nepalese Resides in California</p>
        </div>

        {/* <div className="shadow-md flex flex-col items-center px-5 py-11 w-full lg:w-110 bg-[#fefffe] rounded"> */}
        <div className="flex flex-col items-center py-12 w-full px-3 lg:w-120 bg-white rounded shadow-md">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-fas-business-time w-10 h-10 fill-[#0884DC]"
            viewBox="0 0 640 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"></path>
          </svg>
          <h3 className="font-extrabold text-xl text-[#0884DC]">3 +</h3>
          <p className="mt-2 ">
            Businesses owned by Nepali Residents in California
          </p>
        </div>
      </div>

      <div className="lg:mt-80 mt-120">
        <h1 className="text-center font-[vollkorn] lg:text-[35px] text-[25px]   font-bold">
          President's Message
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
          <div className="flex justify-center flex-col items-center mb-8 md:mb-0">
            <img
              src={hari}
              className="h-[70vh] md:h-[90vh] object-cover md:ml-56 rounded shadow-md"
              alt="Hari Prasad Ojha"
            />
            <p className="font-bold text-center md:ml-45  mt-5">
              Hari Prasad Ojha (President)
            </p>
          </div>

          <div className="max-w-4xl lg:mx-auto px-6 py-12 md:leading-relaxed text-gray-800  lg:mr-45">
            <p>Dear Esteemed Members of the Nepali Diaspora in California,</p>
            <br />
            <p>
              I hope this message finds you in good health and spirits. I am
              honored to serve as your President for the California Chapter of
              the Non-Resident Nepali Association (NRNA).
            </p>
            <br />
            <p>
              California has become a vibrant home for many of us, a place where
              we've not only settled but have also built a community that
              mirrors the warmth and culture of Nepal. Our chapter is dedicated
              to fostering unity, preserving our rich heritage, and promoting
              the welfare of every Nepali here in California.
            </p>
            <br />
            <p>We are committed to:</p>
            <br />

            <p>
              - *<span className="font-bold">Cultural Preservation:*</span>
              Organizing events that celebrate our traditions, from festivals
              like Dashain and Tihar to cultural shows that keep our music,
              dance, and arts alive.
            </p>
            <br />

            <p>
              - *<span className="font-bold">Community Support:*</span>{" "}
              Providing assistance in various forms, whether it’s through
              educational scholarships, emergency aid during crises, or
              facilitating networking opportunities for professional growth.
            </p>
            <br />

            <p>
              - *<span className="font-bold">Engagement:*</span> Encouraging
              active participation in our community’s activities, ensuring that
              your voices are heard, and your ideas are part of our growth
              strategy.
            </p>
            <br />

            <p>
              - *<span className="font-bold">Advocacy:*</span> Working
              tirelessly to represent the interests of the Nepali diaspora, both
              locally in California and in matters concerning Nepal.
            </p>
            <br />

            <br />
            <p>
              We aim to strengthen our community bonds, support each other's
              endeavors, and contribute to the development of Nepal. Together,
              we can make a significant impact, nurturing a future where our
              children hold dear the values and culture of our homeland while
              thriving in this diverse state.
            </p>
            <br />
            <p>
              Let's join hands to create a more inclusive, supportive, and
              vibrant Nepali community in California. I am eager to hear your
              thoughts, engage with your ideas, and collaborate to make our
              community stronger.
            </p>
            <br />
            <p>
              Thank you for your trust and support. Here's to a journey of
              growth and unity!
            </p>
            <br />
            <p>Warm regards,</p>
            <p>Hari Ojha</p>
            <p>President, NRNA California Chapter</p>
          </div>
        </div>
      </div>

      <div className="mt-25 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left Section */}
        <div className="p-8 md:p-20">
          <h1 className="font-[vollkorn] lg:text-4xl text-3xl font-bold text-[#3a3b3b]">
            Events This Month
          </h1>
          <CalendarComponent />
        </div>

        {/* Right Section for Past Events */}
        <div className="max-w-xl mt-20  cursor-pointer">
          <h2 className="lg:text-4xl text-3xl font-bold font-[vollkorn] text-gray-700 mb-6">
            Past Events
          </h2>
          <div className="bg-white shadow-lg w-full md:w-120 p-6 flex flex-col md:flex-row items-center space-y-4 md:space-x-6 rounded-md">
            <div className="flex flex-col items-center lg:border-r-4 border-blue-500 pr-6">
              <span className="text-2xl font-bold text-gray-800">16</span>
              <span className="text-lg font-semibold text-gray-600">FEB</span>
              <span className="text-sm text-gray-500">2025</span>
            </div>
            <div className="flex-shrink-0">
              <img
                src={pastEvents[0].image}
                alt={pastEvents[0].title}
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center space-x-2 text-gray-600 justify-center md:justify-start">
                <Clock className="w-5 h-5" />
                <span>{pastEvents[0].time}</span>
              </div>
              <span className="inline-block bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                {pastEvents[0].status}
              </span>
              <h3 className="text-xl font-medium text-gray-500 mt-2">
                {pastEvents[0].title}
              </h3>
            </div>
          </div>
          <div className="mt-6 ">
            <button className="bg-[#0884DC] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              More Events
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <ExecutiveBoard showTimeline={false} />
        <div className="flex justify-end px-48">
          <Link
            to="/Executive-Board"
            className="flex justify-end bg-[#0884DC] hover:bg-[#0275BF] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          >
            View All Members
          </Link>
        </div>
      </div>

      <div>
        <FAQPage />
      </div>
    </div>
  );
};

export default HomePage;
