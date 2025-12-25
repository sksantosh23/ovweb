'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, Brain, Cpu, BarChart, Shield, Zap, 
  Users, TrendingUp, Award, ArrowLeft, Home 
} from 'lucide-react';

// Type definition for solution keys
type SolutionKey = 'nlp' | 'ml' | 'cv' | 'dl';

// ============= NAVIGATION COMPONENTS =============
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
      id: 'automation',
      title: 'Automation Services',
      description: 'Streamline operations with intelligent process automation.',
      icon: '🤖',
      color: 'from-blue-600 to-purple-600',
      link: '/services/automation'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Turn data into actionable business insights.',
      icon: '📊',
      color: 'from-green-600 to-emerald-600',
      link: '/services/data-analytics'
    },
    {
      id: 'ai-training',
      title: 'AI Training',
      description: 'Empower your team with AI education and skills.',
      icon: '🎓',
      color: 'from-orange-600 to-red-600',
      link: '/services/ai-training'
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

// ============= MAIN COMPONENT =============
export default function AISolutionsPage() {
  // Properly typed state
  const [activeTab, setActiveTab] = useState<SolutionKey>('nlp');

  // Solutions object with proper typing
  const solutions: Record<SolutionKey, {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  }> = {
    nlp: {
      title: 'Natural Language Processing',
      description: 'Transform unstructured text into actionable insights',
      features: [
        'Sentiment Analysis & Opinion Mining',
        'Named Entity Recognition',
        'Text Classification & Categorization',
        'Language Translation & Localization',
        'Document Summarization',
        'Chatbot & Virtual Assistant Development'
      ],
      benefits: [
        '95% accuracy in text analysis',
        '80% reduction in manual processing time',
        'Multi-language support (50+ languages)',
        'Real-time processing capabilities'
      ]
    },
    ml: {
      title: 'Machine Learning',
      description: 'Predictive models that learn and improve over time',
      features: [
        'Predictive Analytics & Forecasting',
        'Classification & Regression Models',
        'Clustering & Segmentation',
        'Anomaly Detection',
        'Recommendation Systems',
        'Time Series Analysis'
      ],
      benefits: [
        '90% prediction accuracy',
        'Automated model optimization',
        'Scalable to millions of data points',
        'Self-improving algorithms'
      ]
    },
    cv: {
      title: 'Computer Vision',
      description: 'Extract meaning from visual information',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition & Analysis',
        'Image Classification',
        'Video Analytics',
        'OCR & Document Processing',
        'Quality Inspection Systems'
      ],
      benefits: [
        '99.9% accuracy in object detection',
        'Real-time video processing',
        '60% reduction in inspection costs',
        'Automated visual quality control'
      ]
    },
    dl: {
      title: 'Deep Learning',
      description: 'Advanced neural networks for complex problems',
      features: [
        'Neural Network Architecture Design',
        'Transfer Learning Implementation',
        'GANs & Generative Models',
        'Reinforcement Learning Systems',
        'AutoML Solutions',
        'Edge AI Deployment'
      ],
      benefits: [
        'State-of-the-art model performance',
        'Handles complex, non-linear patterns',
        'Continuous learning capabilities',
        'Optimized for GPU acceleration'
      ]
    }
  };

  const useCases = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      applications: [
        'Disease prediction and diagnosis',
        'Drug discovery acceleration',
        'Patient risk assessment',
        'Medical image analysis'
      ]
    },
    {
      industry: 'Finance',
      icon: '💰',
      applications: [
        'Fraud detection and prevention',
        'Credit risk assessment',
        'Algorithmic trading',
        'Customer churn prediction'
      ]
    },
    {
      industry: 'Retail',
      icon: '🛍️',
      applications: [
        'Demand forecasting',
        'Personalized recommendations',
        'Inventory optimization',
        'Customer behavior analysis'
      ]
    },
    {
      industry: 'Manufacturing',
      icon: '🏭',
      applications: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Production planning'
      ]
    }
  ];

  const processSteps = [
    { step: 1, title: 'Discovery', description: 'Understand your business challenges and AI opportunities' },
    { step: 2, title: 'Data Assessment', description: 'Evaluate data quality and availability' },
    { step: 3, title: 'Model Development', description: 'Build and train custom AI models' },
    { step: 4, title: 'Testing & Validation', description: 'Rigorous testing to ensure accuracy' },
    { step: 5, title: 'Deployment', description: 'Seamless integration with your systems' },
    { step: 6, title: 'Monitoring', description: 'Continuous improvement and optimization' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-800">
        <Breadcrumbs currentService="AI Solutions" />
      </div>
      
      {/* Back to Services Link */}
      <BackToServices />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400">Enterprise AI Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              AI Solutions That Transform Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Harness the power of artificial intelligence to automate processes, 
              unlock insights, and drive innovation at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Start AI Journey
              </Link>
              <Link href="/products" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
                View AI Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive AI Capabilities</h2>
            <p className="text-xl text-gray-400">Choose the right AI technology for your needs</p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(solutions) as SolutionKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                {key === 'nlp' && 'NLP'}
                {key === 'ml' && 'Machine Learning'}
                {key === 'cv' && 'Computer Vision'}
                {key === 'dl' && 'Deep Learning'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{solutions[activeTab].title}</h3>
              <p className="text-gray-400 mb-6">{solutions[activeTab].description}</p>
              <h4 className="font-semibold mb-4">Key Features:</h4>
              <ul className="space-y-2">
                {solutions[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/20">
              <h4 className="text-xl font-semibold mb-6">Business Benefits</h4>
              {solutions[activeTab].benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-400">AI solutions tailored for your industry</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIdx) => (
                    <li key={appIdx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-400">From concept to deployment in 6 steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-400">AI Models Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-400">AI Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <RelatedServices />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Leverage AI?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how AI can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Schedule AI Consultation
            </Link>
            <Link href="/roi-calculator" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
              Calculate AI ROI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}