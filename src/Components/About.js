import React from 'react';
import AboutBackground from '../img/about-background.png';
import AboutBackgroundImage from '../img/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt='' />
        </div>

        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt='' />
        </div>

        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An Important Part Of A Balanced Diet
            </h1>

            <p className='primary-text'>
            Lorem ipsum dolor sit amet. Aut nihil officiis ut temporibus iusto hic rerum veritatis ea voluptatem quasi et cupiditate nihil quo nihil consectetur? Et quaerat doloremque ut sapiente consequuntur et odio dolores. Rem dolores totam et culpa commodi qui eveniet provident aut cumque impedit quo inventore facilis?
            </p>

            <p className='primary-text'>
            Lorem ipsum dolor sit amet. Aut nihil officiis ut temporibus iusto hic rerum veritatis ea voluptatem quasi et cupiditate nihil quo nihil consectetur? Et quaerat doloremque ut sapiente consequuntur et odio dolores. Rem dolores totam et culpa commodi qui eveniet provident aut cumque impedit quo inventore facilis?
            </p>

            <div className='about-button-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill />Watch Video</button>
            </div>
        </div>

    </div>
  )
}

export default About;