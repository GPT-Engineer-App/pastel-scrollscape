import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHub, Twitter, Linkedin, ArrowDown, Code, Globe, Zap } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = (event) => {
    const sections = ['hero', 'about', 'achievements', 'projects', 'contact'];
    const scrollPosition = event.target.scrollTop;
    const windowHeight = window.innerHeight;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section.offsetTop <= scrollPosition + windowHeight / 2) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  return (
    <div className="h-screen overflow-y-scroll" onScroll={handleScroll}>
      <nav className="fixed top-0 left-0 right-0 bg-pink-100 bg-opacity-80 backdrop-blur-md z-50">
        <ul className="flex justify-center space-x-8 py-4">
          {['Home', 'About', 'Achievements', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-lg font-medium ${
                  activeSection === item.toLowerCase() ? 'text-purple-600' : 'text-gray-600'
                } hover:text-purple-600 transition-colors`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4 text-purple-800"
          >
            Guillaume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl text-purple-600 mb-8"
          >
            Founder of Vercel
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center space-x-4"
          >
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <GitHub size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">About Guillaume</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="/placeholder.svg" alt="Guillaume" className="rounded-lg shadow-lg mx-auto object-cover w-full h-[400px]" />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Guillaume is a visionary entrepreneur and the founder of Vercel, a cloud platform for static sites and Serverless Functions. With a passion for web development and a keen eye for innovation, Guillaume has revolutionized the way developers build and deploy web applications.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                His journey in the tech world began with a deep fascination for frontend technologies and a desire to make web development more accessible and efficient. This drive led to the creation of Vercel, which has since become a go-to platform for developers worldwide.
              </p>
              <p className="text-lg text-gray-700">
                Guillaume's leadership and technical expertise have been instrumental in shaping the modern web development landscape, empowering developers to create fast, scalable, and user-friendly applications with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-800">Next.js Creator</h3>
              <p className="text-gray-700">Developed Next.js, a popular React framework for building server-side rendered and static websites.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-800">Vercel Founder</h3>
              <p className="text-gray-700">Founded Vercel, a cloud platform for static sites and Serverless Functions, revolutionizing web deployment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-800">Industry Innovator</h3>
              <p className="text-gray-700">Pioneered serverless and edge computing solutions, pushing the boundaries of web performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-yellow-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-yellow-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/placeholder.svg" alt="Next.js" className="rounded-lg mb-4 mx-auto object-cover w-full h-[200px]" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">Next.js</h3>
              <p className="text-gray-700 mb-4">A React framework for production-grade applications with server-side rendering and static site generation capabilities.</p>
              <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/placeholder.svg" alt="Vercel" className="rounded-lg mb-4 mx-auto object-cover w-full h-[200px]" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">Vercel Platform</h3>
              <p className="text-gray-700 mb-4">A cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.</p>
              <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">Explore →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-purple-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-800">Get in Touch</h2>
          <p className="text-xl text-gray-700 mb-8">Interested in collaborating or have any questions? Feel free to reach out!</p>
          <a
            href="mailto:guillaume@example.com"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Contact Guillaume
          </a>
          <div className="mt-12">
            <p className="text-gray-600">Follow Guillaume on social media:</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <GitHub size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2023 Guillaume. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
