import { useState } from 'react';

import './output.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function handleClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <>
      {/*Hero Section*/}
      <section id='hero'>
        {/*Hero Container*/}
        <div className='container max-w-6xl mx-auto px-6 py-12'>
          {/*Logo - Menu Container*/}
          <nav className='flex items-center justify-between font-bold text-white'>
            {/*Hero Logo*/}
            <img src='./logo.svg' alt='' />
            {/*Menu*/}
            <div className='hidden h-10 md:flex md:space-x-8'>
              <div className='group'>
                <a href='#'>About</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              <div className='group'>
                <a href='#'>Careers</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              <div className='group'>
                <a href='#'>Products</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              <div className='group'>
                <a href='#'>Events</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
              <div className='group'>
                <a href='#'>Support</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
            </div>
            {/* todo hamburger button*/}
            <div className='md:hidden'>
              <button
                onClick={handleClick}
                id='menu-btn'
                type='button'
                className={`${
                  isMobileMenuOpen ? 'open z-40' : ''
                } block hamburger md:hidden focus:outline-none`}
              >
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
              </button>
            </div>
          </nav>

          {/* to do mobile menu */}
          <div
            id='menu'
            className={`absolute top-0 bottom-0 left-0 ${
              isMobileMenuOpen ? 'flex' : 'hidden'
            } flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
          >
            <a href='#' className='hover:text-pink-500'>
              About
            </a>
            <a href='#' className='hover:text-pink-500'>
              Careers
            </a>
            <a href='#' className='hover:text-pink-500'>
              Events
            </a>
            <a href='#' className='hover:text-pink-500'>
              Products
            </a>
            <a href='#' className='hover:text-pink-500'>
              Supports
            </a>
          </div>

          <div className='max-w-lg mt-32 mb-32 p-4 text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>
            impressive experiences that deliver
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section id='feature'>
        {/* feature container */}
        <div className='item-container'>
          <img src='./desktop/image-interactive.jpg' alt='' />

          {/*text container */}
          <div className='top-48 pr-0 bg-white md:absolute md:right-9 md:py-20 md:pl-20'>
            <h2 className='max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left'>
              The leader in interactive VR
            </h2>
            <p class='max-w-md text-center md:text-left'>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digitale expriences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      {/* creation section */}
      <section id='creations'>
        {/* creations container */}
        <div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
          {/* creation header */}
          <div className='flex justify-center mb-20 md:justify-between'>
            <h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
              Our creations
            </h2>
            <button className='hidden btn md:block'>See all</button>
          </div>
          {/* items container */}
          <div className='flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8'>
            {/*item 1*/}
            <div className='group item'>
              <img
                src='./desktop/image-deep-earth.jpg'
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              <img
                src='./mobile/image-deep-earth.jpg'
                alt=''
                className='w-full md:hidden'
              />

              {/* item gradient */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>Deep Earth</h5>
            </div>
            {/*item 2*/}
            <div className='group item'>
              <img
                src='./desktop/image-soccer-team.jpg'
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              <img
                src='./mobile/image-soccer-team.jpg'
                alt=''
                className='w-full md:hidden'
              />

              {/* item gradient */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>soccer-team</h5>
            </div>
            {/*item 3*/}
            <div className='group item'>
              <img
                src='./desktop/image-night-arcade.jpg'
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              <img
                src='./mobile/image-night-arcade.jpg'
                alt=''
                className='w-full md:hidden'
              />

              {/* item gradient */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>Night arcade</h5>
            </div>
            {/*item 4*/}
            <div className='group item'>
              <img
                src='./desktop/image-grid.jpg'
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              <img
                src='./mobile/image-grid.jpg'
                alt=''
                className='w-full md:hidden'
              />

              {/* item gradient */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>grid</h5>
            </div>
          </div>

          {/* items container 2 */}
          <div className='flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 mt-10'>
            {/*item 6*/}
            <div className='group item'>
              <img
                src='./desktop/image-from-above.jpg'
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              <img
                src='./mobile/image-from-above.jpg'
                alt=''
                className='w-full md:hidden'
              />

              {/* item gradient */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>from-above</h5>
            </div>
            {/*item 6*/}
            <div className='group item'>
              <img
                src='./desktop/image-pocket-borealis.jpg'
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              <img
                src='./mobile/image-pocket-borealis.jpg'
                alt=''
                className='w-full md:hidden'
              />

              {/* item gradient */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>pocket-borealis</h5>
            </div>
            {/*item 7*/}
            <div className='group item'>
              <img
                src='./desktop/image-curiosity.jpg'
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              <img
                src='./mobile/image-curiosity.jpg'
                alt=''
                className='w-full md:hidden'
              />

              {/* item gradient */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>curiosity</h5>
            </div>
            {/*item 8*/}
            <div className='group item'>
              <img
                src='./desktop/image-fisheye.jpg'
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />

              <img
                src='./mobile/image-fisheye.jpg'
                alt=''
                className='w-full md:hidden'
              />

              {/* item gradient */}
              <div className='item-gradient'></div>

              {/* item text */}
              <h5>fisheye</h5>
            </div>
          </div>
          <div className='flex justify-center mt-10 md:hidden'>
            <button className='btn w-full md:hidden'>See all</button>
          </div>
        </div>
      </section>
      <footer className='bg-black'>
        <div className='container max-w-6xl py-10 mx-auto'>
          <div className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'>
            <div className='flex flex-col items-center space-y-8 md:items-start md:space-y-4'>
              <div className='h-8'>
                <img src='./logo.svg' alt='' className='w-44 md:ml-3' />
              </div>
              <div className='flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
                <div className='h-10 group'>
                  <a href='#'>about</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
                <div className='h-10 group'>
                  <a href='#'>Careers</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
                <div className='h-10 group'>
                  <a href='#'>Events</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
                <div className='h-10 group'>
                  <a href='#'>Products</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
                <div className='h-10 group'>
                  <a href='#'>Support</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-between space-y-4 text-gray-500'>
              {/* ICONS */}
              <div className='flex items-center mx-auto md:mx-0 justify-center space-x-4 md:justify-end'>
                {/*ICON1*/}
                <div className='h-8 group'>
                  <a href='#'>
                    <img src='./icon-facebook.svg' alt='' className='h-6' />
                  </a>
                </div>
                <div className='h-8 group'>
                  <a href='#'>
                    <img src='./icon-twitter.svg' alt='' className='h-6' />
                  </a>
                </div>
                <div className='h-8 group'>
                  <a href='#'>
                    <img src='./icon-pinterest.svg' alt='' className='h-6' />
                  </a>
                </div>
                <div className='h-8 group'>
                  <a href='#'>
                    <img src='./icon-instagram.svg' alt='' className='h-6' />
                  </a>
                </div>
              </div>

              <div className='font-bold'>
                &copy; 2022 Loopstudios. All rights reserverd
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
