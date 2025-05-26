import React from 'react';
import { motion } from 'framer-motion';

interface CertificateProps {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

const certificates: CertificateProps[] = [
  {
    id: 1,
    name: 'Oracle Academy Java Foundations Certification',
    issuer: 'Oracle Academy',
    date: 'March 2024',
  },
  {
    id: 2,
    name: 'Oracle Academy Java Fundamentals Certification',
    issuer: 'Oracle Academy',
    date: 'March 2024',
  },
  {
    id: 3,
    name: ' NPTEL Programming in Java',
    issuer: 'NPTEL',
    date: 'April 2024',
  },
  {
    id: 4,
    name: ' NPTEL Programming in Python',
    issuer: 'NPTEL',
    date: 'December 2023',
  },
];

const CertificatesSection: React.FC = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-gray-100 dark:bg-gray-700"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Certificates</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the certifications I've earned to enhance my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificate.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Issuer: {certificate.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Earned: {certificate.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;