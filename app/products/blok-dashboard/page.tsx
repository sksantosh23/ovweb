'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, Blocks, Shield, Link2, Activity, 
  Database, Hash, Clock, CheckCircle, AlertCircle,
  TrendingUp, Lock, Unlock, Server, GitBranch,
  BarChart3, PieChart, Calendar, FileText, Cpu
} from 'lucide-react';

export default function BlokDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'blockchain' | 'transactions' | 'nodes'>('overview');

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
    totalBlocks: 847293,
    activeNodes: 156,
    networkHashRate: '234.5 TH/s',
    avgBlockTime: '10.2s'
  };

  const blocks = [
    { 
      height: 847293, 
      hash: '0x3f4e...8a2b', 
      transactions: 145, 
      timestamp: '2024-03-15 14:23:45', 
      miner: 'Node-045',
      size: '1.2 MB'
    },
    { 
      height: 847292, 
      hash: '0x9c1d...3f7e', 
      transactions: 98, 
      timestamp: '2024-03-15 14:23:35', 
      miner: 'Node-012',
      size: '0.9 MB'
    },
    { 
      height: 847291, 
      hash: '0x7a8b...2c4f', 
      transactions: 203, 
      timestamp: '2024-03-15 14:23:24', 
      miner: 'Node-089',
      size: '1.5 MB'
    },
    { 
      height: 847290, 
      hash: '0x5e2f...9d1a', 
      transactions: 167, 
      timestamp: '2024-03-15 14:23:13', 
      miner: 'Node-033',
      size: '1.3 MB'
    }
  ];

  const transactions = [
    { 
      txHash: '0xab12...34cd', 
      from: '0x1234...5678', 
      to: '0x8765...4321', 
      value: '125.50 BLK', 
      status: 'confirmed',
      block: 847293,
      gas: '21000'
    },
    { 
      txHash: '0xef56...78ab', 
      from: '0x9876...5432', 
      to: '0x2345...6789', 
      value: '45.25 BLK', 
      status: 'pending',
      block: 'pending',
      gas: '21000'
    },
    { 
      txHash: '0xcd34...12ef', 
      from: '0x3456...7890', 
      to: '0x0987...6543', 
      value: '892.00 BLK', 
      status: 'confirmed',
      block: 847292,
      gas: '45000'
    },
    { 
      txHash: '0x78ab...56cd', 
      from: '0x4567...8901', 
      to: '0x5432...1098', 
      value: '12.75 BLK', 
      status: 'confirmed',
      block: 847291,
      gas: '21000'
    }
  ];

  const nodes = [
    { id: 'Node-045', location: 'US-East', status: 'online', uptime: '99.9%', lastBlock: 847293, peers: 45 },
    { id: 'Node-012', location: 'EU-West', status: 'online', uptime: '98.7%', lastBlock: 847293, peers: 38 },
    { id: 'Node-089', location: 'Asia-Pacific', status: 'online', uptime: '99.5%', lastBlock: 847293, peers: 52 },
    { id: 'Node-033', location: 'US-West', status: 'syncing', uptime: '97.2%', lastBlock: 847290, peers: 29 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Blok Dashboard
              </h1>
              <span className="text-gray-500">Blockchain Management Platform</span>
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
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('blockchain')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'blockchain'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Blockchain
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'transactions'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Transactions
          </button>
          <button
            onClick={() => setActiveTab('nodes')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'nodes'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Nodes
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
                  <Blocks className="w-8 h-8 text-indigo-400" />
                  <span className="text-green-400 text-sm">+247</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.totalBlocks.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Total Blocks</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Server className="w-8 h-8 text-purple-400" />
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.activeNodes}</div>
                <div className="text-gray-400 text-sm">Active Nodes</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                  <span className="text-yellow-400 text-sm">Normal</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.networkHashRate}</div>
                <div className="text-gray-400 text-sm">Network Hash Rate</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8 text-green-400" />
                  <span className="text-green-400 text-sm">Optimal</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.avgBlockTime}</div>
                <div className="text-gray-400 text-sm">Avg Block Time</div>
              </div>
            </div>

            {/* Recent Blocks */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Blocks</h3>
              <div className="space-y-3">
                {blocks.slice(0, 3).map((block) => (
                  <div key={block.height} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-900/30 p-2 rounded">
                        <Hash className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-white font-mono">Block #{block.height}</div>
                        <div className="text-gray-400 text-sm font-mono">{block.hash}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white">{block.transactions} txns</div>
                      <div className="text-gray-500 text-xs">{block.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Transaction Distribution</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Smart Contracts</span>
                      <span className="text-white">42%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Token Transfers</span>
                      <span className="text-white">35%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">DeFi Operations</span>
                      <span className="text-white">18%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">NFT Minting</span>
                      <span className="text-white">5%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Network Health</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Consensus Status</span>
                    <span className="text-green-400 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Fork Detection</span>
                    <span className="text-green-400 flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      No forks
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Network Latency</span>
                    <span className="text-yellow-400">45ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Mempool Size</span>
                    <span className="text-white">1,234 txns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blockchain' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Blockchain Explorer</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Height
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Hash
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Transactions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Miner
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Size
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Timestamp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {blocks.map((block) => (
                      <tr key={block.height} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-mono">
                          #{block.height}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">
                          {block.hash}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {block.transactions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {block.miner}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {block.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {block.timestamp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Transaction Pool</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        TX Hash
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        From
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Block
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {transactions.map((tx) => (
                      <tr key={tx.txHash} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">
                          {tx.txHash}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">
                          {tx.from}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">
                          {tx.to}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {tx.value}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {tx.block}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            tx.status === 'confirmed' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                          }`}>
                            {tx.status}
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

        {activeTab === 'nodes' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Network Nodes</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Node ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Uptime
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Last Block
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Peers
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {nodes.map((node) => (
                      <tr key={node.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {node.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {node.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            node.status === 'online' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                          }`}>
                            {node.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {node.uptime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          #{node.lastBlock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {node.peers}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Node Statistics */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Network Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Total Network Nodes</div>
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-sm text-green-400">+12 from last week</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Average Peer Count</div>
                  <div className="text-2xl font-bold text-white">41</div>
                  <div className="text-sm text-green-400">Well connected</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Network Stability</div>
                  <div className="text-2xl font-bold text-white">98.7%</div>
                  <div className="text-sm text-green-400">Excellent</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}