import gsap from 'gsap';
import {Power2} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

    const clipEnd = useRef(null);
    const jeansRef = useRef(null);


    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(jeansRef.current, { opacity:0, scale:0.5, duration:1, ease: Power2.easeInOut, scrollTrigger: {
        trigger: clipEnd.current,
        start:'top top',
        end: '+=200',
        pin:clipEnd.current,
        scrub:4,
        pinSpacing:true
        }})
    }, [])

    return ( 
        <>
            <div className='w-full h-full relative bg-[#f2f3f7] graph' ref={clipEnd}>
                <div className='w-full h-full absolute top-0 left-0 flex justify-center'>
                    <img className='w-[400px] h-[300px] opacity-80 scale-100' src={require('../images/img-5.png')} alt="" ref={jeansRef}/>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-[50%] h-full flex flex-col justify-center items-center'>
                        <h1 className='text-black voyage text-5xl lg:text-9xl'>Get in touch</h1>
                        <div className='w-[90%] h-auto flex-box'>
                            <a className='text-black voyage ml-5 text-2xl' href="">Twitter</a>
                            <a className='text-black voyage ml-5 text-2xl' href="">Instagram</a>
                            <a className='text-black voyage ml-5 text-2xl' href="">Mail</a>
                        </div>
                    </div>
                    <div className='w-full lg:w-[50%] h-full flex-box'>
                        <div className='w-full h-full lg:w-[80%] lg:h-[80%] flex'>
                            <div className='w-full lg:w-[50%] h-full'>
                                <img className='w-full h-full fit' src={require('../images/img-15.jpg')} alt="" />
                            </div>
                            <div className='w-full lg:w-[50%] h-full'>
                                <div className='w-full h-[50%]'>
                                    <img className='w-full h-full fit' src={require('../images/img-14.jpg')} alt="" />
                                </div>
                                <div className='w-full h-[50%]'>
                                    <img className='w-full h-full fit' src={require('../images/img-13.jpg')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;