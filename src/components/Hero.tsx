import React from 'react';
import { Terminal, Github, Download, ArrowRight, Volume2 } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    window.open('https://github.com/Sukumarsawant/Kuro-CLI-/archive/refs/tags/asset.zip', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/Sukumarsawant/Kuro-CLI-', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating voice indicators */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-purple-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-1000"></div>
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
          <a href="https://github.com/Sukumarsawant/Kuro-CLI-" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Volume2 className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium">10 Voice Profiles Available</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Talk. <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Code.</span> Commit
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Build and manage your GitHub projects — hands-free, with voice commands powered by AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleDownload}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Kuro CLI
            </button>
            <button 
              onClick={handleGitHub}
              className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub Repo
            </button>
          </div>
        </div>

        {/* Voice Profiles Preview */}
        <div className="w-full max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-green-400">✓ You said: "Update README with intro"</div>
              <div className="text-blue-400">✓ README.md updated and committed to GitHub</div>
              <div className="text-purple-400">✓ Using voice: James - Husky & Engaging</div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
              <Volume2 className="w-5 h-5 text-purple-400" />
              Available Voice Profiles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
              {[
                'James - Husky & Engaging',
                'Austin - Texas Boy',
                'Hope - Upbeat & Clear',
                'Blondie - Conversational',
                'Rachel - Young Female'
              ].map((voice, index) => (
                <div key={index} className="px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-lg text-xs border border-purple-500/30 hover:border-purple-400/50 transition-colors cursor-pointer">
                  {voice}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">+ 5 more specialized voices including Japanese and character voices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;