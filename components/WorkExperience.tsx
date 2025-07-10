'use client'

import React from 'react'
import { motion } from 'framer-motion'

const textBlue = 'text-blue-400'

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-12 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-white mt-8 md:mt-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">Work Experience</h2>
          
          {/* Software Engineer */}
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400">Software Engineer</h3>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Tata Consultancy Services</h4>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-300">March 2022 - June 2025</p>
                <p className="text-gray-300">Location: Chicago, IL</p>
              </div>
            </div>
          
            <div className="space-y-4 mt-6">
              <p className="text-gray-300 mb-2">Client: United Airlines</p>
            </div>

            <div className="space-y-4 mt-6">
              <ul className="space-y-3">
                <li className="text-gray-300">
                  <span className="font-semibold">Migrated ~21 million records</span> from SQL to AWS DynamoDB with zero data loss, improving scalability and performance.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Developed and optimized RESTful APIs</span> using C# and .NET, integrated with AWS Lambda, Parameter Store, and DynamoDB.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Built frontend components</span> with React and TypeScript, implementing dynamic routing and server-side rendering via Next.js.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Containerized applications</span> using Docker and deployed to Kubernetes (EKS), streamlining CI/CD workflows.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Collaborated with DevOps</span> to automate deployments using Harness pipelines and ensured secure coding with Veracode scans.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Debugged and tested full-stack features</span> in coordination with QA, enhancing code reliability and user experience.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Used Postman for API testing</span>, GitHub for version control, and AWS CloudWatch for system observability.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">.NET</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">C#</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">MVC</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Next.js</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">AWS</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">DynamoDB</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Lambda</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">S3</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Postman</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Docker</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">GitHub</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Harness</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Swagger</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">CI/CD</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Agile</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">RESTful APIs</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Unit Testing</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">System Design</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Database Design</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Coordination with QA</span>
              </div>
            </div>
          </div>

          {/* Data Analyst Intern */}
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400">Data Analyst Intern</h3>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Instahub LLC</h4>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-300">January 2021 - March 2021</p>
                <p className="text-gray-300">Location: Philadelphia, PA (Remote)</p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <ul className="space-y-3">
                <li className="text-gray-300">
                  <span className="font-semibold">Analyzed sensor data</span> from AWS RDS (MySQL) to identify patterns in room usage and device activity.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Built predictive models</span> using R and Python to forecast energy savings based on room occupancy.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Conducted statistical analysis</span> to uncover trends, correlations, and support data-driven decision-making.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Designed interactive dashboards</span> in Tableau to visualize sensor insights for business stakeholders.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Utilized SQL Workbench and Jupyter Notebook</span> for data extraction, transformation, and model evaluation.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">AWS RDS</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">MySQL</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Python</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">R</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">matplotlib</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Tableau</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Jupyter Notebook</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Data Analysis</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Predictive Modeling</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Statistical Analysis</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Energy Optimization</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Sensor Data Processing</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Data Visualization</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Dashboard Design</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Trend Analysis</span>
              </div>
            </div>
          </div>

          {/* Data Scientist */}
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400">Junior Web Developer</h3>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Ezeelo Consumer Service PVT LTD</h4>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-300">August 2018 - August 2019</p>
                <p className="text-gray-300">Location: Nagpur, India</p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <ul className="space-y-3">
                <li className="text-gray-300">
                  <span className="font-semibold">Built and maintained responsive web pages</span> using HTML5, CSS3, JavaScript, and jQuery, ensuring smooth cross-browser performance.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Integrated RESTful APIs into frontend components</span> to enable real-time content updates and seamless data interactions.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Used Bootstrap and AJAX</span> to enhance UI responsiveness, improve page load speed, and ensure layout consistency.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Collaborated with backend developers and designers</span> to align frontend logic with business requirements and visual design.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Participated in testing and debugging</span> of UI features across mobile and desktop platforms.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Followed mobile-first and accessibility standards</span> to create clean, user-friendly interfaces.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">HTML5</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">CSS3</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">JavaScript</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">jQuery</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Bootstrap</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">AJAX</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">REST APIs</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Responsive Design</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Cross-Browser Testing</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">VS Code</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Git</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
