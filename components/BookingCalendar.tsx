'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Calendar, Clock, User, Mail, Phone, Building2, 
  MessageSquare, ChevronLeft, ChevronRight, Globe,
  Check, Loader2, AlertCircle, CalendarCheck,
  Users, Package, ArrowRight, ArrowLeft, X
} from 'lucide-react';

// =====================
// Types
// =====================

interface TimeSlot {
  startTime: string;
  endTime: string;
  display: string;
  available: boolean;
}

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  team: string;
  productCategory: string;
  description: string;
}

interface BookingConfirmation {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  timezone: string;
  team: string;
}

// =====================
// Constants
// =====================

const TEAMS = [
  { 
    value: 'MARKETING', 
    label: 'Marketing Team',
    description: 'Brand partnerships, media inquiries, collaborations'
  },
  { 
    value: 'SALES', 
    label: 'Sales Team',
    description: 'Pricing, licensing, enterprise deals, demos'
  },
  { 
    value: 'PRODUCT', 
    label: 'Product Executive',
    description: 'Features, roadmap, technical capabilities'
  },
];

const PRODUCT_CATEGORIES = [
  { value: 'EHP', label: 'eHP - Enterprise Health Platform' },
  { value: 'OIMS', label: 'OIMS - Incident Management System' },
  { value: 'PAYNET', label: 'PayNet - Payment Network' },
  { value: 'CLICKCONNECT', label: 'ClickConnect - Customer Suite' },
  { value: 'BLOK', label: 'BloK - Blockchain Kit' },
  { value: 'GENERAL', label: 'General Inquiry' },
];

const TIMEZONES = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Central European (CET)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Asia/Kolkata', label: 'India (IST)' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { value: 'Asia/Tokyo', label: 'Japan (JST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST)' },
];

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// =====================
// Main Component
// =====================

