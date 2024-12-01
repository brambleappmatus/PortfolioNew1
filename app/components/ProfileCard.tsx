'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ExpandableSection } from './ExpandableSection';
import { SkillMeter } from './SkillMeter';
import { Toaster } from 'react-hot-toast';
import { SkillTag } from './SkillTag';
import Image from 'next/image';

const salesSkills = [
  'Team Management',
  'Revenue Growth',
  'Client Relations',
  'Strategic Planning',
  'Sales Operations',
  'Market Analysis'
];

const technicalSkills = [
  'CRM Systems',
  'Sales Analytics',
  'Data Visualization',
  'Process Automation',
  'Digital Marketing'
];

const achievements = [
  '150% Sales Target',
  '30% Efficiency Boost',
  'Market Expansion',
  'Top Sales Manager 2022'
];

export default function ProfileCard() {
  return (
    <div className="h-screen flex flex-col justify-center max-w-3xl mx-auto px-4 py-8">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: 'var(--background)',
            color: 'var(--foreground)',
          },
        }}
      />
      
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQF7Vva9Bewv0Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732454598585?e=1738800000&v=beta&t=pnLPSUyhHtOgaPLrfuHM3tKUnbK0MzBrumAVqqDLLvM"
            alt="Matúš Staňo"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-black dark:text-white">Matúš Staňo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Sales Manager & Tech Enthusiast</p>
          
          <a
            href="https://drive.google.com/uc?export=download&id=1afx7X8CxgRRtidJChXqlhwpmRFNj1RDq"
            download="MatusStano_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 text-sm border border-transparent font-medium rounded-lg text-white bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Download CV
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <ExpandableSection title="Sales Leadership">
          <div className="py-3 space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Leading sales teams and driving revenue growth through strategic planning.
            </p>
            <div className="flex flex-wrap gap-2">
              {salesSkills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            <SkillMeter skill="Sales Expertise" defaultValue={95} />
          </div>
        </ExpandableSection>

        <ExpandableSection title="Technical Skills">
          <div className="py-3 space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Technical tools and platforms expertise.
            </p>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            <SkillMeter skill="Technical Proficiency" defaultValue={85} />
          </div>
        </ExpandableSection>

        <ExpandableSection title="Personal Achievements">
          <div className="py-3 space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Key milestones and recognition.
            </p>
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement) => (
                <SkillTag key={achievement}>{achievement}</SkillTag>
              ))}
            </div>
            <SkillMeter skill="Overall Performance" defaultValue={92} />
          </div>
        </ExpandableSection>
      </div>
    </div>
  );
}