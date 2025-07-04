import React from 'react';
import { ArrowRight, Mic, Terminal, Zap } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Kuro?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stop the endless typing. Start speaking your workflow.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6 border border-red-500/30">
                <Terminal className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                The Problem
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                Tired of typing repetitive terminal commands?
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm border border-gray-700">
              <div className="text-green-400">$ git add .</div>
              <div className="text-green-400">$ git commit -m "fix: update component"</div>
              <div className="text-green-400">$ git push origin main</div>
              <div className="text-green-400">$ npm run test</div>
              <div className="text-green-400">$ npm run build</div>
              <div className="text-gray-500 mt-2">// Every. Single. Day. 😩</div>
            </div>
          </div>
          
          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 border border-green-500/30">
                <Mic className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                The Solution
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                Just say it, and let Kuro do the work — from git commits to running tests
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mic className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">🎤 "Commit my changes and run tests"</span>
                </div>
                <div className="text-green-400 text-sm ml-6">✓ git add .</div>
                <div className="text-green-400 text-sm ml-6">✓ git commit -m "feat: add new feature"</div>
                <div className="text-green-400 text-sm ml-6">✓ npm run test</div>
                <div className="text-purple-400 text-sm ml-6">// Done! ✨</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
              <Mic className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">Voice Triggered</h4>
            <p className="text-sm text-gray-400">Natural speech recognition</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4 border border-blue-500/30">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">Automates Commands</h4>
            <p className="text-sm text-gray-400">Complex workflows simplified</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4 border border-green-500/30">
              <Terminal className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">Git Integration</h4>
            <p className="text-sm text-gray-400">Seamless version control</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-full mb-4 border border-orange-500/30">
              <ArrowRight className="w-6 h-6 text-orange-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">Natural Language</h4>
            <p className="text-sm text-gray-400">Speak naturally, execute precisely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;