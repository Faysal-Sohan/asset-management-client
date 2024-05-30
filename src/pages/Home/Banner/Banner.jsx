import img1 from '../../../assets/Home/Banner1.png'
import img2 from '../../../assets/Home/Banner2.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (

        <Carousel showArrows={false} showStatus={false} showThumbs={false}>
            <div className='relative'>
                <img src="https://i.ibb.co/5R8Hx9M/banner.jpg" alt="" className="w-full h-full rounded-lg" />
                {/* <div className="bg-gradient-to-r from-transparent to-black w-full absolute h-full opacity-80 rounded-lg"></div> */}
                <div className="legend">
                    <h3 className="text-3xl font-bold text-orange-300">Infinite Insights</h3>
                    <p className="text-xl font-medium text-white">Where Ideas Unite and Knowledge Takes Flight</p>
                </div>
            </div>

            <div>
                <img src={img2} />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
    );
};

export default Banner;