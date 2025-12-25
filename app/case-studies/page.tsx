'use client';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Building2, TrendingUp, Clock, Users, Award, BarChart } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Digital Transformation for Global Manufacturing Leader',
    client: 'Fortune 500 Manufacturing Company',
    industry: 'Manufacturing',
    challenge: 'Legacy systems hindering operational efficiency and real-time decision making',
    solution: 'Implemented cloud-based ERP system with AI-powered analytics and IoT integration',
    results: [
      '45% reduction in operational costs',
      '60% faster time-to-market for new products',
      '90% improvement in supply chain visibility',
      'ROI achieved within 18 months'
    ],
    technologies: ['Cloud Infrastructure', 'AI & ML', 'IoT', 'Data Analytics'],
    duration: '18 months',
    team: '25+ specialists',
    image: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: 'AI-Powered Customer Service Revolution',
    client: 'Leading E-commerce Platform',
    industry: 'Retail & E-commerce',
    challenge: 'Overwhelming customer service volume with declining satisfaction rates',
    solution: 'Deployed AI chatbots and predictive analytics for proactive customer support',
    results: [
      '80% reduction in response time',
      '65% decrease in support tickets',
      '95% customer satisfaction score',
      '$2.5M annual savings'
    ],
    technologies: ['AI Solutions', 'Natural Language Processing', 'Machine Learning', 'Automation'],
    duration: '6 months',
    team: '15+ experts',
    image: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: 'Cybersecurity Fortress for Financial Institution',
    client: 'Regional Bank Network',
    industry: 'Banking & Finance',
    challenge: 'Increasing cyber threats and regulatory compliance requirements',
    solution: 'Comprehensive security overhaul with 24/7 SOC and zero-trust architecture',
    results: [
      '100% compliance with regulatory standards',
      'Zero security breaches post-implementation',
      '75% reduction in false positives',
      'Advanced threat detection capabilities'
    ],
    technologies: ['Cybersecurity', 'Cloud Security', 'AI-powered Threat Detection', 'Compliance Tools'],
    duration: '12 months',
    team: '30+ security experts',
    image: '/api/placeholder/600/400'
  },
  {
    id: 4,
    title: 'Smart Hospital IoT Implementation',
    client: 'Healthcare Network',
    industry: 'Healthcare',
    challenge: 'Inefficient patient monitoring and resource management',
    solution: 'IoT-enabled patient monitoring system with real-time analytics dashboard',
    results: [
      '40% improvement in patient care metrics',
      '50% reduction in equipment downtime',
      '30% decrease in operational costs',
      'Enhanced patient safety protocols'
    ],
    technologies: ['IoT Solutions', 'Healthcare IT', 'Real-time Analytics', 'Cloud Platform'],
    duration: '9 months',
    team: '20+ specialists',
    image: '/api/placeholder/600/400'
  },
  {
    id: 5,
    title: 'Data-Driven Marketing Transformation',
    client: 'Global Consumer Brand',
    industry: 'Consumer Goods',
    challenge: 'Fragmented customer data and ineffective marketing campaigns',
    solution: 'Unified data platform with AI-powered customer segmentation and personalization',
    results: [
      '120% increase in marketing ROI',
      '85% improvement in customer engagement',
      '55% boost in conversion rates',
      'Real-time campaign optimization'
    ],
    technologies: ['Data Analytics', 'AI & ML', 'Marketing Automation', 'Cloud Services'],
    duration: '8 months',
    team: '18+ professionals',
    image: '/api/placeholder/600/400'
  },
  {
    id: 6,
    title: 'Supply Chain Optimization Through Blockchain',
    client: 'International Logistics Company',
    industry: 'Logistics & Transportation',
    challenge: 'Lack of transparency and inefficiencies in global supply chain',
    solution: 'Blockchain-based supply chain tracking with smart contracts',
    results: [
      '60% reduction in documentation errors',
      '35% faster shipment processing',
      'Complete supply chain transparency',
      '$5M annual cost savings'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'IoT', 'Cloud Infrastructure'],
    duration: '14 months',
    team: '22+ experts',
    image: '/api/placeholder/600/400'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover how we&apos;ve helped organizations across industries transform their operations, 
            enhance efficiency, and achieve remarkable results through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$50M+</div>
              <div className="text-gray-400">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">40+</div>
              <div className="text-gray-400">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 h-48 flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-white/20" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full border border-purple-800">
                      {study.industry}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {study.duration}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {study.team}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge</h4>
                    <p className="text-gray-500 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution</h4>
                    <p className="text-gray-500 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Key Results
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-gray-500 text-sm flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their operations with OMNIVERITY&apos;s innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}