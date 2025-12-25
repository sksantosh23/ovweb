'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Cloud, Server, Shield, Zap, Globe, Database, ChevronRight, BarChart3, Lock, ArrowLeft, Home } from 'lucide-react';

// Type definitions
type ServiceKey = 'migration' | 'hybrid' | 'multicloud' | 'devops';

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
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Secure your cloud infrastructure with advanced protection.',
      icon: '🔒',
      color: 'from-red-600 to-orange-600',
      link: '/services/cybersecurity'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business with cloud-native solutions.',
      icon: '🚀',
      color: 'from-purple-600 to-pink-600',
      link: '/services/digital-transformation'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Leverage cloud-based analytics for insights.',
      icon: '📊',
      color: 'from-green-600 to-emerald-600',
      link: '/services/data-analytics'
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
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 mb-4`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <span className="text-cyan-400 text-sm font-semibold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function CloudInfrastructurePage() {
  const [activeService, setActiveService] = useState<ServiceKey>('migration');

  const services: Record<ServiceKey, {
    title: string;
    description: string;
    icon: React.ReactElement;
    features: string[];
    benefits: string[];
  }> = {
    migration: {
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure',
      icon: <Cloud className="w-6 h-6" />,
      features: [
        'Assessment and cloud readiness evaluation',
        'Migration strategy and roadmap',
        'Application modernization',
        'Data migration and synchronization',
        'Zero-downtime migration execution',
        'Post-migration optimization'
      ],
      benefits: [
        '50% reduction in migration time',
        'Zero data loss guarantee',
        '99.99% uptime during migration',
        'Cost-optimized architecture'
      ]
    },
    hybrid: {
      title: 'Hybrid Cloud',
      description: 'Best of both worlds - on-premise and cloud',
      icon: <Server className="w-6 h-6" />,
      features: [
        'Hybrid architecture design',
        'Seamless workload distribution',
        'Unified management platform',
        'Cross-cloud connectivity',
        'Data sovereignty compliance',
        'Disaster recovery setup'
      ],
      benefits: [
        'Flexible workload placement',
        '40% cost optimization',
        'Enhanced security posture',
        'Regulatory compliance'
      ]
    },
    multicloud: {
      title: 'Multi-Cloud',
      description: 'Leverage multiple cloud providers strategically',
      icon: <Globe className="w-6 h-6" />,
      features: [
        'Multi-cloud strategy development',
        'Cloud-agnostic architecture',
        'Unified cloud management',
        'Cross-cloud orchestration',
        'Cost optimization across clouds',
        'Vendor lock-in prevention'
      ],
      benefits: [
        'Best-of-breed services',
        'Risk diversification',
        '35% cost savings',
        'Global reach optimization'
      ]
    },
    devops: {
      title: 'Cloud DevOps',
      description: 'Accelerate delivery with cloud-native DevOps',
      icon: <Zap className="w-6 h-6" />,
      features: [
        'CI/CD pipeline implementation',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Kubernetes)',
        'Automated testing and deployment',
        'Monitoring and observability',
        'GitOps workflows'
      ],
      benefits: [
        '10x faster deployments',
        '90% reduction in errors',
        'Automated scalability',
        'Improved collaboration'
      ]
    }
  };

  const cloudProviders = [
    { name: 'AWS', logo: '☁️', services: 200, regions: 25 },
    { name: 'Azure', logo: '☁️', services: 180, regions: 60 },
    { name: 'Google Cloud', logo: '☁️', services: 150, regions: 35 },
    { name: 'Private Cloud', logo: '🔒', services: 'Custom', regions: 'On-premise' }
  ];

  const costOptimization = [
    {
      strategy: 'Right-sizing',
      savings: '30-40%',
      description: 'Optimize instance types and sizes based on actual usage'
    },
    {
      strategy: 'Reserved Instances',
      savings: '40-75%',
      description: 'Commit to long-term usage for significant discounts'
    },
    {
      strategy: 'Auto-scaling',
      savings: '25-35%',
      description: 'Scale resources dynamically based on demand'
    },
    {
      strategy: 'Spot Instances',
      savings: '60-90%',
      description: 'Leverage spare capacity for non-critical workloads'
    }
  ];

  const securityFeatures = [
    { icon: <Shield className="w-12 h-12" />, title: 'Zero Trust Security', desc: 'Never trust, always verify approach' },
    { icon: <Lock className="w-12 h-12" />, title: 'Encryption', desc: 'End-to-end encryption at rest and in transit' },
    { icon: <Server className="w-12 h-12" />, title: 'Compliance', desc: 'GDPR, HIPAA, SOC2, ISO27001 certified' },
    { icon: <Database className="w-12 h-12" />, title: 'Backup & DR', desc: 'Automated backups and disaster recovery' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-800">
        <Breadcrumbs currentService="Cloud Infrastructure" />
      </div>
      
      {/* Back to Services Link */}
      <BackToServices />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-full mb-6">
              <Cloud className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400">Enterprise Cloud Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Build, Scale, and Innovate in the Cloud
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your infrastructure with enterprise-grade cloud solutions that deliver 
              unmatched scalability, security, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Start Cloud Journey
              </Link>
              <Link href="#assessment" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
                Free Cloud Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Cloud Services</h2>
            <p className="text-xl text-gray-400">End-to-end cloud solutions for every business need</p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(services) as ServiceKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeService === key
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {services[key].icon}
                <span>{services[key].title}</span>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{services[activeService].title}</h3>
              <p className="text-gray-400 mb-6">{services[activeService].description}</p>
              <h4 className="font-semibold mb-4">What We Deliver:</h4>
              <ul className="space-y-3">
                {services[activeService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-8 border border-cyan-500/20">
              <h4 className="text-xl font-semibold mb-6">Key Benefits</h4>
              <div className="space-y-4">
                {services[activeService].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>Learn more about {services[activeService].title}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Multi-Cloud Expertise</h2>
            <p className="text-xl text-gray-400">Certified partners with leading cloud providers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudProviders.map((provider, idx) => (
              <div key={idx} className="bg-black border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <div className="text-4xl mb-4">{provider.logo}</div>
                <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>{provider.services}+ Services</div>
                  <div>{provider.regions} Regions</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Cloud Cost Optimization</h2>
            <p className="text-xl text-gray-400">Reduce cloud spending by up to 60%</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costOptimization.map((item, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{item.savings}</div>
                <h3 className="text-xl font-semibold mb-2">{item.strategy}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-400">Your data, protected at every layer</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-cyan-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join 100+ enterprises running on our cloud solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              Start Cloud Migration
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