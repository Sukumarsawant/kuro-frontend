import React from 'react';
import { Mic, Brain, Github, Volume2 } from 'lucide-react';

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
                  <h3 className="text-xl font-bold text-white mb-2">AI processes with Gemini</h3>
                  <p className="text-gray-400 mb-3">Python backend with Gemini API converts voice to intent</p>
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
                  <p className="text-gray-400 mb-3">Auto commit, push, and PR creation with voice feedback</p>
                  <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                    <div className="text-green-400 text-sm">✓ File created and committed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Voice Profiles */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Voice Profiles</h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Volume2 className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">Choose Your Voice Assistant</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  'Professional Male',
                  'Professional Female', 
                  'Casual Male',
                  'Casual Female',
                  'British Accent',
                  'Australian Accent',
                  'Deep Voice',
                  'Friendly Tone',
                  'Tech Expert',
                  'Creative Voice'
                ].map((voice, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/30 hover:border-purple-500/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white text-sm">{voice}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Mic className="w-4 h-4" />
                  <span className="text-sm">Powered by ElevenLabs</span>
                </div>
                <p className="text-white text-sm">High-quality voice synthesis with natural intonation and emotion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;