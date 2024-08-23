import React from 'react';
import styles from './projects.module.css'
import ProjectList from "../projectList/ProjectList";

const Projects = () => {
    return (
        <div className={styles.projects}>
            <header className={styles.projects_header}>
                <h1>Featured Projects</h1>
                <h2>Here are some of the selected projects that showcase my passion for front-end development.</h2>
            </header>
            <ProjectList/>
        </div>
    );
};

export default Projects;