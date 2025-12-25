'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, Heart, Factory, ShoppingCart, Plane, 
  Banknote, GraduationCap, Shield, Phone, Truck,
  Cpu, ChevronDown, Menu, X, ArrowRight, CheckCircle,
  TrendingUp, Users, Clock, DollarSign, BarChart3,
  Target, Zap, Brain, Activity, Globe, Sparkles
} from 'lucide-react';

const IndustriesPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState('healthcare');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      description: 'Transform patient care with AI-powered diagnostics',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: Banknote,
      description: 'Enhance security with intelligent financial AI',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="pt-20 px-8">
        <h1 className="text-5xl font-bold mb-8">Industry Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div key={industry.id} className="bg-slate-800 p-6 rounded-lg">
              <industry.icon className="w-12 h-12 mb-4 text-cyan-400" />
              <h2 className="text-2xl font-bold mb-2">{industry.name}</h2>
              <p className="text-gray-400">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
