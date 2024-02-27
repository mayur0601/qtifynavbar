import { useEffect } from 'react';
import styles from './Carousel.module.css';
// import Swiper from 'swiper';
import CarouselLeftNavigation from './CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation';
import {Swiper,SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const Carousel = ({data,renderComponent}) => {

  const Controls = () => {
    const swiper = useSwiper();

    useEffect(()=>{
      swiper.slideTo(0,1);
    },[data]);

    return <></>;
  }
  return (
    <div className={styles.wrapper}>
        <Swiper 
        style={{padding:"0px 10px"}}
        initialSlide={0}
        slidesPerView={7}
        spacebetween={20}
        modules={[Navigation]}
        allowTouchMove
        >
        <Controls/>
        <CarouselLeftNavigation/>
        <CarouselRightNavigation className={styles.arrowright}/>
        {
          data?.map(ele=>{
            return (
              <div key={ele.id}>
              <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
              </div>
            )
          })
        }
       
        </Swiper>
    </div>
  )
}

export default Carousel