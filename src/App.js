import logo from './images/logo.svg';
import map from "./images/map.png"
import gpay from "./images/gpaly.png"
import app from "./images/app.png"
import logof from "./images/logofooter.svg"
import { FaYahoo } from "react-icons/fa";
import ae from "./images/ae.svg";
import { FaChevronUp } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import vdo from "./vdo.mp4"
import { FiToggleRight } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import robo from "./images/robotics.png"
import why from "./images/why.png"
import leadership from "./images/l1.jpg"
import { useEffect, useState, useRef } from 'react';
import { FiSearch } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiSaveUp2 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import roboteam from "./images/roboteam.webp"
import avawatz from "./images/av.webp"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import pic1 from "./images/1.jpg"
import pic2 from "./images/2.png"
import pic3 from "./images/3.jpg"
import pic4 from "./images/4.webp"
import sm1 from "./images/11.webp"
import sm2 from "./images/22.webp"
import sm3 from "./images/33.webp"
import sm4 from "./images/44.webp"
import f1 from "./images/f1.webp"
import f2 from "./images/f2.webp"
import f3 from "./images/f3.webp"
import f4 from "./images/f4.webp"
import f5 from "./images/f5.webp"
import f6 from "./images/f6.webp"
import f7 from "./images/f7.webp"
import f8 from "./images/f8.webp"
import press from "./images/press.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef(null); 
  const [isFixed, setIsFixed] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFixed(false);
        } else {
          setIsFixed(true); 
        }
      },
      { root: null, threshold: 0 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const crossDiv = document.getElementById('cross-div');
      const nav = document.getElementById('second-navbar');

      const crossDivBottom = crossDiv.getBoundingClientRect().bottom;

      if (crossDivBottom <= 0) {
        setIsVisible(true); 
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='w-full flex flex-col justify-center items-center h-full'>

      <nav className=' mx-auto text-[1.08rem] text-gray-800 flex justify-center items-center w-full border-b-[1px] border-gray-300 h-[4.5rem]'>
        <div className=' w-[1140px] h-[2.8rem] flex justify-between items-center'>
          <div className='flex px-2 gap-10 justify-between items-center'>
            <img src={logo} alt=''/>
            <button>Investors</button>
            <button>Businesses</button>
            <div className=' h-[2.5rem] gap-4 text-lg p-2 text-gray-600 flex justify-start items-center rounded-full bg-gray-100 border-[1px] pl-[1rem] w-[12rem]'>
              <FiSearch/>
              <span className=' text-lg'>Search</span>
            </div>
          </div>
          <div className='flex px-2 gap-6 justify-between items-center'>
            <button className='flex gap-2 justify-center items-center'>
              <IoGlobeOutline className=' text-xl'/>
              <span>US</span>
            </button>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>

      <section className='w-[1120px]'>

        <div className='w-full mt-[4rem] mb-[3rem] text-[1.08rem] text-gray-500 flex justify-center items-center'>
          <div className='w-full h-[1px] bg-gray-200'></div>
          <button className='flex absolute p-4 bg-white justify-center items-center gap-2'>
            <FaLock/>
            <spaan>Campaign ended</spaan>
          </button>
        </div>

        <div className='w-[1120px]'>

          <div className=' flex flex-col justify-start'>

            <div className='flex w-full justify-between items-start'>
              <div className='flex justify-start items-center'>
                <img className=' h-[2.3rem] mt-2 mr-2 w-auto border-2' src={avawatz} alt=''/> 
                <span className='text-5xl font-bold'>Avawatz</span>
              </div>
              <div className=' flex justify-center items-center gap-4 text-3xl font-semibold text-gray-500'>
                <button><CiStar/></button>
                <button><CiSaveUp2/></button>
              </div>
            </div>

            <span className=' mt-2 text-xl text-gray-500'>Trusted AI Robotics: Transforming Safety Across High-Risk and Tedious Tasks</span>

            <div className='flex mt-3 justify-start items-center gap-2'>
              <button className='py-1 px-2 rounded-sm text-[10px] bg-yellow-200 text-gray-800'>AAPI FOUNDERS</button>
              <button className='py-1 px-2 rounded-sm text-[10px] bg-orange-200 text-gray-800'>IMMIGRANT FOUNDERS</button>
              <button className='py-1 px-2 rounded-sm text-[10px] bg-blue-200 text-gray-800'>WOMEN FOUNDERS</button>
              <button className='py-1 px-2 rounded-sm text-[10px] bg-gray-200 text-gray-800'>SECURITY & DEFENSE</button>
              <button className='py-1 px-2 rounded-sm text-[10px] bg-gray-200 text-gray-800'>B2B</button>
              <button className='py-1 px-2 rounded-sm text-[10px] bg-gray-200 text-gray-800'>BUG</button>
              <button className='py-1 px-2 rounded-sm text-[10px] bg-gray-200 text-gray-800'>ROBOTIC</button>
              <button className='py-1 px-2 rounded-sm text-[10px] bg-gray-200 text-gray-800'>DEEP TECH</button>
            </div>

            <div className='flex mt-6 justify-between mb-[2rem] h-[25.8rem]'>
              <div className='h-auto flex justify-center group items-center cursor-pointer w-[65%]'>
                <img className='w-full h-auto' src={roboteam} alt=''/>
                <div className='border-4 transition duration-300 bg-black group-hover:scale-110 group-hover:opacity-50 opacity-30 flex justify-center items-center flex-col border-white rounded-full text-white h-[9rem] w-[9rem] absolute'>
                  <FaPlay className='mt-2 text-5xl'/>
                  <span className='text-xl'>Play</span>
                </div>
              </div>

              <div className=' flex justify-end hull w-[35%]'>
                <div className='h-full flex flex-col justify-between w-[78%]'>
                  <div className=' flex flex-col gap-3'>

                    <div className='flex flex-col gap-3 justify-between'>
                      <div className='flex flex-col gap-1 justify-center'>
                        <span className='text-4xl font-semibold'>$385,384</span>
                        <div className='w-full flex justify-between items-end'><span className=' text-gray-500 text-xl'>Committed</span><button className='h-4 w-4 bg-gray-100 rounded-sm justify-center items-center text-xs font-semibold flex text-gray-500'>i</button></div>
                      </div>
                      <div className=' w-full h-[1px] bg-gray-200 '></div>
                    </div>
                    
                    <div className='flex flex-col gap-3 justify-between'>
                      <div className='flex flex-col gap-1 justify-center'>
                        <span className='text-4xl text-gray-500 font-semibold'>26</span>
                        <span className=' text-gray-500 text-xl'>Investors</span>
                      </div>
                      <div className=' w-full h-[1px] bg-gray-200 '></div>
                    </div>

                    <div className='flex flex-col gap-3 mt-5 justify-between'>
                      <div className='flex flex-col gap-1 justify-center'>
                        <span className='text-gray-500 text-xl'>Successfully funded and closed</span>
                        <span className=' text-gray-500 text-xl'>on October 1, 2024.</span>
                      </div>
                    </div>

                  </div>
                  <button className=' w-full rounded-md py-[0.8rem] opacity-60 text-[1.2rem] font-semibold gap-2 text-gray-200 bg-blue-600 flex justify-center items-center'><FaLock/><span>Invest in Avawatz</span></button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className=' w-full flex flex-col justify-center items-center bg-gray-100 mt-[3rem]'>

        
          <div className='w-[1120px] flex justify-between mt-[2rem] View more '>
              <span className='text-2xl font-bold text-gray-800'>Open for investment</span>
              <span className='flex justify-center items-center'>Investors in Avawatz also invested in these companies. <button className=' text-blue-600 hover:underline cursor-pointer'>View more</button></span>
          </div>


          <div className="carousel slide w-[1400px] mb-[1rem] mx-auto" id="customCarousel" data-bs-ride="carousel">

          {/* Carousel Indicators */}
          <ol className="carousel-indicators">
            <li data-bs-target="#customCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#customCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#customCarousel" data-bs-slide-to="2"></li>
          </ol>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <div className="flex  w-[1300px] h-[400px] bg-gray-100 items-center justify-center mx-auto">
                <div className=' bg-gray-100 flex justify-between items-start mt-[2rem] w-[1120px] h-full'>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic1} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm1} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>SorbiForce</span>
                      <p className=' text-sm text-black'>World&apos;s first non-metal sustainable battery build fo...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic2} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm2} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>Melior AI</span>
                      <p className=' text-sm text-black'>AI-powered legal ddocument platform that saves compan...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic3} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm3} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>FuelGems</span>
                      <p className=' text-sm text-black'>Nanotechnology fuel additive which makes fuel more e...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic4} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm4} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>Pressman Film</span>
                      <p className=' text-sm text-black'>New movies from the company behind 'Wall Stree...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                </div>
              </div>
            </div>
            {/* Second Slide */}
            <div className="carousel-item">
            <div className="flex  w-[1300px] h-[400px] bg-gray-100 items-center justify-center mx-auto">
                <div className=' bg-gray-100 flex justify-between items-start mt-[2rem] w-[1120px] h-full'>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic1} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm1} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>SorbiForce</span>
                      <p className=' text-sm text-black'>World&apos;s first non-metal sustainable battery build fo...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic2} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm2} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>Melior AI</span>
                      <p className=' text-sm text-black'>AI-powered legal ddocument platform that saves compan...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic3} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm3} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>FuelGems</span>
                      <p className=' text-sm text-black'>Nanotechnology fuel additive which makes fuel more e...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic4} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm4} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>Pressman Film</span>
                      <p className=' text-sm text-black'>New movies from the company behind 'Wall Stree...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                </div>
              </div>
            </div>
            {/* Third Slide */}
            <div className="carousel-item">
            <div className="flex  w-[1300px] h-[400px] bg-gray-100 items-center justify-center mx-auto">
                <div className=' bg-gray-100 flex justify-between items-start mt-[2rem] w-[1120px] h-full'>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic1} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm1} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>SorbiForce</span>
                      <p className=' text-sm text-black'>World&apos;s first non-metal sustainable battery build fo...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic2} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm2} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>Melior AI</span>
                      <p className=' text-sm text-black'>AI-powered legal ddocument platform that saves compan...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic3} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm3} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>FuelGems</span>
                      <p className=' text-sm text-black'>Nanotechnology fuel additive which makes fuel more e...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                  <div className=' rounded-md overflow-hidden group hover:shadow-md cursor-pointer hover:-translate-y-1 h-[80%] w-[22%] bg-white flex flex-col'>
                    <div className=' flex h-[55%] w-full'>
                      <img className=' h-full w-auto object-cover' src={pic4} alt=''/>
                      <img className=' absolute h-10 ml-[1rem] mt-[8.5rem] w-10 rounded-sm' src={sm4} alt=''/>
                    </div>

                    <div className='flex flex-col p-3'>
                      <span className=' text-2xl pt-3 pb-2 font-bold'>Pressman Film</span>
                      <p className=' text-sm text-black'>New movies from the company behind 'Wall Stree...</p>
                      <span className='text-xs text-gray-500'>Republic funing Portal *Reg CF</span>
                    </div>
                    <div className='text-white text-xl opacity-100 absolute ml-[13rem] mt-[1rem]'><FaRegStar/></div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <a className="carousel-control-prev text-4xl mr-[15rem] text-black" href="#customCarousel" role="button" data-bs-slide="prev">
            <IoIosArrowBack/>
          </a>
          <a className="carousel-control-next text-4xl ml-[15rem] text-black" href="#customCarousel" role="button" data-bs-slide="next">
            <IoIosArrowForward/>
          </a>

        </div>

      </section>

      <nav id="cross-div" ref={targetRef} className='w-full flex flex-col justify-center items-center'>
        <div className='mx-auto text-[1.08rem] text-gray-800 flex justify-center items-center w-full border-b-[1px] border-gray-300 h-[4.5rem]'>
          <div className='h-full flex gap-10 w-[1120px]'>
            <button className='flex justify-start h-full items-start bg-blue-600'><span className='h-[95%] text-blue-600 text-lg font-bold flex justify-center items-center bg-white '>Pitch</span></button>
            <button className='text-gray-400 hover:text-blue-600 flex justify-start h-full items-start bg-white'><span className='h-[95%] text-lg font-bold flex justify-center items-center bg-white'>Updates</span> <span className='flex justify-center items-center h-[95%]'> <span className=' py-[4px] px-[7px] rounded-md ml-4 flex justify-center items-center bg-gray-100 text-black'>45</span> </span> </button>
          </div>
        </div>
        <div className='mx-auto gap-1 text-sm text-gray-500 flex justify-center items-center w-full border-b-[1px] border-gray-300 h-[2.5rem]'>
          <GoAlert className='text-yellow-400'/>
          <span>Campaign closed on October 1, 2024. Information displayed may not be up-to-date.</span>
        </div>
      </nav>

      <section className='w-full flex justify-center'>

      <div
        className={`${
          isFixed && isVisible ? 'fixed top-16 left-10' : 'hidden'
        } w-[150px] h-[30rem] flex flex-col gap-4 text-sm text-gray-400 pt-[5rem]`}
      >
        <div>
          <button className="hover:text-gray-700 w-full text-start py-2">Pitch</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Leadership</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Opportunity</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Market and tra...</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Biz.model</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Competition</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Founders</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Summary</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Disclaimers</button>
          <button className="w-[80%] h-[1px] bg-gray-400"></button>
          <button className="hover:text-gray-700 w-full text-start py-2">About</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Team</button>
          <button className="hover:text-gray-700 w-full text-start py-2">Press</button>
        </div>
      </div>

      <section className='w-[1120px]  flex'>

        <div className='w-[65%] my-[3rem] flex flex-col justify-start gap-[2rem] h-full'>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Investment summary</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>

          <ul class="list-disc pl-[2rem] text-xl text-gray-500 space-y-3">
            <li>
              <span class="">$4.5M+ funding raised</span>, including <span class="">$2.3M+</span> R&D funding from US Defense.
            </li>
            <li>
              The <span class="">US Air Force</span> and <span class="">Army</span> are using our technology.
            </li>
            <li>
              Beta launch of <span class="">GENIE</span>: Key to Precision & Efficiency in AI/ML Model Training.
            </li>
            <li>
              Q2 '24 launch of <span class="">FALCON</span>: Trustworthy AI and ML for Robot Teams.
            </li>
            <li>
              The current <span class="">Sales Pipeline</span> is over <span class="">$16M</span>.
            </li>
            <li>
              The <span class="">AI market</span> is predicted to reach <span class="">$1.07 Trillion</span> by 2027.
            </li>
            <li>
              The global <span class="">Robotic market</span> is predicted to reach <span class="">$141B</span> by 2027.
            </li>
          </ul>

          <div className=' italic flex flex-col  text-xs  py-[3rem] px-[2rem] w-full gap-[2rem]'>
            <span>OpenDeal Broker LLC charges you a two percent (2%) administrative fee on the gross principal transaction with a minimum fee of $5 and a maximum of $300. The fee is added to the total amount of your investment at checkout.</span>
            <span>Past financial results are no guarantee of future performance. <span className='text-blue-600'>Click here for important information regarding Financial Projections</span> which are not guaranteed.</span>
            <span>Investments in private companies are particularly risky and may result in total loss of invested capital.</span>
            <span><span className='text-blue-600'>Risks of early stage investment.</span> Not an offer to buy or sell securities. This is a long-term speculative illiquid investment. Investment is not FDIC or SiPC insured.</span>
            <span>There may be other available opportunities that are similar to this investment but have different… <span className='text-blue-600'>Read more</span></span>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Pitch</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>

          <h3 className='text-2xl font-bold'>AvaWatz: Unlocking the Power of AI Robotics</h3>

          <span className='text-2xl'>At AvaWatz, we aim to unlock the true potential of robotics with our trusted AI platform. Our AI empowers robots to work together like teammates in harsh, unpredictable environments, freeing humans from danger and high-risk tasks. We aim to make robots smarter and safer, boosting efficiency and keeping humans out of harm's way. Think advanced AI for robotics that tackles inspections, maintenance, and more, all delivered through our easy-to-use platform.</span>

          <img className='w-full  h-auto object-cover' src={why} alt=''/>
          
          <h3 className='text-2xl font-bold'>Transforming Robots Into Cooperative Teams with Trusted AI</h3>

          <ul class="list-disc pl-[2rem] text-2xl space-y-3">
            <li>
             Share information and make joint decisions: Robots analyze data, assess situations, and adapt their actions like a cohesive unit.
            </li>
            <li>
             Handle the hard stuff: From hazardous inspections to disaster <span className='text-blue-600'>...Read more</span>
            </li>
          </ul>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Leadership</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>

          <h3 className='text-2xl font-bold'>Meet the Minds Behind AvaWatz: A Team Built for AI Robotics Brilliance</h3>

          <img className='w-full h-auto object-cover' src={leadership} alt=''/>

          <span className='text-xl'>AvaWatz isn't just about the future of robotics. It's about the visionary minds making that future a reality. Led by a diverse group of seasoned innovators, entrepreneurs, and AI experts, this team possesses the firepower to revolutionize collaborative robots.</span>

          <span className='text-xl'><b>Dr. Rajini Anachi, Founder & CEO:</b> A serial innovator in AI and robotics, Rajini has conquered challenges across industries, from defense to mining to cybersecurity. With a passion for empowering robots to work like teams, her vision is to redefine safety and efficiency with intelligent collaboration.</span>

          <span className='text-xl'><b>Bala Jana, Co-Founder & Board Member:</b> A seasoned investor and veteran of start-up success, Bala brings a track… <span className='text-blue-600'>Read more</span></span>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Opportunity</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>

          <h3 className='text-2xl font-bold'>Unleash the Power of Collaborative Robots</h3>

          <span className='text-xl'>Today, countless "dirty, dull, and dangerous" tasks still fall on human shoulders. Hazardous inspections, disaster response, and infrastructure maintenance--these crucial but risky jobs put lives at stake and limit productivity. While robots excel at specific tasks, they often struggle to cooperate in unstructured environments. Changing weather, shifting terrain, and unpredictable conditions can throw traditional robots off balance.</span>

          <span className='text-xl'>AvaWatz provides a solution with our leading-edge AI platform that equips robots with the ability to communicate, strategize, and adapt on the fly. Robots powered by our trusted AI can share data and insights in real-time, participate in joint decision-making efforts,… <span className='text-blue-600'>Read more</span></span>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Market & Traction</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>

          <h3 className='text-2xl font-bold'>A $1.2 Trillion Opportunity: AvaWatz Takes on the Future of AI Robotics</h3>

          <span className='text-xl'>AvaWatz is tapping into a massive $1.2 Trillion combined market hungry for exactly what it offers: collaborative robotic solutions.</span>

          <img className='w-full h-auto object-cover' src={robo} alt=''/>

          <span className='text-xl'>Here's why this opportunity is bigger than robots:</span>

          <ul class="list-disc pl-[2rem] text-2xl space-y-3">
            <li>
             The Global AI Market is Booming: Projected to reach $1.07 Trillion by 2027, AI is fueling the demand for smarter, more sophisticated solutions. (<span className='text-blue-600'>Source</span>)
            </li>
            <li>
             Robots are Teaming Up: The need for autonomous mobile robots and intelligent collaboration is exploding across industries, from smart airports to infrastructure maintenance, expected to collectively reach $634 billion by 2026. (<span className='text-blue-600'>Source</span> | <span className='text-blue-600'>Source</span>)
            </li>
            <li>
             The robotics market is experiencing unprecedented growth propelled by a surge in investments… <span className='text-blue-600'>Read more</span>
            </li>
          </ul>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Business model</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>

          <span className='text-xl'>The company’s business model consists of subscription services (SaaS) with Service Level (SL) focused on three areas of market verticals: Inspection & Maintenance, Surveillance, and Early Warning for Safety. The airfield flight line operation is one of the solutions under the Inspection & Maintenance track. Our services can potentially benefit commercial markets, both the private sector and the US military. The contract duration is from 1 year to 5 years long.</span>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Competition</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>

          <span className='text-xl'>AvaWatz is in the service robots industry. The International Organization for Standardization defines a “service robot” as a robot “that performs useful tasks for humans or equipment excluding industrial automation applications.”</span>

          <span className='text-xl'>Service robots typically perform tedious, tiring, or dangerous tasks for humans. Indirect competitors in this industry are Locus Robotics, InVia Robotics in warehouse operation, Badger Technologies in retail inventory, and Savioke for indoor delivery-hospitality. There are drone manufacturers such as DJI, Parrot, Skydio, and ground robot manufacturers such as Boston Dynamics who would be better partners than competitors.</span>

          <span>AvaWatz started out to build robotics for airfield flightline operations, and we realized that… <span className='text-blue-600'>Read more</span></span>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Summary</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>
          
          <video className=' w-[60%] mx-auto'>
            <source type="video/mp4" src={vdo}/>
          </video>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Disclaimers</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
          </div>

          <span className='text-xl'>Certain information set forth in this presentation contains “forward-looking information”, including “future-oriented financial information” and “financial outlook”, under applicable securities laws (collectively referred to herein as forward-looking statements). Except for statements of historical fact, the information contained herein constitutes forward-looking statements and includes, but is not limited to, the (i) projected financial performance of the Company; (ii) completion of, and the use of proceeds from, the sale of the shares being offered hereunder; (iii) the expected development of the Company’s business, projects, and joint ventures; (iv) execution of the Company’s vision and growth strategy, including with respect to future… <span className='text-blue-600'>Read more</span></span>

        </div>

        <div className='w-[35%] flex justify-end h-full'>

          <div className='w-[78%] h-[100rem] mt-[3rem] '>

            <div className='w-full flex flex-col justify-start'>

            <div className='flex flex-col gap-4'>
            <h2 className='text-2xl text-gray-500 font-bold'>Deals terms</h2>
            <div className='h-[1px] bg-gray-200 w-[4rem]'></div>
            </div>


            <div className="mt-3 flex flex-col gap-2 group">
              <div className="w-full flex justify-between items-end">
                <span className="text-gray-800 text-lg">Funds Raised</span>
                <span className='flex justify-end items-center gap-2'>
                  <span className='font-semibold'>$163,247</span>
                  <div className="h-4 w-4 bg-gray-100 rounded-sm justify-center items-center text-xs font-semibold flex text-gray-500">i</div>
                </span>
              </div>

              <span className="hidden group-hover:block mt-3 w-full text-xs text-gray-500 transition-opacity duration-300 ease-in-out">
                Funds raised publicly & privately on and off Republic on the same terms
              </span>

              <div className='w-full h-[1px] bg-gray-200'></div>
            </div>

            <div className="mt-3 flex flex-col gap-2 group">
              <div className="w-full flex justify-between items-end">
                <span className="text-gray-800 text-lg">Allocation</span>
                <span className='flex justify-end items-center gap-2'>
                  <span className='font-semibold'>$5M</span>
                  <div className="h-4 w-4 bg-gray-100 rounded-sm justify-center items-center text-xs font-semibold flex text-gray-500">i</div>
                </span>
              </div>

              <span className="hidden group-hover:block mt-3 w-full text-xs text-gray-500 transition-opacity duration-300 ease-in-out">
                The total investment amount in Avawatz being offered to investors. 
              </span>

              <div className='w-full h-[1px] bg-gray-200'></div>
            </div>

            <div className="mt-3 flex flex-col gap-2 group">
              <div className="w-full flex justify-between items-end">
                <span className="text-gray-800 text-lg">Valuation</span>
                <span className='flex justify-end items-center gap-2'>
                  <span className='font-semibold'>$80.85M</span>
                  <div className="h-4 w-4 bg-gray-100 rounded-sm justify-center items-center text-xs font-semibold flex text-gray-500">i</div>
                </span>
              </div>

              <span className="hidden group-hover:block mt-3 w-full text-xs text-gray-500 transition-opacity duration-300 ease-in-out">
                 The value of the company before investments from the current financing round.
              </span>

              <div className='w-full h-[1px] bg-gray-200'></div>
            </div>

            <div className="mt-3 flex flex-col gap-2 group">
              <div className="w-full flex justify-between items-end">
                <span className="text-gray-800 text-lg">Share price</span>
                <span className='flex justify-end items-center gap-2'>
                  <span className='font-semibold text-red-500'>$3</span>
                  <s className='font-semibold '>$4</s>
                  <div className="h-4 w-4 bg-gray-100 rounded-sm justify-center items-center text-xs font-semibold flex text-gray-500">i</div>
                </span>
              </div>

              <span className="hidden group-hover:block mt-3 w-full text-xs text-gray-500 transition-opacity duration-300 ease-in-out">
                 The value of the company before investments from the current financing round.
              </span>

              <div className='w-full h-[1px] bg-gray-200'></div>
            </div>

            <div className="mt-3 flex flex-col gap-2 group">
              <div className="w-full flex justify-between items-end">
                <span className="text-gray-800 text-lg">Security type</span>
                <span className='flex justify-end items-center gap-2'>
                  <span className='font-semibold'>Preferred Shares</span>
                  <div className="h-4 w-4 bg-gray-100 rounded-sm justify-center items-center text-xs font-semibold flex text-gray-500">i</div>
                </span>
              </div>

              <span className="hidden group-hover:block mt-3 w-full text-xs text-gray-500 transition-opacity duration-300 ease-in-out">
               Class of ownership that has a higher claim on assets and earnings than common shares.
              </span>

              <div className='w-full h-[1px] bg-gray-200'></div>
            </div>

            <div className="mt-3 flex flex-col gap-2 group">
              <div className="w-full flex justify-between items-end">
                <span className="text-gray-800 text-lg">Minimum investment</span>
                <span className='flex justify-end items-center gap-2'>
                  <span className='font-semibold'>$2,500</span>
                  <div className="h-4 w-4 bg-gray-100 rounded-sm justify-center items-center text-xs font-semibold flex text-gray-500">i</div>
                </span>
              </div>

              <span className="hidden group-hover:block mt-3 w-full text-xs text-gray-500 transition-opacity duration-300 ease-in-out">
                 The smallest investment amount the issuer is accepting in this offering.
              </span>

              <div className='w-full h-[1px] bg-gray-200'></div>
            </div>

            <div className="mt-3 flex flex-col gap-2 group">
              <div className="w-full flex justify-between items-end">
                <span className="text-gray-800 text-lg">Deadline</span>
                <span className='flex justify-end items-center gap-2'>
                  <span className='font-semibold'>October 1, 2024</span>
                  <div className="h-4 w-4 bg-gray-100 rounded-sm justify-center items-center text-xs font-semibold flex text-gray-500">i</div>
                </span>
              </div>

              <span className="hidden group-hover:block mt-3 w-full text-xs text-gray-500 transition-opacity duration-300 ease-in-out">
                Avawatz campaign will end on October 1, 2024 at 12:29 PM IST.
                <div className='text-blue-600'>Learn more</div>
              </span>

              <div className='w-full h-[1px] bg-gray-200'></div>
            </div>


            </div>

            <div className='w-full flex mt-[3rem] flex-col justify-start'>
              <h2 className='text-2xl text-gray-500 font-bold'>Documents</h2>

              <div className='mt-[1rem] border-[1px] border-gray-200'>
                <div className='p-3 text-sm text-gray-500 border-b-[1px] border-gray-200'>Capital R (OpenDeal Broker LLC, CRD #291387) is hosting this Reg S securities offering by AvaWatz Company.</div>
                <div className='flex flex-col text-sm'>
                  <span className='p-3 text-gray-500'>Company documents</span>

                  <button className=' hover:text-blue-600 hover:bg-gray-100 font-semibold w-full h-[3.5rem] justify-center py-2 text-gray-800 flex  items-center'>
                    <IoDocumentTextOutline className='w-[10%] flex justify-start items-center h-full text-lg'/>
                    <div className='w-[80%] h-full flex justify-start items-center pl-2'>Subscription Aggrement</div>
                  </button>

                  <button className=' hover:text-blue-600 hover:bg-gray-100 font-semibold w-full h-[3.5rem] justify-center py-2 text-gray-800 flex  items-center'>
                    <IoDocumentTextOutline className='w-[10%] flex justify-start items-center h-full text-lg'/>
                    <div className='w-[80%] h-full flex justify-start items-center pl-2'>AvaWatz IOM Supplement #3.pdf</div>
                  </button>

                  <button className=' hover:text-blue-600 hover:bg-gray-100 font-semibold w-full h-[3.5rem] justify-center py-2 text-gray-800 flex  items-center'>
                    <IoDocumentTextOutline className='w-[10%] flex justify-start items-center h-full text-lg'/>
                    <div className='w-[80%] h-full flex justify-start items-center pl-2'>AvaWatz IOM Supplement #2.pdf</div>
                  </button>

                  <button className=' hover:text-blue-600 hover:bg-gray-100 font-semibold w-full h-[3.5rem] justify-center py-2 text-gray-800 flex  items-center'>
                    <IoDocumentTextOutline className='w-[10%] flex justify-start items-center h-full text-lg'/>
                    <div className='w-[80%] h-full flex justify-start items-center pl-2'>AvaWatz Reg S IOM #1.pdf</div>
                  </button>

                  <button className=' hover:text-blue-600 hover:bg-gray-100 font-semibold w-full h-[3.5rem] justify-center py-2 text-gray-800 flex  items-center'>
                    <IoDocumentTextOutline className='w-[10%] flex justify-start items-center h-full text-lg'/>
                    <div className='w-[80%] h-full flex justify-start items-center pl-2'>AvaWatz Companny IOM.pdf</div>
                  </button>

                  <button className=' hover:text-blue-600 hover:bg-gray-100 font-semibold w-full h-[3.5rem] justify-center py-2 text-gray-800 flex  items-center'>
                    <IoDocumentTextOutline className='w-[10%] flex justify-start items-center h-full text-lg'/>
                    <div className='w-[80%] h-full flex justify-start items-center pl-2'>Form CRS.pdf</div>
                  </button>

                  <button className=' hover:text-blue-600 hover:bg-gray-100 font-semibold w-full h-[3.5rem] justify-center py-2 text-gray-800 flex  items-center'>
                    <IoDocumentTextOutline className='w-[10%] flex justify-start items-center h-full text-lg'/>
                    <div className='w-[80%] h-full flex justify-start items-center pl-2'>Disclosures & Disclaimers.pdf</div>
                  </button>

                  <button className=' hover:text-blue-600 mb-2 hover:bg-gray-100 font-semibold w-full h-[3.5rem] justify-center py-2 text-gray-800 flex  items-center'>
                    <IoDocumentTextOutline className='w-[10%] flex justify-start items-center h-full text-lg'/>
                    <div className='w-[80%] h-full flex justify-start items-center pl-2'>Additional Risk Disclosures.pdf</div>
                  </button>
                  
                </div>
              </div>
            </div>

            <div className='w-full flex mt-[3rem] flex-col justify-start'>
              <h2 className='text-2xl text-gray-500 font-bold'>Bonus perks</h2>
              <span className=' w-full'>In addition to your shares, you'll receive perks for investing in Avawatz.</span>

              <div className='w-full flex flex-col'>


                <div className='flex w-full p-3 mt-[2rem] hover:bg-gray-100 flex-col border-[1px] border-gray-200 justify-between items-start'>
                  <span className='text-lg font-semibold text-gray-500'>Invest</span>
                  <span className='text-4xl font-semibold mb-2 text-blue-600'>$20,000</span>
                  <span className='text-lg font-semibold text-gray-500'>Receive</span>
                  <ul className='text-gray-500 list-disc'>
                    <li>5% Additional Bonus Share</li>
                  </ul>
                </div>

                <div className='flex w-full p-3  flex-col hover:bg-gray-100 border-[1px] border-gray-200 justify-between items-start'>
                  <span className='text-lg font-semibold text-gray-500'>Invest</span>
                  <span className='text-4xl font-semibold mb-2 text-blue-600'>$50,000</span>
                  <span className='text-lg font-semibold text-gray-500'>Receive</span>
                  <ul className='text-gray-500 list-disc'>
                    <li>10% Additional Bonus Share</li>
                  </ul>
                </div>

                <div className='flex w-full p-3  flex-col hover:bg-gray-100 border-[1px] border-gray-200 justify-between items-start'>
                  <span className='text-lg font-semibold text-gray-500'>Invest</span>
                  <span className='text-4xl font-semibold mb-2 text-blue-600'>$100,000</span>
                  <span className='text-lg font-semibold text-gray-500'>Receive</span>
                  <ul className='text-gray-500 list-disc'>
                    <li>15% Additional Bonus Share</li>
                  </ul>
                </div>

                <div className='flex w-full p-3  flex-col hover:bg-gray-100 border-[1px] border-gray-200 justify-between items-start'>
                  <span className='text-lg font-semibold text-gray-500'>Invest</span>
                  <span className='text-4xl font-semibold mb-2 text-blue-600'>$250,000</span>
                  <span className='text-lg font-semibold text-gray-500'>Receive</span>
                  <ul className='text-gray-500 list-disc'>
                    <li>25% Additional Bonus Share</li>
                  </ul>
                </div>

              </div>
      

            </div>

          </div>

        </div>

      </section>


      </section>

    
      <section className='w-full pt-[2rem] pb-[4rem] border-[1px] flex justify-center items-center border-gray-200'>

        <div className='w-[1120px] flex justify-center items-center flex-col'>

          <div className='flex w-full flex-col gap-2 justify-center items-center'>
            <span className='text-2xl font-bold text-gray-600'>About Avawatz</span>
            <div className='w-[6rem] bg-blue-600 h-[2px]'></div>
          </div>

          <div className='w-full mt-[3rem]  flex justify-between items-center h-[12rem]'>

            <div className='w-[33%] font-semibold flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-start '>
                <span className='text-gray-500'>Legal Name</span>
                <span >AvaWatz Company</span>
              </div>

              <div className='flex flex-col justify-start'>
                <span className='text-gray-500'>Founded</span>
                <span >Feb 2019</span>
              </div>

              <div className='flex flex-col justify-start '>
                <span className='text-gray-500'>Form</span>
                <span >Texas Corporation</span>
              </div>
            </div>


            <div className='w-[33%] font-semibold flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-start '>
                <span className='text-gray-500'>Employees</span>
                <span >17</span>
              </div>

              <div className='flex flex-col justify-start '>
                <span className='text-gray-500'>Website</span>
                <span className='text-blue-600'>avawatz.com</span>
              </div>

              <div className='flex flex-col justify-start '>
                <span className='text-gray-500'>Social media</span>
                <span className='flex gap-2'><FaFacebook className='text-blue-600'/><FaInstagram className='text-orange-300'/><FaYoutube className='text-red-500'/><FaTwitter className='text-blue-400'/><RiTwitterXLine/></span>
              </div>
            </div>


            <div className='w-[33%] font-semibold flex flex-col justify-start h-full'>
              <span className='text-gray-500'>Headquarters</span>
              <img className='w-full h-auto mt-1' src={map} alt=''/>
            </div>
          </div>


        </div>

      </section>

      <section className='w-full pt-[2rem] pb-[3rem] border-[1px] flex justify-center items-center border-gray-200'>

        <div className='w-[1120px] flex justify-center items-center flex-col'>

        <div className='flex w-full flex-col gap-1 justify-center items-center'>
            <span className='text-2xl font-bold text-gray-600'>Avawatz Team</span>
            <p className='text-sm text-gray-400'>Everyone helping build Avawatz, not limited to employees</p>
            <div className='w-[6rem] bg-blue-600 h-[2px]'></div>
        </div>

        <div className='w-[1120px] flex justify-center gap-[2rem] items-center py-[3rem] flex-wrap'>

          <div className='w-[30%] flex flex-col justify-center gap-1 items-center p-2'>
            <img className='w-[40%] h-auto rounded-md' src={f1} alt=''/>
            <span className=' text-lg font-semibold'>Rajini Anachi</span>
            <span className='text-gray-400'>Founder</span>
            <p className=' text-center text-sm'>2x founder, previously founded CyGlass, which was acquired by Nominet in 2020. Focused on bringing tremendous value to AvaWatz customers, employees, and investors.</p>
          </div>

          <div className='w-[30%] flex flex-col justify-center gap-1 items-center p-2'>
            <img className='w-[40%] h-auto rounded-md' src={f2} alt=''/>
            <span className=' text-lg font-semibold'>Bala Jana</span>
            <span className='text-gray-400'>Co-Founder, Board Member</span>
            <p className=' text-center text-sm'>Investor and early team member at several start-ups acquired by Fortune 500 companies. Leading product innovation, commercialization, and product-market fit.</p>
          </div>

          <div className='w-[30%] flex flex-col justify-center gap-1 items-center p-2'>
            <img className='w-[40%] h-auto rounded-md' src={f3} alt=''/>
            <span className=' text-lg font-semibold'>JR May</span>
            <span className='text-gray-400'>Business Development & Sales</span>
            <p className=' text-center text-sm'>Proven expertise in DoD and commercial sales. Brings an extensive network of connections for direct sales, partnerships, and rapidly scaling for growth. Previously led business development at mZeal/Cyglass (acquired by Nominet in 2020)</p>
          </div>

          <div className='w-[30%] flex flex-col justify-center gap-1 items-center p-2'>
            <img className='w-[40%] h-auto rounded-md' src={f4} alt=''/>
            <span className=' text-lg font-semibold'>Rishabh Iyer</span>
            <span className='text-gray-400'>AI Researcher</span>
            <p className=' text-center text-sm'>Dr. Rishabh Iyer, an Asst. Professor at the University of Texas, Dallas. Dr. Iyer specializes in efficient machine learning (ML) and advance combinatorial optimization and information theory. He has won several awards and fellowships over the years.</p>
          </div>

          <div className='w-[30%] flex flex-col justify-center gap-1 items-center p-2'>
            <img className='w-[40%] h-auto rounded-md' src={f5} alt=''/>
            <span className=' text-lg font-semibold'>John McKendry</span>
            <span className='text-gray-400'>Product Development</span>
            <p className=' text-center text-sm'>John McKendry has a strong background in real-time control systems, artificial intelligence for multi-sensor analysis, robotic network engineering and autonomous edge computing. Was instrumental in architecting the cognitive engine at mZeal/Cyglass.</p>
          </div>

          <div className='w-[30%] flex flex-col justify-center gap-1 items-center p-2'>
            <img className='w-[40%] h-auto rounded-md' src={f6} alt=''/>
            <span className=' text-lg font-semibold'>Ajay Jain</span>
            <span className='text-gray-400'>Operation Marketing</span>
            <p className=' text-center text-sm'>Has over two decades of experience in IT consulting operations and five years as a corporate secretary in investment banking. Expertise in relationship management, talent acquisition, process optimization, legal compliance, and digital marketing.</p>
          </div>

          <div className='w-[30%] flex flex-col justify-center gap-1 items-center p-2'>
            <img className='w-[40%] h-auto rounded-md' src={f7} alt=''/>
            <span className=' text-lg font-semibold'>Walter Rawle</span>
            <span className='text-gray-400'>Sensors, AI & Autonomous Systems SME</span>
            <p className=' text-center text-sm'>Dr. Walter Rawle has experience across a wide spectrum of domains including, multiple sensor physics, robotic hardware interfaces, advanced combinatorial machine learning, stochastic analysis, position-navigation-timing for GPS-denied.</p>
          </div>

          <div className='w-[30%] flex flex-col justify-center gap-1 items-center p-2'>
            <img className='w-[40%] h-auto rounded-md' src={f8} alt=''/>
            <span className=' text-lg font-semibold'>Neil Wadhwani</span>
            <span className='text-gray-400'>Sales & Marketing Advisor</span>
            <p className=' text-center text-sm'>Neal has 25+ years of experience in Sales and Marketing in Fortune 500 companies. Over the course of his career, his focus has been Technology Sales, Presales, ITOps, Digital Marketing, and executive leadership experience with high-growth startups.</p>
          </div>

        </div>

        </div>

      </section>


      <section className='w-full pt-[2rem] pb-[3rem] border-[1px] flex justify-center items-center border-gray-200'>

        <div className='w-[1120px] flex justify-center items-center flex-col'>

        <div className='flex w-full flex-col gap-1 justify-center items-center'>
            <span className='text-2xl font-bold text-gray-600'>Press</span>
            <div className='w-[3rem] bg-blue-600 h-[2px]'></div>
        </div>

        <div className='w-[1120px] flex justify-center gap-[2rem] items-center py-[3rem] flex-wrap'>

          <div className='w-[31%] h-[27rem] delay-100 duration-200 hover:-translate-y-1 rounded-lg border-[1px] border-gray-200 flex flex-col'>
            <div className='w-full font-bold opacity-60 h-[55%] bg-gray-200 text-9xl flex justify-center items-center overflow-hidden'>AvaW</div>
            <div className=' flex p-3 gap-2 flex-col justify-between'>
              <span className=' text-xl font-semibold'>AvaWatz Patents FALCON, A New Trust Assessment and Auto-C...</span>
              <span className='flex gap-2 justify-start'><span className=' h-[5] w-[5] bg-purple-500 text-white flex justify-center items-center px-1'><FaYahoo/></span> <span>Yahoo Finance</span> <span className='text-gray-400'>oct 12, 2022</span></span>
              <span className='text-sm'>AvaWatz Company ("AvaWatz"), a technology company that supports collaboration among robots, is pleased to announce the fi...</span>
            </div>
          </div>

          <div className='w-[31%] h-[27rem] delay-100 duration-200 hover:-translate-y-1 rounded-lg border-[1px] border-gray-200 flex flex-col'>
            <div className='w-full font-bold h-[55%]'><img src={press} alt='' className='object cover h-full w-full'/></div>
            <div className=' flex p-3 gap-2 flex-col justify-between'>
              <span className=' text-xl font-semibold'>AvaWatz Patents FALCON, A New Trust Assessment and Auto-C...</span>
              <span className='flex gap-2 justify-start'><span className=' h-[5] w-[5] bg-purple-500 text-white flex justify-center items-center px-1'><FaYahoo/></span> <span>Yahoo Finance</span> <span className='text-gray-400'>oct 12, 2022</span></span>
              <span className='text-sm'>AvaWatz Company ("AvaWatz"), a technology company that supports collaboration among robots, is pleased to announce the fi...</span>
            </div>
          </div>

          <div className='w-[31%] h-[27rem] delay-100 duration-200 hover:-translate-y-1 rounded-lg border-[1px] border-gray-200 flex flex-col'>
            <div className='w-full font-bold opacity-60 h-[55%] bg-gray-100 text-[30rem] flex justify-center text-blue-600 items-center overflow-hidden'><FiToggleRight/></div>
            <div className=' flex p-3 gap-2 flex-col justify-between'>
              <span className=' text-xl font-semibold'>AvaWatz Patents FALCON, A New Trust Assessment and Auto-C...</span>
              <span className='flex gap-2 justify-start'><span className=' h-[5] w-[5] bg-purple-500 text-white flex justify-center items-center px-1'><FaYahoo/></span> <span>Yahoo Finance</span> <span className='text-gray-400'>oct 12, 2022</span></span>
              <span className='text-sm'>AvaWatz Company ("AvaWatz"), a technology company that supports collaboration among robots, is pleased to announce the fi...</span>
            </div>
          </div>

          <div className='w-[31%] h-[27rem] delay-100 duration-200 hover:-translate-y-1 rounded-lg border-[1px] border-gray-200 flex flex-col'>
            <div className='w-full font-bold opacity-60 h-[55%] bg-gray-200 text-9xl flex justify-center items-center overflow-hidden'>AvaW</div>
            <div className=' flex p-3 gap-2 flex-col justify-between'>
              <span className=' text-xl font-semibold'>AvaWatz Patents FALCON, A New Trust Assessment and Auto-C...</span>
              <span className='flex gap-2 justify-start'><span className=' h-[5] w-[5] bg-purple-500 text-white flex justify-center items-center px-1'><FaYahoo/></span> <span>Yahoo Finance</span> <span className='text-gray-400'>oct 12, 2022</span></span>
              <span className='text-sm'>AvaWatz Company ("AvaWatz"), a technology company that supports collaboration among robots, is pleased to announce the fi...</span>
            </div>
          </div>

          <div className='w-[31%] h-[27rem] delay-100 duration-200 hover:-translate-y-1 rounded-lg border-[1px] border-gray-200 flex flex-col'>
            <div className='w-full font-bold opacity-60 h-[55%] bg-gray-200 text-9xl flex justify-center items-center overflow-hidden'>AvaW</div>
            <div className=' flex p-3 gap-2 flex-col justify-between'>
              <span className=' text-xl font-semibold'>AvaWatz Patents FALCON, A New Trust Assessment and Auto-C...</span>
              <span className='flex gap-2 justify-start'><span className=' h-[5] w-[5] bg-purple-500 text-white flex justify-center items-center px-1'><FaYahoo/></span> <span>Yahoo Finance</span> <span className='text-gray-400'>oct 12, 2022</span></span>
              <span className='text-sm'>AvaWatz Company ("AvaWatz"), a technology company that supports collaboration among robots, is pleased to announce the fi...</span>
            </div>
          </div>

          <div className='w-[31%] h-[27rem] delay-100 duration-200 hover:-translate-y-1 rounded-lg border-[1px] border-gray-200 flex flex-col'>
            <div className='w-full font-bold opacity-60 h-[55%] bg-gray-200 text-9xl flex justify-center items-center overflow-hidden'>AvaW</div>
            <div className=' flex p-3 gap-2 flex-col justify-between'>
              <span className=' text-xl font-semibold'>AvaWatz Patents FALCON, A New Trust Assessment and Auto-C...</span>
              <span className='flex gap-2 justify-start'><span className=' h-[5] w-[5] bg-purple-500 text-white flex justify-center items-center px-1'><FaYahoo/></span> <span>Yahoo Finance</span> <span className='text-gray-400'>oct 12, 2022</span></span>
              <span className='text-sm'>AvaWatz Company ("AvaWatz"), a technology company that supports collaboration among robots, is pleased to announce the fi...</span>
            </div>
          </div>

        </div>

        <button className='py-2 px-4 rounded-md border-[1px] border-gray-200 font-semibold'>Show all</button>

        </div>

      </section>  


      <section className='w-full p-[4rem] border-[1px] flex justify-center items-center border-gray-200'>

      <div className='w-[1120px] flex justify-center items-center flex-col'>

      <div className='flex w-full gap-2 justify-center items-center'>
          <img className='h-[4rem] w-[4rem] border-[1px]' src={avawatz} alt=''/>
          <span className='text-7xl font-black'>Avawatz</span>
          <button className='py-1 px-2 border-[1px]'>follow</button>
          <button className='text-sm py-1 px-2 border-[1px]'>166</button>
      </div>

      <span className=' mt-2 w-full text-center text-xl font-semibold text-green-500'>Avawatz successfully raised $103,596 from 26 investors on October 1, 2024</span>

      </div>

      </section>


      <footer className='w-full pb-[2rem] flex flex-col items-center justify-start bg-gray-900'>

        <section className='w-[1120px] flex justify-between mt-[4rem]'>

          <div className='w-[20%] h-[20rem] flex flex-col'>
            <img className='w-[50%] h-auto' alt='' src={logof}/>
            <span className='text-gray-400 mt-4 font-semibold opacity-70'>Giving everyone access to early-stage startup investing</span>
            <div className='text-gray-400 opacity-70 mt-4 text-2xl flex gap-2 items-center w-full'><FaFacebook/><FaInstagram/><RiTwitterXLine/><FaTwitter/><FaYoutube/></div>
          </div>

          <div className='w-[20%] h-[20rem] flex flex-col'>
            <span className='text-gray-400 font-bold opacity-70'>For investors</span>
            <div className='h-[1px] bg-gray-400 w-full opacity-70 mt-4'></div>
            <span className='text-white mt-4 font-bold opacity-70'>Why invest</span>
            <span className='text-white mt-1 font-bold opacity-70'>How it works</span>
            <span className='text-white mt-1 font-bold opacity-70'>FAQ</span>
            <span className='text-white mt-1 font-bold opacity-70'>Risk</span>
            <span className='text-white mt-1 font-bold opacity-70'>Private Policy</span>
            <span className='text-white mt-1 font-bold opacity-70'>Accessibility</span>
            <span className='text-white mt-1 font-bold opacity-70'>Cookie preference</span>
            <span className='text-white mt-1 font-bold opacity-70'>Form CRS</span>
          </div>

          <div className='w-[20%] h-[20rem] flex flex-col'>
            <span className='text-gray-400 font-bold opacity-70'>For startups</span>
            <div className='h-[1px] bg-gray-400 w-full opacity-70 mt-4'></div>
            <span className='text-white mt-4 font-bold opacity-70'>Why raise</span>
            <span className='text-white mt-1 font-bold opacity-70'>Learn</span>
            <span className='text-white mt-1 font-bold opacity-70'>FAQ</span>
            <span className='text-white mt-1 font-bold opacity-70'>Instruments</span>
            <span className='text-white mt-1 font-bold opacity-70'>Croud SAFE</span>
            <span className='text-white mt-1 font-bold opacity-70'>Tokenize assets</span>
          </div>

          <div className='w-[20%] h-[20rem] flex flex-col'>
            <span className='text-gray-400 font-bold opacity-70'>Company</span>
            <div className='h-[1px] bg-gray-400 w-full opacity-70 mt-4'></div>
            <span className='text-white mt-4 font-bold opacity-70'>About</span>
            <span className='text-white mt-1 font-bold opacity-70'>General</span>
            <span className='text-white mt-1 font-bold opacity-70'>Event</span>
            <span className='text-white mt-1 font-bold opacity-70'>Contact</span>
            <span className='text-white mt-1 font-bold opacity-70'>We&apos;re hiring!</span>
          </div>

        </section>

        <div className='w-[1120px] h-[1px] opacity-70 bg-gray-400'></div>

        <div className='w-[1120px] h-[6rem] text-white opacity-70 flex justify-between items-center'>
          <div className='flex justify-start text-2xl items-center gap-3'><AiOutlineDollarCircle className='text-4xl'/><div className='font-bold text-2xl'>Refer a startup, get $2,500</div></div>
          <div className='flex justify-end items-center gap-4'>
            <span className='text-gray-400 text-xl font-semibold'>Invest in the app</span>
            <img className='h-[3rem]' src={gpay} alt=''/>
            <img className='h-[3rem]' src={app} alt=''/>
          </div>
        </div>

        <div className='w-[1120px] h-[1px] opacity-70 bg-gray-400'></div>

        <div className='flex w-[1120px] flex-col gap-4 text-sm text-gray-400 mt-4 opacity-70'>
            
          <span>This site (the "Site") is owned and maintained by OpenDeal Inc., which is not a registered broker-dealer. OpenDeal Inc. does not give investment advice, endorsement, analysis or recommendations with respect to any securities. All securities listed here are being offered by, and all information included on this Site is the responsibility of, the applicable issuer of such securities. The intermediary facilitating the offering will be identified in such offering’s documentation.</span>

          <span>All funding-portal activities are conducted by OpenDeal Portal LLC doing business as Republic, a funding portal which is registered with the US Securities and Exchange Commission (SEC) as a funding portal (Portal) and is a member of the Financial Industry Regulatory Authority (FINRA). OpenDeal Portal LLC is located at 149 E 23rd St #1314, New York, NY 10010, please check out background on FINRA’s Funding Portal page.</span>

          <span>All broker-dealer related securities activity is conducted by OpenDeal Broker LLC, an affiliate of OpenDeal Inc. and OpenDeal Portal LLC, and a registered broker-dealer, and member of FINRA | SiPC, located at 1345 Avenue of the Americas, 15th Floor, New York, NY 10105, please check our background on FINRA’s BrokerCheck.</span>

          <span>Certain pages discussing the mechanics and providing educational materials regarding regulation crowdfunding offerings may refer to OpenDeal Broker LLC and OpenDeal Portal LLC collectively as “Republic”, solely for explanatory purposes.</span>

          <span>Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC make investment recommendations and no communication, through this Site or in any other medium should be construed as a recommendation for any security offered on or off this investment platform. Investment opportunities posted on this Site are private placements of securities that are not publicly traded, involve a high degree of risk, may lose value, are subject to holding period requirements and are intended for investors who do not need a liquid investment. Past performance is not indicative of future results. Investors must be able to afford the loss of their entire investment. Only qualified investors, which may be restricted to only Accredited Investors or non-U.S. persons, may invest in offerings hosted by OpenDeal Broker.</span>

          <span>Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC, nor any of their officers, directors, agents and employees makes any warranty, express or implied, of any kind whatsoever related to the adequacy, accuracy or completeness of any information on this Site or the use of information on this site. Offers to sell securities can only be made through official offering documents that contain important information about the investment and the issuers, including risks. Investors should carefully read the offering documents. Investors should conduct their own due diligence and are encouraged to consult with their tax, legal and financial advisors.</span>

          <span>By accessing the Site and any pages thereof, you agree to be bound by the Terms of Use and Privacy Policy. Please also see OpenDeal Broker’s Business Continuity Plan and Additional Risk Disclosures. All issuers offering securities under regulation crowdfunding as hosted by OpenDeal Portal LLC are listed on the All Companies Page. The inclusion or exclusion of an issuer on the Platform Page and/or Republic’s Homepage, which includes offerings conducted under regulation crowdfunding as well as other exemptions from registration, is not based upon any endorsement or recommendation by OpenDeal Inc, OpenDeal Portal LLC, or OpenDeal Broker LLC, nor any of their affiliates, officers, directors, agents, and employees. Rather, issuers of securities may, in their sole discretion, opt-out of being listed on the Platform Page and Homepage.</span>

          <span className='w-full text-center'>Investors should verify any issuer information they consider important before making an investment.</span>

          <span>Investments in private companies are particularly risky and may result in total loss of invested capital. Past performance of a security or a company does not guarantee future results or returns. Only investors who understand the risks of early stage investment and who meet the Republic's investment criteria may invest.</span>

          <span>Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC verify information provided by companies on this Site and makes no assurance as to the completeness or accuracy of any such information. Additional information about companies fundraising on the Site can be found by searching the EDGAR database, or the offering documentation located on the Site when the offering does not require an EDGAR filing.</span>

          <span>To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. Therefore, when you use the Services we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license, passport or other identifying documents.</span>

          <span>Republic and its affiliates are not and do not operate or act as a bank. Certain banking services are provided by BankProv, member FDIC / member DIF. FDIC coverage only applies in the event of bank failure. Digital (crypto) assets and investment products are not insured by the FDIC, may lose value, and are not deposits or other obligations of BankProv and are not guaranteed by BankProv. Terms and conditions apply.</span>

        </div>

        <div className='w-[1120px] h-[1px] my-4 opacity-70 bg-gray-400'></div>

        <div className='w-[1120px] flex justify-between items-center'>
          <span className='text-lg font-semibold text-gray-400 opacity-70'>Made in SF/NYC</span>
          <div className='flex justify-end items-end gap-4'>
            <img className='h-[2rem]' src={ae} alt=''/>
          </div>
        </div>

      </footer>


       {/* Sticky Navbar */}
       <nav
        id="second-navbar"
        className={`w-full flex flex-col justify-center items-center transition-opacity duration-300 ${
          isVisible ? 'fixed top-0 left-0 z-50 bg-white shadow-md opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-auto text-[1.08rem] text-gray-800 flex justify-center items-center w-full border-b-[1px] border-gray-300 h-[4.5rem]">
          <div className="h-full flex justify-between items-center gap-10 w-[1120px]">
            <div className="h-full flex gap-10 justify-between items-center">
              <button className="flex justify-start h-full items-start bg-blue-600">
                <span className="h-[95%] text-blue-600 text-lg font-bold flex justify-center items-center bg-white">
                  Pitch
                </span>
              </button>
              <button className="text-gray-400 hover:text-blue-600 flex justify-start h-full items-start bg-white">
                <span className="h-[95%] text-lg font-bold flex justify-center items-center bg-white">
                  Updates
                </span>
                <span className="flex justify-center items-center h-[95%]">
                  <span className="py-[4px] px-[7px] rounded-md ml-4 flex justify-center items-center bg-gray-100 text-black">
                    45
                  </span>
                </span>
              </button>
            </div>
            <button className="w-[27%] rounded-md py-[0.8rem] opacity-60 text-[1.2rem] font-semibold gap-2 text-gray-200 bg-blue-600 flex justify-center items-center">
              <FaLock />
              <span>Invest in Avawatz</span>
            </button>
          </div>
        </div>

        <div className="mx-auto gap-1 bg-transparent text-sm text-gray-500 flex justify-center items-center w-full border-b-[1px] border-gray-300 h-[2.5rem]">
          <GoAlert className="text-yellow-400" />
          <span>Campaign closed on October 1, 2024. Information displayed may not be up-to-date.</span>
        </div>
      </nav>


      <div className=' flex justify-end items-center gap-4 pr-2 h-[6rem] bg-transparent bottom-0 fixed right-0 z-50 '>
        <button className='bg-blue-700 text-white font-bold py-3 rounded-full flex justify-center items-center gap-2 px-4 text-center'><FaRegQuestionCircle className='text-xl'/> <span>Support</span></button>
        <button className='p-3 bg-white shadow-lg rounded-full'><FaChevronUp className='text-xl text-blue-700'/></button>
      </div>

    </div>
  );
}

export default App;

