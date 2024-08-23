import React from 'react';
import styles from './aboutMe.module.css'

const AboutMe = () => {
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
                <button className={styles.aboutMe_button}>More about me</button>
            </div>
        </div>
    );
};

export default AboutMe;