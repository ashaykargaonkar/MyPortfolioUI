'use client'

import React from 'react'
import { motion } from 'framer-motion'

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Work Experience</h2>
          
          {/* Software Engineer */}
          <div className="bg-gray-800 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Software Engineer</h3>
                <h4 className="text-xl font-semibold text-blue-400">Tata Consultancy Services</h4>
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
              <p className="text-gray-300">
                Successfully migrated a legacy lounge pass management system for United Airlines, transferring <span className="text-blue-400 font-semibold">~21 million OneTimePass records</span> from an SQL database to <span className="text-blue-400 font-semibold">AWS DynamoDB</span>, ensuring a seamless transition with zero data loss.
              </p>
              <p className="text-gray-300">
                Designed optimized database tables in <span className="text-blue-400 font-semibold">AWS DynamoDB</span> and implemented scalable web APIs using <span className="text-blue-400 font-semibold">C# and .NET</span>, enhancing system functionality, data retrieval, and integration with AWS infrastructure.
              </p>
              <p className="text-gray-300">
                Extensively worked with AWS services, including <span className="text-blue-400 font-semibold">DynamoDB for storage, AWS Lambda for serverless workflows, AWS Parameter Store</span> for secure configuration management, and AWS Elastic BeanStalk for deploying and managing containerized applications, ensuring scalability and performance.
              </p>
              <p className="text-gray-300">
                Collaborated with DevOps engineers to deploy the application securely and efficiently using <span className="text-blue-400 font-semibold">Veracode for security scanning and Harness pipelines</span> for CI /CD automation, delivering high-quality releases.
              </p>
              <p className="text-gray-300">
                Leveraged <span className="text-blue-400 font-semibold">Docker</span> to containerize the application, ensuring consistent development workflows across environments and enabling streamlined deployment processes.
              </p>
              <p className="text-gray-300">
                Partnered with testers to identify, debug, and resolve application issues, guaranteeing high-quality releases and a seamless user experience.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="text-blue-400 font-semibold">AWS DynamoDB</span>
                <span className="text-blue-400 font-semibold">AWS Lambda</span>
                <span className="text-blue-400 font-semibold">AWS Parameter Store</span>
                <span className="text-blue-400 font-semibold">AWS EKS</span>
                <span className="text-blue-400 font-semibold">.NET C#</span>
                <span className="text-blue-400 font-semibold">SQL</span>
                <span className="text-blue-400 font-semibold">Docker</span>
                <span className="text-blue-400 font-semibold">Kubernetes</span>
                <span className="text-blue-400 font-semibold">Veracode</span>
                <span className="text-blue-400 font-semibold">Harness</span>
                <span className="text-blue-400 font-semibold">Postman</span>
                <span className="text-blue-400 font-semibold">Swagger/OpenAPI</span>
                <span className="text-blue-400 font-semibold">boto3</span>
                <span className="text-blue-400 font-semibold">Git</span>
              </div>
            </div>
          </div>

          {/* Data Analyst Intern */}
          <div className="bg-gray-800 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Data Analyst Intern</h3>
                <h4 className="text-xl font-semibold text-blue-400">Instahub LLC</h4>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-300">January 2021 - March 2021</p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <p className="text-gray-300">
                Analyzed large datasets using <span className="text-blue-400 font-semibold">SQL and Python</span> to extract relevant insights, and performed detailed statistical analysis using R Studio to identify trends and forecast inventory needs.
              </p>
              <p className="text-gray-300">
                Visualized customer behavior, sales trends, and pricing insights using <span className="text-blue-400 font-semibold">Tableau and ggplot2</span>, creating interactive dashboards and detailed visualizations to assist stakeholders in data-driven decision-making.
              </p>
              <p className="text-gray-300">
                Delivered actionable insights into product demand, enabling the company to optimize inventory distribution and enhance customer satisfaction across diverse regions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
