import React from 'react';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  title: string;
  company?: string;
  period: string;
  description: string;
}

interface EducationProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

const experiences: ExperienceProps[] = [
  {
    title: 'Summer of AI Internship',
    period: 'May 2023 - June 2023',
    description:
      'Collected and organized Telugu language data to support the training of large-scale LLMs for heritage-based NLP applications. Supported AI-driven linguistic analysis focused on cultural preservation in Telugu language contexts',
  },
];

const education: EducationProps[] = [
  {
    degree: 'B.Tech - Computer Science and Engineering(Data Science)',
    institution: 'B V Raju Institute of Technology',
    period: '2022 - 2026',
    description: 'Specialized in web technologies and artificial intelligence, Data Science.',
  },
  {
    degree: 'Intermediate',
    institution: 'Vertex Junior College',
    period: '2020 - 2022',
  },
];

const skills = [
  'Java',
  'Python',
  'JavaScript',
  'GCP',
  'SQL',
  'Power BI',
  'React',
  'Node.js',
  'HTML5',
  'CSS3',
  'Git',
  'GitHub',
  'Machine Learning',
  'Deep Learning',
];

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here's a summary of my professional experience, education, and skills.
          </p>
          <a
            href="/Srihitha-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300"
            download="Resume.pdf"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* ▶️ Resume Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Resume Walkthrough Video
          </h3>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
           <video
            controls
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          >
            <source src="/resume-explainer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </motion.div>

        {/* 💼 Experience and 🎓 Education Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary-500 mr-4" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 pb-2"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-500"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h4>
                  {exp.company && (
                    <div className="flex justify-between mb-2">
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                  )}
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="text-primary-500 mr-4" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 pb-2"
                >
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary-500"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
