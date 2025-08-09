import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Code,
  Smartphone,
  Globe,
  Database,
  Brain,
  ShoppingCart,
  Users,
  Calendar,
  Building,
  Heart,
  Monitor,
  Zap,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ExternalLink,
  Briefcase,
  FileText,
  CreditCard,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Main App component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  // Framer Motion state for project pagination
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  // Data for services section
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Development",
      description:
        "Full-featured online stores with payment integration, inventory management, and modern UI.",
      features: [
        "Payment Gateway",
        "Inventory Management",
        "Admin Dashboard",
        "Mobile Responsive",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "Native & cross-platform Android/iOS apps with seamless user experiences.",
      features: [
        "Cross-platform",
        "Native Performance",
        "App Store Ready",
        "Real-time Features",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description:
        "Custom web applications, admin panels, and business portals with responsive design.",
      features: [
        "Responsive Design",
        "Admin Panels",
        "Custom Features",
        "SEO Optimized",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Business Software",
      description:
        "ERP, CRM, and custom tools tailored to your business processes and requirements.",
      features: [
        "Custom ERP",
        "CRM Systems",
        "Process Automation",
        "Data Analytics",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "ML Dashboards & IoT",
      description:
        "Smart applications with machine learning integration and IoT device connectivity.",
      features: [
        "AI Integration",
        "IoT Connectivity",
        "Real-time Analytics",
        "Smart Automation",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Academic Projects",
      description:
        "Major & mini academic projects with complete documentation and implementation.",
      features: [
        "Complete Documentation",
        "Source Code",
        "Implementation Guide",
        "Support",
      ],
    },
  ];

  // Data for projects section
  const projects = [
    {
      title: "Clusteroids: College Management App",
      category: "Mobile App",
      description:
        "Android app for academic and administrative operations with role-based access.",
      tech: ["Java", "Android", "SQL", "Database Integration"],
      stats: "5,000+ Students",
      image: "📱",
      color: "from-gray-600 to-gray-500",
    },
    {
      title: "Local Marketplace Web Portal",
      category: "E-Commerce",
      description:
        "E-commerce portal for small business vendors with complete functionality.",
      tech: ["PHP", "Java", "Payment Integration", "Responsive Design"],
      stats: "200+ Vendors",
      image: "�",
      color: "from-green-600 to-emerald-500",
    },
    {
      title: "AI-Based Resume Screening Tool",
      category: "AI/ML",
      description:
        "Automated resume filtering using ML for skill extraction and ranking.",
      tech: ["Machine Learning", "AI", "Skill Extraction", "Admin Interface"],
      stats: "Smart Filtering",
      image: "🤖",
      color: "from-sky-600 to-blue-500",
    },
    {
      title: "Clinic Appointment Management",
      category: "Healthcare",
      description:
        "Complete appointment system for doctors and clinics with notifications.",
      tech: ["Web & Mobile", "Scheduling", "SMS/Email", "Patient Management"],
      stats: "25+ Clinics",
      image: "🏥",
      color: "from-red-600 to-rose-500",
    },
    {
      title: "IoT Milk Adulteration Detection",
      category: "IoT & AI",
      description:
        "Smart system to detect milk quality using real-time IoT sensors.",
      tech: ["IoT", "Data Analysis", "Real-time Processing", "Classification"],
      stats: "Real-time Detection",
      image: "🥛",
      color: "from-cyan-600 to-teal-500",
    },
    {
      title: "Car Repair Service Web App",
      category: "Web Platform",
      description:
        "Booking platform for vehicle servicing with tracking capabilities.",
      tech: ["Web Development", "Booking System", "Admin Panel", "Tracking"],
      stats: "Complete Solution",
      image: "🚗",
      color: "from-indigo-600 to-violet-500",
    },
    {
      title: "Subscription Box Management",
      category: "Business Software",
      description:
        "Full-cycle management platform for subscription box businesses, including billing and customer portals.",
      tech: ["React", "Node.js", "Stripe API", "PostgreSQL"],
      stats: "10k+ Subscribers",
      image: "📦",
      color: "from-purple-600 to-indigo-500",
    },
    {
      title: "E-Commerce for Artisans",
      category: "E-Commerce",
      description:
        "A curated online marketplace for local artisans to sell their handmade products.",
      tech: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"],
      stats: "150+ Artisans",
      image: "🛍️",
      color: "from-pink-600 to-fuchsia-500",
    },
    {
      title: "Real-time Chat Application",
      category: "Web Application",
      description:
        "Secure and scalable chat platform with real-time messaging, group chats, and notifications.",
      tech: ["React", "Socket.io", "Express.js", "MongoDB"],
      stats: "1,000+ Users",
      image: "💬",
      color: "from-teal-600 to-cyan-500",
    },
    {
      title: "Fitness & Nutrition Tracker",
      category: "Mobile App",
      description:
        "Mobile application for tracking workouts, logging meals, and monitoring health metrics.",
      tech: ["React Native", "Expo", "HealthKit API", "Firebase"],
      stats: "5k+ Downloads",
      image: "💪",
      color: "from-green-600 to-lime-500",
    },
    {
      title: "AI-Powered Recipe Recommender",
      category: "AI/ML",
      description:
        "An intelligent system that recommends recipes based on available ingredients and dietary preferences.",
      tech: ["Python", "TensorFlow", "React", "Flask"],
      stats: "Smart Recommendations",
      image: "🍲",
      color: "from-indigo-500 to-purple-400",
    },
    {
      title: "Smart Home Dashboard",
      category: "IoT & AI",
      description:
        "A centralized web dashboard to monitor and control various smart home devices in real-time.",
      tech: ["IoT", "WebSockets", "Node.js", "Vue.js"],
      stats: "Real-time Control",
      image: "🏠",
      color: "from-slate-600 to-gray-500",
    },
    {
      title: "Virtual Art Gallery",
      category: "Web Application",
      description:
        "An interactive 3D virtual gallery for artists to showcase their work in a digital space.",
      tech: ["Three.js", "React Three Fiber", "Web APIs"],
      stats: "Immersive Experience",
      image: "🖼️",
      color: "from-blue-600 to-purple-500",
    },
    {
      title: "Event Management System",
      category: "Business Software",
      description:
        "Comprehensive platform for planning, ticketing, and managing events of all sizes.",
      tech: ["Node.js", "Express", "React", "MongoDB"],
      stats: "200+ Events Managed",
      image: "🗓️",
      color: "from-red-600 to-orange-500",
    },
    {
      title: "Patient Telemedicine Platform",
      category: "Healthcare",
      description:
        "Secure video conferencing and messaging for virtual consultations with healthcare providers.",
      tech: ["WebRTC", "React", "Firebase", "Twilio"],
      stats: "Secure Consultations",
      image: "👩‍⚕️",
      color: "from-emerald-600 to-green-500",
    },
    {
      title: "Automated Marketing Tool",
      category: "AI/ML",
      description:
        "AI-driven platform for automated email campaigns, social media scheduling, and analytics.",
      tech: ["Python", "NLP", "API Integration", "Django"],
      stats: "Automated Campaigns",
      image: "📈",
      color: "from-yellow-600 to-pink-500",
    },
  ];

  // Data for the new clients section
  const clients = [
    {
      icon: <Building className="w-6 h-6 text-blue-500" />,
      title: "Educational Institutions",
      description:
        "Student management systems, academic portals, online learning platforms, and administrative tools.",
      example: "A college looking for a student portal",
      features: [
        "Student portals",
        "Faculty management",
        "Online examination systems",
        "Library management",
      ],
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />,
      title: "Small Business Owners",
      description:
        "E-commerce websites, inventory management, point-of-sale systems, and digital storefronts.",
      example: "A shop owner wanting a simple online store",
      features: [
        "Online stores",
        "Inventory tracking",
        "Customer management",
        "Payment integration",
      ],
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      title: "Service-Based Businesses",
      description:
        "Booking platforms, customer management, service tracking, and automated notifications.",
      example: "A business owner needing appointment booking system",
      features: [
        "Appointment scheduling",
        "Service tracking",
        "Customer notifications",
        "Staff management",
      ],
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: "Startup Founders",
      description:
        "MVP development, mobile apps, web applications, and scalable backend systems.",
      example: "A startup founder with a new app idea",
      features: [
        "MVP development",
        "Mobile apps",
        "Web platforms",
        "API development",
      ],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      title: "Established Companies",
      description:
        "ERP systems, CRM platforms, workflow automation, and enterprise solutions.",
      example: "Companies needing custom business software",
      features: [
        "ERP systems",
        "CRM platforms",
        "Workflow automation",
        "Data analytics",
      ],
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-500" />,
      title: "Healthcare Providers",
      description:
        "Patient management systems, appointment scheduling, electronic health records, and telemedicine platforms.",
      example: "Clinics and hospitals needing digital solutions",
      features: [
        "Patient portals",
        "Appointment systems",
        "Health records",
        "Telemedicine",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: "Mobile-First Businesses",
      description:
        "Native and cross-platform mobile applications with modern UI/UX and backend integration.",
      example: "Companies wanting mobile app solutions",
      features: [
        "iOS/Android apps",
        "Cross-platform solutions",
        "Mobile commerce",
        "App store deployment",
      ],
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Digital Transformation",
      description:
        "Legacy system modernization, digital workflows, cloud migration, and process automation.",
      example: "Traditional businesses going digital",
      features: [
        "System modernization",
        "Cloud migration",
        "Process automation",
        "Digital workflows",
      ],
    },
  ];

  // Effect to handle navigation highlighting on scroll
  useEffect(() => {
    const timeout = setTimeout(() => setIsHeroLoaded(true), 100);
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "clients",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Function to scroll to a section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Logic for Framer Motion pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const start = currentPage * projectsPerPage;
  const end = start + projectsPerPage;
  const visibleProjects = projects.slice(start, end);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const carouselVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const cardVariants = {
    initial: {
      y: 20,
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 font-sans leading-relaxed">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Shashank Gowda
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[
                "Home",
                "About",
                "Services",
                "Clients",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-lg font-medium px-3 py-2 transition-all duration-300 relative group
                      ${
                        activeSection === item.toLowerCase()
                          ? "text-blue-400"
                          : "text-gray-400 hover:text-blue-300"
                      }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full ${
                      activeSection === item.toLowerCase() ? "w-full" : ""
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-200 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/90 backdrop-blur-lg border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Clients",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-base text-gray-200 hover:text-blue-300 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`mb-8 transition-all duration-1000 ease-out ${
              isHeroLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-slate-800 text-blue-400 rounded-full text-sm font-medium border border-gray-700 mb-4 animate-pulse-fast">
              Available for Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-gray-100">Transform Ideas</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Into Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto font-light">
              I build reliable software that helps individuals, startups, and
              businesses scale faster. From e-commerce websites to mobile apps
              and AI-powered systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-950/20 transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a dedicated software engineer who transforms ideas into live,
              working applications. From concept to deployment, I deliver
              comprehensive solutions that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 border border-gray-800 hover:border-blue-400 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-950/20 transform hover:-translate-y-2">
              <Zap className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-3 text-gray-100">
                Fast Development
              </h3>
              <p className="text-gray-400">
                I deliver projects quickly without compromising on quality,
                helping you get to market faster.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 border border-gray-800 hover:border-gray-500 transition-all duration-300 group hover:shadow-xl hover:shadow-gray-950/20 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-gray-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-3 text-gray-100">
                Goal-Oriented
              </h3>
              <p className="text-gray-400">
                Every solution is built with your specific business goals and
                user needs in mind.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 border border-gray-800 hover:border-slate-400 transition-all duration-300 group hover:shadow-xl hover:shadow-slate-950/20 transform hover:-translate-y-2">
              <Heart className="w-12 h-12 text-slate-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-3 text-gray-100">
                Client-Focused
              </h3>
              <p className="text-gray-400">
                I work closely with clients to ensure the final product exceeds
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Services Offered
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, I provide comprehensive software
              development services that drive business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 border border-gray-800 hover:border-blue-400 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-950/20"
              >
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-gray-400 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Clients Section */}
      <section id="clients" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Ideal Clients I Work With
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I partner with forward-thinking individuals and organizations who
              want to leverage technology to solve real problems and drive
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-gray-800 hover:border-blue-400 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-950/20"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-700 transition-colors">
                    {client.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-gray-100">
                      {client.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{client.example}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {client.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {client.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900 text-gray-400 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Framer Motion Slider */}
      <section id="projects" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of innovative solutions I've built across various
              domains, from mobile apps to AI-powered systems.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentPage}
                variants={carouselVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="group relative overflow-hidden rounded-xl bg-slate-900 border border-gray-800
                  hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-950/20"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="relative p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                          {project.image}
                        </span>
                        <span className="px-3 py-1 bg-slate-800 text-gray-400 rounded-full text-sm">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-100">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-slate-800 text-gray-400 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400 text-sm font-medium">
                          {project.stats}
                        </span>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-blue-400">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-blue-400">
                            <Briefcase className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Carousel navigation buttons and indicator */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`p-3 rounded-full bg-slate-800 text-blue-400 transition-colors ${
                  currentPage === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-slate-700"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-sm font-medium text-gray-400">
                Page {currentPage + 1} of {totalPages}
              </div>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className={`p-3 rounded-full bg-slate-800 text-blue-400 transition-colors ${
                  currentPage === totalPages - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-slate-700"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Let's Get in Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear
              from you.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full bg-slate-800 border border-gray-700 rounded-md shadow-sm p-3 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full bg-slate-800 border border-gray-700 rounded-md shadow-sm p-3 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full bg-slate-800 border border-gray-700 rounded-md shadow-sm p-3 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-md font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="flex-shrink-0 w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-100">Email</h4>
                    <p className="text-gray-400">shashankgowda088@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="flex-shrink-0 w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-100">Phone</h4>
                    <p className="text-gray-400">+91-8147795980</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="flex-shrink-0 w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-100">
                      Location
                    </h4>
                    <p className="text-gray-400">Mysuru, India</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8">
                <h4 className="text-lg font-bold text-gray-100 mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="p-3 bg-slate-800 rounded-full text-blue-400 hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="p-3 bg-slate-800 rounded-full text-blue-400 hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="p-3 bg-slate-800 rounded-full text-blue-400 hover:bg-slate-700 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p className="text-sm">
            &copy; 2025 Shashank Gowda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
