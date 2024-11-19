'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, BarChart2, Lock, Users, AlertTriangle, Settings, Bell, Bot, LineChart } from 'lucide-react';

const LandingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const features = [
    { title: "Variable Take Profit Levels", icon: Settings, description: "Customizable TP1, TP2, and TP3 levels to match your risk tolerance" },
    { title: "BLOFIN Integration", icon: Bot, description: "Automated trading through BLOFIN exchange connection" },
    { title: "Multi-Timeframe Analysis", icon: LineChart, description: "Signals across multiple timeframes" },
    { title: "Real-Time Alerts", icon: Bell, description: "Instant notifications via Telegram" }
  ];

  const plans = [
    {
      name: "Free Alerts",
      price: "0",
      period: "forever",
      features: [
        "Selected coin alerts",
        "Basic trading signals",
        "Community access",
        "Preview of premium features"
      ],
      buttonText: "Join Free Channel",
      buttonLink: "https://t.me/+WBg2jhiU66M2MmZl",
      highlighted: false
    },
    {
      name: "Premium Alerts",
      price: "30",
      period: "month",
      features: [
        "Multiple coin pairs",
        "All timeframe signals",
        "Priority support",
        "BLOFIN trading pairs"
      ],
      buttonText: "Subscribe to Alerts",
      highlighted: false
    },
    {
      name: "Full Strategy Access",
      price: selectedPlan === 'monthly' ? "89" : "900",
      period: selectedPlan === 'monthly' ? "month" : "year",
      features: [
        "Complete TradingView script",
        "Automated BLOFIN trading",
        "Variable TP settings",
        "Direct strategy support",
        "Premium alerts included"
      ],
      buttonText: "Get Full Access",
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2"> 
          <img src="/ribbonflowprologo.png" alt="RibbonFlow Pro Logo" className="h-12 w-12 object-contain" />                                                                              
          <span className="text-2xl font-bold">RibbonFlow Pro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600">Pricing</a>
            <a href="https://t.me/+WBg2jhiU66M2MmZl" target="_blank" className="text-purple-600 hover:text-purple-700 font-medium">Free Signals</a>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Join BLOFIN</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Automated Crypto Trading
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          From simple alerts to fully automated trading on BLOFIN - choose how you want to trade with RibbonFlow Pro
        </p>
        <div className="flex gap-4 justify-center">
          <a href="https://t.me/+WBg2jhiU66M2MmZl" target="_blank" 
             className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
            Try Free Signals
          </a>
          <a href="#" className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
            Sign Up on BLOFIN <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose RibbonFlow Pro</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Trading Style</h2>
        
        {/* Full Access Pricing Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button 
            className={`px-4 py-2 rounded-full ${selectedPlan === 'monthly' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
            onClick={() => setSelectedPlan('monthly')}
          >
            Monthly Billing
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${selectedPlan === 'yearly' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
            onClick={() => setSelectedPlan('yearly')}
          >
            Yearly (Save $168)
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.highlighted ? 'ring-2 ring-purple-600' : ''}`}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.buttonLink || '#'}
                  className={`w-full px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2
                    ${plan.highlighted 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOFIN Integration */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Automated Trading on BLOFIN</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect RibbonFlow Pro directly to your BLOFIN account for automated trading execution.
          New to BLOFIN? Sign up now and get exclusive benefits.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
            Create BLOFIN Account <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
            <img src="/ribbonflowprologo.png" alt="RibbonFlow Pro Logo" className="h-8 w-8 mb-4 object-contain" />
              <p className="text-gray-400">© 2024 RibbonFlow Pro. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="https://t.me/+WBg2jhiU66M2MmZl" className="text-gray-400 hover:text-white">Telegram</a>
              <a href="#" className="text-gray-400 hover:text-white">BLOFIN</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
