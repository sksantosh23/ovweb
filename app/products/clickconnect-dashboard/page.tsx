'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, MessageSquare, Users, Activity, Send, 
  Phone, Mail, Globe, Clock, CheckCircle, XCircle,
  TrendingUp, AlertCircle, Inbox, Archive, Star,
  BarChart3, PieChart, Calendar, Filter, Search
} from 'lucide-react';

export default function ClickConnectDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'conversations' | 'contacts' | 'analytics'>('overview');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/products');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/products');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  const stats = {
    totalConversations: 3456,
    activeChats: 42,
    avgResponseTime: '1.2m',
    satisfactionRate: 94.5
  };

  const conversations = [
    { id: 'CHAT-001', customer: 'John Smith', channel: 'WhatsApp', status: 'active', lastMessage: 'I need help with my order', time: '2 min ago', priority: 'high' },
    { id: 'CHAT-002', customer: 'Sarah Johnson', channel: 'Email', status: 'waiting', lastMessage: 'When will my refund be processed?', time: '5 min ago', priority: 'medium' },
    { id: 'CHAT-003', customer: 'Mike Chen', channel: 'SMS', status: 'resolved', lastMessage: 'Thank you for your help!', time: '1 hour ago', priority: 'low' },
    { id: 'CHAT-004', customer: 'Emma Davis', channel: 'Facebook', status: 'active', lastMessage: 'Is this product available?', time: '10 min ago', priority: 'medium' },
    { id: 'CHAT-005', customer: 'Alex Turner', channel: 'Instagram', status: 'active', lastMessage: 'How do I track my shipment?', time: '15 min ago', priority: 'high' }
  ];

  const contacts = [
    { id: 'CON-001', name: 'John Smith', email: 'john@example.com', phone: '+1 234-567-8900', totalChats: 23, lastContact: '2 days ago' },
    { id: 'CON-002', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+1 234-567-8901', totalChats: 15, lastContact: '5 min ago' },
    { id: 'CON-003', name: 'Mike Chen', email: 'mike@example.com', phone: '+1 234-567-8902', totalChats: 8, lastContact: '1 week ago' },
    { id: 'CON-004', name: 'Emma Davis', email: 'emma@example.com', phone: '+1 234-567-8903', totalChats: 34, lastContact: '10 min ago' }
  ];

  const channelDistribution = [
    { channel: 'WhatsApp', percentage: 35, count: 1209 },
    { channel: 'Email', percentage: 25, count: 864 },
    { channel: 'SMS', percentage: 20, count: 691 },
    { channel: 'Facebook', percentage: 12, count: 415 },
    { channel: 'Instagram', percentage: 8, count: 277 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ClickConnect Dashboard
              </h1>
              <span className="text-gray-500">Omnichannel Communication Platform</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 pt-8">
        <div className="flex space-x-1 bg-gray-800/50 p-1 rounded-lg backdrop-blur-sm w-fit">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'overview'
                ? 'bg-green-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('conversations')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'conversations'
                ? 'bg-green-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Conversations
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'contacts'
                ? 'bg-green-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Contacts
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'analytics'
                ? 'bg-green-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <MessageSquare className="w-8 h-8 text-green-400" />
                  <span className="text-green-400 text-sm">+15%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.totalConversations.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Total Conversations</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="w-8 h-8 text-blue-400" />
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.activeChats}</div>
                <div className="text-gray-400 text-sm">Active Chats</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8 text-purple-400" />
                  <span className="text-green-400 text-sm">-18%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.avgResponseTime}</div>
                <div className="text-gray-400 text-sm">Avg Response Time</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <span className="text-green-400 text-sm">Excellent</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.satisfactionRate}%</div>
                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
            </div>

            {/* Recent Conversations */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Conversations</h3>
              <div className="space-y-3">
                {conversations.slice(0, 3).map((conv) => (
                  <div key={conv.id} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        conv.channel === 'WhatsApp' ? 'bg-green-900/30' :
                        conv.channel === 'Email' ? 'bg-blue-900/30' :
                        conv.channel === 'SMS' ? 'bg-purple-900/30' :
                        conv.channel === 'Facebook' ? 'bg-indigo-900/30' :
                        'bg-pink-900/30'
                      }`}>
                        {conv.channel === 'WhatsApp' ? <MessageSquare className="w-5 h-5 text-green-400" /> :
                         conv.channel === 'Email' ? <Mail className="w-5 h-5 text-blue-400" /> :
                         conv.channel === 'SMS' ? <Send className="w-5 h-5 text-purple-400" /> :
                         conv.channel === 'Facebook' ? <Globe className="w-5 h-5 text-indigo-400" /> :
                         <Globe className="w-5 h-5 text-pink-400" />}
                      </div>
                      <div>
                        <div className="text-white font-medium">{conv.customer}</div>
                        <div className="text-gray-400 text-sm">{conv.lastMessage}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs px-2 py-1 rounded-full mb-1 ${
                        conv.status === 'active' ? 'bg-green-900/30 text-green-400' :
                        conv.status === 'waiting' ? 'bg-yellow-900/30 text-yellow-400' :
                        'bg-gray-900/30 text-gray-400'
                      }`}>
                        {conv.status}
                      </div>
                      <div className="text-gray-500 text-xs">{conv.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Channel Distribution */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Channel Distribution</h3>
              <div className="space-y-4">
                {channelDistribution.map((channel) => (
                  <div key={channel.channel}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{channel.channel}</span>
                      <span className="text-white">{channel.count} ({channel.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          channel.channel === 'WhatsApp' ? 'bg-green-500' :
                          channel.channel === 'Email' ? 'bg-blue-500' :
                          channel.channel === 'SMS' ? 'bg-purple-500' :
                          channel.channel === 'Facebook' ? 'bg-indigo-500' :
                          'bg-pink-500'
                        }`} 
                        style={{ width: `${channel.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'conversations' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">All Conversations</h3>
                  <div className="flex items-center space-x-3">
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Search className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Filter className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Chat ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Channel
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Last Message
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Priority
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {conversations.map((conv) => (
                      <tr key={conv.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {conv.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {conv.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {conv.channel}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                          {conv.lastMessage}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            conv.priority === 'high' 
                              ? 'bg-red-900/30 text-red-400 border border-red-800'
                              : conv.priority === 'medium'
                              ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                              : 'bg-green-900/30 text-green-400 border border-green-800'
                          }`}>
                            {conv.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            conv.status === 'active' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : conv.status === 'waiting'
                              ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                              : 'bg-gray-900/30 text-gray-400 border border-gray-700'
                          }`}>
                            {conv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Contact Management</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Contact ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Total Chats
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Last Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {contacts.map((contact) => (
                      <tr key={contact.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {contact.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {contact.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {contact.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {contact.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {contact.totalChats}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {contact.lastContact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Message Volume Trend</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <BarChart3 className="w-16 h-16 opacity-20" />
                  <span className="ml-4">Chart visualization would go here</span>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Response Time Distribution</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <PieChart className="w-16 h-16 opacity-20" />
                  <span className="ml-4">Chart visualization would go here</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Customer Service Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">First Response Time</div>
                  <div className="text-2xl font-bold text-white">45s</div>
                  <div className="text-sm text-green-400">20% faster than target</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Resolution Rate</div>
                  <div className="text-2xl font-bold text-white">87.3%</div>
                  <div className="text-sm text-yellow-400">Room for improvement</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Customer Retention</div>
                  <div className="text-2xl font-bold text-white">92.5%</div>
                  <div className="text-sm text-green-400">Above industry average</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}