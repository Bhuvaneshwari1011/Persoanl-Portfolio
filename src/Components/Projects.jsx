import React from 'react';
import { motion } from 'framer-motion';
import projectImage1 from '../assets/projects/project-1.webp';
import projectImage2 from '../assets/projects/project-2.webp';
import projectImage3 from '../assets/projects/project-3.webp';

const PROJECTS = [
    {
        title: "Dentist Appointment",
        description: "A web application for booking and managing dental appointments. Features include a responsive design, appointment booking form, and a management interface with smooth transitions and animations.",
        image: projectImage1,
        link: "https://bhuvaneshwari1011.github.io/Dentist-Appointment/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
        title: "Shopping List",
        description: "Created an interactive shopping list where users can add, edit, delete, and view items. The application saves the list, allowing users to manage their items efficiently.",
        image: projectImage2,
        link: "https://bhuvaneshwari1011.github.io/shoppinglist/",
        technologies: ["React", "CSS"]
    },
    {
        title: "Birthday List",
        description: "A simple React-based web application that allows users to manage and keep track of important birthdays. Users can easily add names to the list, view all birthdays, and clear the list when needed.",
        image: projectImage3,
        link: "https://bhuvaneshwari1011.github.io/shoppinglist/",
        technologies: ["React", "CSS", "JavaScript"]
    }
];

const Projects = () => {
    return (
        <motion.div
            className="pb-4 flex justify-center"
            initial={{ opacity: 0 }} // Start hidden
            animate={{ opacity: 1 }} // Fade in
            transition={{ duration: 0.8 }} // Slower fade-in for the whole container
        >
            <div className="w-full max-w-4xl">
                <motion.h2
                    className="my-12 text-center text-3xl"
                    initial={{ y: -20, opacity: 0 }} // Slide from above
                    animate={{ y: 0, opacity: 1 }} // Slide to original position
                    transition={{ duration: 0.6 }} // Animation duration for the heading
                >
                    Projects
                </motion.h2>
                <div className="flex flex-col items-center space-y-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            className="mb-6 flex flex-row items-start space-x-6"
                            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate slightly down
                            animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and translate to original position
                            transition={{ duration: 0.6, delay: index * 0.2 }} // Increase delay for staggered effect
                        >
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [0, 3, -3, 0], // Gentle rotation effect
                                    transition: { duration: 0.3 } // Transition duration for hover
                                }} // Scale on hover
                            >
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-72 h-72 rounded object-cover shadow-lg"
                                    initial={{ scale: 1 }} // Initial scale
                                    whileHover={{ scale: 1.1 }} // Scale up on hover
                                    transition={{ duration: 0.3 }} // Smooth transition on hover
                                    animate={{ y: [0, -5, 0] }} // Gentle up-and-down animation
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                            </motion.a>
                            <div className="flex flex-col justify-center w-2/3">
                                <motion.h3
                                    className="text-xl font-bold mb-1"
                                    initial={{ y: 20, opacity: 0 }} // Slide from below
                                    animate={{ y: 0, opacity: 1 }} // Slide to original position
                                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }} // Staggered delay
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-600 leading-tight"
                                    initial={{ y: 20, opacity: 0 }} // Slide from below
                                    animate={{ y: 0, opacity: 1 }} // Slide to original position
                                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }} // Staggered delay
                                >
                                    {project.description}
                                </motion.p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
