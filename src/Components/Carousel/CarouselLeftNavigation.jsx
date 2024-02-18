import { useEffect,useState } from "react";
import {useSwiper} from 'swiper/react';
import  LeftArrow from "../../assets/leftArrowSvg.svg?react";
import styles from './Carousel.module.css';

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginnig] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBeginnig(swiper.isBeginning);
        },[])
    })

  return (
    <div className={styles.arrowleft}>
        {!isBeginning && <LeftArrow style={{fill:'#34c94b'}} onClick={()=> swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation