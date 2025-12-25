'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bot, Zap, Settings, TrendingUp, Clock, Shield, ChevronRight, BarChart, ArrowLeft, Home } from 'lucide-react';

// Type definitions
type ProcessKey = 'rpa' | 'workflow' | 'intelligent';

// Navigation Components
const Breadcrumbs = ({ currentService }: { currentService: string }) => {
  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
        </li>
        <li className="text-gray-600">
          <ChevronRight className="w-4 h-4" />
        </li>
        <li>
          <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
            Services
          </Link>
        </li>
        <li className="text-gray-600">
          <ChevronRight className="w-4 h-4" />
        </li>
        <li className="text-white font-semibold">
          {currentService}
        </li>
      </ol>
    </nav>
  );
};

const BackToServices = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <Link 
        href="/services" 
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to All Services</span>
      </Link>
    </div>
  );
};

const RelatedServices = () => {
  const relatedServices = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Enhance automation with artificial intelligence.',
      icon: '🧠',
      color: 'from-purple-600 to-blue-600',
      link: '/services/ai-solutions'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business processes end-to-end.',
      icon: '🚀',
      color: 'from-purple-600 to-pink-600',
      link: '/services/digital-transformation'
    },
    {
      id: 'iot-solutions',
      title: 'IoT Solutions',
      description: 'Connect and automate physical devices.',
      icon: '📡',
      color: 'from-teal-600 to-cyan-600',
      link: '/services/iot-solutions'
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 mb-4`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <span className="text-purple-400 text-sm font-semibold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AutomationPage() {
  const [selectedProcess, setSelectedProcess] = useState<ProcessKey>('rpa');

  const processes: Record<ProcessKey, {
    title: string;
    description: string;
    icon: React.ReactElement;
    features: string[];
    stats: {
      efficiency: string;
      accuracy: string;
      roi: string;
      savings: string;
    };
  }> = {
    rpa: {
      title: 'Robotic Process Automation',
      description: 'Automate repetitive tasks with software robots',
      icon: <Bot className="w-6 h-6" />,
      features: [
        'Data entry and validation automation',
        'Invoice and payment processing',
        'Customer onboarding workflows',
        'Report generation and distribution',
        'Email and communication automation',
        'System integration and data migration'
      ],
      stats: {
        efficiency: '90% faster processing',
        accuracy: '99.9% error reduction',
        roi: '300% ROI in 6 months',
        savings: '70% cost savings'
      }
    },
    workflow: {
      title: 'Workflow Automation',
      description: 'Streamline business processes end-to-end',
      icon: <Settings className="w-6 h-6" />,
      features: [
        'Business process mapping',
        'Approval workflow automation',
        'Document management systems',
        'Task assignment and tracking',
        'SLA monitoring and alerts',
        'Cross-department coordination'
      ],
      stats: {
        efficiency: '75% cycle time reduction',
        accuracy: '95% compliance rate',
        roi: '250% ROI in 8 months',
        savings: '60% operational savings'
      }
    },
    intelligent: {
      title: 'Intelligent Automation',
      description: 'AI-powered automation for complex decisions',
      icon: <Zap className="w-6 h-6" />,
      features: [
        'Natural language processing',
        'Predictive analytics integration',
        'Smart document processing',
        'Cognitive decision making',
        'Self-learning algorithms',
        'Exception handling automation'
      ],
      stats: {
        efficiency: '85% decision accuracy',
        accuracy: '95% process optimization',
        roi: '400% ROI in 12 months',
        savings: '80% manual effort reduction'
      }
    }
  };

  const industries = [
    {
      name: 'Banking & Finance',
      processes: ['Account opening', 'Loan processing', 'Compliance reporting', 'Fraud detection'],
      savings: '65% operational cost reduction'
    },
    {
      name: 'Healthcare',
      processes: ['Patient registration', 'Claims processing', 'Appointment scheduling', 'Medical records'],
      savings: '50% administrative time saved'
    },
    {
      name: 'Manufacturing',
      processes: ['Supply chain', 'Quality control', 'Inventory management', 'Order processing'],
      savings: '70% efficiency improvement'
    },
    {
      name: 'Retail',
      processes: ['Order fulfillment', 'Customer service', 'Returns processing', 'Inventory updates'],
      savings: '60% faster order processing'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: '24/7 Operations',
      description: 'Automated processes run continuously without breaks or downtime'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Scalability',
      description: 'Easily scale operations up or down based on demand'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Compliance',
      description: 'Ensure 100% compliance with automated audit trails'
    },
    {
      icon: <BarChart className="w-8 h-8 text-yellow-400" />,
      title: 'Analytics',
      description: 'Real-time insights and performance monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-800">
        <Breadcrumbs currentService="Automation Services" />
      </div>
      
      {/* Back to Services Link */}
      <BackToServices />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6">
              <Bot className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400">Intelligent Process Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Automate Everything. Accelerate Growth.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business operations with intelligent automation that reduces costs, 
              eliminates errors, and frees your team to focus on strategic initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                Start Automating
              </Link>
              <Link href="#calculator" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
                Calculate Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Automation Solutions</h2>
            <p className="text-xl text-gray-400">Choose the right automation strategy for your needs</p>
          </div>

          {/* Process Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(processes) as ProcessKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedProcess(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedProcess === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {processes[key].icon}
                <span>{processes[key].title}</span>
              </button>
            ))}
          </div>

          {/* Selected Process Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{processes[selectedProcess].title}</h3>
              <p className="text-gray-400 mb-6">{processes[selectedProcess].description}</p>
              <h4 className="font-semibold mb-4">Key Capabilities:</h4>
              <ul className="space-y-3">
                {processes[selectedProcess].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/20">
              <h4 className="text-xl font-semibold mb-6">Expected Outcomes</h4>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(processes[selectedProcess].stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-2xl font-bold text-blue-400 mb-1">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace('roi', 'ROI')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industry-Specific Automation</h2>
            <p className="text-xl text-gray-400">Tailored solutions for your industry challenges</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-4">{industry.name}</h3>
                <ul className="space-y-2 mb-4">
                  {industry.processes.map((process, pIdx) => (
                    <li key={pIdx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      {process}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-green-400 font-semibold">{industry.savings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Automation?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join 500+ companies that have transformed their operations with our automation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
              Get Free Assessment
            </Link>
            <Link href="/case-studies" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}