'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, Activity, Users, Heart, Calendar, 
  AlertCircle, TrendingUp, Clock, CheckCircle, XCircle,
  FileText, Pill, Stethoscope, UserCheck, Shield,
  BarChart3, PieChart, Phone, Mail, Building
} from 'lucide-react';

export default function EHPDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'patients' | 'appointments' | 'analytics'>('overview');

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
    totalPatients: 15847,
    todayAppointments: 42,
    pendingResults: 18,
    criticalAlerts: 3
  };

  const patients = [
    { 
      id: 'PAT-001', 
      name: 'John Doe', 
      age: 45, 
      condition: 'Hypertension', 
      lastVisit: '2024-03-10',
      status: 'stable',
      nextAppointment: '2024-03-25'
    },
    { 
      id: 'PAT-002', 
      name: 'Jane Smith', 
      age: 32, 
      condition: 'Diabetes Type 2', 
      lastVisit: '2024-03-12',
      status: 'monitoring',
      nextAppointment: '2024-03-20'
    },
    { 
      id: 'PAT-003', 
      name: 'Robert Johnson', 
      age: 58, 
      condition: 'Post-Surgery Recovery', 
      lastVisit: '2024-03-14',
      status: 'critical',
      nextAppointment: '2024-03-16'
    },
    { 
      id: 'PAT-004', 
      name: 'Maria Garcia', 
      age: 29, 
      condition: 'Prenatal Care', 
      lastVisit: '2024-03-13',
      status: 'stable',
      nextAppointment: '2024-03-27'
    },
    { 
      id: 'PAT-005', 
      name: 'William Brown', 
      age: 67, 
      condition: 'Cardiac Monitoring', 
      lastVisit: '2024-03-11',
      status: 'monitoring',
      nextAppointment: '2024-03-18'
    }
  ];

  const appointments = [
    { 
      id: 'APT-001', 
      patient: 'John Doe', 
      doctor: 'Dr. Sarah Wilson', 
      time: '09:00 AM',
      type: 'Follow-up',
      status: 'confirmed',
      department: 'Cardiology'
    },
    { 
      id: 'APT-002', 
      patient: 'Jane Smith', 
      doctor: 'Dr. Michael Chen', 
      time: '10:30 AM',
      type: 'Consultation',
      status: 'in-progress',
      department: 'Endocrinology'
    },
    { 
      id: 'APT-003', 
      patient: 'Robert Johnson', 
      doctor: 'Dr. Emily Davis', 
      time: '11:00 AM',
      type: 'Emergency',
      status: 'waiting',
      department: 'Surgery'
    },
    { 
      id: 'APT-004', 
      patient: 'Maria Garcia', 
      doctor: 'Dr. James Taylor', 
      time: '02:00 PM',
      type: 'Routine Check',
      status: 'scheduled',
      department: 'Obstetrics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                eHP Dashboard
              </h1>
              <span className="text-gray-500">Electronic Health Platform</span>
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
                ? 'bg-teal-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('patients')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'patients'
                ? 'bg-teal-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Patients
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'appointments'
                ? 'bg-teal-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            Appointments
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'analytics'
                ? 'bg-teal-600 text-white'
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
                  <Users className="w-8 h-8 text-teal-400" />
                  <span className="text-green-400 text-sm">+5.2%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.totalPatients.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Total Patients</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="w-8 h-8 text-blue-400" />
                  <span className="text-yellow-400 text-sm">Today</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.todayAppointments}</div>
                <div className="text-gray-400 text-sm">Appointments</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-purple-400" />
                  <span className="text-orange-400 text-sm">Pending</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.pendingResults}</div>
                <div className="text-gray-400 text-sm">Lab Results</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <AlertCircle className="w-8 h-8 text-red-400" />
                  <span className="text-red-400 text-sm">Alert</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.criticalAlerts}</div>
                <div className="text-gray-400 text-sm">Critical Cases</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Lab results uploaded for Patient #PAT-002</span>
                  </div>
                  <span className="text-gray-500 text-sm">5 min ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Critical alert: Patient #PAT-003 requires immediate attention</span>
                  </div>
                  <span className="text-gray-500 text-sm">15 min ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Appointment scheduled for Maria Garcia</span>
                  </div>
                  <span className="text-gray-500 text-sm">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <Pill className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Prescription refill approved for John Doe</span>
                  </div>
                  <span className="text-gray-500 text-sm">2 hours ago</span>
                </div>
              </div>
            </div>

            {/* Department Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Department Load</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Emergency</span>
                      <span className="text-white">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Cardiology</span>
                      <span className="text-white">72%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Pediatrics</span>
                      <span className="text-white">45%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">General Medicine</span>
                      <span className="text-white">60%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Patient Status Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400">Stable</span>
                    </div>
                    <span className="text-white font-semibold">68%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-400">Monitoring Required</span>
                    </div>
                    <span className="text-white font-semibold">24%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-400">Critical</span>
                    </div>
                    <span className="text-white font-semibold">5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-gray-400">Discharged</span>
                    </div>
                    <span className="text-white font-semibold">3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Patient Management</h3>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                    Add New Patient
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Patient ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Age
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Condition
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Last Visit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Next Appointment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {patients.map((patient) => (
                      <tr key={patient.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {patient.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {patient.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {patient.age}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {patient.condition}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {patient.lastVisit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            patient.status === 'stable' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : patient.status === 'monitoring'
                              ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                              : 'bg-red-900/30 text-red-400 border border-red-800'
                          }`}>
                            {patient.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {patient.nextAppointment}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Today&apos;s Appointments</h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 text-sm">March 15, 2024</span>
                    <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                      Schedule New
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Appt ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Doctor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {appointments.map((appt) => (
                      <tr key={appt.id} className="hover:bg-gray-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {appt.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {appt.patient}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {appt.doctor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {appt.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {appt.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {appt.department}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            appt.status === 'confirmed' 
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : appt.status === 'in-progress'
                              ? 'bg-blue-900/30 text-blue-400 border border-blue-800'
                              : appt.status === 'waiting'
                              ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                              : 'bg-gray-900/30 text-gray-400 border border-gray-700'
                          }`}>
                            {appt.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Appointment Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Completed Today</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">18</div>
                <div className="text-sm text-gray-500">Out of 42 scheduled</div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Average Wait Time</span>
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-white">23 min</div>
                <div className="text-sm text-green-400">5 min better than average</div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">No-shows</span>
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-sm text-gray-500">4.8% rate</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Patient Admission Trends</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <BarChart3 className="w-16 h-16 opacity-20" />
                  <span className="ml-4">Chart visualization would go here</span>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Resource Utilization</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <PieChart className="w-16 h-16 opacity-20" />
                  <span className="ml-4">Chart visualization would go here</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Key Performance Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Patient Satisfaction Score</div>
                  <div className="text-2xl font-bold text-white">4.8/5.0</div>
                  <div className="text-sm text-green-400">+0.3 from last month</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Average Treatment Time</div>
                  <div className="text-2xl font-bold text-white">3.2 days</div>
                  <div className="text-sm text-green-400">15% improvement</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Bed Occupancy Rate</div>
                  <div className="text-2xl font-bold text-white">78%</div>
                  <div className="text-sm text-yellow-400">Optimal range</div>
                </div>
              </div>
            </div>

            {/* Department Performance */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Department Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Patients Seen
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Avg Wait Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Satisfaction
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Efficiency
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Emergency</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">342</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">18 min</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">4.6/5.0</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-900/30 text-green-400 border border-green-800">
                          High
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Cardiology</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">156</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">32 min</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">4.9/5.0</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-900/30 text-green-400 border border-green-800">
                          High
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Pediatrics</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">234</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">25 min</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">4.8/5.0</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800">
                          Medium
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}