export default function BookingCalendar() {
  // Steps: 1 = Date/Time, 2 = Form Details, 3 = Confirmation
  const [step, setStep] = useState(1);
  
  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [timezone, setTimezone] = useState('America/New_York');
  
  // Time slots state
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState('');
  
  // Form state
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    team: '',
    productCategory: '',
    description: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<BookingFormData>>({});
  
  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  // Detect user timezone on mount
  useEffect(() => {
    try {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const matchedTz = TIMEZONES.find(tz => tz.value === userTimezone);
      if (matchedTz) {
        setTimezone(userTimezone);
      }
    } catch {
      // Default to ET
    }
  }, []);

  // Fetch time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      fetchTimeSlots(selectedDate);
    }
  }, [selectedDate, timezone]);

  const fetchTimeSlots = async (date: Date) => {
    setLoadingSlots(true);
    setSlotsError('');
    setSelectedSlot(null);
    
    try {
      const dateStr = date.toISOString().split('T')[0];
      const response = await fetch(
        `/api/bookings/slots?date=${dateStr}&timezone=${timezone}`
      );
      
      const data = await response.json();
      
      if (!response.ok) {
        setSlotsError(data.error || 'Failed to fetch time slots');
        setTimeSlots([]);
        return;
      }
      
      setTimeSlots(data.slots);
    } catch {
      setSlotsError('Failed to load time slots. Please try again.');
      setTimeSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  // Calendar navigation
  const goToPrevMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    
    // Don't go to past months
    const today = new Date();
    if (newMonth.getMonth() >= today.getMonth() || newMonth.getFullYear() > today.getFullYear()) {
      setCurrentMonth(newMonth);
    }
  };

  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    
    // Max 2 months ahead
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    if (newMonth <= maxDate) {
      setCurrentMonth(newMonth);
    }
  };

  // Generate calendar days
  const generateCalendarDays = useCallback(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();
    
    const days: (Date | null)[] = [];
    
    // Empty cells before first day
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  }, [currentMonth]);

  // Check if a date is selectable
  const isDateSelectable = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    
    // Must be future
    if (checkDate < today) return false;
    
    // Must be weekday
    const day = checkDate.getDay();
    if (day === 0 || day === 6) return false;
    
    // Max 60 days ahead
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    if (checkDate > maxDate) return false;
    
    return true;
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    if (isDateSelectable(date)) {
      setSelectedDate(date);
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const errors: Partial<BookingFormData> = {};
    
    if (!formData.firstName.trim() || formData.firstName.trim().length < 2) {
      errors.firstName = 'First name is required (min 2 characters)';
    }
    
    if (!formData.lastName.trim() || formData.lastName.trim().length < 2) {
      errors.lastName = 'Last name is required (min 2 characters)';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    } else {
      const domain = formData.email.split('@')[1].toLowerCase();
      const publicDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'mail.com', 'protonmail.com'];
      if (publicDomains.includes(domain)) {
        errors.email = 'Please use your official company email (no Gmail, Yahoo, etc.)';
      }
    }
    
    // Phone validation
    const cleanedPhone = formData.phoneNumber.replace(/[\s\-\(\)\.]/g, '');
    if (!cleanedPhone.startsWith('+')) {
      errors.phoneNumber = 'Include country code (e.g., +1 for US, +91 for India)';
    } else if (cleanedPhone.length < 9 || cleanedPhone.length > 16) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
    
    if (!formData.team) {
      errors.team = 'Please select a team';
    }
    
    if (!formData.productCategory) {
      errors.productCategory = 'Please select a product category';
    }
    
    if (!formData.description.trim() || formData.description.trim().length < 20) {
      errors.description = 'Please provide a detailed description (min 20 characters)';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm() || !selectedDate || !selectedSlot) return;
    
    setSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDate.toISOString(),
          startTime: selectedSlot.startTime,
          timezone,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setSubmitError(data.error || 'Failed to book consultation');
        return;
      }
      
      setConfirmation(data.booking);
      setStep(3);
    } catch {
      setSubmitError('Failed to book. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Format date for display
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // =====================
  // Render Functions
  // =====================

  const renderCalendar = () => (
    <div className="bg-slate-800/50 rounded-xl p-4 md:p-6 border border-slate-700">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPrevMonth}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-semibold">
          {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map(day => (
          <div key={day} className="text-center text-xs text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {generateCalendarDays().map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="p-2" />;
          }
          
          const isSelectable = isDateSelectable(date);
          const isSelected = selectedDate?.toDateString() === date.toDateString();
          const isToday = new Date().toDateString() === date.toDateString();
          
          return (
            <button
              key={date.toISOString()}
              onClick={() => handleDateSelect(date)}
              disabled={!isSelectable}
              className={`
                p-2 text-sm rounded-lg transition-all relative
                ${isSelected 
                  ? 'bg-cyan-500 text-white font-semibold' 
                  : isSelectable 
                    ? 'hover:bg-slate-700 text-gray-300' 
                    : 'text-gray-600 cursor-not-allowed'
                }
                ${isToday && !isSelected ? 'ring-1 ring-cyan-500/50' : ''}
              `}
            >
              {date.getDate()}
              {isToday && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderTimeSlots = () => (
    <div className="bg-slate-800/50 rounded-xl p-4 md:p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5 text-cyan-400" />
          Available Times
        </h3>
        
        {/* Timezone Selector */}
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-gray-300 focus:border-cyan-500 focus:outline-none appearance-none cursor-pointer"
          >
            {TIMEZONES.map(tz => (
              <option key={tz.value} value={tz.value}>{tz.label}</option>
            ))}
          </select>
        </div>
      </div>
      
      {!selectedDate ? (
        <p className="text-gray-500 text-center py-8">
          Select a date to view available times
        </p>
      ) : loadingSlots ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
        </div>
      ) : slotsError ? (
        <div className="text-red-400 text-center py-8 flex flex-col items-center gap-2">
          <AlertCircle className="w-6 h-6" />
          <p>{slotsError}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2">
          {timeSlots.map(slot => (
            <button
              key={slot.startTime}
              onClick={() => setSelectedSlot(slot)}
              disabled={!slot.available}
              className={`
                p-3 text-sm rounded-lg transition-all border
                ${selectedSlot?.startTime === slot.startTime
                  ? 'bg-cyan-500 border-cyan-500 text-white'
                  : slot.available
                    ? 'bg-slate-900 border-slate-700 hover:border-cyan-500/50 text-gray-300'
                    : 'bg-slate-900/50 border-slate-800 text-gray-600 cursor-not-allowed line-through'
                }
              `}
            >
              {slot.display.split(' - ')[0]}
            </button>
          ))}
        </div>
      )}
      
      {timeSlots.length > 0 && (
        <p className="text-xs text-gray-500 mt-4">
          All meetings are 30 minutes • Mon-Fri, 9AM-6PM
        </p>
      )}
    </div>
  );

  const renderFormStep = () => (
    <div className="space-y-6">
      {/* Selected Date/Time Summary */}
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-cyan-400">Selected Appointment</p>
          <p className="text-white font-semibold">
            {selectedDate && formatDate(selectedDate)}
          </p>
          <p className="text-gray-400 text-sm">
            {selectedSlot?.display} ({TIMEZONES.find(t => t.value === timezone)?.label})
          </p>
        </div>
        <button
          onClick={() => setStep(1)}
          className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1"
        >
          Change <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            First Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                formErrors.firstName ? 'border-red-500' : 'border-slate-700 focus:border-cyan-500'
              }`}
              placeholder="John"
            />
          </div>
          {formErrors.firstName && (
            <p className="text-red-400 text-xs mt-1">{formErrors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Last Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                formErrors.lastName ? 'border-red-500' : 'border-slate-700 focus:border-cyan-500'
              }`}
              placeholder="Doe"
            />
          </div>
          {formErrors.lastName && (
            <p className="text-red-400 text-xs mt-1">{formErrors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Corporate Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                formErrors.email ? 'border-red-500' : 'border-slate-700 focus:border-cyan-500'
              }`}
              placeholder="john@company.com"
            />
          </div>
          {formErrors.email && (
            <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
          )}
          <p className="text-gray-500 text-xs mt-1">
            Personal emails (Gmail, Yahoo, etc.) not accepted
          </p>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                formErrors.phoneNumber ? 'border-red-500' : 'border-slate-700 focus:border-cyan-500'
              }`}
              placeholder="+1 234 567 8900"
            />
          </div>
          {formErrors.phoneNumber && (
            <p className="text-red-400 text-xs mt-1">{formErrors.phoneNumber}</p>
          )}
          <p className="text-gray-500 text-xs mt-1">
            Include country code (e.g., +1, +44, +91)
          </p>
        </div>

        {/* Team Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Consultation With *
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <select
              value={formData.team}
              onChange={(e) => setFormData({ ...formData, team: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer ${
                formErrors.team ? 'border-red-500' : 'border-slate-700 focus:border-cyan-500'
              }`}
            >
              <option value="">Select team</option>
              {TEAMS.map(team => (
                <option key={team.value} value={team.value}>{team.label}</option>
              ))}
            </select>
          </div>
          {formErrors.team && (
            <p className="text-red-400 text-xs mt-1">{formErrors.team}</p>
          )}
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Product/Topic *
          </label>
          <div className="relative">
            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <select
              value={formData.productCategory}
              onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer ${
                formErrors.productCategory ? 'border-red-500' : 'border-slate-700 focus:border-cyan-500'
              }`}
            >
              <option value="">Select product</option>
              {PRODUCT_CATEGORIES.map(product => (
                <option key={product.value} value={product.value}>{product.label}</option>
              ))}
            </select>
          </div>
          {formErrors.productCategory && (
            <p className="text-red-400 text-xs mt-1">{formErrors.productCategory}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          How can we help? *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none ${
              formErrors.description ? 'border-red-500' : 'border-slate-700 focus:border-cyan-500'
            }`}
            placeholder="Please describe your inquiry, project requirements, or questions you'd like to discuss..."
          />
        </div>
        {formErrors.description && (
          <p className="text-red-400 text-xs mt-1">{formErrors.description}</p>
        )}
        <p className="text-gray-500 text-xs mt-1 text-right">
          {formData.description.length}/2000
        </p>
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-400 text-sm">{submitError}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setStep(1)}
          className="px-6 py-3 border border-slate-700 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Booking...
            </>
          ) : (
            <>
              <CalendarCheck className="w-5 h-5" />
              Confirm Booking
            </>
          )}
        </button>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="text-center py-8">
      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-10 h-10 text-green-400" />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-2">
        Consultation Booked!
      </h2>
      <p className="text-gray-400 mb-8">
        A confirmation email has been sent to your inbox with calendar invite.
      </p>
      
      {confirmation && (
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 max-w-md mx-auto mb-8 text-left">
          <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            Booking Details
          </h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-gray-500 text-sm">Reference</p>
              <p className="text-white font-mono text-sm">{confirmation.id}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Date</p>
              <p className="text-white">{formatDate(new Date(confirmation.date))}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Time</p>
              <p className="text-white">
                {selectedSlot?.display} ({TIMEZONES.find(t => t.value === timezone)?.label})
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Team</p>
              <p className="text-white">{TEAMS.find(t => t.value === confirmation.team)?.label}</p>
            </div>
          </div>
        </div>
      )}
      
      <p className="text-sm text-gray-500 mb-6">
        Need to reschedule or cancel? Reply to the confirmation email.
      </p>
      
      <button
        onClick={() => {
          setStep(1);
          setSelectedDate(null);
          setSelectedSlot(null);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            team: '',
            productCategory: '',
            description: '',
          });
          setConfirmation(null);
        }}
        className="px-6 py-3 border border-slate-700 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors"
      >
        Book Another Consultation
      </button>
    </div>
  );

  // =====================
  // Main Render
  // =====================

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
          <Calendar className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-400">Schedule Meeting</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Book a Consultation
        </h2>
        <p className="text-gray-400">
          Schedule a 30-minute call with our team to discuss your needs
        </p>
      </div>

      {/* Progress Steps */}
      {step < 3 && (
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2].map(s => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-2 ${step >= s ? 'text-cyan-400' : 'text-gray-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step >= s ? 'border-cyan-400 bg-cyan-400/20' : 'border-gray-600'
                }`}>
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                <span className="text-sm font-medium hidden sm:block">
                  {s === 1 ? 'Date & Time' : 'Your Details'}
                </span>
              </div>
              {s < 2 && (
                <div className={`w-12 h-0.5 ${step > s ? 'bg-cyan-400' : 'bg-gray-600'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-slate-700">
        {step === 1 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {renderCalendar()}
              {renderTimeSlots()}
            </div>
            
            {/* Continue Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedDate || !selectedSlot}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
        
        {step === 2 && renderFormStep()}
        
        {step === 3 && renderConfirmation()}
      </div>
    </div>
  );
}
