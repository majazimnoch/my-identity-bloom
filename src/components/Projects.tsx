
import { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

// Define project categories and projects
const categories = ["All", "Category 1", "Category 2", "Category 3"];

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A comprehensive solution that addresses specific industry challenges through innovative approaches.",
    category: "Category 1",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Project Two",
    description: "An award-winning initiative that revolutionized the way we approach specific problems.",
    category: "Category 2",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A strategic initiative that resulted in significant improvements in efficiency and outcomes.",
    category: "Category 1",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Project Four",
    description: "An innovative approach to solving complex problems through systematic analysis and creative solutions.",
    category: "Category 3",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "Project Five",
    description: "A collaborative effort that brought together diverse perspectives to address multifaceted challenges.",
    category: "Category 2",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "Project Six",
    description: "A forward-thinking initiative that anticipated future trends and positioned for long-term success.",
    category: "Category 3",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <AnimatedSection id="projects" className="container-section">
      <span className="block text-center text-primary font-medium mb-4">My Work</span>
      <h2 className="section-heading">Featured Projects</h2>
      <p className="section-subheading">
        A showcase of my professional achievements, notable projects, and contributions.
      </p>

      <div className="section-box p-8">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? index % 2 === 0 
                    ? "warm-gradient shadow-sm" 
                    : "accent-gradient text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              className={cn(
                "group overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full rounded-xl",
                index % 2 === 0 ? "border border-pastel-peach/30" : "border border-pastel-pink/30"
              )}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={cn(
                    "inline-block p-2 rounded-full transition-colors",
                    index % 2 === 0 ? "bg-pastel-peach/40 group-hover:bg-pastel-orange" : "bg-pastel-pink/40 group-hover:bg-pastel-pink"
                  )}>
                    <ArrowUpRight size={16} className={cn(
                      "transition-colors",
                      index % 2 === 0 ? "text-gray-500 group-hover:text-white" : "text-gray-600 group-hover:text-white"
                    )} />
                  </span>
                </div>
                <p className="text-gray-600 text-sm flex-grow">{project.description}</p>
                <div className="mt-4">
                  <span className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-medium",
                    index % 2 === 0 ? "bg-pastel-peach/30 text-gray-700" : "bg-pastel-pink/30 text-gray-700"
                  )}>
                    {project.category}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
