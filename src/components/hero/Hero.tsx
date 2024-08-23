import React from 'react';
import image from '../../assests/images/Sveta_Denisiuk.jpg'
import styles from './hero.module.css';
import icon_linkedin from '../../assests/icons/icon-linkedin.svg';
import icon_github from '../../assests/icons/icon-github.svg'

type HeroProps = {
    contactSectionRef: React.RefObject<HTMLDivElement>;
};

const Hero: React.FC<HeroProps> = ({contactSectionRef}) => {

    const handleScrollToContact = () => {
        contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.hero}>
            <div className={styles.about_me}>
                <h1>Hi, I am Sveta Denisiuk.</h1>
                <h2>I am  front-end developer passionate about building accessible and user friendly
                    websites.</h2>
                <div className={styles.contacts}>
                    <button className={styles.contacts_btn} onClick={handleScrollToContact}>
                        <p>Contact me</p>
                        <div className={styles.dot}></div>
                    </button>
                    <div className={styles.wrapper_icon}>
                        <a href="https://www.linkedin.com/in/sveta-denisyuk/" target="_blank" rel="noopener noreferrer">
                            <img src={icon_linkedin} alt='icon linkedin' className={styles.icon}/>
                        </a>
                    </div>
                    <div className={styles.wrapper_icon}>
                        <a href="https://github.com/SvetaDen" target="_blank" rel="noopener noreferrer">
                            <img src={icon_github} alt='icon github' className={styles.icon}/>
                        </a>
                    </div>
                </div>
            </div>

            <img src={image} alt='Sveta Denisiuk'/>

        </div>
    );
};

export default Hero;