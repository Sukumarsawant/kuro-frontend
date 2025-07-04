import React from 'react';
import { Mic, Brain, Github, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - How It Works */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">How It Works</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Speak a command</h3>
                  <p className="text-gray-400 mb-3">Use natural language to describe what you want to accomplish</p>
                  <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                    <span className="text-purple-400 text-sm">"Create a file called hello.py"</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our AI processes it</h3>
                  <p className="text-gray-400 mb-3">Python backend converts voice to intent</p>
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                    <div className="text-green-400">$ touch hello.py</div>
                    <div className="text-green-400">$ git add hello.py</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">We update GitHub for you</h3>
                  <p className="text-gray-400 mb-3">Auto commit, push, and PR creation</p>
                  <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                    <div className="text-green-400 text-sm">✓ File created and committed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Live Demo */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Live Command Demo</h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="space-y-4 mb-6">
                <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Mic className="w-4 h-4" />
                    <span className="text-sm">You said:</span>
                  </div>
                  <p className="text-white">"Update README with intro"</p>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex items-center gap-2 text-green-400 mb-2">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Result:</span>
                  </div>
                  <p className="text-white">README.md updated and committed to GitHub</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Start Recording
                </button>
                <button className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                  Stop Recording
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-3">Updated Files</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">hello.py</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">README.md</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;