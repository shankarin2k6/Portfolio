import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import GradientText from './GradientText';

// --- Experience Data (from resume) ---
const experiences = [
  {
    role: 'Infosys Springboard Internship',
    company: 'Infosys · Remote',
    duration: '2026 – Present',
    points: [
      'Built an end-to-end AI soil analytics app with FastAPI, PostgreSQL and a Next.js progressive web app, giving farmers soil type, crop ranking and fertiliser plans in four languages from a soil photo.',
      'Trained an EfficientNet-B0 soil classifier with Grad-CAM explanations and an XGBoost fertiliser model, then converted the image model to ONNX Runtime to cut API memory from over 1 GB to about 300 MB.',
      'Deployed the app live on Render and Neon PostgreSQL with Docker and Caddy, and added offline support and a Sarvam AI voice output; verified by 213 automated backend tests and tested on a real phone.',
      'Learned model serving, API security, containerization, cloud deployment and debugging under cost limits, and presented the project to mentors in milestone reviews as part of Team C.',
    ],
  },
  {
    role: 'KEC Hackathon',
    company: 'Kongu Engineering College · Perundurai, Tamil Nadu',
    duration: 'Mar 2025',
    points: [
      'Built an AI course-generation platform in 30 hours using Flask, Bootstrap, and the Gemini API.',
      'Implemented user login with profile photo upload (SQLite) and resolved API and file-upload issues under a strict deadline.',
    ],
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center px-4 py-12 pt-20 
             bg-transparent transition-colors duration-500"
    >
      <div className="mb-12 flex flex-col items-center text-center">
        <GradientText
          colors={["#2563eb", "#22d3ee", "#2563eb"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl font-extrabold text-center"
        >
          Experience
        </GradientText>
        <p className="max-w-2xl mt-4 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          My hands-on experience so far: an Infosys Springboard internship building and deploying an AI soil
          analytics app, and a 30-hour hackathon where I shipped an AI course platform under a strict deadline.
        </p>
      </div>

      <div className="max-w-4xl w-full mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
            className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-xl
                       rounded-xl p-6 
                       border border-gray-200 dark:border-gray-700
                       transition-all duration-300
                       hover:scale-[1.02] hover:shadow-blue-300/30 dark:hover:shadow-cyan-400/30"
          >
            <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <span className="text-sm font-medium text-blue-600 dark:text-cyan-400">
                {exp.duration}
              </span>
            </div>

            <div className="flex items-center text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">
              <FaBriefcase className="w-4 h-4 mr-2 text-gray-500" />
              <span>{exp.company}</span>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-base text-gray-600 dark:text-gray-400">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
