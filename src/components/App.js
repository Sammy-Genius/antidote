import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Header from './Header';
import AntidoteSection from './Info';
import Explore from './Explore';
import Contact from './Contact';
import Preloader from './Preloader';

function App() {

  return (
    <Router>
    <div className="App w-screen h-screen">
      <div className="h-full w-full">
        <Header/>
        <div className='h-[70%] flex-box overflow-x-hidden'>
          <Routes>
            <Route path='/' element={<PageOne />}/>
            <Route path='/PageTwo' element={<PageTwo/>}/>
            <Route path='/PageThree' element={<PageThree/>}/>
          </Routes>
        </div>
        <div className='calc-height flex justify-center lg:justify-end lg:pr-[8%]'>
          <div className='w-full lg:w-[20%] h-[35%] flex translate-y-[-20%] lg:translate-y-0'>
            <div className='w-[33.33%] h-full'>
              <Link to="/" className='text-3xl lg:text-2xl voyage flex justify-center font-black'>first</Link>
            </div>
            <div className='w-[33.33%] h-full flex items-center justify-center lg:justify-start'>
              <Link to="/PageTwo" className='text-3xl lg:text-2xl voyage font-black'>second</Link>
            </div>
            <div className='w-[33.33%] h-full flex items-start justify-center lg:items-end'>
              <Link to='/PageThree' className='text-3xl voyage font-black'>third</Link>
            </div>
          </div>
        </div>
      </div>
      <AntidoteSection/>
      <Explore/>
      <Contact/>
      <Preloader/>
    </div>
    </Router>
  );
}

export default App;
