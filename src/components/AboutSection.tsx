import React from 'react';
import { Code, Paintbrush, Lightbulb, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  level: number;
}

const skills: SkillProps[] = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Machine Learning/Deep Learning', level: 85 },
];

const services = [
  {
    icon: <Code className="w-8 h-8 mb-4 text-primary-500" />,
    title: 'Web Development',
    description: 'Building responsive and performant web applications with modern technologies.',
  },
  {
    icon: <Paintbrush className="w-8 h-8 mb-4 text-primary-500" />,
    title: 'Machine Learning/Deep Learning Development',
    description: 'Developing ML/DL models for real-world applications using TensorFlow and scikit-learn',
  },
  
  
];

const SkillBar: React.FC<SkillProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
        ></motion.div>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with a keen eye for design and a love for creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
             I'm Srihitha Balasankula, a skilled web developer proficient in HTML5, CSS3, JavaScript, React.js, Redux, and Node.js, crafting responsive, user-centric applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm deeply interested in Machine Learning and Deep Learning, showcased in my CNN-based Music Recommendation System. Continuously advancing my expertise, I leverage modern frameworks to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'HTML/CSS', 'Node.js', 'Java', 'Machine Learning', 'Deep Learning'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Skills</h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          Services I Offer
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;