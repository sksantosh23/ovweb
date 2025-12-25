'use client';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Server, Globe, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your privacy is important to us. This policy outlines how OMNIVERITY AI collects, uses, and protects your information.
          </p>
          <p className="text-gray-400 mt-4">
            Last Updated: March 15, 2024 | Effective Date: March 15, 2024
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-black/30 sticky top-0 z-20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            <a href="#information-collection" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Information Collection
            </a>
            <a href="#data-usage" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Data Usage
            </a>
            <a href="#data-protection" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Data Protection
            </a>
            <a href="#cookies" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Cookies
            </a>
            <a href="#third-parties" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Third Parties
            </a>
            <a href="#your-rights" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Your Rights
            </a>
            <a href="#contact" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 mb-4">
                OMNIVERITY AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
              </p>
              <p className="text-gray-300">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information Collection */}
            <div id="information-collection" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-300 mb-3">We may collect personal information that you provide directly to us, including:</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Name, email address, phone number, and mailing address
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Company name and job title
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Account credentials and authentication information
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Payment and billing information
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Communications and correspondence with us
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-300 mb-3">When you visit our website, we automatically collect certain information:</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      IP address and device information
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Browser type and operating system
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Pages visited and time spent on our site
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Referring website addresses
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Location data (country and city level)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div id="data-usage" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-300 mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Providing, maintaining, and improving our services
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Processing transactions and sending related information
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Responding to your comments, questions, and requests
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Sending technical notices, updates, and support messages
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Communicating about products, services, and events
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Monitoring and analyzing trends, usage, and activities
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Detecting, investigating, and preventing fraudulent activities
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Complying with legal obligations and protecting our rights
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div id="data-protection" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Data Security & Protection</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">Technical Measures</h4>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>• SSL/TLS encryption</li>
                    <li>• Secure data centers</li>
                    <li>• Regular security audits</li>
                    <li>• Access controls</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">Organizational Measures</h4>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>• Employee training</li>
                    <li>• Confidentiality agreements</li>
                    <li>• Limited access policies</li>
                    <li>• Regular reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div id="cookies" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">Cookies & Tracking Technologies</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Types of Cookies We Use</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <strong className="text-gray-300">Essential Cookies:</strong> Required for the website to function properly
                    </li>
                    <li>
                      <strong className="text-gray-300">Analytics Cookies:</strong> Help us understand how visitors interact with our website
                    </li>
                    <li>
                      <strong className="text-gray-300">Marketing Cookies:</strong> Used to deliver relevant advertisements
                    </li>
                    <li>
                      <strong className="text-gray-300">Preference Cookies:</strong> Remember your settings and preferences
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Parties */}
            <div id="third-parties" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-white">Third-Party Services</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We may share your information with third parties in certain situations:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  Service providers who assist us in operating our business
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  Analytics partners to help us understand usage patterns
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  Professional advisors such as lawyers and accountants
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  Law enforcement when required by law
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  With your consent for other purposes
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div id="your-rights" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white mb-2">You have the right to:</h3>
                  <ul className="space-y-1 text-gray-400">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate data</li>
                    <li>• Request deletion of your data</li>
                    <li>• Object to processing</li>
                    <li>• Data portability</li>
                    <li>• Withdraw consent</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white mb-2">How to exercise your rights:</h3>
                  <p className="text-gray-400">
                    To exercise any of these rights, please contact us using the information provided below. We will respond to your request within the timeframe required by applicable law.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. The retention period depends on the nature of the information and the purposes for which it is processed.
              </p>
            </div>

            {/* International Transfers */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
              <p className="text-gray-300">
                Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Children&apos;s Privacy */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-300">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </div>

            {/* Updates */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </div>

            {/* Contact Information */}
            <div id="contact" className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <a href="mailto:privacy@omniverity.com" className="text-white hover:text-blue-400 transition-colors">
                      privacy@omniverity.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <div className="text-gray-400 text-sm">Address</div>
                    <div className="text-white">
                      OMNIVERITY AI<br />
                      123 Technology Drive<br />
                      Innovation City, IC 12345<br />
                      United States
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-gray-400 text-sm">
                    Data Protection Officer: John Smith<br />
                    Email: dpo@omniverity.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}