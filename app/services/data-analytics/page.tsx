'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, BarChart3, TrendingUp, Database, Brain, 
  ChevronRight, CheckCircle, LineChart, PieChart,
  Activity, Target, Zap, Shield, Clock, Users,
  Globe, Award, FileText, Filter
} from 'lucide-react';

type SolutionKey = 'bi' | 'predictive' | 'bigdata' | 'advanced';

export default function DataAnalyticsPage() {
  const [activeSolution, setActiveSolution] = useState<SolutionKey>('bi');

  const solutions: Record<SolutionKey, {
    title: string;
    description: string;
    icon: React.ReactElement;
    features: string[];
    outcomes: string[];
  }> = {
    bi: {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with comprehensive BI solutions that provide real-time visibility into your business operations.',
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        'Interactive Dashboards',
        'Real-time KPI Monitoring',
        'Custom Report Generation',
        'Data Visualization',
        'Self-service Analytics'
      ],
      outcomes: [
        '60% faster decision making',
        '40% reduction in reporting time',
        'Improved operational visibility',
        'Data-driven culture adoption'
      ]
    },
    predictive: {
      title: 'Predictive Analytics',
      description: 'Leverage machine learning and statistical modeling to forecast trends, identify patterns, and make proactive business decisions.',
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        'Demand Forecasting',
        'Customer Churn Prediction',
        'Risk Assessment Models',
        'Trend Analysis',
        'Scenario Planning'
      ],
      outcomes: [
        '35% improvement in forecast accuracy',
        '25% reduction in customer churn',
        'Proactive risk mitigation',
        'Optimized resource allocation'
      ]
    },
    bigdata: {
      title: 'Big Data Processing',
      description: 'Handle massive volumes of structured and unstructured data with scalable processing solutions designed for the modern data landscape.',
      icon: <Database className="w-6 h-6" />,
      features: [
        'Data Lake Architecture',
        'Stream Processing',
        'Distributed Computing',
        'ETL/ELT Pipelines',
        'Data Warehousing'
      ],
      outcomes: [
        '10x faster data processing',
        'Petabyte-scale capability',
        'Real-time data ingestion',
        'Unified data platform'
      ]
    },
    advanced: {
      title: 'Advanced Analytics',
      description: 'Apply sophisticated analytical techniques including AI, deep learning, and complex algorithms to solve your most challenging business problems.',
      icon: <Brain className="w-6 h-6" />,
      features: [
        'Deep Learning Models',
        'Natural Language Processing',
        'Computer Vision Analytics',
        'Graph Analytics',
        'Prescriptive Analytics'
      ],
      outcomes: [
        'Breakthrough insights discovery',
        'Automated decision systems',
        'Complex problem solving',
        'Innovation acceleration'
      ]
    }
  };

  const industries = [
    { name: 'Finance', value: '89%', improvement: 'ROI improvement' },
    { name: 'Healthcare', value: '76%', improvement: 'Patient outcome improvement' },
    { name: 'Retail', value: '92%', improvement: 'Customer insight accuracy' },
    { name: 'Manufacturing', value: '84%', improvement: 'Operational efficiency' }
  ];

  const capabilities = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description: 'Process and analyze data streams in real-time for immediate insights and actions.'
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources into a unified analytics platform.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance with comprehensive governance frameworks.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to uncover hidden patterns and generate automated insights.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-teal-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Data Analytics</span>
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
            <div className="p-3 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Data Analytics & BI
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl">
            Transform your data into strategic assets with our comprehensive analytics solutions. 
            From business intelligence to advanced AI-driven insights, we help you make data-driven 
            decisions that drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Analytics Solutions
          </h2>
          
          {/* Solution Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(solutions) as SolutionKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSolution(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeSolution === key 
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white scale-105' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {solutions[key].icon}
                <span>{solutions[key].title}</span>
              </button>
            ))}
          </div>

          {/* Solution Details */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {solutions[activeSolution].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {solutions[activeSolution].description}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solutions[activeSolution].features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Expected Outcomes</h4>
                  <div className="space-y-3">
                    {solutions[activeSolution].outcomes.map((outcome, idx) => (
                      <div key={idx} className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                        <div className="flex items-center">
                          <Target className="w-5 h-5 mr-2 text-teal-400" />
                          <span className="text-gray-300">{outcome}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border border-green-800/50">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 mr-2 text-green-400" />
                      <span className="text-white font-semibold">Implementation Time</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Typical deployment: 4-12 weeks depending on complexity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Core Analytics Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 bg-gradient-to-br from-green-900/20 to-teal-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Industry Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full border-8 border-gray-800 relative">
                    <div 
                      className="absolute inset-0 rounded-full border-8 border-green-500"
                      style={{
                        clipPath: `polygon(0 0, 100% 0, 100% ${industry.value}, 0 ${industry.value})`
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{industry.value}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Analytics Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Data Discovery', description: 'Identify and assess all available data sources and requirements' },
                { step: 2, title: 'Data Integration', description: 'Connect and consolidate data from multiple systems and sources' },
                { step: 3, title: 'Data Processing', description: 'Clean, transform, and prepare data for analysis' },
                { step: 4, title: 'Analytics Modeling', description: 'Apply statistical and machine learning models' },
                { step: 5, title: 'Insight Generation', description: 'Extract meaningful patterns and actionable insights' },
                { step: 6, title: 'Visualization & Reporting', description: 'Create intuitive dashboards and reports for stakeholders' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Technologies We Use
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Power BI', 'Tableau', 'Apache Spark', 'Hadoop', 
              'Python', 'R', 'SQL', 'MongoDB', 'Elasticsearch',
              'TensorFlow', 'AWS', 'Azure'
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="bg-gray-800/30 rounded-lg p-3 text-center border border-gray-700 hover:border-green-500/50 transition-colors"
              >
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-2xl p-12 border border-green-800/50">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Success Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">10TB+</div>
                <div className="text-gray-400">Data Processed Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500M+</div>
                <div className="text-gray-400">Records Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900/20 to-teal-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data&apos;s Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your data into competitive advantage with our advanced analytics solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-200"
            >
              Start Your Analytics Journey
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
            <Link href="/services/ai-solutions" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">AI Solutions</h4>
              <p className="text-gray-400 text-sm">Enhance analytics with AI and machine learning</p>
            </Link>
            <Link href="/services/cloud-infrastructure" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">Cloud Infrastructure</h4>
              <p className="text-gray-400 text-sm">Scalable cloud platforms for big data</p>
            </Link>
            <Link href="/services/consulting" className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all">
              <h4 className="text-white font-semibold mb-2">Consulting</h4>
              <p className="text-gray-400 text-sm">Strategic guidance for data initiatives</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}