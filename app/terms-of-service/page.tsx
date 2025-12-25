'use client';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertCircle, Shield, Users, CreditCard, Globe, Ban, Mail } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-12 h-12 text-green-400" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Please read these Terms of Service carefully before using OMNIVERITY AI&apos;s services. By accessing or using our services, you agree to be bound by these terms.
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
            <a href="#acceptance" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Acceptance
            </a>
            <a href="#services" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Services
            </a>
            <a href="#account" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Account
            </a>
            <a href="#payment" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Payment
            </a>
            <a href="#intellectual-property" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Intellectual Property
            </a>
            <a href="#liability" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Liability
            </a>
            <a href="#termination" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Termination
            </a>
            <a href="#contact" className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <div id="acceptance" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  By accessing and using the services provided by OMNIVERITY AI (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) accept and agree to be bound by these Terms of Service (&quot;Terms&quot;) and all terms incorporated by reference.
                </p>
                <p>
                  If you do not agree to these Terms, you must not access or use our services. If you are accessing or using our services on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <p className="text-yellow-400 text-sm">
                    <AlertCircle className="inline w-4 h-4 mr-2" />
                    These Terms constitute a legally binding agreement between you and OMNIVERITY AI.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Description */}
            <div id="services" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">2. Description of Services</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  OMNIVERITY AI provides enterprise technology solutions including but not limited to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    AI and Machine Learning solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Cloud infrastructure and migration services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Cybersecurity and data protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Digital transformation consulting
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Custom software development
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Training and support services
                  </li>
                </ul>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white mb-2">2.1 Service Modifications</h3>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of services.
                  </p>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white mb-2">2.2 Service Availability</h3>
                  <p>
                    While we strive to provide reliable services, we do not guarantee that our services will be available at all times, uninterrupted, secure, or error-free. We may experience hardware, software, or other problems that may require scheduled or unscheduled maintenance.
                  </p>
                </div>
              </div>
            </div>

            {/* User Account */}
            <div id="account" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">3. User Account & Responsibilities</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.1 Account Creation</h3>
                  <p>
                    To access certain services, you may be required to create an account. You agree to:
                  </p>
                  <ul className="mt-2 space-y-1 ml-6">
                    <li>• Provide accurate, current, and complete information</li>
                    <li>• Maintain and update your information</li>
                    <li>• Keep your password secure and confidential</li>
                    <li>• Notify us immediately of any unauthorized access</li>
                    <li>• Be responsible for all activities under your account</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.2 Acceptable Use</h3>
                  <p>You agree not to use our services to:</p>
                  <ul className="mt-2 space-y-1 ml-6">
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Infringe on intellectual property rights</li>
                    <li>• Transmit malicious code or viruses</li>
                    <li>• Engage in fraudulent or deceptive practices</li>
                    <li>• Interfere with or disrupt our services</li>
                    <li>• Attempt to gain unauthorized access to systems</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.3 Age Requirements</h3>
                  <p>
                    Our services are intended for business use by individuals who are at least 18 years old. By using our services, you represent that you meet this age requirement.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div id="payment" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">4. Payment Terms</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">4.1 Fees and Billing</h3>
                  <p>
                    You agree to pay all fees associated with your use of our services according to the pricing and payment terms presented to you. Fees are non-refundable except as expressly stated otherwise or required by law.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">4.2 Payment Methods</h3>
                  <p>
                    We accept various payment methods as specified during the checkout process. You authorize us to charge your selected payment method for all fees due.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">4.3 Taxes</h3>
                  <p>
                    You are responsible for all applicable taxes related to your use of our services, except for taxes based on our net income. All fees are exclusive of taxes unless otherwise stated.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">4.4 Late Payment</h3>
                  <p>
                    If payment is not received when due, we reserve the right to suspend or terminate your access to services. Late payments may incur additional charges as specified in your service agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div id="intellectual-property" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-white">5. Intellectual Property Rights</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.1 Our Intellectual Property</h3>
                  <p>
                    All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of OMNIVERITY AI or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.2 License to Use Services</h3>
                  <p>
                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for your internal business purposes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.3 User Content</h3>
                  <p>
                    You retain ownership of any content you submit to our services (&quot;User Content&quot;). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content solely for the purpose of providing services to you.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.4 Feedback</h3>
                  <p>
                    Any feedback, suggestions, or ideas you provide regarding our services becomes our property and may be used without compensation or attribution to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Both parties may have access to confidential information of the other party. Each party agrees to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Maintain the confidentiality of all confidential information</li>
                  <li>• Not disclose confidential information to third parties</li>
                  <li>• Use confidential information solely for the purposes of these Terms</li>
                  <li>• Protect confidential information with reasonable security measures</li>
                </ul>
                <p className="mt-4">
                  This obligation does not apply to information that is publicly available, independently developed, or rightfully received from third parties.
                </p>
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">7. Warranties and Disclaimers</h2>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">7.1 Service Warranty</h3>
                  <p>
                    We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards. Your sole remedy for breach of this warranty is re-performance of the deficient services.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-lg border border-yellow-700/50">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">7.2 DISCLAIMER</h3>
                  <p className="text-yellow-300 text-sm uppercase">
                    EXCEPT AS EXPRESSLY PROVIDED HEREIN, OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div id="liability" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">8. Limitation of Liability</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-red-700/50">
                  <p className="text-red-300 text-sm uppercase">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, OMNIVERITY AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OUR SERVICES.
                  </p>
                </div>
                
                <p>
                  Our total liability for any claims arising out of or related to these Terms or our services shall not exceed the amount you have paid us in the twelve (12) months preceding the claim.
                </p>
                
                <p>
                  Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  You agree to indemnify, defend, and hold harmless OMNIVERITY AI, its officers, directors, employees, agents, licensors, and suppliers from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys&apos; fees, resulting from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Your violation of these Terms</li>
                  <li>• Your use of our services</li>
                  <li>• Your violation of any rights of another party</li>
                  <li>• Your violation of any applicable laws or regulations</li>
                  <li>• Any User Content you submit</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div id="termination" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">10. Termination</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">10.1 Termination by You</h3>
                  <p>
                    You may terminate your account at any time by contacting us. Termination does not relieve you of any obligations incurred prior to termination.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">10.2 Termination by Us</h3>
                  <p>
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">10.3 Effect of Termination</h3>
                  <p>
                    Upon termination, your right to use our services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law and Dispute Resolution</h2>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">11.1 Governing Law</h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">11.2 Arbitration</h3>
                  <p>
                    Any dispute arising out of or relating to these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in Delaware, and judgment on the award may be entered in any court having jurisdiction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">11.3 Class Action Waiver</h3>
                  <p>
                    You agree to resolve disputes with us on an individual basis and waive your right to participate in a class action lawsuit or class-wide arbitration.
                  </p>
                </div>
              </div>
            </div>

            {/* General Provisions */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">12. General Provisions</h2>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">12.1 Entire Agreement</h3>
                  <p>
                    These Terms constitute the entire agreement between you and OMNIVERITY AI regarding our services and supersede all prior agreements and understandings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">12.2 Modifications</h3>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">12.3 Severability</h3>
                  <p>
                    If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">12.4 Waiver</h3>
                  <p>
                    No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">12.5 Assignment</h3>
                  <p>
                    You may not assign or transfer these Terms or any rights or obligations hereunder without our prior written consent. We may assign these Terms without restriction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">12.6 Force Majeure</h3>
                  <p>
                    Neither party shall be liable for any delay or failure to perform due to causes beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, or accidents.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div id="contact" className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">13. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-gray-400 text-sm">Legal Department</div>
                    <a href="mailto:legal@omniverity.com" className="text-white hover:text-green-400 transition-colors">
                      legal@omniverity.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-gray-400 text-sm">General Inquiries</div>
                    <a href="mailto:support@omniverity.com" className="text-white hover:text-green-400 transition-colors">
                      support@omniverity.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <div className="text-gray-400 text-sm">Mailing Address</div>
                    <div className="text-white">
                      OMNIVERITY AI<br />
                      Legal Department<br />
                      123 Technology Drive<br />
                      Innovation City, IC 12345<br />
                      United States
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-sm">
                    <strong className="text-white">Business Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Response time: 1-2 business days
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-500 text-xs">
                  © 2024 OMNIVERITY AI. All rights reserved. These Terms of Service are legally binding. 
                  Please ensure you have read and understood all provisions before using our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}