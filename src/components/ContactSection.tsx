import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-500" />,
      title: 'Email',
      content: 'srihitha825@gmail.com',
      link: 'mailto:srihitha825@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-500" />,
      title: 'Phone',
      content: '+918309155825',
      link: 'tel:+918309155825',
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-500" />,
      title: 'Location',
      content: 'Nizamabad',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out if you have any questions or if you'd like to work together on a project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-primary-50 dark:bg-gray-800 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{info.content}</p>
            </motion.a>
          ))}
        </div>

        {/* "Send Me a Message" section has been removed */}

      </div>
    </section>
  );
};

export default ContactSection;
