import React from 'react';
import Slider from 'react-slick';
import {CarouselProps} from "../../assests/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './carousel.module.css';


const Carousel: React.FC<CarouselProps> = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <p className={styles.carouselParagraph}>
                My name is Svetlana, and I’m a front-end developer based in Israel. I love coding and constantly strive
                to learn new things to grow in this ever-evolving field. I also have a special travel bug — exploring
                new places that brings fresh inspiration into my life. When I'm not busy with code or planning my next
                adventure, I’m usually spending time with my husband Michael and kitten , Pita, who is a great (and
                sometimes distracting) companion. My focus is on JavaScript and React, and I'm excited to keep improving
                my skills.
            </p>
            <div className={styles.sliderContainer}>
                <Slider {...settings} className={styles.slider}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={image.src} alt={image.alt} className={styles.image_carousel}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </>

    );
};


export default Carousel;