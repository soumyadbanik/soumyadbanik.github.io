import React from 'react';
import Hero from '../components/Hero';
import ResearchStatement from '../components/ResearchStatement';
import ResearchExperience from '../components/ResearchExperience';
import IndustryExperience from '../components/IndustryExperience';
import Projects from '../components/Projects';
import TechnicalReports from '../components/TechnicalReports';
import Education from '../components/Education';
import MethodsAndTools from '../components/MethodsAndTools';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <ResearchStatement />
            <ResearchExperience />
            <IndustryExperience />
            <Projects />
            <TechnicalReports />
            <Education />
            <MethodsAndTools />
        </div>
    );
};

export default Home;
