/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId } from 'react';
import avatarImg from './assets/images/avatar_alejandra_chic_1791805563142.jpg';
import {
  Calendar as CalendarIcon,
  Clock,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Globe,
  Award,
  Sparkles,
  ChevronRight,
  Copy,
  Check,
  Heart,
  Plane,
  Activity,
  Download,
  CalendarCheck,
  Send,
  Layers,
  Wrench,
  UserCheck,
  ChevronLeft,
  CalendarDays,
  FileCode,
  ShieldCheck,
  X
} from 'lucide-react';

// Exact Resume Data
const PROFILE = {
  name: "Alejandra Martínez Rodríguez",
  title: "Business Analyst / Industrial Engineer",
  location: "Brussels, Belgium",
  workStatus: "Authorized to work in Belgium (No sponsorship required)",
  contact: {
    phone: "+32 476 91 13 52",
    email: "martinezalejandra.mar@gmail.com",
    linkedin: "linkedin.com/in/alejandra-martinezrodriguez",
    linkedinUrl: "https://www.linkedin.com/in/alejandra-martinezrodriguez"
  },
  summary: "Industrial Engineer with a Master's in Marketing and experience in software implementation, customer needs analysis, and process improvement. Skilled at connecting customers and technical teams, improving workflows, and supporting user adoption. Currently developing skills in AI and business automation to solve practical business problems."
};

const EDUCATION = [
  {
    title: "Applied AI in Business Training",
    duration: "3 Months",
    institution: "Brussels, Belgium",
    period: "2026",
    highlight: "AI & Business Automation"
  },
  {
    title: "MSc in Marketing",
    institution: "Montpellier Business School, France",
    period: "2019 - 2021",
    highlight: "International Strategy & Commercial Growth"
  },
  {
    title: "English Certification",
    institution: "ILSC Education Group, Melbourne, Australia",
    period: "2017 - 2018",
    highlight: "Full Professional Fluency"
  },
  {
    title: "B.S. in Industrial Engineering",
    duration: "5-Year Degree",
    institution: "Pontificia Universidad Javeriana, Colombia",
    period: "2010 - 2015",
    highlight: "Process Engineering & Operations Analysis"
  }
];

const EXPERIENCE = [
  {
    id: "shyfter",
    company: "Shyfter.co",
    role: "Business Development & Customer Success",
    workType: "Hybrid",
    location: "Belgium - Brussels",
    period: "Mar 2025 - Dec 2025",
    badge: "SaaS Workforce Management",
    bullets: [
      "Supported launch in Spain through market analysis, 10-12 daily prospect calls, and tailored demos.",
      "Created Spanish-market onboarding documentation and delivered customer training.",
      "Translated customer feedback into proposed product changes with developers for platform localisation."
    ]
  },
  {
    id: "atmire",
    company: "ATMIRE",
    role: "Customer Success Consultant",
    workType: "Hybrid",
    location: "Belgium - Leuven",
    period: "Mar 2024 - Mar 2025",
    badge: "Open Repository & DSpace",
    bullets: [
      "Managed 8-10 simultaneous implementations of Open Repository and DSpace Express for international customers.",
      "Connected customers and developers, coordinating requirements, data migration, setup, and release preparation.",
      "Delivered user training, reported feedback/bugs, and identified upselling/cross-selling opportunities."
    ]
  },
  {
    id: "deliverect",
    company: "DELIVERECT",
    role: "Customer Success EMEA",
    workType: "Hybrid",
    location: "Belgium - Ghent",
    period: "Apr 2022 - Jun 2023",
    badge: "FoodTech & POS Integrations",
    bullets: [
      "Managed onboarding and account needs for ~30 customers simultaneously across UK and Spanish markets.",
      "Coordinated platform setup, POS integrations, and hands-on product training.",
      "Improved onboarding workflows, created integration documentation, and tracked account health in HubSpot, Zendesk, Trello, and Jira."
    ]
  },
  {
    id: "lacteos-superior",
    company: "LÁCTEOS SUPERIOR",
    role: "Multiple Progressive Roles",
    workType: "On-site & Remote",
    location: "Bogotá, Colombia",
    period: "2015 - 2022",
    badge: "Food & Consumer Goods Industry",
    bullets: [
      "Marketing Specialist (Remote | 2020 - 2022): Launched B2B/B2C e-commerce on Shopify and analysed sales data for pricing strategies.",
      "Business Development Manager (2018 - 2019): Achieved 20% revenue growth through institutional channel expansion and team leadership.",
      "Industrial Engineer (2015 - 2017): Managed logistics, distribution workflows, inventory planning, and supply chain costs."
    ],
    rolesDetailed: [
      {
        subRole: "Marketing Specialist",
        subPeriod: "Remote | 2020 - 2022",
        subDesc: "Launched B2B/B2C e-commerce on Shopify and analysed sales data for pricing strategies."
      },
      {
        subRole: "Business Development Manager",
        subPeriod: "2018 - 2019",
        subDesc: "Achieved 20% revenue growth through institutional channel expansion and team leadership."
      },
      {
        subRole: "Industrial Engineer",
        subPeriod: "2015 - 2017",
        subDesc: "Managed logistics, distribution workflows, inventory planning, and supply chain costs."
      }
    ]
  }
];

