// File: Achievements.js

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaTrophy } from 'react-icons/fa';
import GradientText from './GradientText';
import CardSwap, { Card } from './CardSwap';
import TiltedCard from './TiltedCard';
import ColorBends from './ColorBends';

// Used by the LinkedIn icon when an achievement has no `linkedInUrl` of its own.
// TODO: paste each achievement's LinkedIn post link into its `linkedInUrl` field below.
const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/shankari-n-30a6762b5/';

// --- Achievement Data ---
// facts   -> quick-facts grid in the pop-up   (label / value)
// details -> bullet list in the pop-up        (optional)
// tags    -> small chips in the pop-up        (optional)
const achievementsData = [
  {
    id: 1,
    title: 'First Prize, Paper Presentation',
    image: '/envista.png',
    description:
      "I am incredibly honored to have secured the First Prize in the Paper Presentation at ENVISTAS’25 among 70 teams, organized by Kongu Engineering College.",
    facts: [
      { label: 'Award', value: 'First Prize' },
      { label: 'Category', value: 'Paper Presentation' },
      { label: 'Event', value: "ENVISTAS’25" },
      { label: 'Competition', value: '70 teams' },
      { label: 'Organized by', value: 'Kongu Engineering College' },
    ],
    tags: ['Paper Presentation', 'Technical Symposium', 'KEC'],
    linkedInUrl: 'https://www.linkedin.com/posts/shankari-n-30a6762b5_ai-machinelearning-paperpresentation-share-7306622282397876224-Q1rE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEu9OToBgcPk-tE_NXPExDZZQmQaWFPkQgw',
  },
  {
    id: 2,
    title: "Second Prize, REWOP'25",
    image: '/rewop.jpeg',
    description:
      "I secured 2nd Prize in the Paper Presentation competition at the National Level Technical Symposium - REWOP'25 held at Sri Ramakrishna Engineering College.",
    facts: [
      { label: 'Award', value: 'Second Prize' },
      { label: 'Category', value: 'Paper Presentation' },
      { label: 'Event', value: "REWOP'25 (National Level Technical Symposium)" },
      { label: 'Venue', value: 'Sri Ramakrishna Engineering College' },
    ],
    tags: ['Paper Presentation', 'National Level', 'Symposium'],
    linkedInUrl: 'https://www.linkedin.com/posts/shankari-n-30a6762b5_ai-edtech-hackathon-share-7311628570848620544-RdVr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEu9OToBgcPk-tE_NXPExDZZQmQaWFPkQgw',
  },
  {
    id: 3,
    title: 'National Conference Winner',
    image: '/national_conference.jpeg',
    description:
      'I participated in the National Conference on Innovative Trends in Technologies at Kongu Engineering College and secured 1st place for my paper presentation on "Object Detection for Blind Persons Using MobileNet SSD."',
    facts: [
      { label: 'Award', value: 'Best Paper Award (1st place)' },
      { label: 'Event', value: 'National Conference on Innovative Trends in Technologies' },
      { label: 'Venue', value: 'Kongu Engineering College' },
      { label: 'Date', value: '1 March 2025' },
      { label: 'Paper', value: 'Object Detection for Blind Persons Using MobileNet SSD' },
    ],
    details: [
      'Presented a real-time object detection system for visually impaired users, built with Python, OpenCV and the MobileNet-SSD model.',
      'The system identifies nearby objects from a webcam feed and gives audio feedback.',
    ],
    tags: ['Python', 'OpenCV', 'MobileNet-SSD', 'Computer Vision'],
    linkedInUrl: 'https://www.linkedin.com/posts/shankari-n-30a6762b5_grateful-achievement-aiforgood-ugcPost-7301608984623382528-ZJZq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEu9OToBgcPk-tE_NXPExDZZQmQaWFPkQgw',
  },
  {
    id: 4,
    title: 'KEC Hackathon 2025',
    image: '/kec_hackathon.jpeg',
    description:
      'Participated in the 30-hour KEC Hackathon 2025 and built an AI Learning Platform from scratch in just 30 hours!',
    facts: [
      { label: 'Event', value: 'KEC Hackathon 2025 (30 hours)' },
      { label: 'Category', value: 'Edu Tech and E-Learning' },
      { label: 'Built', value: 'AI-powered Learning Platform' },
      { label: 'Organized by', value: 'Kongu Engineering College' },
    ],
    details: [
      'Generates courses and assessments automatically using the Gemini API.',
      'Flask backend with a Bootstrap frontend and SQLite storage.',
      'User login with profile photo upload, plus a personalized dashboard.',
      'Fixed API and file-upload issues under a strict deadline.',
    ],
    tags: ['Flask', 'Bootstrap', 'Gemini API', 'SQLite'],
    linkedInUrl: 'https://www.linkedin.com/posts/shankari-n-30a6762b5_hackathon-ai-edtech-share-7311627021304881152-F07T/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEu9OToBgcPk-tE_NXPExDZZQmQaWFPkQgw',
  },
  {
    id: 5,
    title: "First Prize, HACKVOTRIX'25",
    // Put your certificate / photo at public/hackvotrix.jpeg (or change this path to match your file)
    image: '/hackvotrix.jpeg',
    description:
      "My team (Saravana P, Vikkas J and I) won 1st Prize in HACKVOTRIX'25, the 24-hour Inter-Departmental Hackathon organized by the Department of AI & EEE, AI Coding Club and AI Association of Kongu Engineering College (Autonomous), where we tackled Illegal Sand Mining & Land Encroachment Detection.",
    facts: [
      { label: 'Award', value: 'First Prize' },
      { label: 'Event', value: "HACKVOTRIX'25 (24-hour Inter-Departmental Hackathon)" },
      { label: 'Problem', value: 'Illegal Sand Mining & Land Encroachment Detection' },
      { label: 'Team', value: 'Saravana P, Vikkas J, Shankari N' },
      { label: 'Organized by', value: 'Dept. of AI & EEE, AI Coding Club & AI Association, KEC' },
    ],
    details: [
      '24 hours of non-stop collaboration, coding and innovation.(Mentioned in honours and awards section of the linkedIn)',
      'Hosted with KEC Forum, ATTI and industry partners Birdscale, PPunchbiz, MK Automations, MAS and Turnon.',
      'Guided by Faculty Coordinator Dr. K. Logeswaran and HoD/AI Dr. R. R. Rajalaxmi.',
    ],
    tags: ['AI', 'Problem Solving', 'Teamwork', 'Sand Mining Detection'],
    linkedInUrl: 'https://www.linkedin.com/in/shankari-n-30a6762b5/',
  },
];

