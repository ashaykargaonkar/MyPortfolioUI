import React from 'react'
import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  status: string;
  details: Array<{
    title: string;
    content: string | string[] | React.ReactNode;
  }>;
}

const Highlight = ({ children }: { children: string }) => {
  const keywords = [
    'Software Engineer', 'Data Scientist', 'C#', '.NET', 'Web API',
    'backend systems', 'intelligent applications', 'cloud services',
    'engineering problems', 'technical focus', 'software development',
    'machine learning', 'data pipelines',
    'chess analytics', 'Master\'s', 'Computer Science',
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
    description: 'An AI-powered chatbot designed to make my professional journey easy to explore.',
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'C#',
      '.NET Core',
      'JSON',
      'GPT-4o-mini',
      'Vercel',
      'Postman',
      'GitHub',
      'Vibe Coding',
      'AI Chatbot',
      'Natural Language Processing'
    ],
    image: '/ChatGPT Image AshayTalks.png',
    status: 'Coming Next',
    details: [
      {
        title: 'Overview',
        content: (
          <>
            <Highlight>AshayTalks is a personal AI chatbot I created to give recruiters and collaborators a faster, more intuitive way to understand my background—without digging through resumes or LinkedIn profiles. Built with GPT-4o-mini, it provides clear, reliable answers about my work experience, technical skills, and projects.</Highlight>
            <br /><br />
            <Highlight>I developed AshayTalks to save time during hiring conversations and to offer a more interactive way to showcase who I am professionally. It’s continuously evolving as I add new projects, skills, and experiences, making it a living reflection of my growth as a Software Engineer and Data Scientist.</Highlight>
          </>
        )
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
    description: 'AI-powered chess analysis platform converting handwritten scoresheets into accurate digital PGNs.',
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      '.NET Core',
      'Cognito',
      'App Runner',
      'Azure OCR',
      'TensorFlow',
      'OpenCV',
      'YOLO',
      'ResNet',
      'TrOCR',
      'Vercel',
      'Chess.js'
    ],
    image: '/ChatGPT Image ThinkMoves.png',
    status: 'In Progress',
    details: [
      {
        title: 'Overview',
        content: (
          <>
            <Highlight>ThinkMoves simplifies how players, coaches, and organizers review chess games by converting handwritten scoresheets into precise, shareable PGNs. Built with machine learning and computer vision, it eliminates manual data entry and unlocks effortless post-game analysis.</Highlight>
            <br /><br />
            <Highlight>Designed to adapt across different sheet formats, ThinkMoves uses advanced OCR, layout detection, and legal move validation to ensure accuracy and scalability. It's constantly evolving with smarter models and new features to support the global chess community.</Highlight>
          </>
        )
      },
      {
        title: 'How It Works',
        content: [
          'Scan Sheets: Upload physical scoresheets via the web interface (mobile app coming soon).',
          'AI Processing: Azure OCR, YOLO, ResNet, and TrOCR extract layout and handwritten moves.',
          'Move Matching: Legal moves are predicted and matched to clean up recognition errors.',
          'PGN Output: A polished PGN is generated for review, editing, and export.',
          'Cloud Storage: All games are stored in AWS S3 and DynamoDB, accessible anytime.'
        ]
      },
      {
        title: 'Future Enhancements',
        content: [
          'Native mobile apps for iOS & Android',
          'Deeper move analysis & strategy insights',
          'Multi-language support',
          'Smarter ML models for layout and handwriting recognition',
          'Community features for sharing and collaboration'
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
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-300' :
                      project.status === 'In Progress' ? 'bg-green-500/20 text-green-300' :
                      project.status === 'Coming Next' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-white/80 mb-8">
                    <Highlight>{project.description}</Highlight>
                  </p>

                  <div className="space-y-8">
                    {(() => {
  // Find index of the Overview section
  const overviewIndex = project.details.findIndex(section => section.title.toLowerCase() === 'overview');
  const [open, setOpen] = React.useState(false);
  const arrowIcon = open ? (
    <svg className="w-6 h-6 text-blue-400 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
  ) : (
    <svg className="w-6 h-6 text-blue-400 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
  );
  return (
    <>
      {/* Render Overview */}
      {project.details.slice(0, overviewIndex + 1).map((section, sectionIndex) => (
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
            typeof section.content === 'string' ? (
              <p className="text-white/80">
                <Highlight>{section.content}</Highlight>
              </p>
            ) : (
              <div className="text-white/80">{section.content}</div>
            )
          )}
        </div>
      ))}
      {/* Arrow Button */}
      {overviewIndex < project.details.length - 1 && (
        <button
          className="flex items-center mt-4 text-blue-400 hover:text-blue-300 focus:outline-none"
          onClick={() => setOpen(open => !open)}
          aria-label={open ? 'Collapse details' : 'Expand details'}
        >
          {open ? 'Hide Details' : 'Show More'} {arrowIcon}
        </button>
      )}
      {/* Collapsible Sections */}
      {open && project.details.slice(overviewIndex + 1).map((section, sectionIndex) => (
        <div key={sectionIndex + overviewIndex + 1} className="space-y-4 animate-fade-in">
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
            typeof section.content === 'string' ? (
              <p className="text-white/80">
                <Highlight>{section.content}</Highlight>
              </p>
            ) : (
              <div className="text-white/80">{section.content}</div>
            )
          )}
        </div>
      ))}
    </>
  );
})()}
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
