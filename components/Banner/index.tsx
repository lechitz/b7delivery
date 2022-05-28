import styles from './styles.module.css';

import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper";
import 'swiper/css';

export const Banner = () => {
    return (
        <div className={styles.container}>
            <Swiper
                slidesPerView={1}                                                                                       //Quantidade de slide a ser exibido de cada vez
                autoplay={{
                    delay: 2500,                                                                                        //delay entre banners
                    disableOnInteraction: false,                                                                        //manter banner quando selecionado
                }}
                modules={[Autoplay]}
                loop={true}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.slide}><img src="/tmp/banner1.png"></img></SwiperSlide>
                <SwiperSlide className={styles.slide}><img src="/tmp/banner2.png"></img></SwiperSlide>

            </Swiper>
        </div>
    );
}