const COMPETENCIES = [
  {
    category: "Business Analysis & Process Improvement",
    description: "Translating customer pain points into actionable system specifications and leaner operations.",
    skills: [
      "Customer needs analysis",
      "Requirements gathering",
      "Customer discovery",
      "Workflow improvement",
      "Root-cause problem solving"
    ]
  },
  {
    category: "Implementation & User Adoption",
    description: "Guiding clients from initial contract to active, self-sufficient software utilization.",
    skills: [
      "Software implementation coordination",
      "Customer onboarding",
      "Technical setup",
      "User training",
      "Training materials",
      "Product adoption"
    ]
  },
  {
    category: "Stakeholder Collaboration",
    description: "Aligning product developers, executive sponsors, and frontline users seamlessly.",
    skills: [
      "Cross-functional coordination",
      "Stakeholder management",
      "Customer feedback",
      "Bug reporting",
      "Feature requests"
    ]
  },
  {
    category: "Data & Digital Tools",
    description: "Monitoring system adoption health and streamlining data hygiene across systems.",
    skills: [
      "Product usage tracking",
      "Account health monitoring",
      "CRM data quality",
      "Excel",
      "Google Sheets",
      "Applied AI Tools"
    ]
  }
];

const TOOLS = [
  {
    category: "CRMs & Ticketing",
    items: ["HubSpot", "Zendesk", "Jira"],
    desc: "Customer lifecycle, ticket triage & sprint tracking"
  },
  {
    category: "Productivity",
    items: ["Trello", "MS Excel", "Google Sheets"],
    desc: "Workflow boards, financial models & analysis"
  },
  {
    category: "E-Commerce & Tech",
    items: ["Shopify"],
    desc: "B2B / B2C digital storefronts & catalog setup"
  },
  {
    category: "AI",
    items: ["Applied AI Tools"],
    desc: "Practical business automation & agentic workflows"
  }
];

const LANGUAGES = [
  {
    code: "es",
    name: "Spanish",
    level: "Native",
    percent: 100,
    quote: "Conecto equipos técnicos con las necesidades de negocio, transformando el feedback de clientes en procesos eficientes y una adopción de software exitosa.",
    origin: "Native speaker · Colombia"
  },
  {
    code: "en",
    name: "English",
    level: "Fluent",
    percent: 95,
    quote: "I bridge the gap between technical teams and business stakeholders, transforming complex customer feedback into streamlined workflows and measurable adoption.",
    origin: "Certified in Melbourne, Australia (ILSC Education Group)"
  },
  {
    code: "fr",
    name: "French",
    level: "Professional working proficiency",
    percent: 85,
    quote: "Je fais le lien entre les équipes techniques et les parties prenantes métier, en traduisant les retours clients en flux de travail optimisés et en adoption fluide.",
    origin: "Master's degree completed in Montpellier, France"
  }
];

const INTERESTS = [
  {
    name: "Tennis, Fitness and Yoga",
    desc: "Discipline, mental focus, and continuous personal growth through active movement.",
    icon: Activity
  },
  {
    name: "Travel and discover new cultures",
    desc: "Lived and worked across Colombia, Australia, France, and Belgium, fostering adaptable cross-cultural empathy.",
    icon: Plane
  }
];

// Available time slots required: strictly 09:00 AM, 11:00 AM, 02:00 PM, 04:00 PM
const TIME_SLOTS = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];
const MEETING_TYPE = "Introductory Call (30 min) - General inquiry & potential collaboration";

