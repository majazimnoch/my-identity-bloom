
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

// Define skill categories and skills
const skillSets = [
  {
    category: "Technical Skills",
    skills: [
      { name: "Skill 1", level: 90 },
      { name: "Skill 2", level: 85 },
      { name: "Skill 3", level: 80 },
      { name: "Skill 4", level: 75 },
      { name: "Skill 5", level: 70 },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Leadership", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Adaptability", level: 80 },
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Tool 1", level: 85 },
      { name: "Tool 2", level: 90 },
      { name: "Tool 3", level: 75 },
      { name: "Tool 4", level: 80 },
      { name: "Tool 5", level: 70 },
    ]
  }
];

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="container-section bg-gray-50">
      <span className="block text-center text-primary font-medium mb-4">My Expertise</span>
      <h2 className="section-heading">Skills & Proficiencies</h2>
      <p className="section-subheading">
        A comprehensive overview of my technical abilities, soft skills, and specialized knowledge.
      </p>

      <div className="max-w-5xl mx-auto mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillSets.map((skillSet, index) => (
            <div 
              key={skillSet.category}
              className={cn(
                "bg-white rounded-xl p-6 shadow-sm",
                index === 0 && "lg:col-span-1",
                index === 1 && "lg:col-span-1",
                index === 2 && "lg:col-span-1"
              )}
            >
              <h3 className="text-xl font-medium mb-6">{skillSet.category}</h3>
              <div className="space-y-4">
                {skillSet.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills grid */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-medium mb-6">Additional Skills & Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Certification 1",
              "Certification 2",
              "Certification 3",
              "Certification 4",
              "Certification 5",
              "Certification 6",
              "Certification 7",
              "Certification 8"
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg py-3 px-4 text-center hover:bg-primary/5 transition-colors"
              >
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
