import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Features', page: 'features' },
    { label: 'Explore Consultants', page: 'explore' },
    { label: 'For Businesses', page: 'for-businesses' },
    { label: 'Become a Consultant', page: 'become-consultant' },
    { label: 'Pricing', page: 'pricing' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-250 ${
          isScrolled
            ? 'bg-[#FCFCFA]/95 backdrop-blur-md shadow-xs border-b border-[#E5E7EB] py-3'
            : 'bg-[#FCFCFA] border-b border-transparent py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              id="nav-logo-btn"
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#172B4D] flex items-center justify-center text-white font-bold text-lg tracking-tight group-hover:bg-[#2563EB] transition-colors shadow-xs">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-[#172B4D] leading-none">
                  Consult<span className="text-[#2563EB]">APP</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B] mt-0.5">
                  Expertise Marketplace
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    id={`nav-link-${link.page}`}
                    onClick={() => handleNav(link.page)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-[#2563EB] bg-[#EFF6FF] font-semibold'
                        : 'text-[#17202A] hover:text-[#2563EB] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                id="nav-signin-btn"
                onClick={() => handleNav('sign-in')}
                className="px-3.5 py-2 text-sm font-medium text-[#17202A] hover:text-[#2563EB] transition-colors cursor-pointer"
              >
                Sign In
              </button>

              <button
                id="nav-become-btn"
                onClick={() => handleNav('become-consultant')}
                className="hidden xl:inline-flex items-center text-sm font-medium text-[#172B4D] hover:text-[#2563EB] px-3 py-2 rounded-lg border border-[#E5E7EB] hover:border-[#2563EB]/40 bg-white transition-all cursor-pointer"
              >
                Become a Consultant
              </button>

              <button
                id="nav-get-started-btn"
                onClick={() => handleNav('sign-up')}
                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#17202A] hover:bg-[#EFF6FF] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#FCFCFA] shadow-2xl flex flex-col p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#172B4D] flex items-center justify-center text-white font-bold text-base">
                  C
                </div>
                <span className="font-bold text-lg text-[#172B4D]">
                  Consult<span className="text-[#2563EB]">APP</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-[#64748B] hover:bg-[#EFF6FF] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <div className="flex flex-col py-4 space-y-1">
              <button
                onClick={() => handleNav('home')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === 'home'
                    ? 'bg-[#EFF6FF] text-[#2563EB] font-semibold'
                    : 'text-[#17202A] hover:bg-slate-100'
                }`}
              >
                Home
              </button>
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                    currentPage === link.page
                      ? 'bg-[#EFF6FF] text-[#2563EB] font-semibold'
                      : 'text-[#17202A] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-1 border-t border-[#E5E7EB] mt-2">
                <span className="px-3 text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                  Company
                </span>
              </div>
              <button
                onClick={() => handleNav('about')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === 'about'
                    ? 'bg-[#EFF6FF] text-[#2563EB] font-semibold'
                    : 'text-[#17202A] hover:bg-slate-100'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNav('faq')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === 'faq'
                    ? 'bg-[#EFF6FF] text-[#2563EB] font-semibold'
                    : 'text-[#17202A] hover:bg-slate-100'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === 'contact'
                    ? 'bg-[#EFF6FF] text-[#2563EB] font-semibold'
                    : 'text-[#17202A] hover:bg-slate-100'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Bottom Mobile CTAs */}
            <div className="mt-auto pt-6 border-t border-[#E5E7EB] flex flex-col gap-3">
              <button
                onClick={() => handleNav('sign-in')}
                className="w-full py-2.5 text-center text-sm font-semibold text-[#17202A] border border-[#E5E7EB] rounded-xl hover:bg-slate-50 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => handleNav('sign-up')}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors"
              >
                Get Started
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#64748B] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Verified Expertise Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
