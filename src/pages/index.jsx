import React from 'react';
import Header from '@/components/Header'; 
import { useEffect,useState,useRef } from 'react';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';
import Image from 'next/image';
// import { Download } from 'lucide-react';
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Timer5 from '@/components/Countdown';

export default function PreviewPage() {
    const words = ["better", "cute", "beautiful", "modern"];
  const images = [
    {
        image: 'https://i.postimg.cc/3NYncKdb/image3.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/rFgY7tGG/image2.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/NMTznJbL/image4.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/j2bFYHkc/image5.jpg',
        className: 'tall'
    },
    {
        image:'https://i.postimg.cc/rpyyM478/image6.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/PfCxCmJJ/image7.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/vBSJRxwS/image8.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/wT9GWkNT/image9.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/BbLdJZqZ/image10.jpg',
        className: 'tall',
    },
    {
        image: 'https://i.postimg.cc/Sswg76hq/image11.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/8P7YvCgT/image12.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/Qxgf1KnG/image13.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/rFgY7tGG/image2.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/8cjr5MvQ/image14.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/KvTdVYqJ/image15.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/C1K7VvFw/image16.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/66mjBN2g/image17.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/pdW4pJ26/image18.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/3JMn6FDD/image19.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/Cx77Ryrj/image20.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/zf3C3ygr/image21.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/GpSjjFCt/image22.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/gJPCGbx3/image23.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/yx2XzsdH/image24.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/fbYP2q8y/image25.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/nzzvjC9x/image26.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/xCwcfCKt/image27.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/9XLnn7Yd/image28.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/PqLXCHfc/image29.jpg',
        className: 'small'   
    },

    {
        image: 'https://i.postimg.cc/tTtLTv6w/image30.jpg',
        className: 'small'   
    },
]
const router = useRouter();
let showNav = router.query.showNav;
const [isShowNav, setIsShowNav] = useState(showNav === 'true');

useEffect(() => {
  const handlePopstate = () => {
    setIsShowNav(false);
  };

  window.addEventListener('popstate', handlePopstate);

  return () => {
    window.removeEventListener('popstate', handlePopstate);
  };
}, []);

const eventsRef = useRef(null);
const trailerRef = useRef(null);
const aboutRef = useRef(null); // Reference for "JU Rhythm" section

// Scroll to the specified section
const scrollToSection = (sectionRef) => {
  sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
};
  return (
   
    <>
   <NewNavBar
   onEventsClick={() => scrollToSection(eventsRef)} 
   onTrailerClick={() => scrollToSection(trailerRef)} 
   onAboutClick={() => scrollToSection(aboutRef)} 
   />
   <Header />
   
        <section className='mt-auto md:mt-auto '>
          <div className="shadow">

       
          </div>
          
          </section>

          <section className='h-full lg:mt-0 mt-10 lg:w-full w-[550px]'>
          <div className="bg-black bg-dot-white/[0.2] z-50">
  <div className="pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
  
  <div className="">
    <div className="h-[200px] w-full lg:mt-0 -mt-10 text-white text-center text-3xl hover:scale-100 hover:shadow text-white">
      {/* <a>It Begins</a> */}

      <Timer5/>
                          
    </div>
  </div>
  
  <div  className="relative" id="home">
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 lg:mt-4 mt-[530px]">
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 text-justify-content  mx-auto">
          <div ref={aboutRef} className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
            <h1 className=" w-full md:w-[500px] lg:w-[700px] text-white text-4xl md:text-5xl xl:text-6xl pb-10" style={{fontFamily:"Customfont"}}>
              #Build&nbsp;<FlipWords className='text-cyan-50' words={words} />
              <br />
              your idea<span className="text-primary text-white">'24</span>
            </h1>
            
             
            <div className='lg:ml-0 ml-72 -mt-40 lg:-mt-20'>
            <Image
                src="/VEGETA.gif"
                alt="test"
                width={300} // Width for large screens
                height={300} // Height for large screens
                className="w-[250px] h-[250px] lg:w-[500px] lg:h-[400px] bg-blend-difference"
                style={{
                  backgroundColor: "transparent",
                  opacity: "1",
                  backgroundBlendMode: "inherit",
                }}
              />
            </div>
          </div>
          
          <h1 className="lg:-mt-32 -mt-12 text-white sm:text-4xl md:text-5xl xl:text-6xl subtle-glowing-text " style={{fontFamily:"Customfont", letterSpacing:"5px"}}>
            {/* <Cover className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white'> */}
              JU Innov8<span className="text-primary text-white">'24</span>
            {/* </Cover> */}
          </h1>
          
          <h4 className="mt-8 text-white dark:text-gray-450 text-lg md:text-xl text-align:left">
            Board on an extraordinary convergence of technology, culture, sports and media, presented with pride by JECRC University in the form of JU Rhythm '24! JU RHYTHM: Beats of Imagination is one of the biggest fests of Rajasthan. This year's spectacle transcends the conventional CYBER PUNK experience; it is a commitment to delivering unparalleled excitement and innovation resonating across the nation. 
            JU RHYTHM is not just a fest; it is a promise of excellence and a showcase of pure energy. Prepare yourself for an unforgettable experience that goes beyond the ordinary. Join us in this unparalleled festivity where promises materialize into reality, and innovation knows no bounds.
          </h4>
          
          <div className='flex justify-between mt-10 text-align:left'>
            <div className="flex space-x-2">
              <svg className="w-6 h-6 text-[#FCEE09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-[#FCEE09] text-lg">20-22 September</span>
            </div>
            
            <div className="flex space-x-2">
              <svg className="w-6 h-6 text-[#FCEE09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                <circle cx="12" cy="11" r="4"></circle>
              </svg>
              <span className="text-[#FCEE09] text-lg">JECRC UNIVERSITY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </section>
    

       
          {/*EVE
       NTS*/ }
          {/* <div className="bg-black bg-grid-white/[0.2] bg-grid-black/[0.2] z-50">
      <div className="pointer-events-none inset-0  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        <div ref={eventsRef} className=" bg-dot-white/[0.2] z-50" style={{backgroundColor:"black"}}>
        <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className='flex flex-col text-center justify-center p-16 -mt-2.5'>
         
          <div className="flex justify-center items-center">
  <h1 
    className="subtle-glowing-text mb-24 mt-10 w-full text-center text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl" 
    style={{ fontFamily: "CustomFont", letterSpacing: "5px" }}
  >
    Events
  </h1>
</div>

                    <div className=' grid  md:flex justify-evenly '>
                                {/*Seperate cards for each Event Domain */} 


                                <div className='my-2 mx-2'>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                <a href='/sports'>
                                <Image src='https://i.postimg.cc/CLxTT1jg/Sports.png' className="p-1 rounded-[22px] transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </BackgroundGradient>
                                </div>


                                <div className='my-2 mx-2'>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                <a href='/hardware'>
                                <Image src='https://i.postimg.cc/h4rW5xQs/Cultural.png' className="p-1 rounded-[22px] transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </BackgroundGradient>
                                </div>
                               
                                
                               <div className='my-2 mx-2'>
                               <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                <a href='/technical'>
                                <Image src='https://i.postimg.cc/dVhb3xHN/Technical.png' className="p-1 rounded-[22px]  transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </BackgroundGradient>
                                </div>

                               
                                
                                
                                {/* <div>
                                <a href='/Media'>
                                <Image src='https://i.postimg.cc/jd3VsbXJ/Media.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div> */}  {/*extra space from og*/}

                               

                            </div>
                            
                            </div>
                </div> 
     
          
          {/** Gallery */}
          <section ref={trailerRef} className='p-10 md:p-20 bg-black bg-dot-white/[0.2] h-[1000px] lg:h-[700px] '>
          <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="md:px-12 xl:px-6">         
                 <div className="relative pt-12 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="subtle-glowing-text text-white sm:text-xl md:text-6xl xl:text-7xl" style={{fontFamily:"Customfont",letterSpacing:"5px"}}>
                          Trailer JU Innov8 2024
                          </h1>

                    </div>
                </div>
                </div>
                <div className="grid-wrapper mt-10" >
                <iframe
  className="w-[350px] lg:w-[700px] mx-auto aspect-video self-stretch h-[400px]"
  src="https://www.youtube.com/embed/nKrJw1DvRso?si=mXgeNdIilsjLgUOc"
  frameBorder="0"
  title="Product Overview Video"
  aria-hidden="true"
/>

                </div> 

            </section>

           
          <Footer/>        
      
    </>
    
  );
}