import { motion } from 'framer-motion';

const reveal = {
    from: {
        clipPath:"circle(0%)"
    },
    to: {
        clipPath:"circle(100%)",
        transition: {
            duration:1,
            type: 'tween',
            when:'beforeChildren',
            staggerChildren:.6
        },
    }
}

const PageThree = () => {
    return ( 
        <motion.div className='w-[90%] h-[90%] flex-box relative'
        variants={reveal}
        initial={'from'}
        animate={'to'}
        >
                <div className='w-full lg:w-[60%] h-[70%] lg:h-full flex-box relative'>
                    <div className='w-[70%] md:w-[40%] h-full relative'>
                        <div className='w-[40%] md:w-full h-[70%] absolute top-[20%] right-[-25%] md:right-[-75%] rotate-[10deg]'>
                            <img className='fit w-full h-full opacity-90' src={require('../../images/img-21.jpg')} alt="" loading='lazy'/>
                        </div>
                        <div className='w-[40%] md:w-full h-[70%] absolute top-[20%] left-[-25%] md:left-[-75%] rotate-[-10deg]'>
                            <img className='fit w-full h-full opacity-90' src={require('../../images/img-20.jpg')} alt="" loading='lazy'/>
                        </div>
                        <div className='w-full h-full absolute'>
                            <img className='w-full h-full fit' src={require('../../images/img-19.jpg')} alt="" loading='lazy'/>
                        </div>
                    </div>
                    <motion.div className='w-full h-full absolute top-0 left-0 flex-box' variants={reveal}>
                        <h1 className='voyage text-8xl md:mid-font-size lg:font-size text-red-600'>Fashion</h1>
                    </motion.div>
                </div>
                <div className='w-full h-full absolute top-0 left-0 flex justify-end'>
                    <p className='monument transparent text-3xl lg:text-6xl opacity-50 m-5'>003</p>
                </div>
            </motion.div>
     );
}
 
export default PageThree;