'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, Key, Server, ChevronRight, CheckCircle, ArrowLeft, Home } from 'lucide-react';

// Type definitions
type SecurityServiceKey = 'threat' | 'zero' | 'cloud' | 'compliance';

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
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Secure cloud solutions with built-in protection.',
      icon: '☁️',
      color: 'from-cyan-600 to-blue-600',
      link: '/services/cloud-infrastructure'
    },
    {
      id: 'consulting',
      title: 'Security Consulting',
      description: 'Expert guidance on security strategy and compliance.',
      icon: '💼',
      color: 'from-blue-600 to-indigo-600',
      link: '/services/consulting'
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'AI-powered threat detection and response.',
      icon: '🧠',
      color: 'from-purple-600 to-blue-600',
      link: '/services/ai-solutions'
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
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 mb-4`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <span className="text-red-400 text-sm font-semibold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function CybersecurityPage() {
  const [activeTab, setActiveTab] = useState<SecurityServiceKey>('threat');

  const securityServices: Record<SecurityServiceKey, {
    title: string;
    description: string;
    features: string[];
    stats: {
      detection: string;
      response: string;
      accuracy: string;
      threats: string;
    };
  }> = {
    threat: {
      title: 'Threat Detection & Response',
      description: '24/7 monitoring and instant threat neutralization',
      features: [
        'Real-time threat intelligence',
        'Advanced persistent threat (APT) detection',
        'Behavioral analytics and anomaly detection',
        'Automated incident response',
        'Forensic analysis and reporting',
        'Security orchestration (SOAR)'
      ],
      stats: {
        detection: '< 1 minute',
        response: '< 5 minutes',
        accuracy: '99.9%',
        threats: '1M+ blocked daily'
      }
    },
    zero: {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify security model',
      features: [
        'Identity and access management (IAM)',
        'Micro-segmentation',
        'Least privilege access control',
        'Continuous verification',
        'Encrypted communications',
        'Device trust verification'
      ],
      stats: {
        detection: '90% breach risk',
        response: '100% audit ready',
        accuracy: 'Granular control',
        threats: 'Complete coverage'
      }
    },
    cloud: {
      title: 'Cloud Security',
      description: 'Comprehensive protection for cloud environments',
      features: [
        'Cloud Security Posture Management (CSPM)',
        'Cloud Workload Protection (CWPP)',
        'Container and Kubernetes security',
        'Serverless security',
        'Multi-cloud security management',
        'Data loss prevention (DLP)'
      ],
      stats: {
        detection: 'All major clouds',
        response: 'Multi-framework',
        accuracy: '95% automated',
        threats: '360° view'
      }
    },
    compliance: {
      title: 'Compliance & Governance',
      description: 'Meet and exceed regulatory requirements',
      features: [
        'GDPR, HIPAA, SOC2 compliance',
        'Continuous compliance monitoring',
        'Automated audit reporting',
        'Policy management and enforcement',
        'Risk assessment and management',
        'Compliance dashboard and analytics'
      ],
      stats: {
        detection: '25+ supported',
        response: '80% automated',
        accuracy: 'Real-time',
        threats: 'Always ready'
      }
    }
  };

  const threatLandscape = [
    { threat: 'Ransomware', increase: '+150%', impact: 'Critical' },
    { threat: 'Phishing', increase: '+220%', impact: 'High' },
    { threat: 'Supply Chain', increase: '+430%', impact: 'Critical' },
    { threat: 'Zero-Day', increase: '+125%', impact: 'Critical' },
    { threat: 'Insider Threats', increase: '+47%', impact: 'High' },
    { threat: 'IoT Attacks', increase: '+300%', impact: 'Medium' }
  ];

  const securityLayers = [
    { layer: 'Network Security', tools: ['Firewalls', 'IDS/IPS', 'VPN', 'SIEM'] },
    { layer: 'Endpoint Protection', tools: ['EDR', 'Anti-malware', 'Device encryption', 'Patch management'] },
    { layer: 'Application Security', tools: ['WAF', 'SAST/DAST', 'API security', 'Code review'] },
    { layer: 'Data Security', tools: ['Encryption', 'DLP', 'Backup', 'Access control'] },
    { layer: 'Identity Security', tools: ['MFA', 'SSO', 'PAM', 'Identity governance'] }
  ];

  const incidentResponse = [
    { phase: 'Detect', time: '< 1 min', action: 'AI-powered threat detection' },
    { phase: 'Analyze', time: '< 3 min', action: 'Automated threat analysis' },
    { phase: 'Contain', time: '< 5 min', action: 'Isolate affected systems' },
    { phase: 'Eradicate', time: '< 15 min', action: 'Remove threat completely' },
    { phase: 'Recover', time: '< 30 min', action: 'Restore normal operations' },
    { phase: 'Learn', time: 'Continuous', action: 'Update defenses' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-800">
        <Breadcrumbs currentService="Cybersecurity" />
      </div>
      
      {/* Back to Services Link */}
      <BackToServices />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400">Advanced Cybersecurity</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
              Defend Against Tomorrow's Threats Today
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Military-grade cybersecurity solutions that protect your business from evolving threats 
              with AI-powered detection and automated response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all">
                Get Security Assessment
              </Link>
              <Link href="#demo" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Alert Banner */}
      <section className="py-4 bg-red-900/20 border-y border-red-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-sm">
              <span className="text-red-400 font-semibold">THREAT ALERT:</span> 
              <span className="text-gray-300"> 342 new vulnerabilities discovered this week. Ensure your systems are protected.</span>
            </span>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Security Solutions</h2>
            <p className="text-xl text-gray-400">Multi-layered defense for complete protection</p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(securityServices) as SecurityServiceKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-red-600 to-orange-600'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {securityServices[key].title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{securityServices[activeTab].title}</h3>
              <p className="text-gray-400 mb-6">{securityServices[activeTab].description}</p>
              <h4 className="font-semibold mb-4">Key Capabilities:</h4>
              <ul className="space-y-3">
                {securityServices[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-500/20">
              <h4 className="text-xl font-semibold mb-6">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(securityServices[activeTab].stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-2xl font-bold text-red-400 mb-1">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Threat Landscape */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Current Threat Landscape</h2>
            <p className="text-xl text-gray-400">Year-over-year threat increase</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatLandscape.map((item, idx) => (
              <div key={idx} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{item.threat}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    item.impact === 'Critical' ? 'bg-red-900/50 text-red-400' :
                    item.impact === 'High' ? 'bg-orange-900/50 text-orange-400' :
                    'bg-yellow-900/50 text-yellow-400'
                  }`}>
                    {item.impact}
                  </span>
                </div>
                <div className="text-3xl font-bold text-red-400">{item.increase}</div>
                <div className="text-sm text-gray-400 mt-1">Annual increase</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Defense in Depth</h2>
            <p className="text-xl text-gray-400">Multiple layers of security protection</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {securityLayers.map((layer, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-semibold mb-2">{layer.layer}</h3>
                    <div className="flex flex-wrap gap-2">
                      {layer.tools.map((tool, toolIdx) => (
                        <span key={toolIdx} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-green-400">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 to-orange-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Rapid Incident Response</h2>
            <p className="text-xl text-gray-400">From detection to recovery in minutes</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {incidentResponse.map((phase, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="text-red-400 font-semibold mb-2">{phase.time}</div>
                    <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.action}</p>
                  </div>
                  {idx < incidentResponse.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Wait Until It's Too Late</h2>
          <p className="text-xl text-gray-400 mb-8">
            Protect your business with enterprise-grade security today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all">
              Get Security Assessment
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