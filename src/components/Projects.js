import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLink, FaTimes } from 'react-icons/fa';
import GradientText from './GradientText';

// TODO: replace each githubUrl with the specific repo link (currently your GitHub profile)
// TODO: replace each imageUrl with a real screenshot placed in /public/images/
const GITHUB_PROFILE = 'https://github.com/shankarin2k6';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Soil Analytics System',
    shortDescription: 'Soil photo to soil type, crop ranking and fertiliser plans, in four languages.',
    longDescription:
      'An end-to-end soil analytics app built during the Infosys Springboard internship. An EfficientNet-B0 classifier with Grad-CAM explanations identifies soil type from a photo, and an XGBoost model recommends fertilisers. The image model was converted to ONNX Runtime, cutting API memory from over 1 GB to about 300 MB. The backend uses FastAPI, PostgreSQL and Alembic; the frontend is a multilingual Next.js PWA with offline support and Sarvam AI voice output. Deployed on Render and Neon PostgreSQL with Docker and Caddy, and verified by 213 automated backend tests.',
    tags: ['CNN', 'Transfer Learning', 'Gradient Boosting', 'Grad-CAM', 'SHAP', 'FastAPI', 'PostgreSQL', 'Next.js PWA'],
    imageUrl: 'soil.webp',
    githubUrl: 'https://github.com/shankarin2k6/AI-Powered-Soil-Analytics-System-for-Nutrient-Assessment-and-Intelligent-Crop-Advisory',
    liveUrl: 'https://ai-powered-soil-analytics-system-for.onrender.com',
  },
  {
    id: 2,
    title: 'Faithfulness-Aware RAG System',
    shortDescription: 'A RAG chatbot that verifies its own answers against retrieved evidence.',
    longDescription:
      'A retrieval-augmented generation system over the Right to Information Act 2005 that splits each answer into claims and checks them against the retrieved evidence. Built with ChromaDB, sentence-transformers, spaCy for claim splitting, the Groq API and a Streamlit UI with streaming answers, document upload and a bring-your-own-API-key sidebar. Includes a gold-standard evaluation set.',
    tags: ['RAG', 'LLM', 'Claim Verification', 'ChromaDB', 'spaCy', 'Groq API', 'Streamlit'],
    imageUrl: 'RAG.jpeg',
    githubUrl: 'https://github.com/shankarin2k6/rag-faithfulness',
    liveUrl: 'https://rag-faithfulnes.streamlit.app',
  },
  {
    id: 3,
    title: 'Diabetes Prediction System (MLOps)',
    shortDescription: 'Live-deployed ML app with experiment tracking and model versioning.',
    longDescription:
      'A diabetes prediction app built with an MLOps workflow: Scikit-learn models tracked and versioned with MLflow, containerized with Docker, and served through a Streamlit interface that is deployed live.',
    tags: ['Scikit-learn', 'MLflow', 'Docker', 'Streamlit', 'Model Versioning'],
    imageUrl: 'mlops.jpg',
    githubUrl: 'https://github.com/shankarin2k6/MLOPs_diabetes_prediction',
    liveUrl: 'https://mlopsdiabetesprediction.streamlit.app',
  },
  {
    id: 4,
    title: 'Linux System Administration (Ubuntu)',
    shortDescription: 'Hardening and troubleshooting an Ubuntu system.',
    longDescription:
      'Hands-on Ubuntu administration covering security hardening with UFW, Fail2Ban, ClamAV and rkhunter, service management with systemd, and Docker setup and troubleshooting.',
    tags: ['Ubuntu', 'UFW', 'Fail2Ban', 'ClamAV', 'rkhunter', 'systemd', 'Docker'],
    imageUrl: 'linux.png',
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
  },
  {
    id: 5,
    title: 'Object Detection for Blind Persons',
    shortDescription: 'Real-time object detection with audio feedback.',
    longDescription:
      'A real-time object detection system for visually impaired users, built with Python, OpenCV and the MobileNet-SSD model. It identifies nearby objects from a webcam feed and gives audio feedback. Won first place in the paper presentation at a national conference at Kongu Engineering College.',
    tags: ['Python', 'OpenCV', 'MobileNet-SSD', 'Computer Vision', 'Audio Feedback'],
    imageUrl: 'object.jpg',
    githubUrl: 'https://github.com/shankarin2k6/objectdetectionusingMobileNetSSD_model',
    liveUrl: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {tags.map((t) => (
      <span
        key={t}
        className="px-2 py-1 text-xs font-medium rounded-full
                   bg-blue-50 text-blue-700 dark:bg-gray-700 dark:text-cyan-300"
      >
        {t}
      </span>
    ))}
  </div>
);

const ProjectCard = ({ project, onKnowMore, index }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                 border border-gray-200 dark:border-gray-700
                 overflow-hidden transition-all duration-300
                 hover:shadow-xl dark:hover:shadow-cyan-400/20"
    >
      <div className="overflow-hidden h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 
                         dark:hover:text-cyan-400 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 
                           dark:hover:text-cyan-400 transition-colors"
              >
                <FaLink className="w-5 h-5" />
              </a>
            )}
          </div>
          <button
            onClick={() => onKnowMore(project)}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium
                       rounded-lg shadow-md hover:bg-blue-700
                       dark:bg-cyan-500 dark:hover:bg-cyan-600
                       transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:focus:ring-cyan-400"
          >
            Know More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      variants={modalBackdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 
                 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={modalContentVariants}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 
                   rounded-2xl shadow-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 p-2
                     text-gray-500 dark:text-gray-400
                     hover:bg-gray-200 dark:hover:bg-gray-700
                     rounded-full transition-colors"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h2>
          <TagList tags={project.tags} />
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {project.longDescription}
          </p>

          <div className="flex items-center space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-3 bg-gray-800 text-white
                         text-md font-medium rounded-lg shadow-md 
                         hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600
                         transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 mr-2" />
              GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-3 bg-blue-600 text-white
                           text-md font-medium rounded-lg shadow-md 
                           hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600
                           transition-all duration-300"
              >
                <FaLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
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
          My Projects
        </GradientText>
        <p className="max-w-2xl mt-4 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          A selection of projects across machine learning, MLOps, RAG and Linux administration. Three of them
          are deployed live. Open any card to see the tech stack and links.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto
                      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onKnowMore={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
