'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageSquare,
  Cpu, Menu, X, CheckCircle, AlertCircle, Calendar,
  Users, Building2, Globe, Linkedin, Twitter, Facebook,
  Instagram, ArrowRight, Sparkles, Headphones
} from 'lucide-react';
import BookingCalendar from '@/components/BookingCalendar';

const ContactPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  // Tab state for switching between Contact Form and Booking Calendar
  const [activeTab, setActiveTab] = useState<'contact' | 'booking'>('contact');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check URL hash for direct booking link
  useEffect(() => {
    if (window.location.hash === '#booking') {
      setActiveTab('booking');
    }
  }, []);

  const services = [
    'AI Strategy & Transformation',
    'Custom AI Development',
    'Enterprise AI Integration',
    'Computer Vision Solutions',
    'Natural Language Processing',
    'Predictive Analytics',
    'Intelligent Automation',
    'AI Security & Governance',
    'AI Training & CoE'
  ];

  const budgetRanges = [
    'Under $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K - $1M',
    'Over $1M'
  ];

  const offices = [
    {
      location: 'New York (HQ)',
      address: '350 Fifth Avenue, Suite 6800',
      city: 'New York, NY 10118',
      phone: '+1 (917) 687-0318',
      email: 'ny@omniverity.com',
      hours: '9:00 AM - 6:00 PM EST'
    },
    {
      location: 'Sydney',
      address: '100 George Street, Level 21',
      city: 'Sydney, NSW 2000',
      phone: '+61 (424) 017-928',
      email: 'sydney@omniverity.com',
      hours: '9:00 AM - 6:00 PM AEDT'
    },
    {
      location: 'Hyderabad',
      address: 'HITEC City, Cyberabad',
      city: 'Hyderabad, Telangana 500081',
      phone: '+91 996-340-1117',
      email: 'india@omniverity.com',
      hours: '9:00 AM - 6:00 PM IST'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Omniverity
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
            <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">Products</Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
            <Link href="/contact" className="text-cyan-400">Contact</Link>
            <button 
              onClick={() => setActiveTab('booking')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105"
            >
              Schedule Call
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <Link href="/" className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/services" className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
            <Link href="/products" className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors">Products</Link>
            <Link href="/about" className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
            <Link href="/contact" className="block py-3 text-cyan-400">Contact</Link>
            <button 
              onClick={() => {
                setActiveTab('booking');
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg text-center"
            >
              Schedule Call
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Get in Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Enterprise with AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your AI journey? Our experts are here to help you unlock 
              the full potential of artificial intelligence for your business.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div 
              className={`bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border transition-all text-center cursor-pointer ${
                activeTab === 'contact' ? 'border-cyan-500/50' : 'border-slate-700 hover:border-cyan-500/50'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              <Phone className="w-10 h-10 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm mb-3">Mon-Fri 9am-6pm EST</p>
              <a href="tel:+19176870318" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (917) 687-0318
              </a>
            </div>
            
            <div 
              className={`bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border transition-all text-center cursor-pointer ${
                activeTab === 'contact' ? 'border-purple-500/50' : 'border-slate-700 hover:border-purple-500/50'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              <Mail className="w-10 h-10 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm mb-3">24/7 Support Available</p>
              <a href="mailto:info@omniverity.com" className="text-purple-400 hover:text-purple-300 font-medium">
                info@omniverity.com
              </a>
            </div>
            
            <div 
              className={`bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border transition-all text-center cursor-pointer ${
                activeTab === 'booking' ? 'border-pink-500 ring-2 ring-pink-500/20' : 'border-slate-700 hover:border-pink-500/50'
              }`}
              onClick={() => setActiveTab('booking')}
            >
              <Calendar className="w-10 h-10 mx-auto mb-4 text-pink-400" />
              <h3 className="text-lg font-semibold mb-2">Schedule Meeting</h3>
              <p className="text-gray-400 text-sm mb-3">Book a consultation</p>
              <span className="text-pink-400 hover:text-pink-300 font-medium">
                Book Now →
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-800/50 backdrop-blur-lg rounded-xl p-1.5 border border-slate-700">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeTab === 'contact'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Mail className="w-4 h-4" />
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('booking')}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeTab === 'booking'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Schedule Meeting
              </button>
            </div>
          </div>

          {/* Content Area - Conditional Rendering */}
          <div id="booking" className="scroll-mt-32">
            {activeTab === 'booking' ? (
              /* ==================== BOOKING CALENDAR ==================== */
              <BookingCalendar />
            ) : (
              /* ==================== CONTACT FORM & OFFICES ==================== */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  
                  {success && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-green-400 font-medium">Message sent successfully!</p>
                        <p className="text-sm text-gray-400 mt-1">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <span className="text-red-400">{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="Company Inc."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map(budget => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate</option>
                          <option value="1-3months">1-3 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="6-12months">6-12 months</option>
                          <option value="12months+">12+ months</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 min-h-[120px]"
                        placeholder="Tell us about your AI project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Office Locations */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                  
                  <div className="space-y-6">
                    {offices.map((office, i) => (
                      <div key={i} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">{office.location}</h3>
                          <MapPin className="w-5 h-5 text-cyan-400" />
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <p className="text-gray-400">{office.address}</p>
                          <p className="text-gray-400">{office.city}</p>
                          
                          <div className="flex items-center gap-2 text-gray-300 mt-4">
                            <Phone className="w-4 h-4 text-cyan-400" />
                            <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="hover:text-cyan-400 transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          
                          <div className="flex items-center gap-2 text-gray-300">
                            <Mail className="w-4 h-4 text-cyan-400" />
                            <a href={`mailto:${office.email}`} className="hover:text-cyan-400 transition-colors">
                              {office.email}
                            </a>
                          </div>
                          
                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4 text-cyan-400" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Support Info */}
                  <div className="mt-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl p-6 border border-cyan-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Headphones className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold">24/7 Support</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Need immediate assistance? Our AI support team is available round the clock.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="text-gray-400">Emergency Hotline:</span>{' '}
                        <a href="tel:+18001234567" className="text-cyan-400 hover:text-cyan-300">
                          +1 (800) 123-4567
                        </a>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-400">Support Email:</span>{' '}
                        <a href="mailto:support@omniverity.com" className="text-cyan-400 hover:text-cyan-300">
                          support@omniverity.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 text-center">
                    <p className="text-gray-400 mb-4">Follow Us</p>
                    <div className="flex justify-center gap-4">
                      <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                        <Facebook className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                        <Instagram className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
