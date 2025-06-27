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
          
            <div className="mt-4">
              <p className="text-gray-300 mb-2">Client: United Airlines</p>
            </div>

            <div className="space-y-4 mt-6">
              <p className="text-gray-300 text-sm sm:text-base">
                Modernized legacy .NET systems by upgrading frameworks, refactoring backend logic using MVC, and migrating to DynamoDB, resulting in improved system performance and reduced maintenance.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Designed and deployed scalable RESTful APIs using C# on AWS, created frontend components with React.js, and architected the overall system including database design, Lambda functions, and table backups.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Built and maintained CI/CD pipelines using Harness, GitHub, and Docker; created Postman collections for testers, implemented unit testing for APIs, and worked in close coordination with QA to resolve bugs quickly and deliver features on time within Agile workflows.
              </p>
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
                  <span className="font-semibold">Analyzed AWS RDS sensor data using MySQL</span> to identify patterns in room and device usage.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Developed predictive models in R and Python</span> to improve energy efficiency, leveraging statistical analysis and data visualization (matplotlib, Tableau) to uncover usage trends and support strategic decisions.
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
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400">Data Scientist</h3>
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
                  <span className="font-semibold">Analyzed customer data using SQL and Python</span> to predict inventory needs and optimize global distribution through clustering and predictive algorithms.
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Developed product recommendation models that led to an 18% increase in sales.</span>
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Designed interactive Tableau dashboards</span> to visualize product demand and highlight emerging trends, enabling faster and more informed business decisions.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">SQL</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Python</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">R Studio</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Tableau</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Jupyter Notebook</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Data Analysis</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Predictive Modeling</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Clustering</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Recommendation Systems</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Data Visualization</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Statistical Analysis</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Customer Segmentation</span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Product Forecasting</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
