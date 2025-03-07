
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <AnimatedSection id="about" className="container-section">
      <div className="max-w-5xl mx-auto">
        <span className="block text-center text-primary font-medium mb-4">About Me</span>
        <h2 className="section-heading">My Professional Journey</h2>
        <p className="creative-heading text-center mb-8">Creativity meets strategy</p>
        <p className="section-subheading">
          A brief introduction to my background, philosophy, and what drives me in the advertising and entertainment industry.
        </p>
        
        <div className="section-box p-8 mt-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-md border border-pastel-peach/30">
                {/* Replace with your image */}
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 warm-gradient rounded-xl p-4 shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">10+</span>
                <span className="text-sm ml-2 text-gray-800">Years Experience</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-medium mb-6">
                A Creative Professional Dedicated to Excellence & Innovation
              </h3>
              <p className="text-gray-600 mb-6">
                I am a seasoned creative professional with over a decade of experience in the advertising and entertainment industry. My career has been defined by a commitment to excellence, a passion for innovative storytelling, and a drive to achieve exceptional results.
              </p>
              <p className="text-gray-600 mb-6">
                I believe in a thoughtful, audience-centered approach to creative problem-solving, combining analytical thinking with imaginative solutions to address complex challenges.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="bg-pastel-peach/20 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Education</h4>
                  <p className="text-gray-600">Bachelor of Arts, University Name, Year</p>
                </div>
                <div className="bg-pastel-pink/20 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Location</h4>
                  <p className="text-gray-600">City, Country</p>
                </div>
                <div className="bg-pastel-pink/20 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Email</h4>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
                <div className="bg-pastel-peach/20 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Employment</h4>
                  <p className="text-gray-600">Available for opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
