import React from 'react';
import PickMeals from '../img/pick-meals-image.png';
import ChooseMeals from '../img/choose-image.png';
import DeliveryMeals from '../img/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Vel ratione exercitationem qui sunt voluptas quo minus esse. In praesentium recusandae qui ipsam perferendis non explicabo debitis in possimus veniam eos voluptatibus voluptas. Aut eaque neque et earum doloremque in deserunt distinctio.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Vel ratione exercitationem qui sunt voluptas quo minus esse. In praesentium recusandae qui ipsam perferendis non explicabo debitis in possimus veniam eos voluptatibus voluptas. Aut eaque neque et earum doloremque in deserunt distinctio.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Vel ratione exercitationem qui sunt voluptas quo minus esse. In praesentium recusandae qui ipsam perferendis non explicabo debitis in possimus veniam eos voluptatibus voluptas. Aut eaque neque et earum doloremque in deserunt distinctio.",
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet. Vel blanditiis dignissimos ea architecto explicabo et perferendis delectus sed saepe consequuntur aut dolorem quaerat. Est modi ipsa a iste reprehenderit et maiores laudantium et doloribus vero ut iste fugiat. Est fugit excepturi ea illo rerum et exercitationem dignissimos. Est adipisci dolorem eum laboriosam architecto in sequi accusantium.
            </p>
        </div>

        <div className='work-section-bottom'>
            {
                workInfoData.map((data) => (
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt='' />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Work;