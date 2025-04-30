import React from 'react'
import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  details: Array<{
    title: string;
    content: string | string[];
  }>;
}

const Highlight = ({ children }: { children: string }) => {
  const keywords = [
    'Software Engineer', 'Data Scientist', 'C#', '.NET', 'Web API',
    'backend systems', 'intelligent applications', 'cloud services',
    'engineering problems', 'technical focus', 'software development',
    'AI', 'OCR', 'machine learning', 'data pipelines',
    'chess analytics', 'Master\'s', 'Computer Science', 'AWS',
    'database interactions', 'infrastructure', 'Chicago',
    'table tennis', 'tech ideas'
  ]

  const words = children.split(' ')
  return (
    <span>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '')
        if (keywords.includes(cleanWord)) {
          return (
            <span key={index} className="text-blue-400">
              {word}{' '}
            </span>
          )
        }
        return word + ' '
      })}
    </span>
  )
}

const projects: Project[] = [
  {
    title: 'AshayTalks',
    description: 'An AI chatbot that provides a convenient way to explore my professional journey.',
    tech: ['React', 'GPT 4-o-mini', 'TypeScript', 'Tailwind CSS'],
    image: '/ChatGPT Image AshayTalks.png',
    details: [
      {
        title: 'Overview',
        content: 'AshayTalks is an AI chatbot that provides a convenient way to explore my professional journey. Designed to save time and eliminate the hassle of navigating through traditional resumes or LinkedIn profiles, it offers users quick and clear insights into my career, skills, and experiences. Powered by GPT 4-o-mini, the chatbot ensures accurate and reliable responses for a seamless interaction.'
      },
      {
        title: 'How It Works',
        content: [
          'User Interaction: Access the chatbot through a floating chat button at the bottom-right corner of the webpage. Simply type your questions directly into the chat window.',
          'Query Processing: When you type a question, it is sent directly to GPT 4-o-mini, along with a structured JSON file containing my professional details. The AI processes the information and formulates a relevant response.',
          'AI Integration: The chatbot uses GPT 4-o-mini to analyze your query along with the data and generate an appropriate response.',
          'Response Delivery: Once the response is generated, it is sent back to the chat window, where you can view and interact with it seamlessly.'
        ]
      },
      {
        title: 'Key Technologies',
        content: [
          'Frontend: Built with React to create a modern, interactive, and user-friendly chat interface.',
          'AI Integration: Utilizes GPT 4-o-mini for natural language understanding and accurate responses.'
        ]
      },
      {
        title: 'Future Enhancements',
        content: [
          'Voice Interaction: Enabling users to speak to the chatbot instead of typing.',
          'Personalized AI Persona: Developing the chatbot to mimic my voice, mannerisms, and style of communication-similar to AI characters in movies like Chappie.',
          'Expanding Knowledge Base: Continuously updating the underlying professional data as my career evolves.',
          'Advanced Query Handling: Incorporating support for more complex questions and broader topics.'
        ]
      }
    ]
  },
  {
    title: 'ThinkMoves',
    description: 'A cutting-edge chess analysis platform that revolutionizes the way chess players analyze and share their games.',
    tech: ['React', '.NET Core', 'AWS', 'TensorFlow', 'OpenCV'],
    image: '/ChatGPT Image ThinkMoves.png',
    details: [
      {
        title: 'Overview',
        content: 'ThinkMoves is a revolutionary chess analysis platform that uses advanced computer vision and machine learning to convert physical chess score sheets into digital format. It makes it easier for chess players to analyze their games and share them with the chess community.'
      },
      {
        title: 'How It Works',
        content: [
          'Score Sheet Scanning: Users can scan their physical chess score sheets using the mobile app or web interface.',
          'OCR Processing: AWS Textract processes the scanned images to convert handwritten notation into digital format.',
          'Game Analysis: The system analyzes the game moves and provides insights into the player\'s performance.',
          'Cloud Storage: All games are stored securely in AWS S3 and DynamoDB for easy access and sharing.'
        ]
      },
      {
        title: 'Key Technologies',
        content: [
          'Frontend: React/TypeScript for a modern and responsive user interface.',
          'Backend: .NET Core for robust and scalable server-side processing.',
          'Cloud Services: AWS (S3, DynamoDB, Textract, Lambda) for scalable infrastructure.',
          'Machine Learning: TensorFlow and OpenCV for advanced image processing and recognition.'
        ]
      },
      {
        title: 'Future Enhancements',
        content: [
          'Mobile App Development: Creating native mobile apps for iOS and Android.',
          'Enhanced ML Models: Developing more sophisticated image recognition algorithms.',
          'Community Features: Implementing social features for chess players to connect and share.',
          'Advanced Analytics: Adding deeper game analysis capabilities.',
          'Multi-language Support: Making the platform accessible to chess players worldwide.'
        ]
      }
    ]
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">My Projects</h2>
          <p className="text-white/80 mb-12">A showcase of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-12">
                {/* Image Section */}
                <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-900 p-8 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain rounded-t-2xl"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
                  <p className="text-white/80 mb-8">
                    <Highlight>{project.description}</Highlight>
                  </p>

                  <div className="space-y-8">
                    {project.details.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">{section.title}</h4>
                        {Array.isArray(section.content) ? (
                          <ul className="space-y-3">
                            {section.content.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-white/80 flex items-start">
                                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>
                                  <Highlight>{item}</Highlight>
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white/80">
                            <Highlight>{section.content}</Highlight>
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
