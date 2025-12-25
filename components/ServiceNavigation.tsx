'use client';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, Home, ExternalLink, Grid3x3 } from 'lucide-react';

// Type definitions
interface BreadcrumbsProps {
  currentService: string;
  parentPage?: string;
  parentPageUrl?: string;
}

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactElement;
  badge?: string;
}

interface RelatedServicesProps {
  services?: RelatedService[];
  currentServiceId?: string;
}

interface BackToServicesProps {
  label?: string;
  href?: string;
}

interface ServiceCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

// Breadcrumbs Component
export function Breadcrumbs({ 
  currentService, 
  parentPage = 'Services',
  parentPageUrl = '/services' 
}: BreadcrumbsProps) {
  return (
    <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            href="/" 
            className="text-gray-400 hover:text-white transition-colors flex items-center"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        <li className="text-gray-600">
          <ChevronRight className="w-4 h-4" />
        </li>
        <li>
          <Link 
            href={parentPageUrl} 
            className="text-gray-400 hover:text-white transition-colors"
          >
            {parentPage}
          </Link>
        </li>
        <li className="text-gray-600">
          <ChevronRight className="w-4 h-4" />
        </li>
        <li className="text-white font-medium" aria-current="page">
          {currentService}
        </li>
      </ol>
    </nav>
  );
}

// Back to Services Component
export function BackToServices({ 
  label = 'Back to Services',
  href = '/services' 
}: BackToServicesProps) {
  return (
    <Link 
      href={href}
      className="inline-flex items-center text-gray-400 hover:text-white transition-colors group mb-6"
    >
      <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
      {label}
    </Link>
  );
}

// Related Services Component
export function RelatedServices({ 
  services,
  currentServiceId 
}: RelatedServicesProps) {
  // Default related services if none provided
  const defaultServices: RelatedService[] = [
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics',
      href: '/services/ai-solutions',
      badge: 'Popular'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      href: '/services/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security for digital assets',
      href: '/services/cybersecurity'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end business modernization',
      href: '/services/digital-transformation',
      badge: 'Trending'
    },
    {
      title: 'Data Analytics',
      description: 'Turn data into actionable insights',
      href: '/services/data-analytics'
    },
    {
      title: 'IoT Solutions',
      description: 'Connect and manage smart devices',
      href: '/services/iot-solutions'
    }
  ];

  // Use provided services or filter default services
  const displayServices = services || defaultServices.filter(
    service => !service.href.includes(currentServiceId || '')
  ).slice(0, 3);

  return (
    <section className="py-12 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Related Services</h3>
          <Link 
            href="/services" 
            className="text-gray-400 hover:text-white transition-colors flex items-center group"
          >
            View All Services
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayServices.map((service, index) => (
            <Link 
              key={index}
              href={service.href} 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-[1.02] group"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h4>
                {service.badge && (
                  <span className="text-xs px-2 py-1 bg-purple-900/30 text-purple-400 rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-3">
                {service.description}
              </p>
              <div className="flex items-center text-purple-400 text-sm group-hover:text-purple-300">
                Learn More
                <ArrowLeft className="w-4 h-4 ml-1 rotate-180 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Call-to-Action Component
export function ServiceCTA({ 
  title = 'Ready to Get Started?',
  description = 'Transform your business with our cutting-edge technology solutions.',
  primaryButtonText = 'Schedule Consultation',
  primaryButtonHref = '/contact',
  secondaryButtonText = 'View Case Studies',
  secondaryButtonHref = '/case-studies'
}: ServiceCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonHref}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 inline-flex items-center justify-center"
          >
            {primaryButtonText}
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </Link>
          <Link
            href={secondaryButtonHref}
            className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 inline-flex items-center justify-center"
          >
            {secondaryButtonText}
            <ExternalLink className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Service Grid Navigation Component
export function ServiceGridNav() {
  const services = [
    { 
      id: 'ai-solutions',
      title: 'AI Solutions', 
      href: '/services/ai-solutions',
      color: 'from-purple-600 to-pink-600' 
    },
    { 
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure', 
      href: '/services/cloud-infrastructure',
      color: 'from-blue-600 to-cyan-600' 
    },
    { 
      id: 'cybersecurity',
      title: 'Cybersecurity', 
      href: '/services/cybersecurity',
      color: 'from-red-600 to-orange-600' 
    },
    { 
      id: 'data-analytics',
      title: 'Data Analytics', 
      href: '/services/data-analytics',
      color: 'from-green-600 to-teal-600' 
    },
    { 
      id: 'automation',
      title: 'Process Automation', 
      href: '/services/automation',
      color: 'from-indigo-600 to-purple-600' 
    },
    { 
      id: 'digital-transformation',
      title: 'Digital Transformation', 
      href: '/services/digital-transformation',
      color: 'from-yellow-600 to-red-600' 
    },
    { 
      id: 'consulting',
      title: 'Strategic Consulting', 
      href: '/services/consulting',
      color: 'from-gray-600 to-gray-800' 
    },
    { 
      id: 'iot-solutions',
      title: 'IoT Solutions', 
      href: '/services/iot-solutions',
      color: 'from-cyan-600 to-blue-600' 
    },
    { 
      id: 'ai-training',
      title: 'AI Training', 
      href: '/services/ai-training',
      color: 'from-pink-600 to-purple-600' 
    }
  ];

  return (
    <section className="py-12 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Grid3x3 className="w-5 h-5 mr-2" />
            All Services
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-all group-hover:transform group-hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`}></div>
                <span className="relative text-sm text-gray-300 group-hover:text-white transition-colors">
                  {service.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Utility function to generate service navigation props
export function getServiceNavProps(serviceId: string): {
  breadcrumbProps: BreadcrumbsProps;
  relatedServicesProps: RelatedServicesProps;
} {
  const serviceNames: { [key: string]: string } = {
    'ai-solutions': 'AI & Machine Learning',
    'cloud-infrastructure': 'Cloud Infrastructure',
    'cybersecurity': 'Cybersecurity',
    'data-analytics': 'Data Analytics & BI',
    'automation': 'Process Automation',
    'digital-transformation': 'Digital Transformation',
    'consulting': 'Strategic Consulting',
    'iot-solutions': 'IoT Solutions',
    'ai-training': 'AI Training & Education'
  };

  return {
    breadcrumbProps: {
      currentService: serviceNames[serviceId] || 'Service'
    },
    relatedServicesProps: {
      currentServiceId: serviceId
    }
  };
}

// Export all components
export default {
  Breadcrumbs,
  BackToServices,
  RelatedServices,
  ServiceCTA,
  ServiceGridNav,
  getServiceNavProps
};