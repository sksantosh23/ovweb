    'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, DollarSign, CreditCard, TrendingUp, Users, 
  Shield, Activity, ArrowUpRight, ArrowDownRight, Globe,
  Wallet, Building, Clock, CheckCircle, XCircle, AlertTriangle,
  BarChart3, PieChart, Calendar, FileText
} from 'lucide-react';

export default function PayNetDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions' | 'merchants' | 'analytics'>('overview');

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
    totalTransactions: 487265,
    dailyVolume: 2847500,
    activeMerchants: 1234,
    successRate: 98.7
  };

  const transactions = [
    { id: 'TXN-001', merchant: 'TechStore Pro', amount: 1250.00, status: 'completed', method: 'Credit Card', time: '2 min ago' },
    { id: 'TXN-002', merchant: 'Digital Market', amount: 450.50, status: 'pending', method: 'Debit Card', time: '5 min ago' },
    { id: 'TXN-003', merchant: 'Global Shop', amount: 3200.00, status: 'completed', method: 'Bank Transfer', time: '8 min ago' },
    { id: 'TXN-004', merchant: 'Smart Retail', amount: 780.25, status: 'failed', method: 'E-Wallet', time: '12 min ago' },
    { id: 'TXN-005', merchant: 'Express Buy', amount: 2100.00, status: 'completed', method: 'Credit Card', time: '15 min ago' }
  ];

  const merchants = [
    { id: 'MER-001', name: 'TechStore Pro', transactions: 1847, volume: 458000, status: 'active', risk: 'low' },
    { id: 'MER-002', name: 'Digital Market', transactions: 923, volume: 234000, status: 'active', risk: 'medium' },
    { id: 'MER-003', name: 'Global Shop', transactions: 2156, volume: 892000, status: 'active', risk: 'low' },
    { id: 'MER-004', name: 'Smart Retail', transactions: 456, volume: 123000, status: 'suspended', risk: 'high' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                PayNet Dashboard
              </h1>
              <span className="text-gray-500">Payment Processing Network</span>
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
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'transactions'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Transactions
          </button>
          <button
            onClick={() => setActiveTab('merchants')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'merchants'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Merchants
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'analytics'
                ? 'bg-blue-600 text-white'
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
                  <Activity className="w-8 h-8 text-blue-400" />
                  <span className="text-green-400 text-sm flex items-center">
                    <ArrowUpRight className="w-4 h-4" />
                    15.3%
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.totalTransactions.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Total Transactions</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <span className="text-green-400 text-sm flex items-center">
                    <ArrowUpRight className="w-4 h-4" />
                    8.7%
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">${(stats.dailyVolume / 1000000).toFixed(2)}M</div>
                <div className="text-gray-400 text-sm">Daily Volume</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Building className="w-8 h-8 text-purple-400" />
                  <span className="text-green-400 text-sm flex items-center">
                    <ArrowUpRight className="w-4 h-4" />
                    23
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.activeMerchants.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Active Merchants</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-cyan-400" />
                  <span className="text-green-400 text-sm">Excellent</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.successRate}%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>

            {/* Live Transaction Feed */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Live Transaction Feed</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-400 text-sm">Live</span>
                </div>
              </div>
              <div className="space-y-3">
                {transactions.slice(0, 3).map((txn) => (
                  <div key={txn.id} className="flex items-center justify-between py-2 border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                      {txn.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : txn.status === 'failed' ? (
                        <XCircle className="w-5 h-5 text-red-400" />
                      ) : (
                        <Clock className="w-5 h-5 text-yellow-400" />
                      )}
                      <div>
                        <div className="text-white">{txn.merchant}</div>
                        <div className="text-gray-500 text-sm">{txn.method} • {txn.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">${txn.amount.toFixed(2)}</div>
                      <div className={`text-sm ${
                        txn.status === 'completed' ? 'text-green-400' :
                        txn.status === 'failed' ? 'text-red-400' : 'text-yellow-400'
                      }`}>{txn.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Payment Methods</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Credit Card</span>
                      <span className="text-white">45%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Debit Card</span>
                      <span className="text-white">30%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">E-Wallet</span>
                      <span className="text-white">15%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Bank Transfer</span>
                      <span className="text-white">10%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Regional Distribution</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">North America</span>
                      <span className="text-white">$1.2M</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Europe</span>
                      <span className="text-white">$900K</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Asia Pacific</span>
                      <span className="text-white">$600K</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Others</span>
                      <span className="text-white">$300K</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Transaction History</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Transaction ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Merchant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {transactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {txn.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {txn.merchant}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          ${txn.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {txn.method}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            txn.status === 'completed' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : txn.status === 'pending'
                              ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                              : 'bg-red-900/30 text-red-400 border border-red-800'
                          }`}>
                            {txn.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {txn.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'merchants' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Merchant Management</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Merchant ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Transactions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Volume
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Risk Level
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {merchants.map((merchant) => (
                      <tr key={merchant.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {merchant.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {merchant.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {merchant.transactions.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          ${(merchant.volume / 1000).toFixed(0)}K
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            merchant.risk === 'low' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : merchant.risk === 'medium'
                              ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                              : 'bg-red-900/30 text-red-400 border border-red-800'
                          }`}>
                            {merchant.risk}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            merchant.status === 'active' 
                              ? 'bg-blue-900/30 text-blue-400 border border-blue-800'
                              : 'bg-gray-900/30 text-gray-400 border border-gray-700'
                          }`}>
                            {merchant.status}
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

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Transaction Volume Trend</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <BarChart3 className="w-16 h-16 opacity-20" />
                  <span className="ml-4">Chart visualization would go here</span>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Success Rate Analysis</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <PieChart className="w-16 h-16 opacity-20" />
                  <span className="ml-4">Chart visualization would go here</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Average Transaction Value</div>
                  <div className="text-2xl font-bold text-white">$584.32</div>
                  <div className="text-sm text-green-400">+12.3% from last week</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Processing Speed</div>
                  <div className="text-2xl font-bold text-white">1.2s</div>
                  <div className="text-sm text-green-400">Optimal performance</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Fraud Detection Rate</div>
                  <div className="text-2xl font-bold text-white">99.8%</div>
                  <div className="text-sm text-green-400">Industry leading</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}