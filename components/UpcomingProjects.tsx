'use client'

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ThinkMoves',
    description: 'A powerful tool to analyze and convert chess scoresheets into digital PGNs. Select access will be provided soon. Development is ongoing.',
    status: 'In Progress',
    statusColor: 'bg-emerald-500/20 text-emerald-400'
  },
  {
    title: 'AshayTalks Upgrade',
    description: 'A new version of AshayTalks where users can talk directly to the chatbot. Personal interaction features are being integrated.',
    status: 'Coming Next',
    statusColor: 'bg-blue-500/20 text-blue-400'
  },
  {
    title: 'STOXS',
    description: 'A smart assistant for sustainable investment suggestions. It analyzes portfolios to recommend long-term, steady-growth opportunities.',
    status: 'In Planning',
    statusColor: 'bg-purple-500/20 text-purple-400'
  }
];

const UpcomingProjects = () => {
  
  return (
    <section id="upcoming-projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Projects</h2>
          <p className="text-gray-400 text-lg">Exciting projects currently in the pipeline</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
  <h3 className="text-xl font-bold text-white">{project.title}</h3>
  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.statusColor}`}>
    {project.status}
  </span>
</div>
<p className="text-gray-400 mb-4">{project.description}</p>
<div className="absolute bottom-4 left-6 right-6 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
