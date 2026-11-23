import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import GradientText from './GradientText';

// --- Education Data (from resume) ---
const educationData = [
  {
    title: 'B.Tech in Artificial Intelligence and Machine Learning',
    institution: 'Kongu Engineering College, Perundurai, Tamil Nadu',
    duration: 'Sept 2023 - 2027',
    description:
      'Final-year student focused on AI/ML, with hands-on work in MLOps, Linux systems, and cloud deployment.',
  },
  {
    title: 'HSC',
    institution: 'Sree Saravana Niketan Matric Higher Secondary School, Nerinjipettai, Tamil Nadu',
    duration: '2021 - 2023',
    description: 'Completed Higher Secondary with a focus on Mathematics, Physics, and Computer Science.',
  },
  {
    title: 'SSLC',
    institution: 'SRV Vidhyya Vickas Matriculation School, Bhavani, Tamil Nadu',
    duration: '2020 - 2021',
    description: 'Completed SSLC with excellent academic performance and school-level participation.',
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

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center px-4 py-12 pt-20 
             bg-transparent transition-colors duration-500"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-12 flex flex-col items-center text-center">
          <GradientText
            colors={["#2563eb", "#22d3ee", "#2563eb"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl font-extrabold"
          >
            Education
          </GradientText>
          <p className="max-w-2xl mt-4 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            My academic journey, from school in Bhavani to a B.Tech in AI &amp; ML at Kongu Engineering College,
            where I'm now in my final year.
          </p>
        </div>

        <div className="relative w-full">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          <div className="relative flex flex-col gap-12 pl-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUpVariants}
                className="relative"
              >
                <div
                  className="absolute -left-8 top-1 w-8 h-8 
                            bg-blue-600 dark:bg-cyan-500 rounded-full 
                            flex items-center justify-center 
                            border-4 border-white dark:border-gray-800 shadow-md"
                >
                  <FaGraduationCap className="w-4 h-4 text-white" />
                </div>

                <div
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg dark:shadow-xl
                            rounded-xl p-6 
                            border border-gray-200 dark:border-gray-700
                            transition-all duration-300
                            hover:scale-[1.02] hover:shadow-blue-300/30 dark:hover:shadow-cyan-400/30"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>

                  <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-2">
                    <span>{item.institution}</span>
                    <span className="mx-2">|</span>
                    <span>{item.duration}</span>
                  </div>

                  <p className="text-base text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
