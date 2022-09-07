import gsap from 'gsap';
import {Power4} from 'gsap';
import {useRef, useEffect} from 'react';

const Preloader = () => {

    const preLoad = useRef(null);
    const moveUp = useRef(null);
    const showImg = useRef(null);
    const box = useRef(null);
    const boxTwo = useRef(null);
    const textOne = useRef(null);
    const textTwo = useRef(null);
    const textThree = useRef(null);
    const textFour = useRef(null);
    const textFive = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        setTimeout(() => {
            tl.to(moveUp.current, {y:-100, scale:0, duration:1.8, ease:Power4.easeInOut})
              .to(showImg.current, {y:0, scale:1, duration:1, ease:Power4.easeInOut})
              .to(box.current, {clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration:1.5, ease: "power2.out"}, "+=1.3")
              .to(boxTwo.current, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration:1.5, ease: "power2.out"}, "+=.3")
              .to(boxTwo.current, {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', duration:1.5, ease: "power2.out"}, "+=.3")
              .to(textOne.current, {scale:1,opacity:1, duration:.4, ease: "power2.out"})
              .to(textOne.current, {scale:0,opacity:0, duration:.4, ease: "power2.out"})
              .to(textTwo.current, {scale:1,opacity:1, duration:.4, ease: "power2.out"})
              .to(textTwo.current, {scale:0,opacity:0, duration:.4, ease: "power2.out"})
              .to(textThree.current, {scale:1,opacity:1, duration:.4, ease: "power2.out"})
              .to(textThree.current, {scale:0,opacity:0, duration:.4, ease: "power2.out"})
              .to(textFour.current, {scale:1,opacity:1, duration:.4, ease: "power2.out"})
              .to(textFour.current, {scale:0,opacity:0, duration:.4, ease: "power2.out"})
              .to(textFive.current, {scale:1,opacity:1, duration:.4, ease: "power2.out"})
              .to(textFive.current, {scale:0,opacity:0, duration:.4, ease: "power2.out"})
              .to(preLoad.current, {clipPath:'circle(0%)', duration:.4, ease: "power2.out"}, "+=.6")
            }, 3000)

    },[])

    return ( 
        <>
            <div className='w-full h-full fixed top-0 left-0 bg-black clip b-radius flex-box z-10 pointer-events-none' ref={preLoad}>
                <div className='w-[80%] md:w-[50%] lg:w-[20%] h-[50%] bg-[#0abde3] flex-box clip-up' ref={box}>
                    <img className='w-[90%] lg:w-[80%] h-full scale-0 translate-y-20' src={require('../images/img-23-remove.png')} alt="" ref={showImg} loading="lazy"/>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-end items-center'>
                    <img className='w-[70%] h-[50%] md:w-[30%] md:h-[40%] lg:w-[20%] lg:h-[60%] translate-y-50' src={require('../images/img-23-remove.png')} alt="" ref={moveUp} loading="lazy"/>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex-box'>
                    <div className='w-[80%] md:w-[50%] lg:w-[20%] h-[50%] clip-down' ref={boxTwo}>
                        <img className='w-full h-full fit' src={require('../images/img-21.jpg')} alt=""/>
                    </div>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-between'>
                    <div className='w-full h-[20%] lg:h-[15%] flex flex-col items-start justify-center lg:justify-start lg:flex-row lg:items-center pl-5'>
                        <h1 className='voyage text-3xl lg:text-7xl text-red-600 lg:text-white deep'>antidote.</h1>
                        <p className='text-white monument block w-[70%] lg:hidden small mt-5'> Antidote is a photography and creative agency based in <br /> Airport City, Accra</p>
                    </div>
                    <div className='w-full h-[30%] flex justify-end items-center pr-5'>
                        <p className='text-white monument lg:block hidden w-[20%] small'> Antidote is a photography and <br /> creative agency based in <br /> Airport City, Accra</p>
                    </div>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex-box'>
                    <h1 className='text-red-600 transparent absolute opacity-0 voyage text-5xl lg:text-7xl scale-0' ref={textOne}>This</h1>
                    <h1 className='text-red-600 transparent absolute opacity-0 voyage text-5xl lg:text-7xl scale-0' ref={textTwo}>is</h1>
                    <h1 className='text-red-600 transparent absolute opacity-0 voyage text-5xl lg:text-7xl scale-0' ref={textThree}>the future</h1>
                    <h1 className='text-red-600 transparent absolute opacity-0 voyage text-5xl lg:text-7xl scale-0' ref={textFour}>of</h1>
                    <h1 className='text-red-600 transparent absolute opacity-0 voyage text-5xl lg:text-7xl scale-0' ref={textFive}>Photography</h1>
                </div>
            </div>
        </>
     );
}
 
export default Preloader;