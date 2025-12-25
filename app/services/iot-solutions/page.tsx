'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Wifi, Cpu, Database, Cloud, 
  ChevronRight, CheckCircle, Activity, Shield,
  BarChart, Settings, Globe, Zap, Factory,
  Heart, Building2, ShoppingCart, TrendingUp,
  AlertCircle, Gauge, Network
} from 'lucide-react';

type UseCaseKey = 'manufacturing' | 'healthcare' | 'smartcity' | 'retail';

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactElement;
  applications: string[];
  benefits: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export default function IoTSolutionsPage() {
  const [activeUseCase, setActiveUseCase] = useState<UseCaseKey>('manufacturing');

  const useCases: Record<UseCaseKey, UseCase> = {
    manufacturing: {
      title: 'Smart Manufacturing',
      description: 'Transform your production facilities with Industrial IoT solutions that optimize operations, predict maintenance needs, and enhance quality control.',
      icon: <Factory className="w-8 h-8" />,
      applications: [
        'Predictive Maintenance',
        'Quality Control Automation',
        'Supply Chain Visibility',
        'Energy Management',
        'Worker Safety Monitoring',
        'Production Line Optimization'
      ],
      benefits: [
        '30% reduction in downtime',
        '45% improvement in OEE',
        '25% decrease in maintenance costs',
        'Real-time production insights'
      ],
      metrics: [
        { label: 'Efficiency Gain', value: '45%' },
        { label: 'Cost Reduction', value: '30%' },
        { label: 'ROI Period', value: '18 months' }
      ]
    },
    healthcare: {
      title: 'Healthcare IoT',
      description: 'Enhance patient care with connected medical devices, remote monitoring systems, and smart hospital infrastructure.',
      icon: <Heart className="w-8 h-8" />,
      applications: [
        'Remote Patient Monitoring',
        'Asset Tracking',
        'Environmental Monitoring',
        'Medication Management',
        'Wearable Health Devices',
        'Emergency Response Systems'
      ],
      benefits: [
        '40% improvement in patient outcomes',
        '50% reduction in readmission rates',
        '60% faster emergency response',
        'Enhanced patient experience'
      ],
      metrics: [
        { label: 'Patient Satisfaction', value: '92%' },
        { label: 'Cost Savings', value: '$2M/year' },
        { label: 'Response Time', value: '-60%' }
      ]
    },
    smartcity: {
      title: 'Smart City Solutions',
      description: 'Build intelligent urban infrastructure with IoT-powered traffic management, utilities monitoring, and public safety systems.',
      icon: <Building2 className="w-8 h-8" />,
      applications: [
        'Smart Traffic Management',
        'Waste Management Optimization',
        'Street Lighting Control',
        'Air Quality Monitoring',
        'Parking Management',
        'Public Safety Systems'
      ],
      benefits: [
        '35% reduction in traffic congestion',
        '40% energy savings',
        '50% improvement in response times',
        'Enhanced citizen services'
      ],
      metrics: [
        { label: 'Energy Saved', value: '40%' },
        { label: 'Traffic Flow', value: '+35%' },
        { label: 'Citizen Satisfaction', value: '88%' }
      ]
    },
    retail: {
      title: 'Retail IoT',
      description: 'Revolutionize retail operations with smart inventory management, customer analytics, and personalized shopping experiences.',
      icon: <ShoppingCart className="w-8 h-8" />,
      applications: [
        'Smart Inventory Management',
        'Customer Behavior Analytics',
        'Digital Signage',
        'Loss Prevention',
        'Supply Chain Tracking',
        'Environmental Control'
      ],
      benefits: [
        '25% increase in sales',
        '30% reduction in inventory costs',
        '45% improvement in customer satisfaction',
        'Real-time inventory visibility'
      ],
      metrics: [
        { label: 'Sales Increase', value: '25%' },
        { label: 'Inventory Accuracy', value: '99.5%' },
        { label: 'Customer Retention', value: '+40%' }
      ]
    }
  };

  const iotCapabilities = [
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Device Connectivity',
      description: 'Connect and manage thousands of devices across multiple protocols and networks.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Processing',
      description: 'Process millions of data points in real-time with edge and cloud computing.'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-time Monitoring',
      description: 'Monitor device health, performance, and metrics with live dashboards.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with end-to-end encryption and compliance.'
    }
  ];

  const technologies = [
    'MQTT', 'LoRaWAN', 'NB-IoT', '5G', 'Zigbee', 
    'Bluetooth LE', 'Edge Computing', 'AWS IoT', 
    'Azure IoT Hub', 'Google Cloud IoT', 'Kubernetes', 'Docker'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Assessment',
      description: 'Evaluate your current infrastructure and identify IoT opportunities'
    },
    {
      step: 2,
      title: 'Design',
      description: 'Architect a scalable IoT solution tailored to your needs'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy sensors, gateways, and cloud infrastructure'
    },
    {
      step: 4,
      title: 'Integration',
      description: 'Connect IoT data with your existing systems and workflows'
    },
    {
      step: 5,
      title: 'Optimization',
      description: 'Continuously improve and scale your IoT deployment'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">IoT Solutions</span>
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
            <div className="p-3 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl">
              <Wifi className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              IoT Solutions
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl">
            Connect, monitor, and optimize your physical world with our comprehensive IoT solutions. 
            From smart sensors to advanced analytics, we help you harness the power of connected devices 
            to drive efficiency, innovation, and growth.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            IoT Use Cases & Industries
          </h2>
          
          {/* Use Case Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(useCases) as UseCaseKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveUseCase(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeUseCase === key 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white scale-105' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {useCases[key].icon}
                <span>{useCases[key].title}</span>
              </button>
            ))}
          </div>

          {/* Use Case Details */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {useCases[activeUseCase].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {useCases[activeUseCase].description}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">Key Applications</h4>
                  <ul className="space-y-2 mb-6">
                    {useCases[activeUseCase].applications.map((app, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Expected Benefits</h4>
                  <ul className="space-y-2 mb-6">
                    {useCases[activeUseCase].benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <TrendingUp className="w-4 h-4 mr-2 text-green-400 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-900/50 rounded-lg p-4 mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {useCases[activeUseCase].metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Core IoT Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iotCapabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            IoT Implementation Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Technologies We Use
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <div 
                key={idx}
                className="bg-gray-800/30 rounded-lg px-4 py-2 border border-gray-700 hover:border-cyan-500/50 transition-colors"
              >
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-12 border border-cyan-800/50">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              IoT Solution Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10M+</div>
                <div className="text-gray-400">Devices Connected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500TB</div>
                <div className="text-gray-400">Data Processed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
                <div className="text-gray-400">Deployments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Platform Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Gauge className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Device Management</h3>
              <p className="text-gray-400 text-sm">
                Centralized management of all IoT devices with remote configuration and updates.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <BarChart className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Analytics Dashboard</h3>
              <p className="text-gray-400 text-sm">
                Real-time analytics and visualization of IoT data with customizable dashboards.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <AlertCircle className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Alert Management</h3>
              <p className="text-gray-400 text-sm">
                Intelligent alerting system with customizable rules and automated responses.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Cloud className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Integration</h3>
              <p className="text-gray-400 text-sm">
                Seamless integration with major cloud platforms for scalable data storage.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Edge Computing</h3>
              <p className="text-gray-400 text-sm">
                Process data at the edge for reduced latency and bandwidth optimization.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Settings className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">API Access</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive APIs for custom integrations and third-party applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect Your World?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your operations with intelligent IoT solutions that deliver real-time insights and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200"
            >
              Start Your IoT Journey
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-black/30">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-semibold text-white mb-6">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/services/ai-solutions" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">AI Solutions</h4>
              <p className="text-gray-400 text-sm">Enhance IoT with AI-powered analytics</p>
            </Link>
            <Link href="/services/cloud-infrastructure" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">Cloud Infrastructure</h4>
              <p className="text-gray-400 text-sm">Scalable cloud platforms for IoT data</p>
            </Link>
            <Link href="/services/data-analytics" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">Data Analytics</h4>
              <p className="text-gray-400 text-sm">Advanced analytics for IoT insights</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}