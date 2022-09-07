import gsap from 'gsap';
import {Power2} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react';
gsap.registerPlugin(ScrollTrigger);

const Discover = () => {

    const recRef = useRef(null);
    const pinRec = useRef(null);
    const imgColor = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(recRef.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration:1, ease: Power2.easeInOut, scrollTrigger: {
          trigger: pinRec.current,
          start:'top top',
          end: '+=400',
          pin:pinRec.current,
          scrub:4,
          pinSpacing:true
        }})
      }, [])
    
      useEffect(() => {
        const tl = gsap.timeline();
        tl.to(imgColor.current, { filter: 'grayscale(0%)', bottom: '0%', duration:1, ease: Power2.easeInOut, scrollTrigger: {
          trigger: pinRec.current,
          start:'top top',
          end: '+=400',
          pin:pinRec.current,
          scrub:4,
          pinSpacing:true
        }})
      }, [])
      
    return ( 
        <>
            <div className="h-full w-full relative bg-black graph" id="art" ref={pinRec}>
                <div className='w-full h-full absolute top-0 left-0'>
                  <img className='w-[50%] h-[40%] lg:w-[36%] lg:h-[80%] opacity-30' src={require('../images/img-9.jpg')} alt="" />
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex justify-end'>
                  <img className='w-[50%] h-[40%] lg:w-[36%] lg:h-[80%] opacity-30 gray rotate-[180deg]' src={require('../images/img-9.jpg')} alt="" />
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex-box'>
                  <img className='w-[400px] h-[500px] gray z-10 absolute opacity-80' src={require('../images/img-4.png')} alt="" ref={imgColor}/>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex justify-center'>
                  <p className='text-white text-4xl text-center md:text-6xl lg:text-8xl voyage mt-[5%]'><span className='text-green-300 opacity-60 cancel italic'>Discover</span> the art world</p>
                </div>
                <div className='bg-[#f2f3f7] clip-rec absolute w-full h-full top-0 left-0 graph' ref={recRef}>
                  <div className='w-full h-full absolute'>
                      <div className='w-full h-[50%] flex justify-between'>
                        <img className='w-[30%] h-[40%] md:h-[50%] lg:w-[20%] lg:h-full rotate-180 opacity-80 gray' src={require('../images/img-11.png')} alt="" />
                        <h1 className='voyage text-4xl md:text-6xl lg:text-7xl text-center self-center'>Feed your eyes with the <br /> beauty of art</h1>
                        <img className='w-[30%] h-[40%] md:h-[50%] lg:w-[20%] lg:h-full rotate-180 opacity-80 gray' src={require('../images/img-11.png')} alt="" />
                      </div>
                      <div className='w-full h-[50%]'></div>
                  </div>
                </div>
            </div>
        </>
     );
}
 
export default Discover;