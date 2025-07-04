import React from 'react';
import { 
  Mic, 
  Github, 
  FileText, 
  Shield, 
  Zap,
  Brain,
  Terminal,
  GitBranch,
  Code
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: 'Real-time voice commands',
      description: 'Natural speech recognition with instant processing'
    },
    {
      icon: Github,
      title: 'GitHub repo integration',
      description: 'Seamless connection to your repositories'
    },
    {
      icon: FileText,
      title: 'Create files, edit code, commit',
      description: 'Complete development workflow automation'
    },
    {
      icon: Shield,
      title: 'Secure via GitHub OAuth',
      description: 'Safe and secure authentication'
    }
  ];

  const techStack = [
    { name: 'React', icon: Code },
    { name: 'Python', icon: Terminal },
    { name: 'Node.js', icon: Zap },
    { name: 'GitHub API', icon: Github },
    { name: 'OpenAI', icon: Brain }
  ];

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
                  <div key={index} className="flex gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-200">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
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
          </div>

          {/* Built With */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Built With</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-200 text-center">
                    <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <span className="text-white font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 flex items-center justify-center gap-2">
                Made with <span className="text-red-500">♥</span> at <span className="text-purple-400">[Your Name]</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to revolutionize your workflow?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join developers who have already transformed their GitHub experience with voice commands
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                Try Live Demo
              </button>
              <button className="px-8 py-4 border border-gray-400 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                Star on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;