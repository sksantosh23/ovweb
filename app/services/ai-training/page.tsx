'use client';
import { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Users, Monitor, Award, BookOpen, Target, ChevronRight, Clock } from 'lucide-react';

// Type definition for program keys
type ProgramKey = 'technical' | 'leadership' | 'business' | 'custom';

export default function TrainingPage() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramKey>('technical');

  const trainingPrograms: Record<ProgramKey, {
    title: string;
    description: string;
    icon: React.ReactElement;
    courses: string[];
    duration: string;
    format: string;
    certification: string;
  }> = {
    technical: {
      title: 'Technical Training',
      description: 'Build expertise in cutting-edge technologies',
      icon: <Monitor className="w-6 h-6" />,
      courses: [
        'AI & Machine Learning Fundamentals',
        'Cloud Architecture (AWS, Azure, GCP)',
        'Cybersecurity Essentials',
        'DevOps & CI/CD Practices',
        'Data Science & Analytics',
        'Full-Stack Development'
      ],
      duration: '2-12 weeks',
      format: 'Online & In-person',
      certification: 'Industry-recognized'
    },
    leadership: {
      title: 'Leadership Development',
      description: 'Empower leaders for digital age',
      icon: <Users className="w-6 h-6" />,
      courses: [
        'Digital Leadership Excellence',
        'Change Management',
        'Strategic Decision Making',
        'Innovation Management',
        'Agile Leadership',
        'Executive Presence'
      ],
      duration: '1-6 weeks',
      format: 'Executive workshops',
      certification: 'Executive certificate'
    },
    business: {
      title: 'Business Skills',
      description: 'Essential skills for business success',
      icon: <Target className="w-6 h-6" />,
      courses: [
        'Digital Marketing Mastery',
        'Project Management (PMP/Agile)',
        'Business Analytics',
        'Financial Planning',
        'Sales Excellence',
        'Customer Success'
      ],
      duration: '1-8 weeks',
      format: 'Flexible learning',
      certification: 'Professional certificate'
    },
    custom: {
      title: 'Custom Programs',
      description: 'Tailored training for your organization',
      icon: <BookOpen className="w-6 h-6" />,
      courses: [
        'Organization-specific curriculum',
        'Role-based training paths',
        'Technology adoption programs',
        'Compliance training',
        'Soft skills development',
        'Team building workshops'
      ],
      duration: 'Customized',
      format: 'Your preference',
      certification: 'Custom certification'
    }
  };

  const learningFormats = [
    {
      format: 'Live Virtual',
      icon: '💻',
      features: ['Interactive sessions', 'Real-time Q&A', 'Screen sharing', 'Breakout rooms'],
      best: 'Remote teams'
    },
    {
      format: 'Self-Paced',
      icon: '📱',
      features: ['Learn anywhere', 'Progress tracking', 'Downloadable resources', '24/7 access'],
      best: 'Flexible schedules'
    },
    {
      format: 'In-Person',
      icon: '🏢',
      features: ['Hands-on labs', 'Networking', 'Face-to-face interaction', 'Team exercises'],
      best: 'Intensive learning'
    },
    {
      format: 'Blended',
      icon: '🔄',
      features: ['Best of both worlds', 'Online + classroom', 'Flexible delivery', 'Comprehensive'],
      best: 'Maximum impact'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Professionals Trained' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '500+', label: 'Courses Available' },
    { value: '95%', label: 'Certification Pass Rate' }
  ];

  const certifications = [
    { name: 'AWS Certified', level: 'All levels', icon: '☁️' },
    { name: 'Azure Expert', level: 'Associate/Expert', icon: '☁️' },
    { name: 'Google Cloud', level: 'Professional', icon: '☁️' },
    { name: 'Scrum Master', level: 'CSM/PSM', icon: '🎯' },
    { name: 'PMP', level: 'Project Management', icon: '📊' },
    { name: 'Security+', level: 'CompTIA', icon: '🔒' }
  ];

  const learningPath = [
    { stage: 'Assess', desc: 'Skill gap analysis' },
    { stage: 'Plan', desc: 'Custom learning path' },
    { stage: 'Learn', desc: 'Engaging content' },
    { stage: 'Practice', desc: 'Hands-on labs' },
    { stage: 'Certify', desc: 'Industry credentials' },
    { stage: 'Apply', desc: 'Real-world projects' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400">Corporate Training Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">
              Empower Your Team. Transform Your Future.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              World-class training programs that upskill your workforce, drive innovation, 
              and prepare your organization for tomorrow's challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                Explore Programs
              </Link>
              <Link href="#assessment" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
                Free Skills Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Training Programs</h2>
            <p className="text-xl text-gray-400">From technical skills to leadership excellence</p>
          </div>

          {/* Program Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(trainingPrograms) as ProgramKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedProgram(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedProgram === key
                    ? 'bg-gradient-to-r from-orange-600 to-red-600'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {trainingPrograms[key].icon}
                <span>{trainingPrograms[key].title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Program Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{trainingPrograms[selectedProgram].title}</h3>
              <p className="text-gray-400 mb-6">{trainingPrograms[selectedProgram].description}</p>
              <h4 className="font-semibold mb-4">Popular Courses:</h4>
              <ul className="space-y-3">
                {trainingPrograms[selectedProgram].courses.map((course, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="w-5 h-5 text-orange-400 mt-0.5" />
                    <span className="text-gray-300">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-8 border border-orange-500/20">
              <h4 className="text-xl font-semibold mb-6">Program Details</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="font-semibold">{trainingPrograms[selectedProgram].duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Format:</span>
                  <span className="font-semibold">{trainingPrograms[selectedProgram].format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Certification:</span>
                  <span className="font-semibold">{trainingPrograms[selectedProgram].certification}</span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors">
                  <span>Request program details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Flexible Learning Formats</h2>
            <p className="text-xl text-gray-400">Choose the format that works for your team</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFormats.map((format, idx) => (
              <div key={idx} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="text-4xl mb-4">{format.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{format.format}</h3>
                <ul className="space-y-2 mb-4">
                  {format.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-800">
                  <span className="text-xs text-gray-400">Best for:</span>
                  <div className="text-sm font-semibold text-orange-400">{format.best}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-xl text-gray-400">Structured path to mastery</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {learningPath.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold">{idx + 1}</span>
                    </div>
                    <h3 className="font-semibold mb-1">{step.stage}</h3>
                    <p className="text-sm text-gray-400 max-w-[120px]">{step.desc}</p>
                  </div>
                  {idx < learningPath.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-6 top-10 text-gray-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-orange-900/20 to-red-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industry Certifications</h2>
            <p className="text-xl text-gray-400">Get certified by industry leaders</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-black/50 rounded-xl p-6 text-center border border-gray-800">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-xs text-gray-400">{cert.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Training?</h2>
            <p className="text-xl text-gray-400">Benefits that drive real business value</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Instructors',
                icon: <Award className="w-8 h-8" />,
                desc: 'Learn from industry veterans with real-world experience'
              },
              {
                title: 'Hands-on Learning',
                icon: <Monitor className="w-8 h-8" />,
                desc: 'Practical labs and projects for immediate application'
              },
              {
                title: 'Custom Content',
                icon: <BookOpen className="w-8 h-8" />,
                desc: 'Tailored curriculum aligned with your business goals'
              },
              {
                title: 'Flexible Scheduling',
                icon: <Clock className="w-8 h-8" />,
                desc: 'Learn at your pace with minimal business disruption'
              },
              {
                title: 'Progress Tracking',
                icon: <Target className="w-8 h-8" />,
                desc: 'Detailed analytics and progress reports'
              },
              {
                title: 'Post-Training Support',
                icon: <Users className="w-8 h-8" />,
                desc: 'Ongoing support and resources after completion'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-orange-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Assessment */}
      <section id="assessment" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-black border border-gray-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-center">Free Skills Assessment</h2>
              <p className="text-gray-400 text-center mb-8">
                Identify skill gaps and get a personalized training recommendation
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <input type="text" placeholder="Company Name" className="bg-gray-900 rounded-lg px-4 py-3" />
                <input type="email" placeholder="Email Address" className="bg-gray-900 rounded-lg px-4 py-3" />
                <select className="bg-gray-900 rounded-lg px-4 py-3">
                  <option>Select Department</option>
                  <option>IT & Technology</option>
                  <option>Sales & Marketing</option>
                  <option>Operations</option>
                  <option>Leadership</option>
                </select>
                <input type="number" placeholder="Team Size" className="bg-gray-900 rounded-lg px-4 py-3" />
              </div>
              <textarea 
                placeholder="Describe your training objectives" 
                className="w-full bg-gray-900 rounded-lg px-4 py-3 mb-6 h-24"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Training Success Stories</h2>
            <p className="text-xl text-gray-400">Real results from our training programs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { company: 'Tech Giant', program: 'Cloud Architecture', result: '90% AWS certified', time: '3 months' },
              { company: 'Bank Corp', program: 'Cybersecurity', result: '0 security incidents', time: '6 months' },
              { company: 'Retail Chain', program: 'Data Analytics', result: '45% efficiency gain', time: '4 months' }
            ].map((story, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{story.company}</h3>
                <p className="text-gray-400 mb-3">{story.program} Program</p>
                <div className="text-3xl font-bold text-orange-400 mb-2">{story.result}</div>
                <p className="text-sm text-gray-400">Achieved in {story.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Invest in Your Team's Future</h2>
          <p className="text-xl text-gray-400 mb-8">
            Build a workforce ready for tomorrow's challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all">
              Start Training Program
            </Link>
            <Link href="/case-studies" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
              Download Course Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}