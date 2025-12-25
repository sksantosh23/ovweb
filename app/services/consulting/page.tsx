'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Building, TrendingUp, Users, Target, 
  ChevronRight, CheckCircle, BarChart, Briefcase,
  Lightbulb, Rocket, Shield, Globe, Award, Brain,
  DollarSign, Clock, Settings, Map
} from 'lucide-react';

type PhaseKey = 'assess' | 'strategy' | 'implement' | 'optimize';

export default function ConsultingPage() {
  const [activePhase, setActivePhase] = useState<PhaseKey>('assess');

  const transformationPhases: Record<PhaseKey, {
    title: string;
    description: string;
    duration: string;
    deliverables: string[];
    outcomes: string;
  }> = {
    assess: {
      title: 'Assess & Analyze',
      description: 'Comprehensive evaluation of your current business processes, technology stack, and organizational readiness for transformation.',
      duration: '2-4 weeks',
      deliverables: [
        'Current State Analysis Report',
        'Gap Analysis & Opportunities',
        'Risk Assessment Matrix',
        'Stakeholder Readiness Report'
      ],
      outcomes: 'Clear understanding of transformation requirements and priorities'
    },
    strategy: {
      title: 'Strategy Development',
      description: 'Creation of a detailed transformation roadmap aligned with your business objectives and market opportunities.',
      duration: '3-6 weeks',
      deliverables: [
        'Digital Transformation Strategy',
        'Technology Roadmap',
        'Resource Planning Guide',
        'ROI Projections'
      ],
      outcomes: 'Actionable strategy with clear milestones and success metrics'
    },
    implement: {
      title: 'Implement Solutions',
      description: 'Execution of transformation initiatives with agile methodology and continuous stakeholder engagement.',
      duration: '3-12 months',
      deliverables: [
        'Project Implementation Plan',
        'Change Management Framework',
        'Training Programs',
        'Progress Reports'
      ],
      outcomes: 'Successfully deployed solutions with minimal business disruption'
    },
    optimize: {
      title: 'Optimize & Scale',
      description: 'Continuous improvement and scaling of implemented solutions to maximize business value.',
      duration: 'Ongoing',
      deliverables: [
        'Performance Analytics',
        'Optimization Recommendations',
        'Scaling Strategy',
        'Success Metrics Dashboard'
      ],
      outcomes: 'Sustained transformation benefits and continuous improvement culture'
    }
  };

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Strategic Business Consulting',
      description: 'Align technology initiatives with business goals to drive growth and competitive advantage.',
      features: [
        'Business Model Innovation',
        'Market Entry Strategies',
        'Competitive Analysis',
        'Growth Planning'
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Guide your organization through comprehensive digital transformation journeys.',
      features: [
        'Digital Maturity Assessment',
        'Technology Modernization',
        'Process Automation',
        'Cultural Change Management'
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Operational Excellence',
      description: 'Optimize operations to improve efficiency, reduce costs, and enhance customer satisfaction.',
      features: [
        'Process Optimization',
        'Lean Six Sigma Implementation',
        'Supply Chain Enhancement',
        'Quality Management'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk & Compliance',
      description: 'Navigate complex regulatory landscapes and build robust risk management frameworks.',
      features: [
        'Regulatory Compliance',
        'Risk Assessment',
        'Business Continuity Planning',
        'Security Governance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Strategic Consulting</span>
          </nav>

          {/* Back Button */}
          <Link 
            href="/services"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Strategic Consulting
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl">
            Transform your business with expert strategic guidance. We help organizations navigate complex challenges, 
            embrace innovation, and achieve sustainable growth through data-driven insights and proven methodologies.
          </p>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Transformation Process
          </h2>
          
          {/* Phase Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(transformationPhases) as PhaseKey[]).map((key, idx) => (
              <button
                key={key}
                onClick={() => setActivePhase(key)}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                  activePhase === key 
                    ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white scale-105' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <span className="text-lg font-bold">{idx + 1}</span>
                <span>{transformationPhases[key].title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Phase Details */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                {transformationPhases[activePhase].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {transformationPhases[activePhase].description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {transformationPhases[activePhase].deliverables.map((item, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-400" />
                      Duration
                    </h4>
                    <p className="text-gray-400">{transformationPhases[activePhase].duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-400" />
                      Expected Outcomes
                    </h4>
                    <p className="text-gray-400">{transformationPhases[activePhase].outcomes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Consulting Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl text-purple-400">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose OMNIVERITY Consulting
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Industry Expertise</h3>
              <p className="text-gray-400">
                20+ years of experience across multiple industries with proven success records
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-400">
                500+ certified consultants with deep domain knowledge and technical expertise
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">
                Average 40% improvement in operational efficiency for our clients
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Fortune 500 Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$2B+</div>
              <div className="text-gray-400">Value Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Building className="w-6 h-6" />, name: 'Banking & Finance' },
              { icon: <Globe className="w-6 h-6" />, name: 'Technology' },
              { icon: <Shield className="w-6 h-6" />, name: 'Healthcare' },
              { icon: <Briefcase className="w-6 h-6" />, name: 'Manufacturing' },
              { icon: <DollarSign className="w-6 h-6" />, name: 'Retail' },
              { icon: <Map className="w-6 h-6" />, name: 'Logistics' },
              { icon: <Lightbulb className="w-6 h-6" />, name: 'Energy' },
              { icon: <Users className="w-6 h-6" />, name: 'Government' }
            ].map((industry, idx) => (
              <div 
                key={idx}
                className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-3"
              >
                <div className="text-purple-400">{industry.icon}</div>
                <span className="text-gray-300">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert consultants help you navigate your transformation journey with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-black/30">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-semibold text-white mb-6">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/services/digital-transformation" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">Digital Transformation</h4>
              <p className="text-gray-400 text-sm">Complete digital transformation solutions</p>
            </Link>
            <Link href="/services/ai-solutions" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">AI Solutions</h4>
              <p className="text-gray-400 text-sm">Leverage AI for competitive advantage</p>
            </Link>
            <Link href="/services/data-analytics" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">Data Analytics</h4>
              <p className="text-gray-400 text-sm">Data-driven decision making</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}