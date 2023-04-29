import React from 'react';
import ProfilePic from '../img/john-doe-image.png';
import {AiFillStar} from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>

            <h1 className='primary-heading'>
                What They Are Saying
            </h1>

            <p className='primary-text'>
            Lorem ipsum dolor sit amet. Et nulla voluptatibus qui nihil quam et quam dolores. Qui mollitia illo et ducimus doloribus et excepturi nisi.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt='' />
            <p>
            Lorem ipsum dolor sit amet. Ut nobis eveniet et soluta esse et facere blanditiis At voluptate quisquam aut odit magnam. Qui maiores laborum a distinctio laborum et voluptas quam. Est dolorem dolores qui autem tenetur hic asperiores asperiores ut quia excepturi. Aut ducimus repellendus qui fugit commodi ex quia eius sit iusto omnis qui veniam dolor.
            </p>

            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonials;