import React, {useState} from 'react';
import styles from './aboutMe.module.css'
import MoreAboutMe from "../moreAboutMe/MoreAboutMe";
import Carousel from "../carousel/Carousel";
import {images} from "../../assests/data/data";


const AboutMe = () => {
    const [showMore, setShowMore] = useState<boolean>(false);

    const toggleMoreAboutMe = () => {
        setShowMore(!showMore);
    };

    return (
        <div className={styles.aboutMe}>
            <h1 className={styles.aboutMe_title}>About me</h1>
            <div className={styles.aboutMe_content}>
                <h2 className={styles.aboutMe_subtitle}>
                    I am a front-end developer based in Tel Aviv.
                    Have Bachelor’s degree in Information Technologies.
                </h2>
                <p className={styles.aboutMe_description}>
                    I am a front-end developer for exciting opportunities. Likes to focus on accessibility when
                    developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow
                    and a bit of Designing. While I am not programming, I enjoy photography and
                    playing chess. Learning more to improve skill.
                </p>
                <button onClick={toggleMoreAboutMe} className={styles.aboutMe_button}>
                    {showMore ? 'Less about me' : 'More about me'}
                </button>
            </div>
            {showMore && (
                <>
                    <MoreAboutMe/>
                    <Carousel images={images}/>
                </>
            )}
        </div>
    );
};

export default AboutMe;