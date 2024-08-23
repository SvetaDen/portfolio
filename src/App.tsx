import React, {useRef} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactSection from "./components/contactSection/ContactSection";
import styles from './app.module.css'


function App() {

    const heroRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const contactSectionRef = useRef<HTMLDivElement>(null);

    return (
        <main>
            <Navbar
                heroRef={heroRef}
                projectsRef={projectsRef}
                aboutMeRef={aboutMeRef}
                contactSectionRef={contactSectionRef}
            />
            <div className={styles.container}>
                <div className={styles.heroWrapper} ref={heroRef}>
                    <Hero contactSectionRef={contactSectionRef}/>
                </div>
                <div ref={projectsRef}>
                    <Projects/>
                </div>
                <div ref={aboutMeRef}>
                    <AboutMe/>
                </div>
                <div ref={contactSectionRef}>
                    <ContactSection/>
                </div>
            </div>
        </main>

    );
}

export default App;
