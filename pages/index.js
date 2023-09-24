import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Typed from 'typed.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  const TypedText = () => {
    useEffect(() => {
      const options = {
        strings: ['a new concept of <span className="text-[#F8F9FA]">prestige</span>', 'a new concept of <span className="text-[#F8F9FA]">elegance</span>', 'a new concept of <span className="text-[#F8F9FA]">quality</span>'],
        typeSpeed: 60,
        backSpeed: 50,
        loop: false,
      };

      const typed = new Typed('.typed-element', options);

      return () => {
        typed.destroy();
      };
    }, []);

    return (
      <div className="text-white font-italiana text-3xl md:text-5xl lg:text-7xl text-center mt-10">
        <span className="typed-element"></span>
      </div>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true
  };

  return (
    <>
      <Head>
        <title>Cardon | redefining excellence</title>
      </Head>
      <div className="bg-black fixed w-full z-10 top-0 shadow">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-white font-italiana md:text-[4rem] text-3xl ml-3 mt-4 select-none">cardon</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pt-16 md:pt-20">
        {/* Offset for the fixed header; adjust based on your header's actual height */}
        <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col justify-start items-center">
          <h2>
            <TypedText />
          </h2>
          {/* Wrap the Slider component with a div that has specific dimensions */}
          <div className="w-full md:w-1/2 lg:w-1/3 mt-10">
            <Slider {...sliderSettings}>
              <div>
                <Image src="/Card Front.svg" alt="Card Front" width={704} height={354} />
              </div>
              <div>
                <Image src="/Card Back.svg" alt="Card Back" width={704} height={354} />
              </div>
            </Slider>
          </div>
          {/* New section for app download and social media */}
          <div className="bg-black w-full pt-10 pb-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 border-r md:border-r md:border-white px-4 py-6 text-center">
                <h3 className="font-montserrat font-[200] text-white text-2xl mb-4">Get the mobile app</h3>
                <div className='flex items-center justify-center gap-2'>
                <a href="#"
                  className="w-full sm:w-auto flex bg-white focus:ring-4 focus:ring-gray-300 text-black hover:shadow-[rgba(255,255,255,_0.15)_0px_0px_16px] transition-shadow ease-in-out duration-200 rounded-lg inline-flex items-center justify-center px-4 py-2">
                  <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="black"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                    </path>
                  </svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs">Download on the</div>
                    <div className="-mt-1 font-sans sm:text-xl text-base font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#"
                  className="w-full sm:w-auto flex bg-white focus:ring-4 focus:ring-gray-300 text-black hover:shadow-[rgba(255,255,255,_0.15)_0px_0px_16px] transition-shadow ease-in-out duration-200 rounded-lg inline-flex items-center justify-center px-4 py-2">
                  <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="black"
                      d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                    </path>
                  </svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs uppercase">Get in on</div>
                    <div className="-mt-1 font-sans sm:text-xl text-base font-semibold">Google Play</div>
                  </div>
                </a>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4 py-6 text-center">
                <h3 className="font-montserrat text-white font-[200] text-2xl mb-4">Follow us on social media</h3>
                <div className="flex justify-center space-x-4">
                  <FaFacebookF className="text-white cursor-pointer text-2xl" />
                  <FaInstagram className="text-white cursor-pointer text-2xl" />
                  <FaTwitter className="text-white cursor-pointer text-2xl" />
                  <FaYoutube className="text-white cursor-pointer text-2xl" />
                  <FaLinkedinIn className="text-white cursor-pointer text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
