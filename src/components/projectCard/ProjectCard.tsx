import React from 'react';
import styles from './projectCard.module.css';
import {TItemProject} from '../data';
import {MdArrowOutward} from "react-icons/md";
import icon_github from '../../assests/icons/icon-github.svg';


const ProjectCard = ({id, image, title, description,year,role}:TItemProject) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.projectCard_imageWrapper}>
                <img src={image} alt={title} className={styles.projectCard_image}/>
            </div>

            <div className={styles.projectCard_details}>
                <div className={styles.projectCard_info}>
                    <h2 className={styles.projectCard_title} >{title}</h2>
                    <p className={styles.projectCard_description}>{description}</p>
                </div>
                <div className={styles.projectCard_additionalInfo}>
                    <h3 className={styles.projectCard_additionalInfoTitle}>Project info</h3>
                    <div className={styles.projectCard_additionalInfoItem}>
                        <p>Year</p>
                        <p className={styles.projectCard_additionalInfoValue}>{year}</p>
                    </div>
                    <div className={styles.projectCard_additionalInfoItem}>
                        <p>Role</p>
                        <p className={styles.projectCard_additionalInfoValue}>{role}</p>
                    </div>

                </div>
                <div className={styles.projectCard_links}>
                    <button className={styles.projectCard_button}>
                        Live Demo
                        <MdArrowOutward size="24px"/>
                    </button>
                    <button className={styles.projectCard_button}>
                        See on Github
                        <img src={icon_github} alt="icon github"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;