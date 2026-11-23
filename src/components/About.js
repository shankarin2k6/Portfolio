import React from 'react';
import { motion } from 'framer-motion';
import SplitText from './SplitText';
import GradientText from './GradientText';
// Placeholder profile image (swap for your photo, e.g. "/profile.jpg" placed in /public)
const ProfileImg = "profile.png";

const About = () => {
  const cardVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 }
    },
  };

  const imageVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
    },
  };

  return (
    <section
      id="about"
      className="flex items-center justify-center px-6 pt-24 pb-10 sm:px-8 relative bg-transparent sparkle-container"
    >
      <style jsx="true" global>{`
        .dark body, .dark html {
          background-color: #0a0f1c;
          overflow-x: hidden;
        }

        @keyframes blobMove {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -30px) scale(1.2); }
          66% { transform: translate(-30px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .dark::before {
          content: "";
          position: fixed;
          top: -10%; left: -10%;
          width: 120%; height: 120%;
          background: radial-gradient(circle at 30% 30%, rgba(14,165,233,0.2), transparent 60%),
                      radial-gradient(circle at 70% 70%, rgba(236,72,153,0.25), transparent 60%);
          filter: blur(80px);
          animation: blobMove 20s ease-in-out infinite alternate;
          opacity: 0.4;
          mix-blend-mode: screen;
          z-index: 0;
          pointer-events: none;
        }

        .dark::after {
          content: "";
          position: fixed;
          top: -10%; left: -10%;
          width: 120%; height: 120%;
          background: radial-gradient(circle at 60% 40%, rgba(59,130,246,0.2), transparent 60%),
                      radial-gradient(circle at 40% 60%, rgba(6,182,212,0.25), transparent 60%);
          filter: blur(80px);
          animation: blobMove 25s ease-in-out infinite reverse;
          opacity: 0.4;
          mix-blend-mode: screen;
          z-index: 0;
          pointer-events: none;
        }

        #about {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto w-full relative z-10
                   grid grid-cols-1 lg:grid-cols-3 items-start gap-8 lg:gap-10"
      >
        <motion.div variants={imageVariants} className="col-span-1 flex-shrink-0 pt-4">
          <img
            src={ProfileImg}
            alt="Shankari N Profile"
            className="w-full max-w-[16rem] sm:max-w-xs lg:max-w-none h-auto aspect-square 
                       object-cover rounded-2xl mx-auto
                       shadow-xl border-4 border-blue-400 
                       dark:border-cyan-500"
          />
        </motion.div>

        <div className="lg:col-span-2 text-center lg:text-left">
          <div className="mb-4 flex justify-center lg:justify-start">
            <GradientText
              colors={["#2563eb", "#22d3ee", "#2563eb"]}
              animationSpeed={3}
              showBorder={false}
              className="text-4xl font-extrabold"
            >
              About Me
            </GradientText>
          </div>

          <div className="mb-4">
            <SplitText
              text="B.Tech AI & ML Student | DevOps & MLOps Enthusiast"
              className="text-xl font-medium text-gray-600 dark:text-gray-400"
              delay={50}
              duration={0.6}
              splitType="words"
              textAlign="inherit"
            />
          </div>

          <div className="text-lg leading-relaxed space-y-4 text-gray-700 dark:text-gray-300">
            <SplitText
              text="I'm Shankari N, a final-year B.Tech AI & ML student at Kongu Engineering College with hands-on experience deploying containerized applications, hardening and troubleshooting Linux systems, and building Python/FastAPI services."
              className="block"
              delay={100}
              duration={0.5}
              splitType="words"
              textAlign="inherit"
            />

            <SplitText
              text="As part of my Infosys Springboard internship, I built an end-to-end AI soil analytics app: an EfficientNet-B0 classifier with Grad-CAM explanations, an XGBoost fertiliser model, a FastAPI and PostgreSQL backend, and a multilingual Next.js PWA, deployed live with Docker. I also built a Faithfulness-Aware RAG system and a Diabetes Prediction System with MLflow and Docker."
              className="block"
              delay={150}
              duration={0.5}
              splitType="words"
              textAlign="inherit"
            />

            <SplitText
              text="I'm now building my CI/CD and cloud skills with GitHub Actions, AWS and Terraform, and I'm seeking a DevOps/MLOps internship where I can keep shipping reliable, production-ready systems."
              className="block"
              delay={200}
              duration={0.5}
              splitType="words"
              textAlign="inherit"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
