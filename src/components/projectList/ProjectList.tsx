import React from 'react';
import ProjectCard from "../projectCard/ProjectCard";
import styles from './projectList.module.css';
import {dataProjects, TItemProject} from "../data";


const ProjectList = () => {
    return (
        <div className={styles.list}>
            {dataProjects.map((project: TItemProject, index)=>(
                <ProjectCard key={project.id} {...project}/>
            ))}
        </div>
    );
};

export default ProjectList;