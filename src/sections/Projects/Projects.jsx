import React from "react";
import styles from './ProjectsStyles.module.css'
import mask from '../../assets/facemask.png';
import movie from '../../assets/movie.png';

import ProjectsCard from "../../common/ProjectsCard";

function Projects(){
    return (
        <section id='projects' className={styles.container}>
            <h1 id='projects' className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectsCard src={mask} link={'https://github.com/Itstheadithya/Facemask-detection'}
                    h3="Mask-Man"
                    p='Fce-Mask-Detection-Master'
                />

                <ProjectsCard src={movie} link={'https://github.com/Itstheadithya/recommendationsystem.github.io'}
                    h3="Way2Watch"
                    p='Movie Recommendation System'
                />
            </div>
        </section>
    );
}

export default Projects;