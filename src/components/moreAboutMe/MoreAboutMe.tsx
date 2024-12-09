import React from 'react';
import styles from './moreAboutMe.module.css';


const MoreAboutMe = () => {
    return (
        <div className={styles.moreAboutMe}>
            <h1 className={styles.aboutMe_title}>My Skills</h1>
            <section className={styles.moreAboutMeContent}>
                <div className={styles.skill}>HTML</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>JavaScript</div>
                <div className={styles.skill}>React</div>
                <div className={styles.skill}>Figma</div>
            </section>
        </div>
    );
};

export default MoreAboutMe;