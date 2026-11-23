import React from 'react';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaPhoneAlt, FaMapMarkerAlt,
} from "react-icons/fa";
import GradientText from './GradientText';

// --- Contact details ---
const emails = ['shankarinand@gmail.com', 'shankarinan5000@gmail.com'];
const phone = '+91 76048 48925';
const phoneHref = 'tel:+917604848925';
const location = 'Bhavani, Erode, Tamil Nadu, India';

// --- Social / action icons ---
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/shankarin2k6',
    icon: FaGithub,
    hover: 'hover:bg-white hover:text-black hover:shadow-white/40',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shankari-n-30a6762b5/',
    icon: FaLinkedin,
    hover: 'hover:bg-[#0A66C2] hover:text-white hover:shadow-blue-500/60',
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${emails[0]}`,
    icon: FaEnvelope,
    hover: 'hover:bg-rose-500 hover:text-white hover:shadow-rose-500/60',
    external: false,
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    icon: FaFilePdf,
    hover: 'hover:bg-amber-400 hover:text-black hover:shadow-amber-400/60',
    external: true,
  },
];

const InfoChip = ({ icon: Icon, children, href }) => {
  const content = (
    <>
      <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
      <span>{children}</span>
    </>
  );
  const cls =
    'flex items-center gap-3 px-4 py-2.5 rounded-full text-sm sm:text-base text-gray-300 ' +
    'bg-white/5 border border-white/10 backdrop-blur-sm ' +
    'transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-white hover:bg-white/10';
  return href ? (
    <a href={href} className={cls}>{content}</a>
  ) : (
    <div className={cls}>{content}</div>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white px-6 pt-12 pb-8
                 bg-gradient-to-b from-[#0a0f1c] via-[#050816] to-black"
    >
      {/* Decorative glowing blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-600/25 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-fuchsia-600/10 blur-[110px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl text-center mb-2 text-white">Thank You!</h2>

        <div className="mb-6 flex justify-center">
          <GradientText
            colors={["#2563eb", "#22d3ee", "#2563eb"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl font-extrabold text-center"
          >
            Contact
          </GradientText>
        </div>

        <p className="text-center text-gray-400 mb-8">
          Open to DevOps / MLOps internships. Let's connect!
        </p>

        {/* Contact details */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {emails.map((e) => (
            <InfoChip key={e} icon={FaEnvelope} href={`mailto:${e}`}>{e}</InfoChip>
          ))}
          <InfoChip icon={FaPhoneAlt} href={phoneHref}>{phone}</InfoChip>
          <InfoChip icon={FaMapMarkerAlt}>{location}</InfoChip>
        </div>

        {/* Icon buttons */}
        <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
          {socials.map(({ label, href, icon: Icon, hover, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={label}
              className="group flex flex-col items-center gap-2"
            >
              <span
                className={`flex items-center justify-center w-16 h-16 rounded-full text-3xl
                            text-gray-200 bg-white/5 border border-white/15 backdrop-blur-sm
                            shadow-lg shadow-transparent
                            transition-all duration-300 ease-out
                            group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-xl
                            ${hover}`}
              >
                <Icon />
              </span>
              <span className="text-xs tracking-wide text-gray-400 transition-colors duration-300 group-hover:text-white">
                {label}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm">
            Designed & built by Shankari N © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
