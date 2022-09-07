import gsap from 'gsap';
import {Power2} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react';
gsap.registerPlugin(ScrollTrigger);


const Info = () => {

    const circleRef = useRef(null);
    const clipRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(circleRef.current, { opacity:1, clipPath: 'circle(100%)', duration:1, ease: Power2.easeInOut, scrollTrigger: {
          trigger: clipRef.current,
          start:'top top',
          end: '+=400',
          pin:clipRef.current,
          scrub:4
        }})
      }, [])

    return ( 
        <>
            <div className="h-full w-full relative" id="info" ref={clipRef}>
                <div className='w-full h-full p-[2%] absolute top-0 left-0'>
                    <h1 className='text-xl md:text-3xl lg:text-4xl voyage italic'>Antidote</h1>
                    <h1 className='text-2xl md:text-4xl lg:text-7xl voyage'>PHOTOGRAPHY & <br /> CREATIVE AGENCY</h1>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex flex-col lg:flex-row justify-center items-center'>
                    <p className='voyage text-2xl md:text-3xl leading-[35px] md:leading-[40px] lg:leading-[60px] block w-[60%] h-auto text-center translate-y-[-60%] md:translate-y-[-60%] lg:translate-y-0'>Telling stories through our lenses <br /> We display the art of photography <br /> <span>one shoot at a time</span></p>
                    <p className='monument verySmall block w-[40%] leading-[18px] lg:hidden absolute right-[3%] bottom-[25%]'>“There is only you and your camera. The limitations in your photography are in yourself, for what we see is what we are.”
                        – Ernst Haas</p>
                </div>
                <div className='w-full h-full absolute top-0 left-0'>
                    <div className='w-full md:w-[30%] md:h-[30%] absolute right-0 bottom-0 flex-box'>
                        <p className='monument small w-[60%] leading-[15px] hidden lg:block translate-y-0'>“There is only you and your camera. The limitations in your photography are in yourself, for what we see is what we are.”
                        – Ernst Haas</p>
                    </div>
                </div>
                <div className='absolute w-full h-full top-0 left-0 flex justify-end items-end'>
                    <img className='w-[70%] md:w-[55%] h-[80%] md:h-[85%] lg:h-full gray opacity-[0.2]' src={require('../images/img-10.png')} alt="" />
                </div>
                <div className="w-full h-full bg-black absolute top-0 left-0 clip-circle opacity-0 z-10" ref={circleRef}>
                    <h1 className='text-white text-4xl md:text-7xl voyage mt-[10%] relative z-10'>
                        <span className='text-green-300 text-5xl md:text-8xl transparent italic opacity-[0.6]'>Explore- </span><span className='absolute left-[45%] md:left-[45%] lg:left-[25%]'>Art 
                        <span className='italic cancel'> is
                        </span> <br /> Life</span>
                    </h1>
                    <div className='absolute w-full h-full top-0 left-0 flex'>
                        <div className='w-[50%] h-full'>
                            <img className='hidden lg:block w-[30%] h-[50%] rotate-[10deg] opacity-30' src={require('../images/img-8.png')} alt="" />
                        </div>
                        <div className='w-[50%] h-full flex flex-col justify-between items-end'>
                            <img className='w-[100%] lg:w-[70%] h-[50%] lg:h-full opacity-60 lg:opacity-70' src={require('../images/img-7.jpg')} alt="" />
                            <img className='w-[100%] lg:w-[36%] h-[40%] lg:h-[80%] opacity-20 gray block lg:hidden' src={require('../images/img-6.png')} alt="" />
                        </div>
                        <div className='w-full h-full absolute top-0 left-0 flex lg:justify-center items-end z-10'>
                            <img className='w-[50%] h-[40%] lg:w-[36%] lg:h-[80%] gray opacity-20' src={require('../images/img-6.png')} alt="" />
                        </div>
                        <div className='w-full h-full absolute top-0 left-0 flex-box'>
                            <p className='small text-green-300 voyage opacity-80'>“Inspiration exists, <br /> but it has to find you  <br />working.”
                            ― Pablo Picasso</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex items-end'>
                    <img className='w-[50%] h-[50%] md:h-[50%] lg:w-[20%] lg:h-[50%] opacity-80 gray absolute left-[-5%]' src={require('../images/img-12.png')} alt="" />
                </div>
            </div>
        </>
     );
}
 
export default Info;