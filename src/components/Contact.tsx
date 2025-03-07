
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
    alert('Thanks for your message! This is a demo, so no message was actually sent.');
  };

  return (
    <AnimatedSection id="contact" className="container-section">
      <span className="block text-center text-primary font-medium mb-4">Get In Touch</span>
      <h2 className="section-heading">Contact Me</h2>
      <p className="section-subheading">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="max-w-5xl mx-auto mt-16">
        <div className="section-box p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="space-y-6">
                <div className="bg-pastel-lightpurple rounded-xl p-6 shadow-sm border border-pastel-purple/30">
                  <div className="flex items-start">
                    <div className="bg-pastel-purple p-3 rounded-full mr-4">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-sm text-gray-600">contact@example.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-pastel-lightgreen rounded-xl p-6 shadow-sm border border-pastel-green/30">
                  <div className="flex items-start">
                    <div className="bg-pastel-green p-3 rounded-full mr-4">
                      <Phone size={20} className="text-gray-800" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-pastel-lightpurple rounded-xl p-6 shadow-sm border border-pastel-purple/30">
                  <div className="flex items-start">
                    <div className="bg-pastel-purple p-3 rounded-full mr-4">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-sm text-gray-600">City, Country</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="rounded-xl p-8 bg-white border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-pastel-lightpurple/30 border border-pastel-purple/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-pastel-lightgreen/30 border border-pastel-green/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-pastel-lightpurple/30 border border-pastel-purple/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-pastel-lightgreen/30 border border-pastel-green/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center w-full primary-button py-3"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
