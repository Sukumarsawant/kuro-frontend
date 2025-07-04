import React from 'react';
import { 
  Mic, 
  Github, 
  FileText, 
  Shield, 
  Zap,
  Brain,
  Terminal,
  Volume2,
  Code,
  Users
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: 'Real-time voice commands',
      description: 'Natural speech recognition with instant processing using ElevenLabs'
    },
    {
      icon: Github,
      title: 'GitHub repo integration',
      description: 'Seamless connection to your repositories with automated workflows'
    },
    {
      icon: FileText,
      title: 'Create files, edit code, commit',
      description: 'Complete development workflow automation with voice commands'
    },
    {
      icon: Volume2,
      title: '10 Voice Profiles',
      description: 'Choose from diverse voice personalities including Japanese character voices'
    }
  ];

  const techStack = [
    { name: 'Python', icon: Terminal },
    { name: 'Gemini API', icon: Brain },
    { name: 'React', icon: Code },
    { name: 'ElevenLabs', icon: Volume2 },
    { name: 'GitHub API', icon: Github }
  ];

  const handleDownload = () => {
    window.open('https://github.com/Sukumarsawant/Kuro-CLI-/archive/refs/tags/asset.zip', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/Sukumarsawant/Kuro-CLI-', '_blank');
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Features */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Features</h2>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-200 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Voice Profiles Showcase */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Featured Voice Profiles</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'James', desc: 'Husky & Engaging' },
                  { name: 'Hope', desc: 'Upbeat & Clear' },
                  { name: 'Austin', desc: 'Texas Charm' },
                  { name: 'Rachel', desc: 'Professional' }
                ].map((voice, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-3 border border-gray-600/30">
                    <div className="text-white font-medium text-sm">{voice.name}</div>
                    <div className="text-purple-300 text-xs">{voice.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-3">+ 6 more including Japanese character voices</p>
            </div>
          </div>

          {/* Built With */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Built With</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-200 text-center group">
                    <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-white font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Creator Info */}
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 mb-8">
              <h3 className="text-white font-semibold mb-3">Created by</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="text-white font-medium">Sukumar Sawant</div>
                  <div className="text-gray-400 text-sm">Full Stack Developer</div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://github.com/Sukumarsawant" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/sukumar-sawant/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-xs">in</span>
                </a>
                <a href="https://x.com/18yearodd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-xs">𝕏</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-pink-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400/30 rounded-full animate-bounce"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to revolutionize your workflow?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join developers who have already transformed their GitHub experience with voice commands
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleDownload}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <Terminal className="w-5 h-5 group-hover:animate-pulse" />
                  Download Kuro CLI
                </button>
                <button 
                  onClick={handleGitHub}
                  className="px-8 py-4 border border-gray-400 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  Star on GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;