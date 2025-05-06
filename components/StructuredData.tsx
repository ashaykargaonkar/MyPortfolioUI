import { Metadata } from 'next';

interface StructuredDataProps {
  data: any;
}

export function JsonLd({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getPersonSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ashay Kargaonkar',
    url: 'https://ashaykargaonkar.com',
    sameAs: [
      'https://linkedin.com/in/ashaykargaonkar',
      'https://github.com/ashaykargaonkar',
    ],
    jobTitle: 'Machine Learning Engineer | Data Scientist | Software Engineer',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Master of Science in Computer Science',
        credentialCategory: 'Masters',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'DePaul University'
        },
        validFrom: '2018',
        validUntil: '2019',
        description: 'Graduated in Fall 2019'
      }
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Tata Consultancy Services',
        description: 'Global IT services, consulting and business solutions company',
        sameAs: 'https://www.tcs.com/',
        employeeRole: 'Full-time Employee',
        startDate: '2021-07-01',
        jobTitle: 'Software Engineer',
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'Project',
          value: 'United Airlines',
          description: 'Working as a Software Engineer at TCS, assigned to United Airlines project, focusing on backend development and cloud solutions.'
        }
      }
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'DePaul University',
      sameAs: 'https://www.depaul.edu/',
      description: 'Private Catholic research university in Chicago, Illinois',
      foundingDate: '1898',
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chicago',
          addressRegion: 'IL',
          addressCountry: 'US'
        }
      }
    },
    description: 'Machine Learning Engineer | Data Scientist | Software Engineer with 4+ years of experience in C# .NET, AWS, and AI. Currently working with TCS on the United Airlines project, specializing in backend development and cloud solutions.',
    knowsAbout: [
      'Machine Learning',
      'Data Science',
      'Software Engineering',
      'C# .NET',
      'AWS Cloud Services',
      'Backend Development',
      'API Development',
      'Cloud Architecture'
    ]
  };

  return data;
}
