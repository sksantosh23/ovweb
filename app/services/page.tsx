'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Brain, Cpu, Cloud, Shield, 
  Database, Lightbulb, Users, Network, 
  GraduationCap, ChevronRight, ArrowLeft,
  Zap, BarChart, Globe, Settings, TrendingUp,
  Lock, Activity, Layers
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  link: string;
  features: string[];
  benefits: string[];
  color: string;
}

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const services: Service[] = [
    {
      id: 'ai-solutions',
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and predictive analytics powered by cutting-edge artificial intelligence.',
      icon: <Brain className="w-8 h-8" />,
      link: '/services/ai-solutions',
      features: [
        'Custom AI Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      benefits: [
        '60% faster decision making',
        'Automated workflows',
        'Enhanced customer insights'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your business needs.',
      icon: <Cloud className="w-8 h-8" />,
      link: '/services/cloud-infrastructure',
      features: [
        'Cloud Migration',
        'Multi-cloud Management',
        'DevOps Implementation',
        'Infrastructure as Code'
      ],
      benefits: [
        '40% cost reduction',
        '99.99% uptime',
        'Infinite scalability'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets from evolving threats.',
      icon: <Shield className="w-8 h-8" />,
      link: '/services/cybersecurity',
      features: [
        'Threat Detection & Response',
        'Security Audits',
        'Compliance Management',
        'Zero Trust Architecture'
      ],
      benefits: [
        '24/7 monitoring',
        'Compliance assured',
        'Risk mitigation'
      ],
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Turn your data into actionable insights with advanced analytics and business intelligence solutions.',
      icon: <BarChart className="w-8 h-8" />,
      link: '/services/data-analytics',
      features: [
        'Real-time Dashboards',
        'Predictive Modeling',
        'Big Data Processing',
        'Custom Reports'
      ],
      benefits: [
        'Data-driven decisions',
        'ROI tracking',
        'Performance optimization'
      ],
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Streamline operations and boost productivity with intelligent automation solutions.',
      icon: <Cpu className="w-8 h-8" />,
      link: '/services/automation',
      features: [
        'Robotic Process Automation',
        'Workflow Automation',
        'Integration Services',
        'Process Mining'
      ],
      benefits: [
        '70% efficiency gain',
        'Error reduction',
        'Cost savings'
      ],
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business for the digital age.',
      icon: <Lightbulb className="w-8 h-8" />,
      link: '/services/digital-transformation',
      features: [
        'Digital Strategy',
        'Legacy Modernization',
        'Change Management',
        'Innovation Labs'
      ],
      benefits: [
        'Future-ready business',
        'Competitive advantage',
        'Cultural transformation'
      ],
      color: 'from-yellow-600 to-red-600'
    },
    {
      id: 'consulting',
      title: 'Strategic Consulting',
      description: 'Expert guidance to navigate complex technology decisions and drive business growth.',
      icon: <Users className="w-8 h-8" />,
      link: '/services/consulting',
      features: [
        'IT Strategy',
        'Digital Roadmap',
        'Technology Assessment',
        'Transformation Planning'
      ],
      benefits: [
        'Strategic alignment',
        'Risk mitigation',
        'Accelerated growth'
      ],
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'iot-solutions',
      title: 'IoT Solutions',
      description: 'Connect and manage your devices with our comprehensive Internet of Things platform.',
      icon: <Network className="w-8 h-8" />,
      link: '/services/iot-solutions',
      features: [
        'Device Management',
        'Real-time Monitoring',
        'Edge Computing',
        'IoT Analytics'
      ],
      benefits: [
        'Operational visibility',
        'Predictive maintenance',
        'Asset optimization'
      ],
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'ai-training',
      title: 'AI Training & Education',
      description: 'Empower your team with comprehensive AI and technology training programs.',
      icon: <GraduationCap className="w-8 h-8" />,
      link: '/services/ai-training',
      features: [
        'Custom Training Programs',
        'Certification Courses',
        'Workshops & Seminars',
        'Online Learning Platform'
      ],
      benefits: [
        'Skilled workforce',
        'Innovation culture',
        'Competitive edge'
      ],
      color: 'from-pink-600 to-purple-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI & Analytics', count: 3 },
    { id: 'infrastructure', name: 'Infrastructure', count: 3 },
    { id: 'transformation', name: 'Transformation', count: 3 }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => {
        if (selectedCategory === 'ai') {
          return ['ai-solutions', 'data-analytics', 'ai-training'].includes(service.id);
        }
        if (selectedCategory === 'infrastructure') {
          return ['cloud-infrastructure', 'cybersecurity', 'iot-solutions'].includes(service.id);
        }
        if (selectedCategory === 'transformation') {
          return ['digital-transformation', 'automation', 'consulting'].includes(service.id);
        }
        return true;
      });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Navigation */}
          <nav className="flex items-center space-x-2 text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Services</span>
          </nav>

          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive technology solutions designed to transform your business. 
            From AI and cloud infrastructure to cybersecurity and digital transformation, 
            we deliver innovation that drives results.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-[1.02]"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-block p-3 bg-gradient-to-br ${service.color} rounded-xl mb-4`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  {/* Features preview */}
                  {hoveredService === service.id && (
                    <div className="mb-4 space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Zap className="w-3 h-3 mr-2 text-yellow-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose OMNIVERITY
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Expertise</h3>
              <p className="text-gray-400">20+ years serving Fortune 500 companies worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-green-600 to-teal-600 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Average 40% improvement in operational efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">ISO certified with 99.99% uptime guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-orange-600 to-red-600 rounded-full mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock support across all time zones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Service Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Discovery', description: 'Understanding your business needs and challenges' },
                { step: 2, title: 'Strategy', description: 'Developing a tailored solution roadmap' },
                { step: 3, title: 'Implementation', description: 'Executing with agile methodology and best practices' },
                { step: 4, title: 'Optimization', description: 'Continuous improvement and scaling' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Technologies We Master
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AWS', 'Azure', 'Google Cloud', 'TensorFlow', 'PyTorch', 
              'Kubernetes', 'Docker', 'React', 'Node.js', 'Python', 
              'Java', 'Blockchain', 'IoT', 'AR/VR', '5G'
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your business goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Get Started Today
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
    </div>
  );
}