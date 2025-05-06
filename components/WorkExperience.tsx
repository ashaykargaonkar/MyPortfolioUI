'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
                <p className="text-gray-300">March 2022 - Present</p>
                <p className="text-gray-300">Location: Chicago, IL</p>
              </div>
            </div>
          
            <div className="mt-4">
              <p className="text-gray-300 mb-2">Client: United Airlines</p>
            </div>

            <div className="space-y-4 mt-6">
              <p className="text-gray-300 text-sm sm:text-base">
                Successfully migrated a legacy lounge pass management system for <span className="text-blue-400 font-semibold">United Airlines</span>, transferring <span className="text-blue-400 font-semibold">~21 million OneTimePass records</span> from an <span className="text-blue-400 font-semibold">SQL</span> database to <span className="text-blue-400 font-semibold">AWS DynamoDB</span>, ensuring a seamless transition with zero data loss.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Designed optimized database tables in <span className="text-blue-400 font-semibold">AWS DynamoDB</span> and implemented scalable <span className="text-blue-400 font-semibold">web APIs</span> using <span className="text-blue-400 font-semibold">C# and .NET</span>, enhancing system functionality, data retrieval, and integration with <span className="text-blue-400 font-semibold">AWS infrastructure</span>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Extensively worked with <span className="text-blue-400 font-semibold">AWS services</span>, including <span className="text-blue-400 font-semibold">DynamoDB</span> for storage, <span className="text-blue-400 font-semibold">AWS Lambda</span> for serverless workflows, <span className="text-blue-400 font-semibold">AWS Parameter Store</span> for secure configuration management, and <span className="text-blue-400 font-semibold">AWS Elastic Beanstalk</span> for deploying and managing containerized applications, ensuring <span className="text-blue-400 font-semibold">scalability and performance</span>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Collaborated with <span className="text-blue-400 font-semibold">DevOps</span> engineers to deploy the application securely and efficiently using <span className="text-blue-400 font-semibold">Veracode</span> for security scanning and <span className="text-blue-400 font-semibold">Harness</span> pipelines for <span className="text-blue-400 font-semibold">CI/CD</span> automation, delivering high-quality releases.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Leveraged <span className="text-blue-400 font-semibold">Docker</span> to containerize the application, ensuring consistent development workflows across environments and enabling <span className="text-blue-400 font-semibold">streamlined deployment</span> processes.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Partnered with testers to identify, debug, and resolve application issues, guaranteeing high-quality releases and a seamless user experience.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">AWS DynamoDB</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">AWS Lambda</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">AWS Parameter Store</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">AWS EKS</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">.NET C#</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">SQL</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Docker</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Kubernetes</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Veracode</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Harness</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Postman</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Swagger/OpenAPI</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">boto3</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Git</span>
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
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <p className="text-gray-300 text-sm sm:text-base">
                Analyzed large datasets using <span className="text-blue-400 font-semibold">SQL and Python</span> to extract relevant insights, and performed detailed <span className="text-blue-400 font-semibold">statistical analysis</span> using <span className="text-blue-400 font-semibold">R Studio</span> to identify trends and forecast inventory needs.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Visualized customer behavior, sales trends, and pricing insights using <span className="text-blue-400 font-semibold">Tableau and ggplot2</span>, creating <span className="text-blue-400 font-semibold">interactive dashboards</span> and detailed visualizations to assist stakeholders in <span className="text-blue-400 font-semibold">data-driven decision-making</span>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Delivered actionable insights into product demand, enabling the company to optimize inventory distribution and enhance customer satisfaction across diverse regions.
              </p>
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
              <p className="text-gray-300 text-sm sm:text-base">
                Analyzed customer data to predict inventory needs and optimize global distribution using <span className="text-blue-400 font-semibold">prediction algorithms and clustering</span>, implementing <span className="text-blue-400 font-semibold">product recommendation models</span> that <span className="text-blue-400 font-semibold">increased sales by 8%</span>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Leveraged <span className="text-blue-400 font-semibold">SQL and Python</span> for <span className="text-blue-400 font-semibold">data normalization</span>, improving <span className="text-blue-400 font-semibold">trend analysis</span> and <span className="text-blue-400 font-semibold">insight extraction</span>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Designed interactive <span className="text-blue-400 font-semibold">Tableau dashboards</span> to visualize <span className="text-blue-400 font-semibold">product demand</span>, aiding stakeholders in <span className="text-blue-400 font-semibold">decision-making</span>.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Python</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">SQL</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Tableau</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Data Analysis</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Predictive Modeling</span>
                <span className="text-blue-400 font-semibold text-xs sm:text-sm">Clustering</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
