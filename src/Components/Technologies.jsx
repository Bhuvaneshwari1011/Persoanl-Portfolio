import React from 'react';
import { DiJava, DiHtml5, DiJavascript1, DiCss3, DiMysql, DiNodejsSmall } from 'react-icons/di';  // Importing Icons
import { SiSpringboot, SiCsharp } from 'react-icons/si';  // C# icon and Spring Boot icon
import { motion } from 'framer-motion';  // Import motion from framer-motion

const Technologies = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <h2 className="text-4xl lg:text-6xl text-center mb-8 font-bold">Technologies</h2>
            <div className="flex justify-center flex-wrap gap-10">
                {/* Define the motion for continuous bouncing animation */}
                {[
                    { Component: DiJava, color: 'text-orange-600' },
                    { Component: DiHtml5, color: 'text-red-600' },
                    { Component: DiJavascript1, color: 'text-yellow-400' },
                    { Component: DiCss3, color: 'text-blue-600' },
                    { Component: DiMysql, color: 'text-blue-700' },
                    { Component: SiSpringboot, color: 'text-green-500' },
                    { Component: SiCsharp, color: 'text-purple-700' },
                    { Component: DiNodejsSmall, color: 'text-green-500' },
                ].map(({ Component, color }, index) => (
                    <motion.div
                        key={index}
                        className={`p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300`} // Added shadow and rounded corners
                        initial={{ y: 0, opacity: 0 }} // Start from hidden
                        animate={{ 
                            y: [0, -15, 0], // Increase movement for a more pronounced bounce
                            opacity: [0, 1, 1], // Fade in effect
                        }} 
                        transition={{
                            duration: 3, // Slow motion for smoother animation
                            ease: "easeInOut", // Smooth easing
                            repeat: Infinity, // Loop indefinitely
                            repeatType: "loop", // Loop type
                        }}
                    >
                        <Component className={`text-8xl ${color} drop-shadow-lg transition-transform duration-300`} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
