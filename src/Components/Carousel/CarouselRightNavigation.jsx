import { useEffect,useState } from "react";
import {useSwiper} from 'swiper/react';
import  RightArrow from "../../assets/rightArrowSvg.svg?react";
import styles from './Carousel.module.css';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd);
        },[])
    })

  return (
    <div className={styles.arrowright}>
        {!isEnd && <RightArrow style={{fill:'#34c94b'}} onClick={()=> swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation;