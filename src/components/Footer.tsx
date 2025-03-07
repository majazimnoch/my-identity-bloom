
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all hover:text-primary"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold mb-2">Your Name</h2>
            <p className="text-gray-600">Professional Portfolio</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
