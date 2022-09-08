const Header = () => {
    return ( 
        <>
            <header className='h-[10%] lg:h-[15%] flex justify-center'>
                <div className="w-full lg:w-[90%] h-full flex justify-between items-center">
                    <a href="#info" className="voyage text-black font-bold lg:font-normal text-3xl lg:text-6xl ml-5 mr-5 lg:hover:opacity-60">Info</a>
                    <a href="#art" className="voyage text-black  font-bold lg:font-normal text-3xl lg:text-6xl ml-5 mr-5 lg:hover:opacity-60">the art</a>
                </div>
            </header>
        </>
     );
}
 
export default Header;