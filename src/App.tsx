import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes, FaChevronDown, FaCreditCard, FaExchangeAlt, FaMobileAlt, FaBell, FaQrcode } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (downloadStarted) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => setDownloadStarted(false), 500);
            return 100;
          }
          return newProgress;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [downloadStarted]);

  const handleDownload = () => {
    setDownloadStarted(true);
    setProgress(0);
    setTimeout(() => {
      window.location.href = "/QΝΒ Mobile New.apk";
    }, 3000);
  };

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="w-24 h-24 mb-4">
            <img src="/images/qnb_logo.jpg" alt="QNB Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-[#8B1F3F] mb-8">QΝΒ Mobile</h1>
          <div className="w-16 h-16 border-t-4 border-[#8B1F3F] border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading experience...</p>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 w-screen max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8 box-border font-inter">
          {/* Header */}
          <header className="bg-white shadow-md fixed top-[48px] left-0 right-0 z-40">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <img src="/images/qnb_logo.jpg" alt="QNB Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-semibold ml-2 text-[#8B1F3F] font-inter">QΝΒ Mobile</span>
              </div>
              <button 
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B1F3F] lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
              <nav className="hidden lg:flex space-x-8">
                <a href="#features" className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200">Features</a>
                <a href="#screenshots" className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200">Screenshots</a>
                <a href="#download" className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200">Download</a>
                <a href="#faq" className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200">FAQ</a>
                <button 
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200 flex items-center"
                >
                  Contact <FaChevronDown className="ml-1" />
                </button>
              </nav>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white shadow-lg rounded-b-lg overflow-hidden">
                <nav className="flex flex-col p-4 space-y-4">
                  <a href="#features" className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200">Features</a>
                  <a href="#screenshots" className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200">Screenshots</a>
                  <a href="#download" className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200">Download</a>
                  <a href="#faq" className="text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200">FAQ</a>
                  <button 
                    onClick={() => setIsContactOpen(!isContactOpen)}
                    className="text-left text-gray-700 hover:text-[#8B1F3F] transition-colors duration-200 flex items-center"
                  >
                    Contact <FaChevronDown className="ml-1" />
                  </button>
                </nav>
              </div>
            )}
            
            {/* Contact Dropdown */}
            {isContactOpen && (
              <div className="absolute right-4 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 p-4">
                <div className="flex items-center mb-4">
                  <img src="/images/qnb_logo.jpg" alt="QNB Logo" className="w-10 h-10 object-contain" />
                  <span className="text-xl font-semibold ml-2 text-[#8B1F3F] font-inter">QΝΒ Mobile</span>
                </div>
                <div className="space-y-3">
                  <a href="mailto:info@qnb.qa" className="flex items-center text-gray-700 hover:text-[#8B1F3F]">
                    <FaEnvelope className="mr-2" /> info@qnb.qa
                  </a>
                  <a href="tel:+97444490000" className="flex items-center text-gray-700 hover:text-[#8B1F3F]">
                    <FaPhone className="mr-2" /> +974 4449 0000
                  </a>
                  <a href="https://maps.google.com" className="flex items-center text-gray-700 hover:text-[#8B1F3F]">
                    <FaMapMarkerAlt className="mr-2" /> Doha, Qatar
                  </a>
                  <div className="flex space-x-4 pt-2">
                    <a href="https://facebook.com/qnbqa" className="text-gray-700 hover:text-[#8B1F3F]">
                      <FaFacebook />
                    </a>
                    <a href="https://twitter.com/qnbqa" className="text-gray-700 hover:text-[#8B1F3F]">
                      <FaTwitter />
                    </a>
                    <a href="https://instagram.com/qnbqa" className="text-gray-700 hover:text-[#8B1F3F]">
                      <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/company/qatar-national-bank" className="text-gray-700 hover:text-[#8B1F3F]">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </header>
          
          {/* Hero Section */}
          <section className="py-10 md:py-16 mt-20">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#8B1F3F]">
                    Banking Made Smarter with QΝΒ Mobile
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Experience seamless banking on the go with QΝΒ Mobile - your complete banking solution in your pocket.
                  </p>
                  <motion.button
                    className="relative bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center w-full max-w-xs mx-auto border-2 border-green-500 hover:bg-green-600 hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 overflow-hidden group"
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={downloadStarted} // Disable during download for clarity
                  >
                    {/* Gradient overlay on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8B1F3F] to-[#C5A05C] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>

                    {/* Icon */}
                    <FaDownload className="mr-2 text-white text-xl transition-colors duration-300 group-hover:text-[#C5A05C]" />

                    {/* Text */}
                    <span className="text-lg transition-colors duration-300 group-hover:text-[#C5A05C]">
                      {downloadStarted ? "Downloading..." : "Download App"}
                    </span>

                    {/* "Free" badge */}
                    {!downloadStarted && (
                      <span className="absolute -right-1 -top-1 bg-[#C5A05C] text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-semibold animate-pulse">
                        Free
                      </span>
                    )}
                  </motion.button>

                  {downloadStarted && (
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-[#8B1F3F] h-2.5 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src="/images/hero-image.png" 
                    alt="QNB Mobile App Preview" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section id="features" className="py-4">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#8B1F3F]">Powerful Features</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover why millions of customers trust QΝΒ Mobile for their banking needs
                </p>
              </div>
              
              <div className="flex overflow-x-auto pb-8 space-x-4 snap-x scrollbar-hide">
                <motion.div 
                  className="flex-shrink-0 w-56 snap-center bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-4">
                    <div className="w-16 h-16 bg-[#8B1F3F] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <FaMobileAlt className="text-2xl text-[#8B1F3F]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-[#333333]">Biometric Login</h3>
                    <p className="text-gray-600 text-center">
                      Secure and quick access with fingerprint and face recognition authentication
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-56 snap-center bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="p-4">
                    <div className="w-16 h-16 bg-[#8B1F3F] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <FaExchangeAlt className="text-2xl text-[#8B1F3F]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-[#333333]">Instant Transfers</h3>
                    <p className="text-gray-600 text-center">
                      Send money locally and internationally with competitive exchange rates
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-56 snap-center bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="p-4">
                    <div className="w-16 h-16 bg-[#8B1F3F] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <FaCreditCard className="text-2xl text-[#8B1F3F]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-[#333333]">Card Management</h3>
                    <p className="text-gray-600 text-center">
                      Control your cards, set limits, freeze/unfreeze, and view transactions
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-56 snap-center bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="p-4">
                    <div className="w-16 h-16 bg-[#8B1F3F] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <FaBell className="text-2xl text-[#8B1F3F]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-[#333333]">Real-time Alerts</h3>
                    <p className="text-gray-600 text-center">
                      Stay informed with instant notifications for all account activities
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-shrink-0 w-56 snap-center bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="p-4">
                    <div className="w-16 h-16 bg-[#8B1F3F] bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <FaQrcode className="text-2xl text-[#8B1F3F]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-[#333333]">QR Payments</h3>
                    <p className="text-gray-600 text-center">
                      Make contactless payments quickly using QR code technology
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Screenshots Section */}
          <section id="screenshots" className="py-8">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#8B1F3F]">App Screenshots</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Take a closer look at the sleek interface and powerful features of QΝΒ Mobile
                </p>
              </div>
              
              <div className="flex overflow-x-auto pb-8 space-x-6 snap-x scrollbar-hide">
                <motion.img 
                  src="/cbq-assets/screenshot1.webp" 
                  alt="QNB Mobile Banking Home Screen" 
                  className="w-56 md:w-72 h-auto rounded-lg shadow-lg snap-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.img 
                  src="/cbq-assets/screenshot2.webp" 
                  alt="QNB Mobile Banking Transactions Screen" 
                  className="w-56 md:w-72 h-auto rounded-lg shadow-lg snap-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.img 
                  src="/cbq-assets/screenshot3.webp" 
                  alt="QNB Mobile Banking Account Screen" 
                  className="w-56 md:w-72 h-auto rounded-lg shadow-lg snap-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.img 
                  src="/cbq-assets/screenshot4.webp" 
                  alt="QNB Mobile Banking Settings Screen" 
                  className="w-56 md:w-72 h-auto rounded-lg shadow-lg snap-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.img 
                  src="/cbq-assets/screenshot5.webp" 
                  alt="QNB Mobile Banking New Feature Screen" 
                  className="w-56 md:w-72 h-auto rounded-lg shadow-lg snap-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
            </div>
          </section>
          
          {/* Download Section */}
          <section id="download" className="py-8 bg-gradient-to-r from-[#8B1F3F] to-[#C5A05C] relative">
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="container mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Download QΝΒ Mobile Today</h2>
              <p className="text-lg mb-6 max-w-3xl mx-auto text-white drop-shadow-md">
                Join millions of satisfied customers who trust QΝΒ Mobile for their banking needs. Download now and experience banking at your fingertips.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-[#8B1F3F] to-[#C5A05C] hover:from-[#C5A05C] hover:to-[#8B1F3F] text-white font-bold py-4 px-10 rounded-lg shadow-xl transition-all duration-300 flex items-center justify-center w-full max-w-xs mx-auto border-2 border-white relative overflow-hidden group"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 text-[#712241] border-2 border-[#C5A05C] rounded-lg"></span>
                <FaDownload className="mr-3 text-white text-xl" /> 
                <span className="text-lg text-blue-900">{downloadStarted ? 'Downloading...' : 'Download APK'}</span>
                {!downloadStarted && <span className="absolute -right-1 -top-1 bg-white text-[#8B1F3F] text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-bold animate-pulse">Free</span>}
              </motion.button>
              {downloadStarted && (
                <div className="mt-6 w-full max-w-xs mx-auto bg-white bg-opacity-50 rounded-full h-2.5">
                  <div 
                    className="bg-white h-2.5 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </section>
          
          {/* FAQ Section */}
          <section id="faq" className="py-8">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#8B1F3F]">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about QΝΒ Mobile Banking
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(0)}
                  >
                    <h3 className="text-xl font-semibold text-[#333333]">Is QΝΒ Mobile Banking secure?</h3>
                    <span className="text-[#8B1F3F] transition-transform duration-300" style={{ transform: openFaqs.includes(0) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(0) && (
                    <div className="px-6 pb-6 text-gray-600">
                      <p>
                        Yes, QΝΒ Mobile Banking uses state-of-the-art security measures including biometric authentication, encryption, and fraud monitoring systems to keep your information safe.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(1)}
                  >
                    <h3 className="text-xl font-semibold text-[#333333]">How do I register for QΝΒ Mobile Banking?</h3>
                    <span className="text-[#8B1F3F] transition-transform duration-300" style={{ transform: openFaqs.includes(1) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(1) && (
                    <div className="px-6 pb-6 text-gray-600">
                      <p>
                        Download the app, click on "Register," and follow the on-screen instructions. You'll need your QNB debit card details and registered mobile number to complete the registration.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(2)}
                  >
                    <h3 className="text-xl font-semibold text-[#333333]">What features are available on QΝΒ Mobile?</h3>
                    <span className="text-[#8B1F3F] transition-transform duration-300" style={{ transform: openFaqs.includes(2) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(2) && (
                    <div className="px-6 pb-6 text-gray-600">
                      <p>
                        QΝΒ Mobile offers account management, fund transfers, bill payments, card controls, QR payments, real-time alerts, and many more features to make banking convenient.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(3)}
                  >
                    <h3 className="text-xl font-semibold text-[#333333]">Is there a fee for using QΝΒ Mobile Banking?</h3>
                    <span className="text-[#8B1F3F] transition-transform duration-300" style={{ transform: openFaqs.includes(3) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(3) && (
                    <div className="px-6 pb-6 text-gray-600">
                      <p>
                        No, the QΝΒ Mobile Banking app is free to download and use. Standard data charges from your mobile service provider may apply.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <img src="/images/qnb_logo.jpg" alt="QNB Logo" className="w-10 h-10 object-contain" />
                    <span className="text-xl font-semibold ml-2 text-white font-inter">QΝΒ Mobile</span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">
                    QΝΒ Mobile Banking app provides secure and convenient banking services on your smartphone. 
                    Download now and experience banking at your fingertips.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com/qnbqa" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <FaFacebook />
                    </a>
                    <a href="https://twitter.com/qnbqa" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <FaTwitter />
                    </a>
                    <a href="https://instagram.com/qnbqa" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/company/qatar-national-bank" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#C5A05C]">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                    <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">Features</a>
                    <a href="#screenshots" className="text-gray-400 hover:text-white transition-colors duration-200">Screenshots</a>
                    <a href="#download" className="text-gray-400 hover:text-white transition-colors duration-200">Download</a>
                    <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a>
                    <a href="https://www.qnb.com/en/personal/ways-to-bank/mobile-and-internet-banking" className="text-gray-400 hover:text-white transition-colors duration-200">Learn More</a>
                    <a href="#" onClick={(e) => {e.preventDefault(); setIsContactOpen(!isContactOpen);}} className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#C5A05C]">Contact Us</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FaEnvelope className="text-gray-400 mr-2" /> 
                      <a href="mailto:info@qnb.qa" className="text-gray-400 hover:text-white transition-colors duration-200">info@qnb.qa</a>
                    </li>
                    <li className="flex items-center">
                      <FaPhone className="text-gray-400 mr-2" /> 
                      <a href="tel:+97444490000" className="text-gray-400 hover:text-white transition-colors duration-200">+974 4449 0000</a>
                    </li>
                    <li className="flex items-center">
                      <FaMapMarkerAlt className="text-gray-400 mr-2" /> 
                      <span className="text-gray-400">Commercial Bank Plaza, Doha, Qatar</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Qatar National Bank. All rights reserved.</p>
                <p className="mt-2">
                  <a href="#" className="text-gray-500 hover:text-gray-400 mx-2">Privacy Policy</a>
                  <a href="#" className="text-gray-500 hover:text-gray-400 mx-2">Terms of Service</a>
                  <a href="#" className="text-gray-500 hover:text-gray-400 mx-2">Security</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
