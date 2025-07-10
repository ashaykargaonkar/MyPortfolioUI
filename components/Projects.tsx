import React from 'react'
import { motion } from 'framer-motion'
import BulletList from './BulletList'

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
    title: 'ThinkMoves',
    description: '',
    tech: [
      'App Runner',
      'Azure OCR',
      'Azure Document Intelligence',
      'Chess.js',
      'React',
      'Next.js',
      'TypeScript',
      '.NET Core',
      'Cognito',
      'Vercel',
      'AWS S3',
      'DynamoDB'
    ],
    image: '/ChatGPT Image ThinkMoves.png',
    status: 'In Progress',
    details: [
      {
        title: 'Overview',
        content: (
          <>
            <Highlight>ThinkMoves is an AI-powered platform that converts handwritten chess scoresheets into accurate, digital PGNs, making post-game analysis fast, reliable, and shareable. It is built using Azure’s OCR and document classification services to automate the reading and interpretation of structured scoresheets.</Highlight>
            <br /><br />
            <Highlight>Currently supporting the ThinkMoves scoresheet format, the platform identifies key regions like player names, game metadata, and move sequences. It validates extracted moves using chess rules, reconstructing the full game while allowing users to review and edit where needed.</Highlight>
            <br /><br />
            <Highlight>ThinkMoves reduces the effort for players, coaches, and tournament organizers by eliminating manual data entry and enabling digital access to game records. It is designed to expand to support more sheet formats, making it a scalable tool for the broader chess community.</Highlight>
          </>
        )
      },
      {
        title: 'How It Works',
        content: (
          <>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="font-semibold">Upload Sheets:</span> Users upload handwritten chess scoresheets through the web interface (mobile app coming soon).
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">AI-Powered Processing:</span> Azure Document Intelligence classifies the layout type, and Azure OCR extracts text from predefined regions (moves, player info, etc.).
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Move Validation:</span> Extracted moves are matched against legal chess moves to fix recognition errors and ensure PGN accuracy.
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">PGN Generation:</span> The system assembles a clean PGN file with metadata, moves, and optional annotations for user review and editing.
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Cloud Storage:</span> All parsed games are securely stored using AWS S3 and DynamoDB, accessible anytime from the user's profile.
              </li>
            </ul>
          </>
        )
      },
      {
        title: 'Future Enhancements',
        content: (
          <>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="font-semibold">Native mobile apps for iOS & Android</span>
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Support for additional scoresheet formats beyond ThinkMoves</span>
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Advanced chess insights and post-game analysis tools</span>
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Smarter ML models to improve recognition accuracy</span>
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Multi-language OCR support</span>
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Community features for sharing games and feedback</span>
              </li>
            </ul>
          </>
        )
      }
    ]
  },
  {
    title: 'AshayTalks',
    description: '',
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'JSON',
      'GPT-4o-mini',
      'Vercel',
      'GitHub',
      'Vibe Coding',
      'AI Chatbot',
    ],
    image: '/ChatGPT Image AshayTalks.png',
    status: 'Upgrade Coming Next',
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
              <div className="flex flex-col gap-4 md:gap-6">
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
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center justify-between">
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
                    {project.title === 'ThinkMoves' && (
                      <a href="https://thinkmovesui.vercel.app" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors whitespace-nowrap text-sm md:text-base w-full flex items-center justify-center">
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Link to Website</span>
                        </span>
                      </a>
                    )}
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
        <div key={sectionIndex} className="flex flex-col gap-6">
          <h4 className="text-xl font-semibold text-white mb-4">{section.title}</h4>
          {Array.isArray(section.content) ? (
            <BulletList items={section.content as string[]} />
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
                  <span className="text-blue-500 w-5 h-5 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="ml-4">
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
