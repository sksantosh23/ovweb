'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Rocket, Users, Cpu, Cloud, TrendingUp, Target, ChevronRight, ArrowRight } from 'lucide-react';

/* export default function DigitalTransformationPage() {
  const [activePhase, setActivePhase] = useState<PhaseKey>('assess');

  const transformationPhases: Record<PhaseKey, any> = { **/

  type PhaseKey = 'assess' | 'strategy' | 'implement' | 'optimize';

  interface TransformationPhase {
    title: string;
    description: string;
    duration: string;
    deliverables: string[];
    outcomes: string;
  }
  
  export default function DigitalTransformationPage() {
    const [activePhase, setActivePhase] = useState<PhaseKey>('assess');
  
    const transformationPhases: Record<PhaseKey, TransformationPhase> = {




    assess: {
      title: 'Digital Maturity Assessment',
      description: 'Evaluate your current digital capabilities',
      duration: '2-3 weeks',
      deliverables: [
        'Digital maturity score',
        'Gap analysis report',
        'Opportunity identification',
        'Transformation roadmap',
        'Business case development',
        'Priority matrix'
      ],
      outcomes: 'Clear understanding of where you are and where to go'
    },
    strategy: {
      title: 'Strategy Development',
      description: 'Create a comprehensive digital strategy',
      duration: '4-6 weeks',
      deliverables: [
        'Digital vision and strategy',
        'Technology architecture',
        'Change management plan',
        'Investment plan',
        'Risk assessment',
        'Success metrics'
      ],
      outcomes: 'Actionable blueprint for transformation'
    },
    implement: {
      title: 'Implementation',
      description: 'Execute transformation initiatives',
      duration: '6-12 months',
      deliverables: [
        'Agile delivery sprints',
        'Technology deployment',
        'Process reengineering',
        'Team training',
        'Change management',
        'Quick wins delivery'
      ],
      outcomes: 'Visible business improvements and ROI'
    },
    optimize: {
      title: 'Optimization',
      description: 'Continuously improve and scale',
      duration: 'Ongoing',
      deliverables: [
        'Performance monitoring',
        'Continuous improvement',
        'Scaling successful initiatives',
        'Innovation pipeline',
        'Culture transformation',
        'Knowledge transfer'
      ],
      outcomes: 'Sustainable competitive advantage'
    }
  };

  const transformationAreas = [
    {
      area: 'Customer Experience',
      icon: '👥',
      initiatives: [
        'Omnichannel engagement',
        'Personalization engines',
        'Customer journey mapping',
        'Digital self-service'
      ],
      impact: '40% increase in satisfaction'
    },
    {
      area: 'Operations',
      icon: '⚙️',
      initiatives: [
        'Process automation',
        'Supply chain digitization',
        'Smart manufacturing',
        'Predictive maintenance'
      ],
      impact: '50% efficiency gain'
    },
    {
      area: 'Business Model',
      icon: '💡',
      initiatives: [
        'Digital products/services',
        'Platform business models',
        'Subscription models',
        'Data monetization'
      ],
      impact: '30% new revenue streams'
    },
    {
      area: 'Workforce',
      icon: '👨‍💻',
      initiatives: [
        'Digital skills training',
        'Remote collaboration',
        'AI-augmented workforce',
        'Digital culture'
      ],
      impact: '60% productivity boost'
    }
  ];

  const technologies = [
    { name: 'Cloud Computing', adoption: '95%' },
    { name: 'Artificial Intelligence', adoption: '87%' },
    { name: 'IoT & Sensors', adoption: '76%' },
    { name: 'Blockchain', adoption: '45%' },
    { name: 'AR/VR', adoption: '38%' },
    { name: '5G Networks', adoption: '62%' }
  ];

  const successMetrics = [
    { metric: 'Revenue Growth', value: '25%', desc: 'Average increase in digital revenue' },
    { metric: 'Cost Reduction', value: '30%', desc: 'Operational cost savings' },
    { metric: 'Time to Market', value: '50%', desc: 'Faster product launches' },
    { metric: 'Customer NPS', value: '+40', desc: 'Net Promoter Score improvement' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400">Digital Transformation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Transform or Be Disrupted
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Navigate digital disruption with confidence. We help you reimagine your business 
              for the digital age with strategy, technology, and cultural transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Start Transformation
              </Link>
              <Link href="#assessment" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Transformation Journey</h2>
            <p className="text-xl text-gray-400">A proven 4-phase approach to digital success</p>
          </div>

          {/* Phase Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(transformationPhases) as PhaseKey[]).map((key, idx) => (
              <button
                key={key}
                onClick={() => setActivePhase(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activePhase === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                <span className="text-lg font-bold">{idx + 1}</span>
                <span>{transformationPhases[key].title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Phase Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{transformationPhases[activePhase].title}</h3>
                <span className="text-purple-400 text-sm">{transformationPhases[activePhase].duration}</span>
              </div>
              <p className="text-gray-400 mb-6">{transformationPhases[activePhase].description}</p>
              <h4 className="font-semibold mb-4">Key Deliverables:</h4>
              <ul className="space-y-2">
                {transformationPhases[activePhase].deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-8 border border-purple-500/20">
              <h4 className="text-xl font-semibold mb-4">Expected Outcome</h4>
              <p className="text-gray-300 text-lg mb-6">{transformationPhases[activePhase].outcomes}</p>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                <span>Learn more about this phase</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Transformation Areas</h2>
            <p className="text-xl text-gray-400">Comprehensive transformation across your enterprise</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationAreas.map((area, idx) => (
              <div key={idx} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{area.area}</h3>
                <ul className="space-y-2 mb-4">
                  {area.initiatives.map((initiative, iIdx) => (
                    <li key={iIdx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      {initiative}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-green-400 font-semibold">{area.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Enablers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technology Enablers</h2>
            <p className="text-xl text-gray-400">Leading-edge technologies driving transformation</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {technologies.map((tech, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{tech.name}</span>
                  <span className="text-purple-400">{tech.adoption}</span>
                </div>
                <div className="bg-gray-900 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-full transition-all duration-1000"
                    style={{ width: tech.adoption }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-gray-400">Average improvements from our transformations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{metric.value}</div>
                <h3 className="text-xl font-semibold mb-2">{metric.metric}</h3>
                <p className="text-gray-400 text-sm">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Readiness Assessment */}
      <section id="assessment" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-center">Digital Maturity Assessment</h2>
              <p className="text-gray-400 text-center mb-8">
                Evaluate your organization's digital readiness in 2 minutes
              </p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Digital Strategy</label>
                  <select className="w-full bg-black rounded-lg px-4 py-3">
                    <option>No formal digital strategy</option>
                    <option>Basic digital initiatives</option>
                    <option>Defined digital roadmap</option>
                    <option>Advanced digital strategy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Technology Adoption</label>
                  <select className="w-full bg-black rounded-lg px-4 py-3">
                    <option>Limited technology use</option>
                    <option>Some modern technologies</option>
                    <option>Significant adoption</option>
                    <option>Leading-edge technologies</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Data Utilization</label>
                  <select className="w-full bg-black rounded-lg px-4 py-3">
                    <option>Basic reporting only</option>
                    <option>Some analytics</option>
                    <option>Advanced analytics</option>
                    <option>AI/ML driven decisions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Digital Culture</label>
                  <select className="w-full bg-black rounded-lg px-4 py-3">
                    <option>Traditional mindset</option>
                    <option>Some digital awareness</option>
                    <option>Digital-first thinking</option>
                    <option>Innovation culture</option>
                  </select>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                  Get Your Digital Maturity Score
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transformation Success Stories</h2>
            <p className="text-xl text-gray-400">Real results from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { industry: 'Retail Giant', result: '45% online revenue growth', time: '8 months' },
              { industry: 'Financial Services', result: '60% faster loan processing', time: '6 months' },
              { industry: 'Manufacturing', result: '35% operational efficiency', time: '12 months' }
            ].map((story, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{story.industry}</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">{story.result}</div>
                <p className="text-gray-400">Achieved in {story.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Don't let digital disruption leave you behind. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Start Your Journey
            </Link>
            <Link href="/case-studies" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}