import React from 'react';
import { Terminal, Github, Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Kuro</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Login</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Talk. <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Code.</span> Commit
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Build and manage your GitHub projects — hands-free, with voice commands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl">
              Try Live Demo
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Github className="w-5 h-5" />
              View GitHub Repo
            </button>
          </div>
        </div>

        {/* Demo Preview */}
        <div className="w-full max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-green-400">✓ You said: "Update README with intro"</div>
              <div className="text-blue-400">✓ README.md updated and committed to GitHub</div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Start Recording
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              Stop Recording
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;