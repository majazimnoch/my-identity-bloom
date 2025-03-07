
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl opacity-70 translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in-left" style={{ animationDelay: '300ms' }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Professional Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-primary">Your Name</span>.
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mb-8">
              A passionate professional with expertise in your field. 
              I create innovative solutions and deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="primary-button">
                Get in Touch
              </a>
              <a href="#projects" className="subtle-button">
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-scale-in" style={{ animationDelay: '500ms' }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gray-200 overflow-hidden mx-auto glass">
                {/* Replace with your actual image */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary flex items-center justify-center text-white font-medium p-4 shadow-lg animate-float">
                <span className="text-center text-sm">10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-pulse-subtle"
        aria-label="Scroll down"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
