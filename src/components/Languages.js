import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaPython, FaJava, FaDocker,
  FaGlobe, FaLanguage, FaGitAlt, FaLinux, FaCode, FaServer, FaChartBar,
  FaCloud, FaAws, FaLightbulb, FaClock, FaUserGraduate, FaTools, FaCogs
} from 'react-icons/fa';
import GradientText from './GradientText';

// --- Percentage badge (used only for human languages) ---
const SkillBadge = ({ name, percentage, icon: Icon, color }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const progressWidth = inView ? `${percentage}%` : '0%';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative w-full p-4 rounded-xl overflow-hidden cursor-pointer 
                 bg-white border border-gray-200 
                 dark:bg-gray-700 dark:border-gray-600
                 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-300/30 dark:hover:shadow-cyan-400/30 
                 transition-all duration-300"
    >
      <motion.div
        className={`absolute top-0 left-0 h-full opacity-30 ${color}`}
        initial={{ width: '0%' }}
        animate={{ width: progressWidth }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="w-6 h-6 text-blue-500" />}
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">{name}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xl font-bold text-blue-600 dark:text-cyan-400">{percentage}%</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Proficiency</span>
        </div>
      </div>
    </motion.div>
  );
};

// --- Simple chip (no percentage) ---
const SimpleSkillChip = ({ name, icon: Icon }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center p-4 rounded-xl cursor-default
                 bg-white border border-gray-200 
                 dark:bg-gray-700 dark:border-gray-600
                 hover:scale-105 hover:shadow-xl hover:shadow-blue-300/30 dark:hover:shadow-cyan-400/30
                 transition-all duration-300"
    >
      <Icon className="w-6 h-6 mr-3 text-blue-600 dark:text-cyan-400" />
      <span className="text-lg font-medium text-gray-800 dark:text-gray-100">{name}</span>
    </motion.div>
  );
};

const Section = ({ title, children, cols = 'sm:grid-cols-2 lg:grid-cols-3', first = false }) => (
  <div className={`w-full max-w-4xl ${first ? '' : 'mt-10'}`}>
    <h3 className="text-3xl font-bold mb-6 text-center 
                   text-gray-800 dark:text-gray-100 border-b-2 border-blue-200 dark:border-cyan-700 pb-2">
      {title}
    </h3>
    <div className={`grid grid-cols-1 ${cols} gap-6`}>{children}</div>
  </div>
);

const Skills = () => {
  // --- Data (from resume) ---
  const humanLanguages = [
    { name: 'English', percentage: 90, icon: FaGlobe, color: 'bg-blue-500' },
    { name: 'Tamil', percentage: 80, icon: FaLanguage, color: 'bg-red-500' },
  ];

  const languagesAndFrameworks = [
    { name: 'Python', icon: FaPython },
    { name: 'Java', icon: FaJava },
    { name: 'JavaScript', icon: FaJsSquare },
    { name: 'FastAPI, Flask', icon: FaServer },
    { name: 'Streamlit', icon: FaCode },
    { name: 'React.js, Node.js', icon: FaReact },
    { name: 'Tailwind CSS', icon: FaCode },
  ];

  const devopsAndTools = [
    { name: 'Docker', icon: FaDocker },
    { name: 'Git / GitHub', icon: FaGitAlt },
    { name: 'Linux (Ubuntu)', icon: FaLinux },
    { name: 'MLflow', icon: FaCogs },
    { name: 'VS Code', icon: FaTools },
    { name: 'Power BI', icon: FaChartBar },
  ];

  const databases = [
    { name: 'PostgreSQL', icon: FaDatabase },
    { name: 'MongoDB', icon: FaDatabase },
    { name: 'SQLite', icon: FaDatabase },
  ];

  const learning = [
    { name: 'GitHub Actions (CI/CD)', icon: FaCogs },
    { name: 'AWS', icon: FaAws },
    { name: 'Terraform', icon: FaCloud },
  ];

  const strengths = [
    { name: 'Linux Troubleshooting', icon: FaLinux },
    { name: 'Problem Solving', icon: FaLightbulb },
    { name: 'Self-Learner', icon: FaUserGraduate },
    { name: 'Time Management', icon: FaClock },
    { name: 'Independent', icon: FaNodeJs },
  ];

  const chips = (list) =>
    list.map((s) => <SimpleSkillChip key={s.name} name={s.name} icon={s.icon} />);

  return (
    <section
      id="languages"
      className="flex flex-col items-center px-4 pt-20 pb-10 
             bg-transparent transition-colors duration-500"
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <GradientText
          colors={["#2563eb", "#22d3ee", "#2563eb"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl font-extrabold text-center"
        >
          My Skills & Expertise
        </GradientText>
        <p className="max-w-2xl mt-4 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          A snapshot of the tools I use day to day, from Python and FastAPI to Docker, Linux and MLflow,
          along with the CI/CD and cloud skills I'm building next. I learn best by shipping real, deployed projects.
        </p>
      </div>

      <Section title="Languages & Frameworks" first>{chips(languagesAndFrameworks)}</Section>
      <Section title="DevOps & Tools">{chips(devopsAndTools)}</Section>
      <Section title="Databases">{chips(databases)}</Section>
      <Section title="Currently Learning">{chips(learning)}</Section>
      <Section title="Strengths">{chips(strengths)}</Section>

      <Section title="Human Languages" cols="md:grid-cols-2">
        {humanLanguages.map((lang) => (
          <SkillBadge
            key={lang.name}
            name={lang.name}
            percentage={lang.percentage}
            icon={lang.icon}
            color={lang.color}
          />
        ))}
      </Section>
    </section>
  );
};

export default Skills;
