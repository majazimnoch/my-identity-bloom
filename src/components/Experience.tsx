
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
        <div className="section-box p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Timeline navigation */}
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="space-y-2">
                  {experiences.map((exp, index) => (
                    <button
                      key={exp.id}
                      onClick={() => setActiveExp(exp.id)}
                      className={cn(
                        "w-full text-left p-4 rounded-lg transition-all",
                        activeExp === exp.id
                          ? index % 2 === 0 
                            ? "purple-gradient text-white shadow-md" 
                            : "green-gradient text-gray-800 shadow-md"
                          : "bg-gray-50 hover:bg-gray-100"
                      )}
                    >
                      <h3 className="font-medium">{exp.title}</h3>
                      <p className={cn(
                        "text-sm", 
                        activeExp === exp.id 
                          ? "text-white/90" 
                          : "text-gray-500"
                      )}>
                        {exp.company} · {exp.period}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience details */}
            <div className="md:w-2/3">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={cn(
                    "rounded-xl p-6 transition-all duration-300 border",
                    index % 2 === 0 
                      ? "bg-pastel-lightpurple border-pastel-purple/30" 
                      : "bg-pastel-lightgreen border-pastel-green/30",
                    activeExp === exp.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 hidden"
                  )}
                >
                  <div className="flex items-start">
                    <div className={cn(
                      "flex-shrink-0 p-3 rounded-lg mr-4",
                      index % 2 === 0 ? "bg-pastel-purple" : "bg-pastel-green"
                    )}>
                      <Briefcase size={24} className={index % 2 === 0 ? "text-white" : "text-gray-800"} />
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
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className={cn(
                            "inline-block w-2 h-2 rounded-full mt-2 mr-2",
                            index % 2 === 0 ? "bg-pastel-purple" : "bg-pastel-green"
                          )}></span>
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
      </div>
    </AnimatedSection>
  );
};

export default Experience;
