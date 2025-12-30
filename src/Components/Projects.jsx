import ProjectCard from "../cards/ProjectCard.jsx";
import edusity from "../assets/edusity.png";
import portfolio from "../assets//portfolio.png";
import AnimatedSection from "../animation/AnimatedPage.jsx";
import React from "react";

const projects = [
    {
        title: "Edusity React App",
        description: "Responsive React application using HTML, JavaScript, CSS.",
        image: edusity,
        demo: "https://eyad96.github.io/edusity-react-app/",
        github: "https://github.com/eyad96",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio built with React and JavaScript, Tailwind CSS.",
        image: portfolio,
        demo: "#",
        github: "https://github.com/eyad96",
    },
];

export default function Projects() {
    return (

        <AnimatedSection className="min-h-screen bg-[#020617] px-4 py-16">
            <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
                <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                    <span className='bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent '>PROJECTS</span>
                    <br/>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((projects, index) => (
                    <ProjectCard key={index} project={projects} />
                ))}
            </div>
        </AnimatedSection>

    );
}
