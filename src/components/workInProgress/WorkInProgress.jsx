import React from 'react';
import './work-in-progress.scss';
import mysa from '../../img/mysa.jpg';
import twitter from '../../img/twitter.jpg';

const WorkInProgress = () => {
  return (
    <div className='wip'>
      <div className="wip__top">
        <h1 data-aos='fade-up' data-aos-duration="1000" data-aos-offset="-200" data-aos-anchorPlacement='top' className='wip__title'>WORK<br/> IN PROGRESS</h1>
      </div>
      <div data-aos='fade-up' data-aos-duration="1000" data-aos-offset="-600" data-aos-anchorPlacement='top' className="wip__bottom-left">
        <a href="https://github.com/kevinkotcherga/mysa-ecommerce" target="_blank" rel="noreferrer" className='wip__link'>
          <img src={mysa} alt="" className='wip__img'/>
        </a>
      </div>
      {/* <div className='right'>
        <div data-aos='fade-up' data-aos-duration="1000" data-aos-offset="-600" data-aos-anchorPlacement='top' className="wip__bottom-right">
          <a href="https://github.com/kevinkotcherga/twitter-clone-react" target="_blank" rel="noreferrer" className='wip__link'>
            <img src={twitter} alt="" className='wip__img'/>
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default WorkInProgress
