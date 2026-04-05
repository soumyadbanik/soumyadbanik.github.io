import React from 'react';
import Hero from '../components/Hero';
import ResearchStatement from '../components/ResearchStatement';
import ResearchExperience from '../components/ResearchExperience';
import IndustryExperience from '../components/IndustryExperience';
import Projects from '../components/Projects';
import TechnicalReports from '../components/TechnicalReports';
import Education from '../components/Education';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Projects />
            <ResearchStatement />
            <ResearchExperience />
            <IndustryExperience />
            <TechnicalReports />
            <Skills />
            <Education />
        </div>
    );
};

export default Home;
