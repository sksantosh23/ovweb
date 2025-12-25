'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, Activity, Users, Package, AlertCircle, TrendingUp, 
  Box, Truck, BarChart3, Settings, Shield, Clock, CheckCircle,
  XCircle, AlertTriangle, Package2, Map, Calendar, FileText
} from 'lucide-react';

export default function OIMSDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'inventory' | 'orders' | 'analytics'>('overview');

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
    totalProducts: 12847,
    lowStock: 23,
    pendingOrders: 156,
    monthlyRevenue: 284500
  };

  const inventoryData = [
    { id: 'SKU-001', name: 'Industrial Sensor A1', stock: 245, reorderPoint: 50, status: 'optimal' },
    { id: 'SKU-002', name: 'Control Module B2', stock: 12, reorderPoint: 20, status: 'low' },
    { id: 'SKU-003', name: 'Processing Unit C3', stock: 189, reorderPoint: 30, status: 'optimal' },
    { id: 'SKU-004', name: 'Display Panel D4', stock: 8, reorderPoint: 15, status: 'critical' },
    { id: 'SKU-005', name: 'Power Supply E5', stock: 456, reorderPoint: 100, status: 'optimal' }
  ];

  const orders = [
    { id: 'ORD-2024-001', customer: 'Tech Corp', items: 15, status: 'processing', value: 12500 },
    { id: 'ORD-2024-002', customer: 'Global Industries', items: 8, status: 'shipped', value: 8900 },
    { id: 'ORD-2024-003', customer: 'Smart Solutions', items: 23, status: 'pending', value: 34200 },
    { id: 'ORD-2024-004', customer: 'Digital Systems', items: 5, status: 'delivered', value: 5600 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                OIMS Dashboard
              </h1>
              <span className="text-gray-500">Omniverity Inventory Management System</span>
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
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'inventory'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Inventory
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'orders'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'analytics'
                ? 'bg-purple-600 text-white'
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
                  <Package className="w-8 h-8 text-purple-400" />
                  <span className="text-green-400 text-sm">+12.5%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.totalProducts.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Total Products</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-400" />
                  <span className="text-red-400 text-sm">Critical</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.lowStock}</div>
                <div className="text-gray-400 text-sm">Low Stock Items</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Truck className="w-8 h-8 text-blue-400" />
                  <span className="text-yellow-400 text-sm">Active</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.pendingOrders}</div>
                <div className="text-gray-400 text-sm">Pending Orders</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <span className="text-green-400 text-sm">+8.2%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">${(stats.monthlyRevenue / 1000).toFixed(1)}K</div>
                <div className="text-gray-400 text-sm">Monthly Revenue</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Order #ORD-2024-002 shipped to Global Industries</span>
                  </div>
                  <span className="text-gray-500 text-sm">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Low stock alert: Control Module B2</span>
                  </div>
                  <span className="text-gray-500 text-sm">5 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <Package2 className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">New inventory received: 500 units of Power Supply E5</span>
                  </div>
                  <span className="text-gray-500 text-sm">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Inventory Management</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        SKU
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Product Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Stock Level
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Reorder Point
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {inventoryData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {item.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {item.stock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {item.reorderPoint}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.status === 'optimal' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : item.status === 'low'
                              ? 'bg-orange-900/30 text-orange-400 border border-orange-800'
                              : 'bg-red-900/30 text-red-400 border border-red-800'
                          }`}>
                            {item.status}
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

        {activeTab === 'orders' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Order Management</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Items
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {order.items}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          ${order.value.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            order.status === 'delivered' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : order.status === 'shipped'
                              ? 'bg-blue-900/30 text-blue-400 border border-blue-800'
                              : order.status === 'processing'
                              ? 'bg-purple-900/30 text-purple-400 border border-purple-800'
                              : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                          }`}>
                            {order.status}
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
                <h3 className="text-xl font-semibold text-white mb-4">Inventory Turnover</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <BarChart3 className="w-16 h-16 opacity-20" />
                  <span className="ml-4">Chart visualization would go here</span>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Order Trends</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <TrendingUp className="w-16 h-16 opacity-20" />
                  <span className="ml-4">Chart visualization would go here</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Key Performance Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Average Order Value</div>
                  <div className="text-2xl font-bold text-white">$15,350</div>
                  <div className="text-sm text-green-400">+5.2% from last month</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Inventory Accuracy</div>
                  <div className="text-2xl font-bold text-white">98.7%</div>
                  <div className="text-sm text-green-400">Above target</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Order Fulfillment Rate</div>
                  <div className="text-2xl font-bold text-white">94.2%</div>
                  <div className="text-sm text-yellow-400">Needs improvement</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}