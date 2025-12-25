'use client';

import React from 'react';
import Link from 'next/link';
import { Brain, ArrowRight, CheckCircle, TrendingUp, Target, Shield, Users } from 'lucide-react';

const AIStrategyPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Strategy & Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Define your AI roadmap with guaranteed ROI. We help enterprises identify 
              high-impact use cases and build comprehensive AI strategies.
            </p>
            <div className="flex gap-4">
              <Link href="/contact?service=ai-strategy" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:scale-105 transition-transform">
                Start Your AI Journey
              </Link>
              <Link href="/roi-calculator" 
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
                Calculate ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'AI Opportunity Assessment', desc: 'Identify high-impact use cases' },
              { icon: Shield, title: 'Risk & Governance', desc: 'Ensure responsible AI practices' },
              { icon: Users, title: 'Organizational Readiness', desc: 'Build AI maturity across teams' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIStrategyPage;
