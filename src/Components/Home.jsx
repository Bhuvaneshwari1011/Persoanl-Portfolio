import React from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects'; // Assuming Projects component is already created

const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.8 },
};

const HomePage = () => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition.transition}
        >
            {/* Header Section */}
            <motion.header
                className="bg-gray-800 text-white py-6"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-center text-4xl">Welcome to My Portfolio</h1>
            </motion.header>

            {/* Projects Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="my-12"
            >
                <Projects /> {/* Your Projects component */}
            </motion.section>

            {/* About Section */}
            <motion.section
                className="my-12 bg-gray-100 py-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <p className="mt-4 text-gray-700">
                        I'm a web developer specializing in React and Node.js. I create engaging web experiences.
                    </p>
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                className="my-12 py-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="mt-4">
                    Contact me at <a href="mailto:bhuvaneshwari10111999@gmail.com" className="text-blue-600">bhuvaneshwari10111999@gmail.com</a>
                </p>
            </motion.section>

            {/* Footer Section */}
            <motion.footer
                className="bg-gray-800 text-white py-6 mt-12 text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <p>&copy; 2024 Bhuvi's Portfolio</p>
            </motion.footer>
        </motion.div>
    );
};

export default HomePage;
