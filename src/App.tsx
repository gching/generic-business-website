import React from 'react';
import { ArrowRight, CheckCircle2, BarChart2, Users, Globe2, Mail } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-950">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">BusinessPro</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-blue-200">Features</a>
              <a href="#solutions" className="text-white hover:text-blue-200">Solutions</a>
              <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transform Your Business Today
              </h1>
              <p className="mt-6 text-lg text-blue-100">
                Empower your organization with our cutting-edge solutions designed to drive growth and innovation.
              </p>
              <button className="mt-8 px-8 py-3 bg-white dark:bg-blue-100 text-blue-600 dark:text-blue-900 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-white transition duration-300 flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Rest of the sections remain unchanged */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <BarChart2 className="mx-auto h-12 w-12 text-blue-600" />
              <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Data-Driven Insights</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Make informed decisions with our advanced analytics platform.</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto h-12 w-12 text-blue-600" />
              <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Team Collaboration</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Foster seamless communication and productivity across teams.</p>
            </div>
            <div className="text-center">
              <Globe2 className="mx-auto h-12 w-12 text-blue-600" />
              <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Global Reach</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Connect with customers and partners worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Solutions That Drive Results
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {['Enterprise Solutions', 'Digital Transformation', 'Cloud Services', 'Security & Compliance'].map((solution) => (
              <div key={solution} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{solution}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Comprehensive solutions tailored to meet your business needs and drive sustainable growth.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Ready to Get Started?
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <a href="mailto:contact@businesspro.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                contact@businesspro.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 BusinessPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;