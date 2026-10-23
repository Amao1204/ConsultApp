import React, { useState, useEffect } from 'react';
import { PageId, Consultant, CategoryId } from './types';
import { CONSULTANTS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BecomeConsultantModal } from './components/BecomeConsultantModal';
import { Toast, ToastMessage } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ConsultantProfilePage } from './pages/ConsultantProfilePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { ExplorePage } from './pages/ExplorePage';
import { BecomeConsultantPage } from './pages/BecomeConsultantPage';
import { ForBusinessesPage } from './pages/ForBusinessesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant>(CONSULTANTS[0]);
  const [becomeConsultantModalOpen, setBecomeConsultantModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Smooth scroll to top on navigation
  const handleNavigate = (page: PageId, category?: CategoryId) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewConsultant = (consultant: Consultant) => {
    setSelectedConsultant(consultant);
    setCurrentPage('consultant-profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (
    title: string,
    message: string,
    type: 'success' | 'info' | 'error' = 'info'
  ) => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, title, message, type };
    setToasts((prev) => [...prev, newToast]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Auth pages don't show regular global navbar and footer
  const isAuthPage =
    currentPage === 'sign-in' ||
    currentPage === 'sign-up' ||
    currentPage === 'forgot-password' ||
    currentPage === 'reset-password';

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-[#17202A] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Global Navigation Header (on non-auth pages) */}
      {!isAuthPage && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      {/* Dynamic Viewport Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onViewConsultant={handleViewConsultant}
            onOpenBecomeModal={() => setBecomeConsultantModalOpen(true)}
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage
            onNavigate={handleNavigate}
            onOpenBecomeModal={() => setBecomeConsultantModalOpen(true)}
          />
        )}

        {currentPage === 'features' && (
          <FeaturesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'explore' && (
          <ExplorePage
            initialCategory={selectedCategory}
            onNavigate={handleNavigate}
            onViewConsultant={handleViewConsultant}
          />
        )}

        {currentPage === 'become-consultant' && (
          <BecomeConsultantPage
            onNavigate={handleNavigate}
            onOpenModal={() => setBecomeConsultantModalOpen(true)}
          />
        )}

        {currentPage === 'for-businesses' && (
          <ForBusinessesPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenBecomeModal={() => setBecomeConsultantModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBecomeModal={() => setBecomeConsultantModalOpen(true)}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'consultant-profile' && selectedConsultant && (
          <ConsultantProfilePage
            consultant={selectedConsultant}
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'sign-in' && (
          <SignInPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'sign-up' && (
          <SignUpPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'forgot-password' && (
          <ForgotPasswordPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'reset-password' && (
          <ResetPasswordPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'terms' && (
          <TermsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer (on non-auth pages) */}
      {!isAuthPage && <Footer onNavigate={handleNavigate} />}

      {/* Become a Consultant Application Modal */}
      <BecomeConsultantModal
        isOpen={becomeConsultantModalOpen}
        onClose={() => setBecomeConsultantModalOpen(false)}
        onSuccess={(name) => {
          showToast(
            'Application Submitted',
            `Thank you, ${name}! Our verification desk will review your profile and reach out within 48 hours.`,
            'success'
          );
        }}
      />
    </div>
  );
}
