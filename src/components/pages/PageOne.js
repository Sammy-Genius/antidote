import { motion } from 'framer-motion';

const reveal = {
    from: {
        opacity:0,
        y:50,
        scale:0
    },
    to: {
        opacity:1,
        y:0,
       scale:1,
        transition: {
            duration:.6,
            type: 'tween',
        }
    }
}

const PageOne = () => {

    return (  
        <>
            <div className='w-[90%] h-[90%] flex-box relative clip'>
                <motion.div className='w-full lg:w-[60%] h-[70%] lg:h-full flex-box relative'
                variants={reveal}
                initial={'from'}
                animate={'to'}
                >
                    <div className='w-[70%] md:w-[40%] h-full relative'>
                        <div className='w-[40%] md:w-full h-[70%] absolute top-[20%] right-[-25%] md:right-[-75%] rotate-[10deg]'>
                            <img className='fit w-full h-full opacity-90' src={require('../../images/img-1.jpg')} alt="" loading='lazy'/>
                        </div>
                        <div className='w-[40%] md:w-full h-[70%] absolute top-[20%] left-[-25%] md:left-[-75%] rotate-[-10deg]'>
                            <img className='fit w-full h-full opacity-90' src={require('../../images/img-2.jpg')} alt="" loading='lazy'/>
                        </div>
                        <div className='w-full h-full absolute'>
                            <img className='w-full h-full fit' src={require('../../images/img-3.jpg')} alt="" loading='lazy'/>
                        </div>
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 flex-box'>
                        <h1 className='voyage text-8xl md:mid-font-size lg:font-size text-red-600'>antidote</h1>
                    </div>
                </motion.div>
                <div className='w-full h-full absolute top-0 left-0 flex justify-end'>
                    <p className='monument transparent text-3xl lg:text-6xl opacity-50 m-5'>001</p>
                </div>
            </div>
        </>
    );
}
 
export default PageOne;
