
import { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { Briefcase } from 'lucide-react';

// Define job experiences
const experiences = [
  {
    id: 1,
    title: "Senior Position",
    company: "Company Name",
    period: "2020 - Present",
    description: "Led cross-functional teams to deliver high-impact projects. Developed strategic initiatives that increased efficiency by 35%. Mentored junior team members and improved team performance metrics.",
    achievements: [
      "Successfully delivered X major project ahead of schedule",
      "Increased team productivity by Y% through implementation of new processes",
      "Recognized with Z award for outstanding leadership"
    ]
  },
  {
    id: 2,
    title: "Mid-level Position",
    company: "Previous Company",
    period: "2016 - 2020",
    description: "Managed key projects from conception to completion. Collaborated with stakeholders to define requirements and ensure alignment with business objectives. Implemented innovative solutions to complex problems.",
    achievements: [
      "Spearheaded the development of feature A that increased user engagement by X%",
      "Optimized workflow processes resulting in Y% time savings",
      "Received recognition for exceptional problem-solving abilities"
    ]
  },
  {
    id: 3,
    title: "Junior Position",
    company: "Early Career Company",
    period: "2012 - 2016",
    description: "Assisted in the development and implementation of various projects. Conducted research and analysis to support decision-making processes. Contributed to team efforts in achieving departmental goals.",
    achievements: [
      "Contributed to X project that resulted in significant cost savings",
      "Developed proficiency in Y technologies and methodologies",
      "Recognized as top performer in junior category"
    ]
  }
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(experiences[0].id);

  return (
    <AnimatedSection id="experience" className="container-section bg-gray-50">
      <span className="block text-center text-primary font-medium mb-4">My Experience</span>
      <h2 className="section-heading">Professional Journey</h2>
      <p className="section-subheading">
        A timeline of my professional experience, responsibilities, and key achievements.
      </p>

      <div className="max-w-5xl mx-auto mt-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Timeline navigation */}
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="space-y-2">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExp(exp.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all",
                      activeExp === exp.id
                        ? "bg-white shadow-md border-l-4 border-primary"
                        : "hover:bg-white/50"
                    )}
                  >
                    <h3 className="font-medium">{exp.title}</h3>
                    <p className="text-sm text-gray-500">{exp.company} · {exp.period}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Experience details */}
          <div className="md:w-2/3">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={cn(
                  "bg-white rounded-xl p-6 shadow-sm mb-8 transition-all duration-300",
                  activeExp === exp.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 hidden"
                )}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-4">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <p className="text-gray-500">{exp.company} · {exp.period}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{exp.description}</p>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