export default function App() {
  // Navigation & Scroll
  const [activeLang, setActiveLang] = useState<string>("en");
  const [activeTimelineTab, setActiveTimelineTab] = useState<"all" | "experience" | "education">("all");
  
  // Booking Form State
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    // Default to tomorrow or next weekday
    const d = new Date();
    d.setDate(d.getDate() + 1);
    while (d.getDay() === 0 || d.getDay() === 6) {
      d.setDate(d.getDate() + 1);
    }
    return d.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    company: "",
    notes: ""
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  
  // UI feedback states
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [showCodeModal, setShowCodeModal] = useState(false);

  // Month navigation for booking
  const [currentCalendarDate, setCurrentCalendarDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email) return;

    const details = {
      meetingType: MEETING_TYPE,
      date: selectedDate,
      time: selectedTime,
      name: bookingForm.name,
      email: bookingForm.email,
      company: bookingForm.company || "Not specified",
      notes: bookingForm.notes || "None provided",
      timestamp: new Date().toISOString()
    };
    setBookingDetails(details);
    setBookingSubmitted(true);
  };

  const resetBooking = () => {
    setBookingSubmitted(false);
    setBookingDetails(null);
    setBookingForm({ name: "", email: "", company: "", notes: "" });
  };

  // Calendar generation helpers
  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Shift to start week on Monday
  const adjustedFirstDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const handlePrevMonth = () => {
    setCurrentCalendarDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentCalendarDate(new Date(year, month + 1, 1));
  };

  // Generate .ics calendar download
  const downloadIcs = () => {
    if (!bookingDetails) return;
    const dateFormatted = bookingDetails.date.replace(/-/g, '');
    let hour = 11;
    if (bookingDetails.time.startsWith("09")) hour = 9;
    if (bookingDetails.time.startsWith("02")) hour = 14;
    if (bookingDetails.time.startsWith("04")) hour = 16;
    
    const startHourStr = String(hour).padStart(2, '0');
    const endHourStr = String(hour).padStart(2, '0');
    const startMinStr = "00";
    const endMinStr = "30";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Alejandra Martinez//Introductory Call//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `SUMMARY:Introductory Call with Alejandra Martínez Rodríguez`,
      `DESCRIPTION:Introductory Call (30 min) - General inquiry & potential collaboration with Alejandra Martínez Rodríguez.\\nParticipant: ${bookingDetails.name} (${bookingDetails.email})`,
      `LOCATION:Google Meet / Remote (Link provided upon confirmation)`,
      `DTSTART:${dateFormatted}T${startHourStr}${startMinStr}00Z`,
      `DTEND:${dateFormatted}T${endHourStr}${endMinStr}00Z`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Introductory_Call_Alejandra_Martinez.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentLangData = LANGUAGES.find(l => l.code === activeLang) || LANGUAGES[1];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2522] font-sans antialiased selection:bg-[#E3EAE5] selection:text-[#1F3327]">
      {/* Top Bar - Clean 3-zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6E2D8] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <span className="w-8 h-8 rounded-full bg-[#EBF1ED] border border-[#CCD8D0] flex items-center justify-center text-xs font-semibold text-[#3D5245] group-hover:bg-[#3D5245] group-hover:text-white transition-colors">
              AM
            </span>
            <span className="text-base sm:text-lg font-semibold tracking-tight text-[#1E2522] whitespace-nowrap">
              Alejandra Martínez R.
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#55625B]">
            <a href="#about" className="hover:text-[#1E2522] transition-colors whitespace-nowrap shrink-0">About</a>
            <a href="#experience" className="hover:text-[#1E2522] transition-colors whitespace-nowrap shrink-0">Experience</a>
            <a href="#competencies" className="hover:text-[#1E2522] transition-colors whitespace-nowrap shrink-0">Competencies</a>
            <a href="#languages" className="hover:text-[#1E2522] transition-colors whitespace-nowrap shrink-0">Languages</a>
            <a href="#contact" className="hover:text-[#1E2522] transition-colors whitespace-nowrap shrink-0">Contact</a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#book-a-call"
              className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#33463B] hover:bg-[#25352C] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#33463B]"
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24">
        
        {/* HERO SECTION */}
        <section id="about" className="relative scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Typographic & Profile Information */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Indicator Bar: Authorized to work in Belgium */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF1ED] border border-[#D5E1D8] text-xs font-medium text-[#2E4738]">
                <span className="w-2 h-2 rounded-full bg-[#4E7A5E] shrink-0" />
                <span>Available for opportunities in Belgium</span>
                <span className="text-[#8FA899]" aria-hidden="true">·</span>
                <span className="text-[#405A4A] font-normal">No sponsorship required</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#161D19] leading-[1.15]">
                  Alejandra Martínez Rodríguez
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#4D6355]">
                  Business Analyst / Industrial Engineer
                </p>
                <div className="flex items-center gap-2 text-sm text-[#66756D]">
                  <MapPin className="w-4 h-4 text-[#4D6355] shrink-0" />
                  <span>Brussels, Belgium</span>
                  <span aria-hidden="true">·</span>
                  <span>Hybrid & On-site Available</span>
                </div>
              </div>

              {/* Professional Summary */}
              <p className="text-base sm:text-lg text-[#3E4A43] leading-relaxed max-w-2xl">
                Industrial Engineer with a Master's in Marketing and experience in software implementation, customer needs analysis, and process improvement. Skilled at connecting customers and technical teams, improving workflows, and supporting user adoption. Currently developing skills in AI and business automation to solve practical business problems.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#book-a-call"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#33463B] hover:bg-[#25352C] rounded-lg shadow-sm transition-colors inline-flex items-center gap-2"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Book a Call</span>
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 text-sm font-medium text-[#25352C] bg-white hover:bg-[#F2EFE9] border border-[#DDD7CB] rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#4D6355]" />
                  <span>Get in Touch</span>
                </a>
                <a
                  href={PROFILE.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 text-sm font-medium text-[#4D6355] hover:text-[#25352C] bg-transparent hover:bg-[#EFECE5] rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn Profile</span>
                </a>
              </div>

              {/* Quick Contact Micro-Strip */}
              <div className="pt-4 border-t border-[#E8E4DA] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#617068]">
                <button
                  onClick={() => handleCopy(PROFILE.contact.email, "email")}
                  className="inline-flex items-center gap-1.5 hover:text-[#25352C] transition-colors cursor-pointer group"
                  title="Click to copy email"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5A7363]" />
                  <span>{PROFILE.contact.email}</span>
                  {copiedItem === "email" ? (
                    <Check className="w-3.5 h-3.5 text-[#3E7051]" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>

                <button
                  onClick={() => handleCopy(PROFILE.contact.phone, "phone")}
                  className="inline-flex items-center gap-1.5 hover:text-[#25352C] transition-colors cursor-pointer group"
                  title="Click to copy phone number"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5A7363]" />
                  <span>{PROFILE.contact.phone}</span>
                  {copiedItem === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-[#3E7051]" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              </div>

            </div>

            {/* Right Column: High-Fidelity Profile Avatar & Badge Framing */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <div className="relative">
                
                {/* Subtle natural ambient glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#EBF1ED]/70 via-[#F5F2EB]/60 to-[#EAE5DA]/50 rounded-3xl blur-lg opacity-90 pointer-events-none" />
                
                {/* Outer Glass Card */}
                <div className="relative bg-white/85 backdrop-blur-xl border border-[#DFD9CD] p-4 sm:p-5 rounded-3xl shadow-xs max-w-sm transition-all">
                  
                  {/* Circular Avatar Framing */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden border-[5px] border-white shadow-md ring-1 ring-[#D8E0DA] bg-[#EBE7DF]">
                    <img
                      src={avatarImg}
                      alt="Alejandra Martínez Rodríguez"
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Trust Card Info in Hero */}
                  <div className="mt-4 text-center space-y-1">
                    <p className="text-sm font-semibold text-[#1F2E25]">Alejandra Martínez</p>
                    <p className="text-xs text-[#5E6F65]">Industrial Engineer & BA · Brussels</p>
                    <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#486353] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#4A785A]" />
                      <span>EU Work Rights: Fully Authorized</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Adjacency KPI Strip: 4 Concrete Pillars */}
          <div className="mt-14 pt-8 border-t border-[#E6E1D5] grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="text-xs font-medium text-[#67776F]">Background</span>
              <p className="text-base font-semibold text-[#1E2522]">Industrial Engineering</p>
              <p className="text-xs text-[#6F7E76]">5-Year Degree & Process Rigor</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-[#67776F]">Customer Success</span>
              <p className="text-base font-semibold text-[#1E2522]">8-10 Implementations</p>
              <p className="text-xs text-[#6F7E76]">Simultaneous Enterprise SaaS</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-[#67776F]">International Markets</span>
              <p className="text-base font-semibold text-[#1E2522]">Spain, UK & Benelux</p>
              <p className="text-xs text-[#6F7E76]">Trilingual Client Coordination</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-[#67776F]">Emerging Focus</span>
              <p className="text-base font-semibold text-[#1E2522]">Applied AI in Business</p>
              <p className="text-xs text-[#6F7E76]">Brussels 2026 Training</p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE APPOINTMENT BOOKING MODULE */}
        <section id="book-a-call" className="scroll-mt-24">
          <div className="bg-white rounded-2xl border border-[#E3DDD1] shadow-xs p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            
            {/* Header */}
            <div className="max-w-2xl mb-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#486353]">
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>DIRECT SCHEDULING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#161D19]">
                Book a Call with Alejandra
              </h2>
              <p className="text-sm sm:text-base text-[#56655D]">
                Select your preferred date and time for an introductory discussion regarding business analysis, customer success, or software implementation roles.
              </p>
            </div>

            {bookingSubmitted && bookingDetails ? (
              /* Confirmation Screen */
              <div className="bg-[#FAF8F5] rounded-xl border border-[#DDE4DF] p-6 sm:p-8 text-center max-w-xl mx-auto space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#E5EFE8] text-[#2C5E3B] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#19271E]">Appointment Request Confirmed!</h3>
                  <p className="text-sm text-[#4E6155]">
                    Thank you, <strong className="font-semibold text-[#19271E]">{bookingDetails.name}</strong>. A calendar placeholder has been generated.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-white rounded-lg p-5 border border-[#E2DDD3] text-left text-sm space-y-2.5">
                  <div className="flex items-start justify-between gap-4 pb-2 border-b border-[#EFECE5]">
                    <span className="text-xs text-[#6A7870]">Meeting Type</span>
                    <span className="font-medium text-[#1E2522] text-right text-xs sm:text-sm">
                      {bookingDetails.meetingType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#6A7870]">Date:</span>
                    <span className="font-medium text-[#1E2522]">{bookingDetails.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#6A7870]">Time Slot:</span>
                    <span className="font-medium text-[#1E2522]">{bookingDetails.time} (Brussels Time)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#6A7870]">Participant Email:</span>
                    <span className="font-medium text-[#1E2522]">{bookingDetails.email}</span>
                  </div>
                  {bookingDetails.company !== "Not specified" && (
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#6A7870]">Organization:</span>
                      <span className="font-medium text-[#1E2522]">{bookingDetails.company}</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={downloadIcs}
                    className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#33463B] hover:bg-[#25352C] rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Calendar (.ics)</span>
                  </button>
                  <button
                    onClick={resetBooking}
                    className="px-4 py-2 text-xs sm:text-sm font-medium text-[#33463B] bg-white border border-[#D0CABF] hover:bg-[#F2EFE9] rounded-lg transition-colors cursor-pointer"
                  >
                    Schedule Another
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form Grid */
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                
                {/* 1. Meeting Type (Strictly Introductory Call) */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#536159] tracking-wider uppercase">
                    Meeting Topic & Format
                  </label>
                  <div className="p-4 rounded-xl border-2 border-[#547361] bg-[#F4F8F5] flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm sm:text-base text-[#1E2E24]">
                          Introductory Call (30 min)
                        </span>
                        <span className="text-xs bg-[#DDE9E0] text-[#2F523B] px-2 py-0.5 rounded-md font-medium">
                          Selected
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#506357]">
                        General inquiry & potential collaboration
                      </p>
                    </div>
                    <Clock className="w-5 h-5 text-[#4D6D59] shrink-0" />
                  </div>
                </div>

                {/* 2. Interactive Calendar & Time Slots */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Month Calendar */}
                  <div className="lg:col-span-7 bg-[#FAF8F5] p-5 rounded-xl border border-[#E4DFD4] space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-[#1F2722]">
                        {monthNames[month]} {year}
                      </h4>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="p-1.5 rounded-md text-[#5B6B62] hover:bg-[#EAE5DA] transition-colors"
                          aria-label="Previous month"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="p-1.5 rounded-md text-[#5B6B62] hover:bg-[#EAE5DA] transition-colors"
                          aria-label="Next month"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Day Headers */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-[#7C8B82]">
                      <div>Mo</div>
                      <div>Tu</div>
                      <div>We</div>
                      <div>Th</div>
                      <div>Fr</div>
                      <div>Sa</div>
                      <div>Su</div>
                    </div>

                    {/* Day Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {/* Empty cells before month start */}
                      {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                        <div key={`empty-${i}`} className="h-9 sm:h-10" />
                      ))}

                      {/* Month Days */}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const dayNum = i + 1;
                        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                        const dayDate = new Date(year, month, dayNum);
                        const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6;
                        const isSelected = selectedDate === dateStr;

                        return (
                          <button
                            key={`day-${dayNum}`}
                            type="button"
                            disabled={isWeekend}
                            onClick={() => setSelectedDate(dateStr)}
                            className={`h-9 sm:h-10 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#33463B] text-white font-semibold shadow-xs'
                                : isWeekend
                                ? 'text-[#BFB8AA] opacity-40 cursor-not-allowed'
                                : 'text-[#28352D] hover:bg-[#E8E2D5] cursor-pointer'
                            }`}
                          >
                            {dayNum}
                          </button>
                        );
                      })}
                    </div>

                    <div className="text-xs text-[#6F7F77] pt-2 border-t border-[#E8E3D7] flex items-center justify-between">
                      <span>Available Monday to Friday</span>
                      <span>Selected: <strong className="text-[#202E25] font-semibold">{selectedDate}</strong></span>
                    </div>
                  </div>

                  {/* Right: Time Slots & Meeting Info */}
                  <div className="lg:col-span-5 space-y-4">
                    <label className="block text-xs font-semibold text-[#536159] tracking-wider uppercase">
                      Select Available Time (CET / Brussels)
                    </label>
                    
                    <div className="grid grid-cols-2 gap-2.5">
                      {TIME_SLOTS.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-3 text-xs sm:text-sm font-medium rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#33463B] text-white border-[#33463B] shadow-xs'
                                : 'bg-white text-[#2B3830] border-[#DDD7CC] hover:border-[#9DB3A6] hover:bg-[#F8F6F2]'
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5 mx-auto mb-1 opacity-70" />
                            {time}
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#F2EFE9] border border-[#E3DDD1] text-xs text-[#526359] space-y-1">
                      <p className="font-medium text-[#223328]">Meeting Details:</p>
                      <p>• 30-minute introductory meeting</p>
                      <p>• Video conference via Google Meet / Teams</p>
                      <p>• Location: Remote or Brussels in-person upon request</p>
                    </div>
                  </div>

                </div>

                {/* 3. Attendee Information Form */}
                <div className="pt-4 border-t border-[#E8E3D8] space-y-4">
                  <h4 className="text-sm font-semibold text-[#213027]">
                    Your Contact Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#4B5A51] mb-1">
                        Full Name <span className="text-[#963737]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="e.g. Sarah Vandenberg"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD7CC] bg-[#FAF8F5] text-sm text-[#1E2522] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5A7A66] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4B5A51] mb-1">
                        Email Address <span className="text-[#963737]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        placeholder="e.g. sarah@company.be"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD7CC] bg-[#FAF8F5] text-sm text-[#1E2522] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5A7A66] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4B5A51] mb-1">
                        Company or Organization (Optional)
                      </label>
                      <input
                        type="text"
                        value={bookingForm.company}
                        onChange={(e) => setBookingForm({ ...bookingForm, company: e.target.value })}
                        placeholder="e.g. Tech Solutions SPRL"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD7CC] bg-[#FAF8F5] text-sm text-[#1E2522] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5A7A66] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4B5A51] mb-1">
                        Topic or Notes (Optional)
                      </label>
                      <input
                        type="text"
                        value={bookingForm.notes}
                        onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                        placeholder="e.g. Process analysis project, SaaS rollout"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD7CC] bg-[#FAF8F5] text-sm text-[#1E2522] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5A7A66] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-semibold text-white bg-[#33463B] hover:bg-[#25352C] rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#33463B]"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Confirm Booking for {selectedDate} at {selectedTime}</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </section>

        {/* LANGUAGES SECTION */}
        <section id="languages" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#486353] uppercase tracking-wider">Communication & Fluency</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#161D19]">
                Languages & Regional Reach
              </h2>
              <p className="text-sm text-[#5B6C62]">
                Trilingual proficiency enabling cross-border customer success and international stakeholder management.
              </p>
            </div>
            
            {/* Language Selector Buttons */}
            <div className="inline-flex p-1 bg-[#EBE7DD] rounded-xl border border-[#D9D3C5] shrink-0">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setActiveLang(lang.code)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activeLang === lang.code
                      ? 'bg-white text-[#1C2A21] shadow-xs font-semibold'
                      : 'text-[#58685E] hover:text-[#1C2A21]'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cards & Meters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LANGUAGES.map((lang) => {
              const isSelected = activeLang === lang.code;
              return (
                <div
                  key={lang.code}
                  onClick={() => setActiveLang(lang.code)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-white border-[#547562] shadow-sm ring-1 ring-[#547562]'
                      : 'bg-[#FCFBF8] border-[#E3DDD1] hover:border-[#CCD5CE] hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#1E2522]">{lang.name}</h3>
                      <p className="text-xs font-medium text-[#4D6355]">{lang.level}</p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#EBF1ED] text-[#2C4837]">
                      {lang.percent}%
                    </span>
                  </div>

                  {/* Visual Level Meter */}
                  <div className="w-full bg-[#EAE5DA] rounded-full h-2 mb-4 overflow-hidden">
                    <div
                      className="bg-[#4E735B] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>

                  <p className="text-xs text-[#6B7971] leading-relaxed">
                    {lang.origin}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Translated Interactive Message Box */}
          <div className="p-6 rounded-2xl bg-white border border-[#DDD7CB] shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs text-[#5D6F64]">
              <span className="font-semibold uppercase tracking-wider text-[#3C5747]">
                Value Proposition in {currentLangData.name} ({currentLangData.level})
              </span>
              <span className="text-xs text-[#7A8A80]">Interactive message translator</span>
            </div>
            <blockquote className="text-base sm:text-lg font-serif-accent text-[#213228] italic border-l-2 border-[#5B7D68] pl-4 py-1">
              "{currentLangData.quote}"
            </blockquote>
          </div>
        </section>

        {/* WORK EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#486353] uppercase tracking-wider">Career & Credentials</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#161D19]">
                Professional Experience & Education
              </h2>
              <p className="text-sm text-[#5B6C62]">
                Demonstrated track record across SaaS rollouts, customer advocacy, marketing operations, and engineering.
              </p>
            </div>

            {/* Segmented Filter */}
            <div className="inline-flex p-1 bg-[#EBE7DD] rounded-xl border border-[#D9D3C5] shrink-0">
              <button
                onClick={() => setActiveTimelineTab("all")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeTimelineTab === "all"
                    ? 'bg-white text-[#1C2A21] shadow-xs font-semibold'
                    : 'text-[#58685E] hover:text-[#1C2A21]'
                }`}
              >
                All (8)
              </button>
              <button
                onClick={() => setActiveTimelineTab("experience")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeTimelineTab === "experience"
                    ? 'bg-white text-[#1C2A21] shadow-xs font-semibold'
                    : 'text-[#58685E] hover:text-[#1C2A21]'
                }`}
              >
                Experience (4)
              </button>
              <button
                onClick={() => setActiveTimelineTab("education")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeTimelineTab === "education"
                    ? 'bg-white text-[#1C2A21] shadow-xs font-semibold'
                    : 'text-[#58685E] hover:text-[#1C2A21]'
                }`}
              >
                Education (4)
              </button>
            </div>
          </div>

          {/* Timeline Stream */}
          <div className="space-y-6">

            {/* EXPERIENCE ITEMS */}
            {(activeTimelineTab === "all" || activeTimelineTab === "experience") && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#445E4E] tracking-wider uppercase">
                  <Briefcase className="w-4 h-4" />
                  <span>Work Experience</span>
                </div>

                <div className="space-y-5">
                  {EXPERIENCE.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3DDD1] shadow-xs hover:border-[#CCD5CE] transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-[#EFECE5]">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <h3 className="text-lg font-bold text-[#161D19]">{job.company}</h3>
                            <span className="text-xs font-medium text-[#486353] bg-[#EBF1ED] px-2.5 py-0.5 rounded-full">
                              {job.badge}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-[#3E5245] mt-0.5">
                            {job.role}
                          </p>
                        </div>
                        
                        <div className="text-xs text-[#6F7F77] sm:text-right shrink-0">
                          <p className="font-medium text-[#1E2522]">{job.period}</p>
                          <p>{job.location} · {job.workType}</p>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="mt-4 space-y-2.5 text-sm text-[#3E4D44]">
                        {job.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5D7E69] mt-2 shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Sub-roles breakdown for Lacteos Superior */}
                      {job.rolesDetailed && (
                        <div className="mt-5 pt-4 border-t border-[#F2EEE6] grid grid-cols-1 md:grid-cols-3 gap-3">
                          {job.rolesDetailed.map((sr, idx) => (
                            <div key={idx} className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E8E4DA] text-xs space-y-1">
                              <p className="font-semibold text-[#1F2E25]">{sr.subRole}</p>
                              <p className="text-[#6C7D73] font-mono">{sr.subPeriod}</p>
                              <p className="text-[#4E5C54] leading-normal">{sr.subDesc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EDUCATION ITEMS */}
            {(activeTimelineTab === "all" || activeTimelineTab === "education") && (
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#445E4E] tracking-wider uppercase">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Background & Qualifications</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EDUCATION.map((edu, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 border border-[#E3DDD1] shadow-xs hover:border-[#CCD5CE] transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-base font-bold text-[#161D19]">
                            {edu.title}
                          </h4>
                          <span className="text-xs font-mono text-[#586960] shrink-0 bg-[#F2EFE9] px-2 py-0.5 rounded">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm text-[#4E5E54] font-medium">
                          {edu.institution}
                        </p>
                        {edu.duration && (
                          <p className="text-xs text-[#7B8B82]">Duration: {edu.duration}</p>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#F0ECE4] text-xs text-[#3C5746] font-medium flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#50755E]" />
                        <span>{edu.highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* COMPETENCIES & TOOLS SECTION */}
        <section id="competencies" className="scroll-mt-24 space-y-10">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-[#486353] uppercase tracking-wider">Expertise & Toolset</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#161D19]">
              Core Competencies & Technology Stack
            </h2>
            <p className="text-sm text-[#5B6C62]">
              Structured domain competencies combined with hands-on tool mastery across enterprise workflows.
            </p>
          </div>

          {/* 1. Competencies Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPETENCIES.map((comp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3DDD1] shadow-xs hover:border-[#CCD5CE] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#EBF1ED] text-[#3A5644] text-xs font-bold flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#161D19]">
                      {comp.category}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E6F65] leading-relaxed">
                    {comp.description}
                  </p>
                </div>

                {/* Badges / Chips */}
                <div className="mt-5 pt-4 border-t border-[#EFECE5] flex flex-wrap gap-2">
                  {comp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 text-xs font-medium text-[#2A3B30] bg-[#FAF8F5] border border-[#DDD7CB] rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Tools Stack Badges */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E2DDD3]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#445E4E] tracking-wider uppercase mb-5">
              <Wrench className="w-4 h-4" />
              <span>Tools & Applications Stack</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TOOLS.map((t, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-[#E5DFD4] space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#627369] uppercase tracking-wider">
                      {t.category}
                    </h4>
                    <p className="text-xs text-[#7B8B82] mt-0.5">{t.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {t.items.map((toolName, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-semibold text-[#1F2E25] bg-[#EBF1ED] rounded-md border border-[#D5E1D8]"
                      >
                        {toolName}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONAL INTERESTS & CROSS-CULTURAL MINDSET */}
        <section className="bg-white rounded-2xl border border-[#E3DDD1] p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl space-y-1 mb-6">
            <span className="text-xs font-semibold text-[#486353] uppercase tracking-wider">Personal Values</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#161D19]">
              Interests & Life Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6C62]">
              Balancing continuous analytical focus with active wellness and open intercultural curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {INTERESTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E4DFD5] flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#EBF1ED] text-[#3D5C48] shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#1E2522]">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-[#55665D] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT & GET IN TOUCH SECTION */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="bg-[#1F2E26] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#354D3F] rounded-full blur-3xl opacity-30 -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#A1B8AA] uppercase">
                  Let's Connect
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  Ready to optimize workflows and accelerate customer success?
                </h2>
                <p className="text-sm sm:text-base text-[#D0DDD5] leading-relaxed max-w-xl">
                  Based in Brussels and fully authorized to work in Belgium without sponsorship requirements. Let's discuss how my engineering background and customer success experience can benefit your team.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href="#book-a-call"
                    className="px-5 py-2.5 text-sm font-semibold text-[#1F2E26] bg-[#E8F2EC] hover:bg-white rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    <CalendarDays className="w-4 h-4" />
                    <span>Schedule Introductory Call</span>
                  </a>
                  <button
                    onClick={() => setShowCodeModal(true)}
                    className="px-4 py-2.5 text-sm font-medium text-[#D5E3DA] hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <FileCode className="w-4 h-4" />
                    <span>View Standalone HTML Code</span>
                  </button>
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="lg:col-span-5 space-y-3">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="space-y-0.5 truncate mr-3">
                    <p className="text-xs text-[#A1B8AA]">Direct Email</p>
                    <p className="text-sm font-semibold text-white truncate">{PROFILE.contact.email}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(PROFILE.contact.email, "contact-email")}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedItem === "contact-email" ? <Check className="w-4 h-4 text-[#A7E2BE]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-xs text-[#A1B8AA]">Direct Phone (Belgium)</p>
                    <p className="text-sm font-semibold text-white">{PROFILE.contact.phone}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(PROFILE.contact.phone, "contact-phone")}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Phone"
                  >
                    {copiedItem === "contact-phone" ? <Check className="w-4 h-4 text-[#A7E2BE]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Box */}
                <a
                  href={PROFILE.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 flex items-center justify-between transition-colors group"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs text-[#A1B8AA]">Professional Profile</p>
                    <p className="text-sm font-semibold text-white">linkedin.com/in/alejandra-martinezrodriguez</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#E6E1D5] bg-[#FAF8F5] py-10 mt-16 text-xs text-[#6C7C73]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1E2522]">Alejandra Martínez Rodríguez</span>
            <span>·</span>
            <span>Business Analyst & Industrial Engineer</span>
          </div>
          <div className="flex items-center gap-4 text-[#5D6F64]">
            <span>Brussels, Belgium</span>
            <span>·</span>
            <a href="#about" className="hover:text-[#1E2522] transition-colors">Back to top</a>
          </div>
        </div>
      </footer>

      {/* MODAL: STANDALONE SINGLE-FILE HTML VIEWER & DOWNLOAD */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-xl border border-[#DDD7CB]">
            <div className="flex items-center justify-between border-b border-[#EFECE5] pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#1E2522]">Standalone Single-File HTML Package</h3>
                <p className="text-xs text-[#5E6F65]">
                  Self-contained HTML file with embedded CSS in &lt;style&gt; and JS in &lt;script&gt;
                </p>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="p-1.5 rounded-lg text-[#6C7C73] hover:bg-[#F2EFE9] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4] text-xs text-[#44564C] space-y-2">
              <p className="font-semibold text-[#1E2522]">Included in this workspace:</p>
              <p>
                A standalone production-ready file named <code className="bg-[#EAE4D7] px-1.5 py-0.5 rounded text-[#223328] font-mono">alejandra-martinez-portfolio.html</code> has been generated in the workspace root.
              </p>
              <p>
                It includes all exact resume details, interactive appointment scheduler with the 4 strict time slots, language message switchers, experience and education streams, and clean neutral chic styling.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <a
                href="/alejandra-martinez-portfolio.html"
                download="alejandra-martinez-portfolio.html"
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#33463B] hover:bg-[#25352C] rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download .html File</span>
              </a>
              <button
                onClick={() => setShowCodeModal(false)}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-[#44564C] bg-white border border-[#DDD7CB] hover:bg-[#F2EFE9] rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
