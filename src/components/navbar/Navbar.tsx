import React, {RefObject, useState} from 'react';
import styles from './navbar.module.css';
import {HiOutlineMenu} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

type NavbarProps = {
    heroRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    aboutMeRef: RefObject<HTMLDivElement>;
    contactSectionRef: RefObject<HTMLDivElement>;
};

const Navbar: React.FC<NavbarProps> = ({ heroRef, projectsRef, aboutMeRef, contactSectionRef }) => {

    const[nav,setNav] =useState(false);


    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setNav(false);
    };

    const handleNav = ()=> setNav(nav=> !nav);
    return (
        <div className={styles.navbar}>
                <h2>Sveta Denisiuk.</h2>
            <ul className={styles.nav_menu}>
                <li onClick={() => scrollToSection(heroRef)}>Home</li>
                <li onClick={() => scrollToSection(aboutMeRef)}>About me</li>
                <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                <li onClick={() => scrollToSection(contactSectionRef)}>Contacts</li>
            </ul>
            <div className={styles.hamburger} onClick={handleNav} aria-label="Toggle navigation">
                {!nav ? (<HiOutlineMenu />) : (<AiOutlineClose/>)}

            </div>
            <div className={`${styles.mobile_menu} ${nav? styles.active : ''}`}>
                <ul className={styles.mobile_nav}>
                    <li onClick={() => scrollToSection(heroRef)}>Home</li>
                    <li onClick={() => scrollToSection(aboutMeRef)}>About me</li>
                    <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                    <li onClick={() => scrollToSection(contactSectionRef)}>Contacts</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;