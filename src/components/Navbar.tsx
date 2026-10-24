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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F8F4F0]/95 backdrop-blur-md shadow-2xs border-b border-[#E6DDE2] py-3'
            : 'bg-[#F8F4F0] border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              id="nav-logo-btn"
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 text-left focus-ring rounded-lg cursor-pointer group"
              aria-label="ConsultAPP Home"
            >
              <div className="w-9 h-9 rounded-xl bg-[#49283F] flex items-center justify-center text-[#F8F4F0] font-bold text-lg tracking-tight group-hover:bg-[#321B2C] transition-colors shadow-2xs">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-[#282329] leading-none">
                  Consult<span className="text-[#49283F]">APP</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#716873] mt-0.5">
                  Expertise Marketplace
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links — Zero pill discipline, clean typography */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    id={`nav-link-${link.page}`}
                    onClick={() => handleNav(link.page)}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                      isActive
                        ? 'text-[#49283F] font-semibold'
                        : 'text-[#282329] hover:text-[#49283F] hover:bg-[#F1E5EA]/40'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#49283F] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                id="nav-signin-btn"
                onClick={() => handleNav('sign-in')}
                className="px-3 py-2 text-sm font-medium text-[#282329] hover:text-[#49283F] transition-colors cursor-pointer focus-ring rounded-lg"
              >
                Sign In
              </button>

              <button
                id="nav-become-btn"
                onClick={() => handleNav('become-consultant')}
                className="hidden xl:inline-flex items-center text-sm font-medium text-[#49283F] hover:bg-[#F1E5EA] px-3.5 py-2 rounded-xl border border-[#E6DDE2] bg-white transition-all cursor-pointer shadow-2xs focus-ring"
              >
                Become a Consultant
              </button>

              <button
                id="nav-get-started-btn"
                onClick={() => handleNav('sign-up')}
                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 text-sm font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] active:bg-[#321B2C] rounded-xl shadow-xs transition-all cursor-pointer focus-ring"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#282329] hover:bg-[#F1E5EA] transition-colors focus-ring cursor-pointer"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#49283F]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 bg-[#321B2C]/40 backdrop-blur-xs lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#F8F4F0] shadow-xl flex flex-col p-6 overflow-y-auto border-l border-[#E6DDE2]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E6DDE2]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#49283F] flex items-center justify-center text-white font-bold text-base">
                  C
                </div>
                <span className="font-bold text-lg text-[#282329]">
                  Consult<span className="text-[#49283F]">APP</span>
                </span>
              </div>
              <button
                id="mobile-drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-[#716873] hover:text-[#49283F] hover:bg-[#F1E5EA]"
                aria-label="Close Navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation items */}
            <div className="py-6 space-y-1.5 flex-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    id={`mobile-nav-${link.page}`}
                    onClick={() => handleNav(link.page)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#F1E5EA] text-[#49283F] font-semibold'
                        : 'text-[#282329] hover:bg-white/80'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#49283F]" />}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-[#E6DDE2] space-y-2">
                <button
                  onClick={() => handleNav('about')}
                  className="w-full text-left px-3.5 py-2 rounded-lg text-sm text-[#716873] hover:text-[#282329]"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNav('faq')}
                  className="w-full text-left px-3.5 py-2 rounded-lg text-sm text-[#716873] hover:text-[#282329]"
                >
                  FAQ & Knowledge Base
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full text-left px-3.5 py-2 rounded-lg text-sm text-[#716873] hover:text-[#282329]"
                >
                  Contact Support
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E6DDE2] space-y-2.5">
              <button
                id="mobile-nav-signin-btn"
                onClick={() => handleNav('sign-in')}
                className="w-full py-2.5 px-4 text-center text-sm font-medium text-[#282329] bg-white hover:bg-[#F1E5EA] border border-[#E6DDE2] rounded-xl shadow-2xs transition-colors cursor-pointer"
              >
                Sign In
              </button>
              <button
                id="mobile-nav-signup-btn"
                onClick={() => handleNav('sign-up')}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-3 flex items-center justify-center gap-2 text-xs text-[#716873]">
                <ShieldCheck className="w-4 h-4 text-[#49283F]" />
                <span>Verified Experts & Escrow Security</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