const linkFor = (ach) => ach.linkedInUrl || LINKEDIN_PROFILE;

// --- Animation variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 24 } },
  exit: { opacity: 0, scale: 0.85, y: 30, transition: { duration: 0.2 } },
};

const LinkedInButton = ({ href, title }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View LinkedIn post: ${title}`}
    title="View LinkedIn post"
    className="flex items-center justify-center w-10 h-10 rounded-full
               bg-[#0A66C2] text-white shadow-md
               hover:scale-110 hover:bg-[#004182] hover:shadow-lg hover:shadow-blue-500/40
               transition-all duration-300"
  >
    <FaLinkedin className="w-5 h-5" />
  </a>
);

// --- 1. ACHIEVEMENT CARD (grid) ---
const AchievementCard = ({ ach, index, onOpen }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="group relative flex flex-col rounded-2xl overflow-hidden border
                 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md
                 transition-all duration-300 ease-out
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/30 dark:hover:shadow-cyan-400/30
                 hover:border-blue-500 dark:hover:border-cyan-400"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                   transition-opacity duration-500
                   bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10"
      />

      <div className="relative p-6 flex flex-col h-full">
        {/* No image here: the certificate is shown only in the pop-up */}
        <div
          className="w-12 h-12 mb-4 rounded-full flex items-center justify-center
                     bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md
                     transition-transform duration-500 ease-out
                     group-hover:scale-110 group-hover:rotate-12"
        >
          <FaTrophy className="w-5 h-5" />
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100
                       transition-colors duration-300
                       group-hover:text-blue-600 dark:group-hover:text-cyan-400">
          {ach.title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3 flex-grow">
          {ach.description}
        </p>

        <div className="mt-6 pt-2 flex items-center gap-3">
          <button
            onClick={() => onOpen(index)}
            className="px-6 py-2 rounded-full text-sm font-semibold shadow-sm
                       bg-blue-600 text-white hover:bg-blue-700
                       hover:scale-105 active:scale-95
                       transition-all duration-300"
          >
            Show More
          </button>
          <LinkedInButton href={linkFor(ach)} title={ach.title} />
        </div>
      </div>
    </motion.div>
  );
};

// --- 2. POP-UP MODAL (image first, then full details) ---
const AchievementModal = ({ ach, index, total, onClose, onPrev, onNext }) => {
  // Esc closes, arrow keys move between achievements; page scroll is locked while open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl
                   border border-blue-500 shadow-2xl text-white bg-gray-900"
      >
        {/* Animated background behind the content */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={30}
            speed={0.3}
            scale={1.2}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
            transparent={true}
          />
        </div>

        <button
          onClick={onClose}
          aria-label="Close achievement details"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40
                     text-white/80 hover:text-white hover:bg-black/70 transition-colors"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Only this inner area scrolls, so the background and rounded corners stay fixed */}
        <div className="relative z-20 p-5 sm:p-6 max-h-[85vh] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.35)_transparent]">
          {/* Big image (the hero of the pop-up) */}
          <div className="relative group w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
            <img
              src={ach.image}
              alt={ach.title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <a
              href={ach.image}
              target="_blank"
              rel="noopener noreferrer"
              title="Open full-size image"
              className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full
                         text-xs font-semibold bg-black/60 text-white
                         hover:bg-black/80 transition-colors"
            >
              <FaExpand className="w-3 h-3" />
              Full size
            </a>
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest text-cyan-300">
            Achievement {index + 1} of {total}
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mt-1 mb-3 pr-8">{ach.title}</h2>

          {ach.tags && (
            <div className="flex flex-wrap gap-2 mb-5">
              {ach.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-cyan-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <p className="text-base leading-relaxed text-gray-100">{ach.description}</p>

          {ach.facts && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ach.facts.map((f) => (
                <div key={f.label} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                  <p className="text-xs uppercase tracking-wide text-blue-300">{f.label}</p>
                  <p className="text-sm font-medium text-gray-100 mt-0.5">{f.value}</p>
                </div>
              ))}
            </div>
          )}

          {ach.details && (
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="font-semibold text-blue-300 mb-2">✨ Highlights</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-200">
                {ach.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={linkFor(ach)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2.5 rounded-full text-sm font-semibold
                           bg-[#0A66C2] text-white hover:bg-[#004182]
                           hover:scale-105 transition-all duration-300"
              >
                <FaLinkedin className="w-4 h-4 mr-2" />
                View LinkedIn post
              </a>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-white text-black
                           hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onPrev}
                aria-label="Previous achievement"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNext}
                aria-label="Next achievement"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Summary numbers + short badges for the quick list (left column) ---
const stats = [
  { value: achievementsData.length, label: 'Recognitions' },
  { value: 3, label: 'First Prizes' },
  { value: 3, label: 'Paper Presentations' },
  { value: 2, label: 'Hackathons' },
];
const badgeFor = { 1: '1st', 2: '2nd', 3: '1st', 4: 'Hackathon', 5: '1st' };

// --- 3. MAIN ACHIEVEMENTS SECTION ---
const Achievements = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const total = achievementsData.length;

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );
  const next = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col items-center px-4 py-12 pt-20 bg-transparent overflow-x-clip"
    >
      <div className="mb-12 flex flex-col items-center text-center">
        <GradientText
          colors={["#2563eb", "#22d3ee", "#2563eb"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl font-extrabold text-center"
        >
          Achievements
        </GradientText>
        <p className="max-w-2xl mt-4 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Awards and recognitions from paper presentations, national symposiums and hackathons at
          Kongu Engineering College and beyond.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-20 gap-10 px-4">

        <div className="md:w-1/2 text-left">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            My Milestones
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A quick visual showcase of my proudest achievements,
            awards, and recognitions — creatively presented to make this
            journey memorable.
          </p>

          {/* Summary numbers */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 border bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm
                           border-gray-200 dark:border-gray-700 shadow-sm
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/30 dark:hover:shadow-cyan-400/30
                           hover:border-blue-500 dark:hover:border-cyan-400"
              >
                <p className="text-3xl font-extrabold text-blue-600 dark:text-cyan-400">{s.value}</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quick list: click an item to open its details */}
          <p className="mt-8 mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Quick view
          </p>
          <ul className="space-y-2">
            {achievementsData.map((a, i) => (
              <li key={a.id}>
                <button
                  onClick={() => setSelectedIndex(i)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-left
                             bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700
                             text-gray-800 dark:text-gray-100
                             transition-all duration-300
                             hover:translate-x-1 hover:border-blue-500 dark:hover:border-cyan-400
                             hover:text-blue-600 dark:hover:text-cyan-300"
                >
                  <span className="text-sm font-medium">{a.title}</span>
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold
                                   bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-cyan-300">
                    {badgeFor[a.id]}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{ height: "500px", width: "100%", maxWidth: "550px", position: "relative" }}
          className="md:w-1/2"
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {achievementsData.map((ach) => (
              <Card key={ach.id}>
                <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
                  <ColorBends
                    colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
                    rotation={30}
                    speed={0.3}
                    scale={1.2}
                    frequency={1.4}
                    warpStrength={1.2}
                    mouseInfluence={0.8}
                    parallax={0.6}
                    noise={0.08}
                    transparent={false}
                  />
                </div>

                {/* Text on top, image fills ALL the remaining space of the tile */}
                <div className="relative z-10 p-5 h-full flex flex-col bg-black/30 backdrop-blur-[1px]">
                  <div className="text-left shrink-0">
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight drop-shadow-md">
                      {ach.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2 drop-shadow-sm font-medium">
                      {ach.description}
                    </p>
                  </div>

                  <div className="relative flex-1 min-h-0 mt-3">
                    <div className="absolute inset-0">
                      <TiltedCard
                        imageSrc={ach.image}
                        altText={ach.title}
                        captionText={ach.title}
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        imageFit="contain"
                        rotateAmplitude={10}
                        scaleOnHover={1.04}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((ach, index) => (
          <AchievementCard
            key={ach.id}
            ach={ach}
            index={index}
            onOpen={setSelectedIndex}
          />
        ))}
      </div>

      {/* POP-UP */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <AchievementModal
            ach={achievementsData[selectedIndex]}
            index={selectedIndex}
            total={total}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
